import { supabaseAdmin } from "@/lib/supabase/admin";

export type Product = {
  id: string;
  slug: string;
  name: string;
  short_description: string;
  long_description: string;
  price_cents: number;
  currency: string;
  active: boolean;
  storage_path: string;
  file_label: string;
  version: string;
  created_at: string;
  updated_at: string;
};

export async function getActiveProducts(): Promise<Product[]> {
  const { data, error } = await supabaseAdmin
    .from("storefront_products")
    .select("*")
    .eq("active", true)
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(`Failed to load products: ${error.message}`);
  }

  return data ?? [];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabaseAdmin
    .from("storefront_products")
    .select("*")
    .eq("slug", slug)
    .eq("active", true)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to load product "${slug}": ${error.message}`);
  }

  return data;
}

export function formatPrice(priceCents: number, currency: string): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(priceCents / 100);
}
