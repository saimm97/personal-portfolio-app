"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, fadeUp } from "@/components/section";
import { profile, socialLinks } from "@/lib/data";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let&rsquo;s build something great together</>}
      description="I'm currently open to senior and lead engineering roles, advisory engagements, and select consulting work. Overlaps US mornings / EU afternoons — book a 30-minute call or reach out directly."
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        className="relative overflow-hidden rounded-2xl border border-border/50 bg-surface/80 p-6 md:p-10"
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh opacity-60" />
        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Have a problem worth solving?
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Whether it&rsquo;s scaling a system, modernizing a legacy stack, or
              leveling up a team — tell me about it.
            </p>
            <a
              href={profile.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.3),0_8px_30px_-8px_hsl(var(--primary)/0.55)] transition hover:bg-primary/90"
            >
              Book a 30-min call
              <ArrowRight size={16} />
            </a>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Or reach me directly
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="group mt-3 inline-flex items-center gap-2 break-all rounded-md border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition hover:border-primary hover:bg-primary/20"
            >
              {profile.email}
              <ArrowRight
                size={14}
                className="transition group-hover:translate-x-1"
              />
            </a>
            <div className="mt-4 grid gap-2">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                const isExternal = s.href.startsWith("http");
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-xl border border-border/60 bg-background/40 px-4 py-3 transition hover:border-primary/40 hover:bg-background/70"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg border border-border/60 bg-card/60 text-primary transition group-hover:border-primary/40">
                      <Icon size={16} />
                    </span>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">Connect</p>
                      <p className="text-sm font-medium">{s.label}</p>
                    </div>
                    <ArrowRight
                      size={14}
                      className="text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
