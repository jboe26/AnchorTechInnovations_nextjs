import Link from "next/link";
import Section from "./Section";

export default function Pricing() {
  return (
    <Section id="pricing" index={4} label="pricing" bg="light">
      <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-anchor-ink sm:text-4xl">
        Pricing
      </h2>
      <p className="mt-4 max-w-lg text-anchor-ink/70">
        Sites start at $650, one-time. Ongoing partnerships and care plans
        are available once you&apos;re live.
      </p>
      <Link
        href="/pricing"
        className="mt-6 inline-block rounded-md bg-anchor-accent px-6 py-3 font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-anchor-accent"
      >
        See full pricing
      </Link>
    </Section>
  );
}
