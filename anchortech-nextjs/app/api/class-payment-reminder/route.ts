import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { sendClassPaymentReminderEmail } from "@/lib/email";

// Sends one quiet reminder to people whose class registration is still
// pending_payment a day later. Called daily by an external schedule with
// the shared secret in the x-reminder-secret header. Each registration
// gets at most one reminder, stamped in reminder_sent_at.
const REMINDER_AFTER_HOURS = 24;
const MAX_PER_RUN = 50;

export async function POST(request: NextRequest) {
  const secret = process.env.CLASS_REMINDER_SECRET;
  if (!secret || request.headers.get("x-reminder-secret") !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const paymentLink = process.env.STRIPE_CLASS_PAYMENT_LINK;
  if (!paymentLink) {
    return NextResponse.json(
      { error: "Payment link is not configured" },
      { status: 500 }
    );
  }

  const cutoff = new Date(
    Date.now() - REMINDER_AFTER_HOURS * 60 * 60 * 1000
  ).toISOString();

  const { data: pending, error } = await supabaseAdmin
    .from("class_registrations")
    .select("id, name, email, class_title, class_when, class_where")
    .eq("status", "pending_payment")
    .is("reminder_sent_at", null)
    .lt("created_at", cutoff)
    .order("created_at", { ascending: true })
    .limit(MAX_PER_RUN);

  if (error) {
    return NextResponse.json({ error: "Lookup failed" }, { status: 500 });
  }

  let sent = 0;
  for (const reg of pending ?? []) {
    const separator = paymentLink.includes("?") ? "&" : "?";
    const paymentUrl =
      `${paymentLink}${separator}prefilled_email=${encodeURIComponent(reg.email)}` +
      `&client_reference_id=${reg.id}`;
    try {
      await sendClassPaymentReminderEmail({
        to: reg.email,
        name: reg.name,
        classTitle: reg.class_title,
        classWhen: reg.class_when,
        classWhere: reg.class_where,
        paymentUrl,
      });
      await supabaseAdmin
        .from("class_registrations")
        .update({ reminder_sent_at: new Date().toISOString() })
        .eq("id", reg.id);
      sent += 1;
    } catch (err) {
      console.error("Failed to send class payment reminder:", err);
    }
  }

  return NextResponse.json({ ok: true, sent });
}
