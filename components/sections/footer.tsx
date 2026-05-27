"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { navLinks } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0f] px-6 pb-8 pt-16">
      {/* Gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-full max-w-6xl">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-white font-[family-name:var(--font-space-grotesk)]"
            >
              JR<span className="text-cyan-400">.</span>
            </motion.button>

            {/* Nav Links */}
            <nav className="flex flex-wrap items-center justify-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-white/30 hover:text-white/60 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/[0.05] pt-8">
            <p className="flex items-center gap-1.5 text-xs text-white/20">
              Built with Next.js & <Heart size={12} className="text-red-400 fill-red-400" />
            </p>
            <p className="text-xs text-white/15">
              © {new Date().getFullYear()} Jeffrey Ryan R. All rights reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
