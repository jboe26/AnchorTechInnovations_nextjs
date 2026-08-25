import Section from "./Section";

const reasons = [
  {
    number: "01",
    title: "Direct access",
    description:
      "You talk to the person building your site, not a rep passing messages along.",
  },
  {
    number: "02",
    title: "No scope creep",
    description: "I build what's needed, not what pads an invoice.",
  },
  {
    number: "03",
    title: "Small-business context",
    description:
      "I understand budget and timeline constraints because I work within them too.",
  },
  {
    number: "04",
    title: "Right tools for the job",
    description:
      "I match the stack to what the project actually needs, not what's easiest for me.",
  },
];

export default function WhyWorkTogether() {
  return (
    <Section id="why" index={1} label="why work together" bg="light">
      <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-anchor-ink sm:text-4xl">
        Reasons to work with AnchorTech.
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {reasons.map((reason) => (
          <div
            key={reason.number}
            className="rounded-lg border border-anchor-slate/30 bg-white p-6 transition hover:border-anchor-accent/60"
          >
            <p className="font-mono text-xs tracking-wider text-anchor-accent">
              {reason.number}
            </p>
            <h3 className="mt-2 font-[family-name:var(--font-montserrat)] text-lg font-bold text-anchor-ink">
              {reason.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-anchor-ink/70">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
