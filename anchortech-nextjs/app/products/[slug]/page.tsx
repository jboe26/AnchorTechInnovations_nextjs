import { notFound } from "next/navigation";
import Section from "@/components/home/Section";
import { getProductBySlug, formatPrice } from "@/lib/products";
import { productContent } from "@/lib/data/product-content";
import BuyButton from "@/components/products/BuyButton";

// Prices and product details are edited through /admin and should show up
// immediately, not just after the next deploy.
export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  const ogTitle = `${product.name} | AnchorTech Innovations`;
  const url = `https://anchortech.org/products/${product.slug}`;

  return {
    title: product.name,
    description: product.short_description,
    openGraph: {
      title: ogTitle,
      description: product.short_description,
      url,
      images: [{ url: "/logo2.png", width: 512, height: 512, alt: "AnchorTech Innovations" }],
    },
    twitter: {
      title: ogTitle,
      description: product.short_description,
      images: ["/logo2.png"],
    },
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
      <section className="bg-surface text-text">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center md:px-10 md:pt-32 md:pb-20">
          <p className="font-mono text-sm tracking-wide text-text/70">
            AnchorTech Innovations // products / {product.slug}
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {product.name}
          </h1>
          {content && (
            <p className="mt-6 text-lg leading-relaxed text-text/70">
              {content.tagline}
            </p>
          )}
        </div>
      </section>

      {/* Price, buy button, and refund policy come first so nothing
          load-bearing sits below the fold. */}
      <section className="bg-surface-dark text-surface">
        <div className="mx-auto max-w-3xl px-6 py-12 md:px-10">
          <div className="rounded-lg border border-accent/40 bg-white/[0.05] p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <p className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-surface">
                {formatPrice(product.price_cents, product.currency)}
              </p>
              <p className="font-mono text-xs tracking-wider text-surface/60">
                {product.file_label}
              </p>
            </div>

            <BuyButton slug={product.slug} />

            {content && (
              <p className="mt-4 text-sm leading-relaxed text-surface/70">
                {content.refundPolicy}
              </p>
            )}
          </div>
        </div>
      </section>

      {content && (
        <Section id="whats-included" index={1} label="what's included" bg="light">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
            What&apos;s included
          </h2>
          <ul className="mt-8 space-y-3">
            {content.includes.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-lg border border-muted/30 bg-white px-4 py-3 text-sm leading-relaxed text-text/80"
              >
                <span className="text-accent-strong">&#10003;</span>
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
          <ul className="mt-8 space-y-3 text-surface/80">
            {content.whoItsFor.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed sm:text-base">
                <span className="text-accent-on-dark">&rarr;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section id="details" index={3} label="details" bg="light">
        <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
          Version and support
        </h2>
        <dl className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-xs tracking-wider text-muted">
              version
            </dt>
            <dd className="mt-1 text-text/80">{product.version}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs tracking-wider text-muted">
              last updated
            </dt>
            <dd className="mt-1 text-text/80">{updatedDate}</dd>
          </div>
        </dl>
        <p className="mt-8 text-text/70">
          Have a question before you buy? Email me at{" "}
          <a
            href="mailto:joshboepple@anchortech.org"
            className="font-semibold text-accent-strong underline decoration-accent-strong/40 underline-offset-4 transition hover:decoration-accent-strong"
          >
            joshboepple@anchortech.org
          </a>{" "}
          and I'll get back to you.
        </p>
      </Section>
    </main>
  );
}
