"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Rakam",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
      description:
        "A peer-to-peer digital wallet app for seamless money transfers and transaction tracking.",
      href: "#",
    },
    {
      title: "Solana Address Book",
      src: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&auto=format&fit=crop",
      description:
        "An on-chain contact manager on Solana using PDAs and ATAs for address verification.",
      href: "#",
    },
    {
      title: "Portfolio",
      src: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&auto=format&fit=crop",
      description:
        "My personal portfolio — minimal, fast, and built with Next.js and Framer Motion.",
      href: "#",
    },
    {
      title: "Rakam Frontend",
      src: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&auto=format&fit=crop",
      description:
        "A clean, minimalist fintech UI redesign built with React and TailwindCSS.",
      href: "#",
    },
  ];
  return (
    <>
      <div className="py-10">
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
          I love building things and I'm always looking for new challenges.
        </p>
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeInOut",
              }}
              key={project.title}
              className="group relative"
            >
              <Link href={project.href}>
                <Image
                  className="h-72 w-full rounded-xl object-cover transition duration-200 ease-in-out group-hover:scale-[1.02]"
                  src={project.src}
                  alt={project.title}
                  width={300}
                  height={300}
                  loading="eager"
                />
                <h2 className="mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
                  {project.title}
                </h2>
                <p className="mt-2 max-w-sm text-sm tracking-tight text-neutral-500 dark:text-neutral-400">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
