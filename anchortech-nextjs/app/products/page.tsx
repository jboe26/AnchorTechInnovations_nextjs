import Section from "@/components/home/Section";
import ProductCard from "@/components/products/ProductCard";
import { getActiveProducts } from "@/lib/products";

export const metadata = {
  title: "Digital Products | AnchorTech Innovations",
  description:
    "Downloadable reference tools built for freelance web developers and SEO contractors.",
};

export default async function ProductsPage() {
  const products = await getActiveProducts();

  return (
    <main>
      <section className="bg-anchor-paper text-anchor-ink">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 text-center md:px-10 md:pt-32 md:pb-24">
          <p className="font-mono text-sm tracking-wide text-anchor-ink/70">
            AnchorTech Innovations // products
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Reference tools, not another course.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-anchor-ink/70">
            I build these for the same reason I build client sites: to save
            time on the parts of the job that shouldn&apos;t take as long as
            they do. Buy once, download instantly, use on every project.
          </p>
        </div>
      </section>

      <Section id="catalog" index={1} label="products" bg="light">
        {products.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <p className="text-anchor-ink/70">
            Nothing listed right now. Check back soon, or{" "}
            <a
              href="mailto:joshboepple@anchortech.org"
              className="text-anchor-deep underline decoration-anchor-deep/40 underline-offset-4"
            >
              email me
            </a>{" "}
            if there's a tool you'd like to see.
          </p>
        )}
      </Section>
    </main>
  );
}
