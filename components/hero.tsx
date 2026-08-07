"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Download, MapPin, Phone } from "lucide-react";
import { profile, stats } from "@/lib/data";
import { Avatar } from "@/components/avatar";
import { CountUp } from "@/components/count-up";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-grain pt-24 pb-0 md:min-h-[100svh] md:flex md:flex-col md:justify-center"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-y opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-[420px] w-[420px] animate-float rounded-full bg-primary/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 -z-10 h-[320px] w-[320px] rounded-full bg-[hsl(200_80%_50%/0.12)] blur-[90px]" />

      <div className="container relative z-[1] flex flex-1 flex-col justify-center pb-16 md:pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Avatar size={72} />
            <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-border/50 bg-background/40 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-md sm:text-[11px]">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="truncate">{profile.availability}</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display font-bold tracking-tight [text-wrap:balance]"
          >
            <span className="block text-5xl font-extrabold tracking-[-0.03em] text-foreground sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[0.95]">
              {profile.name}
            </span>
            <span className="mt-3 block text-2xl font-semibold tracking-[-0.02em] text-primary sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-[1.2]">
              {profile.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            {profile.heroLead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" />
              {profile.location}
            </span>
            <span className="hidden h-3 w-px bg-border sm:block" aria-hidden />
            <a
              href={profile.socials.phone}
              className="inline-flex items-center gap-1.5 transition hover:text-foreground"
            >
              <Phone size={14} className="text-primary" />
              {profile.phone}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.3),0_8px_30px_-8px_hsl(var(--primary)/0.55)] transition hover:bg-primary/90"
            >
              View selected work
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />
            </Link>
            <a
              href={profile.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-background/50 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:border-primary/50 hover:bg-card"
            >
              <Calendar size={16} className="text-primary" />
              Book a call
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      {/* Impact strip — full-bleed typography, not a card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35 }}
        className="relative z-[1] border-t border-border/50 bg-surface/80 backdrop-blur-sm"
      >
        <div className="container">
          <dl className="grid grid-cols-2 gap-px sm:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="relative px-1 py-8 sm:px-4 md:py-10"
              >
                {i > 0 && (
                  <span
                    className="absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-border/70 sm:block"
                    aria-hidden
                  />
                )}
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px]">
                  {s.label}
                </dt>
                <dd className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  <CountUp value={s.value} className="text-primary" />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </section>
  );
}
