"use client";

import { useReducedMotion } from "motion/react";

export function HeroNetworkSvg() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
    >
      {/* Ambient gradient glows */}
      <div className="absolute top-1/4 right-[10%] w-[500px] h-[400px] rounded-full bg-cyan-accent/8 blur-[120px] will-change-transform" />
      <div className="absolute bottom-1/3 left-[5%] w-[450px] h-[350px] rounded-full bg-blue-accent/6 blur-[100px] will-change-transform" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[300px] rounded-full bg-amber-accent/5 blur-[90px] will-change-transform" />

      {/* SVG Network Schematic */}
      <svg
        className="w-full h-full opacity-45 md:opacity-60"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="amberTrace" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.7" />
          </linearGradient>

          <radialGradient id="pulseGlowCyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="1" />
            <stop offset="50%" stopColor="#00F0FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="pulseGlowAmber" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="1" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>

          <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Subtle background coordinate grid */}
        <g stroke="#1E232E" strokeWidth="0.5" opacity="0.4" strokeDasharray="3 9">
          <line x1="0" y1="200" x2="1440" y2="200" />
          <line x1="0" y1="450" x2="1440" y2="450" />
          <line x1="0" y1="700" x2="1440" y2="700" />
          <line x1="280" y1="0" x2="280" y2="900" />
          <line x1="720" y1="0" x2="720" y2="900" />
          <line x1="1160" y1="0" x2="1160" y2="900" />
        </g>

        {/* Primary Subsea Fiber Trunk Route */}
        <path
          id="subseaTrunk"
          d="M 120,680 C 340,640 460,780 720,620 C 960,480 1140,540 1360,380"
          stroke="url(#trunkGrad)"
          strokeWidth="1.75"
          fill="none"
          strokeDasharray="6 4"
        />

        {/* Secondary Cross-Continental Terrestrial Backbone */}
        <path
          id="terrestrialBackbone"
          d="M 180,240 L 420,340 L 680,280 L 980,360 L 1280,220"
          stroke="#3B82F6"
          strokeWidth="1.25"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Inter-tie Vertical Feeder Paths */}
        <path
          id="feederWest"
          d="M 420,340 L 480,520 L 720,620"
          stroke="#1E232E"
          strokeWidth="1"
          strokeDasharray="2 4"
          fill="none"
        />
        <path
          id="feederEast"
          d="M 980,360 L 1020,490 L 1140,540"
          stroke="url(#amberTrace)"
          strokeWidth="1.25"
          fill="none"
        />

        {/* Network Infrastructure Nodes */}
        {/* Node 1: Edge Station */}
        <g transform="translate(180, 240)">
          <circle r="14" fill="none" stroke="#F59E0B" strokeWidth="0.75" opacity="0.4" />
          <circle r="4" fill="#F59E0B" />
          <text x="18" y="4" fill="#F59E0B" fontSize="9" fontFamily="monospace" opacity="0.8">
            EDGE // TX-01
          </text>
        </g>

        {/* Node 2: Regional IXP */}
        <g transform="translate(420, 340)">
          <circle r="18" fill="none" stroke="#00F0FF" strokeWidth="0.75" opacity="0.3" />
          <circle r="5" fill="#00F0FF" filter="url(#glowFilter)" />
          <text x="-65" y="-12" fill="#9CA3AF" fontSize="9" fontFamily="monospace">
            IXP // EQUINIX
          </text>
        </g>

        {/* Node 3: Landing Station Alpha */}
        <g transform="translate(720, 620)">
          <circle r="22" fill="none" stroke="#00F0FF" strokeWidth="1" opacity="0.5" />
          <circle r="6" fill="#00F0FF" filter="url(#glowFilter)" />
          <circle r="10" fill="none" stroke="#3B82F6" strokeWidth="0.75" strokeDasharray="3 3" />
          <text x="24" y="5" fill="#00F0FF" fontSize="10" fontFamily="monospace" fontWeight="bold">
            CLS // LANDING STATION
          </text>
          <text x="24" y="18" fill="#9CA3AF" fontSize="8" fontFamily="monospace">
            LAT: 36.85°N / 12-FIBER PAIR
          </text>
        </g>

        {/* Node 4: Transatlantic Repeater Station */}
        <g transform="translate(980, 360)">
          <circle r="12" fill="none" stroke="#3B82F6" strokeWidth="0.75" opacity="0.4" />
          <circle r="4" fill="#3B82F6" />
          <text x="16" y="3" fill="#9CA3AF" fontSize="8" fontFamily="monospace">
            EDFA REPEATER // +18dB
          </text>
        </g>

        {/* Node 5: Hyperscale Core Facility */}
        <g transform="translate(1280, 220)">
          <rect x="-10" y="-10" width="20" height="20" fill="#12141A" stroke="#00F0FF" strokeWidth="1.25" />
          <circle r="3" fill="#00F0FF" filter="url(#glowFilter)" />
          <text x="-120" y="4" fill="#00F0FF" fontSize="9" fontFamily="monospace">
            CORE // HYPERSCALE
          </text>
        </g>

        {/* Animated Light Pulses (only rendered if reduced-motion is not requested) */}
        {!shouldReduceMotion && (
          <>
            {/* Pulse 1: Subsea trunk pulse (Cyan) */}
            <circle r="5" fill="url(#pulseGlowCyan)" filter="url(#glowFilter)">
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                path="M 120,680 C 340,640 460,780 720,620 C 960,480 1140,540 1360,380"
              />
            </circle>

            {/* Pulse 2: Secondary offset pulse along subsea trunk */}
            <circle r="3.5" fill="#00F0FF" filter="url(#glowFilter)">
              <animateMotion
                dur="8s"
                begin="4s"
                repeatCount="indefinite"
                path="M 120,680 C 340,640 460,780 720,620 C 960,480 1140,540 1360,380"
              />
            </circle>

            {/* Pulse 3: Terrestrial backbone pulse (Blue) */}
            <circle r="4" fill="#3B82F6" filter="url(#glowFilter)">
              <animateMotion
                dur="6.5s"
                repeatCount="indefinite"
                path="M 180,240 L 420,340 L 680,280 L 980,360 L 1280,220"
              />
            </circle>

            {/* Pulse 4: Amber feeder line pulse */}
            <circle r="3.5" fill="url(#pulseGlowAmber)" filter="url(#glowFilter)">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path="M 980,360 L 1020,490 L 1140,540"
              />
            </circle>

            {/* Pulsing rings around major landing station */}
            <circle cx="720" cy="620" r="22" fill="none" stroke="#00F0FF" strokeWidth="0.75" opacity="0.6">
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
