"use client";
import { useState, useEffect } from "react";
import Container from "../container";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { Link } from "next-view-transitions";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["58%", "50%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  return (
    <Container>
      <motion.nav
        style={{
          boxShadow: scrolled ? "var(--shadow-input)" : "none",
          border: scrolled ? "1px solid var(--color-border)" : "none",
          width,
          y,
          maxWidth: "56rem",
        }}
        transition={{
          duration: 0.4,
          ease: "linear",
        }}
        className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full bg-white/50 px-3 py-2 backdrop-blur-sm dark:bg-neutral-900/50"
      >
        <Link href="/">
          <Image
            className="h-10 w-10 rounded-full"
            src="/avatar.png"
            alt="Avatar"
            width={50}
            height={50}
            loading="eager"
          />
        </Link>
        <div className="flex items-center">
          <ThemeToggle hovered={hovered} setHovered={setHovered} />
          {navItems.map((item) => (
            <Link
              className="relative px-2 py-1 text-sm"
              key={item.title}
              href={item.href}
              onMouseEnter={() => setHovered(item.title)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === item.title && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-md bg-neutral-200 dark:bg-neutral-800"
                />
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};

export default Navbar;
