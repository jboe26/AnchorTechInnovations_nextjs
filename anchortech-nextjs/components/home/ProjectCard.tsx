"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data/projects";

export default function ProjectCard({ name, description, href, status }: Project) {
  const cardClass =
    "block rounded-lg border border-anchor-slate/30 bg-white p-6 shadow-sm transition hover:border-anchor-accent/60 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-anchor-accent";

  const content = (
    <>
      <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-anchor-deep">
        {name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-anchor-ink/70">
        {description}
      </p>
      {href ? (
        <span className="mt-4 inline-block font-mono text-xs tracking-wide text-anchor-accent">
          view project &rarr;
        </span>
      ) : (
        status && (
          <span className="mt-4 inline-block font-mono text-xs tracking-wide text-anchor-ink/70">
            {status}
          </span>
        )
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cardClass}
      >
        {content}
      </motion.a>
    );
  }

  return <div className={cardClass}>{content}</div>;
}
