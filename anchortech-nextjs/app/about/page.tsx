import Section from "@/components/home/Section";
import CTABanner from "@/components/home/CTABanner";

export default function About() {
  return (
    <main>
      <section className="bg-anchor-paper text-anchor-ink">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-20 text-center md:px-10 md:pt-32 md:pb-24">
          <p className="font-mono text-sm tracking-wide text-anchor-ink/70">
            AnchorTech Innovations // about
          </p>
          <h1 className="mt-6 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Anchoring people and organizations into their identity.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-anchor-ink/70">
            AnchorTech Innovations exists to help individuals, businesses, and
            organizations simplify their tech, strengthen their identity, and
            move forward with confidence, without the overwhelm.
          </p>
        </div>
      </section>

      <Section id="mission" index={1} label="mission & vision" bg="dark">
        <div className="max-w-2xl space-y-10">
          <div>
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-anchor-paper">
              Mission
            </h2>
            <p className="mt-3 leading-relaxed text-anchor-paper/80">
              AnchorTech Innovations empowers individuals, businesses, and
              organizations with practical, scalable digital solutions that
              bring clarity to their operations and confidence to their
              brand. Rooted in integrity and steady guidance, we build
              systems that reflect stability, purpose, and resilience,
              especially in seasons of uncertainty.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-anchor-paper">
              Vision
            </h2>
            <p className="mt-3 leading-relaxed text-anchor-paper/80">
              Our vision is to be the trusted partner for individuals and
              organizations across North Carolina and beyond. We aim to be
              known for thoughtful leadership, personal connection, and
              solutions that strengthen identity and support long-term
              growth. AnchorTech stands as a steady presence in a shifting
              world, meeting clients where they are and helping them move
              forward with clarity.
            </p>
          </div>
        </div>
      </Section>

      <Section id="who-we-serve" index={2} label="who we serve" bg="light">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-anchor-ink">
            Who we serve
          </h2>
          <p className="mt-3 leading-relaxed text-anchor-ink/70">
            We serve the people and organizations that make our communities
            feel like home: family-run shops, local service providers,
            nonprofits, churches, solo founders, and passionate
            entrepreneurs. Our solutions are built for real people who need
            real help, without unnecessary complexity and without being
            left in the dark.
          </p>
        </div>
      </Section>

      <CTABanner />
    </main>
  );
}
