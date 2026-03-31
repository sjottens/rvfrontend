"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type AnimatedSectionProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export function AnimatedSection({ className, delay = 0, children }: AnimatedSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}
