"use client";

import { useState } from "react";
import {
  MAJOR_CITIES,
  calculateGreatCircleDistance,
  calculateTheoreticalRTT,
  estimateRealWorldRTT,
} from "@/data/latencyData";
import { Zap, Compass, Activity, AlertCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function LatencyCalculator() {
  const [originId, setOriginId] = useState<string>("bom"); // Mumbai
  const [destId, setDestId] = useState<string>("lon"); // London
  const shouldReduceMotion = useReducedMotion();

  const origin = MAJOR_CITIES.find((c) => c.id === originId) || MAJOR_CITIES[1];
  const dest = MAJOR_CITIES.find((c) => c.id === destId) || MAJOR_CITIES[2];

  const isSameCity = origin.id === dest.id;
  const distanceKm = isSameCity
    ? 25
    : calculateGreatCircleDistance(origin.lat, origin.lng, dest.lat, dest.lng);

  const theoreticalRTT = isSameCity ? 0.25 : calculateTheoreticalRTT(distanceKm);
  const realRTT = isSameCity ? 4 : estimateRealWorldRTT(distanceKm);

  // Optical pulse animation duration in seconds scaled to RTT
  const pulseDuration = Math.max(1, Math.min(3.5, theoreticalRTT / 40));

  return (
    <section
      id="latency-calculator-section"
      aria-label="How Fast is a Click Latency Calculator"
      className="w-full py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-ivory-light border-t border-warm-sand-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-burnt-orange" />
            <span className="text-xs font-mono font-bold tracking-widest text-burnt-orange uppercase">
              {"// PHYSICS OF SPEED"}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-charcoal">
            &ldquo;How fast is a click?&rdquo; Latency Calculator
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-2xl">
            Light slows down inside glass fiber cables to about 200,000 km/s (two-thirds of its speed in space).
            Calculate the fundamental physical limit of round-trip network time between any two cities.
          </p>
        </div>

        {/* Calculator HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Controls & Inputs (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-warm-sand-border bg-ivory p-5 sm:p-6 shadow-sm flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono font-bold uppercase text-charcoal flex items-center gap-2">
                <Compass className="h-4 w-4 text-burnt-orange" />
                Select Route Endpoints
              </span>

              {/* Origin Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="origin-city"
                  className="text-xs font-mono font-semibold text-charcoal-muted"
                >
                  FROM (ORIGIN CITY):
                </label>
                <select
                  id="origin-city"
                  value={originId}
                  onChange={(e) => setOriginId(e.target.value)}
                  className="w-full rounded-xl border border-warm-sand-border bg-white px-3.5 py-2.5 text-sm font-sans font-medium text-charcoal focus:border-burnt-orange focus:outline-none shadow-2xs cursor-pointer"
                >
                  {MAJOR_CITIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}, {c.country}
                    </option>
                  ))}
                </select>
              </div>

              {/* Destination Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="dest-city"
                  className="text-xs font-mono font-semibold text-charcoal-muted"
                >
                  TO (DESTINATION SERVER):
                </label>
                <select
                  id="dest-city"
                  value={destId}
                  onChange={(e) => setDestId(e.target.value)}
                  className="w-full rounded-xl border border-warm-sand-border bg-white px-3.5 py-2.5 text-sm font-sans font-medium text-charcoal focus:border-burnt-orange focus:outline-none shadow-2xs cursor-pointer"
                >
                  {MAJOR_CITIES.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}, {c.country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-warm-sand-border/80">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase text-charcoal-muted font-bold">
                  Geodesic Distance
                </span>
                <span className="text-xl font-mono font-black text-charcoal">
                  {distanceKm.toLocaleString()} km
                </span>
                <span className="text-[10px] font-mono text-charcoal-muted">
                  Straight line on Earth
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase text-charcoal-muted font-bold">
                  Fibre Medium Speed
                </span>
                <span className="text-xl font-mono font-black text-burnt-orange">
                  ~200,000 km/s
                </span>
                <span className="text-[10px] font-mono text-charcoal-muted">
                  Light in fused silica
                </span>
              </div>
            </div>
          </div>

          {/* Visualization & Results (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-warm-sand-border bg-white p-5 sm:p-6 shadow-sm flex flex-col justify-between gap-6">
            {/* Visual Pulse Pipeline */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-charcoal-muted">
                <span className="flex items-center gap-1.5 text-charcoal">
                  <span className="h-2 w-2 rounded-full bg-burnt-orange" />
                  {origin.name}
                </span>
                <span className="text-[11px] font-mono text-burnt-orange">
                  ROUND-TRIP LIGHT PULSE
                </span>
                <span className="flex items-center gap-1.5 text-charcoal">
                  {dest.name}
                  <span className="h-2 w-2 rounded-full bg-sage-green" />
                </span>
              </div>

              {/* Animated Optical Fiber Line */}
              <div className="relative h-14 bg-ivory rounded-xl border border-warm-sand-border flex items-center px-6 overflow-hidden">
                {/* Background Core Cable Line */}
                <div className="w-full h-1.5 bg-warm-sand rounded-full relative">
                  {/* Left-to-right pulse */}
                  {!shouldReduceMotion && (
                    <motion.div
                      animate={{
                        x: ["0%", "100%", "0%"],
                      }}
                      transition={{
                        duration: pulseDuration,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-1.5 h-4.5 w-4.5 rounded-full bg-burnt-orange shadow-[0_0_12px_#C47745] flex items-center justify-center -ml-2"
                    >
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </motion.div>
                  )}
                </div>

                {/* Node endpoints */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] font-mono font-bold text-charcoal">
                  TX
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] font-mono font-bold text-charcoal">
                  RX
                </div>
              </div>
            </div>

            {/* Latency Comparison Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Theoretical Minimum */}
              <div className="rounded-xl border border-warm-sand-border bg-ivory-light p-4 flex flex-col gap-1">
                <span className="text-xs font-mono font-bold text-burnt-orange uppercase flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5" />
                  Theoretical Minimum RTT
                </span>
                <span className="text-3xl font-mono font-extrabold text-charcoal tracking-tight">
                  {theoreticalRTT} ms
                </span>
                <span className="text-[11px] font-sans text-charcoal-muted leading-tight">
                  Absolute fastest possible time permitted by the laws of physics (light travelling in pure glass).
                </span>
              </div>

              {/* Real World Typical */}
              <div className="rounded-xl border border-warm-sand-border bg-ivory-light p-4 flex flex-col gap-1">
                <span className="text-xs font-mono font-bold text-charcoal uppercase flex items-center gap-1.5">
                  <Activity className="h-3.5 w-3.5 text-sage-green" />
                  Real-World Observed RTT
                </span>
                <span className="text-3xl font-mono font-extrabold text-sage-green tracking-tight">
                  ~{realRTT} ms
                </span>
                <span className="text-[11px] font-sans text-charcoal-muted leading-tight">
                  Higher due to subsea cable detours around trenches, router switching, and optical repeaters.
                </span>
              </div>
            </div>

            {/* Explanatory Note & Source */}
            <div className="flex items-start gap-2 text-xs font-sans text-charcoal-muted pt-2 border-t border-warm-sand-border/80">
              <AlertCircle className="h-4 w-4 text-burnt-orange shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <span>
                  <strong>Why is real latency higher?</strong> Submarine cables do not travel in perfect straight lines; they follow shallow continental shelves and avoid volcanic zones. At every hop, routers inspect packet headers and optical repeaters re-amplify the light.
                </span>
                <span className="text-[10px] font-mono text-charcoal-muted/90 pt-1">
                  Source: Refractive index of standard silica single-mode optical fiber (ITU-T G.652 spec, n ≈ 1.4682)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
