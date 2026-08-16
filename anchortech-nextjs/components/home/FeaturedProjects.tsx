import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data/projects";

export default function FeaturedProjects() {
  return (
    <Section id="projects" index={2} label="recent work" bg="light">
      <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-anchor-ink sm:text-4xl">
        Recent work
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </Section>
  );
}
