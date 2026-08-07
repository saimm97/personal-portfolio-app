"use client";

import { motion } from "framer-motion";
import { Section, fadeUp } from "@/components/section";
import { achievements } from "@/lib/data";
import { CountUp } from "@/components/count-up";

export function Achievements() {
  return (
    <Section
      id="achievements"
      tone="contrast"
      eyebrow="By the numbers"
      title={<>Outcomes that moved the needle</>}
      description="Measurable impact across six years — revenue discovery, venture launches, and engineering velocity."
    >
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: (i % 3) * 0.06 }}
            className="relative border-t border-background/15 pt-6 dark:border-border/60"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <CountUp
                value={a.value}
                className="font-display text-4xl font-bold tracking-tight text-primary md:text-5xl"
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-background/55 dark:text-muted-foreground">
                {a.label}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/65 dark:text-muted-foreground">
              {a.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
