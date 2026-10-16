import Section from "./Section";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Business websites",
    description:
      "A site built around what your business actually needs, not a stretched template.",
    price: "From $650",
  },
  {
    title: "Ongoing site care",
    description:
      "Updates, fixes, and monitoring so the site keeps working after launch.",
    price: "From $49/mo",
  },
  {
    title: "Custom web apps",
    description:
      "Tools built for a specific workflow, not off-the-shelf software forced to fit.",
    price: "Quoted upfront",
  },
  {
    title: "Migrations and fixes",
    description:
      "Moving platforms or repairing a site that's fallen behind, without starting from scratch.",
    price: "From $50",
  },
];

export default function Services() {
  return (
    <Section id="services" index={2} label="what I build" bg="dark">
      <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-surface sm:text-4xl">
        What I build
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </Section>
  );
}
