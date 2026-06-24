// components/AnimatedCounter.tsx
// Spec 4.4 Motion Design: "Stats (1,200 societies, 85,000 residents) count up
// on scroll into view."
//
// Accepts a display string like "1,200" or "85,000" or "4.8★" and animates
// only the numeric portion, preserving any prefix/suffix (★, +, commas, etc.)
// exactly as authored — so "4.8★" counts 0.0 → 4.8 and keeps the star.

"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type AnimatedCounterProps = {
  /** Final display value, e.g. "1,200", "85,000", "4.8★", "22" */
  value: string;
  duration?: number; // seconds
  className?: string;
};

// Splits "85,000+" into { prefix: "", number: 85000, decimals: 0, suffix: "+" }
function parseValue(raw: string) {
  const match = raw.match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", number: 0, decimals: 0, suffix: raw };
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  const number = parseFloat(numStr.replace(/,/g, ""));
  return { prefix, number, decimals, suffix };
}

function formatNumber(n: number, decimals: number) {
  return n.toLocaleString("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default function AnimatedCounter({ value, duration = 1.6, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const { prefix, number, decimals, suffix } = parseValue(value);
  const [display, setDisplay] = useState(reduceMotion ? formatNumber(number, decimals) : formatNumber(0, decimals));

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplay(formatNumber(number, decimals));
      return;
    }

    let raf: number;
    const start = performance.now();
    const durMs = duration * 1000;

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / durMs, 1);
      // ease-out cubic — fast start, gentle settle
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(formatNumber(number * eased, decimals));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, number, decimals, duration, reduceMotion]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}