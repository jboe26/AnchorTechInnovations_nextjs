import Section from "@/components/home/Section";
import ContactForm from "@/components/ContactForm";
import { breadcrumbSchema } from "@/lib/breadcrumb-schema";

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://anchortech.org" },
  { name: "Contact", url: "https://anchortech.org/contact" },
]);

export const metadata = {
  title: "Contact",
  description:
    "Start the conversation. Share a bit about what you need, and get a clear quote before any work begins.",
  openGraph: {
    title: "Contact | AnchorTech Innovations",
    description:
      "Start the conversation. Share a bit about what you need, and get a clear quote before any work begins.",
    url: "https://anchortech.org/contact",
  },
  twitter: {
    title: "Contact | AnchorTech Innovations",
    description:
      "Start the conversation. Share a bit about what you need, and get a clear quote before any work begins.",
  },
};

export default function Contact() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <section className="bg-surface text-text">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 text-center md:px-10 md:pt-32 md:pb-24">
          <p className="font-mono text-sm tracking-wide text-text/70">
            AnchorTech Innovations // contact
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Start the conversation.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text/70">
            Every project starts with a simple conversation. Share a bit
            about what you need, and I&apos;ll walk you through how
            AnchorTech can help without the overwhelm.
          </p>
        </div>
      </section>

      <Section id="get-in-touch" index={1} label="get in touch" bg="dark">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
          {/* Contact Info */}
          <div className="space-y-6 rounded-lg border border-muted/30 bg-white/[0.05] p-6 h-fit">
            <div>
              <p className="font-mono text-xs tracking-wider text-muted">
                email
              </p>
              <a
                href="mailto:joshboepple@anchortech.org"
                className="mt-1 inline-block font-semibold text-accent-strong underline decoration-accent-strong/40 underline-offset-4 transition hover:decoration-accent-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong"
              >
                joshboepple@anchortech.org
              </a>
            </div>
            <div>
              <p className="font-mono text-xs tracking-wider text-muted">
                location
              </p>
              <p className="mt-1 text-surface/80">
                Pineville, NC, serving the greater Charlotte area
              </p>
            </div>
            <div>
              <p className="font-mono text-xs tracking-wider text-muted">
                availability
              </p>
              <p className="mt-1 text-surface/80">
                Open to freelance projects, consulting, and ongoing
                partnerships.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-lg border border-muted/30 bg-white/[0.05] p-6 sm:p-8">
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-surface">
              Send a message
            </h2>
            <p className="mt-2 text-sm text-surface/70">
              I reply within one business day.
            </p>
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section id="what-next" index={2} label="what happens next" bg="light">
        <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
          What happens next
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <div className="rounded-lg border border-muted/40 bg-white p-6">
            <p className="font-mono text-sm font-bold text-accent">01</p>
            <h3 className="mt-3 font-[family-name:var(--font-montserrat)] text-lg font-bold text-text">
              You reach out
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text/70">
              Tell me about your project in the form above.
            </p>
          </div>
          <div className="rounded-lg border border-muted/40 bg-white p-6">
            <p className="font-mono text-sm font-bold text-accent">02</p>
            <h3 className="mt-3 font-[family-name:var(--font-montserrat)] text-lg font-bold text-text">
              Short call
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text/70">
              We talk through what you need. No pressure, no pitch.
            </p>
          </div>
          <div className="rounded-lg border border-muted/40 bg-white p-6">
            <p className="font-mono text-sm font-bold text-accent">03</p>
            <h3 className="mt-3 font-[family-name:var(--font-montserrat)] text-lg font-bold text-text">
              Clear quote
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text/70">
              You get upfront pricing before any work begins.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
