"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HomeClientProps {
  children: ReactNode;
  type?: "reveal" | "reveal-left" | "reveal-card";
  className?: string;
  delay?: number;
}

const variants = {
  reveal: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  "reveal-left": {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  "reveal-card": {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
};

export default function HomeClient({
  children,
  type = "reveal",
  className,
  delay = 0,
}: HomeClientProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={variants[type]}
      style={{ willChange: "transform, opacity" }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
