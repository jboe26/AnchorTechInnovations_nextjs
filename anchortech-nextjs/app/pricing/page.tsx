import Link from "next/link";

const packages = [
  {
    title: "Anchor Foundation",
    price: "$650",
    type: "one-time",
    subtitle: "For those getting started",
    description:
      "A clean, intentional website that gives you a solid, editable foundation online — built on the platform that fits you best.",
    features: [
      "Custom 3-page website",
      "Built for easy editing",
      "Starter SEO setup",
      "1-month support + training",
      "Platform-flexible (WordPress, Squarespace, Wix, Shopify)",
    ],
  },
  {
    title: "Anchor Growth",
    price: "$1,350",
    type: "one-time",
    subtitle: "For those strengthening their identity",
    description:
      "A more complete online presence with refined structure, better flow, and tools that help you grow confidently.",
    features: [
      "Includes Anchor Foundation features",
      "Expanded 5-page website",
      "Branding + layout refinement",
      "Contact form + basic automations",
      "2-month support + training",
      "Platform-flexible",
    ],
  },
  {
    title: "Anchor Elevate",
    price: "$2,995",
    type: "one-time",
    subtitle: "For those stepping into their full potential",
    description:
      "A fully customized website with strategic structure, marketing tools, and analytics to support real growth.",
    features: [
      "Includes Anchor Growth features",
      "Fully customized 8-10 page website",
      "Template system for long-term consistency",
      "Email marketing integration",
      "Analytics dashboard + insights",
      "4-month support included",
      "Platform-flexible",
    ],
  },
  {
    title: "Anchor Alliance",
    price: "$599/mo",
    type: "recurring",
    subtitle: "For long-term partnership and ongoing support",
    description:
      "Ongoing website care, updates, and strategy — a long-term partnership built on clarity, trust, and continuous improvement.",
    features: [
      "Includes Anchor Elevate features",
      "Unlimited page updates",
      "Monthly maintenance + backups",
      "SEO improvements + competitor insights",
      "Client portal access",
      "Training materials",
      "Priority support",
      "Platform-flexible",
    ],
  },
];

const anchorCare = [
  {
    name: "AnchorCare Monthly",
    price: "$49/mo",
    features: [
      "Unlimited small edits (content, images, wording, tweaks)",
      "Monthly updates + backups",
      "Security + performance monitoring",
      "Priority response",
    ],
  },
  {
    name: "AnchorCare Yearly",
    price: "$429/year",
    features: [
      "Unlimited small edits",
      "Full yearly maintenance + backups",
      "Performance + SEO tune-ups",
      "Minor fixes throughout the year",
      "Optional 30-minute strategy call",
    ],
  },
];

const aLaCarte = [
  "Device setup (phones, tablets, laptops)",
  "Email or account troubleshooting",
  "WiFi and network help",
  "Smart home setup",
  "Website edits or fixes",
  "App or software setup",
  "Password and security cleanup",
  "1:1 tech lessons and training",
  "Digital organization (files, photos, cloud)",
  "Tech tune-ups for individuals and businesses",
];

export default function Pricing() {
  return (
    <main className="bg-[#e8e8e8] px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Service Packages</h1>
          <p className="text-gray-500 mt-2">
            Clear, scalable solutions for everyone. No gimmicks. No bull.
          </p>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {packages.map((pkg, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-[#3b6a96] font-bold text-xl">{pkg.title}</h2>
              <p className="text-3xl font-bold mt-1">{pkg.price}</p>
              <p className="text-sm text-gray-400 mb-2">
                {pkg.type === "recurring" ? "recurring" : "one-time"}
              </p>
              <h4 className="text-gray-500 text-sm font-semibold mb-2">
                {pkg.subtitle}
              </h4>
              <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {pkg.features.map((f, i) => (
                  <li key={i}>✓ {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* A La Carte */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-16">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Custom À La Carte Tech Help
          </h2>
          <p className="text-gray-500 text-sm mb-6 text-center">
            For the moments when you just need one thing done — simple, direct,
            and without committing to a full package.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
            {aLaCarte.map((item, idx) => (
              <li key={idx}>✓ {item}</li>
            ))}
          </ul>
          <p className="text-[#3b6a96] font-semibold text-sm mt-6 text-center">
            Most à la carte services start at $50. You'll always receive a clear
            quote before any work begins.
          </p>
        </div>

        {/* AnchorCare */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-2">
            AnchorCare™ Ongoing Support
          </h2>
          <p className="text-gray-500 text-sm text-center mb-8">
            When your included support ends, keep the momentum going.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {anchorCare.map((plan, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#3b6a96] font-bold text-lg">
                  {plan.name}
                </h3>
                <p className="text-2xl font-bold mt-1 mb-4">{plan.price}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {plan.features.map((f, i) => (
                    <li key={i}>✓ {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-500 mb-4">
            Not sure which package fits your needs?
          </p>
          <Link
            href="/contact"
            className="bg-[#3b6a96] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </main>
  );
}
