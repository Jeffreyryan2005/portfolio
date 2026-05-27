"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="w-full flex justify-center py-2 pointer-events-none overflow-hidden">
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: "40px" }}
        transition={{ duration: 1.0, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: true }}
        className="w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"
      />
    </div>
  );
}
