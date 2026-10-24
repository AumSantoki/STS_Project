"use client";

import { RefObject } from "react";

interface ScrollJourneyCanvasProps {
  canvasRef: RefObject<HTMLDivElement | null>;
  activeStageNumber: number;
}

export function ScrollJourneyCanvas({
  canvasRef,
  activeStageNumber,
}: ScrollJourneyCanvasProps) {
  return (
    <div
      ref={canvasRef}
      role="region"
      aria-label="Physical Network Journey Visual Canvas"
      className="relative w-full h-[340px] sm:h-[400px] md:h-[480px] rounded-3xl border border-warm-sand-border bg-ivory-light overflow-hidden shadow-sm flex items-center justify-center select-none"
    >
      {/* Scene Coordinate Indicator Badge */}
      <div className="absolute top-4 left-5 z-10 flex items-center gap-2 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-charcoal text-ivory shadow-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-burnt-orange animate-pulse" />
          <span>LAYER 0{activeStageNumber} {"//"} 06</span>
        </span>
      </div>

      {/* Background Architectural Grid Accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30 pointer-events-none [background-image:linear-gradient(to_right,#E4D6C4_1px,transparent_1px),linear-gradient(to_bottom,#E4D6C4_1px,transparent_1px)] [background-size:24px_24px]"
      />

      {/* Persistent SVG Canvas containing all 6 physical scenes */}
      <svg
        className="w-full h-full max-w-4xl max-h-[460px] p-4"
        viewBox="0 0 800 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="laserBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C47745" />
            <stop offset="50%" stopColor="#D7B96D" />
            <stop offset="100%" stopColor="#C47745" />
          </linearGradient>

          <linearGradient id="abyssGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#131713" />
            <stop offset="100%" stopColor="#1E231C" />
          </linearGradient>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ============================================================ */}
        {/* SCENE 1: Device Handset & Airborne Radio Frequency Space     */}
        {/* ============================================================ */}
        <g id="scene-1" className="scene-layer origin-center">
          {/* Desk Surface */}
          <line x1="100" y1="360" x2="700" y2="360" stroke="#D8C7B0" strokeWidth="3" strokeLinecap="round" />

          {/* User's Smartphone */}
          <g id="phone-group" transform="translate(180, 220)">
            <rect x="-40" y="-75" width="80" height="150" rx="14" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
            <rect x="-34" y="-65" width="68" height="130" rx="8" fill="#F5F0E6" />
            <circle cx="0" cy="55" r="4" fill="#252720" />
            {/* Screen with outgoing request */}
            <rect x="-26" y="-45" width="52" height="70" rx="4" fill="#C47745" fillOpacity="0.15" stroke="#C47745" strokeWidth="1.5" />
            <circle cx="0" cy="-10" r="10" fill="#C47745" />
            <text x="0" y="32" fill="#252720" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
              CLICK INITIATED
            </text>
          </g>

          {/* Radiating RF Waves */}
          <g id="rf-waves" transform="translate(230, 220)">
            {[50, 95, 140, 185, 230].map((r, i) => (
              <path
                key={i}
                className="rf-wave-arc"
                d={`M ${r * 0.4},-${r * 0.65} A ${r} ${r} 0 0 1 ${r * 0.4},${r * 0.65}`}
                stroke="#C47745"
                strokeWidth="2.5"
                strokeDasharray="5 5"
                opacity={0.8 - i * 0.14}
              />
            ))}
          </g>

          {/* Wi-Fi 6 Gateway Router */}
          <g id="router-group" transform="translate(560, 280)">
            {/* Antennas */}
            <line x1="-35" y1="-12" x2="-55" y2="-85" stroke="#252720" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="0" y1="-12" x2="0" y2="-90" stroke="#252720" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="35" y1="-12" x2="55" y2="-85" stroke="#252720" strokeWidth="3.5" strokeLinecap="round" />

            <rect x="-70" y="-18" width="140" height="46" rx="8" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
            <line x1="-55" y1="14" x2="55" y2="14" stroke="#D8C7B0" strokeWidth="1.5" />

            {/* LEDs */}
            <circle cx="-40" cy="0" r="3.5" fill="#8E9B80" />
            <circle cx="-20" cy="0" r="3.5" fill="#8E9B80" />
            <circle cx="0" cy="0" r="3.5" fill="#C47745" />
            <circle cx="20" cy="0" r="3.5" fill="#D7B96D" />

            <text x="0" y="52" fill="#252720" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
              WI-FI 6 GATEWAY (NAT / 5GHz)
            </text>
          </g>

          {/* Cable leaving router */}
          <path
            id="cable-out-1"
            d="M 605,305 C 640,335 670,360 750,360"
            stroke="#C47745"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* ============================================================ */}
        {/* SCENE 2: Municipal Street Trench & Last-Mile Optical Fiber   */}
        {/* ============================================================ */}
        <g id="scene-2" className="scene-layer opacity-0 origin-center">
          {/* Street Surface */}
          <rect x="60" y="70" width="680" height="34" fill="#E4D6C4" stroke="#252720" strokeWidth="2.5" rx="2" />
          <line x1="60" y1="87" x2="740" y2="87" stroke="#FAF7F2" strokeWidth="2.5" strokeDasharray="18 18" />
          <text x="90" y="60" fill="#252720" fontSize="11" fontFamily="monospace" fontWeight="bold">
            MUNICIPAL RIGHT-OF-WAY &amp; FIBER TRENCH
          </text>

          {/* Underground Soil Cross-section */}
          <rect x="60" y="104" width="680" height="260" fill="#D8C7B0" opacity="0.45" rx="2" />

          {/* Excavated Utility Duct Trench */}
          <path d="M 170,104 L 210,270 L 590,270 L 630,104" fill="#E4D6C4" fillOpacity="0.5" stroke="#8E9B80" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="400" y="145" fill="#5E6254" fontSize="10" fontFamily="monospace" textAnchor="middle">
            MICRO-DUCT CONDUIT (1.2m DEPTH)
          </text>

          {/* Fiber Conduit Pipe */}
          <path d="M 80,250 L 720,250" stroke="#252720" strokeWidth="14" strokeLinecap="round" />
          <path d="M 80,250 L 720,250" stroke="#FAF7F2" strokeWidth="10" strokeLinecap="round" />
          <path id="fiber-beam-2" d="M 80,250 L 720,250" stroke="#C47745" strokeWidth="4.5" strokeLinecap="round" />

          {/* GPON Passive Splitter */}
          <g transform="translate(400, 250)">
            <rect x="-42" y="-36" width="84" height="72" rx="8" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="14" fill="#C47745" fillOpacity="0.2" stroke="#C47745" strokeWidth="2" />
            <text x="0" y="-44" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
              1:32 GPON PASSIVE OPTICAL SPLITTER
            </text>
            <text x="0" y="5" fill="#C47745" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
              9µm CORE
            </text>
          </g>
        </g>

        {/* ============================================================ */}
        {/* SCENE 3: Carrier IXP Peering Meet-Me Room & Terabit Routers */}
        {/* ============================================================ */}
        <g id="scene-3" className="scene-layer opacity-0 origin-center">
          <rect x="70" y="50" width="660" height="320" rx="12" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
          <line x1="70" y1="330" x2="730" y2="330" stroke="#D8C7B0" strokeWidth="2" />

          <text x="95" y="80" fill="#252720" fontSize="12" fontFamily="monospace" fontWeight="bold">
            CARRIER-NEUTRAL COLOCATION // MEET-ME ROOM (MMR)
          </text>

          {/* 42U Server Racks */}
          {[130, 270, 500, 640].map((x, idx) => (
            <g key={idx} transform={`translate(${x}, 115)`}>
              <rect x="-40" y="0" width="80" height="195" rx="5" fill="#F5F0E6" stroke="#252720" strokeWidth="2" />
              {[25, 60, 95, 130, 165].map((y, i) => (
                <g key={i}>
                  <rect x="-34" y={y} width="68" height="25" rx="2" fill="#FAF7F2" stroke="#D8C7B0" strokeWidth="1" />
                  <circle cx="-24" cy={y + 12} r="3" fill={i % 2 === 0 ? "#8E9B80" : "#D7B96D"} />
                  <circle cx="-15" cy={y + 12} r="3" fill="#8E9B80" />
                  <line x1="5" y1={y + 12} x2="24" y2={y + 12} stroke="#C47745" strokeWidth="2" />
                </g>
              ))}
              <text x="0" y="212" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="middle">
                AS {idx === 1 ? "15169 (GOOGLE)" : idx === 2 ? "13335 (CF)" : "TIER-1 CORE"}
              </text>
            </g>
          ))}

          {/* BGP Switch Engine */}
          <g transform="translate(385, 205)">
            <rect x="-48" y="-55" width="96" height="110" rx="10" fill="#252720" stroke="#C47745" strokeWidth="2.5" />
            <circle cx="0" cy="-14" r="18" fill="#C47745" fillOpacity="0.25" stroke="#C47745" strokeWidth="2" />
            <text x="0" y="-9" fill="#FAF7F2" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
              BGP
            </text>
            <text x="0" y="10" fill="#D7B96D" fontSize="8" fontFamily="monospace" textAnchor="middle">
              FIB ROUTER
            </text>
            <text x="0" y="32" fill="#FAF7F2" fontSize="9" fontFamily="monospace" textAnchor="middle">
              100+ Tbps
            </text>
          </g>

          {/* Optical Cross-Connect Patching */}
          <path id="ixp-patch-1" d="M 170,175 C 255,130 300,185 340,195" stroke="#D7B96D" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path id="ixp-patch-2" d="M 433,215 C 475,225 515,170 595,185" stroke="#C47745" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </g>

        {/* ============================================================ */}
        {/* SCENE 4: Coastal Cable Landing Station & 15,000V PFE Feed    */}
        {/* ============================================================ */}
        <g id="scene-4" className="scene-layer opacity-0 origin-center">
          {/* Coastal Surf Waters on Right */}
          <path d="M 520,100 C 560,150 550,250 600,370 L 760,370 L 760,100 Z" fill="#8E9B80" fillOpacity="0.25" />
          <path d="M 540,170 C 570,200 600,230 670,260" stroke="#8E9B80" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 5" />
          <text x="640" y="145" fill="#252720" fontSize="11" fontFamily="monospace" fontWeight="bold">
            ATLANTIC SURF ZONE
          </text>

          {/* Landing Station Facility */}
          <g transform="translate(170, 190)">
            <rect x="-95" y="-95" width="190" height="200" rx="10" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
            <rect x="-75" y="-70" width="40" height="48" rx="4" fill="#E4D6C4" stroke="#252720" strokeWidth="1.5" />
            <rect x="-15" y="-70" width="40" height="48" rx="4" fill="#E4D6C4" stroke="#252720" strokeWidth="1.5" />
            <rect x="-35" y="25" width="70" height="80" fill="#252720" />
            <text x="0" y="-110" fill="#252720" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
              CABLE LANDING STATION (CLS)
            </text>
          </g>

          {/* 15,000V Power Feed Unit */}
          <g transform="translate(365, 235)">
            <rect x="-50" y="-45" width="100" height="90" rx="8" fill="#252720" stroke="#C47745" strokeWidth="2" />
            <polygon points="-10,-18 7,-18 -3,-2 10,-2 -10,22 -4,5 -12,5" fill="#D7B96D" />
            <text x="0" y="32" fill="#FAF7F2" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
              15,000V DC PFE
            </text>
          </g>

          {/* Armored Cable through Beach Manhole into Sea */}
          <path id="landing-cable-path" d="M 265,270 L 315,270 L 415,270 C 490,270 540,310 710,345" stroke="#C47745" strokeWidth="7" strokeLinecap="round" fill="none" />
          <path d="M 500,285 L 512,305 M 525,295 L 537,315 M 550,305 L 562,325 M 575,315 L 587,335" stroke="#252720" strokeWidth="3" strokeLinecap="round" />
          <text x="560" y="365" fill="#252720" fontSize="10" fontFamily="monospace" fontWeight="bold">
            DOUBLE-ARMORED BORE
          </text>
        </g>

        {/* ============================================================ */}
        {/* SCENE 5: The Abyssal Ocean Floor (-4,200m Depth & Repeater) */}
        {/* ============================================================ */}
        <g id="scene-5" className="scene-layer opacity-0 origin-center">
          {/* Deep Ocean Backdrop */}
          <rect x="50" y="40" width="700" height="340" rx="14" fill="url(#abyssGradient)" />
          <text x="80" y="80" fill="#D7B96D" fontSize="11" fontFamily="monospace" fontWeight="bold">
            ABYSSAL SEABED // DEPTH: -4,200 METERS
          </text>

          {/* Seafloor Silt Contour */}
          <path d="M 50,320 Q 200,300 400,325 T 750,310 L 750,380 L 50,380 Z" fill="#0C0E0C" />

          {/* Submarine Cable */}
          <path id="abyss-cable-path" d="M 60,280 Q 220,260 320,270 L 480,270 Q 600,280 740,265" stroke="#C47745" strokeWidth="4" fill="none" />
          <path d="M 60,280 Q 220,260 320,270 L 480,270 Q 600,280 740,265" stroke="#D7B96D" strokeWidth="2" filter="url(#softGlow)" fill="none" />

          {/* Titanium EDFA Repeater Pod */}
          <g transform="translate(400, 270)">
            <rect x="-70" y="-22" width="140" height="44" rx="12" fill="#34372E" stroke="#8E9B80" strokeWidth="2" />
            <line x1="-55" y1="0" x2="55" y2="0" stroke="#C47745" strokeWidth="3.5" filter="url(#softGlow)" />
            <circle cx="0" cy="0" r="7" fill="#D7B96D" />
            <text x="0" y="-32" fill="#F5F0E6" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
              EDFA OPTICAL REPEATER POD
            </text>
            <text x="0" y="38" fill="#8E9B80" fontSize="9" fontFamily="monospace" textAnchor="middle">
              AMPLIFIES PURE LIGHT EVERY 70km (NO ELECTRICAL RECONVERSION)
            </text>
          </g>
        </g>

        {/* ============================================================ */}
        {/* SCENE 6: Hyperscale Cloud Compute Hall (Cold Aisle & 40MW)   */}
        {/* ============================================================ */}
        <g id="scene-6" className="scene-layer opacity-0 origin-center">
          <rect x="70" y="50" width="660" height="320" rx="12" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
          <line x1="70" y1="320" x2="730" y2="320" stroke="#D8C7B0" strokeWidth="2" />

          <text x="95" y="80" fill="#252720" fontSize="12" fontFamily="monospace" fontWeight="bold">
            HYPERSCALE DATA HALL // COLD-AISLE CONTAINMENT (40MW FACILITY)
          </text>

          {/* Chilled Water Overhead Pipe */}
          <path d="M 90,105 L 710,105" stroke="#8E9B80" strokeWidth="7" strokeLinecap="round" />
          <text x="400" y="100" fill="#8E9B80" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            STAINLESS STEEL CHILLED WATER LOOP // 18°C DELTA
          </text>

          {/* Server Racks */}
          {[140, 300, 480, 640].map((x, idx) => (
            <g key={idx} transform={`translate(${x}, 135)`}>
              <rect x="-42" y="0" width="84" height="175" rx="5" fill="#F5F0E6" stroke="#252720" strokeWidth="2" />
              {[20, 55, 90, 125].map((y, i) => (
                <g key={i}>
                  <rect x="-35" y={y} width="70" height="24" rx="2" fill="#FAF7F2" stroke="#D8C7B0" strokeWidth="1" />
                  <circle cx="-25" cy={y + 12} r="3" fill={i % 2 === 0 ? "#C47745" : "#8E9B80"} />
                  <circle cx="-16" cy={y + 12} r="3" fill="#8E9B80" />
                  <rect x="8" y={y + 9} width="22" height="6" fill="#D7B96D" fillOpacity="0.4" />
                </g>
              ))}
              <text x="0" y="192" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="middle">
                RACK 0{idx + 1} ({idx === 1 ? "GPU BLUSTER" : "NVMe DATABASE"})
              </text>
            </g>
          ))}

          {/* Target Compute Server Blade */}
          <g transform="translate(480, 190)">
            <rect x="-35" y="-14" width="70" height="28" rx="4" fill="#C47745" stroke="#C47745" strokeWidth="2" />
            <text x="0" y="5" fill="#FAF7F2" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
              HTTP 200 OK
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
