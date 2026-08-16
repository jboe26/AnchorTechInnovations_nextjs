"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp } from "@/lib/motion";

type SectionProps = {
  id: string;
  index: number;
  label: string;
  bg?: "dark" | "light";
  children: ReactNode;
};

export default function Section({ id, index, label, bg = "light", children }: SectionProps) {
  const mark = `§${String(index).padStart(2, "0")}`;
  const isDark = bg === "dark";

  return (
    <section
      id={id}
      className={isDark ? "bg-anchor-ink text-anchor-paper" : "bg-anchor-paper text-anchor-ink"}
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="md:grid md:grid-cols-[2.5rem_1fr] md:gap-10">
          <div className="mb-8 flex items-center gap-4 md:mb-0 md:flex-col md:items-center md:justify-start md:gap-4">
            <span
              className="whitespace-nowrap font-mono text-xs tracking-wider text-anchor-slate md:[writing-mode:vertical-rl] md:rotate-180"
            >
              {mark} {label}
            </span>
            <span
              aria-hidden="true"
              className={`h-px flex-1 md:h-full md:w-px md:flex-1 ${
                isDark ? "bg-anchor-slate/30" : "bg-anchor-slate/40"
              }`}
            />
          </div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
