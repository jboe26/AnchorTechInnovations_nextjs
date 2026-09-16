"use client";

import { motion } from "framer-motion";
import type { SupportPlan } from "@/lib/data/pricing";

export default function SupportPlanCard({
  name,
  price,
  cadence,
  yearlyNote,
  theme,
  tagline,
  description,
  includedWork,
  features,
}: SupportPlan) {
  const isDark = theme === "dark";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={
        isDark
          ? "flex flex-col rounded-lg border-2 border-accent bg-surface-dark p-8 text-surface shadow-lg"
          : "flex flex-col rounded-lg border border-muted/30 bg-white p-6 shadow-sm"
      }
    >
      <p
        className={`font-mono text-xs tracking-wider ${
          isDark ? "text-accent-on-dark" : "text-text/70"
        }`}
      >
        {name}
      </p>
      <p
        className={`mt-2 font-[family-name:var(--font-montserrat)] font-extrabold ${
          isDark ? "text-4xl text-surface" : "text-3xl text-text"
        }`}
      >
        {price}
        <span
          className={`ml-1 text-base font-semibold ${
            isDark ? "text-surface/70" : "text-text/70"
          }`}
        >
          {cadence}
        </span>
      </p>
      {yearlyNote && (
        <p
          className={`mt-1 text-xs ${
            isDark ? "text-surface/60" : "text-muted"
          }`}
        >
          {yearlyNote}
        </p>
      )}
      <p
        className={`mt-2 text-sm font-semibold ${
          isDark ? "text-surface/80" : "text-text/70"
        }`}
      >
        {tagline}
      </p>
      <p
        className={`mt-3 text-sm leading-relaxed ${
          isDark ? "text-surface/70" : "text-text/70"
        }`}
      >
        {description}
      </p>

      <div
        className={`mt-5 rounded-md px-3 py-2 text-sm font-semibold ${
          isDark ? "bg-surface/10 text-surface" : "bg-surface text-text"
        }`}
      >
        {includedWork}
      </div>

      <ul
        className={`mt-5 flex-1 space-y-1.5 text-sm ${
          isDark ? "text-surface/80" : "text-text/70"
        }`}
      >
        {features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span
              className={isDark ? "text-accent-on-dark" : "text-accent-strong"}
              aria-hidden="true"
            >
              &#10003;
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href={`mailto:joshboepple@anchortech.org?subject=${encodeURIComponent(
          `Starting a partnership: ${name}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className={
          isDark
            ? "mt-6 inline-block w-full rounded-md bg-accent px-4 py-2.5 text-center font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-on-dark"
            : "mt-6 inline-block w-full rounded-md border-2 border-primary px-4 py-2.5 text-center font-semibold text-primary transition hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        }
      >
        Start with {name}
      </a>
    </motion.div>
  );
}
