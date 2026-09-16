import Section from "@/components/home/Section";
import ContactForm from "@/components/ContactForm";

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
            <ContactForm />
          </div>
        </div>
      </Section>
    </main>
  );
}
