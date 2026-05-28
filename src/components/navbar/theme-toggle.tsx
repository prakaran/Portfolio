"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";
import { motion } from "motion/react";

interface ThemeToggleProps {
  hovered: string | null;
  setHovered: (value: string | null) => void;
}

export const ThemeToggle = ({ hovered, setHovered }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="relative mx-2 cursor-pointer px-2 py-1"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      onMouseEnter={() => setHovered("theme")}
      onMouseLeave={() => setHovered(null)}
    >
      {hovered === "theme" && (
        <motion.span
          layoutId="hovered-span"
          className="absolute inset-0 h-full w-full rounded-md bg-neutral-200 dark:bg-neutral-800"
        />
      )}
      {mounted &&
        (theme === "dark" ? (
          <motion.div animate={{ rotate: 180 }} transition={{ duration: 0.5 }}>
            <IconSun stroke={1.5} size={20} className="relative z-10" />
          </motion.div>
        ) : (
          <motion.div animate={{ rotate: -90 }} transition={{ duration: 0.5 }}>
            <IconMoon stroke={1.5} size={20} className="relative z-10" />
          </motion.div>
        ))}
    </div>
  );
};
