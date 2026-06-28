"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Phone, Sparkles } from "lucide-react";
import { profile, stats } from "@/lib/data";
import { Avatar } from "@/components/avatar";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate block w-full overflow-hidden pt-24 pb-14 sm:pb-16 md:flex md:min-h-[100svh] md:items-center md:pb-0"
    >
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-y opacity-40" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <Avatar size={64} />
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for senior & lead engagements
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 font-display font-bold tracking-tight [text-wrap:balance]"
            >
              <span className="block text-4xl text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                {profile.name}
              </span>
              <span className="mt-1 block text-3xl text-gradient animate-shimmer sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
                {profile.title}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles size={14} className="text-primary" />
                {profile.yearsOfExperience}+ years building production systems
              </span>
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
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                View selected work
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-border/70 bg-card/60 px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/60 hover:bg-card"
              >
                Get in touch
              </Link>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Stats panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="glass relative rounded-2xl p-6 shadow-2xl shadow-primary/5">
              <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 opacity-60 blur-xl" />
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                At a glance
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-xs text-muted-foreground">{s.label}</dt>
                    <dd className="mt-1 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
