import { TracerouteStage } from "@/types/traceroute";

/**
 * Verified Physical Traceroute Stages.
 *
 * IMPORTANT PEDAGOGICAL CAVEAT:
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
    title: "Device RF Transceiver & Local Gateway",
    shortLabel: "01. Device & Wi-Fi",
    category: "Edge & RF",
    summary:
      "Digital bits are converted into electromagnetic radio waves traversing ambient space before entering any physical wire.",
    physicalExplanation:
      "When you tap a button or type an address, your device's operating system forms an application request. The network stack encapsulates this data into link-layer frames, passing raw bits to an internal radio frequency (RF) transceiver. The antenna modulates electromagnetic waves over license-free spectrum bands (commonly 2.4 GHz, 5 GHz, or 6 GHz). Within your room, these invisible radio waves collide with walls and furniture before reaching a local wireless access point or router modem.",
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
    whyItMatters:
      "Physical obstruction, distance from the router, wall construction materials, and channel congestion represent the primary source of unpredictable first-hop packet latency and jitter.",
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
      documentTitle: "Behind the Screen — Subtopic 1: The Journey of Data",
      sectionOrPage: "Chapter 2 (p. 5) & Chapter 5 (pp. 10–11)",
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
    title: "Last-Mile Distribution & ISP Central Office",
    shortLabel: "02. Last-Mile Fiber",
    category: "Access Network",
    summary:
      "Local signals enter physical glass conduits buried beneath municipal streets, converging at the regional Internet Service Provider.",
    physicalExplanation:
      "At your home gateway, an Optical Network Terminal (ONT) converts electrical signals into laser pulses of infrared light. This light travels through thin optical fiber—often bundled alongside power lines or buried under sidewalks in PVC conduits. It passes through passive neighborhood splitters (which allow up to 32 or 64 homes to share one central optical feeder fiber) and terminates at an Optical Line Terminal (OLT) within the local ISP Central Office or regional Point of Presence (PoP).",
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
    whyItMatters:
      "The last mile is the physical frontline of the global digital divide. As documented by ITU and GSMA data, billions of people live in covered areas but lack high-speed physical fiber infrastructure due to rural trenching costs and prohibitive device pricing.",
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
      documentTitle: "Behind the Screen — Subtopic 1 & Subtopic 5 Research Submissions",
      sectionOrPage: "Subtopic 1 (p. 12); Subtopic 5 (Section 2, Key Findings)",
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
    title: "Internet Exchange Point (IXP) & BGP Core",
    shortLabel: "03. IXP Peering Core",
    category: "Core Routing",
    summary:
      "Autonomous networks voluntarily interconnect their core routers inside massive carrier-neutral colocation facilities.",
    physicalExplanation:
      "The global Internet is a voluntary federation of over 110,000 independent networks called Autonomous Systems (AS). To exchange traffic without paying expensive third-party transit fees, major ISPs, cloud providers, and content distribution networks physically meet inside specialized carrier-neutral buildings known as Internet Exchange Points (IXPs). Core routers run Border Gateway Protocol (BGP), exchanging routing tables to determine the most cost-effective path across continental boundaries.",
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
    whyItMatters:
      "Routing is not determined by shortest physical distance, but by commercial contracts, peering policies, and geopolitics. An accidental BGP misconfiguration or route leak can instantly redirect global traffic across unauthorized continents or plunge millions of users offline.",
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
      documentTitle: "Behind the Screen — Subtopic 1: The Journey of Data",
      sectionOrPage: "Chapter 1 (p. 4) & Chapter 6 (p. 12)",
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
    title: "Cable Landing Station (CLS) & Coastal Interface",
    shortLabel: "04. Cable Landing Station",
    category: "Coastal Interface",
    summary:
      "Fortified shore facilities marry terrestrial fiber networks with undersea cables while injecting up to 15,000 volts DC into the ocean.",
    physicalExplanation:
      "Where continental land ends, data enters a heavily secured coastal facility: the Cable Landing Station (CLS). Here, terrestrial fiber links are coupled to transoceanic submarine cable systems. Because light attenuates over ocean distances, optical repeaters on the seafloor need continuous power. The landing station houses massive Power Feed Equipment (PFE), which injects thousands of volts of constant direct current into a central copper tube running the entire length of the subsea cable, using seawater as an electrical ground return.",
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
    whyItMatters:
      "Landing stations are severe geopolitical and natural single points of failure. As demonstrated by the 2022 Tonga volcanic disaster, a tsunami or coastal cut at a landing station can isolate an entire country for over five weeks until specialized repair ships arrive.",
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
      documentTitle: "Behind the Screen — Subtopic 1 & Subtopic 5 Research",
      sectionOrPage: "Subtopic 1 (pp. 13–14); Subtopic 5 (Section 3: Tonga Case Study)",
      citationNotes: "International Cable Protection Committee (ICPC) infrastructure safety guidelines.",
    },
    caveats: [
      "Voltage requirements scale with cable length: shorter coastal hops operate at substantially lower voltage than 10,000 km transpacific links.",
      "If a request stays within the same continent, it never passes through a Cable Landing Station.",
    ],
    metrics: [
      {
        label: "PFE Voltage Feed",
        value: "10 – 15",
        unit: "kV DC",
        context: "High-voltage direct current energized through subsea copper conductor tube",
      },
      {
        label: "Shore Cable Armor",
        value: "Double Steel",
        unit: "wires",
        context: "Multi-layered galvanized steel armor wrapped around fiber for shallow-water defense",
      },
    ],
    iconKey: "anchor",
  },
  {
    id: "stage-05-submarine-cable",
    stageNumber: 5,
    title: "Transoceanic Subsea Optical Fiber Conduit",
    shortLabel: "05. Subsea Cable",
    category: "Subsea Optical",
    summary:
      "Hair-thin glass strands resting in the ocean abyss carry 99% of civilization's intercontinental digital communication.",
    physicalExplanation:
      "Contrary to popular belief, satellites carry less than 1% of intercontinental internet traffic. Over 99% travels through approximately 1.4 million kilometers of subsea fiber-optic cables resting on the ocean floor at depths exceeding 4,000 meters. Inside, pulses of infrared light (1550 nm) bounce through ultra-pure silica glass via total internal reflection. Light travels through optical glass at approximately 204,500 km/s—roughly two-thirds its speed in a vacuum—establishing the physical floor for international latency.",
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
    whyItMatters:
      "Submarine cables are physically fragile. Between 70% and 80% of cable breaks are caused by unintentional human activity (commercial fishing trawlers dragging nets, ship anchors). A severed cable in deep water requires mobilizing scarce, specialized repair ships that take weeks to splice.",
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
      documentTitle: "Behind the Screen — Subtopic 1 & Subtopic 5 Research",
      sectionOrPage: "Subtopic 1 (Chapter 7, pp. 13–14); Subtopic 5 (Section 2, Case 1 & Case 3)",
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
        context: "Interval along ocean floor between erbium-doped optical amplifiers",
      },
    ],
    iconKey: "cable",
  },
  {
    id: "stage-06-datacenter",
    stageNumber: 6,
    title: "Hyperscale Data Center Hall & Thermodynamic Grid",
    shortLabel: "06. Hyperscale Center",
    category: "Hyperscale Compute",
    summary:
      "Tens of thousands of servers consume megawatts of electrical energy and river-scale cooling to compute and return your response.",
    physicalExplanation:
      "The physical destination is a cavernous hyperscale computing facility. Here, Top-of-Rack (ToR) switches route incoming packets to specific server blades. The CPU and GPU compute clusters process database lookups, decrypt TLS sessions, and generate the response. Because computing silicon converts nearly 100% of consumed electrical energy into heat, the facility operates industrial thermodynamic machinery: computer room air handlers (CRAH), cooling towers, and liquid chillers that pump thousands of liters of chilled water continuously.",
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
    whyItMatters:
      "Cloud services are not weightless. The physical concentration of computing into mega-campuses (like Northern Virginia) creates massive regional demands for municipal grid power, clean water for evaporative cooling, and heavy electronic waste recycling challenges.",
    humanRoles: [
      {
        role: "Critical Facilities & HVAC Engineers",
        responsibility: "Operating chilled water loops, monitoring temperature deltas across hot/cold aisles, and chemical water treatments.",
        fieldReality: "24/7 on-site shifts inside deafening acoustic environments with industrial airflow fans.",
      },
      {
        role: "Hardware & Server Technicians",
        responsibility: "Diagnosing failed memory DIMMs, dead server power supplies, and swapping optical transceivers.",
        fieldReality: "Walking miles daily across football-field-sized data halls with barcode scanners and replacement parts.",
      },
    ],
    researchReference: {
      documentTitle: "Behind the Screen — Subtopic 2: Inside the Cloud & Subtopic 3",
      sectionOrPage: "Subtopic 2 (Chapters 2–9, pp. 2–13); Subtopic 3 (p. 2, Cooling and facility efficiency)",
      citationNotes: "HM216 Subtopic 2 Technical Report and Uptime Institute data center infrastructure benchmarks.",
    },
    caveats: [
      "Data centers are not all massive hyperscale campuses: thousands of smaller enterprise server rooms and edge PoPs exist.",
      "Many modern web requests are served directly from RAM caches at the nearest CDN edge node and never wake up origin server disks.",
    ],
    metrics: [
      {
        label: "Typical Hyperscale Draw",
        value: "30 – 100+",
        unit: "Megawatts",
        context: "Electricity demanded by a large facility, equivalent to powering tens of thousands of homes",
      },
      {
        label: "PUE Target Range",
        value: "1.10 – 1.25",
        unit: "ratio",
        context: "Modern hyperscale Power Usage Effectiveness (1.0 is theoretical perfection)",
      },
    ],
    iconKey: "server",
  },
];
