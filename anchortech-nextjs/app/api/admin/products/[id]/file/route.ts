import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const { data: product, error } = await supabaseAdmin
    .from("storefront_products")
    .select("storage_path")
    .eq("id", id)
    .maybeSingle();

  if (error || !product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const { data: signed, error: signError } = await supabaseAdmin.storage
    .from("product-files")
    .createSignedUrl(product.storage_path, 300);

  if (signError || !signed) {
    return NextResponse.json({ error: "Could not generate a link to the file" }, { status: 500 });
  }

  return NextResponse.redirect(signed.signedUrl);
}
