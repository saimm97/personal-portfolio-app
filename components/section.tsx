"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  /** Visual band for page rhythm */
  tone?: "default" | "muted" | "contrast";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "left",
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding relative scroll-mt-24",
        tone === "muted" && "surface-muted",
        tone === "contrast" &&
          "border-y border-border/50 bg-foreground text-background dark:bg-card dark:text-foreground",
        className,
      )}
    >
      {tone === "muted" && (
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-40" />
      )}
      <div className="container relative">
        {(eyebrow || title || description) && (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={variants}
            className={cn(
              "mb-12 max-w-2xl md:mb-16",
              align === "center" && "mx-auto text-center",
            )}
          >
            {eyebrow && (
              <span
                className={cn(
                  "section-eyebrow",
                  tone === "contrast" &&
                    "text-background/70 before:bg-background/50 dark:text-primary dark:before:bg-primary/70",
                  align === "center" && "before:hidden",
                )}
              >
                {eyebrow}
              </span>
            )}
            {title && (
              <h2
                className={cn(
                  "section-title",
                  tone === "contrast" && "text-background dark:text-foreground",
                )}
              >
                {title}
              </h2>
            )}
            {description && (
              <p
                className={cn(
                  "mt-4 text-base leading-relaxed md:text-lg",
                  tone === "contrast"
                    ? "text-background/70 dark:text-muted-foreground"
                    : "text-muted-foreground",
                )}
              >
                {description}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

export const fadeUp: Variants = variants;
