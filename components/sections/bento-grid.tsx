"use client";
import { motion } from "framer-motion";
import { User, Code2, Briefcase, GraduationCap, MapPin, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig, skillsData, experienceData, aboutData } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { cn } from "@/lib/utils";

export function BentoGridSection() {
  return (
    <section id="about" className="relative w-full overflow-hidden py-32 px-6 bg-[#030303]">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-4">
              About Me.
            </h2>
            <p className="text-white/40 max-w-2xl text-lg">
              A glimpse into my background, skills, and experience.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          
          {/* Main About Tile (Spans 2x2 on large screens) */}
          <Reveal className="md:col-span-2 md:row-span-2" delay={0.1}>
            <SpotlightCard className="h-full p-8 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 border border-indigo-500/20">
                  <User className="text-indigo-400" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">The Developer</h3>
                <p className="text-white/50 leading-relaxed text-sm md:text-base whitespace-pre-line">
                  {aboutData.description}
                </p>
              </div>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center gap-2 text-xs font-medium text-white/40 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                  <MapPin size={14} /> {siteConfig.location}
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-white/40 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                  <Mail size={14} /> Available for hire
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Current Role Tile */}
          <Reveal className="md:col-span-1 md:row-span-1 lg:col-span-2" delay={0.2}>
            <SpotlightCard className="h-full p-8 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
              <Briefcase className="text-cyan-400 mb-4" size={24} />
              <h3 className="text-white/40 text-sm uppercase tracking-wider mb-2">Current Focus</h3>
              <p className="text-xl md:text-2xl font-semibold text-white leading-tight">
                {experienceData[0].role} <br />
                <span className="text-cyan-400">@ {experienceData[0].company}</span>
              </p>
              <a href="#projects" className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-white/10 group-hover:text-white transition-all">
                <ArrowUpRight size={18} />
              </a>
            </SpotlightCard>
          </Reveal>

          {/* Core Skills Tile */}
          <Reveal className="md:col-span-2 lg:col-span-1 md:row-span-2" delay={0.3}>
            <SpotlightCard className="h-full p-8 flex flex-col">
              <Code2 className="text-purple-400 mb-6" size={24} />
              <h3 className="text-xl font-bold text-white mb-6">Tech Arsenal</h3>
              <div className="flex flex-wrap gap-2 overflow-y-auto pr-2 custom-scrollbar">
                {skillsData.flatMap(c => c.skills).slice(0, 15).map(skill => (
                  <span key={skill.name} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-xs font-medium text-white/70 hover:text-white hover:border-white/20 transition-colors">
                    {skill.name}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-6 text-xs text-white/40">
                + Exploring new tools constantly
              </div>
            </SpotlightCard>
          </Reveal>

          {/* Education Tile */}
          <Reveal className="md:col-span-1 md:row-span-1 lg:col-span-1" delay={0.4}>
            <SpotlightCard className="h-full p-8 flex flex-col justify-center">
              <GraduationCap className="text-fuchsia-400 mb-4" size={24} />
              <h3 className="text-white/40 text-sm uppercase tracking-wider mb-2">Education</h3>
              <p className="text-lg font-semibold text-white">B.Tech in CS & Engineering</p>
              <p className="text-sm text-fuchsia-400 mt-1">2023 - 2027</p>
            </SpotlightCard>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
