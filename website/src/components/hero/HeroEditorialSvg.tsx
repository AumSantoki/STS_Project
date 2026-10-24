"use client";

import { useReducedMotion } from "motion/react";

export function HeroEditorialSvg() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
    >
      {/* Soft warm atmospheric glows */}
      <div className="absolute top-1/4 right-[8%] w-[550px] h-[450px] rounded-full bg-muted-gold/15 blur-[120px] will-change-transform" />
      <div className="absolute bottom-1/4 left-[5%] w-[450px] h-[400px] rounded-full bg-burnt-orange/10 blur-[110px] will-change-transform" />
      <div className="absolute top-10 left-1/3 w-[350px] h-[300px] rounded-full bg-sage-green/10 blur-[90px] will-change-transform" />

      {/* SVG Engineering Network Schematic */}
      <svg
        className="w-full h-full opacity-60 md:opacity-75"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="warmTrunk" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C47745" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#D7B96D" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C47745" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="sagePath" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8E9B80" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8E9B80" stopOpacity="0.75" />
          </linearGradient>

          <filter id="warmGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Technical Coordinate Millimeter Grid */}
        <g stroke="#E4D6C4" strokeWidth="0.75" opacity="0.65" strokeDasharray="4 8">
          <line x1="0" y1="180" x2="1440" y2="180" />
          <line x1="0" y1="420" x2="1440" y2="420" />
          <line x1="0" y1="680" x2="1440" y2="680" />
          <line x1="260" y1="0" x2="260" y2="900" />
          <line x1="720" y1="0" x2="720" y2="900" />
          <line x1="1180" y1="0" x2="1180" y2="900" />
        </g>

        {/* Primary Subsea Fiber Trunk Route */}
        <path
          d="M 120,680 C 340,640 460,780 720,620 C 960,480 1140,540 1360,380"
          stroke="url(#warmTrunk)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 4"
        />

        {/* Secondary Terrestrial Backbone */}
        <path
          d="M 180,240 L 420,340 L 680,280 L 980,360 L 1280,220"
          stroke="#252720"
          strokeWidth="1.25"
          strokeOpacity="0.35"
          fill="none"
        />

        {/* Vertical Feeders */}
        <path
          d="M 420,340 L 480,520 L 720,620"
          stroke="#E4D6C4"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          fill="none"
        />
        <path
          d="M 980,360 L 1020,490 L 1140,540"
          stroke="url(#sagePath)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Schematic Nodes */}
        {/* Node 1: Edge Radio */}
        <g transform="translate(180, 240)">
          <circle r="14" fill="#F5F0E6" stroke="#C47745" strokeWidth="1.2" />
          <circle r="4" fill="#C47745" />
          <text x="20" y="4" fill="#252720" fontSize="9" fontFamily="monospace" fontWeight="600">
            RF_EDGE // 5.2GHz
          </text>
        </g>

        {/* Node 2: Regional IXP */}
        <g transform="translate(420, 340)">
          <circle r="18" fill="#F5F0E6" stroke="#D7B96D" strokeWidth="1.5" />
          <circle r="5" fill="#D7B96D" filter="url(#warmGlow)" />
          <text x="-70" y="-14" fill="#5E6254" fontSize="9" fontFamily="monospace">
            IXP // CARRIER PEERING
          </text>
        </g>

        {/* Node 3: Landing Station Alpha */}
        <g transform="translate(720, 620)">
          <circle r="22" fill="#FAF7F2" stroke="#C47745" strokeWidth="1.5" />
          <circle r="6" fill="#C47745" filter="url(#warmGlow)" />
          <circle r="11" fill="none" stroke="#D7B96D" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="26" y="5" fill="#252720" fontSize="10" fontFamily="monospace" fontWeight="bold">
            CLS // VIRGINIA BEACH
          </text>
          <text x="26" y="18" fill="#5E6254" fontSize="8" fontFamily="monospace">
            15,000V DC PFE // 12-PAIR
          </text>
        </g>

        {/* Node 4: Transoceanic Repeater Station */}
        <g transform="translate(980, 360)">
          <circle r="12" fill="#F5F0E6" stroke="#8E9B80" strokeWidth="1.2" />
          <circle r="4" fill="#8E9B80" />
          <text x="16" y="3" fill="#5E6254" fontSize="8" fontFamily="monospace">
            EDFA REPEATER // 4,000m DEPTH
          </text>
        </g>

        {/* Node 5: Hyperscale Core Facility */}
        <g transform="translate(1280, 220)">
          <rect x="-10" y="-10" width="20" height="20" fill="#FAF7F2" stroke="#252720" strokeWidth="1.5" rx="3" />
          <circle r="3.5" fill="#C47745" filter="url(#warmGlow)" />
          <text x="-140" y="4" fill="#252720" fontSize="9" fontFamily="monospace" fontWeight="600">
            HYPERSCALE // 40MW
          </text>
        </g>

        {/* Optical Pulses (disabled under reduced-motion) */}
        {!shouldReduceMotion && (
          <>
            <circle r="4.5" fill="#C47745" filter="url(#warmGlow)">
              <animateMotion
                dur="9s"
                repeatCount="indefinite"
                path="M 120,680 C 340,640 460,780 720,620 C 960,480 1140,540 1360,380"
              />
            </circle>

            <circle r="3.5" fill="#D7B96D" filter="url(#warmGlow)">
              <animateMotion
                dur="9s"
                begin="4.5s"
                repeatCount="indefinite"
                path="M 120,680 C 340,640 460,780 720,620 C 960,480 1140,540 1360,380"
              />
            </circle>

            <circle r="4" fill="#8E9B80">
              <animateMotion
                dur="7s"
                repeatCount="indefinite"
                path="M 180,240 L 420,340 L 680,280 L 980,360 L 1280,220"
              />
            </circle>

            <circle cx="720" cy="620" r="22" fill="none" stroke="#C47745" strokeWidth="1" opacity="0.6">
              <animate
                attributeName="r"
                values="16;38;16"
                dur="4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;0;0.6"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
          </>
        )}
      </svg>
    </div>
  );
}
