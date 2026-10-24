"use client";

import { motion, useReducedMotion } from "motion/react";
import { TracerouteStage } from "@/types/traceroute";
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  FileText,
  HardDrive,
  Info,
  ShieldAlert,
  Users,
  Zap,
} from "lucide-react";

interface StageInspectorPanelProps {
  stage: TracerouteStage;
  totalStages: number;
  onSelectStage: (stageNumber: number) => void;
  onClose?: () => void;
}

export function StageInspectorPanel({
  stage,
  totalStages,
  onSelectStage,
  onClose,
}: StageInspectorPanelProps) {
  const shouldReduceMotion = useReducedMotion();

  const handlePrev = () => {
    if (stage.stageNumber > 1) {
      onSelectStage(stage.stageNumber - 1);
    }
  };

  const handleNext = () => {
    if (stage.stageNumber < totalStages) {
      onSelectStage(stage.stageNumber + 1);
    }
  };

  return (
    <div
      role="region"
      aria-live="polite"
      aria-label={`Detailed inspector for Stage ${stage.stageNumber}: ${stage.title}`}
      className="flex flex-col rounded-xl border border-surface-border bg-surface/90 backdrop-blur-md shadow-2xl overflow-hidden"
    >
      {/* Terminal Inspector Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-surface-border bg-background-deep/60">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-cyan-accent animate-pulse" />
          </span>
          <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
            INSPECTOR // HOP_0{stage.stageNumber}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-foreground-muted">
            [{stage.category}]
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-foreground-muted">
            {stage.stageNumber} of {totalStages}
          </span>
          {onClose && (
            <button
              onClick={onClose}
              aria-label="Close inspector panel"
              className="ml-2 rounded px-2 py-0.5 text-xs font-mono text-foreground-muted hover:text-white hover:bg-surface-hover transition-colors"
            >
              ESC
            </button>
          )}
        </div>
      </div>

      {/* Main Inspector Body with Motion transition */}
      <motion.div
        key={stage.id}
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
        transition={{ duration: shouldReduceMotion ? 0.05 : 0.25, ease: "easeOut" }}
        className="flex-1 p-6 sm:p-8 flex flex-col gap-6 overflow-y-auto max-h-[70vh]"
      >
        {/* Title and Short Summary */}
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-cyan-accent/20 bg-cyan-accent/5 px-2.5 py-0.5 text-[11px] font-mono text-cyan-accent">
            <Zap className="h-3 w-3" />
            <span>STAGE {stage.stageNumber} · {stage.category.toUpperCase()}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            {stage.title}
          </h3>
          <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
            {stage.summary}
          </p>
        </div>

        {/* Real Physical Metrics Badges */}
        {stage.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {stage.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-lg border border-surface-border bg-background-deep/50 p-3.5"
              >
                <div className="flex items-baseline gap-1.5 font-mono">
                  <span className="text-xl sm:text-2xl font-bold text-cyan-accent">
                    {metric.value}
                  </span>
                  {metric.unit && (
                    <span className="text-xs text-foreground-muted">
                      {metric.unit}
                    </span>
                  )}
                </div>
                <span className="text-xs font-semibold text-white mt-0.5">
                  {metric.label}
                </span>
                <span className="text-[11px] text-foreground-muted mt-1 leading-normal">
                  {metric.context}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Physical Mechanism Description */}
        <div className="flex flex-col gap-2 border-t border-surface-border/60 pt-5">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-accent uppercase tracking-wider">
            <Cpu className="h-3.5 w-3.5" />
            <span>Physical Layer Mechanism</span>
          </div>
          <p className="text-sm text-foreground-muted leading-relaxed">
            {stage.physicalExplanation}
          </p>
        </div>

        {/* Hardware & Infrastructure Telemetry Grid */}
        <div className="flex flex-col gap-2.5 border-t border-surface-border/60 pt-5">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-accent uppercase tracking-wider">
            <HardDrive className="h-3.5 w-3.5" />
            <span>Hardware & Medium Specifications</span>
          </div>
          <div className="grid grid-cols-1 gap-2.5">
            {stage.hardwareSpecs.map((spec, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-surface-border/80 bg-surface-hover/40 p-3 text-xs"
              >
                <div className="flex items-center justify-between font-mono">
                  <span className="text-foreground-muted">{spec.label}</span>
                  <span className="font-semibold text-white">{spec.value}</span>
                </div>
                {spec.detail && (
                  <p className="mt-1 text-[11px] text-foreground-muted/90 font-sans">
                    {spec.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Societal & Infrastructure Significance (STS Core) */}
        <div className="flex flex-col gap-2 border-t border-surface-border/60 pt-5">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-accent uppercase tracking-wider">
            <ShieldAlert className="h-3.5 w-3.5" />
            <span>Why This Stage Matters (STS Insight)</span>
          </div>
          <p className="text-sm text-foreground-muted leading-relaxed">
            {stage.whyItMatters}
          </p>
        </div>

        {/* Human Labor Spotlight */}
        <div className="flex flex-col gap-3 border-t border-surface-border/60 pt-5">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-accent uppercase tracking-wider">
            <Users className="h-3.5 w-3.5" />
            <span>The Human Workforce Behind This Stage</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stage.humanRoles.map((role, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-surface-border bg-surface-hover/30 p-3.5 flex flex-col gap-1.5"
              >
                <h4 className="text-xs font-mono font-bold text-white">
                  {role.role}
                </h4>
                <p className="text-xs text-foreground-muted leading-snug">
                  {role.responsibility}
                </p>
                <p className="text-[11px] text-foreground-muted/70 italic border-t border-surface-border/40 pt-1.5 mt-1 font-sans">
                  &ldquo;{role.fieldReality}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Reference & Pedagogical Caveats */}
        <div className="flex flex-col gap-2.5 rounded-lg border border-blue-accent/20 bg-blue-accent/5 p-4 text-xs font-sans mt-2">
          <div className="flex items-center gap-2 font-mono text-[11px] text-blue-accent uppercase font-bold">
            <FileText className="h-3.5 w-3.5" />
            <span>Research Attribution & Evidence</span>
          </div>
          <div className="text-foreground text-xs leading-normal">
            <span className="font-semibold text-white">Source: </span>
            {stage.researchReference.documentTitle} ({stage.researchReference.sectionOrPage})
          </div>
          <div className="text-foreground-muted text-[11px]">
            {stage.researchReference.citationNotes}
          </div>

          {/* Explicit Caveats */}
          <div className="mt-2 pt-2 border-t border-blue-accent/15 flex flex-col gap-1 text-[11px] text-foreground-muted">
            <div className="flex items-center gap-1 font-mono font-semibold text-amber-accent/90 text-[10px] uppercase">
              <Info className="h-3 w-3" />
              <span>Pedagogical Caveats & Route Limitations</span>
            </div>
            {stage.caveats.map((caveat, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <span className="text-amber-accent leading-none">•</span>
                <span>{caveat}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stepper Footer Controls */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-surface-border bg-background-deep/80">
        <button
          onClick={handlePrev}
          disabled={stage.stageNumber === 1}
          aria-label="Navigate to previous stage"
          className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-mono text-foreground hover:text-white hover:bg-surface disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>PREV HOP</span>
        </button>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalStages }).map((_, i) => (
            <button
              key={i}
              onClick={() => onSelectStage(i + 1)}
              aria-label={`Jump directly to stage ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-200 ${
                stage.stageNumber === i + 1
                  ? "w-6 bg-cyan-accent"
                  : "w-2 bg-surface-border hover:bg-foreground-muted"
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={stage.stageNumber === totalStages}
          aria-label="Navigate to next stage"
          className="inline-flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-xs font-mono font-semibold bg-cyan-accent text-background hover:bg-cyan-accent/90 disabled:opacity-30 disabled:hover:bg-cyan-accent disabled:cursor-not-allowed transition-colors"
        >
          <span>NEXT HOP</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
