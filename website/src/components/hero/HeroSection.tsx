"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, Compass } from "lucide-react";
import { HeroNetworkSvg } from "./HeroNetworkSvg";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants with graceful fallback for reduced motion
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.7,
        ease: "easeOut",
      },
    },
  };

  // Smooth scroll handler ensuring cross-browser reliability
  const handleScrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <section
      aria-label="Introduction to Physical Internet Infrastructure"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 md:px-16 lg:px-24 bg-gradient-to-b from-background-deep via-background to-background overflow-hidden"
    >
      {/* Background SVG Network Atmosphere */}
      <HeroNetworkSvg />

      {/* Main Hero Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 my-auto max-w-4xl flex flex-col items-start gap-6 pt-8 pb-12"
      >
        {/* Eyebrow */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 rounded-full border border-cyan-accent/25 bg-surface/90 px-3.5 py-1.5 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.1)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-accent" />
          </span>
          <span className="text-xs font-mono font-semibold tracking-[0.2em] text-cyan-accent uppercase">
            THE INFRASTRUCTURE BEHIND EVERY CLICK
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] text-balance"
        >
          You see the Internet.{" "}
          <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
            But do you see what powers it?
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-foreground-muted font-normal leading-relaxed max-w-2xl text-pretty"
        >
          An exploration of the cables, machines, energy, and people keeping our connected world alive.
        </motion.p>

        {/* Primary and Secondary Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4"
        >
          <a
            href="#traceroute"
            onClick={handleScrollTo("traceroute")}
            aria-label="Explore the hidden network - jump to physical traceroute workbench"
            className="group relative inline-flex items-center justify-center gap-3 rounded-lg px-7 py-4 text-sm font-semibold tracking-wide text-background bg-cyan-accent hover:bg-cyan-accent/90 transition-all duration-200 shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-accent active:scale-[0.99]"
          >
            <span>Explore the hidden network</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <a
            href="#journey-of-data"
            onClick={handleScrollTo("journey-of-data")}
            aria-label="Discover the journey of data - jump to interactive traceroute"
            className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-surface-border bg-surface/70 px-6 py-4 text-sm font-medium text-foreground hover:text-white hover:border-cyan-accent/40 hover:bg-surface-hover/80 transition-all duration-200 backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-accent"
          >
            <Compass className="h-4 w-4 text-cyan-accent transition-transform duration-300 group-hover:rotate-45" />
            <span>Discover the journey of data</span>
          </a>
        </motion.div>

        {/* Grounded Infrastructure Facts (Derived directly from project research) */}
        <motion.div
          variants={itemVariants}
          className="mt-6 pt-8 border-t border-surface-border/60 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-left"
        >
          <div className="flex flex-col gap-1">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-accent tracking-tight">
              99%
            </span>
            <span className="text-xs text-foreground-muted font-sans leading-tight">
              Transoceanic traffic carried by undersea cables, not satellites
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-accent tracking-tight">
              1.4M+ km
            </span>
            <span className="text-xs text-foreground-muted font-sans leading-tight">
              Submarine fiber-optic cables lining the global ocean floor
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-accent tracking-tight">
              2.2 Billion
            </span>
            <span className="text-xs text-foreground-muted font-sans leading-tight">
              People still completely offline due to infrastructure and cost barriers
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Gentle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center pt-4"
      >
        <a
          href="#traceroute"
          onClick={handleScrollTo("traceroute")}
          aria-label="Scroll to inspect the physical traceroute"
          className="group flex flex-col items-center gap-2 text-foreground-muted hover:text-cyan-accent transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-cyan-accent"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-medium">
            SCROLL TO EXPLORE TRACEROUTE
          </span>
          <div className="flex h-8 w-5 items-start justify-center rounded-full border border-surface-border p-1 group-hover:border-cyan-accent/50 transition-colors">
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, 10, 0],
                      opacity: [0.3, 1, 0.3],
                    }
              }
              transition={
                shouldReduceMotion
                  ? {}
                  : {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              className="h-1.5 w-1 rounded-full bg-cyan-accent"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
