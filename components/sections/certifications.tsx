"use client";
import { motion } from "framer-motion";
import { Trophy, Award, FileText, BookOpen, Layers, GraduationCap, Sparkles } from "lucide-react";
import { certificationsData, achievementsData } from "@/lib/data";
import { KineticHeading } from "@/components/ui/kinetic-heading";

const certIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  BookOpen,
  Layers,
  GraduationCap,
  Sparkles,
};

const achieveIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Trophy,
  Award,
  FileText,
};

export function Certifications() {
  return (
    <section id="achievements" className="relative w-full overflow-hidden py-24 px-6 bg-[#030303]">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-20">
          <KineticHeading as="h2" className="text-4xl md:text-6xl font-bold text-white font-[family-name:var(--font-space-grotesk)] tracking-tighter mb-4">
            Recognition.
          </KineticHeading>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="text-lg text-white/50 max-w-xl font-light"
          >
            Awards, certifications, and industry acknowledgments validating expertise and dedication to the craft.
          </motion.p>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-xl font-semibold text-white flex items-center gap-3 tracking-tight"
          >
            <Trophy size={20} className="text-white/40" />
            Awards & Achievements
          </motion.h3>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievementsData.map((achievement, i) => {
              const Icon = achieveIconMap[achievement.icon] || Trophy;
              return (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group p-8 h-full rounded-[1.5rem] bg-[#050505] border border-white/10 hover:border-white/20 hover:bg-[#0f0f14] transition-all duration-500 shadow-xl"
                >
                  <div className="mb-6 inline-flex rounded-2xl bg-white/[0.02] p-3.5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 group-hover:rotate-3 transition-all duration-500">
                    <Icon size={24} className="text-white/70 group-hover:text-white" />
                  </div>
                  <h4 className="mb-3 text-lg font-bold text-white tracking-tight group-hover:text-white transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-xl font-semibold text-white flex items-center gap-3 tracking-tight"
          >
            <Award size={20} className="text-white/40" />
            Certifications
          </motion.h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certificationsData.map((cert, i) => {
              const Icon = certIconMap[cert.icon] || Award;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group p-6 h-full rounded-[1.5rem] bg-[#050505] border border-white/10 hover:border-white/20 hover:bg-[#0f0f14] transition-all duration-500 shadow-xl"
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div className="inline-flex rounded-xl bg-white/[0.02] p-3 border border-white/5 group-hover:bg-white/10 group-hover:border-white/20 group-hover:-rotate-3 transition-all duration-500">
                      <Icon size={20} className="text-white/70 group-hover:text-white" />
                    </div>
                  </div>
                  <h4 className="mb-2 text-base font-bold text-white tracking-tight group-hover:text-white transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-medium tracking-widest text-white/40 uppercase mb-4">
                    {cert.issuer}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
