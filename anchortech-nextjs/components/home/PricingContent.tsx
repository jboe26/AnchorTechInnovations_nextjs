import PricingCard from "./PricingCard";
import SupportPlanCard from "./SupportPlanCard";
import { tiers, supportPlans } from "@/lib/data/pricing";

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

      <div className="mt-14 border-t border-muted/30 pt-14">
        <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-text sm:text-3xl">
          Ongoing support, month to month
        </h3>
        <p className="mt-2 max-w-2xl text-sm text-text/70">
          These are not tiers. They are different levels of ongoing
          relationship, and you can start or stop at any point.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {supportPlans.map((plan) => (
            <SupportPlanCard key={plan.id} {...plan} />
          ))}
        </div>
      </div>
    </>
  );
}
