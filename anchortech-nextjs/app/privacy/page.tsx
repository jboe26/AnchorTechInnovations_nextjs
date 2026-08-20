import Section from "@/components/home/Section";

export default function Privacy() {
  return (
    <main>
      <section className="bg-anchor-paper text-anchor-ink">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center md:px-10 md:pt-32 md:pb-20">
          <p className="font-mono text-sm tracking-wide text-anchor-ink/70">
            AnchorTech Innovations // privacy policy
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 font-mono text-sm text-anchor-slate">
            Last updated: August 13, 2026
          </p>
        </div>
      </section>

      <Section id="policy" index={1} label="privacy policy" bg="light">
        <div className="max-w-3xl space-y-10 rounded-lg border border-anchor-slate/30 bg-white p-8 leading-relaxed text-anchor-ink/80 sm:p-10">
          <section>
            <p>
              This Privacy Policy explains how AnchorTech Innovations
              (&ldquo;AnchorTech,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
              collects, uses, and protects information when you use AnchorTech
              Connect (the &ldquo;App&rdquo;) or our related websites and
              services (collectively, the &ldquo;Services&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-deep mb-3">
              Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Booking information:</span>{" "}
                your name, email address, appointment dates and times, and
                any notes you provide when you schedule an appointment or
                submit an after-hours request. No account or password is
                required to use the App.
              </li>
              <li>
                <span className="font-semibold">Push notification data:</span>{" "}
                a device push token and platform (iOS/Android), used solely
                to deliver appointment reminders and updates to your device.
              </li>
              <li>
                <span className="font-semibold">Support messages:</span> the
                content of messages you send through in-app chat or FAQ
                features.
              </li>
            </ul>
            <p className="mt-3">
              We do not collect your precise location, contacts, photos, or
              browsing history, and we do not use the App to serve
              third-party advertising.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-deep mb-3">
              How We Use Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To schedule and confirm appointments</li>
              <li>To send appointment reminders and service-related notifications</li>
              <li>To respond to support requests and questions</li>
              <li>To maintain the security and reliability of the Services</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-deep mb-3">
              How Information Is Stored
            </h2>
            <p>
              Booking and messaging data is stored using Supabase, a
              third-party database provider, on infrastructure they manage
              on our behalf. We do not sell your personal information to
              third parties.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-deep mb-3">
              Your Choices
            </h2>
            <p>
              To request deletion of your booking information, or to ask any
              question about this policy, contact us at{" "}
              <a
                href="mailto:joshboepple@anchortech.org"
                className="font-semibold text-anchor-accent underline decoration-anchor-accent/40 underline-offset-4 transition hover:decoration-anchor-accent"
              >
                joshboepple@anchortech.org
              </a>
              . We will respond to deletion requests within a reasonable
              time.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-deep mb-3">
              Children&rsquo;s Privacy
            </h2>
            <p>
              The Services are not directed to children under 13, and we do
              not knowingly collect personal information from children under
              13.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-deep mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes
              will be posted on this page with an updated &ldquo;Last
              updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-deep mb-3">
              Contact Us
            </h2>
            <p>
              Questions about this policy or your data can be sent to{" "}
              <a
                href="mailto:joshboepple@anchortech.org"
                className="font-semibold text-anchor-accent underline decoration-anchor-accent/40 underline-offset-4 transition hover:decoration-anchor-accent"
              >
                joshboepple@anchortech.org
              </a>
              .
            </p>
          </section>
        </div>
      </Section>
    </main>
  );
}
