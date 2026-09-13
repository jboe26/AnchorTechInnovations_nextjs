import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  // Must read the raw body -- constructEvent needs the exact bytes Stripe
  // signed, not a re-serialized JSON object.
  const rawBody = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: `Signature verification failed: ${message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const { data: purchase, error: lookupError } = await supabaseAdmin
      .from("storefront_purchases")
      .select("*")
      .eq("stripe_session_id", session.id)
      .maybeSingle();

    if (lookupError || !purchase) {
      // No matching purchase row for this session -- nothing to do.
      return NextResponse.json({ received: true });
    }

    const downloadToken = crypto.randomBytes(24).toString("hex");

    // Conditional on status = "pending" so a retried/duplicate event can't
    // reprocess a purchase that's already been marked paid -- only the
    // first delivery actually updates anything, later ones are a no-op.
    const { data: updated, error: updateError } = await supabaseAdmin
      .from("storefront_purchases")
      .update({
        status: "paid",
        email: session.customer_details?.email ?? purchase.email,
        stripe_payment_intent_id:
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : (session.payment_intent?.id ?? null),
        download_token: downloadToken,
      })
      .eq("id", purchase.id)
      .eq("status", "pending")
      .select()
      .maybeSingle();

    if (updateError) {
      return NextResponse.json({ error: updateError.message }, { status: 500 });
    }

    // Delivery email is sent here in a later step, once lib/email.ts exists.
    // Only send it when `updated` is non-null (this event actually made the
    // pending -> paid transition), so a retried event never sends a
    // duplicate email.
  }

  return NextResponse.json({ received: true });
}
