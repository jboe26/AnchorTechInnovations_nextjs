import Link from "next/link";
import Section from "@/components/home/Section";

export const metadata = {
  title: "Terms of Use",
  description:
    "The terms governing use of anchortech.org and the AnchorTech Connect app.",
};

export default function Terms() {
  return (
    <main>
      <section className="bg-surface text-text">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-16 text-center md:px-10 md:pt-32 md:pb-20">
          <p className="font-mono text-sm tracking-wide text-text/70">
            AnchorTech Innovations // terms of use
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-4 font-mono text-sm text-muted">
            Last updated: September 16, 2026
          </p>
        </div>
      </section>

      <Section id="terms" index={1} label="terms of use" bg="light">
        <div className="max-w-3xl space-y-10 rounded-lg border border-muted/30 bg-white p-8 leading-relaxed text-text/80 sm:p-10">
          <section>
            <p>
              These Terms of Use (&ldquo;Terms&rdquo;) govern your use of
              anchortech.org, AnchorTech Connect (the &ldquo;App&rdquo;), and
              related services provided by AnchorTech Innovations LLC
              (&ldquo;AnchorTech,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;).
              By using this website or the App, you agree to these Terms.
              This page is split into two parts: one for the website, and
              one for the App.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-primary mb-4">
              Part 1: anchortech.org (this website)
            </h2>

            <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-text mb-2">
              Using the Site
            </h3>
            <p>
              You must provide accurate information when using the contact
              form or purchasing a digital product. You agree to use the
              site only for lawful purposes.
            </p>

            <h3 className="mt-6 font-[family-name:var(--font-montserrat)] text-lg font-bold text-text mb-2">
              Digital Products
            </h3>
            <p>
              Digital products purchased through the site are for your own
              use. Unless a product&rsquo;s listing says otherwise, you may
              not resell, redistribute, or share purchase access with
              others. Payment is processed by Stripe; a purchase is final
              once payment succeeds, but if something is broken or not as
              described, contact us and we will make it right.
            </p>

            <h3 className="mt-6 font-[family-name:var(--font-montserrat)] text-lg font-bold text-text mb-2">
              Intellectual Property
            </h3>
            <p>
              The content, design, code, and branding on anchortech.org
              belong to AnchorTech Innovations LLC unless otherwise noted.
              You may not copy or reuse it for your own commercial purposes
              without permission.
            </p>

            <h3 className="mt-6 font-[family-name:var(--font-montserrat)] text-lg font-bold text-text mb-2">
              Acceptable Use
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Do not use the site for any unlawful purpose</li>
              <li>Do not attempt to interfere with or disrupt the site or its underlying services</li>
              <li>Do not submit abusive, harassing, or fraudulent content through the contact form</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-primary mb-4">
              Part 2: AnchorTech Connect (the App)
            </h2>

            <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-text mb-2">
              Using the App
            </h3>
            <p>
              You must provide accurate information when booking an
              appointment or submitting a support request. You agree to use
              the App only for its intended purpose: scheduling appointments,
              communicating with AnchorTech, and accessing support resources.
            </p>

            <h3 className="mt-6 font-[family-name:var(--font-montserrat)] text-lg font-bold text-text mb-2">
              Appointments and Requests
            </h3>
            <p>
              Booking an appointment through the App is a request for a time
              slot, not a guaranteed confirmation until you receive
              confirmation from AnchorTech. After-hours requests are intended
              for genuinely time-sensitive issues and may not receive an
              immediate response.
            </p>

            <h3 className="mt-6 font-[family-name:var(--font-montserrat)] text-lg font-bold text-text mb-2">
              Acceptable Use
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Do not use the App for any unlawful purpose</li>
              <li>Do not attempt to interfere with or disrupt the App or its underlying services</li>
              <li>Do not attempt to access another user&rsquo;s booking or data</li>
              <li>Do not submit abusive, harassing, or fraudulent content through chat, FAQs, or booking notes</li>
            </ul>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-primary mb-3">
              Access
            </h2>
            <p>
              We may suspend or restrict access to the site or the App for
              violations of these Terms. You may stop using either at any
              time and request deletion of your data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-primary mb-3">
              Disclaimer &amp; Limitation of Liability
            </h2>
            <p>
              The site and the App are provided &ldquo;as is&rdquo; without
              warranties of any kind. AnchorTech is not liable for indirect,
              incidental, or consequential damages arising from your use of
              either, to the fullest extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-primary mb-3">
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of
              the site or the App after changes are posted constitutes
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-primary mb-3">
              Contact Us
            </h2>
            <p>
              Questions about these Terms can be sent to{" "}
              <a
                href="mailto:joshboepple@anchortech.org"
                className="font-semibold text-accent-strong underline decoration-accent-strong/40 underline-offset-4 transition hover:decoration-accent-strong"
              >
                joshboepple@anchortech.org
              </a>
              . See also our{" "}
              <Link
                href="/privacy"
                className="font-semibold text-accent-strong underline decoration-accent-strong/40 underline-offset-4 transition hover:decoration-accent-strong"
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
