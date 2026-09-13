import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const {
    slug,
    name,
    short_description,
    long_description,
    price_cents,
    currency,
    active,
    storage_path,
    file_label,
    version,
  } = body;

  if (
    typeof slug !== "string" ||
    typeof name !== "string" ||
    typeof short_description !== "string" ||
    typeof long_description !== "string" ||
    typeof price_cents !== "number" ||
    typeof storage_path !== "string" ||
    typeof file_label !== "string" ||
    typeof version !== "string"
  ) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from("storefront_products")
    .insert({
      slug,
      name,
      short_description,
      long_description,
      price_cents,
      currency: currency || "usd",
      active: active ?? true,
      storage_path,
      file_label,
      version,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ product: data });
}
