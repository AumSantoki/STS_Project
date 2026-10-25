import { HardwareComponent } from "@/types/hardware";

export const HARDWARE_COMPONENTS: HardwareComponent[] = [
  {
    id: "servers-and-blades",
    componentNumber: 1,
    name: "Servers & Server Blades",
    subtitle: "High-density compute nodes executing software, queries, and cloud logic",
    category: "Compute & Storage",
    oneLinePurpose:
      "The physical compute engines that process incoming web requests, query databases, run algorithms, and generate responses.",
    physicalDescription:
      "Modern cloud data centres house servers as compact modular 'blades' sliding into standard 19-inch or 21-inch racks. Each blade packs multi-core processors, hundreds of gigabytes of RAM, and high-speed flash storage into a metal chassis roughly 1.75 inches (1U) high.",
    howItWorks:
      "Incoming network packets enter the server through an optical network interface card (NIC). The central processing units (CPUs) and graphics accelerators (GPUs) decode the request, fetch data from solid-state storage or RAM buffers, compute the response, and package it back into network frames within milliseconds.",
    internetRole:
      "Every web search, streaming video, database transaction, and AI inference request terminates at a physical server blade. Thousands of these servers coordinate in parallel across warehouse-scale halls.",
    anatomicalParts: [
      {
        id: "cpu-gpu",
        name: "Processors (CPUs & GPUs)",
        materialOrTech: "Silicon microchips with billions of nanometer-scale transistors",
        description: "Executes program instructions, decrypts TLS security certificates, and processes computational workloads.",
        physicalLocation: "Mounted beneath copper/aluminum heatsinks in the chassis center.",
      },
      {
        id: "ram-dimms",
        name: "Memory Modules (DDR5 RAM)",
        materialOrTech: "High-speed volatile semiconductor memory sticks",
        description: "Holds active program code and hot cached datasets for sub-microsecond access speeds.",
        physicalLocation: "Flanking the processor sockets in parallel slots.",
      },
      {
        id: "nvme-storage",
        name: "Solid-State Storage (NVMe SSDs)",
        materialOrTech: "NAND flash memory arrays with high-throughput PCIe controllers",
        description: "Provides permanent, non-volatile storage for user databases, operating systems, and file logs.",
        physicalLocation: "Front drive bays designed for live hot-swapping during operation.",
      },
      {
        id: "redundant-psu",
        name: "Redundant Power Supply Units (PSUs)",
        materialOrTech: "High-efficiency AC-to-DC switch-mode power converters",
        description: "Converts facility electrical feeds to steady 12V direct current. Dual PSUs ensure the server runs continuously if one power feed drops.",
        physicalLocation: "Rear chassis corners with dual power cord receptacles.",
      },
    ],
    specifications: [
      {
        label: "Chassis Height",
        value: "1U – 2U (1.75 – 3.5 inches)",
        context: "Standardized height unit allowing 42 to 48 blades per vertical rack.",
      },
      {
        label: "Electrical Power",
        value: "500W – 1,500W per blade",
        context: "Dense GPU compute nodes draw over 1.5 kilowatts each.",
      },
      {
        label: "Operating Temperature",
        value: "18°C – 27°C (Inlet Air)",
        context: "Maintained by continuous cold-aisle air containment loops.",
      },
    ],
    connectedRoleIds: [
      "data-centre-technician",
      "database-administrator",
      "site-reliability-engineer",
    ],
    connectedStageNumbers: [6],
    academicSource: {
      documentTitle: "Behind the Screen — Subtopic 2: Inside the Cloud Detailed Report",
      chapterOrSection: "Chapter 1 (Server Architectures) & Chapter 3 (Physical Racks)",
      citationNote: "Open Compute Project (OCP) chassis specifications and thermal standards.",
    },
  },
  {
    id: "routers-and-switches",
    componentNumber: 2,
    name: "Network Routers & Core Switches",
    subtitle: "High-speed traffic directors routing terabits of data per second across networks",
    category: "Routing & Switching",
    oneLinePurpose:
      "Directs data packets across the Internet backbone, determining the best path from network to network in nanoseconds.",
    physicalDescription:
      "Core routers are massive chassis appliances standing up to 7 feet tall inside carrier meet-me rooms. Unlike home routers, core telecommunication switches contain multiple modular line cards, redundant route processors, and specialized application-specific integrated circuits (ASICs) capable of switching over 100 terabits per second.",
    howItWorks:
      "When a packet enters an optical line card, specialized packet-processing chips read its destination IP address. The router queries its Forwarding Information Base (FIB) table—which stores hundreds of thousands of global network prefixes negotiated via Border Gateway Protocol (BGP)—and directs the packet across the internal crossbar switch fabric to the correct outgoing optical port.",
    internetRole:
      "Acts as the global postal system of the Internet. Without core routers at Internet Exchange Points, independent telecommunication networks could not pass traffic to one another.",
    anatomicalParts: [
      {
        id: "line-cards",
        name: "Optical Line Cards",
        materialOrTech: "Modular circuit boards with high-density optical transceiver cages",
        description: "Receives incoming fiber cables and converts optical photons into electrical packet data.",
        physicalLocation: "Front vertical slots spanning the main chassis face.",
      },
      {
        id: "asic-switch-fabric",
        name: "ASIC Switching Fabric",
        materialOrTech: "Custom silicon chips optimized exclusively for packet forwarding",
        description: "Transfers packets from input line cards to output line cards in nanoseconds without CPU overhead.",
        physicalLocation: "Deep inside the central backplane of the router chassis.",
      },
      {
        id: "route-processor",
        name: "Route Processor & Supervisor Engine",
        materialOrTech: "Dual redundant computing units running routing software",
        description: "Runs BGP and OSPF routing protocols, builds routing tables, and manages network telemetry.",
        physicalLocation: "Dedicated control slots in the center of the chassis.",
      },
      {
        id: "cooling-fan-trays",
        name: "High-Static Pressure Fan Trays",
        materialOrTech: "Industrial hot-swappable brushless cooling fan modules",
        description: "Forces high-volume airflow through line cards to prevent thermal throttling of high-speed switching chips.",
        physicalLocation: "Upper and lower chassis exhaust bays.",
      },
    ],
    specifications: [
      {
        label: "Switching Capacity",
        value: "100+ Terabits/sec",
        context: "Can process the equivalent of tens of thousands of simultaneous 4K video streams every second.",
      },
      {
        label: "Routing Table Scale",
        value: "950,000+ Global Prefixes",
        context: "The full BGP routing table mapping every accessible address block across the globe.",
      },
      {
        label: "Forwarding Latency",
        value: "< 1 Microsecond",
        context: "Time required to inspect packet headers and switch across backplanes.",
      },
    ],
    connectedRoleIds: ["network-operations-engineer", "cybersecurity-specialist"],
    connectedStageNumbers: [3],
    academicSource: {
      documentTitle: "Behind the Screen — Subtopic 1: The Journey of Data",
      chapterOrSection: "Chapter 1 (Internet Architecture) & Chapter 6 (BGP Routing Engines)",
      citationNote: "IETF RFC 4271 BGP specification and carrier router operational documentation.",
    },
  },
  {
    id: "fiber-optic-cables",
    componentNumber: 3,
    name: "Terrestrial Fibre-Optic Cables",
    subtitle: "Microscopic glass strands carrying laser pulses beneath municipal streets",
    category: "Optical Transmission",
    oneLinePurpose:
      "Transmits digital data across neighborhood streets and intercity corridors as guided pulses of infrared laser light.",
    physicalDescription:
      "A fiber-optic cable contains microscopic strands of ultra-pure silica glass. While the outer cable looks like a thick black rubber conduit, the light-carrying core inside is only 9 microns in diameter—roughly one-tenth the width of a human hair. Layers of glass cladding, Kevlar yarn, and protective plastic encase the glass cores to resist crushing.",
    howItWorks:
      "Infrared laser light enters the center glass core. Because the surrounding glass cladding has a lower refractive index, the light cannot escape: it bounces continuously along the interior through Total Internal Reflection. Light travels through optical glass at approximately 204,500 kilometers per second, losing very little energy over tens of miles.",
    internetRole:
      "Provides the high-speed physical conduits connecting homes, cellular towers, enterprise buildings, and carrier facilities together. Replaced legacy electrical copper wires across nearly all long-distance routes.",
    anatomicalParts: [
      {
        id: "silica-core",
        name: "Single-Mode Silica Core (9 µm)",
        materialOrTech: "Ultra-pure synthetic silicon dioxide (SiO₂) glass",
        description: "The microscopic inner channel through which infrared laser pulses travel.",
        physicalLocation: "The exact center axis of each optical strand.",
      },
      {
        id: "glass-cladding",
        name: "Optical Cladding (125 µm)",
        materialOrTech: "Doped silica glass with lower optical refractive index",
        description: "Acts as a perfect mirror, reflecting light back into the core via Total Internal Reflection.",
        physicalLocation: "Directly surrounding the 9-micron center core.",
      },
      {
        id: "protective-buffer",
        name: "Acrylate Buffer Coating (250 µm)",
        materialOrTech: "UV-cured polymer plastic coating",
        description: "Protects delicate glass from moisture, chemical degradation, and surface scratches.",
        physicalLocation: "Applied over the cladding layer.",
      },
      {
        id: "armor-jacket",
        name: "Kevlar Yarn & HDPE Outer Jacket",
        materialOrTech: "Aramid strength yarn and high-density polyethylene",
        description: "Provides tensile strength to withstand pulling through underground conduits and protects against rodent chews.",
        physicalLocation: "The outermost layer of the cable bundle.",
      },
    ],
    specifications: [
      {
        label: "Core Diameter",
        value: "9 Microns (0.009 mm)",
        context: "One-tenth the diameter of human hair; supports a single spatial mode of light.",
      },
      {
        label: "Light Speed in Glass",
        value: "~204,500 km/s",
        context: "Roughly two-thirds speed of light in vacuum due to glass refractive index (n ≈ 1.467).",
      },
      {
        label: "Signal Attenuation",
        value: "0.18 dB/km (at 1550 nm)",
        context: "Extremely low signal loss allowing light to travel over 40 miles before needing amplification.",
      },
    ],
    connectedRoleIds: ["fiber-optic-technician"],
    connectedStageNumbers: [2],
    academicSource: {
      documentTitle: "Behind the Screen — Subtopic 1: The Journey of Data",
      chapterOrSection: "Chapter 2 (Physical Transmission) & Chapter 5 (Fibre Infrastructure)",
      citationNote: "ITU-T G.652 single-mode optical fiber transmission specifications.",
    },
  },
  {
    id: "subsea-cables-and-repeaters",
    componentNumber: 4,
    name: "Undersea Cables & Optical Repeaters",
    subtitle: "Armored transoceanic cables and deep-sea laser amplifier pods on the ocean floor",
    category: "Subsea Infrastructure",
    oneLinePurpose:
      "Crosses ocean basins thousands of meters deep, carrying over 95% of all international intercontinental data.",
    physicalDescription:
      "A submarine cable resting on the abyssal ocean floor is only about the thickness of a garden hose (17–21 mm), relying on the quiet seabed for protection. Near shallow shorelines, heavy layers of galvanized steel armor wire are wrapped around it. Every 40 to 60 miles, heavy cylindrical titanium pods called optical repeaters interrupt the cable to boost the laser signals.",
    howItWorks:
      "Infrared light gradually weakens as it crosses thousands of miles of glass. Inside each deep-sea repeater pod, special 980nm pump lasers inject energy into coils of erbium-doped glass fiber. When the fading light passes through, it triggers stimulated photon emission, instantly amplifying the laser beam directly in the light domain—without ever converting the signal into electricity.",
    internetRole:
      "Subsea cables are the true bridges of global civilization. Satellites carry less than 1% of international traffic. Without these underwater glass lines, international banking, multinational cloud software, and transoceanic video calls could not exist.",
    anatomicalParts: [
      {
        id: "titanium-repeater-pod",
        name: "Titanium Repeater Pressure Pod",
        materialOrTech: "Grade 5 titanium alloy pressure housing",
        description: "Watertight chamber engineered to withstand crushing ocean depths up to 8,000 meters (over 800 atmospheres of pressure).",
        physicalLocation: "Inserted every 60–100 km along the ocean floor.",
      },
      {
        id: "erbium-coil",
        name: "Erbium-Doped Fiber Amplifier (EDFA)",
        materialOrTech: "Optical glass doped with rare-earth erbium ions",
        description: "Amplifies laser pulses in the light domain when energized by internal laser pump diodes.",
        physicalLocation: "Sealed inside the core optical assembly of the repeater pod.",
      },
      {
        id: "copper-power-tube",
        name: "High-Voltage Copper Power Tube",
        materialOrTech: "Pure conductive copper cylinder",
        description: "Carries up to 15,000 volts of direct current (DC) from coastal landing stations to energize the seabed repeaters.",
        physicalLocation: "Surrounding the central optical fiber bundle.",
      },
      {
        id: "steel-armor-wires",
        name: "Galvanized Steel Armor Wires",
        materialOrTech: "Multiple helical layers of high-tensile galvanized steel",
        description: "Protects cables in shallow water against commercial fishing trawler nets and ship anchors.",
        physicalLocation: "Wrapped around coastal shore sections; omitted on deep abyssal plains.",
      },
    ],
    specifications: [
      {
        label: "Seabed Depth",
        value: "Up to 8,000 Meters",
        context: "Resting on continental slopes, abyssal plains, and deep oceanic trenches.",
      },
      {
        label: "Cable Lifetime",
        value: "25 Years Design Life",
        context: "Engineered to operate continuously beneath the sea without recovery maintenance.",
      },
      {
        label: "Power Delivery",
        value: "10,000V – 15,000V DC",
        context: "Energized by coastal landing stations using seawater as an electrical ground return.",
      },
    ],
    connectedRoleIds: [
      "fiber-optic-technician",
      "critical-facilities-engineer",
      "network-operations-engineer",
    ],
    connectedStageNumbers: [4, 5],
    academicSource: {
      documentTitle: "Behind the Screen — Subtopic 1 & Subtopic 5 Research",
      chapterOrSection: "Subtopic 1 (Chapter 7: Subsea Cables); Subtopic 5 (Section 3: Tonga Case Study)",
      citationNote: "International Cable Protection Committee (ICPC) technical guidelines and Telegeography subsea cable register.",
    },
  },
  {
    id: "optical-transceivers",
    componentNumber: 5,
    name: "Optical Transceivers (SFP / QSFP)",
    subtitle: "The optoelectronic bridge converting computer electricity into laser light",
    category: "Optoelectronics",
    oneLinePurpose:
      "Translates electronic computer bits from circuit boards into pulses of laser light for fiber cables, and vice versa.",
    physicalDescription:
      "A compact metal module roughly the size of a thumb drive that plugs into front-panel cages on servers, routers, and switches. Front optical receptacles receive standard fiber connectors (LC or MPO), while gold-plated electrical contacts on the back slide into the host device's motherboard.",
    howItWorks:
      "Inside the module, a tiny semiconductor laser diode converts high-frequency electrical pulses into precise flashes of infrared light. On the receiving side, a sensitive semiconductor photodiode detects incoming photons of light and converts them back into microvolt electrical signals. An integrated digital signal processor (DSP) cleans up signal distortion.",
    internetRole:
      "The critical bridge sitting at the exact physical boundary between electronic computer processing and optical telecommunications. Millions of transceivers operate inside every cloud campus.",
    anatomicalParts: [
      {
        id: "laser-diode",
        name: "Semiconductor Laser Diode (Transmitter)",
        materialOrTech: "Indium phosphide (InP) or gallium arsenide (GaAs) lasers",
        description: "Emits modulated laser light at specific optical wavelengths (commonly 850nm, 1310nm, or 1550nm).",
        physicalLocation: "Inside the transmitter optical sub-assembly (TOSA).",
      },
      {
        id: "photodiode-receiver",
        name: "Photodiode Detector (Receiver)",
        materialOrTech: "Avalanche photodiode (APD) or PIN semiconductor diode",
        description: "Absorbs incoming light photons and releases proportional electrical current.",
        physicalLocation: "Inside the receiver optical sub-assembly (ROSA).",
      },
      {
        id: "dsp-chip",
        name: "Digital Signal Processor (DSP)",
        materialOrTech: "High-speed silicon processing microchip",
        description: "Corrects optical dispersion, retimes signals, and compensates for signal degradation.",
        physicalLocation: "Mounted on the internal printed circuit board.",
      },
      {
        id: "optical-receptacle",
        name: "Optical Port Receptacle",
        materialOrTech: "Precision ceramic alignment sleeves",
        description: "Mechanically aligns fiber patch cables with the microscopic laser emitter window.",
        physicalLocation: "The front nose of the transceiver module.",
      },
    ],
    specifications: [
      {
        label: "Module Data Rates",
        value: "25G / 100G / 400G / 800G",
        context: "Modern data centres deploy 400G and 800G QSFP-DD transceivers for inter-switch links.",
      },
      {
        label: "Optical Range",
        value: "100 Meters to 40 Kilometers",
        context: "Short-reach (SR) for intra-rack links; long-reach (LR/ER) for metropolitan interconnects.",
      },
      {
        label: "Electrical Power",
        value: "3.5W – 14W per module",
        context: "When 48 transceivers are plugged into a single 1U switch, they generate substantial heat.",
      },
    ],
    connectedRoleIds: [
      "data-centre-technician",
      "network-operations-engineer",
    ],
    connectedStageNumbers: [1, 3, 6],
    academicSource: {
      documentTitle: "Behind the Screen — Subtopic 1: The Journey of Data",
      chapterOrSection: "Chapter 2 (Optoelectronic Conversion) & Chapter 6 (Optical Interconnects)",
      citationNote: "IEEE 802.3 optical Ethernet standards and QSFP-DD Multi-Source Agreement (MSA).",
    },
  },
  {
    id: "power-and-cooling",
    componentNumber: 6,
    name: "Data-Centre Power & Cooling Systems",
    subtitle: "Industrial thermodynamic equipment keeping multi-megawatt facilities alive",
    category: "Power & Thermal",
    oneLinePurpose:
      "Delivers non-stop electrical energy and removes thousands of kilowatts of heat so servers do not thermally self-destruct.",
    physicalDescription:
      "Data-centre support infrastructure takes up more space than the servers themselves. Outside stand 2-megawatt diesel generators and industrial evaporative cooling towers. Inside, massive rooms house rows of rotary flywheel uninterruptible power supplies (UPS) and Computer Room Air Handlers (CRAH).",
    howItWorks:
      "Computing silicon converts nearly 100% of consumed electrical power into thermal heat. In cold-aisle containment systems, chilled water loops cooled to 12°C–18°C circulate through heat exchangers. Massive fans force cold air through server chassis, absorbing the heat and pumping the warm water back to rooftop chillers. Dual electrical feeds ensure that if municipal power fails, battery arrays carry the load until giant diesel engines start within 10 seconds.",
    internetRole:
      "Guarantees the five-nines (99.999%) availability expected of modern cloud computing. Without continuous cooling, a server hall would overheat and automatically shut down in less than 5 minutes.",
    anatomicalParts: [
      {
        id: "diesel-generator",
        name: "Backup Diesel Generator Arrays",
        materialOrTech: "16-cylinder 2-megawatt industrial diesel engines",
        description: "Starts automatically in under 10 seconds to power the data centre during municipal power blackouts.",
        physicalLocation: "Heavy concrete equipment yards outside the facility.",
      },
      {
        id: "ups-systems",
        name: "Uninterruptible Power Supply (UPS)",
        materialOrTech: "Lithium-ion battery arrays or heavy rotary steel flywheels",
        description: "Provides instant electrical bridge power during the 10 seconds before diesel generators reach operating speed.",
        physicalLocation: "Dedicated fire-suppressed electrical battery halls.",
      },
      {
        id: "chilled-water-loop",
        name: "Stainless Steel Chilled Water Loop",
        materialOrTech: "Insulated stainless steel piping (12-inch to 24-inch diameter)",
        description: "Circulates thousands of liters of chilled water continuously between indoor heat exchangers and outdoor chillers.",
        physicalLocation: "Overhead mechanical pipe bridges and subfloor conduits.",
      },
      {
        id: "crah-units",
        name: "Computer Room Air Handlers (CRAH)",
        materialOrTech: "Industrial centrifugal fans and chilled water coils",
        description: "Pressurizes server cold aisles with humidity-controlled air to force heat extraction.",
        physicalLocation: "Perimeter positions surrounding the computing server floor.",
      },
    ],
    specifications: [
      {
        label: "Facility Power Capacity",
        value: "40 – 100 Megawatts",
        context: "A single hyperscale data center campus consumes as much electricity as a medium city.",
      },
      {
        label: "Cooling Efficiency (PUE)",
        value: "1.10–1.20 (Hyperscale) / 1.56 (Global Avg)",
        context: "Uptime Institute's 2024 survey reports an industry average PUE of 1.56; specialized hyperscale campuses reach 1.10–1.20 using advanced economization.",
      },
      {
        label: "Backup Fuel Reserves",
        value: "24 – 72 Hours On-Site",
        context: "Thousands of gallons of diesel fuel stored on-site with prioritized emergency fuel refill contracts.",
      },
    ],
    connectedRoleIds: ["critical-facilities-engineer", "site-reliability-engineer"],
    connectedStageNumbers: [6],
    academicSource: {
      documentTitle: "Behind the Screen — Subtopic 2: Inside the Cloud Detailed Report",
      chapterOrSection: "Chapter 3 (Energy Consumption) & Chapter 4 (Thermodynamic Cooling Systems)",
      citationNote: "ASHRAE TC 9.9 Data Center Thermal Guidelines and Uptime Institute Tier IV Reliability Criteria.",
    },
  },
];
