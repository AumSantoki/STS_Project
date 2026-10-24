"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { TRACEROUTE_STAGES } from "@/data/tracerouteStages";
import { PhysicalEnvironmentScene } from "./PhysicalEnvironmentScene";
import { JourneyNarrativePanel } from "./JourneyNarrativePanel";
import { JourneyNavigatorBar } from "./JourneyNavigatorBar";
import { HelpCircle } from "lucide-react";

export function JourneySection() {
  const [activeStageNumber, setActiveStageNumber] = useState<number>(1);
  const [direction, setDirection] = useState<number>(1);
  const totalStages = TRACEROUTE_STAGES.length;
  const isDirectAction = useRef(false);

  const currentStage =
    TRACEROUTE_STAGES.find((s) => s.stageNumber === activeStageNumber) ||
    TRACEROUTE_STAGES[0];

  const handleSelectStage = useCallback((stageNum: number) => {
    if (stageNum >= 1 && stageNum <= totalStages) {
      setDirection(stageNum > activeStageNumber ? 1 : -1);
      isDirectAction.current = true;
      setActiveStageNumber(stageNum);

      setTimeout(() => {
        isDirectAction.current = false;
      }, 600);
    }
  }, [activeStageNumber, totalStages]);

  const handleReplay = useCallback(() => {
    setDirection(-1);
    handleSelectStage(1);
    const section = document.getElementById("journey-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [handleSelectStage]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement
      ) {
        return;
      }

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
      {/* Anchor targets to ensure all prior links (including old #traceroute) land here */}
      <div id="traceroute" className="scroll-mt-28" />
      <div id="journey-of-data" className="scroll-mt-28" />

      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Section Title & Story Framing */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-burnt-orange" />
            <span className="text-xs font-mono font-bold tracking-widest text-burnt-orange uppercase">
              INTERACTIVE EXPEDITION // 06 PHYSICAL STAGES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal leading-tight">
            The Journey of a Single Click:{" "}
            <span className="text-burnt-orange">
              Traversing Earth, Sea, and Silicon
            </span>
          </h2>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Follow a single data packet as it leaves your antenna, travels through municipal glass conduits, 
            crosses the abyssal seabed, and triggers compute engines inside multi-megawatt facilities.
          </p>
        </div>

        {/* Minimalist Journey Controls HUD */}
        <JourneyNavigatorBar
          activeStageNumber={activeStageNumber}
          totalStages={totalStages}
          onSelectStage={handleSelectStage}
          onReplay={handleReplay}
        />

        {/* The Dominant Physical Environment Visual Scene */}
        <PhysicalEnvironmentScene stage={currentStage} direction={direction} />

        {/* Narrative & Progressive Disclosure Dossier */}
        <JourneyNarrativePanel stage={currentStage} />

        {/* Pedagogical Integrity Note */}
        <div className="flex items-start gap-3 rounded-xl border border-warm-sand-border bg-ivory-light p-4 text-xs font-sans text-charcoal-muted max-w-4xl mx-auto w-full">
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
