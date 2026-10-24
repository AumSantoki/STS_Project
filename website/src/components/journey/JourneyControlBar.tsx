"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { TRACEROUTE_STAGES } from "@/data/tracerouteStages";

interface JourneyControlBarProps {
  activeStageNumber: number;
  totalStages: number;
  onSelectStage: (stageNumber: number) => void;
  onReplay: () => void;
}

export function JourneyControlBar({
  activeStageNumber,
  totalStages,
  onSelectStage,
  onReplay,
}: JourneyControlBarProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const prevStage = activeStageNumber > 1 ? TRACEROUTE_STAGES[activeStageNumber - 2] : null;
  const nextStage = activeStageNumber < totalStages ? TRACEROUTE_STAGES[activeStageNumber] : null;
  const currentStage = TRACEROUTE_STAGES[activeStageNumber - 1];

  return (
    <div
      role="toolbar"
      aria-label="Journey navigation controls"
      className="relative z-30 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-warm-sand-border bg-ivory-light/95 p-3 sm:p-4 backdrop-blur-md shadow-sm"
    >
      {/* Current Stage Indicator */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-burnt-orange text-white font-mono text-xs font-bold shadow-2xs">
          0{activeStageNumber}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-charcoal uppercase">
              {currentStage.shortLabel}
            </span>
            <span className="text-[10px] font-mono text-charcoal-muted uppercase px-1.5 py-0.2 rounded bg-warm-sand/50">
              {currentStage.category}
            </span>
          </div>
          <span className="text-[11px] text-charcoal-muted hidden sm:inline">
            Stage {activeStageNumber} of {totalStages}
          </span>
        </div>
      </div>

      {/* Stage Scrubber Pills */}
      <div
        role="tablist"
        aria-label="Direct stage selection"
        className="flex items-center gap-1 sm:gap-1.5"
      >
        {TRACEROUTE_STAGES.map((s) => {
          const isSelected = s.stageNumber === activeStageNumber;
          const isPassed = s.stageNumber < activeStageNumber;

          return (
            <div key={s.id} className="relative">
              <button
                role="tab"
                aria-selected={isSelected}
                aria-label={`Hop ${s.stageNumber}: ${s.shortLabel}`}
                onClick={() => onSelectStage(s.stageNumber)}
                onMouseEnter={() => setHoveredButton(`pill-${s.stageNumber}`)}
                onMouseLeave={() => setHoveredButton(null)}
                onFocus={() => setHoveredButton(`pill-${s.stageNumber}`)}
                onBlur={() => setHoveredButton(null)}
                className={`flex h-8 items-center justify-center rounded-lg px-2 sm:px-3 text-xs font-mono font-bold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-burnt-orange ${
                  isSelected
                    ? "bg-burnt-orange text-white shadow-xs"
                    : isPassed
                    ? "bg-warm-sand text-charcoal hover:bg-burnt-orange/20"
                    : "bg-ivory text-charcoal-muted hover:bg-warm-sand/60"
                }`}
              >
                <span>0{s.stageNumber}</span>
              </button>

              {/* Tooltip on Hover/Focus */}
              {hoveredButton === `pill-${s.stageNumber}` && (
                <div
                  role="tooltip"
                  className="absolute left-1/2 -bottom-9 -translate-x-1/2 z-40 hidden sm:flex items-center rounded bg-charcoal px-2.5 py-1 text-[11px] font-mono text-ivory shadow-md whitespace-nowrap"
                >
                  <span>Hop {s.stageNumber}: {s.shortLabel}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Buttons: Prev, Replay, Next */}
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        <div className="relative">
          <button
            onClick={() => onSelectStage(activeStageNumber - 1)}
            disabled={activeStageNumber === 1}
            aria-label="Previous physical hop"
            onMouseEnter={() => setHoveredButton("prev")}
            onMouseLeave={() => setHoveredButton(null)}
            onFocus={() => setHoveredButton("prev")}
            onBlur={() => setHoveredButton(null)}
            className="inline-flex items-center gap-1 rounded-lg border border-warm-sand-border bg-ivory px-3 py-2 text-xs font-mono font-semibold text-charcoal hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-burnt-orange"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">PREV</span>
          </button>

          {hoveredButton === "prev" && prevStage && (
            <div
              role="tooltip"
              className="absolute right-0 -bottom-9 z-40 hidden sm:flex items-center rounded bg-charcoal px-2.5 py-1 text-[11px] font-mono text-ivory shadow-md whitespace-nowrap"
            >
              <span>Back to: {prevStage.shortLabel}</span>
            </div>
          )}
        </div>

        {/* Replay Button */}
        <div className="relative">
          <button
            onClick={onReplay}
            aria-label="Replay journey from start"
            onMouseEnter={() => setHoveredButton("replay")}
            onMouseLeave={() => setHoveredButton(null)}
            onFocus={() => setHoveredButton("replay")}
            onBlur={() => setHoveredButton(null)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-warm-sand-border bg-ivory px-3 py-2 text-xs font-mono font-semibold text-charcoal hover:text-burnt-orange hover:bg-white transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-burnt-orange"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span className="hidden md:inline">REPLAY</span>
          </button>

          {hoveredButton === "replay" && (
            <div
              role="tooltip"
              className="absolute right-0 -bottom-9 z-40 hidden sm:flex items-center rounded bg-charcoal px-2.5 py-1 text-[11px] font-mono text-ivory shadow-md whitespace-nowrap"
            >
              <span>Reset journey to Stage 1</span>
            </div>
          )}
        </div>

        {/* Next Button */}
        <div className="relative">
          <button
            onClick={() => onSelectStage(activeStageNumber + 1)}
            disabled={activeStageNumber === totalStages}
            aria-label="Next physical hop"
            onMouseEnter={() => setHoveredButton("next")}
            onMouseLeave={() => setHoveredButton(null)}
            onFocus={() => setHoveredButton("next")}
            onBlur={() => setHoveredButton(null)}
            className="inline-flex items-center gap-1 rounded-lg bg-burnt-orange px-3.5 py-2 text-xs font-mono font-bold text-white hover:bg-burnt-orange-hover disabled:opacity-30 disabled:hover:bg-burnt-orange disabled:cursor-not-allowed transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burnt-orange"
          >
            <span className="hidden sm:inline">NEXT</span>
            <ChevronRight className="h-4 w-4" />
          </button>

          {hoveredButton === "next" && nextStage && (
            <div
              role="tooltip"
              className="absolute right-0 -bottom-9 z-40 hidden sm:flex items-center rounded bg-charcoal px-2.5 py-1 text-[11px] font-mono text-ivory shadow-md whitespace-nowrap"
            >
              <span>Advance to: {nextStage.shortLabel}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
