"use client";
import { useState } from "react";
import Container from "../container";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

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
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];
  return (
    <Container>
      <motion.nav
        animate={{
          boxShadow: scrolled ? "var(--shadow-input)" : "none",
          width: scrolled ? "55%" : "100%",
          y: scrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-4xl items-center justify-between rounded-full bg-white px-3 py-2 dark:bg-neutral-900"
      >
        <Image
          className="h-10 w-10 rounded-full"
          src="/avatar.png"
          alt="Avatar"
          width={50}
          height={50}
        />
        <div className="flex items-center">
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
