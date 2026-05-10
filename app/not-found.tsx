import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative grid min-h-[100svh] place-items-center overflow-hidden px-6 py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-y opacity-40" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-fade" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />

      <div className="max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
          Error 404
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          <span className="text-gradient animate-shimmer">
            Page not found
          </span>
        </h1>
        <p className="mt-5 text-base text-muted-foreground md:text-lg">
          The page you&rsquo;re looking for doesn&rsquo;t exist, has moved, or
          never existed in the first place.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            <Home size={16} />
            Back to home
          </Link>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-md border border-border/70 bg-card/60 px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/60 hover:bg-card"
          >
            <ArrowLeft size={16} />
            Get in touch instead
          </Link>
        </div>
      </div>
    </main>
  );
}
