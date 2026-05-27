"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Server, Cloud, Code2, Wrench } from "lucide-react";
import { skillsData, allSkillNames } from "@/lib/data";
import { KineticHeading } from "@/components/ui/kinetic-heading";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Monitor,
  Server,
  Cloud,
  Code2,
  Wrench,
};

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] } 
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] } 
    },
  };

  return (
    <section id="skills" className="relative w-full overflow-hidden py-16 md:py-24 px-6 bg-[#0a0a0f]">
      {/* Subtle Premium Background Noise/Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
      
      <div className="mx-auto max-w-[85rem] relative z-10" ref={containerRef}>
        
        {/* Header */}
        <div className="mb-24 flex flex-col items-start text-left">
          <KineticHeading as="h2" className="text-4xl md:text-6xl font-bold text-white font-[family-name:var(--font-space-grotesk)] tracking-tighter mb-6">
            Technical Arsenal.
          </KineticHeading>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="text-lg text-white/50 max-w-[45ch] font-light leading-relaxed"
          >
            A curated list of frameworks, languages, and tools I use to architect scalable, high-performance web applications.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillsData.map((category, i) => {
            const Icon = iconMap[category.icon] || Code2;
            
            return (
              <motion.div
                key={category.category}
                variants={cardVariants}
                className="group relative flex flex-col rounded-[2rem] bg-[#050505] border border-white/10 p-8 transition-all duration-500 hover:border-white/20 hover:bg-[#08080c] hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.05)]"
              >
                {/* Subtle Hover Glow behind the card */}
                <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" style={{ WebkitMaskImage: 'linear-gradient(to bottom, white, transparent)' }} />
                
                <div className="relative z-10 mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.03] border border-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/20">
                    <Icon size={24} className="text-white/70 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                    {category.category}
                  </h3>
                </div>

                <div className="relative z-10 flex flex-wrap gap-3 mt-auto">
                  {category.skills.map((skill, j) => (
                    <motion.div
                      key={skill.name}
                      variants={badgeVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="cursor-default rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:bg-white/15 hover:border-white/30 hover:text-white"
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
