"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, fadeUp } from "@/components/section";
import {
  industries,
  projectsByIndustry,
  projectCountForIndustry,
  type Project,
} from "@/lib/data";
import { cn } from "@/lib/utils";

function industryNameById(id: string): string | undefined {
  return industries.find((i) => i.id === id)?.name;
}

function projectLinkHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay: (index % 2) * 0.06 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card/40 p-6 transition hover:border-primary/40 hover:bg-card/60 md:p-8"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/10 opacity-0 blur-3xl transition group-hover:opacity-100" />

      <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full border border-border/60 bg-background/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {p.category}
          </span>
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1 rounded-md border border-border/60 bg-background/50 px-2 py-1 text-xs font-medium text-primary transition hover:border-primary/50 hover:bg-primary/10"
              aria-label={`Visit ${projectLinkHostname(p.link)} (opens in a new tab)`}
            >
              <span className="max-w-[140px] truncate sm:max-w-[180px]">
                {projectLinkHostname(p.link)}
              </span>
              <ArrowUpRight size={14} className="shrink-0" />
            </a>
          )}
        </div>

        <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
          {p.name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {p.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.industryIds.map((id) => {
            const label = industryNameById(id);
            if (!label) return null;
            return (
              <span
                key={id}
                className="rounded-md border border-primary/20 bg-primary/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary/90"
              >
                {label}
              </span>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
          {p.impact.map((m) => (
            <div
              key={m}
              className="rounded-lg border border-border/60 bg-background/40 px-3 py-2 text-xs text-foreground/90"
            >
              {m}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border/60 bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectsFilterBar({
  activeIndustryId,
  onSelect,
}: {
  activeIndustryId: string | null;
  onSelect: (id: string | null) => void;
}) {
  return (
    <div
      className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
      role="region"
      aria-label="Filter projects by industry"
    >
      <p className="max-w-xl text-sm text-muted-foreground">
        Browse case studies by industry. Projects can span multiple verticals — pick a lens to match what you are building.
      </p>
      <div className="flex max-w-full flex-col gap-2 sm:items-end">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Filter by industry
        </span>
        <div className="flex max-w-[100vw] gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:max-w-[min(100%,520px)] sm:flex-wrap sm:justify-end [&::-webkit-scrollbar]:hidden">
          <button
            type="button"
            onClick={() => onSelect(null)}
            aria-pressed={activeIndustryId === null}
            className={cn(
              "shrink-0 rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition",
              activeIndustryId === null
                ? "border-primary bg-primary/15 text-primary"
                : "border-border/60 bg-background/40 text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            All
            <span className="ml-1.5 tabular-nums opacity-70">
              ({projectsByIndustry(null).length})
            </span>
          </button>
          {industries.map((ind) => {
            const count = projectCountForIndustry(ind.id);
            const active = activeIndustryId === ind.id;
            return (
              <button
                key={ind.id}
                type="button"
                onClick={() => onSelect(ind.id)}
                aria-pressed={active}
                disabled={count === 0}
                title={count === 0 ? "No projects in this industry yet" : undefined}
                className={cn(
                  "shrink-0 rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition",
                  count === 0 && "cursor-not-allowed opacity-40",
                  active
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border/60 bg-background/40 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {ind.name}
                <span className="ml-1.5 tabular-nums opacity-70">({count})</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const VALID_INDUSTRY_IDS = new Set(industries.map((i) => i.id));

function readIndustryFromSearch(search: string): string | null {
  const raw = new URLSearchParams(search).get("industry");
  return raw && VALID_INDUSTRY_IDS.has(raw) ? raw : null;
}

function ProjectsContent() {
  /** `null` = all industries — matches SSR until the client syncs from `window.location`. */
  const [activeIndustryId, setActiveIndustryId] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => {
      setActiveIndustryId(readIndustryFromSearch(window.location.search));
    };
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  const filtered = useMemo(
    () => projectsByIndustry(activeIndustryId),
    [activeIndustryId],
  );

  const setIndustryFilter = useCallback((id: string | null) => {
    const nextId = id && VALID_INDUSTRY_IDS.has(id) ? id : null;
    setActiveIndustryId(nextId);

    const url = new URL(window.location.href);
    if (nextId) url.searchParams.set("industry", nextId);
    else url.searchParams.delete("industry");
    url.hash = "#projects";
    const pathAndQuery = `${url.pathname}${url.search}`;
    window.history.replaceState(null, "", `${pathAndQuery}${url.hash}`);
  }, []);

  return (
    <>
      <ProjectsFilterBar
        activeIndustryId={activeIndustryId}
        onSelect={setIndustryFilter}
      />

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-border/60 bg-card/30 px-6 py-10 text-center text-sm text-muted-foreground">
          No case studies are tagged for this industry yet. Try another filter
          or view{" "}
          <button
            type="button"
            onClick={() => setIndustryFilter(null)}
            className="text-primary underline-offset-4 hover:underline"
          >
            all projects
          </button>
          .
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((p, i) => (
            <ProjectCard key={p.name} p={p} index={i} />
          ))}
        </div>
      )}
    </>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title={<>Case studies with measurable impact</>}
      description="A snapshot of recent work. Each project includes the problem, the architecture, and the business outcome — filter by industry to find work closest to your domain."
    >
      <ProjectsContent />
    </Section>
  );
}
