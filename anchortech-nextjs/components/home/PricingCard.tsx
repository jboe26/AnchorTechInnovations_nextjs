"use client";

import { motion } from "framer-motion";
import type { PricingTier } from "@/lib/data/pricing";
import PricingInquiryForm from "./PricingInquiryForm";

export default function PricingCard({
  title,
  price,
  cadence,
  priceNote,
  badge,
  subtitle,
  description,
  features,
}: PricingTier) {
  const isTextPrice = !price.startsWith("$");
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={
        badge
          ? "flex h-full flex-col rounded-lg border-2 border-accent bg-white p-6 shadow-sm"
          : "flex h-full flex-col rounded-lg border border-muted/30 bg-white p-6 shadow-sm"
      }
    >
      <p className="flex items-center justify-between gap-2 font-mono text-xs tracking-wider text-text/70">
        <span>{title}</span>
        {badge && (
          <span className="rounded-full bg-accent px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-white">
            {badge}
          </span>
        )}
      </p>
      <p
        className={`mt-2 font-[family-name:var(--font-montserrat)] font-extrabold text-text ${
          isTextPrice ? "text-2xl leading-snug" : "text-3xl"
        }`}
      >
        {price}
        {cadence && (
          <span className="ml-1 text-base font-semibold text-text/70">
            {cadence}
          </span>
        )}
      </p>
      {priceNote && (
        <p className="mt-1 text-xs font-semibold text-text/70">{priceNote}</p>
      )}
      <p className="mt-2 text-sm font-semibold text-text/70">{subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-text/70">
        {description}
      </p>
      <ul className="mt-5 flex-1 space-y-1.5 text-sm text-text/70">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className="text-accent-strong" aria-hidden="true">
              &#10003;
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <PricingInquiryForm
        planName={title}
        priceLabel={`${price} ${cadence}`}
        buttonClassName="mt-6 inline-block w-full rounded-md border-2 border-primary px-4 py-2.5 text-center font-semibold text-primary transition hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      />
    </motion.div>
  );
}
