"use client";

import { motion } from "framer-motion";
import { Section, fadeUp } from "@/components/section";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="By the numbers"
      title={<>Outcomes that moved the needle</>}
      description="A snapshot of measurable impact across the past 6 years — from revenue discovery to engineering velocity."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: (i % 3) * 0.05 }}
            className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/40 p-6 transition hover:border-primary/40 hover:bg-card/60"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition group-hover:opacity-100" />

            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
                {a.value}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {a.label}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {a.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
