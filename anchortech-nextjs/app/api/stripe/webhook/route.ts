import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import type Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { sendDeliveryEmail, sendClassConfirmationEmail } from "@/lib/email";
import { getScheduledClass, directionsUrl } from "@/lib/data/classes";

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
      .select("*, storefront_products(name, version)")
      .eq("stripe_session_id", session.id)
      .maybeSingle();

    if (lookupError || !purchase) {
      // Not a storefront purchase. It may be a class registration paid
      // through the class payment link, which carries the registration
      // id as client_reference_id.
      const registrationId = session.client_reference_id;
      if (registrationId) {
        const { data: registration } = await supabaseAdmin
          .from("class_registrations")
          .select("*")
          .eq("id", registrationId)
          .maybeSingle();

        if (registration) {
          // Conditional on pending_payment so a retried event cannot
          // reprocess or resend the confirmation.
          const { data: updatedRegistration } = await supabaseAdmin
            .from("class_registrations")
            .update({ status: "paid", stripe_session_id: session.id })
            .eq("id", registration.id)
            .eq("status", "pending_payment")
            .select()
            .maybeSingle();

          if (updatedRegistration) {
            const cls = getScheduledClass(registration.class_slug);
            try {
              await sendClassConfirmationEmail({
                to: registration.email,
                name: registration.name,
                classTitle: registration.class_title,
                dateLabel: cls?.dateLabel ?? registration.class_when,
                timeLabel: cls?.timeLabel ?? "",
                venue: cls?.venue ?? registration.class_where,
                room: cls?.room,
                address: cls?.address ?? "",
                directions: cls ? directionsUrl(cls) : "https://anchortech.org/classes",
                paid: true,
              });
              await supabaseAdmin
                .from("class_registrations")
                .update({ confirmation_sent: true })
                .eq("id", registration.id);
            } catch (err) {
              console.error("Failed to send class confirmation email:", err);
            }
          }
        }
      }
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

    // Only send the email when `updated` is non-null (this event actually
    // made the pending -> paid transition), so a retried event never sends
    // a duplicate. A failure here doesn't fail the webhook -- the purchase
    // is already correctly marked paid regardless of email delivery.
    const product = purchase.storefront_products as
      | { name: string; version: string }
      | null;
    const email = session.customer_details?.email ?? purchase.email;

    if (updated && product && email) {
      try {
        await sendDeliveryEmail({
          to: email,
          productName: product.name,
          version: product.version,
          downloadUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/download/${downloadToken}`,
        });
      } catch (err) {
        console.error("Failed to send delivery email:", err);
      }
    }
  }

  return NextResponse.json({ received: true });
}
