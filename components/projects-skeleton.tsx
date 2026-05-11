/**
 * Server-only Suspense fallback for the projects section.
 * Keep this file free of `"use client"` so it never shares a chunk with
 * `useSearchParams` / navigation hooks (avoids Webpack `undefined.call` load errors).
 */
export function ProjectsSectionSkeleton() {
  return (
    <section
      id="projects"
      className="section-padding relative scroll-mt-24"
      aria-busy="true"
      aria-label="Loading projects"
    >
      <div className="container">
        <div className="mb-4 h-4 w-28 animate-pulse rounded-md bg-muted/30" />
        <div className="mb-3 h-10 max-w-md animate-pulse rounded-lg bg-muted/30" />
        <div className="mb-10 h-20 max-w-2xl animate-pulse rounded-lg bg-muted/20" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="h-72 animate-pulse rounded-2xl border border-border/40 bg-muted/15" />
          <div className="h-72 animate-pulse rounded-2xl border border-border/40 bg-muted/15" />
        </div>
      </div>
    </section>
  );
}
