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
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-xl border border-border/60 bg-card/40 p-6 transition hover:border-primary/40 hover:bg-card/60"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-3 font-display text-lg font-semibold">
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
