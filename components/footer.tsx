import { profile, socialLinks } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 bg-background/60">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 text-sm text-muted-foreground md:flex-row">
        <p>
          © {year} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.slice(0, 3).map((s) => {
            const Icon = s.icon;
            const isExternal = s.href.startsWith("http");
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="grid h-9 w-9 place-items-center rounded-md border border-border/60 bg-card/40 transition hover:border-primary/40 hover:text-primary"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
