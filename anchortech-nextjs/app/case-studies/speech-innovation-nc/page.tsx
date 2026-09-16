import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Section from "@/components/home/Section";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Speech Innovation NC case study",
  description:
    "How Speech Innovation NC went from no online presence to a live, fully branded business: logo, website, domain, hosting, and email built and launched in five months.",
};

const metaItems = [
  {
    label: "Services",
    value: "Branding, logo, website, email, hosting",
  },
  {
    label: "Timeline",
    value: "Aug – Dec 2025",
  },
  {
    label: "Platform",
    value: "React, Netlify, Google Workspace",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Brand",
    description:
      "Designed the logo and visual identity from scratch, before any of the site work started.",
  },
  {
    step: "2",
    title: "Build",
    description:
      "Built the site in React and set up a domain, Netlify hosting, and Google Workspace email.",
  },
  {
    step: "3",
    title: "Launch",
    description:
      "Connected everything end to end and handed off a business that was live and reachable.",
  },
];

const results = [
  { number: "0 → 1", label: "No site to live site" },
  { number: "5", label: "Pieces built: brand, site, hosting, domain, email" },
  { number: "5 mo", label: "Start to launch" },
];

export default function SpeechInnovationNCCaseStudy() {
  return (
    <main>
      <section className="bg-surface text-text">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 md:px-10 md:pt-32">
          <Link
            href="/#projects"
            className="font-mono text-sm tracking-wide text-text/70 transition hover:text-accent-strong"
          >
            &larr; All work
          </Link>

          <p className="mt-10 font-mono text-sm tracking-wide text-primary">
            Speech Innovation NC
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Starting a business online, from zero
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-text/70">
            No website, no logo, no email. Speech Innovation NC needed a
            full identity and online presence built from scratch, and
            launched fast.
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
            <div className="relative aspect-video">
              <Image
                src="/case-studies/speech-innovation-nc.png"
                alt="Speech Innovation NC website"
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
          Speech Innovation NC was starting from nothing online. No logo, no
          website, no business email. They needed a full identity and a
          working web presence before they could look credible to a single
          client.
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
          Speech Innovation NC went from having no online presence at all to
          a live site, a working domain, and a professional email address,
          all built and connected in one project.
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

      <Section id="quote" index={4} label="from the client" bg="dark">
        <div className="max-w-xl border-l-2 border-accent-on-dark pl-6">
          <p className="text-lg font-medium leading-relaxed text-surface">
            Client quote coming soon.
          </p>
          <p className="mt-3 text-sm text-surface/60">
            &mdash; Speech Innovation NC
          </p>
        </div>
      </Section>

      <CTABanner />
    </main>
  );
}
