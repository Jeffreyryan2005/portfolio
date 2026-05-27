"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Smooth springs for cursor interpolation
  const cursorX = useSpring(-100, { stiffness: 150, damping: 20, mass: 1 });
  const cursorY = useSpring(-100, { stiffness: 150, damping: 20, mass: 1 });
  
  const dotX = useSpring(-100, { stiffness: 1000, damping: 40, mass: 0.1 });
  const dotY = useSpring(-100, { stiffness: 1000, damping: 40, mass: 0.1 });

  useEffect(() => {
    // Detect fine pointer (mouse) vs coarse pointer (touch)
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  if (!mounted || isTouchDevice) return null;

  return (
    <>
      {/* Inner sharp dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 mix-blend-difference"
        style={{ x: dotX, y: dotY }}
      />
      {/* Outer trailing ring/glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 bg-white/[0.01]"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isHovering ? 1.2 : 1,
          borderColor: isHovering ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)",
          backgroundColor: isHovering ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.01)"
        }}
        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
      />
    </>
  );
}
