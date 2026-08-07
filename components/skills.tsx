"use client";

import { motion } from "framer-motion";
import { Section, fadeUp } from "@/components/section";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section
      id="skills"
      tone="muted"
      eyebrow="Toolbox"
      title={<>The stack I reach for</>}
      description="Tools I've used to ship and scale production systems — picked for the team, the timeline, and the problem."
    >
      <div className="space-y-10">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: (i % 4) * 0.04 }}
            className="grid gap-4 border-t border-border/60 pt-6 md:grid-cols-[minmax(0,220px)_1fr] md:gap-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {group.title}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border/50 bg-background/70 px-3 py-1.5 text-sm text-foreground/90 transition hover:border-primary/40 hover:text-foreground"
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
