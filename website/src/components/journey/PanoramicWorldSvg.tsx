"use client";

import { useRef, useEffect, useState } from "react";

interface PanoramicWorldSvgProps {
  cameraX: number;
  packetProgress: number;
  isAnimatingDirectly?: boolean;
}

export function PanoramicWorldSvg({
  cameraX,
  packetProgress,
  isAnimatingDirectly = false,
}: PanoramicWorldSvgProps) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [packetPos, setPacketPos] = useState<{ x: number; y: number }>({ x: 170, y: 310 });

  // Continuous master optical conduit path across the entire 6000px world
  const masterPathD =
    "M 170,310 C 260,310 680,260 760,260 L 780,290 C 780,420 860,420 1000,420 L 1480,420 L 2000,420 C 2100,420 2150,270 2500,270 C 2700,270 2900,160 3000,160 L 3200,240 C 3350,240 3450,360 3550,360 C 3750,360 3850,430 4000,430 L 4500,430 C 4700,430 4900,320 5000,320 C 5150,320 5250,140 5300,140 L 5500,260";

  // Calculate packet position along continuous physical route
  useEffect(() => {
    if (pathRef.current) {
      try {
        const totalLength = pathRef.current.getTotalLength();
        const currentLength = Math.max(0, Math.min(1, packetProgress)) * totalLength;
        const pt = pathRef.current.getPointAtLength(currentLength);
        setPacketPos({ x: pt.x, y: pt.y });
      } catch {
        // Fallback calculation based on linear interpolation
        const approxX = 170 + packetProgress * (5500 - 170);
        setPacketPos({ x: approxX, y: 300 });
      }
    }
  }, [packetProgress]);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] rounded-3xl border border-warm-sand-border bg-ivory-light overflow-hidden shadow-inner flex items-center justify-center select-none">
      {/* Background Architectural Grid Coordinate Texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 pointer-events-none [background-image:linear-gradient(to_right,#E4D6C4_1px,transparent_1px),linear-gradient(to_bottom,#E4D6C4_1px,transparent_1px)] [background-size:28px_28px]"
      />

      {/* SVG Viewport (Framing a 1000 x 520 window into the 6000px wide world) */}
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 520"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Signal Spark Glow Filter */}
          <filter id="packetGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Abyssal Ocean Gradient */}
          <linearGradient id="abyssGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2A4036" />
            <stop offset="35%" stopColor="#1B2822" />
            <stop offset="100%" stopColor="#111612" />
          </linearGradient>

          {/* Coastal Surf Gradient */}
          <linearGradient id="surfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8E9B80" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#4A6558" stopOpacity="0.8" />
          </linearGradient>

          {/* Copper & Optical Fiber Core Gradient */}
          <linearGradient id="fiberGlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C47745" />
            <stop offset="50%" stopColor="#D7B96D" />
            <stop offset="100%" stopColor="#C47745" />
          </linearGradient>
        </defs>

        {/* Master Panoramic World Group: Translates horizontally along cameraX */}
        <g
          id="panoramic-world"
          style={{
            transform: `translateX(${cameraX}px)`,
            transition: isAnimatingDirectly
              ? "transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)"
              : "none",
            willChange: "transform",
          }}
        >
          {/* ========================================================== */}
          {/* ZONE 1: Domestic Living Room & Airborne Radio Frequency    */}
          {/* Coordinate Span: X 0 to 1000                              */}
          {/* ========================================================== */}
          <g id="zone-1" transform="translate(0, 0)">
            {/* Interior Room Wall */}
            <rect x="0" y="0" width="1000" height="520" fill="#FAF7F2" fillOpacity="0.9" />

            {/* Room Ceiling Molding & Floor Baseboard */}
            <line x1="0" y1="40" x2="1000" y2="40" stroke="#E4D6C4" strokeWidth="2" />
            <line x1="0" y1="430" x2="1000" y2="430" stroke="#D8C7B0" strokeWidth="4" />

            {/* Zone Tag */}
            <text x="50" y="70" fill="#C47745" fontSize="11" fontFamily="monospace" fontWeight="bold">
              PHYSICAL HOP 01 // AIRBORNE RF SPACE &amp; HOME GATEWAY
            </text>

            {/* Desk Surface */}
            <rect x="60" y="370" width="400" height="24" rx="4" fill="#E4D6C4" stroke="#252720" strokeWidth="2.5" />
            <line x1="120" y1="394" x2="120" y2="430" stroke="#252720" strokeWidth="4" strokeLinecap="round" />
            <line x1="400" y1="394" x2="400" y2="430" stroke="#252720" strokeWidth="4" strokeLinecap="round" />

            {/* Smartphone Handset */}
            <g transform="translate(170, 310)">
              {/* Phone Body */}
              <rect x="-35" y="-60" width="70" height="120" rx="12" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
              <rect x="-30" y="-50" width="60" height="100" rx="6" fill="#F5F0E6" />
              {/* Screen Content: HTTPS GET */}
              <rect x="-24" y="-36" width="48" height="60" rx="4" fill="#C47745" fillOpacity="0.15" stroke="#C47745" strokeWidth="1" />
              <circle cx="0" cy="-6" r="8" fill="#C47745" />
              <text x="0" y="38" fill="#252720" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                HTTPS GET
              </text>
              {/* Screen Touch Flash Pulse */}
              <circle cx="0" cy="-6" r="18" fill="none" stroke="#C47745" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
            </g>

            {/* Airborne Radio Waves (RF Fronts radiating across room) */}
            <g id="rf-wavefronts" transform="translate(220, 310)">
              {[60, 110, 160, 220, 290, 370, 460].map((r, i) => (
                <path
                  key={i}
                  d={`M ${r * 0.45},-${r * 0.7} A ${r} ${r} 0 0 1 ${r * 0.45},${r * 0.7}`}
                  stroke="#C47745"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  opacity={0.85 - i * 0.11}
                  fill="none"
                />
              ))}
            </g>

            {/* Home Wi-Fi 6 Gateway / Optical Terminal (ONT) */}
            <g transform="translate(760, 260)">
              {/* Dipole Antennas */}
              <line x1="-35" y1="-10" x2="-60" y2="-75" stroke="#252720" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="-12" y1="-10" x2="-20" y2="-85" stroke="#252720" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="12" y1="-10" x2="20" y2="-85" stroke="#252720" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="35" y1="-10" x2="60" y2="-75" stroke="#252720" strokeWidth="3.5" strokeLinecap="round" />

              {/* Gateway Body */}
              <rect x="-65" y="-18" width="130" height="54" rx="8" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
              <rect x="-55" y="14" width="110" height="12" rx="2" fill="#E4D6C4" />

              {/* Status LEDs */}
              <circle cx="-42" cy="0" r="3.5" fill="#8E9B80" />
              <circle cx="-24" cy="0" r="3.5" fill="#8E9B80" />
              <circle cx="-6" cy="0" r="3.5" fill="#C47745" />
              <circle cx="12" cy="0" r="3.5" fill="#8E9B80" />
              <circle cx="30" cy="0" r="3.5" fill="#D7B96D" />

              <text x="0" y="52" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                WI-FI 6 GATEWAY (NAT / 5GHz)
              </text>
            </g>

            {/* House Exterior Wall Foundation Transition (X: 860 to 1000) */}
            <rect x="940" y="40" width="60" height="480" fill="#D8C7B0" opacity="0.6" />
            <line x1="940" y1="40" x2="940" y2="520" stroke="#252720" strokeWidth="3" />
            <text x="970" y="240" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" transform="rotate(90, 970, 240)" fontWeight="bold">
              FOUNDATION WALL
            </text>
          </g>

          {/* ========================================================== */}
          {/* ZONE 2: City Street Trench & Last-Mile Optical Conduit     */}
          {/* Coordinate Span: X 1000 to 2000                            */}
          {/* ========================================================== */}
          <g id="zone-2" transform="translate(1000, 0)">
            {/* Road Surface & Asphalt Layer */}
            <rect x="0" y="0" width="1000" height="110" fill="#252720" />
            <line x1="0" y1="55" x2="1000" y2="55" stroke="#FAF7F2" strokeWidth="3" strokeDasharray="24 24" />
            <line x1="0" y1="110" x2="1000" y2="110" stroke="#D8C7B0" strokeWidth="3" />

            {/* Street Manhole Cover */}
            <g transform="translate(300, 110)">
              <rect x="-40" y="-8" width="80" height="16" rx="4" fill="#5E6254" stroke="#FAF7F2" strokeWidth="1.5" />
              <text x="0" y="3" fill="#FAF7F2" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                TELECOM UTILITY
              </text>
            </g>

            {/* Underground Soil Stratum */}
            <rect x="0" y="110" width="1000" height="410" fill="#D8C7B0" opacity="0.55" />

            {/* Zone Tag */}
            <text x="50" y="150" fill="#252720" fontSize="11" fontFamily="monospace" fontWeight="bold">
              PHYSICAL HOP 02 // MUNICIPAL RIGHT-OF-WAY &amp; FIBER TRENCH (-1.2m)
            </text>

            {/* Excavated Utility Duct Envelope */}
            <path d="M 0,380 L 1000,380" stroke="#E4D6C4" strokeWidth="48" strokeLinecap="round" />
            <path d="M 0,420 L 1000,420" stroke="#252720" strokeWidth="16" strokeLinecap="round" />
            <path d="M 0,420 L 1000,420" stroke="#FAF7F2" strokeWidth="10" strokeLinecap="round" />

            {/* Underground 1:32 GPON Optical Splitter Enclosure */}
            <g transform="translate(480, 420)">
              <rect x="-65" y="-45" width="130" height="90" rx="10" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="18" fill="#C47745" fillOpacity="0.2" stroke="#C47745" strokeWidth="2" />
              <text x="0" y="-55" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                1:32 GPON PASSIVE OPTICAL SPLITTER
              </text>
              <text x="0" y="4" fill="#C47745" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                9µm CORE
              </text>
              <text x="0" y="65" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="middle">
                PASSIVE LIGHT DIVISION (NO ELECTRICITY)
              </text>
            </g>

            {/* Concrete Carrier Vault Entrance (X: 1900 to 2000) */}
            <rect x="940" y="110" width="60" height="410" fill="#34372E" opacity="0.3" />
            <line x1="940" y1="110" x2="940" y2="520" stroke="#252720" strokeWidth="3" />
            <text x="970" y="300" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" transform="rotate(90, 970, 300)" fontWeight="bold">
              CARRIER HOTEL VAULT
            </text>
          </g>

          {/* ========================================================== */}
          {/* ZONE 3: Carrier Meet-Me Room & IXP Backbone Peering        */}
          {/* Coordinate Span: X 2000 to 3000                            */}
          {/* ========================================================== */}
          <g id="zone-3" transform="translate(2000, 0)">
            {/* Colocation Facility Interior */}
            <rect x="0" y="0" width="1000" height="520" fill="#FAF7F2" />

            {/* Raised Floor System */}
            <line x1="0" y1="440" x2="1000" y2="440" stroke="#252720" strokeWidth="3" />
            {[50, 150, 250, 350, 450, 550, 650, 750, 850, 950].map((x, i) => (
              <line key={i} x1={x} y1="440" x2={x} y2="520" stroke="#D8C7B0" strokeWidth="1.5" />
            ))}

            {/* Overhead Yellow FiberRunner Tray Hanging from Ceiling */}
            <path d="M 0,110 L 1000,110" stroke="#D7B96D" strokeWidth="12" strokeLinecap="round" />
            <text x="500" y="98" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
              OVERHEAD FIBERRUNNER CABLE TRAY // CARRIER CROSS-CONNECTS
            </text>

            {/* Zone Tag */}
            <text x="50" y="60" fill="#252720" fontSize="11" fontFamily="monospace" fontWeight="bold">
              PHYSICAL HOP 03 // CARRIER-NEUTRAL COLOCATION &amp; MEET-ME ROOM (MMR)
            </text>

            {/* Multi-Tenant Server Racks */}
            {[140, 320, 680, 860].map((rx, idx) => (
              <g key={idx} transform={`translate(${rx}, 180)`}>
                <rect x="-48" y="0" width="96" height="240" rx="6" fill="#F5F0E6" stroke="#252720" strokeWidth="2" />
                {[25, 65, 105, 145, 185].map((y, i) => (
                  <g key={i}>
                    <rect x="-40" y={y} width="80" height="28" rx="2" fill="#FAF7F2" stroke="#D8C7B0" strokeWidth="1" />
                    <circle cx="-28" cy={y + 14} r="3.5" fill={i % 2 === 0 ? "#8E9B80" : "#D7B96D"} />
                    <circle cx="-16" cy={y + 14} r="3.5" fill="#8E9B80" />
                    <line x1="10" y1={y + 14} x2="32" y2={y + 14} stroke="#C47745" strokeWidth="2" />
                  </g>
                ))}
                <text x="0" y="258" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  {idx === 0 ? "AS 15169 (GOOGLE)" : idx === 1 ? "AS 13335 (CF)" : idx === 2 ? "TIER-1 CORE" : "TRANSIT POE"}
                </text>
              </g>
            ))}

            {/* Core BGP FIB Peering Router Chassis */}
            <g transform="translate(500, 270)">
              <rect x="-65" y="-60" width="130" height="130" rx="12" fill="#252720" stroke="#C47745" strokeWidth="3" />
              <circle cx="0" cy="-14" r="22" fill="#C47745" fillOpacity="0.25" stroke="#C47745" strokeWidth="2.5" />
              <text x="0" y="-8" fill="#FAF7F2" fontSize="13" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                BGP
              </text>
              <text x="0" y="14" fill="#D7B96D" fontSize="9" fontFamily="monospace" textAnchor="middle">
                FIB ENGINE
              </text>
              <text x="0" y="42" fill="#FAF7F2" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                100+ Tbps
              </text>
            </g>
          </g>

          {/* ========================================================== */}
          {/* ZONE 4: Coastal Cable Landing Station & High-Voltage PFE   */}
          {/* Coordinate Span: X 3000 to 4000                            */}
          {/* ========================================================== */}
          <g id="zone-4" transform="translate(3000, 0)">
            {/* Shoreline Atmosphere & Sky */}
            <rect x="0" y="0" width="1000" height="520" fill="#FAF7F2" />

            {/* Dune Soil & Beach Sandy Bed */}
            <path d="M 0,380 Q 250,380 400,380 C 550,380 650,430 1000,430 L 1000,520 L 0,520 Z" fill="#E4D6C4" />

            {/* Ocean Surf Zone Water on Right (X: 650 to 1000) */}
            <path
              d="M 650,160 C 720,240 700,340 780,430 L 1000,430 L 1000,160 Z"
              fill="url(#surfGrad)"
            />
            <path d="M 680,240 C 730,280 770,320 860,370" stroke="#FAF7F2" strokeWidth="3" strokeDasharray="8 8" />

            {/* Zone Tag */}
            <text x="50" y="60" fill="#252720" fontSize="11" fontFamily="monospace" fontWeight="bold">
              PHYSICAL HOP 04 // SHORELINE CABLE LANDING STATION (CLS) &amp; 15,000V PFE
            </text>

            {/* Fortified Cable Landing Station Building */}
            <g transform="translate(180, 220)">
              <rect x="-110" y="-100" width="220" height="200" rx="10" fill="#FAF7F2" stroke="#252720" strokeWidth="3" />
              <rect x="-90" y="-70" width="45" height="50" rx="4" fill="#E4D6C4" stroke="#252720" strokeWidth="1.5" />
              <rect x="-25" y="-70" width="45" height="50" rx="4" fill="#E4D6C4" stroke="#252720" strokeWidth="1.5" />
              <rect x="40" y="-70" width="45" height="50" rx="4" fill="#E4D6C4" stroke="#252720" strokeWidth="1.5" />
              <rect x="-40" y="30" width="80" height="70" fill="#252720" />
              <text x="0" y="-115" fill="#252720" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                CABLE LANDING STATION (CLS)
              </text>
            </g>

            {/* High-Voltage Power Feed Equipment (15,000V DC PFE) */}
            <g transform="translate(420, 240)">
              <rect x="-65" y="-55" width="130" height="110" rx="8" fill="#252720" stroke="#C47745" strokeWidth="2.5" />
              <polygon points="-12,-20 10,-20 -4,0 12,0 -12,28 -4,6 -14,6" fill="#D7B96D" />
              <text x="0" y="36" fill="#FAF7F2" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                15,000V DC PFE
              </text>
              <text x="0" y="49" fill="#D7B96D" fontSize="8" fontFamily="monospace" textAnchor="middle">
                CONSTANT CURRENT FEED
              </text>
            </g>

            {/* Beach Manhole Vault */}
            <g transform="translate(620, 360)">
              <rect x="-40" y="-30" width="80" height="60" rx="6" fill="#FAF7F2" stroke="#252720" strokeWidth="2" />
              <text x="0" y="-38" fill="#252720" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                BEACH MANHOLE
              </text>
              <text x="0" y="5" fill="#C47745" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                HDD BORE
              </text>
            </g>
          </g>

          {/* ========================================================== */}
          {/* ZONE 5: Abyssal Ocean Seabed (-4,200m Depth & Repeater)    */}
          {/* Coordinate Span: X 4000 to 5000                            */}
          {/* ========================================================== */}
          <g id="zone-5" transform="translate(4000, 0)">
            {/* Deep Abyssal Sea Backdrop */}
            <rect x="0" y="0" width="1000" height="520" fill="url(#abyssGrad)" />

            {/* Ocean Depth Legend */}
            <text x="50" y="60" fill="#D7B96D" fontSize="11" fontFamily="monospace" fontWeight="bold">
              PHYSICAL HOP 05 // ABYSSAL SEABED (-4,200 METERS // 420 ATM PRESSURE)
            </text>

            {/* Seafloor Silt & Continental Slope Contour */}
            <path
              d="M 0,430 Q 300,410 500,430 T 1000,420 L 1000,520 L 0,520 Z"
              fill="#0E120F"
            />

            {/* Seafloor Bioluminescent Accents */}
            <circle cx="240" cy="380" r="2.5" fill="#8E9B80" opacity="0.6" filter="url(#packetGlow)" />
            <circle cx="380" cy="340" r="3" fill="#D7B96D" opacity="0.5" filter="url(#packetGlow)" />
            <circle cx="720" cy="360" r="2" fill="#8E9B80" opacity="0.7" filter="url(#packetGlow)" />
            <circle cx="880" cy="390" r="2.5" fill="#C47745" opacity="0.5" filter="url(#packetGlow)" />

            {/* Titanium Optical Repeater Pod (EDFA) */}
            <g transform="translate(500, 430)">
              {/* Outer Pressure Housing */}
              <rect x="-85" y="-28" width="170" height="56" rx="16" fill="#252720" stroke="#8E9B80" strokeWidth="2.5" />
              {/* Central Laser Erbium Core */}
              <line x1="-65" y1="0" x2="65" y2="0" stroke="#C47745" strokeWidth="4.5" filter="url(#packetGlow)" />
              <circle cx="0" cy="0" r="9" fill="#D7B96D" />
              <text x="0" y="-38" fill="#FAF7F2" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                EDFA OPTICAL REPEATER POD
              </text>
              <text x="0" y="44" fill="#8E9B80" fontSize="9" fontFamily="monospace" textAnchor="middle">
                AMPLIFIES PURE LIGHT EVERY 70km (NO ELECTRICAL CONVERSION)
              </text>
            </g>
          </g>

          {/* ========================================================== */}
          {/* ZONE 6: Hyperscale Cloud Center & Target Compute Server    */}
          {/* Coordinate Span: X 5000 to 6000                            */}
          {/* ========================================================== */}
          <g id="zone-6" transform="translate(5000, 0)">
            {/* Hyperscale Cloud Facility Hall */}
            <rect x="0" y="0" width="1000" height="520" fill="#FAF7F2" />

            {/* Clean Room Raised Access Floor */}
            <line x1="0" y1="440" x2="1000" y2="440" stroke="#252720" strokeWidth="3" />

            {/* Chilled Water Stainless Steel Overhead Loop */}
            <path d="M 0,100 L 1000,100" stroke="#8E9B80" strokeWidth="12" strokeLinecap="round" />
            <text x="500" y="88" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
              STAINLESS STEEL CHILLED WATER COOLING SYSTEM // 18°C DELTA
            </text>

            {/* Zone Tag */}
            <text x="50" y="50" fill="#252720" fontSize="11" fontFamily="monospace" fontWeight="bold">
              PHYSICAL HOP 06 // HYPERSCALE CLOUD CENTER &amp; COMPUTE HALL
            </text>

            {/* Cold Aisle Server Racks */}
            {[160, 340, 520, 720].map((rx, idx) => (
              <g key={idx} transform={`translate(${rx}, 170)`}>
                <rect x="-48" y="0" width="96" height="250" rx="6" fill="#F5F0E6" stroke="#252720" strokeWidth="2" />
                {[22, 60, 98, 136, 174, 212].map((y, i) => (
                  <g key={i}>
                    <rect x="-40" y={y} width="80" height="26" rx="2" fill="#FAF7F2" stroke="#D8C7B0" strokeWidth="1" />
                    <circle cx="-28" cy={y + 13} r="3" fill={i % 2 === 0 ? "#C47745" : "#8E9B80"} />
                    <circle cx="-16" cy={y + 13} r="3" fill="#8E9B80" />
                    <rect x="12" y={y + 9} width="22" height="7" fill="#D7B96D" fillOpacity="0.4" />
                  </g>
                ))}
                <text x="0" y="268" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                  RACK {idx + 1} ({idx === 1 ? "GPU CLUSTER" : idx === 2 ? "TARGET BLADE" : "NVMe STORAGE"})
                </text>
              </g>
            ))}

            {/* Top-of-Rack Switch Drop Wire */}
            <path d="M 300,106 L 300,140 L 520,140 L 520,260" stroke="#C47745" strokeWidth="4" strokeLinecap="round" fill="none" />

            {/* Target Server Blade with HTTP 200 Response */}
            <g transform="translate(520, 260)">
              <rect x="-55" y="-18" width="110" height="36" rx="6" fill="#C47745" stroke="#252720" strokeWidth="2.5" />
              <text x="0" y="4" fill="#FAF7F2" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                HTTP 200 OK
              </text>
              {/* Success Beacon Radiating Pulse */}
              <circle cx="0" cy="0" r="28" fill="none" stroke="#C47745" strokeWidth="2" strokeDasharray="4 4" opacity="0.8" />
            </g>

            {/* Destination Final Banner */}
            <g transform="translate(870, 280)">
              <rect x="-80" y="-45" width="160" height="90" rx="10" fill="#FAF7F2" stroke="#8E9B80" strokeWidth="2.5" />
              <text x="0" y="-18" fill="#8E9B80" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                EXPEDITION COMPLETE
              </text>
              <text x="0" y="8" fill="#252720" fontSize="16" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                48.2 ms
              </text>
              <text x="0" y="28" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="middle">
                ROUND-TRIP TIME
              </text>
            </g>
          </g>

          {/* ========================================================== */}
          {/* UNIFIED CONTINUOUS OPTICAL CONDUIT PATH                    */}
          {/* Unbroken connection physically binding all 6 zones!        */}
          {/* ========================================================== */}
          <path
            ref={pathRef}
            id="master-traceroute-path"
            d={masterPathD}
            fill="none"
            stroke="#C47745"
            strokeWidth="4"
            strokeLinecap="round"
            strokeOpacity="0.4"
          />

          {/* Active Travelling Packet Spark / Photon Pulse */}
          <g
            id="traveling-packet"
            transform={`translate(${packetPos.x}, ${packetPos.y})`}
            className="pointer-events-none"
          >
            {/* Outer Soft Light Blur */}
            <circle cx="0" cy="0" r="18" fill="#C47745" fillOpacity="0.35" filter="url(#packetGlow)" />
            {/* Mid Photon Pulse */}
            <circle cx="0" cy="0" r="9" fill="#D7B96D" />
            {/* Core Hot White Spark */}
            <circle cx="0" cy="0" r="4.5" fill="#FFFFFF" />
          </g>
        </g>
      </svg>
    </div>
  );
}
