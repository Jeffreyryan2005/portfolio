"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { KineticHeading } from "@/components/ui/kinetic-heading";

export function Contact() {
  return (
    <section id="contact" className="relative w-full py-32 px-6 overflow-hidden bg-[#030303]">
      {/* Deep Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-[85rem] relative z-10 flex flex-col items-center text-center">
        <KineticHeading as="h2" className="text-5xl md:text-7xl lg:text-[7rem] font-bold text-white font-[family-name:var(--font-space-grotesk)] tracking-tighter mb-8 leading-[0.9]">
          Let's Build.
        </KineticHeading>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-white/50 max-w-[45ch] font-light mb-16 leading-relaxed"
        >
          Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all duration-500 hover:scale-[1.02] hover:bg-white/90 shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)]"
          >
            <span className="relative flex items-center gap-2">
              <Mail size={18} className="transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-0.5" />
              Get in Touch
              <ArrowRight size={18} className="ml-2 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-x-1" />
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 1, 0.5, 1] }}
          viewport={{ once: true }}
          className="mt-32 pt-12 relative w-full flex flex-col items-center gap-12"
        >
          {/* Subtle top gradient divider */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Logo, Statement and Nav Links */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-8">
            <div className="flex flex-col gap-3">
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)] text-left"
              >
                JR<span className="text-cyan-400">.</span>
              </motion.button>
              <p className="text-sm text-white/40 font-light max-w-[30ch]">
                Crafting scalable digital experiences with modern web technologies.
              </p>
            </div>

            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sm text-white/30 hover:text-white/80 transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Bottom Bar: Socials & Copyright */}
          <div className="flex flex-col-reverse md:flex-row items-center md:items-end justify-between w-full gap-6 pt-6 border-t border-white/[0.02]">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-white/20 text-xs font-light tracking-wide">
                © {new Date().getFullYear()} Jeffrey Ryan R. All rights reserved.
              </p>
              <p className="text-white/15 text-[10px] font-light tracking-wider">
                Built with Next.js & Framer Motion
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href={`mailto:${siteConfig.email}`} className="text-white/30 hover:text-white hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium">
                Email
              </a>
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium">
                GitHub
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium">
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
