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
              I build practical, scalable digital solutions that bring
              clarity to your operations and confidence to your brand. I
              work with integrity and steady guidance, building systems that
              hold up, especially when things feel uncertain.
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-anchor-paper">
              Vision
            </h2>
            <p className="mt-3 leading-relaxed text-anchor-paper/80">
              I want AnchorTech to be the trusted partner for individuals
              and organizations across North Carolina and beyond, known for
              thoughtful guidance, personal connection, and solutions that
              support real growth. I meet clients where they are and help
              them move forward with clarity.
            </p>
          </div>
        </div>
      </Section>

      <Section id="who-we-serve" index={2} label="who I serve" bg="light">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-anchor-ink">
            Who I serve
          </h2>
          <p className="mt-3 leading-relaxed text-anchor-ink/70">
            I work with the people and organizations that make communities
            feel like home: family-run shops, local service providers,
            nonprofits, churches, solo founders, and passionate
            entrepreneurs. Everything I build is for real people who need
            real help, without unnecessary complexity and without being
            left in the dark.
          </p>
        </div>
      </Section>

      <CTABanner />
    </main>
  );
}
