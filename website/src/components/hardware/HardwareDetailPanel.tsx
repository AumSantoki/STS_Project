"use client";

import { useState } from "react";
import { HardwareComponent } from "@/types/hardware";
import { PEOPLE_ROLES } from "@/data/peopleRoles";
import {
  ArrowRight,
  BookOpen,
  Info,
  Users,
  Compass,
  CheckCircle2,
  Sliders,
} from "lucide-react";

interface HardwareDetailPanelProps {
  component: HardwareComponent;
  activePartId: string | null;
  onSelectPart: (partId: string) => void;
}

export function HardwareDetailPanel({
  component,
  activePartId,
  onSelectPart,
}: HardwareDetailPanelProps) {
  const [activeTab, setActiveTab] = useState<"architecture" | "specs" | "context">("architecture");

  // Selected anatomical part, or default to first part
  const activePart =
    component.anatomicalParts.find((p) => p.id === activePartId) ||
    component.anatomicalParts[0];

  // Resolve connected professional profiles
  const connectedRoles = PEOPLE_ROLES.filter((role) =>
    component.connectedRoleIds.includes(role.id)
  );

  const handleRoleClick = (roleId: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("select-role", { detail: roleId }));
      const target = document.getElementById("people-behind");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleStageClick = (stageNumber: number) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-journey-stage", { detail: stageNumber })
      );
      const target =
        document.getElementById(`journey-stage-${stageNumber}`) ||
        document.getElementById("journey-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex flex-col gap-5 bg-ivory-light rounded-2xl border border-warm-sand-border p-5 sm:p-6 shadow-sm">
      {/* Header Info */}
      <div className="flex flex-col gap-2.5 pb-4 border-b border-warm-sand-border">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold bg-burnt-orange/15 text-burnt-orange border border-burnt-orange/30">
              HARDWARE // 0{component.componentNumber}
            </span>
            <span className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold bg-warm-sand/50 text-charcoal border border-warm-sand">
              {component.category}
            </span>
          </div>

          <span className="text-[11px] font-mono text-charcoal-muted">
            {component.anatomicalParts.length} Critical Subsystems
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
          {component.name}
        </h3>

        <p className="text-xs sm:text-sm font-medium text-charcoal-muted leading-relaxed">
          {component.subtitle}
        </p>

        {/* Purpose Callout */}
        <div className="mt-1 p-3 rounded-xl bg-warm-sand/30 border border-warm-sand-border flex items-start gap-2.5">
          <Info className="w-4 h-4 text-burnt-orange shrink-0 mt-0.5" />
          <p className="text-xs sm:text-[13px] text-charcoal leading-relaxed font-sans">
            <strong className="font-semibold text-charcoal">Core Purpose: </strong>
            {component.oneLinePurpose}
          </p>
        </div>
      </div>

      {/* Sub-navigation Tabs */}
      <div className="flex items-center gap-2 p-1 rounded-xl bg-warm-sand/40 border border-warm-sand-border text-xs font-mono">
        <button
          onClick={() => setActiveTab("architecture")}
          className={`flex-1 py-1.5 px-3 rounded-lg font-bold transition-all ${
            activeTab === "architecture"
              ? "bg-charcoal text-ivory shadow-xs"
              : "text-charcoal-muted hover:text-charcoal"
          }`}
        >
          ANATOMY & WORKING
        </button>
        <button
          onClick={() => setActiveTab("specs")}
          className={`flex-1 py-1.5 px-3 rounded-lg font-bold transition-all ${
            activeTab === "specs"
              ? "bg-charcoal text-ivory shadow-xs"
              : "text-charcoal-muted hover:text-charcoal"
          }`}
        >
          ENGINEERING SPECS
        </button>
        <button
          onClick={() => setActiveTab("context")}
          className={`flex-1 py-1.5 px-3 rounded-lg font-bold transition-all ${
            activeTab === "context"
              ? "bg-charcoal text-ivory shadow-xs"
              : "text-charcoal-muted hover:text-charcoal"
          }`}
        >
          HUMAN & NETWORK LINKS
        </button>
      </div>

      {/* TAB 1: Anatomy & Working */}
      {activeTab === "architecture" && (
        <div className="flex flex-col gap-4">
          {/* Subsystem Selector Rail */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-mono font-bold uppercase text-charcoal-muted tracking-wider">
              SELECT ANATOMICAL SUBSYSTEM:
            </span>
            <div className="flex flex-wrap gap-2">
              {component.anatomicalParts.map((part) => {
                const isSelected = part.id === activePart.id;
                return (
                  <button
                    key={part.id}
                    onClick={() => onSelectPart(part.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all border ${
                      isSelected
                        ? "bg-burnt-orange text-ivory border-burnt-orange shadow-xs scale-102"
                        : "bg-ivory text-charcoal border-warm-sand hover:border-burnt-orange/50 hover:bg-warm-sand/20"
                    }`}
                  >
                    {part.name.split("(")[0].trim()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Subsystem Deep Dive Card */}
          <div className="p-4 rounded-xl border border-warm-sand-border bg-ivory flex flex-col gap-2.5">
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-warm-sand-border">
              <span className="text-sm font-bold text-charcoal flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-burnt-orange" />
                {activePart.name}
              </span>
              <span className="text-[11px] font-mono text-charcoal-muted">
                {activePart.physicalLocation}
              </span>
            </div>

            <div className="text-xs text-charcoal leading-relaxed font-sans">
              <span className="font-semibold text-charcoal block mb-0.5">Physical Function:</span>
              {activePart.description}
            </div>

            <div className="mt-1 p-2 rounded-lg bg-warm-sand/25 border border-warm-sand text-[11px] font-mono text-charcoal-muted">
              <strong className="text-charcoal font-semibold">Material / Technology: </strong>
              {activePart.materialOrTech}
            </div>
          </div>

          {/* How It Works & Internet Delivery Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-xl bg-ivory border border-warm-sand-border flex flex-col gap-1.5">
              <span className="text-[11px] font-mono font-bold uppercase text-burnt-orange tracking-wider flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                HOW IT WORKS
              </span>
              <p className="text-xs text-charcoal leading-relaxed font-sans">
                {component.howItWorks}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-ivory border border-warm-sand-border flex flex-col gap-1.5">
              <span className="text-[11px] font-mono font-bold uppercase text-sage-green tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                ROLE IN INTERNET DELIVERY
              </span>
              <p className="text-xs text-charcoal leading-relaxed font-sans">
                {component.internetRole}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Specifications */}
      {activeTab === "specs" && (
        <div className="flex flex-col gap-3.5">
          <span className="text-[11px] font-mono font-bold uppercase text-charcoal-muted tracking-wider">
            PHYSICAL & OPERATIONAL PARAMETERS
          </span>

          <div className="grid grid-cols-1 gap-2.5">
            {component.specifications.map((spec, i) => (
              <div
                key={i}
                className="p-3 rounded-xl border border-warm-sand-border bg-ivory flex flex-col gap-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-charcoal">
                    {spec.label}
                  </span>
                  <span className="text-xs font-mono font-bold text-burnt-orange bg-burnt-orange/10 px-2 py-0.5 rounded-md">
                    {spec.value}
                  </span>
                </div>
                <p className="text-[11px] text-charcoal-muted font-sans leading-relaxed">
                  {spec.context}
                </p>
              </div>
            ))}
          </div>

          {/* Physical Form Factor Description */}
          <div className="mt-2 p-3.5 rounded-xl bg-warm-sand/30 border border-warm-sand-border flex flex-col gap-1">
            <span className="text-[11px] font-mono font-bold text-charcoal uppercase">
              Field Installation & Chassis Form Factor
            </span>
            <p className="text-xs text-charcoal-muted font-sans leading-relaxed">
              {component.physicalDescription}
            </p>
          </div>
        </div>
      )}

      {/* TAB 3: Human & Network Connections */}
      {activeTab === "context" && (
        <div className="flex flex-col gap-4">
          {/* Related People Profiles */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono font-bold uppercase text-charcoal-muted tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-burnt-orange" />
              CONNECTED WORKFORCE (THE PEOPLE BEHIND THIS HARDWARE)
            </span>

            <div className="flex flex-col gap-2">
              {connectedRoles.map((role) => (
                <div
                  key={role.id}
                  className="p-3 rounded-xl border border-warm-sand-border bg-ivory flex items-center justify-between gap-3 hover:border-burnt-orange/60 transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-charcoal">
                      {role.title}
                    </span>
                    <span className="text-[11px] text-charcoal-muted font-mono">
                      {role.infrastructureArea}
                    </span>
                  </div>

                  <button
                    onClick={() => handleRoleClick(role.id)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-burnt-orange text-ivory hover:bg-burnt-orange/90 transition-all shrink-0"
                  >
                    <span>View Role</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Trace in Journey of a Single Click */}
          <div className="flex flex-col gap-2 pt-2 border-t border-warm-sand-border">
            <span className="text-[11px] font-mono font-bold uppercase text-charcoal-muted tracking-wider flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-burnt-orange" />
              PHYSICAL TRACEROUTE HOP MAPPING
            </span>

            <div className="flex flex-wrap gap-2">
              {component.connectedStageNumbers.map((stageNum) => (
                <button
                  key={stageNum}
                  onClick={() => handleStageClick(stageNum)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-ivory border border-warm-sand hover:border-burnt-orange transition-colors text-charcoal"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange" />
                  <span>Hop 0{stageNum} in Single Click Journey</span>
                  <ArrowRight className="w-3 h-3 text-charcoal-muted" />
                </button>
              ))}
            </div>
          </div>

          {/* Academic Source Reference */}
          <div className="p-3 rounded-xl bg-warm-sand/20 border border-warm-sand flex flex-col gap-1 mt-1">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-charcoal">
              <BookOpen className="w-3.5 h-3.5 text-burnt-orange" />
              <span>RESEARCH SOURCE: {component.academicSource.documentTitle}</span>
            </div>
            <p className="text-[11px] text-charcoal-muted font-sans">
              {component.academicSource.chapterOrSection} — {component.academicSource.citationNote}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
