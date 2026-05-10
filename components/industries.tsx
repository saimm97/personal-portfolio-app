"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, fadeUp } from "@/components/section";
import { industries, projectCountForIndustry } from "@/lib/data";

export function Industries() {
  return (
    <Section
      id="industries"
      eyebrow="Industries"
      title={
        <>
          Shipped across <span className="text-primary">{industries.length}</span> industries
        </>
      }
      description="Domain context shapes good engineering. Here are the industries where I've delivered production systems, navigated compliance, and partnered with non-technical stakeholders."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, i) => {
          const Icon = industry.icon;
          const projectCount = projectCountForIndustry(industry.id);
          return (
            <motion.div
              key={industry.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ delay: (i % 4) * 0.05 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card/40 p-6 transition hover:border-primary/40 hover:bg-card/60"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 transition group-hover:opacity-100" />
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-primary transition group-hover:border-primary/40 group-hover:text-primary">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {industry.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {industry.description}
              </p>
              <ul className="mt-4 space-y-1.5">
                {industry.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 text-xs text-foreground/80"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {h}
                  </li>
                ))}
              </ul>
              {projectCount > 0 ? (
                <Link
                  href={`/?industry=${industry.id}#projects`}
                  scroll
                  className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-primary transition hover:gap-2"
                >
                  View projects
                  <ArrowRight size={14} />
                  <span className="sr-only">
                    {" "}
                    for {industry.name} ({projectCount})
                  </span>
                </Link>
              ) : (
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                  Projects coming soon
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
