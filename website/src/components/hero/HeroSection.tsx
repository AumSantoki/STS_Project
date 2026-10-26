"use client";

import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { HeroEditorialSvg } from "./HeroEditorialSvg";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleScrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: shouldReduceMotion ? "auto" : "smooth" });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Behind the Screen Introduction"
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-12 px-4 sm:px-10 md:px-16 lg:px-24 bg-ivory border-b border-warm-sand-border/80 overflow-hidden"
    >
      {/* Background Architectural Vector Schematic */}
      <HeroEditorialSvg />

      {/* Main Content Box */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 my-auto max-w-5xl flex flex-col items-start gap-5 sm:gap-6 pt-2 sm:pt-4 pb-8 sm:pb-10"
      >
        {/* Eyebrow badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-warm-sand-border bg-ivory-light px-3 sm:px-3.5 py-1.5 shadow-2xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-burnt-orange opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-burnt-orange" />
          </span>
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.15em] sm:tracking-[0.2em] text-burnt-orange uppercase">
            THE PHYSICAL FOUNDATION OF DIGITAL SOCIETY
          </span>
        </motion.div>

        {/* Editorial Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-charcoal leading-[1.1] sm:leading-[1.08] text-balance"
        >
          You see the Internet.{" "}
          <span className="block mt-1 sm:mt-2 text-burnt-orange">
            Here is the physical world that powers it.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl md:text-2xl text-charcoal-muted font-normal leading-relaxed max-w-2xl text-pretty"
        >
          An interactive digital documentary tracing 1.4 million kilometers of deep-sea glass, multi-megawatt cooling systems, and the unseen workforce keeping civilization online.
        </motion.p>

        {/* Prominent Action Controls */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-1 sm:pt-2"
        >
          <div className="relative">
            <a
              href="#journey-section"
              onClick={handleScrollTo("journey-section")}
              onMouseEnter={() => setHoveredAction("explore-journey")}
              onMouseLeave={() => setHoveredAction(null)}
              onFocus={() => setHoveredAction("explore-journey")}
              onBlur={() => setHoveredAction(null)}
              aria-label="Start the journey of a single click"
              className="group relative inline-flex items-center justify-center gap-2.5 sm:gap-3 rounded-xl px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-lg font-bold tracking-wide text-white bg-burnt-orange hover:bg-burnt-orange-hover active:scale-[0.99] transition-all duration-200 shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burnt-orange cursor-pointer"
            >
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-muted-gold animate-pulse" />
              <span>Start journey</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            {/* Contextual hover preview */}
            {hoveredAction === "explore-journey" && (
              <div
                role="tooltip"
                className="absolute left-0 -bottom-9 z-20 hidden sm:flex items-center gap-1.5 rounded-md bg-charcoal text-ivory text-[11px] font-mono px-2.5 py-1 shadow-md whitespace-nowrap"
              >
                <span>Launches the 6-stage physical packet expedition</span>
              </div>
            )}
          </div>

          <a
            href="#pedagogical-context"
            onClick={handleScrollTo("pedagogical-context")}
            aria-label="Review research context and methodology"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-warm-sand-border bg-ivory-light px-5 sm:px-6 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-charcoal hover:border-burnt-orange/50 hover:bg-white active:scale-[0.99] transition-all duration-200 shadow-2xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burnt-orange cursor-pointer"
          >
            <Compass className="h-4 w-4 text-burnt-orange transition-transform duration-300 group-hover:rotate-45" />
            <span>Research &amp; Methodology</span>
          </a>
        </motion.div>

        {/* User Request Illustration Card inside Hero */}
        <motion.div
          variants={itemVariants}
          className="w-full mt-2 rounded-2xl border border-warm-sand-border bg-ivory-light/90 p-4 sm:p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6"
        >
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-burnt-orange uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-burnt-orange" />
              <span>THE PHYSICAL JOURNEY</span>
            </div>
            <h2 className="text-base sm:text-xl font-bold text-charcoal">
              Every click triggers an intercontinental physical chain reaction
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
              From the antenna inside your device, through buried neighborhood fiber, global exchange hubs, and coastal cable stations to undersea lines across the ocean floor.
            </p>
          </div>

          {/* Mini Visual Diagram of the Pipeline - Flexible wrapping without horizontal blowout */}
          <div className="w-full md:w-auto flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 bg-ivory rounded-xl border border-warm-sand-border p-2 sm:px-3 sm:py-2 text-[11px] sm:text-xs font-mono font-bold text-charcoal shadow-2xs">
            <span className="text-burnt-orange">Device</span>
            <span className="text-warm-sand">→</span>
            <span>Local Fiber</span>
            <span className="text-warm-sand">→</span>
            <span>Exchange</span>
            <span className="text-warm-sand">→</span>
            <span className="text-burnt-orange">Ocean Cable</span>
            <span className="text-warm-sand">→</span>
            <span>Data Centre</span>
          </div>
        </motion.div>

        {/* Grounded Infrastructure Metrics Tiles */}
        <motion.div
          variants={itemVariants}
          className="pt-2 border-t border-warm-sand-border w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 text-left"
        >
          <div className="flex flex-col gap-1 rounded-xl border border-warm-sand-border bg-ivory-light p-3.5 sm:p-4 shadow-2xs">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-burnt-orange tracking-tight">
              99%
            </span>
            <span className="text-xs text-charcoal font-semibold">
              Intercontinental Optical Share
            </span>
            <span className="text-[11px] text-charcoal-muted leading-tight">
              Carried by physical cables resting on ocean floors, not satellites
            </span>
          </div>

          <div className="flex flex-col gap-1 rounded-xl border border-warm-sand-border bg-ivory-light p-3.5 sm:p-4 shadow-2xs">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-charcoal tracking-tight">
              1.4M+ km
            </span>
            <span className="text-xs text-charcoal font-semibold">
              Submarine Cable Fabric
            </span>
            <span className="text-[11px] text-charcoal-muted leading-tight">
              Hair-thin glass fibers linking global continents beneath the abyss
            </span>
          </div>

          <div className="flex flex-col gap-1 rounded-xl border border-warm-sand-border bg-ivory-light p-3.5 sm:p-4 shadow-2xs">
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-sage-green tracking-tight">
              2.2 Billion
            </span>
            <span className="text-xs text-charcoal font-semibold">
              The Physical Digital Divide
            </span>
            <span className="text-[11px] text-charcoal-muted leading-tight">
              Humans completely offline due to infrastructure and cost barriers
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Gentle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.8, duration: 0.6 }}
        className="relative z-10 flex flex-col items-center justify-center pt-2"
      >
        <a
          href="#journey-section"
          onClick={handleScrollTo("journey-section")}
          aria-label="Scroll to enter the Journey of a Single Click"
          className="group flex flex-col items-center gap-1.5 text-charcoal-muted hover:text-burnt-orange transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-burnt-orange"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-bold">
            SCROLL TO ENTER JOURNEY
          </span>
          <div className="flex h-7 w-4.5 items-start justify-center rounded-full border border-warm-sand-border p-1 group-hover:border-burnt-orange/50 transition-colors">
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, 8, 0],
                      opacity: [0.4, 1, 0.4],
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
              className="h-1.5 w-1 rounded-full bg-burnt-orange"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
