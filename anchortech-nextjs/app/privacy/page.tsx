import Section from "@/components/home/Section";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How AnchorTech Innovations collects, uses, and protects information across anchortech.org and the AnchorTech Connect app.",
};

export default function Privacy() {
  return (
    <main>
      <section className="bg-surface text-text">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center md:px-10 md:pt-32 md:pb-20">
          <p className="font-mono text-sm tracking-wide text-text/70">
            AnchorTech Innovations // privacy policy
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 font-mono text-sm text-muted">
            Last updated: September 16, 2026
          </p>
        </div>
      </section>

      <Section id="policy" index={1} label="privacy policy" bg="light">
        <div className="max-w-3xl space-y-10 rounded-lg border border-muted/30 bg-white p-8 leading-relaxed text-text/80 sm:p-10">
          <section>
            <p>
              This Privacy Policy explains how AnchorTech Innovations
              (&ldquo;AnchorTech,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
              collects, uses, and protects information when you use
              anchortech.org, AnchorTech Connect (the &ldquo;App&rdquo;), or
              our related services (collectively, the &ldquo;Services&rdquo;).
              It is split into two parts below: one for this website, and one
              for the App.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-primary mb-4">
              Part 1: anchortech.org (this website)
            </h2>

            <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-text mb-2">
              Information We Collect
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Contact form:</span> your
                name, email address, and message, submitted when you use the{" "}
                <a
                  href="/contact"
                  className="font-semibold text-accent-strong underline decoration-accent-strong/40 underline-offset-4 transition hover:decoration-accent-strong"
                >
                  contact form
                </a>
                . This is handled by Netlify Forms and used only to respond
                to you.
              </li>
              <li>
                <span className="font-semibold">Purchases:</span> if you buy
                a digital product, payment is processed directly by Stripe.
                We never see or store your full card number. We do store the
                purchase record itself (product, price, order status, and
                the email address Stripe provides us for delivery) so we can
                deliver your download and provide support if something goes
                wrong.
              </li>
            </ul>
            <p className="mt-3">
              We do not use analytics or advertising cookies, and we do not
              track you across other websites. The site does not require an
              account, and browsing it does not collect any personal
              information.
            </p>

            <h3 className="mt-6 font-[family-name:var(--font-montserrat)] text-lg font-bold text-text mb-2">
              How We Use It
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>To respond to messages sent through the contact form</li>
              <li>To process and deliver digital product purchases</li>
              <li>To provide support related to a purchase or inquiry</li>
            </ul>

            <h3 className="mt-6 font-[family-name:var(--font-montserrat)] text-lg font-bold text-text mb-2">
              How It Is Stored
            </h3>
            <p>
              Purchase records are stored using Supabase, a third-party
              database provider, on infrastructure they manage on our
              behalf. Contact form submissions are handled by Netlify. We do
              not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-primary mb-4">
              Part 2: AnchorTech Connect (the App)
            </h2>

            <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-text mb-2">
              Information We Collect
            </h3>
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
            </ul>
            <p className="mt-3">
              Chat messages with our in-app assistant are stored only on your
              device and are never sent to or stored on our servers.
            </p>
            <p className="mt-3">
              We do not collect your precise location, contacts, photos, or
              browsing history, and we do not use the App to serve
              third-party advertising.
            </p>

            <h3 className="mt-6 font-[family-name:var(--font-montserrat)] text-lg font-bold text-text mb-2">
              How We Use Information
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>To schedule and confirm appointments</li>
              <li>To send appointment reminders and service-related notifications</li>
              <li>To respond to support requests and questions</li>
              <li>To maintain the security and reliability of the Services</li>
            </ul>

            <h3 className="mt-6 font-[family-name:var(--font-montserrat)] text-lg font-bold text-text mb-2">
              How Information Is Stored
            </h3>
            <p>
              Booking and push notification data is stored using Supabase, a
              third-party database provider, on infrastructure they manage
              on our behalf. We do not sell your personal information to
              third parties.
            </p>
          </section>

          <section id="data-deletion">
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-primary mb-3">
              Request Deletion of Your Data
            </h2>
            <p>
              This applies to both anchortech.org and the AnchorTech Connect
              app. To request deletion of the data AnchorTech Innovations
              holds about you, email{" "}
              <a
                href="mailto:joshboepple@anchortech.org?subject=Data%20deletion%20request"
                className="font-semibold text-accent-strong underline decoration-accent-strong/40 underline-offset-4 transition hover:decoration-accent-strong"
              >
                joshboepple@anchortech.org
              </a>{" "}
              with the subject line &ldquo;Data deletion request&rdquo; and
              the name and/or email address associated with your request
              (whether that is a booking, a purchase, or a contact form
              message). We will confirm and complete the deletion within 30
              days.
            </p>
            <p className="mt-3">
              <span className="font-semibold">What gets deleted:</span> your
              name, email address, appointment/booking records, contact form
              messages, and purchase records stored in our database, along
              with any device push token associated with your account. We
              never store full card numbers, so there is nothing to delete
              on that front &mdash; Stripe handles that data under its own
              privacy policy.
            </p>
            <p className="mt-3">
              <span className="font-semibold">What is retained:</span> chat
              history is never sent to us in the first place &mdash; it lives
              only on your device and is deleted automatically when you
              delete a conversation or uninstall the app. We may retain
              minimal records (e.g. an anonymized log that a deletion request
              was made) as required for legal or accounting purposes.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-primary mb-3">
              Children&rsquo;s Privacy
            </h2>
            <p>
              The Services are not directed to children under 13, and we do
              not knowingly collect personal information from children under
              13.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-primary mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes
              will be posted on this page with an updated &ldquo;Last
              updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-primary mb-3">
              Contact Us
            </h2>
            <p>
              Questions about this policy or your data can be sent to{" "}
              <a
                href="mailto:joshboepple@anchortech.org"
                className="font-semibold text-accent-strong underline decoration-accent-strong/40 underline-offset-4 transition hover:decoration-accent-strong"
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
