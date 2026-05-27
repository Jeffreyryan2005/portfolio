"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { projectsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { KineticHeading } from "@/components/ui/kinetic-heading";

const projectImages = [
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
  "/pathfinder.png",
  "/wastezero.png"
];

function PremiumProjectCard({ project, index }: { project: typeof projectsData[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const imageSrc = projectImages[index % projectImages.length];
  const isFeatured = index === 0;

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-10%" }}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] bg-[#050505] transition-all duration-700 w-full",
        "border border-white/[0.08] hover:border-white/20",
        "hover:shadow-[0_30px_80px_-20px_rgba(6,182,212,0.08),0_0_0_1px_rgba(255,255,255,0.05)]",
        isFeatured ? "min-h-[500px] lg:min-h-[600px] col-span-1 lg:col-span-2" : "min-h-[450px] col-span-1 flex flex-col"
      )}
    >
      {/* Animated Gradient Border Glow on Hover */}
      <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-cyan-500/0 via-white/0 to-violet-500/0 group-hover:from-cyan-500/20 group-hover:via-white/5 group-hover:to-violet-500/20 transition-all duration-700 opacity-0 group-hover:opacity-100 -z-10 blur-sm" />

      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[2rem]">
        <motion.div 
          style={{ y }}
          className="absolute -top-[10%] left-0 w-full h-[120%] opacity-[0.5] transition-all duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:opacity-[0.7]"
        >
          <Image 
            src={imageSrc} 
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/30" />
        {/* Hover spotlight effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(6,182,212,0.06),transparent_40%)] transition-opacity duration-500 pointer-events-none" />
      </div>

      <div className={cn(
        "relative z-10 flex flex-col justify-end h-full",
        isFeatured ? "p-8 sm:p-12" : "p-6 sm:p-8"
      )}>
        {/* Tagline + Featured Badge */}
        <div className="flex items-center gap-3 mb-4">
          {project.featured && (
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 backdrop-blur-md border border-cyan-500/20 px-3 py-1">
              <Star size={12} className="text-cyan-400" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                Featured
              </span>
            </div>
          )}
          <span className="text-[11px] font-medium text-white/40 tracking-wide">{project.tagline}</span>
        </div>
        
        <h3 className={cn(
          "font-bold text-white font-[family-name:var(--font-space-grotesk)] mb-3 tracking-tight",
          isFeatured ? "text-3xl sm:text-5xl" : "text-2xl sm:text-3xl"
        )}>
          {project.title}
        </h3>
        
        {/* Description always visible */}
        <p className="text-sm sm:text-base text-white/50 max-w-xl mb-5 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Project Stats Row */}
        {project.stats && (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
            {project.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60" />
                <span className="text-[11px] font-semibold tracking-wide text-white/60 uppercase">
                  {stat}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack + Action Buttons Row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/60"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links - Always visible */}
          <div className="flex items-center gap-3 shrink-0">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md px-4 py-2 text-xs font-medium text-white/70 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white"
              >
                <GithubIcon size={14} />
                GitHub
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-xs font-bold transition-transform"
              >
                <ExternalLink size={14} />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative w-full overflow-hidden py-24 px-6 bg-[#030303]">
      <div className="mx-auto max-w-[85rem]">
        
        <div className="mb-20 flex flex-col items-start text-left">
          <KineticHeading as="h2" className="text-4xl md:text-6xl font-bold text-white font-[family-name:var(--font-space-grotesk)] tracking-tighter mb-6">
            Selected Works.
          </KineticHeading>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="text-lg text-white/50 max-w-xl font-light leading-relaxed"
          >
            A curated selection of engineering feats demonstrating clean, scalable code and minimal interface design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project, i) => (
            <PremiumProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
