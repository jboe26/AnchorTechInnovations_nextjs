import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { sendClassConfirmationEmail } from "@/lib/email";
import { getScheduledClass, directionsUrl } from "@/lib/data/classes";

const RATE_LIMIT_WINDOW_MINUTES = 2;

export async function POST(request: NextRequest) {
  const { name, email, classSlug, website } = await request.json();

  // Honeypot, same as the pricing inquiry form: a bot filling the
  // hidden field gets a fake success and nothing is recorded.
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true, outcome: "free" });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof classSlug !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const cls = getScheduledClass(classSlug);
  if (!cls) {
    return NextResponse.json({ error: "That class is not open for registration." }, { status: 404 });
  }

  const cleanEmail = email.trim().toLowerCase();
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const windowStart = new Date(
    Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000
  ).toISOString();

  const { data: recent } = await supabaseAdmin
    .from("class_registrations")
    .select("id")
    .eq("email", cleanEmail)
    .gte("created_at", windowStart)
    .limit(1)
    .maybeSingle();

  if (recent) {
    return NextResponse.json(
      { error: "Please wait a moment before submitting again." },
      { status: 429 }
    );
  }

  // Already registered for this class?
  const { data: duplicate } = await supabaseAdmin
    .from("class_registrations")
    .select("id, status")
    .eq("class_slug", classSlug)
    .eq("email", cleanEmail)
    .neq("status", "cancelled")
    .limit(1)
    .maybeSingle();

  if (duplicate) {
    return NextResponse.json(
      { error: "That email is already registered for this class." },
      { status: 409 }
    );
  }

  // Seat check against confirmed registrations.
  const { count: taken } = await supabaseAdmin
    .from("class_registrations")
    .select("id", { count: "exact", head: true })
    .eq("class_slug", classSlug)
    .in("status", ["confirmed_free", "paid"]);

  if ((taken ?? 0) >= cls.capacity) {
    return NextResponse.json(
      { error: "This class is full. Please pick another date or request this topic below." },
      { status: 409 }
    );
  }

  // The free first class: any earlier confirmed registration for this
  // email (free or paid) means this one is a paid registration. This
  // check stays server side only and is never described on the page.
  const { count: priorCount } = await supabaseAdmin
    .from("class_registrations")
    .select("id", { count: "exact", head: true })
    .eq("email", cleanEmail)
    .in("status", ["confirmed_free", "paid"]);

  const isFree = (priorCount ?? 0) === 0;

  const { data: inserted, error: insertError } = await supabaseAdmin
    .from("class_registrations")
    .insert({
      class_slug: cls.slug,
      class_title: cls.title,
      class_when: `${cls.dateLabel} · ${cls.timeLabel}`,
      class_where: `${cls.venue}${cls.room ? `, ${cls.room}` : ""}, ${cls.address}`,
      name: name.trim(),
      email: cleanEmail,
      status: isFree ? "confirmed_free" : "pending_payment",
      ip,
    })
    .select("id")
    .single();

  if (insertError || !inserted) {
    return NextResponse.json({ error: "Failed to record registration" }, { status: 500 });
  }

  if (isFree) {
    try {
      await sendClassConfirmationEmail({
        to: cleanEmail,
        name: name.trim(),
        classTitle: cls.title,
        dateLabel: cls.dateLabel,
        timeLabel: cls.timeLabel,
        venue: cls.venue,
        room: cls.room,
        address: cls.address,
        directions: directionsUrl(cls),
        paid: false,
      });
      await supabaseAdmin
        .from("class_registrations")
        .update({ confirmation_sent: true })
        .eq("id", inserted.id);
    } catch (err) {
      console.error("Failed to send class confirmation email:", err);
    }
    return NextResponse.json({ ok: true, outcome: "free" });
  }

  const paymentLink = process.env.STRIPE_CLASS_PAYMENT_LINK;
  if (!paymentLink) {
    return NextResponse.json(
      { error: "Payment is not set up yet. Please email joshboepple@anchortech.org." },
      { status: 500 }
    );
  }

  const separator = paymentLink.includes("?") ? "&" : "?";
  const paymentUrl =
    `${paymentLink}${separator}prefilled_email=${encodeURIComponent(cleanEmail)}` +
    `&client_reference_id=${inserted.id}`;

  return NextResponse.json({ ok: true, outcome: "payment", paymentUrl });
}
