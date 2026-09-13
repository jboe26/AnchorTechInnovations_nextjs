import Section from "@/components/home/Section";
import ProductCard from "@/components/products/ProductCard";
import { getActiveProducts } from "@/lib/products";

export const metadata = {
  title: "Digital Products | AnchorTech Innovations",
  description:
    "Templates and tools for freelancers, small businesses, and anyone getting organized.",
};

// Prices and product details are edited through /admin and should show up
// immediately, not just after the next deploy.
export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const products = await getActiveProducts();

  return (
    <main>
      <section className="bg-surface text-text">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 text-center md:px-10 md:pt-32 md:pb-24">
          <p className="font-mono text-sm tracking-wide text-text/70">
            AnchorTech Innovations // products
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Templates and tools, not another course.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text/70">
            I build these because I keep solving the same problems for myself
            and for clients. Buy once, download instantly, use as many times
            as you need.
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
          <p className="text-text/70">
            Nothing listed right now. Check back soon, or{" "}
            <a
              href="mailto:joshboepple@anchortech.org"
              className="font-semibold text-accent-strong underline decoration-accent-strong/40 underline-offset-4 transition hover:decoration-accent-strong"
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
