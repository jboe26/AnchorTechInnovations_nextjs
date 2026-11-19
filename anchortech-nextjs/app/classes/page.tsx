import Link from "next/link";
import Section from "@/components/home/Section";
import CTABanner from "@/components/home/CTABanner";
import TopicRequestForm from "@/components/classes/TopicRequestForm";
import { classTopics, scheduledClasses } from "@/lib/data/classes";
import { breadcrumbSchema } from "@/lib/breadcrumb-schema";

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://anchortech.org" },
  { name: "Classes", url: "https://anchortech.org/classes" },
]);

export const metadata = {
  title: "Technology Classes",
  description:
    "Friendly, hands-on technology classes for adults at community centers and libraries across the Carolinas. Your first class is free, then $15. Register online in under a minute.",
  openGraph: {
    title: "Technology Classes | AnchorTech Innovations",
    description:
      "Friendly, hands-on technology classes for adults. First class free, then $15. Bring your phone or tablet and your questions.",
    url: "https://anchortech.org/classes",
  },
  twitter: {
    title: "Technology Classes | AnchorTech Innovations",
    description:
      "Friendly, hands-on technology classes for adults. First class free, then $15.",
  },
};

export default function Classes() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="bg-surface text-text">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 text-center md:px-10 md:pt-32 md:pb-24">
          <p className="font-mono text-sm tracking-wide text-text/70">
            AnchorTech Innovations // classes
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Technology Classes for Everyone
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text/70">
            Friendly, hands-on technology classes at community centers and
            libraries across the Carolinas. Your first class is free. Register
            below with your email and you are in.
          </p>
        </div>
      </section>

      <Section id="upcoming" index={1} label="upcoming classes">
        <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-text">
          Upcoming classes
        </h2>
        {scheduledClasses.length === 0 ? (
          <div className="mt-8 rounded-md border border-muted/30 bg-white p-6">
            <p className="leading-relaxed text-text/80">
              New classes are being scheduled now with community centers and
              libraries across the area, and dates appear here as soon as they
              are set. Want a class near you? Request a topic below. When
              enough people in one place ask, that is the next class I
              schedule there.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid gap-5">
            {scheduledClasses.map((c) => (
              <div
                key={c.slug}
                className="flex flex-col justify-between gap-4 rounded-md border border-muted/30 border-l-4 border-l-primary bg-white p-6 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-text">
                    {c.title}
                  </h3>
                  <p className="mt-1 leading-relaxed text-text/70">
                    {c.venue} · {c.address}
                    <br />
                    {c.dateLabel} · {c.timeLabel}
                  </p>
                  <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold tracking-wide text-primary">
                    FIRST CLASS FREE · THEN $15
                  </span>
                </div>
                <Link
                  href={`/classes/${c.slug}`}
                  className="shrink-0 rounded-md bg-accent px-6 py-3 text-center font-[family-name:var(--font-montserrat)] text-base font-bold text-white transition hover:bg-accent-strong"
                >
                  Details &amp; Register
                </Link>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 rounded-md bg-surface p-6">
          <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-text">
            How the free first class works
          </h3>
          <p className="mt-2 leading-relaxed text-text/80">
            Your first class with AnchorTech is free. Just register below and
            the free class is applied automatically when you sign up, no card
            and no payment needed. After that, classes are $15 each, paid
            through a secure link at registration.
          </p>
        </div>
      </Section>

      <Section id="topics" index={2} label="class topics" bg="dark">
        <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight">
          What gets taught
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-surface/80">
          These are the starting points, not a limit. Every class is one hour,
          plain language, and hands on, with time for every question.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {classTopics.map((t) => (
            <div key={t.title} className="rounded-md bg-white/[0.05] p-6">
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-surface">
                {t.title}
              </h3>
              <p className="mt-2 leading-relaxed text-surface/80">{t.blurb}</p>
            </div>
          ))}
          <div className="rounded-md bg-accent p-6">
            <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-surface-dark">
              And more, built around what you ask about
            </h3>
            <p className="mt-2 leading-relaxed text-surface-dark/80">
              If a topic is not listed, ask for it in the form below. New
              classes get built from real requests, not from a fixed catalog.
            </p>
          </div>
        </div>
      </Section>

      <Section id="request" index={3} label="request a topic">
        <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-text">
          Do not see the topic you want?
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-text/70">
          Tell me what you want to learn and where you are. Requests shape the
          schedule directly.
        </p>
        <div className="mt-8 max-w-2xl rounded-md border border-muted/30 bg-white p-6">
          <TopicRequestForm />
        </div>
      </Section>

      <CTABanner />
    </main>
  );
}
