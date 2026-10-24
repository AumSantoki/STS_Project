"use client";

import { useReducedMotion } from "motion/react";
import { TracerouteStage } from "@/types/traceroute";
import {
  Anchor,
  Cable,
  Cpu,
  GitCommit,
  Network,
  Radio,
  Server,
  Zap,
} from "lucide-react";

interface TracerouteNavGraphProps {
  stages: TracerouteStage[];
  activeStageNumber: number;
  onSelectStage: (stageNumber: number) => void;
}

export function TracerouteNavGraph({
  stages,
  activeStageNumber,
  onSelectStage,
}: TracerouteNavGraphProps) {
  const shouldReduceMotion = useReducedMotion();

  // Helper to map iconKey to Lucide icon component
  const getStageIcon = (iconKey: TracerouteStage["iconKey"], className: string) => {
    switch (iconKey) {
      case "radio":
        return <Radio className={className} />;
      case "ethernet":
        return <Network className={className} />;
      case "git-commit":
        return <GitCommit className={className} />;
      case "anchor":
        return <Anchor className={className} />;
      case "cable":
        return <Cable className={className} />;
      case "server":
        return <Server className={className} />;
      default:
        return <Cpu className={className} />;
    }
  };

  // Keyboard navigation handler for the node list
  const handleKeyDown = (e: React.KeyboardEvent, stageNum: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelectStage(stageNum);
    } else if (e.key === "ArrowDown" && stageNum < stages.length) {
      e.preventDefault();
      onSelectStage(stageNum + 1);
    } else if (e.key === "ArrowUp" && stageNum > 1) {
      e.preventDefault();
      onSelectStage(stageNum - 1);
    }
  };

  // Calculate percentage of illuminated trunk progress
  const activePercentage =
    stages.length > 1
      ? ((activeStageNumber - 1) / (stages.length - 1)) * 100
      : 0;

  return (
    <div
      role="tablist"
      aria-label="Physical Traceroute Stage Selector"
      className="relative flex flex-col gap-3 py-2 select-none"
    >
      {/* Background SVG Vertical Trunk Connection */}
      <div
        aria-hidden="true"
        className="absolute left-[27px] sm:left-[31px] top-7 bottom-7 w-1 -translate-x-1/2 pointer-events-none"
      >
        {/* Dim base inactive trunk */}
        <div className="h-full w-0.5 mx-auto bg-surface-border border-r border-dashed border-surface-border" />

        {/* Illuminated active path */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-accent via-blue-accent to-cyan-accent shadow-[0_0_8px_rgba(0,240,255,0.6)] transition-all duration-300 ease-out"
          style={{ height: `${activePercentage}%` }}
        />

        {/* Moving optical light pulse along active segment */}
        {!shouldReduceMotion && activeStageNumber > 1 && (
          <div
            className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-accent shadow-[0_0_12px_#00F0FF] animate-pulse"
            style={{
              top: `${Math.min(activePercentage, 98)}%`,
              transition: "top 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        )}
      </div>

      {/* Selectable Node List */}
      {stages.map((stage) => {
        const isActive = stage.stageNumber === activeStageNumber;
        const isCompleted = stage.stageNumber < activeStageNumber;

        return (
          <button
            key={stage.id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`inspector-panel-${stage.id}`}
            id={`stage-tab-${stage.stageNumber}`}
            tabIndex={0}
            onClick={() => onSelectStage(stage.stageNumber)}
            onKeyDown={(e) => handleKeyDown(e, stage.stageNumber)}
            className={`group relative flex items-start gap-4 p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-cyan-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              isActive
                ? "border-cyan-accent/60 bg-surface/95 shadow-[0_4px_20px_rgba(0,240,255,0.12)]"
                : isCompleted
                ? "border-surface-border bg-surface/40 hover:border-cyan-accent/30 hover:bg-surface/70"
                : "border-surface-border/60 bg-background-deep/40 hover:border-surface-border hover:bg-surface/40"
            }`}
          >
            {/* Left Node Indicator Icon with Concentric Rings */}
            <div className="relative shrink-0 mt-0.5">
              <div
                className={`flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg border transition-all duration-200 ${
                  isActive
                    ? "border-cyan-accent bg-cyan-accent text-background shadow-[0_0_16px_rgba(0,240,255,0.4)]"
                    : isCompleted
                    ? "border-cyan-accent/50 bg-cyan-accent/10 text-cyan-accent"
                    : "border-surface-border bg-surface text-foreground-muted group-hover:border-foreground-muted"
                }`}
              >
                {getStageIcon(stage.iconKey, "h-4 w-4")}
              </div>

              {/* Pulsing ring indicator around active node */}
              {isActive && !shouldReduceMotion && (
                <span className="absolute -inset-1 rounded-xl border border-cyan-accent/50 animate-ping opacity-40 pointer-events-none" />
              )}
            </div>

            {/* Stage Metadata & Labels */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono font-bold tracking-wider text-cyan-accent">
                  HOP 0{stage.stageNumber}
                </span>
                <span className="text-[10px] font-mono text-foreground-muted uppercase px-1.5 py-0.5 rounded bg-background-deep/60 border border-surface-border">
                  {stage.category}
                </span>
              </div>

              <h4
                className={`text-sm sm:text-base font-semibold tracking-tight transition-colors mt-0.5 truncate ${
                  isActive ? "text-white" : "text-foreground-muted group-hover:text-white"
                }`}
              >
                {stage.title}
              </h4>

              <p className="text-xs text-foreground-muted line-clamp-1 mt-0.5 font-sans">
                {stage.summary}
              </p>
            </div>

            {/* Active Pill Marker */}
            {isActive && (
              <div className="hidden lg:flex items-center gap-1 self-center pl-2 text-cyan-accent text-xs font-mono font-bold">
                <Zap className="h-3.5 w-3.5 animate-pulse" />
                <span className="text-[11px]">ACTIVE</span>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
