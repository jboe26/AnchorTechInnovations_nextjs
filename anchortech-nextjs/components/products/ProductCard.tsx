import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

export default function ProductCard({ slug, name, short_description, price_cents, currency }: Product) {
  return (
    <Link
      href={`/products/${slug}`}
      className="block rounded-lg border border-muted/30 bg-white p-6 shadow-sm transition hover:border-accent/60 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
    >
      <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-primary">
        {name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-text/70">
        {short_description}
      </p>
      <p className="mt-4 font-mono text-sm font-semibold text-accent-strong">
        {formatPrice(price_cents, currency)}
      </p>
    </Link>
  );
}
