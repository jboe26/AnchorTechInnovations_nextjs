import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Section from "@/components/home/Section";
import CTABanner from "@/components/home/CTABanner";
import { breadcrumbSchema } from "@/lib/breadcrumb-schema";

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://anchortech.org" },
  {
    name: "Mickey Herring Taxidermy",
    url: "https://anchortech.org/case-studies/mickey-herring-taxidermy",
  },
]);

export const metadata: Metadata = {
  title: "Mickey Herring Taxidermy case study",
  description:
    "How a taxidermy business went from a course project to the top-ranked taxidermist in the area: three rebuilds and continuous improvement.",
};

const metaItems = [
  {
    label: "Services",
    value: "Website design and rebuild",
  },
  {
    label: "Timeline",
    value: "Ongoing, started as a course project",
  },
  {
    label: "Platform",
    value: "Next.js, Tailwind CSS",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Started",
    description:
      "Built the first version as a plain HTML and CSS course project at Midlands Technical College in Columbia, SC.",
  },
  {
    step: "2",
    title: "Rebuilt",
    description:
      "Moved it to React, then to Next.js with Tailwind as my skills grew.",
  },
  {
    step: "3",
    title: "Refined",
    description:
      "Kept improving it over time. A site that gets better instead of going stale.",
  },
];

const results = [
  { number: "#1", label: "Top-ranked taxidermist in his area" },
  { number: "3", label: "Full rebuilds: HTML/CSS, React, Next.js" },
  { number: "Ongoing", label: "Improved continuously since day one" },
];

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Built for family, now number one in his area",
  description:
    "How a taxidermy business went from a course project to the top-ranked taxidermist in the area: three rebuilds and continuous improvement.",
  image: "https://anchortech.org/case-studies/mickey-herring-taxidermy.jpg",
  datePublished: "2026-10-16",
  author: {
    "@type": "Person",
    name: "Josh Boepple",
  },
  publisher: {
    "@type": "Organization",
    name: "AnchorTech Innovations",
    logo: {
      "@type": "ImageObject",
      url: "https://anchortech.org/logo2.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://anchortech.org/case-studies/mickey-herring-taxidermy",
  },
};

export default function MickeyHerringCaseStudy() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="bg-surface text-text">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 md:px-10 md:pt-32">
          <Link
            href="/#projects"
            className="font-mono text-sm tracking-wide text-text/70 transition hover:text-accent-strong"
          >
            &larr; All work
          </Link>

          <p className="mt-10 font-mono text-sm tracking-wide text-primary">
            Mickey Herring Taxidermy
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Built for family, now number one in his area
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text/70">
            My grandfather wanted something for his taxidermy business. I
            offered to build him a website, and he liked it immediately.
          </p>

          <div className="mt-12 flex flex-wrap gap-10 border-y border-muted/30 py-6">
            {metaItems.map((item) => (
              <div key={item.label}>
                <p className="text-xs text-text/60">{item.label}</p>
                <p className="mt-1 text-sm font-semibold text-text">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-muted/30 bg-white">
            <div className="flex gap-1.5 border-b border-muted/30 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted/30" />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/case-studies/mickey-herring-taxidermy.jpg"
                alt="Mickey Herring Taxidermy website"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Section id="situation" index={1} label="the situation" bg="light">
        <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-text">
          The situation
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-text/70">
          Mickey Herring is a skilled taxidermist whose business deserved
          better than word of mouth alone. He wanted something online for
          the shop, so I offered to build it. What started as a course
          project became the home of his business on the web.
        </p>
      </Section>

      <Section id="process" index={2} label="the process" bg="dark">
        <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-surface">
          The process
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {processSteps.map((item) => (
            <div key={item.step} className="border-t-2 border-accent-on-dark pt-4">
              <p className="text-sm text-surface/60">{item.step}</p>
              <h3 className="mt-2 font-[family-name:var(--font-montserrat)] text-lg font-bold text-surface">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-surface/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="what-changed" index={3} label="what changed" bg="light">
        <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-text">
          What changed
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-text/70">
          The site went from a plain HTML class project to a full
          Next.js build with a price list, gallery, and reviews, rebuilt
          twice and improved continuously along the way.
        </p>

        <div className="mt-10 grid gap-8 rounded-lg border border-muted/30 bg-white p-8 sm:grid-cols-3">
          {results.map((result) => (
            <div key={result.label}>
              <p className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-primary">
                {result.number}
              </p>
              <p className="mt-2 text-sm text-text/70">{result.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABanner />
    </main>
  );
}
