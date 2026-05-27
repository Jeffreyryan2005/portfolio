"use client";
import { motion } from "framer-motion";
import { aboutData } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TextReveal } from "@/components/ui/text-reveal";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 bg-[#0a0a0f]">
      {/* Subtle top gradient */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0a0a0f] to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <Reveal>
          <div className="mb-16">
            <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-cyan-400">
              About Me
            </p>
            <TextReveal
              text={aboutData.headline}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-space-grotesk)] leading-tight"
            />
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bio Text */}
          <Reveal delay={0.1}>
            <div className="space-y-6">
              {aboutData.description.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg leading-relaxed text-white/50"
                >
                  {paragraph.trim()}
                </p>
              ))}

              <div className="pt-4">
                <div className="inline-flex items-center gap-2 text-sm text-white/30">
                  <span className="h-[1px] w-8 bg-gradient-to-r from-cyan-500 to-violet-500" />
                  Based in Tirunelveli, India
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {aboutData.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.2 + i * 0.1}>
                <SpotlightCard className="p-6 h-full">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent font-[family-name:var(--font-space-grotesk)]"
                    />
                    <p className="mt-2 text-sm text-white/40">{stat.label}</p>
                  </motion.div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
