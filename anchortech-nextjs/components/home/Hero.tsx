"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { heroContainer, heroItem } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="bg-anchor-paper text-anchor-ink">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 md:px-10 md:pt-36 md:pb-28">
        <motion.div
          className="grid gap-14 md:grid-cols-2 md:items-center md:gap-10"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.p
              variants={heroItem}
              className="font-mono text-sm tracking-wide text-anchor-ink/70"
            >
              AnchorTech Innovations // Pineville, NC
            </motion.p>

            <motion.h1
              variants={heroItem}
              className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Websites built by the developer who ships them.
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-6 max-w-lg text-lg leading-relaxed text-anchor-ink/70"
            >
              No account managers. No templates stretched to fit. Just direct
              access to the person writing the code, from first call to
              launch.
            </motion.p>

            <motion.div variants={heroItem} className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/pricing"
                className="rounded-md bg-anchor-accent px-6 py-3 font-semibold text-white transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-anchor-accent"
              >
                View pricing
              </Link>
              <a
                href="#projects"
                className="rounded-md border-2 border-anchor-deep px-6 py-3 font-semibold text-anchor-deep transition hover:bg-anchor-deep hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-anchor-deep"
              >
                See the work
              </a>
            </motion.div>
          </div>

          <motion.div variants={heroItem}>
            <div className="overflow-hidden rounded-xl border border-anchor-slate/30 bg-anchor-ink shadow-xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-anchor-slate/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-anchor-slate/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-anchor-slate/50" />
              </div>
              <div className="space-y-1.5 px-6 py-8 font-mono text-sm leading-relaxed text-anchor-paper/90">
                <p className="text-anchor-slate">{"// AnchorTech Innovations"}</p>
                <p className="text-anchor-slate">{"// built by one developer"}</p>
                <p className="pt-4">
                  <span className="text-anchor-accent">const</span> project ={" "}
                  {"{"}
                </p>
                <p className="pl-4">
                  client: <span className="text-anchor-accent">&quot;you&quot;</span>,
                </p>
                <p className="pl-4">
                  scope:{" "}
                  <span className="text-anchor-accent">
                    &quot;exactly what you need&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  handoff:{" "}
                  <span className="text-anchor-accent">
                    &quot;direct, no middleman&quot;
                  </span>
                  ,
                </p>
                <p>{"};"}</p>
                <p className="pt-4 text-anchor-slate">
                  {"// no account managers"}
                </p>
                <p className="text-anchor-slate">
                  {"// no templates stretched to fit"}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
