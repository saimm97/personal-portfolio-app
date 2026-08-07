"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, fadeUp } from "@/components/section";
import { products, type Product } from "@/lib/data";

function productHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function StatusBadge({ status }: { status: Product["status"] }) {
  const styles: Record<
    Product["status"],
    { border: string; dot: string }
  > = {
    Live: {
      border: "border-emerald-400/30 bg-emerald-400/10 text-emerald-400",
      dot: "animate-pulse bg-emerald-400",
    },
    "In Development": {
      border: "border-amber-400/30 bg-amber-400/10 text-amber-400",
      dot: "animate-pulse bg-amber-400",
    },
    Shipped: {
      border: "border-border/60 bg-background/40 text-muted-foreground",
      dot: "bg-muted-foreground",
    },
  };
  const s = styles[status];
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] " +
        s.border
      }
    >
      <span className={"h-1.5 w-1.5 rounded-full " + s.dot} />
      {status}
    </span>
  );
}

function ProductCard({ p, index }: { p: Product; index: number }) {
  const CardInner = (
    <>
      <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            {p.category}
          </span>
          <StatusBadge status={p.status} />
        </div>

        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
          {p.name}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-foreground/90">
          {p.tagline}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {p.description}
        </p>

        <ul className="mt-5 space-y-2">
          {p.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm text-foreground/90"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border/50 bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>

          {p.url && (
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition group-hover:gap-2.5">
              Visit {productHostname(p.url)}
              <ArrowUpRight size={15} className="shrink-0" />
            </span>
          )}
        </div>
      </div>
    </>
  );

  const className =
    "group relative flex h-full flex-col overflow-hidden border-t border-border/70 pt-6 transition md:pt-8";

  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay: (index % 2) * 0.06 }}
      className="h-full"
    >
      {p.url ? (
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          aria-label={`Visit ${p.name} (opens in a new tab)`}
        >
          {CardInner}
        </a>
      ) : (
        <div className={className}>{CardInner}</div>
      )}
    </motion.article>
  );
}

export function Products() {
  return (
    <Section
      id="products"
      eyebrow="Products"
      title={<>Products I&apos;ve helped ship</>}
      description="Venture and production products I've built and shipped — from zero-to-launch health and fintech apps to LLM career tooling and enterprise claims platforms."
    >
      <div className="grid gap-10 border-t border-border/50 pt-2 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
        {products.map((p, i) => (
          <ProductCard key={p.name} p={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
