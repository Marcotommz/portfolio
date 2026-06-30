"use client";

import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type Direction = "up" | "left" | "right" | "scale";

const variants: Record<Direction, Variants> = {
  up: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.7 }, show: { opacity: 1, scale: 1 } },
};

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: ReactNode;
  dir?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
};

/** Scroll-triggered reveal used across the page. */
export default function Reveal({
  children,
  dir = "up",
  delay = 0,
  duration = 0.8,
  className,
  style,
}: RevealProps) {
  return (
    <motion.div
      variants={variants[dir]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-8% 0px" }}
      transition={{ duration, ease: EASE, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

type DrawLineProps = {
  axis?: "x" | "y";
  className?: string;
  style?: CSSProperties;
  duration?: number;
  delay?: number;
};

/** A glowing accent line that draws itself in when scrolled into view. */
export function DrawLine({
  axis = "y",
  className,
  style,
  duration = 1.4,
  delay = 0,
}: DrawLineProps) {
  const isY = axis === "y";
  return (
    <motion.div
      initial={{ scaleX: isY ? 1 : 0, scaleY: isY ? 0 : 1 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      viewport={{ once: false, margin: "-8% 0px" }}
      transition={{ duration, ease: EASE, delay }}
      className={className}
      style={{ transformOrigin: isY ? "top" : "left", ...style }}
    />
  );
}
