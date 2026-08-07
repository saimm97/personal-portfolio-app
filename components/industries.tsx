"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, fadeUp } from "@/components/section";
import {
  industriesWithProjects,
  projectCountForIndustry,
} from "@/lib/data";

export function Industries() {
  const visible = industriesWithProjects();

  return (
    <Section
      id="industries"
      eyebrow="Industries"
      title={
        <>
          Shipped across{" "}
          <span className="text-primary">{visible.length}</span> industries
        </>
      }
      description="Domain context shapes good engineering — production systems with case studies you can filter below."
    >
      <div className="grid gap-x-8 gap-y-10 border-t border-border/60 pt-10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((industry, i) => {
          const Icon = industry.icon;
          const projectCount = projectCountForIndustry(industry.id);
          return (
            <motion.div
              key={industry.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ delay: (i % 3) * 0.05 }}
              className="group flex h-full flex-col"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-primary transition group-hover:border-primary/40">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
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
              <Link
                href={`/?industry=${industry.id}#projects`}
                scroll
                className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-primary transition hover:gap-2"
              >
                View projects
                <span className="tabular-nums opacity-70">({projectCount})</span>
                <ArrowRight size={14} />
                <span className="sr-only"> for {industry.name}</span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
