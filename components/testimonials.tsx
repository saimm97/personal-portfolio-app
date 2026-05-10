"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section, fadeUp } from "@/components/section";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="What People Say"
      title={<>Voices from the teams I&rsquo;ve worked with</>}
      description="Feedback from engineering leaders, product owners, and teammates I've partnered with."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name + i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: (i % 3) * 0.06 }}
            className="group relative flex h-full flex-col rounded-xl border border-border/60 bg-card/40 p-6 transition hover:border-primary/40 hover:bg-card/60"
          >
            <Quote
              size={24}
              className="absolute right-5 top-5 text-primary/30 transition group-hover:text-primary/60"
              aria-hidden
            />
            <blockquote className="text-sm leading-relaxed text-foreground/90">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto pt-6">
              <p className="font-display text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">
                {t.role} · {t.company}
              </p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
