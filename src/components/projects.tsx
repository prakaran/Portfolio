"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { Project } from "@/constants/projects";
import SectionHeading from "./section-heading";

const techMap: Record<string, string> = {
  React: "react",
  TailwindCSS: "tailwindcss",
  MongoDB: "mongodb",
  NodeJS: "nodejs",
  Express: "express",
  Rust: "rust",
  NextJS: "nextjs",
  Postgres: "postgres",
  Prisma: "prisma",
  Typescript: "typescript",
};

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      <div className="shadow-section-inset dark:shadow-section-inset-dark my-4 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800">
        <SectionHeading delay={0.2}>
          I love building things and I'm always looking for new challenges.
        </SectionHeading>
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
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
              className="group relative mb-4 rounded-2xl"
            >
              <Link href={project.href}>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    className="max-h-[174.219px] w-full rounded-xl object-cover transition duration-200 ease-in-out group-hover:scale-[1.02]"
                    src={project.src}
                    alt={project.title}
                    width={300}
                    height={300}
                    loading="eager"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
                  <div>
                    <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-200">
                      {project.title}
                    </h2>
                    <p className="mt-2 max-w-[14rem] text-sm text-neutral-500 dark:text-neutral-400">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center">
                    {project.techStack.map((tech, i) => (
                      <motion.img
                        key={tech}
                        src={`https://skillicons.dev/icons?i=${techMap[tech] || "react"}`}
                        alt={tech}
                        title={tech}
                        className="h-8 w-8 rounded-full border-2 border-neutral-200 shadow-sm dark:border-neutral-800"
                        style={{
                          marginLeft: i === 0 ? 0 : "-8px",
                          zIndex: 10,
                        }}
                        whileHover={{
                          scale: 1.2,
                          zIndex: 20,
                          y: -2,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
