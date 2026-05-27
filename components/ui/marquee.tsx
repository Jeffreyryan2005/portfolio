"use client";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: number;
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = false,
  speed = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex gap-8 overflow-hidden [--gap:2rem]",
        className
      )}
    >
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 items-center gap-8",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{
            animation: `marquee ${speed}s linear infinite${reverse ? " reverse" : ""}`,
          }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
