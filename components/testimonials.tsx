"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section, fadeUp } from "@/components/section";
import { testimonials, type Testimonial } from "@/lib/data";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TestimonialAvatar({ t }: { t: Testimonial }) {
  if (t.avatarUrl) {
    const fit = t.avatarFit === "contain" ? "object-contain" : "object-cover";
    return (
      <span className="relative inline-block h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#2c2f34] ring-2 ring-border/60">
        <Image
          src={t.avatarUrl}
          alt={t.name}
          width={96}
          height={96}
          className={`h-full w-full ${fit}`}
          style={
            t.avatarPosition
              ? { objectPosition: t.avatarPosition }
              : undefined
          }
        />
      </span>
    );
  }

  return (
    <span
      className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border/60 bg-background/70 font-display text-sm font-semibold text-primary"
      aria-hidden
    >
      {initials(t.name)}
    </span>
  );
}

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      tone="muted"
      eyebrow="What People Say"
      title={<>Voices from the teams I&rsquo;ve worked with</>}
      description="Feedback from engineering leaders and teammates I've partnered with."
    >
      <div className="grid gap-10 border-t border-border/60 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name + i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            transition={{ delay: (i % 3) * 0.06 }}
            className="flex h-full flex-col"
          >
            <blockquote className="font-display text-lg font-medium leading-snug tracking-tight text-foreground/95 md:text-xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3 border-t border-border/50 pt-5">
              <TestimonialAvatar t={t} />
              <div>
                <p className="font-display text-sm font-semibold">{t.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {t.role} · {t.company}
                </p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
