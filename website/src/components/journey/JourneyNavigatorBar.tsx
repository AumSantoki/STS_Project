"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { TRACEROUTE_STAGES } from "@/data/tracerouteStages";

interface JourneyNavigatorBarProps {
  activeStageNumber: number;
  totalStages: number;
  onSelectStage: (stageNumber: number) => void;
  onReplay: () => void;
  scrollProgress?: number;
}

export function JourneyNavigatorBar({
  activeStageNumber,
  totalStages,
  onSelectStage,
  onReplay,
  scrollProgress = 0,
}: JourneyNavigatorBarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const stageShortTitles: Record<number, string> = {
    1: "Your Device",
    2: "Local Network",
    3: "Networks Connect",
    4: "Coastal Station",
    5: "Ocean Cable",
    6: "Data Centre",
  };

  return (
    <div
      role="toolbar"
      aria-label="Journey expedition controls"
      className="flex flex-wrap items-center justify-between gap-4 p-3 sm:p-4 rounded-2xl border border-warm-sand-border bg-ivory-light/95 shadow-sm backdrop-blur-md"
    >
      {/* Direct Landmark Selector Track */}
      <div
        role="tablist"
        aria-label="Selectable journey stages"
        className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1"
      >
        {TRACEROUTE_STAGES.map((s) => {
          const isSelected = s.stageNumber === activeStageNumber;
          const isCompleted = s.stageNumber < activeStageNumber;

          return (
            <div key={s.id} className="relative">
              <button
                role="tab"
                aria-selected={isSelected}
                aria-label={`Hop ${s.stageNumber}: ${s.title}`}
                onClick={() => onSelectStage(s.stageNumber)}
                onMouseEnter={() => setHoveredItem(`node-${s.stageNumber}`)}
                onMouseLeave={() => setHoveredItem(null)}
                onFocus={() => setHoveredItem(`node-${s.stageNumber}`)}
                onBlur={() => setHoveredItem(null)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-burnt-orange ${
                  isSelected
                    ? "bg-burnt-orange text-white font-bold shadow-xs scale-102"
                    : isCompleted
                    ? "bg-warm-sand text-charcoal hover:bg-burnt-orange/20"
                    : "bg-ivory text-charcoal-muted hover:bg-warm-sand/60"
                }`}
              >
                <span className="font-bold">0{s.stageNumber}</span>
                <span className="hidden md:inline text-[11px] font-sans">
                  {stageShortTitles[s.stageNumber]}
                </span>
              </button>

              {/* Tooltip on Hover/Focus */}
              {hoveredItem === `node-${s.stageNumber}` && (
                <div
                  role="tooltip"
                  className="absolute left-1/2 -bottom-9 -translate-x-1/2 z-40 hidden sm:flex items-center rounded bg-charcoal px-2.5 py-1 text-[11px] font-mono text-ivory shadow-md whitespace-nowrap"
                >
                  <span>Hop {s.stageNumber}: {stageShortTitles[s.stageNumber]}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Stepping Actions */}
      <div className="flex items-center gap-2">
        {/* Previous */}
        <button
          onClick={() => onSelectStage(activeStageNumber - 1)}
          disabled={activeStageNumber === 1}
          aria-label="Previous physical hop"
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-warm-sand-border bg-ivory text-xs font-mono font-semibold text-charcoal hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-burnt-orange"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="hidden sm:inline">PREV</span>
        </button>

        {/* Replay */}
        <button
          onClick={onReplay}
          aria-label="Reset journey to start"
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-warm-sand-border bg-ivory text-xs font-mono font-semibold text-charcoal hover:text-burnt-orange hover:bg-white transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-burnt-orange"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">REPLAY</span>
        </button>

        {/* Next */}
        <button
          onClick={() => onSelectStage(activeStageNumber + 1)}
          disabled={activeStageNumber === totalStages}
          aria-label="Next physical hop"
          className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg bg-burnt-orange text-xs font-mono font-bold text-white hover:bg-burnt-orange-hover disabled:opacity-30 disabled:hover:bg-burnt-orange disabled:cursor-not-allowed transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burnt-orange"
        >
          <span className="hidden sm:inline">NEXT</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Scrub Track with continuous progress feedback */}
      <div className="w-full flex items-center gap-3 pt-1 border-t border-warm-sand-border/50">
        <div className="flex-1 h-1.5 rounded-full bg-warm-sand/60 overflow-hidden">
          <div
            className="h-full bg-burnt-orange rounded-full transition-all duration-100 ease-out"
            style={{ width: `${Math.min(100, Math.max(2, Math.round(scrollProgress * 100)))}%` }}
          />
        </div>
        <span className="font-mono text-[10px] text-charcoal-muted tracking-wider shrink-0 font-bold">
          SCRUB: {Math.round(scrollProgress * 100)}%
        </span>
      </div>
    </div>
  );
}
