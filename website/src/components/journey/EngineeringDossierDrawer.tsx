"use client";

import { useEffect } from "react";
import { TracerouteStage } from "@/types/traceroute";
import { X, HardDrive, Users, ShieldAlert, BookOpen } from "lucide-react";

interface EngineeringDossierDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  stage: TracerouteStage;
}

export function EngineeringDossierDrawer({
  isOpen,
  onClose,
  stage,
}: EngineeringDossierDrawerProps) {
  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Engineering & Workforce Dossier: ${stage.title}`}
      className="fixed inset-0 z-50 flex justify-end"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative z-10 w-full max-w-xl h-full bg-ivory border-l border-warm-sand-border shadow-2xl flex flex-col justify-between overflow-y-auto">
        {/* Drawer Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-ivory/95 border-b border-warm-sand-border backdrop-blur-sm">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-burnt-orange" />
              <span className="text-xs font-mono font-bold tracking-widest text-burnt-orange uppercase">
                HOP 0{stage.stageNumber} {"//"} DOSSIER &amp; STS RESEARCH
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-charcoal">
              {stage.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dossier panel"
            className="p-2 rounded-xl border border-warm-sand-border bg-ivory-light text-charcoal hover:bg-white hover:text-burnt-orange transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Body Content */}
        <div className="p-6 flex flex-col gap-8 text-xs font-sans">
          {/* 1. Hardware Specifications */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-bold text-charcoal uppercase flex items-center gap-2">
              <HardDrive className="h-4 w-4 text-muted-gold" />
              Physical Layer &amp; Hardware Specifications
            </span>
            <div className="grid grid-cols-1 gap-3">
              {stage.hardwareSpecs.map((spec, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-warm-sand-border bg-ivory-light p-4 shadow-2xs"
                >
                  <span className="font-mono text-[11px] text-charcoal-muted uppercase block">
                    {spec.label}
                  </span>
                  <strong className="text-sm font-bold text-charcoal block mt-0.5">
                    {spec.value}
                  </strong>
                  {spec.detail && (
                    <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                      {spec.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 2. STS Societal & Political Impact */}
          <div className="flex flex-col gap-2 rounded-xl border border-burnt-orange/30 bg-burnt-orange/5 p-4">
            <span className="font-mono text-xs font-bold text-burnt-orange uppercase flex items-center gap-2">
              <ShieldAlert className="h-4 w-4 text-burnt-orange" />
              STS Societal Significance &amp; Vulnerability
            </span>
            <p className="text-xs sm:text-sm text-charcoal leading-relaxed">
              {stage.whyItMatters}
            </p>
          </div>

          {/* 3. The Human Workforce Behind the Physical Layer */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-bold text-charcoal uppercase flex items-center gap-2">
              <Users className="h-4 w-4 text-burnt-orange" />
              The People Behind the Screen (Workforce Realities)
            </span>
            <div className="grid grid-cols-1 gap-3">
              {stage.humanRoles.map((role, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-warm-sand-border bg-ivory-light p-4 flex flex-col gap-1.5"
                >
                  <strong className="text-xs font-bold text-charcoal">
                    {role.role}
                  </strong>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    <span className="font-semibold text-charcoal">Technical Mandate: </span>
                    {role.responsibility}
                  </p>
                  <p className="text-xs text-burnt-orange/90 leading-relaxed italic bg-warm-sand/20 p-2 rounded-lg mt-1">
                    <span className="font-semibold not-italic">Field Reality: </span>
                    {role.fieldReality}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Verified Academic Citations */}
          <div className="flex flex-col gap-2 rounded-xl border border-warm-sand-border bg-ivory-light p-4">
            <span className="font-mono text-[11px] font-bold text-charcoal uppercase flex items-center gap-1.5">
              <BookOpen className="h-3.5 w-3.5 text-sage" />
              Verified STS Research Reference
            </span>
            <div className="text-xs text-charcoal font-medium">
              {stage.researchReference.documentTitle}
            </div>
            <div className="text-[11px] font-mono text-charcoal-muted">
              {stage.researchReference.sectionOrPage}
            </div>
            <p className="text-xs text-charcoal-muted italic mt-0.5">
              {stage.researchReference.citationNotes}
            </p>
          </div>

          {/* 5. Pedagogical Caveats */}
          {stage.caveats.length > 0 && (
            <div className="flex flex-col gap-1.5 text-[11px] text-charcoal-muted border-t border-warm-sand-border pt-4">
              <span className="font-mono font-bold uppercase text-charcoal">
                Pedagogical Scope Note:
              </span>
              <ul className="list-disc list-inside space-y-1">
                {stage.caveats.map((c, idx) => (
                  <li key={idx}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-warm-sand-border bg-ivory-light text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-charcoal text-white font-mono text-xs font-bold hover:bg-black transition-colors"
          >
            RETURN TO EXPEDITION SCENE (ESC)
          </button>
        </div>
      </div>
    </div>
  );
}
