import Section from "@/components/home/Section";
import PricingContent from "@/components/home/PricingContent";
import CTABanner from "@/components/home/CTABanner";

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
    <main>
      <section className="bg-anchor-paper text-anchor-ink">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 text-center md:px-10 md:pt-32 md:pb-24">
          <p className="font-mono text-sm tracking-wide text-anchor-ink/70">
            AnchorTech Innovations // pricing
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Clear pricing. No gimmicks.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-anchor-ink/70">
            Pick a package for a one-time build, or a partnership for
            ongoing support. Every project starts with a clear quote before
            any work begins.
          </p>
        </div>
      </section>

      <Section id="pricing" index={1} label="pricing" bg="light">
        <PricingContent />
      </Section>

      <Section id="a-la-carte" index={2} label="a la carte" bg="light">
        <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-anchor-ink sm:text-4xl">
          Custom &agrave; la carte tech help
        </h2>
        <p className="mt-4 max-w-lg text-anchor-ink/70">
          For the moments when you just need one thing done, simple,
          direct, and without committing to a full package.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {aLaCarte.map((item) => (
            <li
              key={item}
              className="flex gap-2 rounded-lg border border-anchor-slate/30 bg-white px-4 py-3 text-sm text-anchor-ink/70"
            >
              <span className="text-anchor-accent">&#10003;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-sm text-anchor-deep">
          Most &agrave; la carte services start at $50. You&apos;ll always
          get a clear quote before any work begins.
        </p>
      </Section>

      <CTABanner />
    </main>
  );
}
