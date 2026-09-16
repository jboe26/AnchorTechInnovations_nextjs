import { NextRequest, NextResponse } from "next/server";
import { sendPricingInquiryEmails } from "@/lib/email";
import { supabaseAdmin } from "@/lib/supabase/admin";

const RATE_LIMIT_WINDOW_MINUTES = 2;

export async function POST(request: NextRequest) {
  const { name, email, planName, priceLabel, website } = await request.json();

  // Honeypot: a real visitor never sees or fills this field (hidden off
  // screen in the form). A bot filling it out gets a fake success response
  // so it doesn't learn the field is being checked, and nothing is sent.
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof planName !== "string" ||
    typeof priceLabel !== "string" ||
    !name.trim() ||
    !email.trim()
  ) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;
  const windowStart = new Date(
    Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000
  ).toISOString();

  const [{ data: recentByEmail }, { data: recentByIp }] = await Promise.all([
    supabaseAdmin
      .from("pricing_inquiries")
      .select("id")
      .eq("email", email)
      .gte("created_at", windowStart)
      .limit(1)
      .maybeSingle(),
    ip
      ? supabaseAdmin
          .from("pricing_inquiries")
          .select("id")
          .eq("ip", ip)
          .gte("created_at", windowStart)
          .limit(1)
          .maybeSingle()
      : Promise.resolve({ data: null }),
  ]);

  if (recentByEmail || recentByIp) {
    return NextResponse.json(
      { error: "Please wait a moment before submitting again." },
      { status: 429 }
    );
  }

  const { data: inserted, error: insertError } = await supabaseAdmin
    .from("pricing_inquiries")
    .insert({ name, email, plan_name: planName, price_label: priceLabel, ip })
    .select("id")
    .single();

  if (insertError || !inserted) {
    return NextResponse.json({ error: "Failed to record inquiry" }, { status: 500 });
  }

  // The inquiry is already saved above, so an email failure here doesn't
  // lose the lead -- it just means the email side needs a manual follow-up.
  try {
    await sendPricingInquiryEmails({ name, email, planName, priceLabel });
    await supabaseAdmin
      .from("pricing_inquiries")
      .update({ email_sent: true })
      .eq("id", inserted.id);
  } catch (err) {
    console.error("Failed to send pricing inquiry emails:", err);
  }

  return NextResponse.json({ ok: true });
}
