"use client";

import { motion } from "framer-motion";
import { Section, fadeUp } from "@/components/section";
import { principles, profile } from "@/lib/data";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          A pragmatic engineering leader who ships{" "}
          <span className="text-primary">outcomes</span>, not just code.
        </>
      }
      description={profile.shortBio}
    >
      <div className="grid gap-8 border-t border-border/60 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: i * 0.06 }}
          >
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold tracking-tight">
              {p.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {p.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
