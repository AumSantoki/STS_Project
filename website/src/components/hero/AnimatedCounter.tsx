"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  durationMs?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  durationMs = 1800,
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  // If reduced motion is preferred, initialize directly with target
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      const timer = setTimeout(() => {
        setCurrent(target);
      }, 0);
      return () => clearTimeout(timer);
    }

    const startTime = performance.now();

    const frame = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * target;
      setCurrent(val);

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setCurrent(target);
      }
    };

    const id = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(id);
  }, [isInView, target, durationMs, shouldReduceMotion]);

  const displayVal = shouldReduceMotion ? target : current;
  const formatted =
    decimals > 0 ? displayVal.toFixed(decimals) : Math.floor(displayVal).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
