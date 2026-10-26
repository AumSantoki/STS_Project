import { TracerouteStage } from "@/types/traceroute";

/**
 * Verified Physical Traceroute Stages.
 *
 * IMPORTANT ARCHITECTURAL CAVEAT:
 * This 6-stage physical pipeline serves as an illustrative transoceanic journey
 * (e.g., a user querying a web service hosted across an ocean basin).
 * It is NOT a universal sequence for all Internet requests:
 * - Local or national traffic does not touch Cable Landing Stations or Subsea Cables.
 * - Many modern requests terminate at nearby Edge CDN points of presence (PoPs).
 * - Cellular devices connect through base stations (NodeBs) rather than home Wi-Fi gateways.
 */
export const TRACEROUTE_STAGES: TracerouteStage[] = [
  {
    id: "stage-01-device-local",
    stageNumber: 1,
    title: "Your Device",
    shortLabel: "01. Your Device",
    category: "Your Device",
    summary:
      "Your phone or computer turns your digital action into radio waves moving through the air.",
    physicalExplanation:
      "When you tap a link or send a message, your phone or computer creates a digital request. Tiny antennas inside your device translate this data into invisible radio waves. These waves travel through the air in your room at the speed of light until they reach your home Wi-Fi router.",
    whyItMatters:
      "Walls, furniture, and distance from your router can weaken these radio waves and slow down your connection.",
    hardwareSpecs: [
      {
        label: "RF Modulation",
        value: "OFDMA / QAM Modulation",
        detail: "IEEE 802.11 ax/be standards (Wi-Fi 6/7) or cellular 4G/5G NR modems",
      },
      {
        label: "Standard MTU",
        value: "1,500 Bytes",
        detail: "Ethernet Maximum Transmission Unit; leaves ~1,460 bytes for unencrypted payload",
      },
      {
        label: "Local Gateway Function",
        value: "NAT & DHCP Translation",
        detail: "Maps private local addresses (192.168.x.x) to an ISP-assigned public IP address",
      },
    ],
    humanRoles: [
      {
        role: "Hardware & RF Design Engineers",
        responsibility: "Engineers tuning micro-antenna arrays to pass electromagnetic radiation regulatory standards.",
        fieldReality: "Balancing radio transmission power with device battery life and thermal constraints.",
      },
      {
        role: "Field Telecom Installers",
        responsibility: "Technicians configuring modems, testing optical drop cables, and positioning residential access points.",
        fieldReality: "Navigating varied home layouts and old residential wiring not built for high-frequency signals.",
      },
    ],
    researchReference: {
      documentTitle: "Behind the Screen — Physical Routing & Packet Pipeline Report",
      sectionOrPage: "Chapter 2 & Chapter 5 (Radio Physical Layer)",
      citationNotes: "RFC 9293 (TCP), RFC 768 (UDP), and IEEE 802.11 physical layer framing specifications.",
    },
    caveats: [
      "Illustrative Route: Devices wired directly with twisted-pair copper Ethernet bypass wireless radio modulation entirely.",
      "Cellular requests travel to macro-towers or small cells over licensed spectrum rather than home Wi-Fi bands.",
    ],
    metrics: [
      {
        label: "Air Propagation",
        value: "~300,000",
        unit: "km/s",
        context: "Speed of radio waves through ambient air (near speed of light in vacuum)",
      },
      {
        label: "Typical First Hop",
        value: "1 – 5",
        unit: "ms",
        context: "Local wireless transit latency to residential access point",
      },
    ],
    iconKey: "radio",
  },
  {
    id: "stage-02-last-mile",
    stageNumber: 2,
    title: "Your Local Network",
    shortLabel: "02. Local Network",
    category: "Neighborhood Fiber",
    summary:
      "Laser pulses carry your request through thin glass cables buried beneath neighborhood streets.",
    physicalExplanation:
      "Your home router converts the radio waves into quick flashes of laser light. This light enters a thin glass fiber cable buried beneath your street. Neighborhood splitters combine signals from nearby homes so everyone shares access to the main telecom line.",
    whyItMatters:
      "Accidental damage during street construction or severe storms can physically break these cables and disconnect entire neighborhoods.",
    hardwareSpecs: [
      {
        label: "Physical Medium",
        value: "Single-Mode Silica Fiber (SMF-28)",
        detail: "Core diameter of 8–10 microns, roughly one-tenth the width of human hair",
      },
      {
        label: "Network Topology",
        value: "GPON / XGS-PON",
        detail: "Gigabit Passive Optical Network multiplexing downstream and upstream wavelengths",
      },
      {
        label: "ISP Aggregation",
        value: "Broadband Network Gateway (BNG)",
        detail: "Authenticates subscriber sessions and enforces bandwidth throttling tiers",
      },
    ],
    humanRoles: [
      {
        role: "Outside Plant (OSP) Fiber Splicers",
        responsibility: "Aligning microscopic glass cores under microscope cameras using precision arc-fusion splicing tools.",
        fieldReality: "Working in subterranean utility vaults and bucket trucks during extreme weather conditions.",
      },
      {
        role: "Central Office Technicians",
        responsibility: "Managing high-density optical distribution frames (ODF) and DC backup battery arrays.",
        fieldReality: "Ensuring central offices maintain power continuity during municipal grid blackouts.",
      },
    ],
    researchReference: {
      documentTitle: "Behind the Screen — Local & Terrestrial Fiber Infrastructure Report",
      sectionOrPage: "Physical Layer Architecture & Optical Distribution Standards",
      citationNotes: "GSMA Mobile Economy (2025) and ITU global connectivity statistics on usage vs. coverage gaps.",
    },
    caveats: [
      "Not all neighborhoods have fiber: millions still rely on aging copper twisted-pair (DSL) or coaxial cable (DOCSIS).",
      "Bandwidth is shared among neighborhood splitter clusters, meaning evening peak hours can cause local congestion.",
    ],
    metrics: [
      {
        label: "Global Disconnected",
        value: "2.2 Billion",
        unit: "people",
        context: "Population without physical internet access, 96% in low- and middle-income nations",
      },
      {
        label: "Fiber Core Width",
        value: "9",
        unit: "microns",
        context: "Diameter of single-mode glass core carrying light pulses",
      },
    ],
    iconKey: "ethernet",
  },
  {
    id: "stage-03-ixp-routing",
    stageNumber: 3,
    title: "Where Networks Connect",
    shortLabel: "03. Networks Connect",
    category: "Network Exchange",
    summary:
      "Independent networks link together inside large connection buildings to share traffic worldwide.",
    physicalExplanation:
      "Your request arrives at an Internet Exchange, a large secure building where different telecom companies and web services meet. Here, companies plug their fiber cables directly into shared switches, allowing data to jump between different networks without paying extra middleman fees.",
    whyItMatters:
      "These shared exchange hubs let thousands of separate networks cooperate so your data can reach any website on the globe.",
    hardwareSpecs: [
      {
        label: "Core Routing Engines",
        value: "Multi-Chassis Terabit Routers",
        detail: "Cisco 8000 / Juniper PTX series routing millions of packets per second",
      },
      {
        label: "Physical Interconnect",
        value: "Optical Meet-Me Rooms (MMR)",
        detail: "Yellow fiber patch cables physically linking distinct company server racks",
      },
      {
        label: "Protocol Decision Engine",
        value: "BGP Path-Vector Routing",
        detail: "Applies Longest Prefix Match (LPM) on Forwarding Information Base (FIB) tables",
      },
    ],
    humanRoles: [
      {
        role: "BGP & Network Operations (NOC) Engineers",
        responsibility: "Monitoring global prefix announcements, mitigating BGP hijackings, and managing route filters.",
        fieldReality: "Responding to emergency route flapping incidents around the clock with strict error budgets.",
      },
      {
        role: "Colocation Facility Cross-Connect Techs",
        responsibility: "Running and testing certified low-loss optical fiber cross-connects between customer cages.",
        fieldReality: "Working inside high-security, temperature-controlled carrier meet-me rooms.",
      },
    ],
    researchReference: {
      documentTitle: "Behind the Screen — Autonomous Systems & Regional Exchange Routing Report",
      sectionOrPage: "Autonomous System Peering & BGP Routing Policies",
      citationNotes: "IETF RFC 4271 (BGP-4 specification) and RIPE NCC routing telemetry archives.",
    },
    caveats: [
      "Large hyperscalers (Meta, Google, Microsoft) increasingly use Private Network Interconnects (PNIs) rather than public IXP fabrics.",
      "BGP path selection prioritizes commercial cost and AS hop counts rather than real-time latency optimization.",
    ],
    metrics: [
      {
        label: "Autonomous Systems",
        value: "110,000+",
        unit: "ASNs",
        context: "Independent networks federated globally across the Internet backbone",
      },
      {
        label: "Switching Capacity",
        value: "100+",
        unit: "Tbps",
        context: "Aggregate throughput capacity of major metropolitan internet exchange fabrics",
      },
    ],
    iconKey: "git-commit",
  },
  {
    id: "stage-04-landing-station",
    stageNumber: 4,
    title: "Coastal Cable Station",
    shortLabel: "04. Coastal Station",
    category: "Coastline & Power",
    summary:
      "Coastal stations prepare signals for ocean journeys and send electrical power deep into the sea.",
    physicalExplanation:
      "At the coastline, data enters a fortified building called a Cable Landing Station. Here, land cables join the heavy underwater cable. Because light weakens over ocean distances, high-voltage equipment sends up to 15,000 volts of electricity along the cable to power amplifiers on the seabed.",
    whyItMatters:
      "Because so many international lines converge at small coastal points, natural disasters or power failures here can isolate whole countries.",
    hardwareSpecs: [
      {
        label: "Terminal Optronics",
        value: "Submarine Line Terminal Equipment (SLTE)",
        detail: "Coherent optical transponders deploying Dense Wavelength Division Multiplexing (DWDM)",
      },
      {
        label: "Electrical Supply",
        value: "Power Feed Equipment (PFE)",
        detail: "Supplies constant DC current at 10,000V – 15,000V to power deep-sea amplifiers",
      },
      {
        label: "Shore Infrastructure",
        value: "Beach Manhole & Directional Bore",
        detail: "Heavy steel-armored cable buried 2–3 meters beneath surf zones to resist anchor strikes",
      },
    ],
    humanRoles: [
      {
        role: "High-Voltage Power Engineers",
        responsibility: "Operating and testing dangerous 15,000V DC power feeding units and emergency battery banks.",
        fieldReality: "Adhering to strict life-safety lock-out/tag-out procedures around high-voltage equipment.",
      },
      {
        role: "Coastal Infrastructure Caretakers",
        responsibility: "Inspecting beach manholes, seismic sensors, and physical perimeter alarms.",
        fieldReality: "Safeguarding shoreline transition vaults from coastal erosion, king tides, and unauthorized digging.",
      },
    ],
    researchReference: {
      documentTitle: "Behind the Screen — Transoceanic Optical Cable & Landing Facility Report",
      sectionOrPage: "High-Voltage Power Feed & Beach Manhole Engineering",
      citationNotes: "International Cable Protection Committee (ICPC) infrastructure safety guidelines.",
    },
    caveats: [
      "Voltage requirements scale with cable length: shorter coastal hops operate at substantially lower voltage than 10,000 km transpacific links.",
      "If a request stays within the same continent, it never passes through a Cable Landing Station.",
    ],
    metrics: [
      {
        label: "Cable Power Feed",
        value: "10 – 15",
        unit: "kV DC",
        context: "High-voltage electricity sent through subsea copper conductor to power underwater repeaters",
      },
      {
        label: "Shore Cable Armor",
        value: "Double Steel",
        unit: "wires",
        context: "Multi-layered steel armor protecting the cable against fishing nets and anchors near shore",
      },
    ],
    iconKey: "anchor",
  },
  {
    id: "stage-05-submarine-cable",
    stageNumber: 5,
    title: "Cable Beneath the Ocean",
    shortLabel: "05. Ocean Cable",
    category: "Deep Ocean",
    summary:
      "Undersea fiber cables resting on the deep seafloor carry over 95% of international communication.",
    physicalExplanation:
      "The cable rests on the ocean floor, thousands of meters beneath the surface. Infrared laser pulses bounce through hair-thin glass cores at roughly 200,000 kilometers per second. Every 40 to 60 miles, titanium amplifier pods boost the fading light so it can finish its journey across the ocean.",
    whyItMatters:
      "Over 95% of all intercontinental Internet traffic travels through undersea cables, not satellites.",
    hardwareSpecs: [
      {
        label: "Optical Repeaters",
        value: "Erbium-Doped Fiber Amplifiers (EDFA)",
        detail: "Placed every 60–100 km on the seabed; amplifies light directly without converting to electrical signals",
      },
      {
        label: "Deep-Sea Cable Width",
        value: "17 – 21 mm",
        detail: "Roughly the diameter of a standard garden hose on the abyssal plain where hazards are low",
      },
      {
        label: "Subsea Capacity Record",
        value: "200+ Tbps (e.g. MAREA)",
        detail: "Achieved across 8 fiber pairs spanning 6,600 km from Virginia Beach to Bilbao, Spain",
      },
    ],
    humanRoles: [
      {
        role: "Cable Ship Captains & ROV Operators",
        responsibility: "Navigating specialised repair ships, deploying submarine grappling hooks and deep-sea ROVs.",
        fieldReality: "Holding ships stationary in gale-force seas using dynamic positioning systems while winching cable.",
      },
      {
        role: "Marine Optical Splicers",
        responsibility: "Working in sanitized cleanroom containers aboard repair vessels to fuse hair-thin glass cores.",
        fieldReality: "Precision manual work aboard rolling vessels while ships hold multi-thousand-dollar daily operational costs.",
      },
    ],
    researchReference: {
      documentTitle: "Behind the Screen — Subsea Optical Networks & Marine Maintenance Report",
      sectionOrPage: "Deep-Sea Cable Engineering & Fault Restoration Records",
      citationNotes: "Telegeography Submarine Cable Map data and ICPC documented cable fault casualty registers.",
    },
    caveats: [
      "Light does NOT travel at 300,000 km/s in glass: the refractive index (n ≈ 1.467) slows optical transit to ~204.5 km/ms.",
      "Shallow water bottlenecks (such as the Red Sea / Bab-el-Mandeb Strait) carry dozens of systems in close proximity, multiplying cut risks.",
    ],
    metrics: [
      {
        label: "Intercontinental Share",
        value: "99%",
        unit: "of data",
        context: "Global international traffic carried by subsea cables, not satellites",
      },
      {
        label: "Light Speed in Glass",
        value: "~204,500",
        unit: "km/s",
        context: "Speed of infrared light pulses through silica fiber optic core",
      },
      {
        label: "Repeater Spacing",
        value: "60 – 100",
        unit: "km",
        context: "Interval along ocean floor between optical signal amplifiers",
      },
    ],
    iconKey: "cable",
  },
  {
    id: "stage-06-datacenter",
    stageNumber: 6,
    title: "The Data Centre",
    shortLabel: "06. Data Centre",
    category: "Cloud & Compute",
    summary:
      "Rooms full of powerful computers process your request and send the answer back.",
    physicalExplanation:
      "The cable comes ashore on the other side of the ocean and reaches a giant data centre. Inside chilly server rooms, specialized computers find the data you asked for, generate the response, and send it back across the exact same path in just milliseconds.",
    whyItMatters:
      "Massive power supplies and continuous liquid cooling systems run day and night to keep global online services running.",
    hardwareSpecs: [
      {
        label: "Compute Chassis",
        value: "High-Density Server Racks",
        detail: "Standard 19-inch / 21-inch racks drawing 10 kW to over 40 kW of electrical power each",
      },
      {
        label: "Power Resilience",
        value: "Rotary UPS & Diesel Generators",
        detail: "Massive battery banks and multi-megawatt diesel engines with thousands of gallons of on-site fuel",
      },
      {
        label: "Facility Efficiency",
        value: "Power Usage Effectiveness (PUE)",
        detail: "PUE = Total Facility Power / IT Equipment Power. Modern hyperscalers target 1.10 – 1.25",
      },
    ],
    humanRoles: [
      {
        role: "Critical Facilities Operations Engineers",
        responsibility: "Managing thermal loops, electrical sub-stations, and backup generator transfer switches.",
        fieldReality: "Wearing hearing protection and arc-flash suits during maintenance in 85+ dBA noisy cold aisles.",
      },
      {
        role: "Data Centre Hardware Technicians",
        responsibility: "Swapping failed server blades, optical transceivers, and diagnosing memory faults.",
        fieldReality: "Walking miles daily across warehouse-scale facilities with strict security clearance check-points.",
      },
    ],
    researchReference: {
      documentTitle: "Behind the Screen — Hyperscale Facilities & Server Architecture Report",
      sectionOrPage: "Thermal Management, Power Distribution & Compute Standards",
      citationNotes: "Facility engineering specs, cooling thermodynamic loops, and environmental impact assessments.",
    },
    caveats: [
      "Not all data centres are hyperscalers: edge facilities and enterprise on-premise server closets operate at lower scale and lower thermal efficiency.",
      "A single web request may trigger dozens of microservice lookups across multiple internal data center clusters before the final response is assembled.",
    ],
    metrics: [
      {
        label: "Facility Power",
        value: "40 – 100",
        unit: "MW",
        context: "Electrical capacity of a single hyperscale campus, equivalent to power for 80,000 homes",
      },
      {
        label: "Cooling Efficiency",
        value: "1.15",
        unit: "PUE",
        context: "Power Usage Effectiveness ratio: only 15% extra energy spent on cooling and power distribution",
      },
    ],
    iconKey: "server",
  },
];
