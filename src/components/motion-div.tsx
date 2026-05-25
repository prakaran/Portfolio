"use client";
import { motion, HTMLMotionProps } from "motion/react";

type MotionDivProps = HTMLMotionProps<"div">;

const MotionDiv = ({ children, ...props }: MotionDivProps) => {
  return <motion.div {...props}>{children || "MotionDiv"}</motion.div>;
};

export default MotionDiv;
