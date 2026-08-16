"use client";

import { motion } from "framer-motion";
import type { PricingTier } from "@/lib/data/pricing";

export default function PricingCard({
  variant,
  title,
  price,
  cadence,
  subtitle,
  description,
  features,
}: PricingTier) {
  const isPartnership = variant === "partnership";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={
        isPartnership
          ? "rounded-lg border-2 border-anchor-accent bg-anchor-ink p-8 text-anchor-paper shadow-lg"
          : "rounded-lg border border-anchor-slate/30 bg-white p-6 shadow-sm"
      }
    >
      <p
        className={`font-mono text-xs tracking-wider ${
          isPartnership ? "text-anchor-accent" : "text-anchor-ink/70"
        }`}
      >
        {title}
      </p>
      <p
        className={`mt-2 font-[family-name:var(--font-montserrat)] font-extrabold ${
          isPartnership ? "text-4xl text-anchor-paper" : "text-3xl text-anchor-ink"
        }`}
      >
        {price}
        <span
          className={`ml-1 text-base font-semibold ${
            isPartnership ? "text-anchor-paper/70" : "text-anchor-ink/70"
          }`}
        >
          {cadence}
        </span>
      </p>
      <p
        className={`mt-2 text-sm font-semibold ${
          isPartnership ? "text-anchor-paper/80" : "text-anchor-ink/70"
        }`}
      >
        {subtitle}
      </p>
      <p
        className={`mt-3 text-sm leading-relaxed ${
          isPartnership ? "text-anchor-paper/70" : "text-anchor-ink/70"
        }`}
      >
        {description}
      </p>
      <ul
        className={`mt-5 space-y-1.5 text-sm ${
          isPartnership ? "text-anchor-paper/80" : "text-anchor-ink/70"
        }`}
      >
        {features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className="text-anchor-accent">&#10003;</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
