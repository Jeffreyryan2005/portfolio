"use client";
import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  colors?: string;
  size?: string;
}

export function GradientBlob({
  className,
  colors = "from-cyan-500/30 via-violet-500/30 to-fuchsia-500/30",
  size = "w-[500px] h-[500px]",
}: GradientBlobProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-[100px] bg-gradient-to-r animate-blob opacity-30",
        colors,
        size,
        className
      )}
    />
  );
}
