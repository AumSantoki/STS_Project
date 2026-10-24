"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { TRACEROUTE_STAGES } from "@/data/tracerouteStages";
import { JourneyDiagramCanvas } from "./JourneyDiagramCanvas";
import { JourneyInspector } from "./JourneyInspector";
import { JourneyControlBar } from "./JourneyControlBar";
import { HelpCircle } from "lucide-react";

export function JourneySection() {
  const [activeStageNumber, setActiveStageNumber] = useState<number>(1);
  const totalStages = TRACEROUTE_STAGES.length;
  const isDirectAction = useRef(false);

  const currentStage =
    TRACEROUTE_STAGES.find((s) => s.stageNumber === activeStageNumber) ||
    TRACEROUTE_STAGES[0];

  const handleSelectStage = useCallback((stageNum: number) => {
    if (stageNum >= 1 && stageNum <= totalStages) {
      isDirectAction.current = true;
      setActiveStageNumber(stageNum);

      // Re-enable scroll observer after user interaction animation completes
      setTimeout(() => {
        isDirectAction.current = false;
      }, 700);
    }
  }, [totalStages]);

  const handleReplay = useCallback(() => {
    handleSelectStage(1);
    // Smoothly ensure the journey section is in view
    const section = document.getElementById("journey-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [handleSelectStage]);

  // Global Keyboard Shortcuts (Developer Portfolio Experience)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // 1 through 6 direct jump
      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= totalStages) {
        e.preventDefault();
        handleSelectStage(num);
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        if (activeStageNumber < totalStages) {
          handleSelectStage(activeStageNumber + 1);
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        if (activeStageNumber > 1) {
          handleSelectStage(activeStageNumber - 1);
        }
      } else if (e.key.toLowerCase() === "r") {
        e.preventDefault();
        handleReplay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeStageNumber, handleReplay, handleSelectStage, totalStages]);

  return (
    <section
      id="journey-section"
      aria-label="The Journey of a Single Click"
      className="relative z-20 py-20 px-6 sm:px-10 md:px-16 lg:px-24 bg-ivory border-b border-warm-sand-border"
    >
      {/* Anchor for external links */}
      <div id="journey-of-data" className="scroll-mt-28" />

      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Experience Header */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-burnt-orange" />
            <span className="text-xs font-mono font-bold tracking-widest text-burnt-orange uppercase">
              INTERACTIVE EXPEDITION // 06 PHYSICAL HOPS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
            The Journey of a Single Click:{" "}
            <span className="text-burnt-orange">
              Traversing Earth, Sea, and Silicon
            </span>
          </h2>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-3xl">
            Click, scroll, or use your keyboard to follow a single transoceanic data packet as it leaves your antenna, 
            travels through neighborhood glass conduits, crosses abyssal seabeds, and triggers computing engines inside multi-megawatt facilities.
          </p>

          {/* Interaction Keyboard Hints */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono text-charcoal-muted">
            <span className="flex items-center gap-1.5 rounded bg-ivory-light border border-warm-sand-border px-2 py-0.5 shadow-2xs">
              <kbd className="font-bold text-burnt-orange">1-6</kbd> Direct Jump
            </span>
            <span className="flex items-center gap-1.5 rounded bg-ivory-light border border-warm-sand-border px-2 py-0.5 shadow-2xs">
              <kbd className="font-bold text-burnt-orange">← / →</kbd> Step Hops
            </span>
            <span className="flex items-center gap-1.5 rounded bg-ivory-light border border-warm-sand-border px-2 py-0.5 shadow-2xs">
              <kbd className="font-bold text-burnt-orange">R</kbd> Replay
            </span>
            <span className="text-charcoal-muted/70 hidden sm:inline">
              · Hover elements for contextual previews
            </span>
          </div>
        </div>

        {/* Sticky Control Bar HUD */}
        <div className="sticky top-20 z-40">
          <JourneyControlBar
            activeStageNumber={activeStageNumber}
            totalStages={totalStages}
            onSelectStage={handleSelectStage}
            onReplay={handleReplay}
          />
        </div>

        {/* Persistent Interactive Diagram Canvas */}
        <JourneyDiagramCanvas
          stages={TRACEROUTE_STAGES}
          activeStageNumber={activeStageNumber}
          onSelectStage={handleSelectStage}
        />

        {/* Synchronized Contextual Inspector */}
        <JourneyInspector stage={currentStage} />

        {/* Pedagogical Integrity Note */}
        <div className="flex items-start gap-3 rounded-xl border border-warm-sand-border bg-ivory-light p-4 text-xs font-sans text-charcoal-muted">
          <HelpCircle className="h-4 w-4 text-burnt-orange shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <strong className="text-charcoal font-semibold">
              Pedagogical Note on Internet Routing Reality:
            </strong>
            <span>
              This interactive journey illustrates an intercontinental request (e.g. streaming a resource hosted overseas). 
              In everyday digital life, domestic or local traffic terminates at nearby regional Edge CDN nodes without touching Cable Landing Stations or crossing submarine oceans.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
