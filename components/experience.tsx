"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { Section, fadeUp } from "@/components/section";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>Six years of leading and shipping at scale</>}
      description="A timeline of roles where I've owned architecture, mentored engineers, and delivered measurable business outcomes."
    >
      <ol className="relative space-y-10 border-l border-border/60 pl-6 md:pl-10">
        {experiences.map((exp, i) => (
          <motion.li
            key={`${exp.company}-${i}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ delay: i * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[31px] top-1 grid h-6 w-6 place-items-center rounded-full border border-border/70 bg-background md:-left-[43px]">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]" />
            </span>

            <div className="rounded-xl border border-border/60 bg-card/40 p-6 transition hover:border-primary/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {exp.role}
                  </h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase size={14} className="text-primary" />
                      {exp.company}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} className="text-primary" />
                      {exp.location}
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="rounded-full border border-border/60 bg-background/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {exp.period}
                  </span>
                  <span className="text-xs text-primary">{exp.industry}</span>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {exp.summary}
              </p>

              <ul className="mt-4 space-y-2">
                {exp.achievements.map((a) => (
                  <li
                    key={a}
                    className="flex gap-2 text-sm text-foreground/90"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {exp.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border/60 bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
