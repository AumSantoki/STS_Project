"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { TracerouteStage } from "@/types/traceroute";

interface PhysicalEnvironmentSceneProps {
  stage: TracerouteStage;
  direction: number;
}

export function PhysicalEnvironmentScene({
  stage,
  direction,
}: PhysicalEnvironmentSceneProps) {
  const shouldReduceMotion = useReducedMotion();

  // Motion variants for spatial environment transformation
  const sceneVariants: Variants = {
    initial: (dir: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? 50 : -50,
      scale: shouldReduceMotion ? 1 : 0.98,
    }),
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.45,
        ease: "easeOut",
      },
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: shouldReduceMotion ? 0 : dir > 0 ? -50 : 50,
      scale: shouldReduceMotion ? 1 : 0.98,
      transition: {
        duration: shouldReduceMotion ? 0.05 : 0.3,
        ease: "easeIn",
      },
    }),
  };

  return (
    <div
      role="img"
      aria-label={`Visual illustration: ${stage.title}`}
      className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] rounded-2xl border border-warm-sand-border overflow-hidden shadow-sm flex items-center justify-center select-none"
    >
      <motion.div
        key={stage.id}
        custom={direction}
        variants={sceneVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="absolute inset-0 w-full h-full flex items-center justify-center"
      >
        {/* Render stage-specific physical environment */}
        {stage.stageNumber === 1 && <Stage1DeviceRF shouldReduceMotion={shouldReduceMotion} />}
        {stage.stageNumber === 2 && <Stage2LastMileFiber shouldReduceMotion={shouldReduceMotion} />}
        {stage.stageNumber === 3 && <Stage3CarrierIXP shouldReduceMotion={shouldReduceMotion} />}
        {stage.stageNumber === 4 && <Stage4LandingStation shouldReduceMotion={shouldReduceMotion} />}
        {stage.stageNumber === 5 && <Stage5AbyssalOcean shouldReduceMotion={shouldReduceMotion} />}
        {stage.stageNumber === 6 && <Stage6HyperscaleCenter shouldReduceMotion={shouldReduceMotion} />}
      </motion.div>
    </div>
  );
}

