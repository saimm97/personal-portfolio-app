"use client";

import { motion } from "framer-motion";
import { Section, fadeUp } from "@/components/section";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title={<>The stack I reach for</>}
      description="Tools I've used to ship and scale production systems. I'm language-agnostic at heart — I pick the right tool for the team, the timeline, and the problem."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: (i % 3) * 0.05 }}
            className="rounded-xl border border-border/60 bg-card/40 p-6 transition hover:border-primary/40"
          >
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              {group.title}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border/60 bg-background/40 px-2.5 py-1 text-xs text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
