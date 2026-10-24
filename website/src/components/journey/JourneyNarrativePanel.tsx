"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { TracerouteStage } from "@/types/traceroute";
import { BookOpen, ChevronDown, ChevronUp, Cpu, HardDrive, Info, ShieldAlert, Users } from "lucide-react";

interface JourneyNarrativePanelProps {
  stage: TracerouteStage;
}

export function JourneyNarrativePanel({ stage }: JourneyNarrativePanelProps) {
  const [isDossierOpen, setIsDossierOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto w-full">
      {/* Narrative Header & Story Text */}
      <div className="flex flex-col gap-3 text-left">
        <div className="flex items-center gap-2 font-mono text-xs text-burnt-orange font-bold uppercase tracking-wider">
          <span>HOP 0{stage.stageNumber} OF 06</span>
          <span className="text-warm-sand">•</span>
          <span>{stage.category}</span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-charcoal">
          {stage.title}
        </h3>

        <p className="text-base sm:text-lg text-charcoal leading-relaxed font-normal">
          {stage.physicalExplanation}
        </p>

        {/* Highlight Physical Metrics Tiles (Compact, editorial) */}
        {stage.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {stage.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="flex items-baseline gap-3 rounded-xl border border-warm-sand-border bg-ivory-light px-4 py-3 shadow-2xs"
              >
                <span className="font-mono text-xl sm:text-2xl font-bold text-burnt-orange shrink-0">
                  {metric.value} {metric.unit}
                </span>
                <div className="flex flex-col text-xs leading-snug">
                  <strong className="text-charcoal font-semibold">{metric.label}</strong>
                  <span className="text-charcoal-muted text-[11px]">{metric.context}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Progressive Disclosure: Expandable Research & Workforce Dossier */}
      <div className="rounded-xl border border-warm-sand-border bg-ivory-light overflow-hidden transition-all duration-200">
        <button
          onClick={() => setIsDossierOpen(!isDossierOpen)}
          aria-expanded={isDossierOpen}
          className="w-full flex items-center justify-between p-4 text-xs font-mono font-bold text-charcoal hover:text-burnt-orange hover:bg-warm-sand/20 transition-colors text-left"
        >
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-burnt-orange" />
            <span>
              {isDossierOpen ? "HIDE FIELD RESEARCH & WORKFORCE DOSSIER" : "EXPLORE FIELD HARDWARE, WORKFORCE & STS IMPACT"}
            </span>
          </div>
          {isDossierOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        <AnimatePresence>
          {isDossierOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.05 : 0.3, ease: "easeOut" }}
              className="px-5 pb-6 pt-2 border-t border-warm-sand-border/80 flex flex-col gap-5 text-xs overflow-hidden"
            >
              {/* Hardware Specifications */}
              <div className="flex flex-col gap-2 pt-2">
                <span className="font-mono text-[11px] font-bold text-charcoal-muted uppercase flex items-center gap-1.5">
                  <HardDrive className="h-3.5 w-3.5 text-muted-gold" />
                  Hardware &amp; Physical Layer Specifications
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {stage.hardwareSpecs.map((spec, idx) => (
                    <div key={idx} className="rounded-lg border border-warm-sand-border bg-ivory p-3">
                      <span className="font-mono text-[10px] text-charcoal-muted block">{spec.label}</span>
                      <strong className="text-xs font-semibold text-charcoal block mt-0.5">{spec.value}</strong>
                      {spec.detail && (
                        <p className="text-[11px] text-charcoal-muted mt-1 leading-snug">{spec.detail}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* STS Societal Significance */}
              <div className="flex flex-col gap-1.5 rounded-lg border border-burnt-orange/30 bg-burnt-orange/5 p-3.5">
                <span className="font-mono text-[11px] font-bold text-burnt-orange uppercase flex items-center gap-1.5">
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Societal Impact &amp; Fragility (STS Insight)
                </span>
                <p className="text-xs text-charcoal leading-relaxed font-sans">{stage.whyItMatters}</p>
              </div>

              {/* Human Workforce */}
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] font-bold text-charcoal-muted uppercase flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5 text-sage-green" />
                  The Human Workforce Behind This Stage
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {stage.humanRoles.map((role, idx) => (
                    <div key={idx} className="rounded-lg border border-warm-sand-border bg-ivory p-3 flex flex-col gap-1">
                      <strong className="text-xs font-mono text-charcoal">{role.role}</strong>
                      <p className="text-[11px] text-charcoal-muted leading-snug">{role.responsibility}</p>
                      <span className="text-[10px] text-charcoal-muted/80 italic mt-1">&ldquo;{role.fieldReality}&rdquo;</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Research Attribution & Caveats */}
              <div className="rounded-lg border border-warm-sand-border bg-warm-sand/20 p-3 flex flex-col gap-1.5 text-[11px]">
                <div className="flex items-center gap-1.5 font-mono font-bold text-charcoal">
                  <BookOpen className="h-3.5 w-3.5 text-burnt-orange" />
                  <span>Research Source: {stage.researchReference.documentTitle} ({stage.researchReference.sectionOrPage})</span>
                </div>
                <div className="flex items-start gap-1 text-charcoal-muted">
                  <Info className="h-3 w-3 text-burnt-orange shrink-0 mt-0.5" />
                  <span><strong>Pedagogical Scope:</strong> {stage.caveats[0]}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
