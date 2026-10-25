"use client";

import { useState } from "react";
import { INCIDENT_SCENARIOS } from "@/data/incidentScenarios";
import {
  ArrowRight,
  ChevronLeft,
  RotateCcw,
  AlertOctagon,
  CheckCircle2,
  ShieldAlert,
  Clock,
  Anchor,
  Activity,
  Server,
  Layers,
  UserCheck,
} from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

interface IncidentTimelineSimulatorProps {
  onSelectRole?: (roleId: string) => void;
}

export function IncidentTimelineSimulator({
  onSelectRole,
}: IncidentTimelineSimulatorProps) {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(
    INCIDENT_SCENARIOS[0].id
  );
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const scenario =
    INCIDENT_SCENARIOS.find((s) => s.id === activeScenarioId) ||
    INCIDENT_SCENARIOS[0];

  const currentStep = scenario.steps[activeStepIndex] || scenario.steps[0];
  const totalSteps = scenario.steps.length;

  const handleSelectScenario = (id: string) => {
    setActiveScenarioId(id);
    setActiveStepIndex(0);
  };

  const handleRoleClick = (roleId: string) => {
    if (onSelectRole) {
      onSelectRole(roleId);
    } else if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("select-role", { detail: roleId }));
      const target = document.getElementById("people-behind");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleHardwareClick = (hardwareId: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-hardware", { detail: hardwareId })
      );
      const target = document.getElementById("physical-internet");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getScenarioIcon = (eventType: string) => {
    switch (eventType) {
      case "Subsea Cable Severed":
        return Anchor;
      case "Data Centre Cooling Loss":
        return Server;
      default:
        return Activity;
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full rounded-2xl border border-warm-sand-border bg-ivory p-4 sm:p-8 lg:p-10 shadow-xs overflow-hidden">
      {/* Simulation Header */}
      <div className="flex flex-col gap-2 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-burnt-orange animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-widest text-burnt-orange uppercase">
            INCIDENT RESOLUTION SIMULATOR {"//"} HOW HUMAN TEAMS COORDINATE
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight">
          When Infrastructure Breaks: The Human Response Chain
        </h3>

        <p className="text-sm sm:text-base text-charcoal leading-relaxed font-sans">
          The Internet does not run without failure. When earthquakes rupture
          undersea lines or heatwaves overwhelm cooling systems, recovery depends
          on disciplined coordination across physical and software roles.
        </p>
      </div>

      {/* Scenario Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-warm-sand-border pb-3">
        {INCIDENT_SCENARIOS.map((sc) => {
          const isSelected = sc.id === activeScenarioId;
          const Icon = getScenarioIcon(sc.eventType);

          return (
            <button
              key={sc.id}
              onClick={() => handleSelectScenario(sc.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer ${
                isSelected
                  ? "bg-charcoal text-white border-charcoal shadow-xs"
                  : "bg-ivory-light border-warm-sand-border text-charcoal hover:border-burnt-orange/50 hover:bg-white"
              }`}
            >
              <Icon className="h-4 w-4 text-burnt-orange" />
              <span>{sc.title}</span>
            </button>
          );
        })}
      </div>

      {/* Scenario Background Banner with Hardware Cross-Link */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${scenario.id}-banner`}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          className="rounded-xl border border-warm-sand-border bg-ivory-light p-4 sm:p-5 flex flex-col gap-3"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-burnt-orange uppercase">
              <AlertOctagon className="h-4 w-4" />
              <span>REAL-WORLD CASE: {scenario.location}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {scenario.affectedHardwareId && (
                <button
                  onClick={() => handleHardwareClick(scenario.affectedHardwareId!)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-ivory border border-warm-sand-border hover:border-burnt-orange text-charcoal hover:text-burnt-orange transition-all cursor-pointer shadow-2xs"
                >
                  <Layers className="h-3 w-3 text-burnt-orange" />
                  <span>Hardware: {scenario.affectedHardwareName}</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              )}

              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-burnt-orange/15 text-burnt-orange">
                {scenario.eventType}
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans">
            {scenario.realWorldBasis}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Interactive Step-by-Step Incident Card */}
      <div className="rounded-2xl border-2 border-warm-sand-border bg-ivory-light p-4 sm:p-8 flex flex-col justify-between gap-6 shadow-sm overflow-hidden">
        {/* Step Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-warm-sand-border">
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-burnt-orange text-white font-mono text-xs font-bold">
              0{currentStep.stepNumber}
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono font-bold text-charcoal-muted uppercase">
                COORDINATION PHASE
              </span>
              <span className="text-xs sm:text-sm font-bold text-charcoal">
                Step {currentStep.stepNumber} of {totalSteps}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-warm-sand-border bg-ivory px-3 py-1.5 text-xs font-mono font-bold text-burnt-orange shadow-2xs">
            <Clock className="h-3.5 w-3.5" />
            <span>TIME: {currentStep.timeElapsed}</span>
          </div>
        </div>

        {/* Step Detail Content with Smooth Text Transitions and Stable Height Budget */}
        <div className="relative min-h-[220px] sm:min-h-[175px] lg:min-h-[155px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${scenario.id}-step-${currentStep.stepNumber}`}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.22,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <UserCheck className="h-4 w-4 text-burnt-orange" />
                  <span className="text-[11px] font-mono font-bold text-burnt-orange uppercase tracking-wider">
                    LEAD RESPONDING ROLE: {currentStep.leadRole}
                  </span>
                </div>

                <button
                  onClick={() => handleRoleClick(currentStep.roleId)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-ivory border border-warm-sand hover:border-burnt-orange text-charcoal hover:text-burnt-orange transition-all cursor-pointer shadow-2xs"
                >
                  <span>Inspect Role Dossier</span>
                  <ArrowRight className="h-3 w-3 text-burnt-orange" />
                </button>
              </div>

              <h4 className="text-lg sm:text-xl font-extrabold text-charcoal">
                {currentStep.actionTaken}
              </h4>

              <p className="text-sm sm:text-base text-charcoal leading-relaxed font-sans font-normal">
                {currentStep.coordinationDetail}
              </p>

              {/* Tools Deployed in this Step */}
              <div className="flex items-center gap-2 rounded-xl border border-warm-sand-border bg-ivory px-4 py-2.5 text-xs text-charcoal">
                <span className="font-mono font-bold text-burnt-orange shrink-0">
                  EQUIPMENT DEPLOYED:
                </span>
                <span className="font-medium text-charcoal-muted">
                  {currentStep.toolsUsed}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Step Controls */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 pt-4 border-t border-warm-sand-border">
          <button
            onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeStepIndex === 0}
            className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 rounded-xl border border-warm-sand-border bg-ivory text-xs font-mono font-bold text-charcoal hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-2xs cursor-pointer shrink-0"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sm:hidden">PREV</span>
            <span className="hidden sm:inline">PREVIOUS ACTION</span>
          </button>

          {activeStepIndex < totalSteps - 1 ? (
            <button
              onClick={() =>
                setActiveStepIndex((prev) => Math.min(totalSteps - 1, prev + 1))
              }
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-burnt-orange text-xs sm:text-sm font-bold text-white hover:bg-burnt-orange-hover active:scale-[0.98] transition-all shadow-xs cursor-pointer"
            >
              <span className="sm:hidden">Next step</span>
              <span className="hidden sm:inline">Next coordination step</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={() => setActiveStepIndex(0)}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-charcoal text-xs sm:text-sm font-bold text-white hover:bg-black active:scale-[0.98] transition-all shadow-xs cursor-pointer"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Restart scenario</span>
            </button>
          )}
        </div>
      </div>

      {/* Final Outcome & STS Takeaway */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${scenario.id}-outcome`}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="rounded-xl border border-sage/40 bg-sage/10 p-4 sm:p-5 flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-charcoal uppercase">
              <CheckCircle2 className="h-4 w-4 text-sage" />
              <span>FINAL OUTCOME</span>
            </div>
            <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-sans">
              {scenario.outcome}
            </p>
          </div>

          <div className="rounded-xl border border-burnt-orange/30 bg-burnt-orange/5 p-4 sm:p-5 flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-burnt-orange uppercase">
              <ShieldAlert className="h-4 w-4 text-burnt-orange" />
              <span>STS TAKEAWAY</span>
            </div>
            <p className="text-xs sm:text-sm text-charcoal leading-relaxed font-sans">
              {scenario.stsTakeaway}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
