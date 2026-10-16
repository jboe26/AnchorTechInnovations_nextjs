import Section from "./Section";

const steps = [
  {
    n: "01",
    title: "Tell me about your project",
    description: "A short call. You talk, I listen.",
  },
  {
    n: "02",
    title: "I design and build it",
    description: "Direct access to the person writing the code.",
  },
  {
    n: "03",
    title: "You launch and grow",
    description: "Clear handoff, training, and support.",
  },
];

export default function Process() {
  return (
    <Section id="process" index={3} label="how it works" bg="light">
      <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
        How it works
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.n}
            className="rounded-lg border border-muted/40 bg-white p-6"
          >
            <p className="font-mono text-sm font-bold text-accent">
              {step.n}
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-montserrat)] text-lg font-bold text-text">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text/70">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
