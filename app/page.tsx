"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { BentoGridSection } from "@/components/sections/bento-grid";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

import { SectionDivider } from "@/components/ui/section-divider";
import { Atmosphere } from "@/components/effects/atmosphere";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { CustomCursor } from "@/components/ui/custom-cursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Atmosphere />
      <ScrollProgress />

      <Navbar />
      <main className="relative z-10 flex flex-col w-full">
        <Hero />
        <SectionDivider />
        <BentoGridSection />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <div className="w-full bg-[#030303]/95 md:bg-[#030303]/90 md:backdrop-blur-xl border-y border-white/5">
          <Experience />
        </div>
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <div className="w-full bg-[#030303]/95 md:bg-[#030303]/90 md:backdrop-blur-xl border-y border-white/5">
          <Certifications />
        </div>
        <Contact />
      </main>
    </>
  );
}
