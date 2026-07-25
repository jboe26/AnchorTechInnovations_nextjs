export default function About() {
  return (
    <main className="bg-[#e8e8e8] min-h-screen">
      {/* Hero */}
      <section className="bg-[#3b6a96] text-white text-center px-6 py-20">
        <h1 className="text-4xl font-bold max-w-3xl mx-auto">
          Anchoring People and Organizations Into Their Identity
        </h1>
        <p className="mt-4 text-lg text-blue-100 max-w-xl mx-auto">
          Clarity, purpose, and steady support for every stage of your journey.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-xl text-gray-700 leading-relaxed">
          AnchorTech Innovations exists to help individuals, businesses, and organizations simplify their tech, strengthen their identity, and move forward with confidence, without the overwhelm.
        </p>
      </section>

      {/* Mission, Vision, Who We Serve */}
      <section className="max-w-3xl mx-auto px-6 pb-20 space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-[#3b6a96] mb-3 text-center">
            Mission Statement
          </h2>
          <p className="text-gray-600 leading-relaxed">
            AnchorTech Innovations empowers individuals, businesses, and organizations with practical, scalable digital solutions that bring clarity to their operations and confidence to their brand. Rooted in integrity and steady guidance, we build systems that reflect stability, purpose, and resilience, especially in seasons of uncertainty.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#3b6a96] mb-3 text-center">
            Vision Statement
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our vision is to be the trusted partner for individuals and organizations across North Carolina and beyond. We aim to be known for thoughtful leadership, personal connection, and solutions that strengthen identity and support long-term growth. AnchorTech stands as a steady presence in a shifting world, meeting clients where they are and helping them move forward with clarity.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#3b6a96] mb-3 text-center">
            Who We Serve
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We serve the people and organizations that make our communities feel like home: family-run shops, local service providers, nonprofits, churches, solo founders, and passionate entrepreneurs. Our solutions are built for real people who need real help, without unnecessary complexity and without being left in the dark.
          </p>
        </div>
      </section>
    </main>
  );
}