// ============================================================================
// STAGE 1: The User's Device & Airborne Radio Frequency Space
// ============================================================================
function Stage1DeviceRF({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-ivory via-ivory-light to-warm-sand/40 p-6 flex items-center justify-center">
      {/* Background Room Atmosphere */}
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(#C47745_1px,transparent_1px)] [background-size:20px_20px]" />

      <svg
        className="w-full h-full max-w-2xl max-h-[380px]"
        viewBox="0 0 700 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="phoneGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C47745" />
            <stop offset="100%" stopColor="#D7B96D" />
          </linearGradient>
        </defs>

        {/* Desk Surface */}
        <line x1="80" y1="320" x2="620" y2="320" stroke="#D8C7B0" strokeWidth="3" strokeLinecap="round" />

        {/* User's Smartphone on Left */}
        <g transform="translate(140, 160)">
          {/* Phone Body */}
          <rect x="-35" y="-65" width="70" height="130" rx="12" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
          <rect x="-30" y="-55" width="60" height="110" rx="6" fill="#F5F0E6" />
          <circle cx="0" cy="48" r="3" fill="#252720" />
          {/* Screen with outgoing packet */}
          <rect x="-24" y="-35" width="48" height="60" rx="4" fill="#C47745" fillOpacity="0.15" stroke="#C47745" strokeWidth="1" />
          <circle cx="0" cy="-5" r="8" fill="url(#phoneGlow)" />
          <text x="0" y="28" fill="#252720" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            CLICK SENT
          </text>
        </g>

        {/* Radiating Electromagnetic Radio Waves (2.4GHz / 5GHz) */}
        <g transform="translate(180, 160)">
          {[40, 80, 120, 160, 200].map((radius, idx) => (
            <path
              key={idx}
              d={`M ${radius * 0.4},-${radius * 0.7} A ${radius} ${radius} 0 0 1 ${radius * 0.4},${radius * 0.7}`}
              stroke="#C47745"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity={0.7 - idx * 0.12}
            >
              {!shouldReduceMotion && (
                <animate
                  attributeName="stroke-dashoffset"
                  values="16;0"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              )}
            </path>
          ))}
        </g>

        {/* Home Wi-Fi 6 Router on Right */}
        <g transform="translate(500, 230)">
          {/* Router Antennas */}
          <line x1="-30" y1="-10" x2="-45" y2="-70" stroke="#252720" strokeWidth="3" strokeLinecap="round" />
          <line x1="0" y1="-10" x2="0" y2="-75" stroke="#252720" strokeWidth="3" strokeLinecap="round" />
          <line x1="30" y1="-10" x2="45" y2="-70" stroke="#252720" strokeWidth="3" strokeLinecap="round" />

          {/* Router Body */}
          <rect x="-60" y="-15" width="120" height="40" rx="8" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
          <line x1="-50" y1="12" x2="50" y2="12" stroke="#D8C7B0" strokeWidth="1.5" />

          {/* Status LEDs */}
          <circle cx="-35" cy="0" r="3" fill="#8E9B80" />
          <circle cx="-20" cy="0" r="3" fill="#8E9B80" />
          <circle cx="-5" cy="0" r="3" fill="#C47745">
            {!shouldReduceMotion && (
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1s" repeatCount="indefinite" />
            )}
          </circle>
          <circle cx="10" cy="0" r="3" fill="#D7B96D" />

          <text x="0" y="45" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            WIFI-6 GATEWAY (NAT / RF)
          </text>
        </g>

        {/* Optical/Ethernet Drop Cable Snaking Out */}
        <path
          d="M 540,255 C 570,280 590,300 660,310"
          stroke="#C47745"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <text x="600" y="295" fill="#C47745" fontSize="9" fontFamily="monospace" fontWeight="bold">
          TO STREET TRENCH →
        </text>
      </svg>
    </div>
  );
}

// ============================================================================
// STAGE 2: Municipal Street Trench & Last-Mile Optical Fiber
// ============================================================================
function Stage2LastMileFiber({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-ivory via-warm-sand/30 to-warm-sand/60 p-6 flex items-center justify-center">
      <svg
        className="w-full h-full max-w-2xl max-h-[380px]"
        viewBox="0 0 700 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="groundStrata" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D8C7B0" />
            <stop offset="40%" stopColor="#C8B39B" />
            <stop offset="100%" stopColor="#A89279" />
          </linearGradient>
        </defs>

        {/* Street Surface / Curb */}
        <rect x="50" y="80" width="600" height="30" fill="#E4D6C4" stroke="#252720" strokeWidth="2" />
        <line x1="50" y1="95" x2="650" y2="95" stroke="#FAF7F2" strokeWidth="2" strokeDasharray="15 15" />
        <text x="120" y="70" fill="#252720" fontSize="10" fontFamily="monospace" fontWeight="bold">
          MUNICIPAL STREET &amp; UTILITY EASEMENT
        </text>

        {/* Subterranean Earth Strata */}
        <rect x="50" y="110" width="600" height="240" fill="url(#groundStrata)" opacity="0.6" />

        {/* Excavated Utility Trench */}
        <path d="M 160,110 L 190,260 L 510,260 L 540,110" fill="#E4D6C4" fillOpacity="0.4" stroke="#8E9B80" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="350" y="150" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle">
          SUBTERRANEAN MICRO-CONDUIT (1.2m DEPTH)
        </text>

        {/* Fiber Cable Conduit Tube */}
        <path d="M 80,240 C 240,240 300,240 620,240" stroke="#252720" strokeWidth="14" strokeLinecap="round" />
        <path d="M 80,240 C 240,240 300,240 620,240" stroke="#FAF7F2" strokeWidth="10" strokeLinecap="round" />

        {/* Exposed 9-Micron Glass Core Laser Beam */}
        <path d="M 80,240 C 240,240 300,240 620,240" stroke="#C47745" strokeWidth="4" strokeLinecap="round" />

        {/* Traveling Optical Photon Pulse */}
        {!shouldReduceMotion && (
          <circle cy="240" r="6" fill="#D7B96D" filter="drop-shadow(0 0 6px #C47745)">
            <animate attributeName="cx" values="80;620" dur="2s" repeatCount="indefinite" />
          </circle>
        )}

        {/* Passive Optical Splitter Cabinet (GPON) */}
        <g transform="translate(350, 240)">
          <rect x="-35" y="-30" width="70" height="60" rx="6" fill="#FAF7F2" stroke="#252720" strokeWidth="2" />
          <circle cx="0" cy="0" r="10" fill="#C47745" fillOpacity="0.2" stroke="#C47745" strokeWidth="1.5" />
          <text x="0" y="-36" fill="#252720" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            1:32 GPON OPTICAL SPLITTER
          </text>
          <text x="0" y="4" fill="#C47745" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            1310/1490nm
          </text>
        </g>
      </svg>
    </div>
  );
}

// ============================================================================
// STAGE 3: Internet Exchange Point & Carrier Meet-Me Room
// ============================================================================
function Stage3CarrierIXP({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-ivory via-ivory-light to-warm-sand/40 p-6 flex items-center justify-center">
      <svg
        className="w-full h-full max-w-2xl max-h-[380px]"
        viewBox="0 0 700 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Colocation Facility Floor & Grid */}
        <rect x="60" y="60" width="580" height="280" rx="10" fill="#FAF7F2" stroke="#252720" strokeWidth="2" />
        <line x1="60" y1="310" x2="640" y2="310" stroke="#D8C7B0" strokeWidth="2" />

        <text x="80" y="90" fill="#252720" fontSize="11" fontFamily="monospace" fontWeight="bold">
          CARRIER-NEUTRAL COLOCATION // MEET-ME ROOM (MMR)
        </text>

        {/* Server Racks (Cages) */}
        {[110, 240, 430, 560].map((x, idx) => (
          <g key={idx} transform={`translate(${x}, 120)`}>
            {/* 42U Rack Outline */}
            <rect x="-35" y="0" width="70" height="170" rx="4" fill="#F5F0E6" stroke="#252720" strokeWidth="2" />
            {/* Server Blade Trays */}
            {[20, 50, 80, 110, 140].map((y, i) => (
              <g key={i}>
                <rect x="-30" y={y} width="60" height="22" rx="2" fill="#FAF7F2" stroke="#D8C7B0" strokeWidth="1" />
                <circle cx="-20" cy={y + 11} r="2.5" fill={i % 2 === 0 ? "#8E9B80" : "#D7B96D"} />
                <circle cx="-12" cy={y + 11} r="2.5" fill="#8E9B80" />
                <line x1="5" y1={y + 11} x2="22" y2={y + 11} stroke="#C47745" strokeWidth="2" />
              </g>
            ))}
            <text x="0" y="185" fill="#5E6254" fontSize="8" fontFamily="monospace" textAnchor="middle">
              AS {idx === 1 ? "15169" : idx === 2 ? "13335" : "TIER-1"}
            </text>
          </g>
        ))}

        {/* Central Core BGP Peering Switch Fabric */}
        <g transform="translate(340, 200)">
          <rect x="-40" y="-45" width="80" height="90" rx="8" fill="#252720" stroke="#C47745" strokeWidth="2" />
          <circle cx="0" cy="-10" r="16" fill="#C47745" fillOpacity="0.2" stroke="#C47745" strokeWidth="2" />
          <text x="0" y="-7" fill="#FAF7F2" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            BGP
          </text>
          <text x="0" y="8" fill="#D7B96D" fontSize="7" fontFamily="monospace" textAnchor="middle">
            ROUTING FIB
          </text>
          <text x="0" y="28" fill="#FAF7F2" fontSize="8" fontFamily="monospace" textAnchor="middle">
            100+ Tbps
          </text>
        </g>

        {/* Yellow Optical Fiber Cross-Connect Patching (Airflow Bridge) */}
        <path
          d="M 145,170 C 220,130 260,180 300,190"
          stroke="#D7B96D"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 380,210 C 420,220 460,170 525,180"
          stroke="#C47745"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {!shouldReduceMotion && (
          <circle r="4" fill="#C47745">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 145,170 C 220,130 260,180 300,190" />
          </circle>
        )}
      </svg>
    </div>
  );
}

// ============================================================================
// STAGE 4: Coastal Cable Landing Station (CLS) & 15,000V Power Feed
// ============================================================================
function Stage4LandingStation({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-ivory via-warm-sand/30 to-warm-sand/70 p-6 flex items-center justify-center">
      <svg
        className="w-full h-full max-w-2xl max-h-[380px]"
        viewBox="0 0 700 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ocean Coastline & Surf Waves on Right */}
        <path
          d="M 460,120 C 490,160 480,240 520,340 L 660,340 L 660,120 Z"
          fill="#8E9B80"
          fillOpacity="0.2"
        />
        <path
          d="M 480,180 C 510,210 530,230 580,250"
          stroke="#8E9B80"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />
        <text x="560" y="160" fill="#252720" fontSize="10" fontFamily="monospace" fontWeight="bold">
          ATLANTIC SURF ZONE
        </text>

        {/* Fortified Landing Station Building on Left */}
        <g transform="translate(140, 160)">
          <rect x="-80" y="-80" width="160" height="170" rx="8" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
          {/* Windows / Grilles */}
          <rect x="-65" y="-60" width="35" height="40" rx="3" fill="#E4D6C4" stroke="#252720" strokeWidth="1" />
          <rect x="-15" y="-60" width="35" height="40" rx="3" fill="#E4D6C4" stroke="#252720" strokeWidth="1" />
          {/* Security Gate */}
          <rect x="-30" y="20" width="60" height="70" fill="#252720" />

          <text x="0" y="-95" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            CABLE LANDING STATION (CLS)
          </text>
        </g>

        {/* High Voltage Power Feed Equipment (PFE) Module */}
        <g transform="translate(310, 210)">
          <rect x="-45" y="-40" width="90" height="80" rx="6" fill="#252720" stroke="#C47745" strokeWidth="2" />
          <polygon points="-8,-15 5,-15 -2,-2 8,-2 -8,18 -3,3 -10,3" fill="#D7B96D" />
          <text x="0" y="28" fill="#FAF7F2" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            15,000V DC PFE
          </text>
        </g>

        {/* Shore Beach Manhole Conduit plunging into sea */}
        <path
          d="M 220,240 L 265,240 L 355,240 C 430,240 480,290 640,320"
          stroke="#C47745"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Steel Armoring Coil around shore cable */}
        <path
          d="M 440,265 L 450,285 M 460,275 L 470,295 M 480,285 L 490,305 M 500,295 L 510,315"
          stroke="#252720"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <text x="470" y="345" fill="#252720" fontSize="9" fontFamily="monospace" fontWeight="bold">
          DOUBLE-ARMORED SHORE CABLE
        </text>

        {!shouldReduceMotion && (
          <circle r="4.5" fill="#D7B96D">
            <animateMotion dur="2.2s" repeatCount="indefinite" path="M 220,240 L 265,240 L 355,240 C 430,240 480,290 640,320" />
          </circle>
        )}
      </svg>
    </div>
  );
}

