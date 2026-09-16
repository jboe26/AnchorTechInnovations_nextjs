"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data/projects";

export default function ProjectCard({
  name,
  description,
  href,
  caseStudyHref,
  status,
}: Project) {
  const cardClass =
    "block rounded-lg border border-muted/30 bg-white p-6 shadow-sm transition hover:border-accent/60 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-strong";

  const content = (
    <>
      <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-primary">
        {name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-text/70">
        {description}
      </p>
      {!caseStudyHref &&
        (href ? (
          <span className="mt-4 inline-block font-mono text-xs tracking-wide text-accent-strong">
            view project &rarr;
          </span>
        ) : (
          status && (
            <span className="mt-4 inline-block font-mono text-xs tracking-wide text-text/70">
              {status}
            </span>
          )
        ))}
    </>
  );

  if (caseStudyHref) {
    return (
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cardClass}
      >
        <Link href={caseStudyHref} className="block focus-visible:outline-none">
          {content}
        </Link>
        <span className="mt-4 flex items-center gap-4">
          <Link
            href={caseStudyHref}
            className="font-mono text-xs tracking-wide text-accent-strong hover:underline"
          >
            view case study &rarr;
          </Link>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-wide text-text/70 hover:underline"
            >
              visit live site &rarr;
            </a>
          )}
        </span>
      </motion.div>
    );
  }

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
