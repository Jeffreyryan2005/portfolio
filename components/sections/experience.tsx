"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experienceData } from "@/lib/data";
import { KineticHeading } from "@/components/ui/kinetic-heading";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative w-full overflow-hidden py-24 px-6 bg-[#030303]">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-24">
          <KineticHeading as="h2" className="text-4xl md:text-6xl font-bold text-white font-[family-name:var(--font-space-grotesk)] tracking-tighter mb-6">
            Where I've Worked.
          </KineticHeading>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="text-lg text-white/50 max-w-xl font-light leading-relaxed"
          >
            A timeline of professional engineering roles, focusing on impact, scale, and high-quality software delivery.
          </motion.p>
        </div>

        {/* Clean Apple-style Linear Timeline */}
        <div ref={containerRef} className="relative">
          {/* Animated Progress Line with Gradient Fade */}
          <div className="absolute left-[15px] md:left-[23px] top-2 bottom-0 w-[1px] bg-gradient-to-b from-white/[0.05] via-white/[0.05] to-transparent">
            <motion.div
              className="w-full bg-gradient-to-b from-cyan-400/60 via-white/30 to-transparent origin-top shadow-[0_0_8px_rgba(6,182,212,0.3)]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-20">
            {experienceData.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
                viewport={{ once: true, margin: "-10%" }}
                className="relative flex flex-col md:flex-row gap-8 md:gap-0 group"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ backgroundColor: "#030303", borderColor: "rgba(255,255,255,0.2)", boxShadow: "0 0 0px rgba(6,182,212,0)" }}
                  whileInView={{ backgroundColor: "#fff", borderColor: "rgba(255,255,255,1)", boxShadow: "0 0 20px rgba(255,255,255,0.4)" }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
                  className="absolute left-[7px] md:left-[15px] top-2 w-2.5 h-2.5 rounded-full border-2 z-10 transition-colors"
                />

                {/* Left Column: Date & Company (40%) */}
                <div className="pl-12 md:pl-20 md:w-[40%] shrink-0">
                  <div className="text-xs font-bold tracking-[0.15em] text-white/40 uppercase mb-2 md:mb-3">
                    {exp.duration}
                  </div>
                  <div className="text-lg md:text-xl font-bold text-white mb-3">
                    {exp.company}
                  </div>
                  <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-3 py-1.5 text-[10px] font-medium tracking-widest text-cyan-400/80 uppercase">
                    {exp.type}
                  </div>
                </div>

                {/* Right Column: Role & Details (60%) */}
                <div className="pl-12 md:pl-0 md:w-[60%] pt-2 md:pt-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 tracking-tight leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-base text-white/60 mb-8 leading-relaxed max-w-[55ch]">
                    {exp.description}
                  </p>
                  <ul className="space-y-4">
                    {exp.highlights.map((highlight, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-4 text-sm md:text-base text-white/50 leading-relaxed max-w-[55ch]"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/30 transition-colors group-hover:bg-white/60" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