// ============================================================================
// STAGE 5: The Abyssal Ocean Floor (4,000m Depth & Optical Repeaters)
// ============================================================================
function Stage5AbyssalOcean({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="relative w-full h-full bg-[#131713] p-6 flex items-center justify-center text-ivory">
      {/* Abyssal Depth Indicator */}
      <div className="absolute top-5 left-6 flex items-center gap-2 font-mono text-xs text-muted-gold font-bold">
        <span className="h-2 w-2 rounded-full bg-burnt-orange animate-pulse" />
        <span>ABYSSAL ZONE // DEPTH: -4,200 METERS</span>
      </div>

      <svg
        className="w-full h-full max-w-2xl max-h-[380px]"
        viewBox="0 0 700 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="repeaterGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34372E" />
            <stop offset="50%" stopColor="#5E6254" />
            <stop offset="100%" stopColor="#34372E" />
          </linearGradient>

          <filter id="laserBeamGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Abyssal Seafloor Silt Contour */}
        <path
          d="M 50,300 Q 200,280 350,310 T 650,290 L 650,370 L 50,370 Z"
          fill="#1E231C"
        />
        <text x="100" y="340" fill="#5E6254" fontSize="9" fontFamily="monospace">
          OCEANIC SILT &amp; BASALT CRUST
        </text>

        {/* Submarine Cable Running on Seafloor */}
        <path
          d="M 60,260 Q 200,240 300,250 L 400,250 Q 520,260 640,245"
          stroke="#C47745"
          strokeWidth="3.5"
          fill="none"
        />

        {/* Pure Silica Optical Glass Core Beam inside cable */}
        <path
          d="M 60,260 Q 200,240 300,250 L 400,250 Q 520,260 640,245"
          stroke="#D7B96D"
          strokeWidth="1.5"
          filter="url(#laserBeamGlow)"
          fill="none"
        />

        {/* EDFA Titanium Optical Repeater Pod on Seabed */}
        <g transform="translate(350, 250)">
          {/* Cylindrical Beryllium-Copper / Titanium Pressure Vessel */}
          <rect x="-60" y="-18" width="120" height="36" rx="10" fill="url(#repeaterGrad)" stroke="#8E9B80" strokeWidth="2" />
          <line x1="-50" y1="0" x2="50" y2="0" stroke="#C47745" strokeWidth="3" filter="url(#laserBeamGlow)" />
          {/* Laser Diode Glow Window */}
          <circle cx="0" cy="0" r="6" fill="#D7B96D" />

          <text x="0" y="-28" fill="#F5F0E6" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            EDFA OPTICAL AMPLIFIER REPEATER
          </text>
          <text x="0" y="32" fill="#8E9B80" fontSize="8" fontFamily="monospace" textAnchor="middle">
            AMPLIFICATION EVERY 70km // NO ELECTRICAL RE-CONVERSION
          </text>
        </g>

        {/* Moving Optical Infrared Photon Pulse */}
        {!shouldReduceMotion && (
          <circle r="5" fill="#D7B96D" filter="url(#laserBeamGlow)">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M 60,260 Q 200,240 300,250 L 400,250 Q 520,260 640,245"
            />
          </circle>
        )}
      </svg>
    </div>
  );
}

