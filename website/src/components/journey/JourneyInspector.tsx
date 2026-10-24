"use client";

import { motion, useReducedMotion } from "motion/react";
import { TracerouteStage } from "@/types/traceroute";
import {
  BookOpen,
  Cpu,
  HardDrive,
  Info,
  ShieldAlert,
  Users,
} from "lucide-react";

interface JourneyInspectorProps {
  stage: TracerouteStage;
}

export function JourneyInspector({ stage }: JourneyInspectorProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="region"
      aria-live="polite"
      aria-label={`Detailed inspector for Stage ${stage.stageNumber}: ${stage.title}`}
      className="flex flex-col rounded-2xl border border-warm-sand-border bg-ivory-light shadow-sm overflow-hidden"
    >
      {/* Editorial Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-warm-sand-border bg-warm-sand/30">
        <div className="flex items-center gap-3">
          <span className="flex h-6 items-center rounded-md bg-burnt-orange px-2.5 font-mono text-xs font-bold text-white shadow-2xs">
            HOP 0{stage.stageNumber}
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal">
            CONTEXTUAL FIELD DOSSIER
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-warm-sand-border bg-white px-2.5 py-0.5 text-[11px] font-mono text-charcoal">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-green" />
            <span>{stage.category}</span>
          </span>
        </div>
      </div>

      {/* Main Animated Inspector Body */}
      <motion.div
        key={stage.id}
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
        transition={{ duration: shouldReduceMotion ? 0.05 : 0.25, ease: "easeOut" }}
        className="p-6 sm:p-8 flex flex-col gap-6"
      >
        {/* Title & Core Summary */}
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-charcoal">
            {stage.title}
          </h3>
          <p className="text-base sm:text-lg text-charcoal font-medium leading-relaxed">
            {stage.summary}
          </p>
        </div>

        {/* Empirical Metrics Badges */}
        {stage.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {stage.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-xl border border-warm-sand-border bg-ivory p-4 shadow-2xs"
              >
                <div className="flex items-baseline gap-1.5 font-mono">
                  <span className="text-2xl sm:text-3xl font-extrabold text-burnt-orange">
                    {metric.value}
                  </span>
                  {metric.unit && (
                    <span className="text-xs text-charcoal-muted font-bold">
                      {metric.unit}
                    </span>
                  )}
                </div>
                <span className="text-xs font-bold text-charcoal mt-1">
                  {metric.label}
                </span>
                <span className="text-[11px] text-charcoal-muted mt-0.5 leading-normal">
                  {metric.context}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Physical Mechanism Deep Dive */}
        <div className="flex flex-col gap-2.5 border-t border-warm-sand-border/80 pt-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-burnt-orange uppercase tracking-wider">
            <Cpu className="h-4 w-4" />
            <span>What Physically Occurs Here</span>
          </div>
          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
            {stage.physicalExplanation}
          </p>
        </div>

        {/* Hardware & Infrastructure Specifications Grid */}
        <div className="flex flex-col gap-3 border-t border-warm-sand-border/80 pt-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-charcoal uppercase tracking-wider">
            <HardDrive className="h-4 w-4 text-muted-gold" />
            <span>Physical Hardware &amp; Material Specifications</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {stage.hardwareSpecs.map((spec, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-warm-sand-border bg-ivory p-3.5 flex flex-col justify-between text-xs"
              >
                <div>
                  <span className="font-mono text-[11px] font-bold text-charcoal-muted block">
                    {spec.label}
                  </span>
                  <strong className="text-sm font-semibold text-charcoal block mt-0.5">
                    {spec.value}
                  </strong>
                </div>
                {spec.detail && (
                  <p className="mt-2 text-[11px] text-charcoal-muted leading-normal border-t border-warm-sand-border/60 pt-2 font-sans">
                    {spec.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* STS Societal Significance Box */}
        <div className="flex flex-col gap-2.5 rounded-xl border border-burnt-orange/30 bg-burnt-orange/5 p-5">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-burnt-orange uppercase tracking-wider">
            <ShieldAlert className="h-4 w-4" />
            <span>Why This Stage Matters (Societal &amp; STS Context)</span>
          </div>
          <p className="text-sm text-charcoal leading-relaxed font-sans">
            {stage.whyItMatters}
          </p>
        </div>

        {/* Human Workforce Profile */}
        <div className="flex flex-col gap-3 border-t border-warm-sand-border/80 pt-5">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-charcoal uppercase tracking-wider">
            <Users className="h-4 w-4 text-sage-green" />
            <span>The Human Workforce Behind This Stage</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {stage.humanRoles.map((role, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-warm-sand-border bg-ivory p-4 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono font-bold text-charcoal">
                    {role.role}
                  </h4>
                  <span className="text-[10px] font-mono text-sage-green font-bold">
                    FIELD OPERATOR
                  </span>
                </div>
                <p className="text-xs text-charcoal-muted leading-normal">
                  {role.responsibility}
                </p>
                <div className="text-[11px] text-charcoal-muted/90 italic border-t border-warm-sand-border/60 pt-2 mt-1 font-serif">
                  &ldquo;{role.fieldReality}&rdquo;
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Attribution & Pedagogical Caveats */}
        <div className="flex flex-col gap-3 rounded-xl border border-warm-sand-border bg-warm-sand/25 p-4 text-xs mt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-charcoal uppercase">
              <BookOpen className="h-3.5 w-3.5 text-burnt-orange" />
              <span>Research Citation &amp; Evidence</span>
            </div>
            <span className="text-[10px] font-mono text-charcoal-muted">
              STS HM216 VERIFIED
            </span>
          </div>

          <div className="text-charcoal leading-relaxed">
            <strong>Source Document:</strong> {stage.researchReference.documentTitle} ({stage.researchReference.sectionOrPage}).
            <span className="block text-charcoal-muted text-[11px] mt-0.5">
              {stage.researchReference.citationNotes}
            </span>
          </div>

          {/* Caveat Section */}
          <div className="mt-2 pt-2 border-t border-warm-sand-border/60 flex flex-col gap-1 text-[11px] text-charcoal-muted">
            <div className="flex items-center gap-1 font-mono font-bold text-burnt-orange text-[10px] uppercase">
              <Info className="h-3 w-3" />
              <span>Pedagogical Caveats &amp; Route Scope</span>
            </div>
            {stage.caveats.map((caveat, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <span className="text-burnt-orange leading-none">•</span>
                <span>{caveat}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
