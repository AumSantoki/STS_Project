"use client";

import { useState } from "react";
import { ProfessionalRole } from "@/types/people";
import {
  Wrench,
  Clock,
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

interface RoleDossierViewProps {
  role: ProfessionalRole;
}

export function RoleDossierView({ role }: RoleDossierViewProps) {
  const [activeTab, setActiveTab] = useState<"routine" | "tools" | "conditions">(
    "routine"
  );
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-6 w-full rounded-2xl border border-warm-sand-border bg-ivory p-6 sm:p-8 lg:p-10 shadow-xs overflow-hidden">
      {/* Role Header Banner with Smooth Cross-fade on Role Change */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={role.id}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.22,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-warm-sand-border"
        >
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-burnt-orange animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-burnt-orange uppercase">
                PROFESSIONAL PROFILE 0{role.roleNumber} {"//"} {role.category.toUpperCase()}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
              {role.title}
            </h3>

            <p className="text-base text-charcoal leading-relaxed font-sans font-normal pt-1">
              {role.oneLineMission}
            </p>
          </div>

          {/* Physical Infrastructure Tag */}
          <div className="shrink-0 flex items-center gap-2 self-start rounded-xl border border-warm-sand-border bg-ivory-light px-3.5 py-2.5 text-xs font-mono text-charcoal shadow-2xs">
            <MapPin className="h-4 w-4 text-burnt-orange" />
            <div className="flex flex-col">
              <span className="text-[10px] text-charcoal-muted uppercase">
                PRIMARY DOMAIN
              </span>
              <span className="font-bold text-xs">{role.infrastructureArea}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Interactive Dossier Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-warm-sand-border/80 pb-2">
        <button
          onClick={() => setActiveTab("routine")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            activeTab === "routine"
              ? "bg-burnt-orange text-white shadow-2xs"
              : "bg-ivory-light text-charcoal-muted hover:text-charcoal hover:bg-warm-sand/40"
          }`}
        >
          <Clock className="h-3.5 w-3.5" />
          <span>EVERYDAY WORK &amp; RESPONSIBILITIES</span>
        </button>

        <button
          onClick={() => setActiveTab("tools")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            activeTab === "tools"
              ? "bg-burnt-orange text-white shadow-2xs"
              : "bg-ivory-light text-charcoal-muted hover:text-charcoal hover:bg-warm-sand/40"
          }`}
        >
          <Wrench className="h-3.5 w-3.5" />
          <span>TOOLS &amp; GEAR ({role.toolsAndEquipment.length})</span>
        </button>

        <button
          onClick={() => setActiveTab("conditions")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
            activeTab === "conditions"
              ? "bg-burnt-orange text-white shadow-2xs"
              : "bg-ivory-light text-charcoal-muted hover:text-charcoal hover:bg-warm-sand/40"
          }`}
        >
          <AlertTriangle className="h-3.5 w-3.5" />
          <span>WORKING REALITIES &amp; SAFETY</span>
        </button>
      </div>

      {/* Tab Contents with Smooth Animated Transition */}
      <AnimatePresence mode="wait" initial={false}>
        {/* Tab 1: Everyday Work & Responsibilities */}
        {activeTab === "routine" && (
          <motion.div
            key={`${role.id}-routine`}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col gap-6"
          >
            {/* Key Responsibilities Checklist */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-mono font-bold text-burnt-orange uppercase tracking-wider">
                CORE MANDATES &amp; RESPONSIBILITIES
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {role.responsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-warm-sand-border bg-ivory-light p-4"
                  >
                    <CheckCircle2 className="h-4 w-4 text-sage shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-sans">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Schedule Breakdown */}
            <div className="flex flex-col gap-3 pt-2">
              <h4 className="text-xs font-mono font-bold text-burnt-orange uppercase tracking-wider">
                A DAY IN THE LIFE: OPERATIONAL TIMELINE
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl border border-warm-sand-border bg-ivory-light p-4 flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] font-bold text-burnt-orange uppercase">
                    01. Routine Morning Walk
                  </span>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                    {role.everydayRoutine.morning}
                  </p>
                </div>

                <div className="rounded-xl border border-warm-sand-border bg-ivory-light p-4 flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] font-bold text-burnt-orange uppercase">
                    02. Critical Incident Response
                  </span>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                    {role.everydayRoutine.incidentScenario}
                  </p>
                </div>

                <div className="rounded-xl border border-warm-sand-border bg-ivory-light p-4 flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] font-bold text-burnt-orange uppercase">
                    03. Audit &amp; Documentation
                  </span>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                    {role.everydayRoutine.documentation}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Physical Tools & Equipment */}
        {activeTab === "tools" && (
          <motion.div
            key={`${role.id}-tools`}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-xs font-mono font-bold text-burnt-orange uppercase tracking-wider">
              SPECIALIZED INSTRUMENTATION &amp; HARDWARE GEAR
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {role.toolsAndEquipment.map((tool, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-warm-sand-border bg-ivory-light p-4 flex flex-col justify-between gap-2 shadow-2xs"
                >
                  <div className="flex items-center justify-between">
                    <strong className="text-xs sm:text-sm font-bold text-charcoal">
                      {tool.name}
                    </strong>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-warm-sand/50 text-charcoal">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab 3: Working Realities & Safety */}
        {activeTab === "conditions" && (
          <motion.div
            key={`${role.id}-conditions`}
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-xs font-mono font-bold text-burnt-orange uppercase tracking-wider">
              WORKPLACE REALITIES, RISKS &amp; ERGONOMICS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {role.workingConditions.map((cond, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-warm-sand-border bg-ivory-light p-4 flex flex-col gap-2 shadow-2xs"
                >
                  <div className="flex items-center gap-1.5 text-xs font-bold text-charcoal">
                    <ShieldCheck className="h-4 w-4 text-burnt-orange shrink-0" />
                    <span>{cond.aspect}</span>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-sans">
                    {cond.detail}
                  </p>
                  <div className="mt-auto pt-2 border-t border-warm-sand-border/60">
                    <span className="text-[10px] font-mono font-bold text-burnt-orange uppercase block">
                      Field Reality:
                    </span>
                    <span className="text-xs text-charcoal italic font-sans">
                      {cond.fieldReality}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* STS Human Significance Box */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${role.id}-significance`}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          className="flex flex-col sm:flex-row items-start gap-4 rounded-xl border border-burnt-orange/30 bg-burnt-orange/5 p-4 sm:p-5 mt-2"
        >
          <div className="p-2 rounded-lg bg-burnt-orange text-white shrink-0">
            <BookOpen className="h-4 w-4" />
          </div>
          <div className="flex flex-col gap-1">
            <strong className="text-xs font-mono font-bold text-burnt-orange uppercase tracking-wider">
              STS HUMAN PERSPECTIVE: WHY THIS WORK MATTERS
            </strong>
            <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-sans">
              {role.humanSignificance}
            </p>
            <div className="text-[11px] font-mono text-charcoal-muted pt-1">
              <span className="font-semibold text-charcoal">Verified Source: </span>
              <span>{role.citation.source}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
