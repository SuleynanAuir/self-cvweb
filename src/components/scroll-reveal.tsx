"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  as?: "div" | "section" | "article" | "aside";
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  variant?: "lift" | "scale" | "fade";
};

const motionComponents = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
};

export function ScrollReveal({
  as = "div",
  children,
  className,
  delay = 0,
  amount = 0.08,
  variant = "lift",
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionComponent = motionComponents[as];

  const hidden = reduceMotion
    ? { opacity: 0 }
    : {
        opacity: 0,
        y: variant === "lift" ? 28 : 0,
        scale: variant === "scale" ? 0.985 : 1,
      };

  const visible = reduceMotion
    ? { opacity: 1 }
    : {
        opacity: 1,
        y: 0,
        scale: 1,
      };

  return (
    <MotionComponent
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount, margin: "0px 0px 120px 0px" }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
