"use client";

import { useState } from "react";
import {
  CABLE_VS_SATELLITE_DATA,
  DATA_CENTRE_ENERGY_DATA,
  CABLE_FAULTS_DATA,
  CAPACITY_GROWTH_DATA,
} from "@/data/chartsData";
import { BarChart3, Table } from "lucide-react";

export function InternetInNumbersSection() {
  const [viewMode, setViewMode] = useState<"charts" | "table">("charts");

  return (
    <section
      id="internet-numbers-section"
      aria-label="The Internet in Numbers Interactive Charts"
      className="w-full py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20 bg-ivory-light border-t border-warm-sand-border"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-burnt-orange" />
              <span className="text-xs font-mono font-bold tracking-widest text-burnt-orange uppercase">
                {"// QUANTITATIVE EVIDENCE"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-charcoal">
              The Internet in Numbers
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted max-w-2xl">
              Verified statistics on global undersea capacity, energy demand, and structural cable fault causes.
              Toggle to view all numbers in accessible table format.
            </p>
          </div>

          {/* Toggle Accessible View Mode */}
          <div className="flex items-center gap-1.5 bg-ivory border border-warm-sand-border rounded-xl p-1.5 shrink-0 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("charts")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                viewMode === "charts"
                  ? "bg-burnt-orange text-white shadow-2xs"
                  : "text-charcoal-muted hover:text-charcoal hover:bg-white"
              }`}
            >
              <BarChart3 className="h-3.5 w-3.5" />
              Charts View
            </button>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                viewMode === "table"
                  ? "bg-burnt-orange text-white shadow-2xs"
                  : "text-charcoal-muted hover:text-charcoal hover:bg-white"
              }`}
            >
              <Table className="h-3.5 w-3.5" />
              View as Table
            </button>
          </div>
        </div>

        {/* =========================================================================
            CHARTS VIEW
            ========================================================================= */}
        {viewMode === "charts" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chart 1: Donut Chart - Cables vs Satellites */}
            <div className="rounded-2xl border border-warm-sand-border bg-white p-5 sm:p-6 shadow-sm flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-1 border-b border-warm-sand-border/70 pb-3">
                <span className="text-xs font-mono font-bold text-burnt-orange uppercase">
                  DONUT CHART • DATA DISTRIBUTION
                </span>
                <h3 className="text-lg font-extrabold text-charcoal">
                  {CABLE_VS_SATELLITE_DATA.title}
                </h3>
                <span className="text-xs text-charcoal-muted">
                  {CABLE_VS_SATELLITE_DATA.subtitle}
                </span>
              </div>

              {/* Donut Graphic */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-4">
                <div className="relative w-40 h-40">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    {/* Background ring */}
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#E4D6C4" strokeWidth="16" />
                    {/* 99% Segment (Circumference = 2 * PI * 38 = 238.76) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#C47745"
                      strokeWidth="16"
                      strokeDasharray="236.37 238.76"
                      className="transition-all duration-700"
                    />
                    {/* 1% Segment */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#8E9B80"
                      strokeWidth="16"
                      strokeDasharray="2.39 238.76"
                      strokeDashoffset="-236.37"
                      className="transition-all duration-700"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-mono font-black text-burnt-orange">99%</span>
                    <span className="text-[10px] font-mono uppercase text-charcoal-muted">Cables</span>
                  </div>
                </div>

                {/* Legend & Tooltip */}
                <div className="flex flex-col gap-3 max-w-xs">
                  {CABLE_VS_SATELLITE_DATA.data.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-warm-sand-border bg-ivory p-2.5 flex flex-col gap-0.5"
                    >
                      <div className="flex items-center justify-between text-xs font-mono font-bold">
                        <span className="flex items-center gap-2">
                          <span
                            className="h-2.5 w-2.5 rounded-full inline-block"
                            style={{ backgroundColor: item.color }}
                          />
                          {item.label}
                        </span>
                        <span className="text-burnt-orange font-extrabold">{item.value}%</span>
                      </div>
                      <span className="text-[11px] font-sans text-charcoal-muted pl-4">
                        {item.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[10px] font-mono text-charcoal-muted pt-2 border-t border-warm-sand-border/70">
                <span className="font-bold">Source:</span> {CABLE_VS_SATELLITE_DATA.source}
              </div>
            </div>

            {/* Chart 2: Bar Chart - Data Centre Energy Use */}
            <div className="rounded-2xl border border-warm-sand-border bg-white p-5 sm:p-6 shadow-sm flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-1 border-b border-warm-sand-border/70 pb-3">
                <span className="text-xs font-mono font-bold text-burnt-orange uppercase">
                  BAR CHART • ELECTRICITY CONSUMPTION
                </span>
                <h3 className="text-lg font-extrabold text-charcoal">
                  {DATA_CENTRE_ENERGY_DATA.title}
                </h3>
                <span className="text-xs text-charcoal-muted">
                  {DATA_CENTRE_ENERGY_DATA.subtitle}
                </span>
              </div>

              {/* Bar Graphic */}
              <div className="flex flex-col gap-3 py-2">
                {DATA_CENTRE_ENERGY_DATA.data.map((item, idx) => {
                  const maxVal = 1050;
                  const pct = Math.round((item.value / maxVal) * 100);
                  return (
                    <div key={idx} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-charcoal">{item.label}</span>
                        <span className="font-black text-burnt-orange">
                          {item.value} {item.unit}
                        </span>
                      </div>
                      {/* Bar Track */}
                      <div className="h-6 w-full rounded-lg bg-ivory border border-warm-sand-border overflow-hidden p-0.5">
                        <div
                          className="h-full rounded-md transition-all duration-700 flex items-center justify-end pr-2 text-[10px] font-mono font-bold text-white"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: item.color,
                          }}
                        >
                          {pct > 20 && `${item.value} TWh`}
                        </div>
                      </div>
                      <span className="text-[10px] text-charcoal-muted font-sans">{item.note}</span>
                    </div>
                  );
                })}
              </div>

              <div className="text-[10px] font-mono text-charcoal-muted pt-2 border-t border-warm-sand-border/70">
                <span className="font-bold">Source:</span> {DATA_CENTRE_ENERGY_DATA.source}
              </div>
            </div>

            {/* Chart 3: Pie / Breakdown Chart - Cable Fault Causes */}
            <div className="rounded-2xl border border-warm-sand-border bg-white p-5 sm:p-6 shadow-sm flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-1 border-b border-warm-sand-border/70 pb-3">
                <span className="text-xs font-mono font-bold text-burnt-orange uppercase">
                  BREAKDOWN • INCIDENT ANATOMY
                </span>
                <h3 className="text-lg font-extrabold text-charcoal">
                  {CABLE_FAULTS_DATA.title}
                </h3>
                <span className="text-xs text-charcoal-muted">
                  {CABLE_FAULTS_DATA.subtitle}
                </span>
              </div>

              {/* Horizontal stacked segmented bar */}
              <div className="flex flex-col gap-4 py-2">
                <div className="h-7 w-full rounded-xl bg-ivory border border-warm-sand-border flex overflow-hidden p-0.5">
                  {CABLE_FAULTS_DATA.data.map((item, idx) => (
                    <div
                      key={idx}
                      className="h-full flex items-center justify-center text-[10px] font-mono font-bold text-white transition-opacity hover:opacity-85"
                      style={{
                        width: `${item.value}%`,
                        backgroundColor: item.color,
                      }}
                      title={`${item.label}: ${item.value}%`}
                    >
                      {item.value > 15 && `${item.value}%`}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {CABLE_FAULTS_DATA.data.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-warm-sand-border/80 bg-ivory-light p-2.5 flex flex-col gap-0.5"
                    >
                      <div className="flex items-center justify-between text-xs font-mono font-bold">
                        <span className="flex items-center gap-1.5">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          {item.label}
                        </span>
                        <span className="text-burnt-orange">{item.value}%</span>
                      </div>
                      <span className="text-[10px] text-charcoal-muted leading-tight font-sans">
                        {item.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[10px] font-mono text-charcoal-muted pt-2 border-t border-warm-sand-border/70">
                <span className="font-bold">Source:</span> {CABLE_FAULTS_DATA.source}
              </div>
            </div>

            {/* Chart 4: Line Trend Chart - Bandwidth Capacity Growth */}
            <div className="rounded-2xl border border-warm-sand-border bg-white p-5 sm:p-6 shadow-sm flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-1 border-b border-warm-sand-border/70 pb-3">
                <span className="text-xs font-mono font-bold text-burnt-orange uppercase">
                  EXPONENTIAL GROWTH CURVE
                </span>
                <h3 className="text-lg font-extrabold text-charcoal">
                  {CAPACITY_GROWTH_DATA.title}
                </h3>
                <span className="text-xs text-charcoal-muted">
                  {CAPACITY_GROWTH_DATA.subtitle}
                </span>
              </div>

              {/* Line graph rendered with responsive SVG */}
              <div className="relative w-full aspect-[2/1] my-1">
                <svg viewBox="0 0 400 180" className="w-full h-full">
                  {/* Grid lines */}
                  <line x1="40" y1="20" x2="380" y2="20" stroke="#E4D6C4" strokeDasharray="3,3" />
                  <line x1="40" y1="70" x2="380" y2="70" stroke="#E4D6C4" strokeDasharray="3,3" />
                  <line x1="40" y1="120" x2="380" y2="120" stroke="#E4D6C4" strokeDasharray="3,3" />
                  <line x1="40" y1="150" x2="380" y2="150" stroke="#34372E" strokeWidth="1.5" />

                  {/* Y Axis Labels */}
                  <text x="32" y="24" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="end">1500T</text>
                  <text x="32" y="74" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="end">800T</text>
                  <text x="32" y="124" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="end">200T</text>
                  <text x="32" y="154" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="end">0</text>

                  {/* Area fill */}
                  <polygon
                    points="60,150 60,149 120,148 180,142 240,124 300,82 360,22 360,150"
                    fill="rgba(196, 119, 69, 0.15)"
                  />
                  {/* Curve Path */}
                  <path
                    d="M 60,149 L 120,148 L 180,142 L 240,124 L 300,82 L 360,22"
                    fill="none"
                    stroke="#C47745"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Dots & Labels */}
                  {[
                    { year: "2000", val: "2", x: 60, y: 149 },
                    { year: "2005", val: "12", x: 120, y: 148 },
                    { year: "2010", val: "60", x: 180, y: 142 },
                    { year: "2015", val: "240", x: 240, y: 124 },
                    { year: "2020", val: "680", x: 300, y: 82 },
                    { year: "2024", val: "1,450", x: 360, y: 22 },
                  ].map((pt, idx) => (
                    <g key={idx}>
                      <circle cx={pt.x} cy={pt.y} r="4" fill="#C47745" stroke="#FAF7F2" strokeWidth="2" />
                      <text
                        x={pt.x}
                        y="166"
                        fill="#5E6254"
                        fontSize="9"
                        fontFamily="monospace"
                        textAnchor="middle"
                      >
                        {pt.year}
                      </text>
                      <text
                        x={pt.x}
                        y={pt.y - 8}
                        fill="#252720"
                        fontSize="8"
                        fontFamily="monospace"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        {pt.val}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

              <div className="text-[10px] font-mono text-charcoal-muted pt-2 border-t border-warm-sand-border/70">
                <span className="font-bold">Source:</span> {CAPACITY_GROWTH_DATA.source}
              </div>
            </div>
          </div>
        ) : (
          /* Accessible Table View */
          <div className="flex flex-col gap-6">
            {[
              CABLE_VS_SATELLITE_DATA,
              DATA_CENTRE_ENERGY_DATA,
              CABLE_FAULTS_DATA,
              CAPACITY_GROWTH_DATA,
            ].map((section) => (
              <div
                key={section.id}
                className="rounded-2xl border border-warm-sand-border bg-white p-5 sm:p-6 shadow-sm overflow-x-auto"
              >
                <div className="flex flex-col gap-1 border-b border-warm-sand-border/70 pb-3 mb-4">
                  <span className="text-xs font-mono font-bold text-burnt-orange uppercase">
                    DATA TABLE
                  </span>
                  <h3 className="text-lg font-extrabold text-charcoal">{section.title}</h3>
                  <span className="text-xs text-charcoal-muted">{section.subtitle}</span>
                </div>

                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="border-b border-warm-sand-border bg-ivory font-mono text-charcoal-muted uppercase text-[11px]">
                      <th className="py-2.5 px-3">Metric / Category</th>
                      <th className="py-2.5 px-3">Value</th>
                      <th className="py-2.5 px-3">Unit</th>
                      <th className="py-2.5 px-3">Notes & Context</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-warm-sand-border/50">
                    {section.data.map((row, idx) => (
                      <tr key={idx} className="hover:bg-ivory/50">
                        <td className="py-2.5 px-3 font-semibold text-charcoal">{row.label}</td>
                        <td className="py-2.5 px-3 font-mono font-bold text-burnt-orange">
                          {row.value.toLocaleString()}
                        </td>
                        <td className="py-2.5 px-3 font-mono text-charcoal-muted">{row.unit}</td>
                        <td className="py-2.5 px-3 text-charcoal-muted">{row.note || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="text-[10px] font-mono text-charcoal-muted pt-3 border-t border-warm-sand-border/70 mt-3">
                  <span className="font-bold">Source:</span> {section.source}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
