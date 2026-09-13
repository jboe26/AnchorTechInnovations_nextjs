import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

const MAX_DOWNLOADS = 20;
const RATE_LIMIT_SECONDS = 60;
const SIGNED_URL_EXPIRES_IN = 300;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  const { token } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const { data: purchase, error } = await supabaseAdmin
    .from("storefront_purchases")
    .select("*, storefront_products(storage_path)")
    .eq("download_token", token)
    .maybeSingle();

  if (error || !purchase || purchase.status !== "paid") {
    return NextResponse.redirect(`${siteUrl}/products/download-issue?reason=invalid`);
  }

  if (purchase.download_count >= MAX_DOWNLOADS) {
    return NextResponse.redirect(`${siteUrl}/products/download-issue?reason=limit`);
  }

  if (purchase.last_download_at) {
    const secondsSinceLast =
      (Date.now() - new Date(purchase.last_download_at).getTime()) / 1000;
    if (secondsSinceLast < RATE_LIMIT_SECONDS) {
      return NextResponse.redirect(`${siteUrl}/products/download-issue?reason=rate`);
    }
  }

  const product = purchase.storefront_products as { storage_path: string } | null;
  if (!product) {
    return NextResponse.redirect(`${siteUrl}/products/download-issue?reason=invalid`);
  }

  const { data: signed, error: signError } = await supabaseAdmin.storage
    .from("product-files")
    .createSignedUrl(product.storage_path, SIGNED_URL_EXPIRES_IN);

  if (signError || !signed) {
    return NextResponse.redirect(`${siteUrl}/products/download-issue?reason=invalid`);
  }

  await supabaseAdmin
    .from("storefront_purchases")
    .update({
      download_count: purchase.download_count + 1,
      last_download_at: new Date().toISOString(),
    })
    .eq("id", purchase.id);

  return NextResponse.redirect(signed.signedUrl);
}
