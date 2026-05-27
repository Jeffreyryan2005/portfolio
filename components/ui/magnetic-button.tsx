"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function MagneticButton({ children, className, onClick, href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const Component = href ? 'a' : 'button';
  const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      className="inline-block"
    >
      <Component
        onClick={onClick}
        {...linkProps}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm",
          "bg-[#0a0a0f] text-white border border-white/10",
          "hover:border-white/20 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.08)] transition-all duration-500",
          "before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-cyan-500/15 before:to-fuchsia-500/15 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
          "overflow-hidden",
          className
        )}
      >
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  );
}

export function MagneticButtonOutline({ children, className, onClick, href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const Component = href ? 'a' : 'button';
  const linkProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 15, mass: 0.5 }}
      className="inline-block"
    >
      <Component
        onClick={onClick}
        {...linkProps}
        className={cn(
          "relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm",
          "border border-white/20 text-white/90 hover:text-white",
          "hover:border-white/40 hover:bg-white/5",
          "transition-all duration-300",
          "backdrop-blur-sm",
          className
        )}
      >
        {children}
      </Component>
    </motion.div>
  );
}
