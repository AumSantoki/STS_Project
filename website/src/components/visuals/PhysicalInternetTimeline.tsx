"use client";

import { useRef } from "react";
import { PHYSICAL_INTERNET_TIMELINE } from "@/data/timelineData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PhysicalInternetTimeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const offset = direction === "left" ? -340 : 340;
    scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section
      id="timeline-section"
      aria-label="How the Physical Internet Was Built Historical Timeline"
      className="w-full py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-ivory border-t border-warm-sand-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-burnt-orange" />
              <span className="text-xs font-mono font-bold tracking-widest text-burnt-orange uppercase">
                {"// HISTORICAL CHRONOLOGY"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-charcoal">
              How the Physical Internet Was Built
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted max-w-2xl">
              From Queen Victoria&apos;s 1858 gutta-percha telegraph wire to petabit-scale optical fibers.
              Scroll horizontally to trace the material evolution of intercontinental networks.
            </p>
          </div>

          {/* Scroll Buttons */}
          <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Scroll timeline backward"
              className="h-9 w-9 rounded-xl border border-warm-sand-border bg-ivory-light flex items-center justify-center text-charcoal hover:border-burnt-orange hover:bg-white shadow-2xs cursor-pointer active:scale-95 transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Scroll timeline forward"
              className="h-9 w-9 rounded-xl border border-warm-sand-border bg-ivory-light flex items-center justify-center text-charcoal hover:border-burnt-orange hover:bg-white shadow-2xs cursor-pointer active:scale-95 transition-all"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          tabIndex={0}
          role="region"
          aria-label="Horizontal timeline of internet infrastructure milestones. Use left and right arrow keys to scroll."
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scroll-smooth focus:outline-none focus:ring-2 focus:ring-burnt-orange/50 rounded-2xl"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              handleScroll("left");
            } else if (e.key === "ArrowRight") {
              e.preventDefault();
              handleScroll("right");
            }
          }}
        >
          {PHYSICAL_INTERNET_TIMELINE.map((item, idx) => (
            <div
              key={idx}
              className="w-[280px] sm:w-[320px] shrink-0 rounded-2xl border border-warm-sand-border bg-ivory-light p-5 sm:p-6 shadow-sm flex flex-col justify-between gap-4 snap-start hover:border-burnt-orange/50 hover:bg-white transition-all duration-200"
            >
              <div className="flex flex-col gap-3">
                {/* Year Header & Badge */}
                <div className="flex items-center justify-between border-b border-warm-sand-border/70 pb-3">
                  <span className="text-2xl font-black font-mono text-burnt-orange">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-warm-sand/70 text-charcoal font-bold uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Milestone Title */}
                <h3 className="text-base sm:text-lg font-extrabold text-charcoal leading-snug">
                  {item.title}
                </h3>

                {/* One-line simple explanation */}
                <p className="text-xs font-sans text-charcoal font-medium leading-relaxed">
                  {item.explanation}
                </p>

                {/* Historical Significance */}
                <div className="rounded-xl border border-warm-sand-border/70 bg-ivory p-3 text-[11px] font-sans text-charcoal-muted leading-relaxed">
                  <strong className="text-charcoal block mb-0.5 font-semibold">Significance:</strong>
                  {item.significance}
                </div>
              </div>

              {/* Source Attribution */}
              <div className="pt-3 border-t border-warm-sand-border/70 text-[10px] font-mono text-charcoal-muted">
                <span className="font-bold">Source:</span> {item.source}
              </div>
            </div>
          ))}
        </div>

        {/* Keyboard accessibility hint */}
        <div className="flex items-center justify-between text-[11px] font-mono text-charcoal-muted">
          <span>Hint: Use arrow keys or scroll buttons to navigate milestones</span>
          <span className="text-burnt-orange font-bold">
            {PHYSICAL_INTERNET_TIMELINE.length} Verified Historical Milestones
          </span>
        </div>
      </div>
    </section>
  );
}
