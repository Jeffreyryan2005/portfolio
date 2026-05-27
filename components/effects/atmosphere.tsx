"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export function Atmosphere() {
  const { scrollYProgress } = useScroll();
  
  // Subtle parallax mapping
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  return (
    <motion.div 
      style={{ y }}
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#030303]"
    >
      {/* Dynamic Deep Ambient Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.02, 0.035, 0.02],
          x: ["-20%", "0%", "-20%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-cyan-900/20 blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.015, 0.03, 0.015],
          x: ["20%", "0%", "20%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-violet-900/20 blur-[150px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.02, 0.04, 0.02],
          y: ["10%", "0%", "10%"],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[50vw] rounded-full bg-fuchsia-900/15 blur-[150px]"
      />

      {/* Clean, minimalistic grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{ maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 100%)" }}
      />
      
      {/* Extremely subtle, static deep glow (Highly performant) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-white/[0.02] blur-[120px] rounded-full" />
      
      {/* Premium Cinematic Grain (Opitmized SVG Noise) */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
    </motion.div>
  );
}
