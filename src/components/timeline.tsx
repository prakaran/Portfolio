"use client";
import { motion, useInView } from "motion/react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import React, { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import SectionHeading from "./section-heading";

interface TimelineItem {
  title: string;
  description: string;
}

interface TimelineData {
  title: string;
  content: TimelineItem[];
}

const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const data: TimelineData[] = [
    {
      title: "2022",
      content: [
        {
          title: "Graduated from high school",
          description:
            "Successfully completed my secondary education with a strong foundation in science and mathematics, paving the way for my passion in technology.",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: "Started college",
          description:
            "Began my undergraduate studies in Computer Science. Actively engaged in coding clubs and started building my first web development projects.",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: "Started working on my first startup",
          description:
            "Founded an early-stage tech startup focused on solving real-world problems. Gained invaluable hands-on experience in product building and teamwork.",
        },
      ],
    },
    {
      title: "2025",
      content: [
        {
          title: "Scaled my startup",
          description:
            "Reached key milestones and significantly grew the user base. Learned valuable lessons in scaling applications and managing larger architectures.",
        },
      ],
    },
    {
      title: "2026",
      content: [
        {
          title: "Expanding expertise in modern technologies",
          description:
            "Continuing to explore advanced tooling, contributing to open-source projects, and building cutting-edge digital experiences.",
        },
      ],
    },
  ];
  return (
    <>
      <div
        ref={ref}
        className="shadow-section-inset dark:shadow-section-inset-dark my-4 border-y border-neutral-200 px-4"
      >
        <SectionHeading delay={0.2} className="my-8">
          Here is the timeline of my life achievements.
        </SectionHeading>
        {data.map((year, idx) => (
          <div key={idx} className="mb-4">
            <motion.h2
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{
                filter: isInView ? "blur(0px)" : "blur(10px)",
                opacity: isInView ? 1 : 0,
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
                delay: 0.1 * idx,
              }}
              className="shadow-input mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-black"
            >
              {year.title}
            </motion.h2>

            <div className="flex flex-col gap-4">
              {year.content.map((item, idx) => (
                <div key={idx} className="pl-4">
                  <Step isInView={isInView} idx={idx}>
                    <motion.h3
                      initial={{ opacity: 0, filter: "blur(10px)", y: -10 }}
                      animate={{
                        filter: isInView ? "blur(0px)" : "blur(10px)",
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : -10,
                      }}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.3,
                        delay: 0.1 * idx,
                      }}
                      className="font-semibold text-neutral-600"
                    >
                      {item.title}
                    </motion.h3>
                  </Step>
                  <motion.p
                    initial={{ opacity: 0, filter: "blur(10px)", y: -10 }}
                    animate={{
                      filter: isInView ? "blur(0px)" : "blur(10px)",
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -10,
                    }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.3,
                      delay: 0.1 * idx,
                    }}
                    className="pt-1 pl-6 text-sm text-neutral-500"
                  >
                    {item.description}
                  </motion.p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;

const Step = ({
  className,
  children,
  isInView,
  idx,
}: {
  className?: string;
  children?: ReactNode;
  isInView: boolean;
  idx: number;
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: -10 }}
        animate={{
          filter: isInView ? "blur(0px)" : "blur(10px)",
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : -10,
        }}
        transition={{
          ease: "easeInOut",
          duration: 0.3,
          delay: 0.1 * idx,
        }}
        className="flex items-start gap-2"
      >
        <IconCircleCheckFilled
          className={cn("text-neutral-500s mt-0.5 h-4 w-4", className)}
        />
        {children}
      </motion.div>
    </>
  );
};
