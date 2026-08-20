import Link from "next/link";
import Section from "@/components/home/Section";

export default function Terms() {
  return (
    <main>
      <section className="bg-anchor-paper text-anchor-ink">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center md:px-10 md:pt-32 md:pb-20">
          <p className="font-mono text-sm tracking-wide text-anchor-ink/70">
            AnchorTech Innovations // terms of use
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-4 font-mono text-sm text-anchor-slate">
            Last updated: August 13, 2026
          </p>
        </div>
      </section>

      <Section id="terms" index={1} label="terms of use" bg="light">
        <div className="max-w-3xl space-y-10 rounded-lg border border-anchor-slate/30 bg-white p-8 leading-relaxed text-anchor-ink/80 sm:p-10">
          <section>
            <p>
              These Terms of Use (&ldquo;Terms&rdquo;) govern your use of
              AnchorTech Connect (the &ldquo;App&rdquo;) and related
              websites and services provided by AnchorTech Innovations LLC
              (&ldquo;AnchorTech,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;).
              By using the App, you agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-deep mb-3">
              Using the App
            </h2>
            <p>
              You must provide accurate information when booking an
              appointment or submitting a support request. You agree to use
              the App only for its intended purpose: scheduling appointments,
              communicating with AnchorTech, and accessing support resources.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-deep mb-3">
              Appointments and Requests
            </h2>
            <p>
              Booking an appointment through the App is a request for a time
              slot, not a guaranteed confirmation until you receive
              confirmation from AnchorTech. After-hours requests are intended
              for genuinely time-sensitive issues and may not receive an
              immediate response.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-deep mb-3">
              Acceptable Use
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Do not use the App for any unlawful purpose</li>
              <li>Do not attempt to interfere with or disrupt the App or its underlying services</li>
              <li>Do not attempt to access another user&rsquo;s booking or data</li>
              <li>Do not submit abusive, harassing, or fraudulent content through chat, FAQs, or booking notes</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-deep mb-3">
              Access
            </h2>
            <p>
              We may suspend or restrict access to the App for violations of
              these Terms. You may stop using the App and request deletion of
              your booking data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-deep mb-3">
              Disclaimer &amp; Limitation of Liability
            </h2>
            <p>
              The App is provided &ldquo;as is&rdquo; without warranties of
              any kind. AnchorTech is not liable for indirect, incidental,
              or consequential damages arising from your use of the App, to
              the fullest extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-deep mb-3">
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of
              the App after changes are posted constitutes acceptance of the
              updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-anchor-deep mb-3">
              Contact Us
            </h2>
            <p>
              Questions about these Terms can be sent to{" "}
              <a
                href="mailto:joshboepple@anchortech.org"
                className="font-semibold text-anchor-accent underline decoration-anchor-accent/40 underline-offset-4 transition hover:decoration-anchor-accent"
              >
                joshboepple@anchortech.org
              </a>
              . See also our{" "}
              <Link
                href="/privacy"
                className="font-semibold text-anchor-accent underline decoration-anchor-accent/40 underline-offset-4 transition hover:decoration-anchor-accent"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>
        </div>
      </Section>
    </main>
  );
}
