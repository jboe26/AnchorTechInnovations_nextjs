import Section from "@/components/home/Section";
import PricingContent from "@/components/home/PricingContent";
import CTABanner from "@/components/home/CTABanner";
import PricingInquiryForm from "@/components/home/PricingInquiryForm";
import { tiers, supportPlans } from "@/lib/data/pricing";
import { breadcrumbSchema } from "@/lib/breadcrumb-schema";

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://anchortech.org" },
  { name: "Pricing", url: "https://anchortech.org/pricing" },
]);

const parsePrice = (price: string) => Number(price.replace(/[^0-9.]/g, ""));

export const metadata = {
  title: "Pricing",
  description:
    "Clear pricing, no gimmicks. One-time website packages starting at $650, ongoing care plans, and a la carte tech help starting at $50.",
  openGraph: {
    title: "Pricing | AnchorTech Innovations",
    description:
      "Clear pricing, no gimmicks. One-time website packages starting at $650, ongoing care plans, and a la carte tech help starting at $50.",
    url: "https://anchortech.org/pricing",
  },
  twitter: {
    title: "Pricing | AnchorTech Innovations",
    description:
      "Clear pricing, no gimmicks. One-time website packages starting at $650, ongoing care plans, and a la carte tech help starting at $50.",
  },
};

const aLaCarte = [
  "Device setup (phones, tablets, laptops)",
  "Email or account troubleshooting",
  "WiFi and network help",
  "Smart home setup",
  "Website edits or fixes",
  "App or software setup",
  "Password and security cleanup",
  "1:1 tech lessons and training",
  "Digital organization (files, photos, cloud)",
  "Tech tune-ups for individuals and businesses",
];

export default function Pricing() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      ...tiers.map((tier, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: tier.title,
          description: tier.description,
          provider: {
            "@type": "Organization",
            name: "AnchorTech Innovations",
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: parsePrice(tier.price),
            url: "https://anchortech.org/pricing",
          },
        },
      })),
      ...supportPlans.map((plan, index) => ({
        "@type": "ListItem",
        position: tiers.length + index + 1,
        item: {
          "@type": "Service",
          name: plan.name,
          description: plan.description,
          provider: {
            "@type": "Organization",
            name: "AnchorTech Innovations",
          },
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: parsePrice(plan.price),
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: parsePrice(plan.price),
              priceCurrency: "USD",
              billingDuration: "P1M",
            },
            url: "https://anchortech.org/pricing",
          },
        },
      })),
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="bg-surface text-text">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 text-center md:px-10 md:pt-32 md:pb-24">
          <p className="font-mono text-sm tracking-wide text-text/70">
            AnchorTech Innovations // pricing
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Clear pricing. No gimmicks.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text/70">
            Pick a package for a one-time build, or a partnership for
            ongoing support. Every project starts with a clear quote before
            any work begins.
          </p>
        </div>
      </section>

      <Section id="pricing" index={1} label="pricing" bg="light">
        <PricingContent />
      </Section>

      <Section id="a-la-carte" index={2} label="a la carte" bg="light">
        <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
          Custom &agrave; la carte tech help
        </h2>
        <p className="mt-4 max-w-lg text-text/70">
          For the moments when you just need one thing done, simple,
          direct, and without committing to a full package.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {aLaCarte.map((item) => (
            <li
              key={item}
              className="flex gap-2 rounded-lg border border-muted/30 bg-white px-4 py-3 text-sm text-text/70"
            >
              <span className="text-accent-strong" aria-hidden="true">
                &#10003;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-sm text-primary">
          Most &agrave; la carte services start at $50. You&apos;ll always
          get a clear quote before any work begins.
        </p>
        <div className="mt-6 max-w-xs">
          <PricingInquiryForm
            planName="À la carte tech help"
            priceLabel="starts at $50"
            buttonLabel="Get a quote"
            buttonClassName="inline-block w-full rounded-md bg-accent px-6 py-3 text-center font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
          />
        </div>
      </Section>

      <CTABanner />
    </main>
  );
}
