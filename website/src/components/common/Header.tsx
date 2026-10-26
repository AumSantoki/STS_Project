"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Globe, Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleNavigate = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Close mobile menu immediately so the UI responds
      setIsOpen(false);

      const id = href.replace("#", "");
      const target = document.getElementById(id);
      if (!target) return;

      // If the current URL hash already matches the destination, browsers treat native
      // anchor clicks as a no-op and will not scroll. In this repeat-click case, force scroll:
      if (typeof window !== "undefined" && window.location.hash === href) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: shouldReduceMotion ? "auto" : "smooth",
        });
      }
      // Otherwise, allow native anchor navigation to execute cleanly without e.preventDefault().
      // This prevents mobile WebKit/Blink scroll-cancellation bugs, lets the browser compositor
      // perform native smooth scrolling, updates the URL hash, and honors CSS scroll-margin-top.
    },
    [shouldReduceMotion]
  );

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Close mobile menu if window resizes to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-ivory/90 border-b border-warm-sand-border/80 shadow-xs"
    >
      <div className="flex items-center justify-between px-3 sm:px-6 md:px-12 py-3 sm:py-4">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border border-burnt-orange/30 bg-burnt-orange/10 text-burnt-orange shadow-xs">
            <Globe className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] sm:text-xs font-mono tracking-wider sm:tracking-widest text-charcoal uppercase font-bold">
              Behind the Screen
            </span>
            <span className="text-[10px] font-mono text-charcoal-muted hidden sm:inline">
              Physical Internet Infrastructure
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-3 lg:gap-5 shrink-0"
        >
          <a
            href="#journey-section"
            onClick={(e) => handleNavigate(e, "#journey-section")}
            className="text-[11px] sm:text-xs font-mono font-medium text-charcoal-muted hover:text-burnt-orange transition-colors duration-200"
          >
            <span className="hidden sm:inline">{"//"} </span>
            <span>JOURNEY</span>
          </a>
          <a
            href="#physical-internet"
            onClick={(e) => handleNavigate(e, "#physical-internet")}
            className="text-[11px] sm:text-xs font-mono font-medium text-charcoal-muted hover:text-burnt-orange transition-colors duration-200"
          >
            <span className="hidden sm:inline">{"//"} </span>
            <span>HARDWARE ATLAS</span>
          </a>
          <a
            href="#people-behind"
            onClick={(e) => handleNavigate(e, "#people-behind")}
            className="text-[11px] sm:text-xs font-mono font-medium text-charcoal-muted hover:text-burnt-orange transition-colors duration-200"
          >
            <span className="hidden sm:inline">{"//"} </span>
            <span>THE PEOPLE</span>
          </a>
          <a
            href="#pedagogical-context"
            onClick={(e) => handleNavigate(e, "#pedagogical-context")}
            className="text-[11px] sm:text-xs font-mono font-medium text-charcoal-muted hover:text-burnt-orange transition-colors duration-200"
          >
            <span className="hidden sm:inline">{"//"} </span>
            <span>RESEARCH</span>
          </a>
          <a
            href="#exploration-dossiers"
            onClick={(e) => handleNavigate(e, "#exploration-dossiers")}
            aria-label="Open exploration research dossiers"
            className="hidden lg:flex items-center gap-1.5 rounded-full border border-warm-sand-border bg-ivory-light px-3 py-1 text-[11px] font-mono text-charcoal hover:border-burnt-orange/50 hover:bg-white transition-all shadow-2xs cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-green" />
            </span>
            <span className="text-charcoal-muted hover:text-burnt-orange transition-colors">
              RESEARCH DOSSIER
            </span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex md:hidden items-center justify-center h-8.5 w-8.5 rounded-lg border border-warm-sand-border bg-ivory-light text-charcoal hover:border-burnt-orange/50 hover:bg-white active:scale-95 transition-all shadow-2xs cursor-pointer"
        >
          {isOpen ? (
            <X className="h-4 w-4 text-burnt-orange" />
          ) : (
            <Menu className="h-4 w-4 text-charcoal" />
          )}
        </button>
      </div>

      {/* Mobile Collapsible Navigation Panel (Positioned as absolute dropdown so header height never mutates) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile Navigation"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="md:hidden absolute top-full left-0 right-0 overflow-hidden border-b border-warm-sand-border/80 bg-ivory/98 backdrop-blur-xl px-3 sm:px-4 py-3 shadow-lg flex flex-col gap-1.5"
          >
            {/* 1. Journey */}
            <a
              href="#journey-section"
              onClick={(e) => handleNavigate(e, "#journey-section")}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-transparent hover:border-warm-sand-border hover:bg-ivory-light text-xs font-mono font-bold text-charcoal transition-all cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span className="text-burnt-orange">{"//"}</span>
                <span>JOURNEY</span>
              </span>
              <span className="text-[10px] text-charcoal-muted font-normal uppercase">
                01. Packet Route
              </span>
            </a>

            {/* 2. Hardware Atlas */}
            <a
              href="#physical-internet"
              onClick={(e) => handleNavigate(e, "#physical-internet")}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-transparent hover:border-warm-sand-border hover:bg-ivory-light text-xs font-mono font-bold text-charcoal transition-all cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span className="text-burnt-orange">{"//"}</span>
                <span>HARDWARE ATLAS</span>
              </span>
              <span className="text-[10px] text-charcoal-muted font-normal uppercase">
                02. Schematics
              </span>
            </a>

            {/* 3. The People */}
            <a
              href="#people-behind"
              onClick={(e) => handleNavigate(e, "#people-behind")}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-transparent hover:border-warm-sand-border hover:bg-ivory-light text-xs font-mono font-bold text-charcoal transition-all cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span className="text-burnt-orange">{"//"}</span>
                <span>THE PEOPLE</span>
              </span>
              <span className="text-[10px] text-charcoal-muted font-normal uppercase">
                03. Human Workforce
              </span>
            </a>

            {/* 4. Research */}
            <a
              href="#pedagogical-context"
              onClick={(e) => handleNavigate(e, "#pedagogical-context")}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-transparent hover:border-warm-sand-border hover:bg-ivory-light text-xs font-mono font-bold text-charcoal transition-all cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span className="text-burnt-orange">{"//"}</span>
                <span>RESEARCH</span>
              </span>
              <span className="text-[10px] text-charcoal-muted font-normal uppercase">
                04. Foundation
              </span>
            </a>

            {/* 5. Research Dossier */}
            <a
              href="#exploration-dossiers"
              onClick={(e) => handleNavigate(e, "#exploration-dossiers")}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-warm-sand-border/70 bg-ivory-light hover:bg-white hover:border-burnt-orange/50 text-xs font-mono font-bold text-charcoal transition-all cursor-pointer shadow-2xs mt-0.5"
            >
              <span className="flex items-center gap-2">
                <span className="text-burnt-orange">{"//"}</span>
                <span>RESEARCH DOSSIER</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-sage-green/15 text-charcoal font-semibold border border-sage-green/30">
                <span className="h-1.5 w-1.5 rounded-full bg-sage-green animate-pulse" />
                LIVE ATLAS
              </span>
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
