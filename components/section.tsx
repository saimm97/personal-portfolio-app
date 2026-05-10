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
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "left",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section-padding relative scroll-mt-24", className)}
    >
      <div className="container">
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
            {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-title">{title}</h2>}
            {description && (
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
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
