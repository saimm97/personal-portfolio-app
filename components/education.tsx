"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { Section, fadeUp } from "@/components/section";
import { education } from "@/lib/data";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={<>Academic background</>}
      description="Formal training in Computer Science, complemented by 6+ years of hands-on engineering."
    >
      <div className="max-w-2xl space-y-8 border-t border-border/60 pt-10">
        {education.map((item, i) => (
          <motion.div
            key={`${item.institution}-${i}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: (i % 2) * 0.06 }}
            className="flex items-start gap-4"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border/60 bg-surface text-primary">
              <GraduationCap size={20} />
            </span>

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold leading-tight">
                  {item.degree}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {item.period}
                </span>
              </div>

              <p className="mt-1 text-sm text-foreground/90">
                {item.institution}
              </p>
              <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin size={12} className="text-primary" />
                {item.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
