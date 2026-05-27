"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 30 + 20;
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => setIsExiting(true), 50);
        setTimeout(() => onComplete(), 300);
      } else {
        setProgress(Math.floor(currentProgress));
      }
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  const name = "JEFFREY";

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303] overflow-hidden"
          exit={{ 
            opacity: 0, 
            scale: 1.1, 
            filter: "blur(20px)",
            backgroundColor: "transparent"
          }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Deep Glow Background */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-600/20 blur-[100px] rounded-full mix-blend-screen" 
          />

          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Logo Text with Blur Reveal */}
            <div className="flex overflow-hidden mb-8">
              {name.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="text-4xl md:text-6xl font-bold tracking-[0.3em] text-white font-[family-name:var(--font-space-grotesk)] drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Glowing Progress Line */}
            <div className="relative w-64 h-[2px] bg-white/5 overflow-hidden rounded-full mt-4">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 flex items-center gap-4 text-xs font-medium tracking-[0.2em] text-white/40 uppercase"
            >
              <span>Loading</span>
              <span className="w-1 h-1 rounded-full bg-white/40 animate-ping" />
              <span className="tabular-nums font-[family-name:var(--font-space-grotesk)]">{progress}%</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
