"use client";

import { useState } from "react";
import { CABLE_ROUTES, CableRoute } from "@/data/cableRoutesData";
import { Globe, Layers, Info, Filter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function UnderseaCableMap() {
  const [selectedOcean, setSelectedOcean] = useState<string>("All");
  const [activeCable, setActiveCable] = useState<CableRoute | null>(CABLE_ROUTES[0]);

  const filteredCables =
    selectedOcean === "All"
      ? CABLE_ROUTES
      : CABLE_ROUTES.filter((c) => c.ocean === selectedOcean || c.ocean === "Global");

  return (
    <section
      id="cable-map-section"
      aria-label="Interactive Undersea Cable Map"
      className="w-full py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-ivory border-t border-warm-sand-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-burnt-orange" />
              <span className="text-xs font-mono font-bold tracking-widest text-burnt-orange uppercase">
                {"// GLOBAL SUBSEA ARTERIES"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-charcoal">
              Interactive World Map of Undersea Cables
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted max-w-2xl">
              Optical fiber resting in ocean trenches carries 99% of global internet traffic.
              Select a cable route or filter by ocean to inspect its landing points.
            </p>
          </div>

          {/* Ocean Filter */}
          <div className="flex items-center gap-1.5 bg-ivory-light border border-warm-sand-border rounded-xl p-1.5 shrink-0 self-start sm:self-auto overflow-x-auto max-w-full">
            <Filter className="h-3.5 w-3.5 text-charcoal-muted ml-1 hidden sm:block" />
            {(["All", "Atlantic", "Pacific", "Indian"] as const).map((ocean) => (
              <button
                key={ocean}
                type="button"
                onClick={() => setSelectedOcean(ocean)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                  selectedOcean === ocean
                    ? "bg-burnt-orange text-white shadow-2xs"
                    : "text-charcoal-muted hover:text-charcoal hover:bg-white"
                }`}
              >
                {ocean}
              </button>
            ))}
          </div>
        </div>

        {/* Map & Detail Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* SVG Map Card (2 Cols) */}
          <div className="lg:col-span-2 rounded-2xl border border-warm-sand-border bg-[#131713] p-4 sm:p-6 shadow-md overflow-hidden relative">
            {/* Watermark header */}
            <div className="flex items-center justify-between text-[11px] font-mono text-warm-sand/70 pb-3 border-b border-white/10">
              <span className="flex items-center gap-2">
                <Globe className="h-3.5 w-3.5 text-burnt-orange" />
                ABYSSAL FIBER TOPOLOGY (ILLUSTRATIVE ROUTES)
              </span>
              <span>1000 × 500 CYLINDRICAL PROJECTION</span>
            </div>

            {/* Interactive SVG Canvas */}
            <div className="relative w-full aspect-[2/1] my-2">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full select-none"
                aria-label="World map showing deep-sea fiber optic cables"
                role="img"
              >
                <defs>
                  {/* Subtle Grid */}
                  <pattern id="mapGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path
                      d="M 50 0 L 0 0 0 50"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.04)"
                      strokeWidth="0.8"
                    />
                  </pattern>

                  {/* Glow Filters */}
                  <filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Ocean Background & Grid */}
                <rect width="1000" height="500" fill="#131713" />
                <rect width="1000" height="500" fill="url(#mapGrid)" />

                {/* Stylized Continents (Simplified Geo Shapes) */}
                <g fill="#252A24" stroke="#343A32" strokeWidth="1" opacity="0.9">
                  {/* North America */}
                  <path d="M 120,80 L 220,70 L 280,110 L 290,170 L 250,210 L 210,210 L 180,240 L 160,200 L 110,140 Z" />
                  {/* South America */}
                  <path d="M 230,240 L 300,260 L 330,320 L 300,430 L 270,440 L 250,340 Z" />
                  {/* Europe */}
                  <path d="M 450,90 L 530,90 L 530,150 L 480,180 L 440,150 Z" />
                  {/* Africa */}
                  <path d="M 450,190 L 540,190 L 570,260 L 530,380 L 480,380 L 450,270 Z" />
                  {/* Asia */}
                  <path d="M 540,80 L 800,80 L 840,170 L 780,260 L 680,240 L 600,160 Z" />
                  {/* Australia */}
                  <path d="M 780,330 L 880,330 L 870,420 L 790,410 Z" />
                  {/* UK & Islands */}
                  <circle cx="455" cy="140" r="10" />
                  <circle cx="830" cy="185" r="12" />
                </g>

                {/* Major Cable Landing Nodes */}
                <g fill="#D7B96D" opacity="0.8">
                  {/* New York / Virginia */}
                  <circle cx="260" cy="180" r="3.5" />
                  {/* UK / Bilbao */}
                  <circle cx="460" cy="165" r="3.5" />
                  {/* Marseille */}
                  <circle cx="475" cy="175" r="3" />
                  {/* Mumbai */}
                  <circle cx="670" cy="250" r="3.5" />
                  {/* Singapore */}
                  <circle cx="770" cy="285" r="3.5" />
                  {/* Tokyo */}
                  <circle cx="830" cy="185" r="3.5" />
                  {/* Sydney */}
                  <circle cx="860" cy="405" r="3.5" />
                </g>

                {/* Cable Routes as Glowing Vectors */}
                {filteredCables.map((cable) => {
                  const isCurrent = activeCable?.id === cable.id;
                  return (
                    <g
                      key={cable.id}
                      className="cursor-pointer group"
                      onClick={() => setActiveCable(cable)}
                    >
                      {/* Wider transparent hit-area */}
                      <path
                        d={cable.pathD}
                        fill="none"
                        stroke="transparent"
                        strokeWidth="18"
                        strokeLinecap="round"
                      />
                      {/* Background Glow */}
                      <path
                        d={cable.pathD}
                        fill="none"
                        stroke={isCurrent ? "#C47745" : "#D7B96D"}
                        strokeWidth={isCurrent ? "4.5" : "1.8"}
                        strokeOpacity={isCurrent ? "0.9" : "0.45"}
                        strokeDasharray={isCurrent ? "none" : "5,4"}
                        filter={isCurrent ? "url(#glow-orange)" : "none"}
                        className="transition-all duration-300 group-hover:stroke-burnt-orange group-hover:stroke-opacity-100"
                      />
                      {/* Core bright pulse line */}
                      {isCurrent && (
                        <path
                          d={cable.pathD}
                          fill="none"
                          stroke="#FAF7F2"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bottom Map Note */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-warm-sand/80 pt-2 border-t border-white/10 gap-2">
              <span>Click or tap any cable path to inspect technical specifications.</span>
              <span className="text-burnt-orange font-bold">
                Showing {filteredCables.length} major trans-oceanic routes
              </span>
            </div>
          </div>

          {/* Cable Details Card (1 Col) */}
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              {activeCable && (
                <motion.div
                  key={activeCable.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl border border-warm-sand-border bg-ivory-light p-5 sm:p-6 shadow-sm flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between border-b border-warm-sand-border pb-3">
                    <span className="text-xs font-mono font-bold tracking-wider text-burnt-orange uppercase">
                      {activeCable.ocean} BASIN ROUTE
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-warm-sand text-charcoal font-bold">
                      Est. {activeCable.year}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-charcoal">{activeCable.name}</h3>
                    <p className="text-xs font-mono text-charcoal-muted mt-0.5">
                      {activeCable.continents}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 py-2 border-y border-warm-sand-border/70">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono uppercase text-charcoal-muted font-bold">
                        Total Length
                      </span>
                      <span className="text-base font-mono font-extrabold text-burnt-orange">
                        {activeCable.lengthKm.toLocaleString()} km
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono uppercase text-charcoal-muted font-bold">
                        Design Capacity
                      </span>
                      <span className="text-base font-mono font-extrabold text-charcoal">
                        {activeCable.capacityTbps}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-mono uppercase font-bold text-charcoal flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-burnt-orange" />
                      Key Landing Points
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeCable.landingPoints.map((point, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-sans rounded-md border border-warm-sand-border bg-ivory px-2.5 py-1 text-charcoal"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-charcoal-muted border-t border-warm-sand-border">
                    <span className="font-bold">Source:</span> {activeCable.source}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="rounded-xl border border-warm-sand-border bg-ivory p-4 text-xs font-sans text-charcoal-muted leading-relaxed flex items-start gap-2.5">
              <Info className="h-4 w-4 text-burnt-orange shrink-0 mt-0.5" />
              <span>
                Cables lie unanchored on the abyssal plain at depths down to 8,000 meters.
                Near shore, underwater ploughs bury them under 1-3 meters of sediment to protect against fishing trawlers and anchor drags.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

