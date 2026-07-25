import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Anchor Foundation",
    price: "$650",
    description: "A clean, intentional website that gives you a solid, editable foundation online, built on the platform that fits you best.",
  },
  {
    title: "Anchor Growth",
    price: "$1,350",
    description: "A more complete online presence with refined structure, better flow, and tools that help you grow confidently.",
  },
  {
    title: "Anchor Elevate",
    price: "$2,995",
    description: "A fully customized website with strategic structure, marketing tools, and analytics to support real growth.",
  },
  {
    title: "Anchor Alliance",
    price: "$599/mo",
    description: "Your website isn't a one-time project. It's a living part of your business. Anchor Alliance is dedicated, ongoing support and strategy built to help your site grow as you grow.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[#e4e4e4] text-center px-6">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen">
        <Image
          src="/logo2.webp"
          alt="AnchorTech Innovations"
          width={200}
          height={200}
          loading="eager"
        />
        <h1 className="text-4xl font-bold mt-6">
          Welcome to AnchorTech Innovations
        </h1>
        <h2 className="text-xl text-gray-600 mt-2">
          Anchoring People and Organizations Into Their Identity
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl">
          Clarity, purpose, and steady support for every stage of your journey.
        </p>
        <Link
          href="/contact"
          className="mt-8 bg-[#3b6a96] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Let's Work Together
        </Link>
      </section>

      {/* Services Preview */}
      <section className="w-full max-w-5xl py-20">
        <h2 className="text-3xl font-bold mb-2">What We Offer</h2>
        <p className="text-gray-500 mb-10">
          Clear, scalable solutions. No gimmicks. No surprises.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm text-left"
            >
              <h3 className="text-[#3b6a96] font-bold text-lg">
                {service.title}
              </h3>
              <p className="text-2xl font-bold mt-1">{service.price}</p>
              <p className="text-gray-500 text-sm mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-gray-500 mt-4 max-w-xl text-center">Just need one thing fixed? We also offer à la carte tech help from $50, plus AnchorCare ongoing support plans.</p>
        <Link
          href="/pricing"
          className="mt-10 inline-block border-2 border-[#3b6a96] text-[#3b6a96] px-8 py-3 rounded-full font-semibold hover:bg-[#3b6a96] hover:text-white transition"
        >
          See Full Pricing
        </Link>
      </section>
    </main>
  );
}
