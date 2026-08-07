"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="container flex h-16 shrink-0 items-center justify-between">
        <Link
          href="#top"
          aria-label={`${profile.name} — home`}
          className="group flex items-center gap-2 font-display font-semibold tracking-tight"
        >
          <span className="relative grid h-8 w-8 shrink-0 place-items-center overflow-hidden rounded-md border border-border/70 bg-card/70 font-mono text-sm text-primary shadow-sm transition group-hover:border-primary/60">
            {profile.avatarUrl ? (
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                width={32}
                height={32}
                priority
                className="h-full w-full object-cover"
              />
            ) : (
              profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()
            )}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-card/70 hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_0_1px_hsl(var(--primary)/0.25)] transition hover:bg-primary/90 md:inline-flex"
          >
            Book a call
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border/70 bg-card/60 text-foreground transition hover:border-primary/60 md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — absolutely positioned so a closed menu never reserves viewport height */}
      <div
        className={cn(
          "absolute inset-x-0 top-full z-[60] md:hidden",
          open
            ? "pointer-events-auto max-h-[min(80vh,calc(100dvh-4rem))] border-b border-border/60 opacity-100 shadow-lg"
            : "pointer-events-none max-h-0 overflow-hidden border-b-0 opacity-0",
          "bg-background/95 backdrop-blur-xl transition-[opacity,max-height] duration-200 ease-out",
        )}
        aria-hidden={!open}
      >
        <div className="container py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base text-muted-foreground hover:bg-card/70 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={profile.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-md border border-primary/40 bg-primary/10 px-3 py-2 text-center text-sm font-medium text-primary"
              >
                Book a call
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
