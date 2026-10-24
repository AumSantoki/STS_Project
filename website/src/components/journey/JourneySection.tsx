"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TRACEROUTE_STAGES } from "@/data/tracerouteStages";
import { ScrollJourneyCanvas } from "./ScrollJourneyCanvas";
import { JourneyNarrativePanel } from "./JourneyNarrativePanel";
import { JourneyNavigatorBar } from "./JourneyNavigatorBar";
import { HelpCircle } from "lucide-react";

export function JourneySection() {
  const [activeStageNumber, setActiveStageNumber] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const totalStages = TRACEROUTE_STAGES.length;

  const containerRef = useRef<HTMLElement | null>(null);
  const pinnedWrapperRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLDivElement | null>(null);
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
    mm.add("(min-width: 768px)", () => {
      // Initialize Scene Opacities & Positions
      gsap.set("#scene-1", { autoAlpha: 1, scale: 1, x: 0, y: 0 });
      gsap.set(["#scene-2", "#scene-3", "#scene-4", "#scene-5", "#scene-6"], {
        autoAlpha: 0,
        scale: 0.96,
        x: 0,
        y: 0,
      });

      // Master scrubbed timeline
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
            const computedStage = Math.min(
              totalStages,
              Math.max(1, Math.floor(self.progress * (totalStages - 0.001)) + 1)
            );
            setActiveStageNumber(computedStage);
          },
        },
      });

      scrollTriggerRef.current = tl.scrollTrigger || null;

      // STAGE 1 -> 2: Device RF to Municipal Street Conduit
      tl.to(
        "#scene-1",
        {
          autoAlpha: 0,
          x: -70,
          scale: 0.94,
          ease: "power2.inOut",
          duration: 0.9,
        },
        0.2
      )
        .fromTo(
          "#scene-2",
          { autoAlpha: 0, x: 70, scale: 0.94 },
          { autoAlpha: 1, x: 0, scale: 1, ease: "power2.out", duration: 0.9 },
          0.35
        )
        .fromTo(
          "#fiber-beam-2",
          { strokeDasharray: 640, strokeDashoffset: 640 },
          { strokeDashoffset: 0, duration: 0.6, ease: "power1.inOut" },
          0.6
        );

      // STAGE 2 -> 3: Street Conduit to Carrier IXP Colocation
      tl.to(
        "#scene-2",
        {
          autoAlpha: 0,
          y: -60,
          scale: 0.94,
          ease: "power2.inOut",
          duration: 0.9,
        },
        1.2
      )
        .fromTo(
          "#scene-3",
          { autoAlpha: 0, y: 60, scale: 0.94 },
          { autoAlpha: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.9 },
          1.35
        )
        .fromTo(
          ["#ixp-patch-1", "#ixp-patch-2"],
          { strokeDasharray: 250, strokeDashoffset: 250 },
          { strokeDashoffset: 0, duration: 0.6, stagger: 0.15, ease: "power1.inOut" },
          1.6
        );

      // STAGE 3 -> 4: Carrier IXP to Shoreline Cable Landing Station
      tl.to(
        "#scene-3",
        {
          autoAlpha: 0,
          x: -70,
          scale: 0.94,
          ease: "power2.inOut",
          duration: 0.9,
        },
        2.2
      )
        .fromTo(
          "#scene-4",
          { autoAlpha: 0, x: 70, scale: 0.94 },
          { autoAlpha: 1, x: 0, scale: 1, ease: "power2.out", duration: 0.9 },
          2.35
        )
        .fromTo(
          "#landing-cable-path",
          { strokeDasharray: 500, strokeDashoffset: 500 },
          { strokeDashoffset: 0, duration: 0.7, ease: "power1.inOut" },
          2.6
        );

      // STAGE 4 -> 5: Shoreline CLS to Abyssal Seabed (-4,200m)
      tl.to(
        "#scene-4",
        {
          autoAlpha: 0,
          y: -60,
          scale: 0.94,
          ease: "power2.inOut",
          duration: 0.9,
        },
        3.2
      )
        .fromTo(
          "#scene-5",
          { autoAlpha: 0, y: 60, scale: 0.94 },
          { autoAlpha: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.9 },
          3.35
        )
        .fromTo(
          "#abyss-cable-path",
          { strokeDasharray: 700, strokeDashoffset: 700 },
          { strokeDashoffset: 0, duration: 0.7, ease: "power1.inOut" },
          3.6
        );

      // STAGE 5 -> 6: Abyssal Seabed to Hyperscale Cloud Center
      tl.to(
        "#scene-5",
        {
          autoAlpha: 0,
          scale: 1.05,
          ease: "power2.inOut",
          duration: 0.9,
        },
        4.2
      ).fromTo(
        "#scene-6",
        { autoAlpha: 0, scale: 0.94 },
        { autoAlpha: 1, scale: 1, ease: "power2.out", duration: 0.9 },
        4.35
      );
    });

    // Mobile Viewport: Direct navigation mode (no pin trap)
    mm.add("(max-width: 767px)", () => {
      scrollTriggerRef.current = null;
    });

    return () => {
      mm.revert();
      scrollTriggerRef.current = null;
    };
  }, [totalStages]);

  // Mobile Scene Visibility Handler
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      for (let i = 1; i <= totalStages; i++) {
        const el = document.getElementById(`scene-${i}`);
        if (el) {
          if (i === activeStageNumber) {
            gsap.to(el, { autoAlpha: 1, duration: 0.35, overwrite: "auto" });
          } else {
            gsap.to(el, { autoAlpha: 0, duration: 0.25, overwrite: "auto" });
          }
        }
      }
    }
  }, [activeStageNumber, totalStages]);

  // ==========================================================================
  // Direct Selection Handlers (Synced to Scroll Position)
  // ==========================================================================
  const handleSelectStage = useCallback(
    (stageNum: number) => {
      if (stageNum < 1 || stageNum > totalStages) return;
      setActiveStageNumber(stageNum);

      const st = scrollTriggerRef.current;
      if (st && window.innerWidth >= 768) {
        const targetProgress = (stageNum - 1) / (totalStages - 1);
        const targetScroll = st.start + targetProgress * (st.end - st.start);
        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }
    },
    [totalStages]
  );

  const handleReplay = useCallback(() => {
    handleSelectStage(1);
    const st = scrollTriggerRef.current;
    if (!st || window.innerWidth < 768) {
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
        document.activeElement instanceof HTMLTextAreaElement
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
  }, [activeStageNumber, handleReplay, handleSelectStage, totalStages]);

  return (
    <section
      ref={containerRef}
      id="journey-section"
      aria-label="The Journey of a Single Click"
      className="relative z-20 bg-ivory border-b border-warm-sand-border"
    >
      {/* Anchor targets to ensure all prior links (including old #traceroute) land here */}
      <div id="traceroute" className="scroll-mt-28" />
      <div id="journey-of-data" className="scroll-mt-28" />

      {/* Pinned Viewport Container */}
      <div
        ref={pinnedWrapperRef}
        className="w-full min-h-screen py-8 sm:py-10 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col justify-between max-w-6xl mx-auto overflow-visible"
      >
        <div className="flex flex-col gap-6 w-full">
          {/* Section Title & Story Framing */}
          <div className="flex flex-col gap-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-burnt-orange" />
              <span className="text-xs font-mono font-bold tracking-widest text-burnt-orange uppercase">
                INTERACTIVE EXPEDITION // 06 PHYSICAL STAGES
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-charcoal leading-tight">
              The Journey of a Single Click:{" "}
              <span className="text-burnt-orange">
                Traversing Earth, Sea, and Silicon
              </span>
            </h2>

            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-sans">
              Follow a single data packet as it leaves your antenna, travels through municipal glass conduits, 
              crosses the abyssal seabed, and triggers compute engines inside multi-megawatt facilities.
            </p>
          </div>

          {/* Minimalist Journey Controls HUD with scrub bar */}
          <JourneyNavigatorBar
            activeStageNumber={activeStageNumber}
            totalStages={totalStages}
            onSelectStage={handleSelectStage}
            onReplay={handleReplay}
            scrollProgress={scrollProgress}
          />

          {/* Continuous Transformation SVG Canvas */}
          <ScrollJourneyCanvas
            canvasRef={canvasRef}
            activeStageNumber={activeStageNumber}
          />

          {/* Narrative & Progressive Disclosure Dossier */}
          <JourneyNarrativePanel stage={currentStage} />
        </div>

        {/* Pedagogical Integrity Note */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-warm-sand-border bg-ivory-light p-3.5 text-xs font-sans text-charcoal-muted w-full">
          <HelpCircle className="h-4 w-4 text-burnt-orange shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <strong className="text-charcoal font-semibold">
              Pedagogical Note on Internet Routing Reality:
            </strong>
            <span>
              This interactive journey illustrates an intercontinental request (e.g. streaming a resource hosted overseas). 
              In everyday digital life, domestic or local traffic terminates at nearby regional Edge CDN nodes without touching Cable Landing Stations or crossing submarine oceans.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
