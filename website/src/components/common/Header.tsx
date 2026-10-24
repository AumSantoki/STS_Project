"use client";

import { motion } from "motion/react";
import { Globe } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/70 border-b border-surface-border/50"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-accent/30 bg-cyan-accent/10 text-cyan-accent shadow-[0_0_12px_rgba(0,240,255,0.2)]">
          <Globe className="h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-mono tracking-widest text-white uppercase font-bold">
            Behind the Screen
          </span>
          <span className="text-[10px] font-mono text-foreground-muted hidden sm:inline">
            Physical Internet Infrastructure · HM216
          </span>
        </div>
      </div>

      <nav aria-label="Main Navigation" className="flex items-center gap-4">
        <a
          href="#hidden-network"
          className="text-xs font-mono text-foreground-muted hover:text-cyan-accent transition-colors duration-200"
        >
          {"//"} INFRASTRUCTURE
        </a>
        <a
          href="#journey-of-data"
          className="text-xs font-mono text-foreground-muted hover:text-cyan-accent transition-colors duration-200 hidden sm:inline"
        >
          {"//"} DATA JOURNEY
        </a>
        <div className="flex items-center gap-1.5 rounded-full border border-surface-border bg-surface/80 px-2.5 py-1 text-[11px] font-mono text-cyan-accent">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-accent" />
          </span>
          <span className="hidden md:inline">SYSTEM ONLINE</span>
        </div>
      </nav>
    </motion.header>
  );
}
