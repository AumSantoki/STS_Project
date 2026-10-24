"use client";

import { useState } from "react";
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

interface JourneyDiagramCanvasProps {
  stages: TracerouteStage[];
  activeStageNumber: number;
  onSelectStage: (stageNumber: number) => void;
}

export function JourneyDiagramCanvas({
  stages,
  activeStageNumber,
  onSelectStage,
}: JourneyDiagramCanvasProps) {
  const shouldReduceMotion = useReducedMotion();
  const [hoveredNodeId, setHoveredNodeId] = useState<number | null>(null);

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

  // Physical Environment Landmark Descriptions
  const environmentDescriptions: Record<number, { environment: string; landmark: string }> = {
    1: { environment: "Airborne RF Waves", landmark: "Home Gateway (2.4/5GHz)" },
    2: { environment: "Buried Street Conduit", landmark: "GPON Fiber Splitter (9µm Glass)" },
    3: { environment: "Carrier Colocation Hall", landmark: "BGP Peering Fabric & Meet-Me Room" },
    4: { environment: "Coastal Shore Facility", landmark: "15,000V DC Power Feed & Beach Manhole" },
    5: { environment: "Abyssal Seabed (4,000m)", landmark: "Submarine Armored Fiber & Optical Repeaters" },
    6: { environment: "Thermodynamic Mega-Campus", landmark: "Chilled Water Loops & Server Racks" },
  };

  return (
    <div
      role="region"
      aria-label="Physical Network Journey Map"
      className="relative rounded-2xl border border-warm-sand-border bg-ivory-light p-4 sm:p-6 shadow-sm overflow-hidden"
    >
      {/* Background Architectural Grid Accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 pointer-events-none [background-image:linear-gradient(to_right,#E4D6C4_1px,transparent_1px),linear-gradient(to_bottom,#E4D6C4_1px,transparent_1px)] [background-size:24px_24px]"
      />

      {/* Top Banner Status */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-warm-sand-border/80 text-xs font-mono">
        <div className="flex items-center gap-2 text-charcoal font-bold">
          <span className="flex h-2 w-2 rounded-full bg-burnt-orange" />
          <span>TOPOLOGICAL EXPEDITION ROUTE</span>
        </div>
        <span className="text-charcoal-muted">
          Active Environment:{" "}
          <strong className="text-burnt-orange">
            {environmentDescriptions[activeStageNumber]?.environment}
          </strong>
        </span>
      </div>

      {/* Interactive Horizontal Track (Scrollable on small mobile) */}
      <div className="relative z-10 my-4 overflow-x-auto pb-4 pt-6 scrollbar-thin">
        <div className="min-w-[680px] px-4 relative flex flex-col justify-center">
          {/* SVG Connecting Optical Conduit */}
          <svg
            className="w-full h-24 overflow-visible"
            viewBox="0 0 1000 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="activeTrace" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C47745" />
                <stop offset="50%" stopColor="#D7B96D" />
                <stop offset="100%" stopColor="#C47745" />
              </linearGradient>
            </defs>

            {/* Base Inactive Path */}
            <path
              d="M 70,40 C 200,10 300,70 410,40 C 520,10 650,70 750,40 L 930,40"
              stroke="#D8C7B0"
              strokeWidth="3"
              strokeDasharray="4 6"
              fill="none"
            />

            {/* Active Illuminated Path */}
            <path
              d="M 70,40 C 200,10 300,70 410,40 C 520,10 650,70 750,40 L 930,40"
              stroke="url(#activeTrace)"
              strokeWidth="3.5"
              fill="none"
              strokeDasharray="1000"
              strokeDashoffset={1000 - (activeStageNumber / stages.length) * 1000}
              className="transition-all duration-500 ease-out"
            />

            {/* Animated Packet Pulse */}
            {!shouldReduceMotion && (
              <circle r="5" fill="#C47745" filter="drop-shadow(0 0 6px #C47745)">
                <animate
                  attributeName="cx"
                  values="70;240;410;580;750;930"
                  keyTimes="0;0.2;0.4;0.6;0.8;1"
                  dur="4s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="40;25;40;25;40;40"
                  keyTimes="0;0.2;0.4;0.6;0.8;1"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </svg>

          {/* Interactive Node Buttons Row */}
          <div className="relative -mt-16 flex items-center justify-between">
            {stages.map((stage) => {
              const isActive = stage.stageNumber === activeStageNumber;
              const isCompleted = stage.stageNumber < activeStageNumber;
              const isHovered = hoveredNodeId === stage.stageNumber;

              return (
                <div key={stage.id} className="relative flex flex-col items-center">
                  <button
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                    aria-label={`Hop ${stage.stageNumber}: ${stage.title}`}
                    onClick={() => onSelectStage(stage.stageNumber)}
                    onMouseEnter={() => setHoveredNodeId(stage.stageNumber)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    onFocus={() => setHoveredNodeId(stage.stageNumber)}
                    onBlur={() => setHoveredNodeId(null)}
                    className={`group relative flex flex-col items-center p-2 rounded-xl transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-burnt-orange ${
                      isActive
                        ? "scale-105"
                        : "hover:scale-102"
                    }`}
                  >
                    {/* Node Icon Circle */}
                    <div
                      className={`relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border-2 transition-all duration-300 ${
                        isActive
                          ? "border-burnt-orange bg-burnt-orange text-white shadow-md shadow-burnt-orange/30"
                          : isCompleted
                          ? "border-burnt-orange/50 bg-warm-sand/80 text-charcoal hover:bg-burnt-orange/20"
                          : "border-warm-sand-border bg-ivory text-charcoal-muted hover:border-charcoal hover:text-charcoal shadow-2xs"
                      }`}
                    >
                      {getStageIcon(stage.iconKey, "h-5 w-5 sm:h-6 sm:w-6")}

                      {/* Concentric Signal Ring around Active Node */}
                      {isActive && !shouldReduceMotion && (
                        <span className="absolute -inset-1.5 rounded-2xl border-2 border-burnt-orange/60 animate-ping opacity-30 pointer-events-none" />
                      )}
                    </div>

                    {/* Stage Label Below */}
                    <div className="flex flex-col items-center text-center mt-2">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-burnt-orange">
                        HOP 0{stage.stageNumber}
                      </span>
                      <span
                        className={`text-xs font-semibold max-w-[90px] sm:max-w-[110px] leading-tight line-clamp-1 mt-0.5 ${
                          isActive ? "text-charcoal font-bold" : "text-charcoal-muted"
                        }`}
                      >
                        {stage.shortLabel.replace(/^\d+\.\s*/, "")}
                      </span>
                    </div>
                  </button>

                  {/* Contextual Hover Preview Tooltip */}
                  {isHovered && (
                    <div
                      role="tooltip"
                      className="absolute bottom-full mb-3 z-30 flex flex-col items-center rounded-lg bg-charcoal text-ivory p-2.5 text-xs font-sans shadow-xl w-48 text-center pointer-events-none animate-in fade-in zoom-in-95 duration-150"
                    >
                      <span className="font-mono text-[10px] text-muted-gold font-bold uppercase">
                        {stage.category}
                      </span>
                      <strong className="text-xs font-semibold text-white mt-0.5">
                        {stage.title}
                      </strong>
                      <span className="text-[10px] text-ivory/80 mt-1 leading-snug">
                        {environmentDescriptions[stage.stageNumber]?.landmark}
                      </span>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-charcoal" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Stage Quick Environmental Snapshot Footer */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-warm-sand-border/80 text-xs font-mono">
        <div className="flex items-center gap-2 text-charcoal">
          <Zap className="h-3.5 w-3.5 text-burnt-orange" />
          <span>
            Physical Landmark:{" "}
            <strong>
              {environmentDescriptions[activeStageNumber]?.landmark}
            </strong>
          </span>
        </div>
        <span className="text-charcoal-muted text-[11px]">
          Click any landmark above to jump directly
        </span>
      </div>
    </div>
  );
}
