"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, fadeUp } from "@/components/section";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={<>Case studies with measurable impact</>}
      description="A snapshot of recent work. Each project includes the problem, the architecture, and the business outcome — happy to walk through any of them in detail."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ delay: (i % 2) * 0.06 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 transition hover:border-primary/40 hover:bg-card/60 md:p-8"
          >
            <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/10 opacity-0 blur-3xl transition group-hover:opacity-100" />

            <div className="flex items-center justify-between">
              <span className="rounded-full border border-border/60 bg-background/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {p.category}
              </span>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition group-hover:text-primary"
                  aria-label={`Open ${p.name}`}
                >
                  <ArrowUpRight size={18} />
                </a>
              )}
            </div>

            <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
              {p.name}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>

            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {p.impact.map((m) => (
                <div
                  key={m}
                  className="rounded-lg border border-border/60 bg-background/40 px-3 py-2 text-xs text-foreground/90"
                >
                  {m}
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6">
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border/60 bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
