"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

type AvatarProps = {
  size?: number;
  className?: string;
};

export function Avatar({ size = 96, className }: AvatarProps) {
  const [errored, setErrored] = useState(false);
  const initials = profile.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const useImage = Boolean(profile.avatarUrl) && !errored;

  return (
    <div
      className={cn(
        "relative grid place-items-center overflow-hidden rounded-full border border-border/70 bg-gradient-to-br from-card via-card/80 to-card/40 shadow-[0_0_0_4px_hsl(var(--primary)/0.08)]",
        className,
      )}
      style={{ width: size, height: size }}
      aria-label={`${profile.name} avatar`}
    >
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-80" />
      {useImage ? (
        <Image
          src={profile.avatarUrl}
          alt={profile.name}
          width={size}
          height={size}
          priority
          onError={() => setErrored(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span
          className="relative font-display font-bold tracking-tight text-primary"
          style={{ fontSize: size * 0.42, letterSpacing: "-0.05em" }}
        >
          {initials}
        </span>
      )}
    </div>
  );
}
