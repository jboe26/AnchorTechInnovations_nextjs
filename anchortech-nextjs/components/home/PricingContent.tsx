import PricingCard from "./PricingCard";
import { tiers, alliance, anchorCare } from "@/lib/data/pricing";

export default function PricingContent() {
  return (
    <>
      <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
        Pricing
      </h2>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <PricingCard key={tier.title} {...tier} />
        ))}
      </div>

      {/* Alliance: distinct partnership treatment, not a fourth tier */}
      <div className="mt-10 border-t border-muted/30 pt-10">
        <p className="font-mono text-xs tracking-wider text-text/70">
          not a tier, a different kind of relationship
        </p>
        <div className="mt-4">
          <PricingCard {...alliance} />
        </div>
      </div>

      {/* AnchorCare: retainer add-on underneath */}
      <div className="mt-14">
        <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-text">
          AnchorCare&trade; ongoing support
        </h3>
        <p className="mt-1 text-sm text-text/70">
          When your included support ends, keep the momentum going.
        </p>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {anchorCare.map((plan) => (
            <div
              key={plan.name}
              className="rounded-lg border border-muted/30 bg-white p-6 shadow-sm"
            >
              <h4 className="font-mono text-xs tracking-wider text-text/70">
                {plan.name}
              </h4>
              <p className="mt-2 font-[family-name:var(--font-montserrat)] text-2xl font-extrabold text-text">
                {plan.price}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-text/70">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-accent">&#10003;</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
