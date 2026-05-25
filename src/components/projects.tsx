"use client";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { Project } from "@/constants/projects";
import SectionHeading from "./section-heading";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      <div className="shadow-section-inset my-4 border-y border-neutral-200 px-4">
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
                <Image
                  className="max-h-[174.219px] w-full rounded-xl object-cover transition duration-200 ease-in-out group-hover:scale-[1.02]"
                  src={project.src}
                  alt={project.title}
                  width={300}
                  height={300}
                  loading="eager"
                />
                <div className="flex flex-1 flex-col justify-between py-4 transition-all duration-300 group-hover:px-4">
                  <div>
                    <h2 className="mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
                      {project.title}
                    </h2>
                    <p className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-400">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-2 flex max-w-[14rem] flex-wrap gap-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-neutral-500 dark:text-neutral-400"
                      >
                        {tech}
                      </span>
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
