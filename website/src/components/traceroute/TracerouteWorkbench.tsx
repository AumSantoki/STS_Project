"use client";

import { useState, useEffect, useCallback } from "react";
import { TRACEROUTE_STAGES } from "@/data/tracerouteStages";
import { TracerouteNavGraph } from "./TracerouteNavGraph";
import { StageInspectorPanel } from "./StageInspectorPanel";
import { HelpCircle, Terminal } from "lucide-react";

export function TracerouteWorkbench() {
  const [activeStageNumber, setActiveStageNumber] = useState<number>(1);
  const totalStages = TRACEROUTE_STAGES.length;

  const currentStage =
    TRACEROUTE_STAGES.find((s) => s.stageNumber === activeStageNumber) ||
    TRACEROUTE_STAGES[0];

  const handleSelectStage = useCallback((stageNum: number) => {
    if (stageNum >= 1 && stageNum <= totalStages) {
      setActiveStageNumber(stageNum);
    }
  }, [totalStages]);

  // Global keyboard shortcuts for developer-portfolio-style agility
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input or textarea
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // Keys 1 through 6 jump directly to that stage
      const digit = parseInt(e.key, 10);
      if (digit >= 1 && digit <= totalStages) {
        e.preventDefault();
        handleSelectStage(digit);
      } else if (e.key === "Escape") {
        // Focus the active tab for keyboard accessibility
        const activeTab = document.getElementById(`stage-tab-${activeStageNumber}`);
        activeTab?.focus();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [activeStageNumber, handleSelectStage, totalStages]);

  return (
    <section
      id="traceroute"
      aria-label="Interactive Physical Traceroute Workbench"
      className="relative z-20 py-24 px-6 sm:px-10 md:px-16 lg:px-24 bg-background-deep border-t border-surface-border text-foreground overflow-hidden"
    >
      {/* Anchor for external links */}
      <div id="journey-of-data" className="scroll-mt-28" />

      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Header with Terminal Aesthetics */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-2 rounded-full border border-cyan-accent/20 bg-surface/90 px-3 py-1 text-xs font-mono text-cyan-accent">
              <Terminal className="h-3.5 w-3.5" />
              <span>traceroute --physical --hop-by-hop transoceanic</span>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-foreground-muted">
              {"//"} INTERACTIVE WORKBENCH
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The Physical Traceroute:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300">
              Follow a Single Click Across the Planet
            </span>
          </h2>

          <p className="text-base sm:text-lg text-foreground-muted leading-relaxed max-w-3xl">
            When you interact with a web service hosted across the ocean, your request does not travel through abstract &ldquo;cloud&rdquo; ether. 
            Step through the six physical layers of real infrastructure—from your device&apos;s radio antenna through municipal glass conduits, 
            high-voltage coastal landing stations, deep-sea abyssal repeaters, and multi-megawatt server halls.
          </p>

          {/* Quick Keyboard & Navigation Hints */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-foreground-muted">
            <span className="flex items-center gap-1.5 rounded bg-surface border border-surface-border px-2 py-1">
              <kbd className="font-bold text-cyan-accent">1-6</kbd> Quick Jump
            </span>
            <span className="flex items-center gap-1.5 rounded bg-surface border border-surface-border px-2 py-1">
              <kbd className="font-bold text-cyan-accent">↑/↓</kbd> Step Hops
            </span>
            <span className="flex items-center gap-1.5 rounded bg-surface border border-surface-border px-2 py-1">
              <kbd className="font-bold text-cyan-accent">Esc</kbd> Focus Tab
            </span>
            <span className="text-foreground-muted/60 hidden md:inline">
              · Direct interaction updates physical layer inspector
            </span>
          </div>
        </div>

        {/* Workbench Split-Pane Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vertical Trunk Nav Graph (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-surface-border">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-accent font-bold">
                PHYSICAL ROUTE TOPOLOGY
              </span>
              <span className="text-xs font-mono text-foreground-muted">
                HOP {activeStageNumber} OF {totalStages}
              </span>
            </div>

            <TracerouteNavGraph
              stages={TRACEROUTE_STAGES}
              activeStageNumber={activeStageNumber}
              onSelectStage={handleSelectStage}
            />

            {/* Pedagogical disclaimer pill */}
            <div className="flex items-start gap-2 rounded-lg border border-surface-border/60 bg-surface/40 p-3 text-xs text-foreground-muted">
              <HelpCircle className="h-4 w-4 text-cyan-accent shrink-0 mt-0.5" />
              <span>
                <strong>Illustrative Route:</strong> This sequence represents a transoceanic request. National or local traffic terminates at nearby edge caches without crossing oceans.
              </span>
            </div>
          </div>

          {/* Right Column: Contextual Inspector Panel (7 cols on desktop) */}
          <div className="lg:col-span-7">
            <StageInspectorPanel
              stage={currentStage}
              totalStages={totalStages}
              onSelectStage={handleSelectStage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
