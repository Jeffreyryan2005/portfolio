"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TypingEffect } from "@/components/ui/typing-effect";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

// Floating dust particles
function HeroParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white/15"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
            scale: Math.random() * 1 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            x: [null, Math.random() * 100 - 50],
            opacity: [null, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] } }
  };

  return (
    <motion.section
      id="hero"
      style={{ y, opacity }}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-12 md:pt-20 bg-[#030303]"
    >
      <HeroParticles />
      <div className="relative z-10 w-full max-w-[85rem] px-6 mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/5 bg-white/[0.02] px-4 py-1.5 backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[10px] font-semibold text-white/60 uppercase tracking-[0.25em]">
              Available for Work
            </span>
          </motion.div>

          <motion.h1 
            variants={container}
            initial="hidden"
            animate="show"
            className="mb-8 text-[11.5vw] sm:text-6xl md:text-7xl font-bold tracking-tighter text-white font-[family-name:var(--font-space-grotesk)] leading-[0.9]"
          >
            <motion.span variants={item} className="block text-white/70">Hi, I'm</motion.span>
            <motion.span variants={item} className="block text-white">Jeffrey Ryan.</motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="text-xl sm:text-2xl text-white/50 mb-6 max-w-xl font-light tracking-normal leading-snug"
          >
            <TypingEffect words={siteConfig.heroSubtitles} />
          </motion.div>

          {/* Mini Tech Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8"
          >
            {["Next.js", "TypeScript", "AWS", "AI Systems"].map((tech) => (
              <span key={tech} className="px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase text-white/70 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-sm">
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.25, 1, 0.5, 1] }}
            className="mb-10 text-base text-white/40 leading-relaxed max-w-[55ch] mx-auto lg:mx-0 font-light"
          >
            {siteConfig.resumeTagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
          >
            <MagneticButton onClick={() => scrollTo("projects")} className="w-full sm:w-auto px-8 py-3.5 text-sm before:hover:opacity-40">
              View Projects
            </MagneticButton>
            
            <div className="flex gap-3">
              <MagneticButton onClick={() => window.open(siteConfig.github, "_blank")} className="px-4 py-3">
                <GithubIcon size={18} className="text-white/50 hover:text-white transition-colors" />
              </MagneticButton>
              <MagneticButton onClick={() => window.open(siteConfig.linkedin, "_blank")} className="px-4 py-3">
                <LinkedinIcon size={18} className="text-white/50 hover:text-white transition-colors" />
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Right Content: Premium Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="flex-1 relative flex items-center justify-center w-full"
        >
          {/* Soft, Slow-Breathing Radial Glow (Premium Cinematic feel) */}
          <motion.div 
            animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 via-violet-500/10 to-transparent blur-[80px] rounded-full pointer-events-none" 
          />

          {/* Secondary warm floating blob */}
          <motion.div 
            animate={{ opacity: [0.08, 0.15, 0.08], x: ["-10%", "10%", "-10%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-bl from-fuchsia-600/15 via-transparent to-cyan-500/10 blur-[100px] rounded-full pointer-events-none" 
          />

          {/* Faint Orbital Line with Rotation */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-dashed border-white/10"
          />

          {/* Second Inner Orbital Line */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-white/[0.03]"
          />

          {/* Crisp, realistic portrait with natural shadow and subtle float */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "15%"]) }}
            className="relative z-20"
          >
            {/* Tight glow behind image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/25 via-violet-500/15 to-fuchsia-500/10 blur-[40px] scale-110" />
            <div className="relative w-64 h-64 sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden shadow-2xl bg-[#030303] border border-white/10">
              <Image 
                src="/profile.png" 
                alt={siteConfig.name}
                fill
                priority
                className="object-cover transition-transform duration-[2s] ease-out hover:scale-105"
              />
            </div>
          </motion.div>

        </motion.div>

      </div>

      {/* Clean Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] font-bold tracking-[0.3em] text-white/30 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-9 rounded-full border border-white/20 flex justify-center p-1.5"
        >
          <motion.div 
            animate={{ y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-white/60 rounded-full"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
