import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  const { slug } = await request.json();

  if (typeof slug !== "string") {
    return NextResponse.json({ error: "Missing product slug" }, { status: 400 });
  }

  const { data: product, error: productError } = await supabaseAdmin
    .from("storefront_products")
    .select("*")
    .eq("slug", slug)
    .eq("active", true)
    .maybeSingle();

  if (productError || !product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: product.currency,
          product_data: { name: product.name },
          unit_amount: product.price_cents,
        },
        quantity: 1,
      },
    ],
    success_url: `${siteUrl}/products/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/products/${product.slug}`,
  });

  const { error: insertError } = await supabaseAdmin.from("storefront_purchases").insert({
    product_id: product.id,
    email: "",
    stripe_session_id: session.id,
    amount_cents: product.price_cents,
    currency: product.currency,
    status: "pending",
  });

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  return NextResponse.json({ url: session.url });
}
