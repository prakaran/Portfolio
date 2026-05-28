"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 5000,
  className,
}: {
  text: string;
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.span
        layoutId="subtext"
        className={cn(
          "text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl",
          className,
        )}
      >
        {text}
      </motion.span>

      <motion.span
        layout
        className="md:text-md relative w-fit overflow-hidden rounded-md border border-transparent bg-neutral-100 px-2 py-0.5 text-sm font-normal tracking-tight text-neutral-500 shadow-none ring ring-neutral-900/10 dark:bg-neutral-900 dark:text-neutral-500 dark:ring-1 dark:ring-neutral-200/10"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
              x: [0, -10, 10, -10, 10, 0],
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.8,
            }}
            className={cn("inline-block whitespace-nowrap")}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
