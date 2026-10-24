"use client";

import { motion } from "motion/react";
import { Globe } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-ivory/90 border-b border-warm-sand-border/80 shadow-xs"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-burnt-orange/30 bg-burnt-orange/10 text-burnt-orange shadow-xs">
          <Globe className="h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-mono tracking-widest text-charcoal uppercase font-bold">
            Behind the Screen
          </span>
          <span className="text-[10px] font-mono text-charcoal-muted hidden sm:inline">
            Physical Internet Infrastructure · STS HM216
          </span>
        </div>
      </div>

      <nav aria-label="Main Navigation" className="flex items-center gap-5">
        <a
          href="#journey-section"
          className="text-xs font-mono font-medium text-charcoal-muted hover:text-burnt-orange transition-colors duration-200"
        >
          {"//"} THE JOURNEY
        </a>
        <a
          href="#pedagogical-context"
          className="text-xs font-mono font-medium text-charcoal-muted hover:text-burnt-orange transition-colors duration-200 hidden sm:inline"
        >
          {"//"} CONTEXT
        </a>
        <div className="flex items-center gap-1.5 rounded-full border border-warm-sand-border bg-ivory-light px-3 py-1 text-[11px] font-mono text-charcoal shadow-2xs">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-green" />
          </span>
          <span className="hidden md:inline text-charcoal-muted">RESEARCH DOSSIER</span>
        </div>
      </nav>
    </motion.header>
  );
}
