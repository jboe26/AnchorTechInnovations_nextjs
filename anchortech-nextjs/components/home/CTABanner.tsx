"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export default function CTABanner() {
  return (
    <section className="bg-anchor-ink text-anchor-paper">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-6xl px-6 py-24 text-center md:px-10 md:py-32"
      >
        <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-extrabold tracking-tight sm:text-5xl">
          Have a project in mind?
        </h2>
        <p className="mt-4 text-lg text-anchor-paper/80">
          Tell me what you&apos;re building.
        </p>
        <a
          href="mailto:joshboepple@anchortech.org"
          className="mt-9 inline-block rounded-md bg-anchor-accent px-8 py-3.5 font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-anchor-accent"
        >
          Get in touch
        </a>
      </motion.div>
    </section>
  );
}
