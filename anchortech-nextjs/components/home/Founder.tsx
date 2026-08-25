import Section from "./Section";
import Image from "next/image";

export default function Founder() {
  return (
    <Section id="founder" index={4} label="who's building this" bg="dark">
      <div className="grid gap-10 sm:grid-cols-[auto_1fr] sm:items-center">
        <Image
          src="/FounderPhoto.jpeg"
          alt="Josh Boepple"
          width={112}
          height={112}
          className="h-28 w-28 rounded-full border border-anchor-slate/40 object-cover"
        />

        <div>
          <p className="font-mono text-xs tracking-wider text-anchor-paper/70">
            josh boepple // founder &amp; developer
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold tracking-tight text-anchor-paper sm:text-4xl">
            Who&apos;s building this
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-anchor-paper/80">
            I&apos;m Josh. I build AnchorTech&apos;s sites myself, no
            subcontractors, no outsourcing. If you email AnchorTech, you&apos;re
            emailing me. I build practical systems that bring clarity, not
            more complexity.
          </p>
          <div className="mt-6 flex flex-wrap gap-6 font-mono text-sm">
            <a
              href="https://joshboeppleportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-anchor-accent underline decoration-anchor-accent/40 underline-offset-4 transition hover:decoration-anchor-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-anchor-accent"
            >
              portfolio &rarr;
            </a>
            <a
              href="https://github.com/jboe26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-anchor-accent underline decoration-anchor-accent/40 underline-offset-4 transition hover:decoration-anchor-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-anchor-accent"
            >
              github &rarr;
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
