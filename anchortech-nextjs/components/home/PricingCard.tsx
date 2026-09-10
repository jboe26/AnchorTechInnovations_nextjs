"use client";

import { motion } from "framer-motion";
import type { PricingTier } from "@/lib/data/pricing";

export default function PricingCard({
  title,
  price,
  cadence,
  subtitle,
  description,
  features,
}: PricingTier) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="rounded-lg border border-muted/30 bg-white p-6 shadow-sm"
    >
      <p className="font-mono text-xs tracking-wider text-text/70">{title}</p>
      <p className="mt-2 font-[family-name:var(--font-montserrat)] text-3xl font-extrabold text-text">
        {price}
        <span className="ml-1 text-base font-semibold text-text/70">
          {cadence}
        </span>
      </p>
      <p className="mt-2 text-sm font-semibold text-text/70">{subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-text/70">
        {description}
      </p>
      <ul className="mt-5 space-y-1.5 text-sm text-text/70">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className="text-accent">&#10003;</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
