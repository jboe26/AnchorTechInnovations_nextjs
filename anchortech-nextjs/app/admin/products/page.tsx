import Link from "next/link";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { formatPrice } from "@/lib/products";
import LogoutButton from "@/components/admin/LogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const { data: products, error } = await supabaseAdmin
    .from("storefront_products")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(`Failed to load products: ${error.message}`);
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex items-center justify-between">
        <h1 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-anchor-ink">
          Products
        </h1>
        <div className="flex items-center gap-4">
          <Link
            href="/admin/products/new"
            className="rounded-md bg-anchor-deep px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Add product
          </Link>
          <LogoutButton />
        </div>
      </div>

      <div className="mt-8 divide-y divide-anchor-slate/20 rounded-lg border border-anchor-slate/30 bg-white">
        {(products ?? []).map((product) => (
          <div
            key={product.id}
            className="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
          >
            <div>
              <p className="font-semibold text-anchor-ink">
                {product.name}{" "}
                {!product.active && (
                  <span className="ml-2 rounded bg-anchor-slate/20 px-2 py-0.5 font-mono text-xs text-anchor-ink/70">
                    inactive
                  </span>
                )}
              </p>
              <p className="mt-1 font-mono text-xs text-anchor-ink/60">
                /products/{product.slug} &middot;{" "}
                {formatPrice(product.price_cents, product.currency)} &middot; v
                {product.version}
              </p>
            </div>
            <Link
              href={`/admin/products/${product.id}/edit`}
              className="font-mono text-sm text-anchor-deep underline decoration-anchor-deep/40 underline-offset-4"
            >
              edit
            </Link>
          </div>
        ))}
        {(!products || products.length === 0) && (
          <p className="px-5 py-6 text-sm text-anchor-ink/60">
            No products yet.
          </p>
        )}
      </div>
    </main>
  );
}
