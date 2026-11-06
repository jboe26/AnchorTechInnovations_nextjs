const paymentHelp = [
  "Split any build over 3 to 12 monthly payments",
  "10% off when paid in full at signing",
  "$100 reserve holds your quoted price for 30 days",
  "Phase 1 only start, add the rest when ready",
  "One pause on a monthly plan, no fee",
  "Seasonal start, first payment up to 60 days out",
  "Split it between two partners",
  "50/50 or milestone thirds still available",
];

const paymentMethods = [
  "Card",
  "ACH transfer",
  "Apple Pay",
  "Google Pay",
  "PayPal",
  "Venmo",
  "Cash App",
  "Zelle",
  "Check",
  "Cash",
];

export default function PayingForIt() {
  return (
    <>
      <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-surface sm:text-4xl">
        Paying for it
      </h2>
      <p className="mt-4 max-w-lg text-surface/70">
        Payment plans and payment help, built in. The price should never
        have to be the reason for a no.
      </p>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {paymentHelp.map((item) => (
          <li
            key={item}
            className="flex gap-2 rounded-lg border border-surface/20 bg-surface/5 px-4 py-3 text-sm text-surface/80"
          >
            <span className="text-accent-on-dark" aria-hidden="true">
              &#10003;
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-8 font-mono text-xs tracking-wider text-surface/60">
        Ways to pay
      </p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {paymentMethods.map((method) => (
          <li
            key={method}
            className="rounded-full border border-surface/25 px-4 py-1.5 text-sm font-semibold text-surface/85"
          >
            {method}
          </li>
        ))}
      </ul>
    </>
  );
}
