"use client";

import { useRef, useEffect } from "react";

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
  const packetRef = useRef<SVGGElement | null>(null);

  // Unbroken continuous optical fiber conduit path across the entire 6000px world
  const masterPathD =
    "M 170,300 C 260,300 680,250 760,250 L 780,280 C 780,410 860,410 1000,410 L 1480,410 L 2000,410 C 2100,410 2150,260 2500,260 C 2700,260 2900,160 3000,160 L 3200,230 C 3350,230 3450,350 3550,350 C 3750,350 3850,420 4000,420 L 4500,420 C 4700,420 4900,310 5000,310 C 5150,310 5250,140 5300,140 L 5500,250";

  // Calculate packet position along continuous physical route without triggering React re-renders
  useEffect(() => {
    if (pathRef.current && packetRef.current) {
      try {
        const totalLength = pathRef.current.getTotalLength();
        const currentLength = Math.max(0, Math.min(1, packetProgress)) * totalLength;
        const pt = pathRef.current.getPointAtLength(currentLength);
        packetRef.current.setAttribute("transform", `translate(${pt.x}, ${pt.y})`);
      } catch {
        const approxX = 170 + packetProgress * (5500 - 170);
        packetRef.current.setAttribute("transform", `translate(${approxX}, 300)`);
      }
    }
  }, [packetProgress]);

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] max-h-[440px] rounded-2xl border border-warm-sand-border bg-ivory-light overflow-hidden shadow-inner flex items-center justify-center select-none">
      {/* Background Architectural Grid Coordinate Texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 pointer-events-none [background-image:linear-gradient(to_right,#E4D6C4_1px,transparent_1px),linear-gradient(to_bottom,#E4D6C4_1px,transparent_1px)] [background-size:24px_24px]"
      />

      {/* SVG Viewport with meet aspect ratio to prevent ANY cropping or cut off */}
      <svg
        className="w-full h-full p-2"
        viewBox="0 0 1000 480"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Signal Spark Glow Filter */}
          <filter id="packetGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
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
            <stop offset="0%" stopColor="#8E9B80" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#4A6558" stopOpacity="0.75" />
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
          {/* ZONE 1: Domestic Room & Device (0 to 1000)                  */}
          {/* ========================================================== */}
          <g id="zone-1" transform="translate(0, 0)">
            <rect x="0" y="0" width="1000" height="480" fill="#FAF7F2" fillOpacity="0.9" />
            <line x1="0" y1="35" x2="1000" y2="35" stroke="#E4D6C4" strokeWidth="1.5" />
            <line x1="0" y1="410" x2="1000" y2="410" stroke="#D8C7B0" strokeWidth="3" />

            {/* Clear, short scene title */}
            <g transform="translate(80, 55)">
              <rect x="-10" y="-18" width="160" height="26" rx="6" fill="#252720" />
              <text x="70" y="-1" fill="#FAF7F2" fontSize="12" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                Stage 1: Your Device
              </text>
            </g>

            {/* Desk Surface */}
            <rect x="80" y="350" width="360" height="20" rx="4" fill="#E4D6C4" stroke="#252720" strokeWidth="2" />
            <line x1="120" y1="370" x2="120" y2="410" stroke="#252720" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="380" y1="370" x2="380" y2="410" stroke="#252720" strokeWidth="3.5" strokeLinecap="round" />

            {/* Smartphone Handset */}
            <g transform="translate(170, 300)">
              <rect x="-32" y="-55" width="64" height="110" rx="10" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
              <rect x="-27" y="-46" width="54" height="92" rx="6" fill="#F5F0E6" />
              <rect x="-22" y="-34" width="44" height="54" rx="4" fill="#C47745" fillOpacity="0.15" stroke="#C47745" strokeWidth="1" />
              <circle cx="0" cy="-6" r="7" fill="#C47745" />
              <text x="0" y="32" fill="#252720" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                TAP TO SEND
              </text>
              <text x="0" y="72" fill="#252720" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">
                Smartphone
              </text>
            </g>

            {/* Airborne Radio Waves */}
            <g transform="translate(220, 300)">
              {[50, 95, 145, 200, 260, 330, 410].map((r, i) => (
                <path
                  key={i}
                  d={`M ${r * 0.45},-${r * 0.7} A ${r} ${r} 0 0 1 ${r * 0.45},${r * 0.7}`}
                  stroke="#C47745"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  opacity={0.8 - i * 0.1}
                  fill="none"
                />
              ))}
              <text x="180" y="-80" fill="#C47745" fontSize="11" fontFamily="sans-serif" fontWeight="600">
                Radio waves (Wi-Fi)
              </text>
            </g>

            {/* Home Wi-Fi Router */}
            <g transform="translate(760, 250)">
              <line x1="-30" y1="-8" x2="-50" y2="-65" stroke="#252720" strokeWidth="3" strokeLinecap="round" />
              <line x1="0" y1="-8" x2="0" y2="-75" stroke="#252720" strokeWidth="3" strokeLinecap="round" />
              <line x1="30" y1="-8" x2="50" y2="-65" stroke="#252720" strokeWidth="3" strokeLinecap="round" />
              <rect x="-55" y="-16" width="110" height="46" rx="8" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
              <circle cx="-32" cy="0" r="3" fill="#8E9B80" />
              <circle cx="-16" cy="0" r="3" fill="#8E9B80" />
              <circle cx="0" cy="0" r="3" fill="#C47745" />
              <circle cx="16" cy="0" r="3" fill="#8E9B80" />
              <circle cx="32" cy="0" r="3" fill="#D7B96D" />
              <text x="0" y="48" fill="#252720" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                Home Wi-Fi Router
              </text>
            </g>

            {/* Transition wall boundary */}
            <rect x="940" y="35" width="60" height="445" fill="#D8C7B0" opacity="0.45" />
            <line x1="940" y1="35" x2="940" y2="480" stroke="#252720" strokeWidth="2" />
            <text x="970" y="230" fill="#5E6254" fontSize="10" fontFamily="sans-serif" textAnchor="middle" transform="rotate(90, 970, 230)" fontWeight="600">
              Wall to street
            </text>
          </g>

          {/* ========================================================== */}
          {/* ZONE 2: Local Network & Street Conduit (1000 to 2000)      */}
          {/* ========================================================== */}
          <g id="zone-2" transform="translate(1000, 0)">
            {/* Street surface */}
            <rect x="0" y="0" width="1000" height="100" fill="#252720" />
            <line x1="0" y1="50" x2="1000" y2="50" stroke="#FAF7F2" strokeWidth="2.5" strokeDasharray="20 20" />
            <line x1="0" y1="100" x2="1000" y2="100" stroke="#D8C7B0" strokeWidth="2.5" />

            {/* Manhole */}
            <g transform="translate(280, 100)">
              <rect x="-35" y="-6" width="70" height="12" rx="3" fill="#5E6254" stroke="#FAF7F2" strokeWidth="1.5" />
              <text x="0" y="3" fill="#FAF7F2" fontSize="7" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                TELECOM
              </text>
            </g>

            {/* Soil underground */}
            <rect x="0" y="100" width="1000" height="380" fill="#D8C7B0" opacity="0.45" />

            {/* Clear, short scene title */}
            <g transform="translate(80, 50)">
              <rect x="-10" y="-18" width="185" height="26" rx="6" fill="#FAF7F2" stroke="#252720" strokeWidth="1.5" />
              <text x="82" y="-1" fill="#252720" fontSize="12" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                Stage 2: Local Network
              </text>
            </g>

            {/* Excavated trench conduit */}
            <path d="M 0,370 L 1000,370" stroke="#E4D6C4" strokeWidth="44" strokeLinecap="round" />
            <path d="M 0,410 L 1000,410" stroke="#252720" strokeWidth="14" strokeLinecap="round" />
            <path d="M 0,410 L 1000,410" stroke="#FAF7F2" strokeWidth="8" strokeLinecap="round" />

            {/* Neighborhood Splitter Box */}
            <g transform="translate(480, 410)">
              <rect x="-55" y="-38" width="110" height="76" rx="8" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="16" fill="#C47745" fillOpacity="0.2" stroke="#C47745" strokeWidth="2" />
              <text x="0" y="-48" fill="#252720" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                Neighborhood Splitter
              </text>
              <text x="0" y="4" fill="#C47745" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                Glass Fiber
              </text>
              <text x="0" y="55" fill="#5E6254" fontSize="10" fontFamily="sans-serif" textAnchor="middle">
                Shares line with nearby homes
              </text>
            </g>

            <text x="250" y="375" fill="#5E6254" fontSize="11" fontFamily="sans-serif" fontWeight="600">
              Buried cable conduit (under street)
            </text>
          </g>

          {/* ========================================================== */}
          {/* ZONE 3: Where Networks Connect (2000 to 3000)              */}
          {/* ========================================================== */}
          <g id="zone-3" transform="translate(2000, 0)">
            <rect x="0" y="0" width="1000" height="480" fill="#FAF7F2" />
            <line x1="0" y1="410" x2="1000" y2="410" stroke="#252720" strokeWidth="2.5" />

            {/* Yellow overhead cable tray */}
            <path d="M 0,110 L 1000,110" stroke="#D7B96D" strokeWidth="10" strokeLinecap="round" />
            <text x="500" y="100" fill="#5E6254" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">
              Overhead fiber connection trays
            </text>

            {/* Clear, short scene title */}
            <g transform="translate(80, 50)">
              <rect x="-10" y="-18" width="220" height="26" rx="6" fill="#252720" />
              <text x="100" y="-1" fill="#FAF7F2" fontSize="12" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                Stage 3: Where Networks Connect
              </text>
            </g>

            {/* Connected company server racks */}
            {[150, 320, 680, 850].map((rx, idx) => (
              <g key={idx} transform={`translate(${rx}, 180)`}>
                <rect x="-42" y="0" width="84" height="215" rx="5" fill="#F5F0E6" stroke="#252720" strokeWidth="2" />
                {[20, 58, 96, 134, 172].map((y, i) => (
                  <g key={i}>
                    <rect x="-35" y={y} width="70" height="24" rx="2" fill="#FAF7F2" stroke="#D8C7B0" strokeWidth="1" />
                    <circle cx="-25" cy={y + 12} r="3" fill={i % 2 === 0 ? "#8E9B80" : "#D7B96D"} />
                    <circle cx="-14" cy={y + 12} r="3" fill="#8E9B80" />
                    <line x1="8" y1={y + 12} x2="28" y2={y + 12} stroke="#C47745" strokeWidth="2" />
                  </g>
                ))}
                <text x="0" y="232" fill="#5E6254" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">
                  {idx === 0 ? "Network A" : idx === 1 ? "Network B" : idx === 2 ? "Global Transit" : "Cloud Partner"}
                </text>
              </g>
            ))}

            {/* Central Exchange Router */}
            <g transform="translate(500, 260)">
              <rect x="-58" y="-52" width="116" height="116" rx="10" fill="#252720" stroke="#C47745" strokeWidth="2.5" />
              <circle cx="0" cy="-12" r="20" fill="#C47745" fillOpacity="0.25" stroke="#C47745" strokeWidth="2" />
              <text x="0" y="-7" fill="#FAF7F2" fontSize="12" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                ROUTER
              </text>
              <text x="0" y="12" fill="#D7B96D" fontSize="8" fontFamily="sans-serif" textAnchor="middle">
                Traffic Switch
              </text>
              <text x="0" y="38" fill="#FAF7F2" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                100+ Tbps
              </text>
              <text x="0" y="80" fill="#252720" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                Shared Exchange Hub
              </text>
            </g>
          </g>

          {/* ========================================================== */}
          {/* ZONE 4: Coastal Cable Station (3000 to 4000)                */}
          {/* ========================================================== */}
          <g id="zone-4" transform="translate(3000, 0)">
            <rect x="0" y="0" width="1000" height="480" fill="#FAF7F2" />

            {/* Beach sand ground */}
            <path d="M 0,360 Q 250,360 400,360 C 550,360 650,400 1000,400 L 1000,480 L 0,480 Z" fill="#E4D6C4" />

            {/* Ocean waters on right */}
            <path
              d="M 640,150 C 710,230 690,320 770,400 L 1000,400 L 1000,150 Z"
              fill="url(#surfGrad)"
            />
            <path d="M 670,220 C 720,260 760,300 850,345" stroke="#FAF7F2" strokeWidth="2.5" strokeDasharray="6 6" />

            {/* Clear, short scene title - comfortably placed inside frame */}
            <g transform="translate(80, 50)">
              <rect x="-10" y="-18" width="200" height="26" rx="6" fill="#252720" />
              <text x="90" y="-1" fill="#FAF7F2" fontSize="12" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                Stage 4: Coastal Station
              </text>
            </g>

            {/* Fortified Cable Landing Station Building */}
            <g transform="translate(180, 210)">
              <rect x="-90" y="-85" width="180" height="170" rx="8" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
              <rect x="-70" y="-60" width="36" height="40" rx="4" fill="#E4D6C4" stroke="#252720" strokeWidth="1.5" />
              <rect x="-18" y="-60" width="36" height="40" rx="4" fill="#E4D6C4" stroke="#252720" strokeWidth="1.5" />
              <rect x="34" y="-60" width="36" height="40" rx="4" fill="#E4D6C4" stroke="#252720" strokeWidth="1.5" />
              <rect x="-32" y="25" width="64" height="60" fill="#252720" />
              <text x="0" y="-98" fill="#252720" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                Coastal Cable Station
              </text>
            </g>

            {/* High-Voltage Power Unit */}
            <g transform="translate(420, 230)">
              <rect x="-55" y="-48" width="110" height="96" rx="8" fill="#252720" stroke="#C47745" strokeWidth="2" />
              <polygon points="-10,-16 8,-16 -3,0 10,0 -10,24 -3,4 -11,4" fill="#D7B96D" />
              <text x="0" y="32" fill="#FAF7F2" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                Power Unit
              </text>
              <text x="0" y="44" fill="#D7B96D" fontSize="8" fontFamily="sans-serif" textAnchor="middle">
                Powers ocean cable
              </text>
              <text x="0" y="65" fill="#252720" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                15,000 Volts
              </text>
            </g>

            {/* Beach entry point */}
            <g transform="translate(620, 350)">
              <rect x="-35" y="-25" width="70" height="50" rx="5" fill="#FAF7F2" stroke="#252720" strokeWidth="2" />
              <text x="0" y="-32" fill="#252720" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                Beach Vault
              </text>
              <text x="0" y="4" fill="#C47745" fontSize="8" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">
                Armored cable
              </text>
            </g>

            <text x="760" y="210" fill="#FAF7F2" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
              Ocean Water
            </text>
          </g>

          {/* ========================================================== */}
          {/* ZONE 5: Cable Beneath the Ocean (4000 to 5000)             */}
          {/* ========================================================== */}
          <g id="zone-5" transform="translate(4000, 0)">
            <rect x="0" y="0" width="1000" height="480" fill="url(#abyssGrad)" />

            {/* Clear, short scene title */}
            <g transform="translate(80, 50)">
              <rect x="-10" y="-18" width="200" height="26" rx="6" fill="#1B2822" stroke="#D7B96D" strokeWidth="1.5" />
              <text x="90" y="-1" fill="#D7B96D" fontSize="12" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                Stage 5: Ocean Cable
              </text>
            </g>

            {/* Seafloor Silt Contour */}
            <path
              d="M 0,400 Q 300,380 500,400 T 1000,390 L 1000,480 L 0,480 Z"
              fill="#0E120F"
            />

            {/* Ocean Depth indicator */}
            <text x="500" y="100" fill="#8E9B80" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">
              Deep ocean floor: -4,000 meters
            </text>

            {/* Signal Amplifier Pod (Repeater) */}
            <g transform="translate(500, 410)">
              <rect x="-75" y="-24" width="150" height="48" rx="14" fill="#252720" stroke="#8E9B80" strokeWidth="2.5" />
              <line x1="-55" y1="0" x2="55" y2="0" stroke="#C47745" strokeWidth="4" filter="url(#packetGlow)" />
              <circle cx="0" cy="0" r="8" fill="#D7B96D" />
              <text x="0" y="-34" fill="#FAF7F2" fontSize="11" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                Laser Signal Amplifier
              </text>
              <text x="0" y="40" fill="#8E9B80" fontSize="10" fontFamily="sans-serif" textAnchor="middle">
                Boosts fading light every 50 miles
              </text>
            </g>
          </g>

          {/* ========================================================== */}
          {/* ZONE 6: The Data Centre (5000 to 6000)                     */}
          {/* ========================================================== */}
          <g id="zone-6" transform="translate(5000, 0)">
            <rect x="0" y="0" width="1000" height="480" fill="#FAF7F2" />
            <line x1="0" y1="410" x2="1000" y2="410" stroke="#252720" strokeWidth="2.5" />

            {/* Chilled water overhead pipe */}
            <path d="M 0,100 L 1000,100" stroke="#8E9B80" strokeWidth="10" strokeLinecap="round" />
            <text x="500" y="90" fill="#5E6254" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">
              Cooling water loop
            </text>

            {/* Clear, short scene title */}
            <g transform="translate(80, 50)">
              <rect x="-10" y="-18" width="180" height="26" rx="6" fill="#252720" />
              <text x="80" y="-1" fill="#FAF7F2" fontSize="12" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                Stage 6: The Data Centre
              </text>
            </g>

            {/* Server racks in data hall */}
            {[160, 340, 520, 720].map((rx, idx) => (
              <g key={idx} transform={`translate(${rx}, 160)`}>
                <rect x="-42" y="0" width="84" height="230" rx="5" fill="#F5F0E6" stroke="#252720" strokeWidth="2" />
                {[20, 56, 92, 128, 164, 200].map((y, i) => (
                  <g key={i}>
                    <rect x="-35" y={y} width="70" height="24" rx="2" fill="#FAF7F2" stroke="#D8C7B0" strokeWidth="1" />
                    <circle cx="-25" cy={y + 12} r="3" fill={i % 2 === 0 ? "#C47745" : "#8E9B80"} />
                    <circle cx="-14" cy={y + 12} r="3" fill="#8E9B80" />
                    <rect x="10" y={y + 9} width="20" height="6" fill="#D7B96D" fillOpacity="0.4" />
                  </g>
                ))}
                <text x="0" y="246" fill="#5E6254" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">
                  {idx === 2 ? "Target Server" : `Rack ${idx + 1}`}
                </text>
              </g>
            ))}

            {/* Drop wire into target blade */}
            <path d="M 300,105 L 300,135 L 520,135 L 520,250" stroke="#C47745" strokeWidth="3.5" strokeLinecap="round" fill="none" />

            {/* Target Server Blade */}
            <g transform="translate(520, 250)">
              <rect x="-50" y="-16" width="100" height="32" rx="6" fill="#C47745" stroke="#252720" strokeWidth="2" />
              <text x="0" y="4" fill="#FAF7F2" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                REQUEST ANSWERED
              </text>
              <circle cx="0" cy="0" r="24" fill="none" stroke="#C47745" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8" />
            </g>

            {/* Response time card */}
            <g transform="translate(860, 260)">
              <rect x="-70" y="-40" width="140" height="80" rx="8" fill="#FAF7F2" stroke="#8E9B80" strokeWidth="2" />
              <text x="0" y="-15" fill="#8E9B80" fontSize="9" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                JOURNEY COMPLETE
              </text>
              <text x="0" y="10" fill="#252720" fontSize="15" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">
                48 milliseconds
              </text>
              <text x="0" y="26" fill="#5E6254" fontSize="8" fontFamily="sans-serif" textAnchor="middle">
                Round-trip time
              </text>
            </g>
          </g>

          {/* ========================================================== */}
          {/* MASTER OPTICAL PATH (Unbroken route across all 6 stages)   */}
          {/* ========================================================== */}
          <path
            ref={pathRef}
            id="master-traceroute-path"
            d={masterPathD}
            fill="none"
            stroke="#C47745"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeOpacity="0.45"
          />

          {/* Active Travelling Signal Spark */}
          <g
            ref={packetRef}
            id="traveling-packet"
            transform="translate(170, 300)"
            style={{
              transition: isAnimatingDirectly
                ? "transform 0.65s cubic-bezier(0.25, 1, 0.5, 1)"
                : "none",
            }}
            className="pointer-events-none"
          >
            <circle cx="0" cy="0" r="16" fill="#C47745" fillOpacity="0.35" filter="url(#packetGlow)" />
            <circle cx="0" cy="0" r="8" fill="#D7B96D" />
            <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
          </g>
        </g>
      </svg>
    </div>
  );
}
