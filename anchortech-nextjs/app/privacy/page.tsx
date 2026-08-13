export default function Privacy() {
  return (
    <main className="bg-[#e8e8e8] min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-gray-500 mt-3">Last updated: August 13, 2026</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8 text-gray-700 leading-relaxed">
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
            <h2 className="text-xl font-bold text-[#3b6a96] mb-3">
              Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-semibold">Account information:</span>{" "}
                your name, email address, and password when you create an
                account or sign in.
              </li>
              <li>
                <span className="font-semibold">Booking information:</span>{" "}
                appointment dates, times, and any notes you provide when you
                schedule or manage a booking.
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
            <h2 className="text-xl font-bold text-[#3b6a96] mb-3">
              How We Use Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To create and secure your account</li>
              <li>To schedule, confirm, reschedule, or cancel appointments</li>
              <li>To send appointment reminders and service-related notifications</li>
              <li>To respond to support requests and questions</li>
              <li>To maintain the security and reliability of the Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3b6a96] mb-3">
              How Information Is Stored
            </h2>
            <p>
              Account, booking, and messaging data is stored using Supabase,
              a third-party database and authentication provider, on
              infrastructure they manage on our behalf. We do not sell your
              personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3b6a96] mb-3">
              Your Choices
            </h2>
            <p>
              You can update your account information from within the App at
              any time. To request deletion of your account and associated
              data, or to ask any question about this policy, contact us at{" "}
              <a
                href="mailto:joshboepple@anchortech.org"
                className="text-[#3b6a96] font-semibold"
              >
                joshboepple@anchortech.org
              </a>
              . We will respond to deletion requests within a reasonable
              time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3b6a96] mb-3">
              Children&rsquo;s Privacy
            </h2>
            <p>
              The Services are not directed to children under 13, and we do
              not knowingly collect personal information from children under
              13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3b6a96] mb-3">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes
              will be posted on this page with an updated &ldquo;Last
              updated&rdquo; date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#3b6a96] mb-3">
              Contact Us
            </h2>
            <p>
              Questions about this policy or your data can be sent to{" "}
              <a
                href="mailto:joshboepple@anchortech.org"
                className="text-[#3b6a96] font-semibold"
              >
                joshboepple@anchortech.org
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
