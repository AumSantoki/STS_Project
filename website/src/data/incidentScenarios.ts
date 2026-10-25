import { IncidentScenario } from "@/types/people";

export const INCIDENT_SCENARIOS: IncidentScenario[] = [
  {
    id: "subsea-cable-cut",
    title: "Deep-Sea Cable Severed: The Tonga Volcanic Break",
    subtitle: "How specialized ships and marine engineers restored an isolated nation's digital lifeline",
    eventType: "Subsea Cable Severed",
    location: "South Pacific Ocean (Kingdom of Tonga to Fiji)",
    realWorldBasis:
      "On January 15, 2022, the Hunga Tonga-Hunga Ha'apai volcanic eruption triggered devastating tsunamis and underwater mudslides, severing Tonga's sole international submarine fiber optic cable (the Tonga Cable System) at a depth of 1,700 meters.",
    summary:
      "When a transoceanic fiber line breaks, satellites cannot absorb the traffic volume. Restoring connectivity requires coordinating satellite engineers, NOC operators, coastal technicians, and a specialized cable ship navigating through oceanic ash.",
    steps: [
      {
        stepNumber: 1,
        timeElapsed: "T + 00:01 (1 Minute)",
        leadRole: "Network Operations (NOC) Engineer",
        roleId: "network-operations-engineer",
        actionTaken: "Detects Sudden Total Loss of Light Across the Ocean Basin",
        toolsUsed: "Streaming Telemetry & SNMP Alarms",
        coordinationDetail:
          "Backbone monitoring screens flash critical red. Automated alarms confirm that 100% of optical traffic between Suva (Fiji) and Nuku'alofa (Tonga) flatlined instantly. NOC engineers immediately attempt ping and telemetry diagnostics, confirming the break is physical, not logical.",
      },
      {
        stepNumber: 2,
        timeElapsed: "T + 00:30 (30 Minutes)",
        leadRole: "Coastal Landing Station Technician",
        roleId: "critical-facilities-engineer",
        actionTaken: "Conducts OTDR Optical Pulse Testing to Pinpoint Fault Location",
        toolsUsed: "Optical Time-Domain Reflectometer (OTDR)",
        coordinationDetail:
          "Engineers at the Fiji Cable Landing Station fire high-powered laser pulses down the dark fiber. By measuring the backscattered light reflections, they calculate that the cable is physically sheared 37 kilometers offshore from the Tonga terminus at a depth of 1,700 meters.",
      },
      {
        stepNumber: 3,
        timeElapsed: "T + 04:00 (4 Hours)",
        leadRole: "Software & Site Reliability Engineer (SRE)",
        roleId: "site-reliability-engineer",
        actionTaken: "Reroutes Critical Services via Emergency Geostationary Satellite Uplinks",
        toolsUsed: "Bandwidth Shaper & Traffic Prioritization Policies",
        coordinationDetail:
          "Because the island's single fiber cable is dead, engineers coordinate with satellite operators (SES and Kacific). They configure emergency satellite dishes to establish low-bandwidth links, strictly rationing bandwidth for emergency government services, hospitals, and disaster relief.",
      },
      {
        stepNumber: 4,
        timeElapsed: "T + 48:00 (2 Days)",
        leadRole: "Fibre-Optic & Subsea Cable Technician",
        roleId: "fiber-optic-technician",
        actionTaken: "Mobilizes the Specialist Cable Repair Ship CS Reliance from Papua New Guinea",
        toolsUsed: "Dynamic Positioning System, Deep-Sea ROV, Heavy Ocean Grapples",
        coordinationDetail:
          "The 140-meter repair ship CS Reliance is chartered and sails 4,000 kilometers across the Pacific through volcanic ash fields. The ship's crew and marine splicers load replacement submarine cable and high-pressure jointing housings onto the deck.",
      },
      {
        stepNumber: 5,
        timeElapsed: "T + 20 Days",
        leadRole: "Fibre-Optic & Subsea Cable Technician",
        roleId: "fiber-optic-technician",
        actionTaken: "Grapples Damaged Cable Ends from Seabed and Performs Fusion Arc-Splicing",
        toolsUsed: "Shipboard Cleanroom Jointing Container, Precision Arc Splicers",
        coordinationDetail:
          "Using sonar and ROVs, crew members drag specialized ocean grappling hooks along the rocky seafloor, severing and hoisting both damaged cable ends to the ship's deck. In a sanitized cleanroom container aboard the pitching vessel, marine splicers spend 30 continuous hours fusing the microscopic glass cores with zero-tolerance precision.",
      },
      {
        stepNumber: 6,
        timeElapsed: "T + 22 Days",
        leadRole: "Network Operations (NOC) Engineer",
        roleId: "network-operations-engineer",
        actionTaken: "Validates Optical Transit Power and Restores Full High-Speed Connectivity",
        toolsUsed: "BER Bit Error Rate Testers & Optical Spectrum Analyzers",
        coordinationDetail:
          "Fiji and Tonga landing stations test full 100 Gbps transponder links across the repaired splice. The cable is lowered back into the ocean bed, and full broadband connectivity is restored to the 100,000 residents of Tonga after weeks of physical struggle.",
      },
    ],
    outcome:
      "Complete restoration achieved in 22 days of non-stop international human coordination across sea, shore, and satellite links.",
    stsTakeaway:
      "Digital connectivity is fundamentally dependent on marine geography and a small global fleet of specialized repair ships. When physical geography ruptures, digital life stops until human hands physically re-splice the wires.",
  },
  {
    id: "urban-fiber-cut",
    title: "Metropolitan Fiber Severed by Road Construction",
    subtitle: "The classic 'backhoe fade' and how network teams protect municipal services",
    eventType: "Subsea Cable Severed",
    location: "Metropolitan Utility Conduit (Downtown Corridor)",
    realWorldBasis:
      "According to the FCC and ITU, accidental physical excavation strikes ('backhoe fade') represent the single most common cause of terrestrial fiber outages worldwide, occurring thousands of times annually.",
    summary:
      "An unmapped municipal excavator rips through a 432-strand fiber backbone conduit under a busy city avenue, severing connections to hospitals, cellular towers, and thousands of businesses.",
    steps: [
      {
        stepNumber: 1,
        timeElapsed: "T + 00:00 (Immediate)",
        leadRole: "Network Operations (NOC) Engineer",
        roleId: "network-operations-engineer",
        actionTaken: "Automated SONET/DWDM Ring Protection Switches Traffic in Under 50ms",
        toolsUsed: "Automated Protection Switching (APS)",
        coordinationDetail:
          "Optical line cards detect the physical fiber cut in microseconds. Before any active video stream or phone call drops, the self-healing network ring automatically reverses traffic around the opposite side of the municipal ring.",
      },
      {
        stepNumber: 2,
        timeElapsed: "T + 00:15 (15 Minutes)",
        leadRole: "Network Operations (NOC) Engineer",
        roleId: "network-operations-engineer",
        actionTaken: "Dispatches Outside Plant Field Technicians to the Exact Street Coordinates",
        toolsUsed: "GIS Underground Utility Mapping & OTDR",
        coordinationDetail:
          "OTDR tests show the break is exactly 4.2 kilometers from the central office. GIS maps overlay the distance against municipal permits to identify the exact street intersection where an unannounced road crew is trenching.",
      },
      {
        stepNumber: 3,
        timeElapsed: "T + 01:00 (1 Hour)",
        leadRole: "Fibre-Optic & Subsea Cable Technician",
        roleId: "fiber-optic-technician",
        actionTaken: "Arrives On-Site with Mobile Splicing Trailer and Pumps Out Flooded Vault",
        toolsUsed: "Submersible Water Pumps, Traffic Cones, Gas Detectors",
        coordinationDetail:
          "Field technicians cordon off the street lane, pump muddy groundwater out of the utility manhole, and pull replacement 432-core cable through undamaged duct segments.",
      },
      {
        stepNumber: 4,
        timeElapsed: "T + 04:30 (4.5 Hours)",
        leadRole: "Fibre-Optic & Subsea Cable Technician",
        roleId: "fiber-optic-technician",
        actionTaken: "Performs Mass-Ribbon Arc Splicing on 432 Microscopic Glass Cores",
        toolsUsed: "12-Fiber Ribbon Fusion Splicer, Heat-Shrink Sleeves",
        coordinationDetail:
          "Working inside the climate-controlled mobile lab trailer, splicers strip, cleave, and fuse 36 separate 12-fiber ribbon bundles into a waterproof splice enclosure, verifying light levels on each strand.",
      },
      {
        stepNumber: 5,
        timeElapsed: "T + 06:00 (6 Hours)",
        leadRole: "Data-Centre Hardware Technician",
        roleId: "data-centre-technician",
        actionTaken: "Confirms Full Line Restoral and Normalizes Redundant Ring Protection",
        toolsUsed: "Central Office Optical Distribution Frame (ODF) Meters",
        coordinationDetail:
          "Technicians secure the heavy vault lid, NOC clears the alarm flags, and traffic is re-balanced across the primary fiber path, restoring full dual-path redundancy.",
      },
    ],
    outcome:
      "Zero customer downtime experienced due to N+1 network ring design, with physical cable permanently restored in 6 hours of intensive field splicing.",
    stsTakeaway:
      "High-availability Internet relies on an architectural truce between civil engineering vulnerabilities and optical network redundancy.",
  },
  {
    id: "cooling-failure",
    title: "Data Centre Chiller Failure During Summer Heatwave",
    subtitle: "The thermodynamic crisis when multi-megawatt computing complexes lose cooling",
    eventType: "Data Centre Cooling Loss",
    location: "Major Cloud Data Centre Campus (Northern Virginia)",
    realWorldBasis:
      "In July 2022, extreme heatwaves in the UK and USA caused multiple major cloud data centres (including Google Cloud and Oracle Cloud facilities) to experience cooling system failures, forcing emergency shutdown of compute racks to prevent fire.",
    summary:
      "When external temperatures surge to 42°C, exterior chiller loops overload. Inside, 40,000 servers generating megawatts of heat begin driving room temperatures toward dangerous thermal runaway.",
    steps: [
      {
        stepNumber: 1,
        timeElapsed: "T + 00:00 (Alert Triggered)",
        leadRole: "Critical-Facilities Engineer",
        roleId: "critical-facilities-engineer",
        actionTaken: "Building SCADA System Sounds High-Temperature Alarms on Chilled Water Loop",
        toolsUsed: "SCADA Building Management System (BMS)",
        coordinationDetail:
          "Chilled water return temperatures spike past 24°C as two exterior rooftop chillers trip offline under thermal overload. Facilities engineers receive urgent audible and pager alerts.",
      },
      {
        stepNumber: 2,
        timeElapsed: "T + 00:03 (3 Minutes)",
        leadRole: "Critical-Facilities Engineer",
        roleId: "critical-facilities-engineer",
        actionTaken: "Engages Secondary Backup Chillers and Deploys Emergency Evaporative Spray Arrays",
        toolsUsed: "Thermal Imagers, Manual Bypass Valves",
        coordinationDetail:
          "Facilities teams rush to the mechanical yard to clear chiller fault codes, open manual water bypass valves, and activate reserve thermal water storage tanks holding hundreds of thousands of gallons of pre-chilled water.",
      },
      {
        stepNumber: 3,
        timeElapsed: "T + 00:10 (10 Minutes)",
        leadRole: "Software & Site Reliability Engineer (SRE)",
        roleId: "site-reliability-engineer",
        actionTaken: "Executes Automated Workload Shedding and Live-Migrates VMs to Sibling Regions",
        toolsUsed: "Kubernetes Cluster Autoscalers & Global Traffic Director",
        coordinationDetail:
          "SREs trigger emergency load-shedding runbooks. Compute workloads and virtual machines are live-migrated over high-speed backbone fiber to data centres in Ohio and Montreal, cutting server electrical draw in the affected facility by 45%.",
      },
      {
        stepNumber: 4,
        timeElapsed: "T + 00:30 (30 Minutes)",
        leadRole: "Data-Centre Hardware Technician",
        roleId: "data-centre-technician",
        actionTaken: "Inspects Server Cold Aisles for Hotspot Containment Leaks",
        toolsUsed: "Handheld Anemometers & Thermal Guns",
        coordinationDetail:
          "Technicians walk the aisles verifying that polycarbonate containment doors are tightly latched and blanking panels are in place to ensure every cubic foot of remaining chilled air is forced directly through server chassis.",
      },
      {
        stepNumber: 5,
        timeElapsed: "T + 02:00 (2 Hours)",
        leadRole: "Critical-Facilities Engineer",
        roleId: "critical-facilities-engineer",
        actionTaken: "Normalizes Water Loop Delta and Restores Full Redundant Cooling Capacity",
        toolsUsed: "Chemical Water Analyzers & VFD Fan Controllers",
        coordinationDetail:
          "Primary chillers are safely brought back online, cold-aisle air temperatures stabilize at 20°C, and SREs gradually return production compute workloads to the facility.",
      },
    ],
    outcome:
      "Catastrophic server hardware damage prevented through fast human intervention and automated cloud workload migration.",
    stsTakeaway:
      "The 'cloud' has a physical body that sweats. Digital computing is bound by thermodynamics: every bit computed produces heat that must be physically extracted into the surrounding atmosphere.",
  },
];
