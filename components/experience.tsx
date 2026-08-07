"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { Section, fadeUp } from "@/components/section";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      tone="muted"
      eyebrow="Experience"
      title={<>Six years of leading and shipping at scale</>}
      description="Roles where I've owned architecture, mentored engineers, and delivered measurable business outcomes."
    >
      <ol className="relative space-y-14 border-l border-border/70 pl-6 md:pl-10">
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
            <span className="absolute -left-[31px] top-1.5 grid h-6 w-6 place-items-center rounded-full border border-border/70 bg-background md:-left-[43px]">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.18)]" />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                  {exp.role}
                </h3>
                <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 font-medium text-foreground/90">
                    <Briefcase size={14} className="text-primary" />
                    {exp.company}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary" />
                    {exp.location}
                  </span>
                </p>
              </div>
              <div className="flex flex-col items-start gap-1 sm:items-end">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {exp.period}
                </span>
                <span className="text-xs text-primary">{exp.industry}</span>
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {exp.summary}
            </p>

            <ul className="mt-6 max-w-3xl space-y-2.5">
              {exp.achievements.map((a) => {
                const isEngagement = a.startsWith("Client engagement");

                return (
                  <li
                    key={a}
                    className={`flex gap-3 text-sm ${
                      isEngagement
                        ? "mt-5 border-t border-border/50 pt-5 text-foreground"
                        : "text-foreground/85"
                    }`}
                  >
                    <span
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                        isEngagement
                          ? "bg-primary ring-2 ring-primary/30"
                          : "bg-primary/70"
                      }`}
                    />
                    <span
                      className={
                        isEngagement
                          ? "font-semibold tracking-tight text-foreground"
                          : undefined
                      }
                    >
                      {a}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {exp.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-border/50 bg-background/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