// ============================================================================
// STAGE 6: Hyperscale Compute Hall & Cooling Grid
// ============================================================================
function Stage6HyperscaleCenter({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-ivory via-ivory-light to-warm-sand/50 p-6 flex items-center justify-center">
      <svg
        className="w-full h-full max-w-2xl max-h-[380px]"
        viewBox="0 0 700 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Data Hall Enclosure Perspective */}
        <rect x="70" y="60" width="560" height="280" rx="10" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
        <line x1="70" y1="300" x2="630" y2="300" stroke="#D8C7B0" strokeWidth="2" />

        <text x="90" y="90" fill="#252720" fontSize="11" fontFamily="monospace" fontWeight="bold">
          HYPERSCALE DATA HALL // COLD-AISLE CONTAINMENT (40MW FACILITY)
        </text>

        {/* Chilled Water Overhead Pipe Loop */}
        <path
          d="M 90,110 L 610,110"
          stroke="#8E9B80"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <text x="350" y="105" fill="#8E9B80" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          CHILLED WATER LOOP // 18°C DELTA
        </text>

        {/* Server Racks Inside Cold Aisle */}
        {[140, 280, 420, 560].map((x, idx) => (
          <g key={idx} transform={`translate(${x}, 140)`}>
            <rect x="-35" y="0" width="70" height="150" rx="4" fill="#F5F0E6" stroke="#252720" strokeWidth="2" />
            {/* Server Trays with Status LEDs */}
            {[15, 45, 75, 105].map((y, i) => (
              <g key={i}>
                <rect x="-30" y={y} width="60" height="20" rx="2" fill="#FAF7F2" stroke="#D8C7B0" strokeWidth="1" />
                <circle cx="-22" cy={y + 10} r="2.5" fill={i % 2 === 0 ? "#C47745" : "#8E9B80"} />
                <circle cx="-14" cy={y + 10} r="2.5" fill="#8E9B80" />
                <rect x="5" y={y + 7} width="20" height="6" fill="#D7B96D" fillOpacity="0.4" />
              </g>
            ))}
            <text x="0" y="165" fill="#5E6254" fontSize="8" fontFamily="monospace" textAnchor="middle">
              RACK 0{idx + 1} ({idx === 1 ? "GPU CLUSTER" : "NVMe CORE"})
            </text>
          </g>
        ))}

        {/* Target Server Processing Packet */}
        <g transform="translate(420, 185)">
          <rect x="-30" y="-12" width="60" height="24" rx="3" fill="#C47745" stroke="#C47745" strokeWidth="2" />
          <text x="0" y="4" fill="#FAF7F2" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
            HTTP 200 OK
          </text>
          {!shouldReduceMotion && (
            <circle cx="22" cy="0" r="3" fill="#D7B96D">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="0.8s" repeatCount="indefinite" />
            </circle>
          )}
        </g>
      </svg>
    </div>
  );
}
