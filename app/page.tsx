"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "@/components/sections/loading-screen";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { BentoGridSection } from "@/components/sections/bento-grid";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { SectionDivider } from "@/components/ui/section-divider";
import { Atmosphere } from "@/components/effects/atmosphere";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { CustomCursor } from "@/components/ui/custom-cursor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <SmoothScrollProvider>
          <Atmosphere />
          <ScrollProgress />

          <Navbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-10 flex flex-col w-full"
          >
            <Hero />
            <SectionDivider />
            <BentoGridSection />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <div className="w-full bg-[#030303]/90 backdrop-blur-xl border-y border-white/5">
              <Experience />
            </div>
            <SectionDivider />
            <Projects />
            <SectionDivider />
            <div className="w-full bg-[#030303]/90 backdrop-blur-xl border-y border-white/5">
              <Certifications />
            </div>
            <Contact />
          </motion.main>
        </SmoothScrollProvider>
      )}
    </>
  );
}
