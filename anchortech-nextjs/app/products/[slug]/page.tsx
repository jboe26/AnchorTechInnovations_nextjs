import { notFound } from "next/navigation";
import Section from "@/components/home/Section";
import { getProductBySlug, formatPrice } from "@/lib/products";
import { productContent } from "@/lib/data/product-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found | AnchorTech Innovations" };
  }

  return {
    title: `${product.name} | AnchorTech Innovations`,
    description: product.short_description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const content = productContent[product.slug];
  const updatedDate = new Date(product.updated_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main>
      <section className="bg-anchor-paper text-anchor-ink">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center md:px-10 md:pt-32 md:pb-20">
          <p className="font-mono text-sm tracking-wide text-anchor-ink/70">
            AnchorTech Innovations // products / {product.slug}
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {product.name}
          </h1>
          {content && (
            <p className="mt-6 text-lg leading-relaxed text-anchor-ink/70">
              {content.tagline}
            </p>
          )}
        </div>
      </section>

      {/* Price, buy button, and refund policy come first so nothing
          load-bearing sits below the fold. */}
      <section className="bg-anchor-navy text-anchor-paper">
        <div className="mx-auto max-w-3xl px-6 py-12 md:px-10">
          <div className="rounded-lg border border-anchor-copper/40 bg-white/[0.05] p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <p className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-anchor-paper">
                {formatPrice(product.price_cents, product.currency)}
              </p>
              <p className="font-mono text-xs tracking-wider text-anchor-slate">
                {product.file_label}
              </p>
            </div>

            <button
              type="button"
              disabled
              className="mt-6 w-full rounded-md bg-anchor-copper px-6 py-3.5 font-semibold text-white opacity-60 transition"
            >
              Buy now (checkout coming soon)
            </button>

            {content && (
              <p className="mt-4 text-sm leading-relaxed text-anchor-paper/70">
                {content.refundPolicy}
              </p>
            )}
          </div>
        </div>
      </section>

      {content && (
        <Section id="whats-included" index={1} label="what's included" bg="light">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-anchor-ink sm:text-4xl">
            What&apos;s included
          </h2>
          <ul className="mt-8 space-y-3">
            {content.includes.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-lg border border-anchor-slate/30 bg-white px-4 py-3 text-sm leading-relaxed text-anchor-ink/80"
              >
                <span className="text-anchor-copper">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {content && (
        <Section id="who-its-for" index={2} label="who it's for" bg="dark">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight sm:text-4xl">
            Who it&apos;s for
          </h2>
          <ul className="mt-8 space-y-3 text-anchor-paper/80">
            {content.whoItsFor.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed sm:text-base">
                <span className="text-anchor-copper">&rarr;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section id="details" index={3} label="details" bg="light">
        <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-anchor-ink sm:text-4xl">
          Version and support
        </h2>
        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-xs tracking-wider text-anchor-slate">
              version
            </dt>
            <dd className="mt-1 text-anchor-ink/80">{product.version}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs tracking-wider text-anchor-slate">
              last updated
            </dt>
            <dd className="mt-1 text-anchor-ink/80">{updatedDate}</dd>
          </div>
        </dl>
        <p className="mt-8 text-anchor-ink/70">
          Have a question before you buy? Email me at{" "}
          <a
            href="mailto:joshboepple@anchortech.org"
            className="text-anchor-deep underline decoration-anchor-deep/40 underline-offset-4"
          >
            joshboepple@anchortech.org
          </a>{" "}
          and I'll get back to you.
        </p>
      </Section>
    </main>
  );
}
