"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TRACEROUTE_STAGES } from "@/data/tracerouteStages";
import { PanoramicWorldSvg } from "./PanoramicWorldSvg";
import { JourneyStoryPanel } from "./JourneyStoryPanel";
import { JourneyNavigatorBar } from "./JourneyNavigatorBar";
import { EngineeringDossierDrawer } from "./EngineeringDossierDrawer";
import { HelpCircle } from "lucide-react";

export function JourneySection() {
  const [activeStageNumber, setActiveStageNumber] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [cameraX, setCameraX] = useState<number>(0);
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);
  const [isAnimatingDirectly, setIsAnimatingDirectly] = useState<boolean>(false);
  const totalStages = TRACEROUTE_STAGES.length;

  const containerRef = useRef<HTMLElement | null>(null);
  const pinnedWrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const currentStage =
    TRACEROUTE_STAGES.find((s) => s.stageNumber === activeStageNumber) ||
    TRACEROUTE_STAGES[0];

  // ==========================================================================
  // GSAP ScrollTrigger Master Timeline (Pinned Desktop Scrub)
  // ==========================================================================
  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current || !pinnedWrapperRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Desktop Experience: Pinned Scroll-Scrub Timelines
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: pinnedWrapperRef.current,
          start: "top top",
          end: "+=3200",
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setScrollProgress(self.progress);
            // Camera sweeps from 0 to -5000 across the 6000px world
            setCameraX(-self.progress * 5000);

            const computedStage = Math.min(
              totalStages,
              Math.max(1, Math.floor(self.progress * (totalStages - 0.001)) + 1)
            );
            setActiveStageNumber(computedStage);
          },
        },
      });

      scrollTriggerRef.current = tl.scrollTrigger || null;
    });

    // Mobile / Tablet Viewport: Natural vertical flow (no pin trap)
    mm.add("(max-width: 1023px)", () => {
      scrollTriggerRef.current = null;
    });

    return () => {
      mm.revert();
      scrollTriggerRef.current = null;
    };
  }, [totalStages]);

  // ==========================================================================
  // Direct Stage Selection Handlers (Synchronized to Scroll Position)
  // ==========================================================================
  const handleSelectStage = useCallback(
    (stageNum: number) => {
      if (stageNum < 1 || stageNum > totalStages) return;

      setActiveStageNumber(stageNum);
      const targetProgress = (stageNum - 1) / (totalStages - 1);
      setScrollProgress(targetProgress);
      setCameraX(-targetProgress * 5000);

      setIsAnimatingDirectly(true);

      const st = scrollTriggerRef.current;
      if (st && window.innerWidth >= 1024) {
        const targetScroll = st.start + targetProgress * (st.end - st.start);
        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }

      setTimeout(() => {
        setIsAnimatingDirectly(false);
      }, 700);
    },
    [totalStages]
  );

  const handleReplay = useCallback(() => {
    handleSelectStage(1);
    const st = scrollTriggerRef.current;
    if (!st || window.innerWidth < 1024) {
      const section = document.getElementById("journey-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [handleSelectStage]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement ||
        isDossierOpen
      ) {
        return;
      }

      const num = parseInt(e.key, 10);
      if (num >= 1 && num <= totalStages) {
        e.preventDefault();
        handleSelectStage(num);
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        if (activeStageNumber < totalStages) {
          handleSelectStage(activeStageNumber + 1);
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        if (activeStageNumber > 1) {
          handleSelectStage(activeStageNumber - 1);
        }
      } else if (e.key.toLowerCase() === "r") {
        e.preventDefault();
        handleReplay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeStageNumber, handleReplay, handleSelectStage, isDossierOpen, totalStages]);

  // External Cross-Section Stage Selection Event (from Hardware Atlas)
  useEffect(() => {
    const handleSelectJourneyStage = (e: Event) => {
      const customEvent = e as CustomEvent<number>;
      if (typeof customEvent.detail === "number") {
        handleSelectStage(customEvent.detail);
        const section = document.getElementById("journey-section");
        if (section && window.innerWidth < 1024) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    window.addEventListener("select-journey-stage", handleSelectJourneyStage);
    return () =>
      window.removeEventListener("select-journey-stage", handleSelectJourneyStage);
  }, [handleSelectStage]);

  return (
    <section
      ref={containerRef}
      id="journey-section"
      aria-label="The Journey of a Single Click"
      className="relative z-20 bg-ivory border-b border-warm-sand-border scroll-mt-20"
    >
      {/* Anchor targets to ensure all prior links (including old #traceroute) land here */}
      <div id="traceroute" className="scroll-mt-28" />
      <div id="journey-of-data" className="scroll-mt-28" />

      {/* Pinned Viewport Container (Locks in place on desktop while scrolling) */}
      <div
        ref={pinnedWrapperRef}
        className="w-full min-h-screen lg:h-screen lg:max-h-[820px] lg:min-h-[580px] py-3 sm:py-4 lg:py-4 px-4 sm:px-8 md:px-12 flex flex-col justify-between max-w-7xl mx-auto overflow-visible"
      >
        {/* Top Header & Navigation Scrubber */}
        <div className="flex flex-col gap-2.5 sm:gap-3 w-full shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1 sm:gap-2">
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-burnt-orange" />
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider sm:tracking-widest text-burnt-orange uppercase">
                  INTERACTIVE EXPEDITION • 6 JOURNEY STAGES
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-charcoal">
                The Journey of a Single Click:{" "}
                <span className="text-burnt-orange">Traversing Earth, Sea, and Silicon</span>
              </h2>
            </div>

            <div className="text-[11px] sm:text-xs font-mono text-charcoal-muted shrink-0 hidden sm:block">
              PHYSICAL LAYER SIMULATION
            </div>
          </div>

          {/* Minimalist Journey Controls HUD with scrub bar */}
          <JourneyNavigatorBar
            activeStageNumber={activeStageNumber}
            totalStages={totalStages}
            onSelectStage={handleSelectStage}
            onReplay={handleReplay}
            scrollProgress={scrollProgress}
          />
        </div>

        {/* Coherent Scene: Balanced 46% Storyboard & 54% Visual Scene */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch flex-1 my-1.5 sm:my-2.5 min-h-0">
          {/* Left Column: Essential Explanation & Action Controls (46% width) */}
          <div className="w-full lg:w-[46%] flex flex-col justify-center min-h-0">
            <JourneyStoryPanel
              stage={currentStage}
              totalStages={totalStages}
              onSelectStage={handleSelectStage}
              onReplay={handleReplay}
              onOpenDossier={() => setIsDossierOpen(true)}
            />
          </div>

          {/* Right Column: Appropriately Sized Panoramic World Viewport (54% width) */}
          <div className="w-full lg:w-[54%] flex flex-col justify-center min-h-[260px] sm:min-h-[320px] lg:min-h-[300px] xl:min-h-[380px]">
            <PanoramicWorldSvg
              cameraX={cameraX}
              packetProgress={scrollProgress}
              isAnimatingDirectly={isAnimatingDirectly}
            />
          </div>
        </div>

        {/* Pedagogical Integrity Note */}
        <div className="flex items-start gap-2 sm:gap-2.5 rounded-xl border border-warm-sand-border bg-ivory-light p-2.5 sm:p-3 text-[11px] sm:text-xs font-sans text-charcoal-muted w-full shrink-0">
          <HelpCircle className="h-4 w-4 text-burnt-orange shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <strong className="text-charcoal font-semibold">
              Pedagogical Note on Internet Routing Reality:
            </strong>
            <span>
              This interactive journey illustrates an intercontinental request (such as querying a service hosted overseas). 
              Most local traffic terminates at nearby regional network hubs without touching Coastal Cable Stations or crossing undersea oceans.
            </span>
          </div>
        </div>
      </div>

      {/* Accessible Slide-Over Engineering & Workforce Dossier Drawer */}
      <EngineeringDossierDrawer
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        stage={currentStage}
      />
    </section>
  );
}
