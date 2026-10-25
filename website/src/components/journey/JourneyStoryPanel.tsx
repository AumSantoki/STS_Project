"use client";

import { TracerouteStage } from "@/types/traceroute";
import { ArrowRight, ChevronLeft, Cpu, ExternalLink, RotateCcw } from "lucide-react";

interface JourneyStoryPanelProps {
  stage: TracerouteStage;
  totalStages: number;
  onSelectStage: (stageNum: number) => void;
  onReplay: () => void;
  onOpenDossier: () => void;
}

export function JourneyStoryPanel({
  stage,
  totalStages,
  onSelectStage,
  onReplay,
  onOpenDossier,
}: JourneyStoryPanelProps) {
  return (
    <div className="flex flex-col justify-between h-full w-full gap-4 p-5 sm:p-6 lg:p-7 rounded-2xl border border-warm-sand-border bg-ivory-light shadow-xs">
      {/* Top Section: Stage Identification, What Happens, and Why It Matters */}
      <div className="flex flex-col gap-3.5">
        {/* Stage Number & Clear Title */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-burnt-orange animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-wider text-burnt-orange uppercase">
              JOURNEY STAGE 0{stage.stageNumber} OF 0{totalStages}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight leading-tight">
            {stage.title}
          </h3>
        </div>

        {/* What Happens: 2 to 4 short sentences in everyday English */}
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-mono font-bold text-burnt-orange uppercase tracking-wider">
            WHAT HAPPENS
          </span>
          <p className="text-sm sm:text-[15px] lg:text-base text-charcoal leading-relaxed font-sans font-normal">
            {stage.physicalExplanation}
          </p>
        </div>

        {/* Why It Matters: 1 short sentence connecting to everyday use */}
        <div className="flex flex-col gap-1 rounded-xl border border-warm-sand-border/80 bg-ivory p-3 text-xs sm:text-sm text-charcoal leading-snug">
          <strong className="text-[11px] font-mono font-bold text-burnt-orange uppercase">
            WHY IT MATTERS
          </strong>
          <span className="text-charcoal-muted font-normal">
            {stage.whyItMatters}
          </span>
        </div>
      </div>

      {/* Bottom Section: Step Controls & Optional Technical Details Drawer Trigger */}
      <div className="flex flex-col gap-2.5 pt-3 border-t border-warm-sand-border/80">
        <div className="flex items-center gap-3">
          {stage.stageNumber > 1 && (
            <button
              onClick={() => onSelectStage(stage.stageNumber - 1)}
              aria-label="Go to previous stage"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-warm-sand-border bg-ivory text-xs font-mono font-bold text-charcoal hover:bg-white active:scale-[0.98] transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-burnt-orange cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4 text-burnt-orange" />
              <span>PREVIOUS</span>
            </button>
          )}

          {stage.stageNumber < totalStages ? (
            <button
              onClick={() => onSelectStage(stage.stageNumber + 1)}
              aria-label={`Continue to Stage 0${stage.stageNumber + 1}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-burnt-orange text-xs sm:text-sm font-bold text-white hover:bg-burnt-orange-hover active:scale-[0.98] transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burnt-orange cursor-pointer"
            >
              <span>Next stage</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={onReplay}
              aria-label="Replay journey from start"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-burnt-orange text-xs sm:text-sm font-bold text-white hover:bg-burnt-orange-hover active:scale-[0.98] transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burnt-orange cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Replay journey from start</span>
            </button>
          )}
        </div>

        {/* Optional Expandable Technical Details Drawer Trigger */}
        <button
          onClick={onOpenDossier}
          aria-label="Explore technical hardware details, workforce profiles, and research sources"
          className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl border border-warm-sand-border/80 bg-warm-sand/25 hover:bg-warm-sand/50 text-xs font-mono font-semibold text-charcoal transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Cpu className="h-3.5 w-3.5 text-burnt-orange" />
            <span>Explore technical details &amp; research</span>
          </div>
          <ExternalLink className="h-3.5 w-3.5 text-charcoal-muted" />
        </button>
      </div>
    </div>
  );
}
