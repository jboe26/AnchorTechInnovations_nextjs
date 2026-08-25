import Section from "./Section";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Business websites",
    description:
      "A site built around what your business actually needs, not a stretched template.",
  },
  {
    title: "Ongoing site care",
    description:
      "Updates, fixes, and monitoring so the site keeps working after launch.",
  },
  {
    title: "Custom web apps",
    description:
      "Tools built for a specific workflow, not off-the-shelf software forced to fit.",
  },
  {
    title: "Migrations and fixes",
    description:
      "Moving platforms or repairing a site that's fallen behind, without starting from scratch.",
  },
];

export default function Services() {
  return (
    <Section id="services" index={2} label="what I build" bg="dark">
      <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-anchor-paper sm:text-4xl">
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
