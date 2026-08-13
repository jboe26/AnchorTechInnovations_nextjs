export default function Terms() {
  return (
    <main className="bg-[#e8e8e8] min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Terms of Use</h1>
          <p className="text-gray-500 mt-3">Last updated: August 13, 2026</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8 text-gray-700 leading-relaxed">
          <section>
            <p>
              These Terms of Use (&ldquo;Terms&rdquo;) govern your use of
              AnchorTech Connect (the &ldquo;App&rdquo;) and related
              websites and services provided by AnchorTech Innovations LLC
              (&ldquo;AnchorTech,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;).
              By creating an account or using the App, you agree to these
              Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3b6a96] mb-3">
              Using the App
            </h2>
            <p>
              You must provide accurate information when creating an account
              and are responsible for keeping your login credentials secure.
              You agree to use the App only for its intended purpose:
              scheduling appointments, communicating with AnchorTech, and
              accessing support resources.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3b6a96] mb-3">
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
            <h2 className="text-xl font-bold text-[#3b6a96] mb-3">
              Acceptable Use
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Do not use the App for any unlawful purpose</li>
              <li>Do not attempt to interfere with or disrupt the App or its underlying services</li>
              <li>Do not attempt to access another user&rsquo;s account or data</li>
              <li>Do not submit abusive, harassing, or fraudulent content through chat, FAQs, or booking notes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3b6a96] mb-3">
              Account Termination
            </h2>
            <p>
              We may suspend or terminate access to the App for violations of
              these Terms. You may stop using the App and request deletion of
              your account at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3b6a96] mb-3">
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
            <h2 className="text-xl font-bold text-[#3b6a96] mb-3">
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of
              the App after changes are posted constitutes acceptance of the
              updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3b6a96] mb-3">
              Contact Us
            </h2>
            <p>
              Questions about these Terms can be sent to{" "}
              <a
                href="mailto:joshboepple@anchortech.org"
                className="text-[#3b6a96] font-semibold"
              >
                joshboepple@anchortech.org
              </a>
              . See also our{" "}
              <a href="/privacy" className="text-[#3b6a96] font-semibold">
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
