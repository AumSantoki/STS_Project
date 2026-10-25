"use client";

interface HardwareSchematicSvgProps {
  componentId: string;
  activePartId: string | null;
  onSelectPart: (partId: string) => void;
}

export function HardwareSchematicSvg({
  componentId,
  activePartId,
  onSelectPart,
}: HardwareSchematicSvgProps) {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[430px] rounded-2xl border border-warm-sand-border bg-ivory-light overflow-hidden shadow-inner flex items-center justify-center select-none p-3 sm:p-4">
      {/* Background Architectural Grid Coordinate Texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20 pointer-events-none [background-image:linear-gradient(to_right,#E4D6C4_1px,transparent_1px),linear-gradient(to_bottom,#E4D6C4_1px,transparent_1px)] [background-size:20px_20px]"
      />

      {/* Interactive Helper Banner */}
      <div className="absolute top-3 left-4 z-10 flex items-center gap-2 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-charcoal text-ivory shadow-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-burnt-orange animate-pulse" />
          <span>ANATOMICAL EXPLODED SCHEMATIC // CLICK PARTS TO INSPECT</span>
        </span>
      </div>

      <svg
        className="w-full h-full"
        viewBox="0 0 600 380"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="hwGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ======================================================== */}
        {/* 1. SERVERS & SERVER BLADES                               */}
        {/* ======================================================== */}
        {componentId === "servers-and-blades" && (
          <g transform="translate(40, 40)">
            {/* Server Chassis Perimeter */}
            <rect x="0" y="30" width="520" height="260" rx="8" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />
            <line x1="130" y1="30" x2="130" y2="290" stroke="#D8C7B0" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="390" y1="30" x2="390" y2="290" stroke="#D8C7B0" strokeWidth="2" strokeDasharray="4 4" />

            {/* Front Drive Bays: NVMe Storage */}
            <g
              onClick={() => onSelectPart("nvme-storage")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "nvme-storage" || !activePartId ? 1 : 0.45}
            >
              <rect
                x="15"
                y="45"
                width="100"
                height="230"
                rx="6"
                fill={activePartId === "nvme-storage" ? "#C47745" : "#E4D6C4"}
                fillOpacity={activePartId === "nvme-storage" ? 0.25 : 0.5}
                stroke={activePartId === "nvme-storage" ? "#C47745" : "#252720"}
                strokeWidth={activePartId === "nvme-storage" ? 2.5 : 1.5}
              />
              {[60, 100, 140, 180, 220].map((y, i) => (
                <g key={i}>
                  <rect x="25" y={y} width="80" height="30" rx="3" fill="#FAF7F2" stroke="#252720" strokeWidth="1" />
                  <circle cx="35" cy={y + 15} r="3" fill="#8E9B80" />
                  <line x1="45" y1={y + 15} x2="95" y2={y + 15} stroke="#D8C7B0" strokeWidth="2" />
                </g>
              ))}
              <text x="65" y="270" fill="#252720" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                NVMe SSDs
              </text>
            </g>

            {/* Central Compute: CPUs & RAM */}
            <g
              onClick={() => onSelectPart("cpu-gpu")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "cpu-gpu" || !activePartId ? 1 : 0.45}
            >
              {/* CPU Heatsink 1 */}
              <rect
                x="170"
                y="70"
                width="85"
                height="85"
                rx="6"
                fill={activePartId === "cpu-gpu" ? "#C47745" : "#252720"}
                stroke="#C47745"
                strokeWidth={activePartId === "cpu-gpu" ? 2.5 : 1.5}
              />
              <text x="212" y="118" fill="#FAF7F2" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                CPU 01
              </text>
              {/* CPU Heatsink 2 */}
              <rect
                x="170"
                y="175"
                width="85"
                height="85"
                rx="6"
                fill={activePartId === "cpu-gpu" ? "#C47745" : "#252720"}
                stroke="#C47745"
                strokeWidth={activePartId === "cpu-gpu" ? 2.5 : 1.5}
              />
              <text x="212" y="223" fill="#FAF7F2" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                CPU 02
              </text>
            </g>

            {/* RAM DIMMs */}
            <g
              onClick={() => onSelectPart("ram-dimms")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "ram-dimms" || !activePartId ? 1 : 0.45}
            >
              <rect
                x="280"
                y="65"
                width="90"
                height="200"
                rx="6"
                fill={activePartId === "ram-dimms" ? "#C47745" : "#E4D6C4"}
                fillOpacity={activePartId === "ram-dimms" ? 0.25 : 0.4}
                stroke={activePartId === "ram-dimms" ? "#C47745" : "#8E9B80"}
                strokeWidth="1.5"
              />
              {[80, 105, 130, 155, 180, 205, 230].map((y, i) => (
                <rect key={i} x="290" y={y} width="70" height="15" rx="2" fill="#FAF7F2" stroke="#252720" strokeWidth="1" />
              ))}
              <text x="325" y="260" fill="#252720" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                DDR5 RAM
              </text>
            </g>

            {/* Redundant Power Supply Units (PSUs) */}
            <g
              onClick={() => onSelectPart("redundant-psu")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "redundant-psu" || !activePartId ? 1 : 0.45}
            >
              <rect
                x="410"
                y="60"
                width="95"
                height="95"
                rx="6"
                fill={activePartId === "redundant-psu" ? "#C47745" : "#252720"}
                stroke="#D7B96D"
                strokeWidth={activePartId === "redundant-psu" ? 2.5 : 1.5}
              />
              <text x="457" y="112" fill="#FAF7F2" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                PSU A (12V)
              </text>

              <rect
                x="410"
                y="175"
                width="95"
                height="95"
                rx="6"
                fill={activePartId === "redundant-psu" ? "#C47745" : "#252720"}
                stroke="#D7B96D"
                strokeWidth={activePartId === "redundant-psu" ? 2.5 : 1.5}
              />
              <text x="457" y="227" fill="#FAF7F2" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                PSU B (12V)
              </text>
            </g>
          </g>
        )}

        {/* ======================================================== */}
        {/* 2. NETWORK ROUTERS & SWITCHES                            */}
        {/* ======================================================== */}
        {componentId === "routers-and-switches" && (
          <g transform="translate(40, 35)">
            <rect x="20" y="20" width="480" height="280" rx="10" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />

            {/* Line Cards Area */}
            <g
              onClick={() => onSelectPart("line-cards")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "line-cards" || !activePartId ? 1 : 0.45}
            >
              <rect
                x="40"
                y="40"
                width="200"
                height="240"
                rx="6"
                fill={activePartId === "line-cards" ? "#C47745" : "#F5F0E6"}
                fillOpacity={activePartId === "line-cards" ? 0.25 : 0.6}
                stroke={activePartId === "line-cards" ? "#C47745" : "#252720"}
                strokeWidth="2"
              />
              {[60, 105, 150, 195, 240].map((y, i) => (
                <g key={i}>
                  <rect x="55" y={y} width="170" height="32" rx="4" fill="#FAF7F2" stroke="#D8C7B0" strokeWidth="1" />
                  <circle cx="70" cy={y + 16} r="4" fill="#8E9B80" />
                  <circle cx="85" cy={y + 16} r="4" fill="#8E9B80" />
                  <rect x="110" y={y + 10} width="24" height="12" rx="2" fill="#252720" />
                  <rect x="145" y={y + 10} width="24" height="12" rx="2" fill="#252720" />
                  <rect x="180" y={y + 10} width="24" height="12" rx="2" fill="#252720" />
                </g>
              ))}
              <text x="140" y="55" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                OPTICAL LINE CARDS
              </text>
            </g>

            {/* Central ASIC Switch Fabric */}
            <g
              onClick={() => onSelectPart("asic-switch-fabric")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "asic-switch-fabric" || !activePartId ? 1 : 0.45}
            >
              <rect
                x="260"
                y="55"
                width="120"
                height="120"
                rx="8"
                fill={activePartId === "asic-switch-fabric" ? "#C47745" : "#252720"}
                stroke="#C47745"
                strokeWidth="2.5"
              />
              <circle cx="320" cy="105" r="24" fill="#C47745" fillOpacity="0.3" stroke="#D7B96D" strokeWidth="2" />
              <text x="320" y="110" fill="#FAF7F2" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                ASIC
              </text>
              <text x="320" y="130" fill="#D7B96D" fontSize="8" fontFamily="monospace" textAnchor="middle">
                FABRIC
              </text>
              <text x="320" y="160" fill="#FAF7F2" fontSize="9" fontFamily="monospace" textAnchor="middle">
                100 Tbps
              </text>
            </g>

            {/* Route Processor */}
            <g
              onClick={() => onSelectPart("route-processor")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "route-processor" || !activePartId ? 1 : 0.45}
            >
              <rect
                x="260"
                y="195"
                width="120"
                height="85"
                rx="8"
                fill={activePartId === "route-processor" ? "#C47745" : "#E4D6C4"}
                stroke="#252720"
                strokeWidth="2"
              />
              <text x="320" y="235" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                BGP ROUTE
              </text>
              <text x="320" y="255" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="middle">
                PROCESSOR
              </text>
            </g>

            {/* Cooling Fan Trays */}
            <g
              onClick={() => onSelectPart("cooling-fan-trays")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "cooling-fan-trays" || !activePartId ? 1 : 0.45}
            >
              <rect
                x="400"
                y="40"
                width="80"
                height="240"
                rx="6"
                fill={activePartId === "cooling-fan-trays" ? "#C47745" : "#252720"}
                stroke="#8E9B80"
                strokeWidth="2"
              />
              {[70, 120, 170, 220].map((y, i) => (
                <circle key={i} cx="440" cy={y} r="18" fill="none" stroke="#FAF7F2" strokeWidth="2" strokeDasharray="6 3" />
              ))}
              <text x="440" y="265" fill="#FAF7F2" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                FANS
              </text>
            </g>
          </g>
        )}

        {/* ======================================================== */}
        {/* 3. TERRESTRIAL FIBRE-OPTIC CABLES                         */}
        {/* ======================================================== */}
        {componentId === "fiber-optic-cables" && (
          <g transform="translate(60, 40)">
            {/* Concentric Cable Layers Exploded Cross-Section */}

            {/* Layer 4: HDPE Outer Jacket */}
            <g
              onClick={() => onSelectPart("armor-jacket")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "armor-jacket" || !activePartId ? 1 : 0.45}
            >
              <circle
                cx="240"
                cy="150"
                r="130"
                fill={activePartId === "armor-jacket" ? "#C47745" : "#252720"}
                fillOpacity={activePartId === "armor-jacket" ? 0.3 : 0.9}
                stroke="#252720"
                strokeWidth="3"
              />
              <text x="240" y="30" fill="#252720" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                [4] HDPE OUTER JACKET &amp; KEVLAR
              </text>
            </g>

            {/* Layer 3: Protective Buffer */}
            <g
              onClick={() => onSelectPart("protective-buffer")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "protective-buffer" || !activePartId ? 1 : 0.45}
            >
              <circle
                cx="240"
                cy="150"
                r="95"
                fill={activePartId === "protective-buffer" ? "#C47745" : "#D7B96D"}
                fillOpacity={activePartId === "protective-buffer" ? 0.4 : 0.8}
                stroke="#252720"
                strokeWidth="2"
              />
              <text x="240" y="65" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                [3] ACRYLATE BUFFER (250 µm)
              </text>
            </g>

            {/* Layer 2: Optical Cladding */}
            <g
              onClick={() => onSelectPart("glass-cladding")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "glass-cladding" || !activePartId ? 1 : 0.45}
            >
              <circle
                cx="240"
                cy="150"
                r="60"
                fill={activePartId === "glass-cladding" ? "#C47745" : "#FAF7F2"}
                stroke="#8E9B80"
                strokeWidth="2.5"
              />
              <text x="240" y="105" fill="#5E6254" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                [2] CLADDING (125 µm)
              </text>
            </g>

            {/* Layer 1: 9µm Core */}
            <g
              onClick={() => onSelectPart("silica-core")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "silica-core" || !activePartId ? 1 : 0.45}
            >
              <circle
                cx="240"
                cy="150"
                r="22"
                fill="#C47745"
                filter="url(#hwGlow)"
              />
              <circle cx="240" cy="150" r="10" fill="#FFFFFF" />
              <text x="240" y="195" fill="#C47745" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                [1] SILICA CORE (9 µm)
              </text>
              <text x="240" y="210" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="middle">
                LIGHT TRAVELS HERE
              </text>
            </g>

            {/* Light beam demonstration */}
            <path d="M 380,150 L 490,150" stroke="#C47745" strokeWidth="4" strokeDasharray="6 4" />
            <text x="435" y="140" fill="#C47745" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
              204,500 km/s
            </text>
          </g>
        )}

        {/* ======================================================== */}
        {/* 4. UNDERSEA CABLES & OPTICAL REPEATERS                   */}
        {/* ======================================================== */}
        {componentId === "subsea-cables-and-repeaters" && (
          <g transform="translate(30, 40)">
            {/* Marine Seafloor Outline */}
            <path d="M 0,260 Q 250,240 540,260 L 540,300 L 0,300 Z" fill="#111612" opacity="0.3" />

            {/* Undersea Cable Entering Repeater */}
            <path d="M 10,140 L 150,140" stroke="#252720" strokeWidth="16" strokeLinecap="round" />
            <path d="M 390,140 L 530,140" stroke="#252720" strokeWidth="16" strokeLinecap="round" />

            {/* Steel Armor Wires */}
            <g
              onClick={() => onSelectPart("steel-armor-wires")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "steel-armor-wires" || !activePartId ? 1 : 0.45}
            >
              {[30, 60, 90, 120, 410, 440, 470, 500].map((x, i) => (
                <line key={i} x1={x} y1="126" x2={x + 10} y2="154" stroke="#D7B96D" strokeWidth="3" />
              ))}
              <text x="75" y="110" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                STEEL ARMOR WIRES
              </text>
            </g>

            {/* Titanium Repeater Pod */}
            <g
              onClick={() => onSelectPart("titanium-repeater-pod")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "titanium-repeater-pod" || !activePartId ? 1 : 0.45}
            >
              <rect
                x="150"
                y="85"
                width="240"
                height="110"
                rx="24"
                fill={activePartId === "titanium-repeater-pod" ? "#C47745" : "#252720"}
                stroke="#8E9B80"
                strokeWidth="3.5"
              />
              <text x="270" y="65" fill="#252720" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                TITANIUM REPEATER POD (800 ATM PRESSURE)
              </text>
            </g>

            {/* High-Voltage Copper Power Tube */}
            <g
              onClick={() => onSelectPart("copper-power-tube")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "copper-power-tube" || !activePartId ? 1 : 0.45}
            >
              <line x1="170" y1="115" x2="370" y2="115" stroke="#D7B96D" strokeWidth="5" />
              <text x="270" y="105" fill="#D7B96D" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                15,000V DC COPPER POWER TUBE
              </text>
            </g>

            {/* Erbium-Doped Fiber Amplifier Coil (EDFA) */}
            <g
              onClick={() => onSelectPart("erbium-coil")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "erbium-coil" || !activePartId ? 1 : 0.45}
            >
              <rect x="210" y="130" width="120" height="40" rx="8" fill="#FAF7F2" stroke="#C47745" strokeWidth="2" />
              <line x1="225" y1="150" x2="315" y2="150" stroke="#C47745" strokeWidth="4" filter="url(#hwGlow)" />
              <circle cx="270" cy="150" r="7" fill="#D7B96D" />
              <text x="270" y="185" fill="#FAF7F2" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                ERBIUM LASER COIL (AMPLIFIES LIGHT)
              </text>
            </g>
          </g>
        )}

        {/* ======================================================== */}
        {/* 5. OPTICAL TRANSCEIVERS (QSFP)                           */}
        {/* ======================================================== */}
        {componentId === "optical-transceivers" && (
          <g transform="translate(40, 40)">
            {/* Transceiver Metal Shell */}
            <rect x="40" y="60" width="440" height="160" rx="10" fill="#FAF7F2" stroke="#252720" strokeWidth="3" />

            {/* Front Optical Receptacle */}
            <g
              onClick={() => onSelectPart("optical-receptacle")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "optical-receptacle" || !activePartId ? 1 : 0.45}
            >
              <rect
                x="15"
                y="85"
                width="60"
                height="110"
                rx="6"
                fill={activePartId === "optical-receptacle" ? "#C47745" : "#252720"}
                stroke="#252720"
                strokeWidth="2"
              />
              <circle cx="45" cy="115" r="10" fill="#FAF7F2" stroke="#8E9B80" strokeWidth="2" />
              <circle cx="45" cy="165" r="10" fill="#FAF7F2" stroke="#8E9B80" strokeWidth="2" />
              <text x="45" y="45" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                LC FIBER PORTS
              </text>
            </g>

            {/* Laser Diode Transmitter (TOSA) */}
            <g
              onClick={() => onSelectPart("laser-diode")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "laser-diode" || !activePartId ? 1 : 0.45}
            >
              <rect
                x="120"
                y="85"
                width="95"
                height="50"
                rx="6"
                fill={activePartId === "laser-diode" ? "#C47745" : "#E4D6C4"}
                stroke="#C47745"
                strokeWidth="2"
              />
              <text x="167" y="115" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                LASER DIODE
              </text>
              <line x1="85" y1="115" x2="115" y2="115" stroke="#C47745" strokeWidth="3" filter="url(#hwGlow)" />
            </g>

            {/* Photodiode Receiver (ROSA) */}
            <g
              onClick={() => onSelectPart("photodiode-receiver")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "photodiode-receiver" || !activePartId ? 1 : 0.45}
            >
              <rect
                x="120"
                y="145"
                width="95"
                height="50"
                rx="6"
                fill={activePartId === "photodiode-receiver" ? "#C47745" : "#E4D6C4"}
                stroke="#8E9B80"
                strokeWidth="2"
              />
              <text x="167" y="175" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                PHOTODIODE
              </text>
              <line x1="85" y1="165" x2="115" y2="165" stroke="#8E9B80" strokeWidth="3" />
            </g>

            {/* DSP Signal Microchip */}
            <g
              onClick={() => onSelectPart("dsp-chip")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "dsp-chip" || !activePartId ? 1 : 0.45}
            >
              <rect
                x="260"
                y="95"
                width="90"
                height="90"
                rx="8"
                fill={activePartId === "dsp-chip" ? "#C47745" : "#252720"}
                stroke="#D7B96D"
                strokeWidth="2.5"
              />
              <text x="305" y="142" fill="#FAF7F2" fontSize="11" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                DSP CHIP
              </text>
              <text x="305" y="160" fill="#D7B96D" fontSize="8" fontFamily="monospace" textAnchor="middle">
                400G / 800G
              </text>
            </g>

            {/* Gold PCB Edge Connector */}
            <rect x="440" y="80" width="30" height="120" fill="#D7B96D" stroke="#252720" strokeWidth="1.5" />
            {[90, 105, 120, 135, 150, 165, 180].map((y, i) => (
              <line key={i} x1="440" y1={y} x2="470" y2={y} stroke="#252720" strokeWidth="1.5" />
            ))}
            <text x="455" y="225" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="middle">
              GOLD EDGE
            </text>
          </g>
        )}

        {/* ======================================================== */}
        {/* 6. DATA-CENTRE POWER & COOLING                           */}
        {/* ======================================================== */}
        {componentId === "power-and-cooling" && (
          <g transform="translate(35, 35)">
            <rect x="20" y="20" width="490" height="280" rx="10" fill="#FAF7F2" stroke="#252720" strokeWidth="2.5" />

            {/* Backup Diesel Generator */}
            <g
              onClick={() => onSelectPart("diesel-generator")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "diesel-generator" || !activePartId ? 1 : 0.45}
            >
              <rect
                x="40"
                y="40"
                width="135"
                height="105"
                rx="8"
                fill={activePartId === "diesel-generator" ? "#C47745" : "#252720"}
                stroke="#D7B96D"
                strokeWidth="2"
              />
              <circle cx="75" cy="85" r="22" fill="none" stroke="#FAF7F2" strokeWidth="2" strokeDasharray="5 3" />
              <text x="107" y="125" fill="#FAF7F2" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                2MW GENERATOR
              </text>
            </g>

            {/* Rotary UPS Battery Bank */}
            <g
              onClick={() => onSelectPart("ups-systems")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "ups-systems" || !activePartId ? 1 : 0.45}
            >
              <rect
                x="40"
                y="165"
                width="135"
                height="115"
                rx="8"
                fill={activePartId === "ups-systems" ? "#C47745" : "#E4D6C4"}
                stroke="#252720"
                strokeWidth="2"
              />
              {[185, 215, 245].map((y, i) => (
                <rect key={i} x="55" y={y} width="105" height="20" rx="3" fill="#FAF7F2" stroke="#252720" strokeWidth="1" />
              ))}
              <text x="107" y="180" fill="#252720" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                UPS BATTERY BANK
              </text>
            </g>

            {/* Chilled Water Stainless Steel Pipe Loop */}
            <g
              onClick={() => onSelectPart("chilled-water-loop")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "chilled-water-loop" || !activePartId ? 1 : 0.45}
            >
              <path
                d="M 210,50 L 470,50 L 470,110 L 210,110 Z"
                fill={activePartId === "chilled-water-loop" ? "#C47745" : "#8E9B80"}
                fillOpacity={activePartId === "chilled-water-loop" ? 0.35 : 0.25}
                stroke="#8E9B80"
                strokeWidth="3.5"
              />
              <text x="340" y="85" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                CHILLED WATER LOOP (18°C ΔT)
              </text>
            </g>

            {/* Computer Room Air Handler (CRAH) Units */}
            <g
              onClick={() => onSelectPart("crah-units")}
              className="cursor-pointer transition-opacity"
              opacity={activePartId === "crah-units" || !activePartId ? 1 : 0.45}
            >
              <rect
                x="210"
                y="145"
                width="260"
                height="135"
                rx="8"
                fill={activePartId === "crah-units" ? "#C47745" : "#FAF7F2"}
                fillOpacity={activePartId === "crah-units" ? 0.2 : 0.9}
                stroke="#252720"
                strokeWidth="2.5"
              />
              <circle cx="270" cy="210" r="30" fill="none" stroke="#8E9B80" strokeWidth="3" strokeDasharray="8 4" />
              <circle cx="410" cy="210" r="30" fill="none" stroke="#8E9B80" strokeWidth="3" strokeDasharray="8 4" />
              <text x="340" y="170" fill="#252720" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                CRAH AIR HANDLERS (COLD AISLE)
              </text>
              <text x="340" y="270" fill="#5E6254" fontSize="9" fontFamily="monospace" textAnchor="middle">
                EXTRACTS MEGAWATTS OF THERMAL HEAT
              </text>
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
