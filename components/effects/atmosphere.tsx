"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export function Atmosphere() {
  return (
    <div 
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#030303]"
    >
      {/* Static Deep Ambient Gradient (Zero GPU Overhead) */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 10% 20%, rgba(8, 145, 178, 0.15) 0%, transparent 40%), radial-gradient(circle at 90% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 40%), radial-gradient(circle at 30% 90%, rgba(217, 70, 239, 0.1) 0%, transparent 40%)'
        }}
      />

      {/* Clean, minimalistic grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{ maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 100%)" }}
      />
      
      {/* Extremely subtle, static deep glow (Highly performant) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
}
