// components/ScrollReveal.tsx
// Reusable fade-up-on-scroll wrapper per spec 4.4 Motion Design:
// "Elements fade up (opacity: 0 → 1, translateY: 20px → 0) with 0.4s ease-out"
// "Card grids stagger 80ms between each card reveal"
// Respects prefers-reduced-motion automatically via useReducedMotion.

"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  /** Index within a stagger group — each step adds 80ms of delay. */
  index?: number;
  /** Extra base delay in seconds, on top of the stagger offset. */
  delay?: number;
  className?: string;
  /** How far the element travels on reveal, in px. */
  y?: number;
  once?: boolean;
};

export default function ScrollReveal({
  children,
  index = 0,
  delay = 0,
  className,
  y = 20,
  once = true,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
      transition={{
        duration: 0.4,
        ease: "easeOut",
        delay: reduceMotion ? 0 : delay + index * 0.08, // 80ms stagger step
      }}
    >
      {children}
    </motion.div>
  );
}

// ── StaggerGroup ──────────────────────────────────────────────────────────────
// Wraps a list of children and gives each one a staggered child variant,
// triggered once as a group enters the viewport. Use when children are
// rendered via .map() so each item gets the correct index automatically.
export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }, // 80ms between each card
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 20,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();
  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}