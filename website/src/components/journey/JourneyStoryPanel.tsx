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
    <div className="flex flex-col justify-between h-full w-full gap-6 p-6 sm:p-8 rounded-3xl border border-warm-sand-border bg-ivory-light shadow-xs">
      {/* Top Section: Stage Identification & High-Contrast Explanation */}
      <div className="flex flex-col gap-4">
        {/* Stage Number & Category Tag */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-burnt-orange animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-widest text-burnt-orange uppercase">
            PHYSICAL HOP 0{stage.stageNumber} OF 0{totalStages} {"//"} {stage.category.toUpperCase()}
          </span>
        </div>

        {/* Stage Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight leading-tight">
          {stage.title}
        </h3>

        {/* Essential Physical Explanation: Comfortably readable editorial typography */}
        <p className="text-base sm:text-[17px] text-charcoal leading-relaxed font-sans font-normal">
          {stage.physicalExplanation}
        </p>

        {/* 1 or 2 Grounded Contextual Facts */}
        {stage.metrics.length > 0 && (
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            {stage.metrics.slice(0, 2).map((metric, idx) => (
              <div
                key={idx}
                className="inline-flex items-baseline gap-2 rounded-xl border border-warm-sand-border bg-ivory px-3.5 py-2 shadow-2xs"
              >
                <span className="font-mono text-sm sm:text-base font-bold text-burnt-orange">
                  {metric.value} {metric.unit}
                </span>
                <span className="text-xs font-medium text-charcoal-muted">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Section: Primary Navigation Controls & Secondary Dossier Drawer Trigger */}
      <div className="flex flex-col gap-3.5 pt-4 border-t border-warm-sand-border/80">
        {/* Step Navigation Buttons */}
        <div className="flex items-center gap-3">
          {stage.stageNumber > 1 && (
            <button
              onClick={() => onSelectStage(stage.stageNumber - 1)}
              aria-label="Go to previous physical hop"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-warm-sand-border bg-ivory text-xs font-mono font-bold text-charcoal hover:bg-white active:scale-[0.98] transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-burnt-orange cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4 text-burnt-orange" />
              <span>PREVIOUS</span>
            </button>
          )}

          {stage.stageNumber < totalStages ? (
            <button
              onClick={() => onSelectStage(stage.stageNumber + 1)}
              aria-label={`Continue to Hop 0${stage.stageNumber + 1}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-burnt-orange text-xs sm:text-sm font-bold text-white hover:bg-burnt-orange-hover active:scale-[0.98] transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burnt-orange cursor-pointer"
            >
              <span>Continue down the route</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={onReplay}
              aria-label="Replay physical journey from start"
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-burnt-orange text-xs sm:text-sm font-bold text-white hover:bg-burnt-orange-hover active:scale-[0.98] transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burnt-orange cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Replay expedition from start</span>
            </button>
          )}
        </div>

        {/* Secondary Detail Drawer Button */}
        <button
          onClick={onOpenDossier}
          aria-label="Open engineering specifications and workforce analysis drawer"
          className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl border border-warm-sand-border/80 bg-warm-sand/25 hover:bg-warm-sand/50 text-xs font-mono font-semibold text-charcoal transition-colors text-left cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Cpu className="h-3.5 w-3.5 text-burnt-orange" />
            <span>Inspect Engineering Specs &amp; Labor Realities</span>
          </div>
          <ExternalLink className="h-3.5 w-3.5 text-charcoal-muted" />
        </button>

        {/* Helpful Prompt for Guided Scroll */}
        <div className="flex items-center justify-between text-[11px] font-mono text-charcoal-muted">
          <span>Scroll mouse or trackpad to travel along wire</span>
          <span className="font-bold text-burnt-orange">0{stage.stageNumber} / 0{totalStages}</span>
        </div>
      </div>
    </div>
  );
}
