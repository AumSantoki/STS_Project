import { ProfessionalRole } from "@/types/people";

export const PEOPLE_ROLES: ProfessionalRole[] = [
  {
    id: "data-centre-technician",
    roleNumber: 1,
    title: "Data-Centre Hardware Technician",
    shortLabel: "Data-Centre Tech",
    category: "Data & Facilities",
    infrastructureArea: "Server Halls & Compute Racks",
    oneLineMission:
      "Physically deploys, diagnoses, repairs, and decommissions the thousands of servers and storage nodes powering cloud platforms.",
    responsibilities: [
      "Replacing dead power supply units (PSUs), failed NVMe storage drives, and faulty memory modules in dense 42U rack cabinets.",
      "Routing, dressing, and testing high-density optical fiber patch cords (MPO/LC) to Top-of-Rack switches.",
      "Performing systematic hardware audits and updating asset management tracking databases across football-field scale halls.",
      "Safely decommissioning and demagnetizing retiring storage media according to cryptographic data-destruction standards.",
    ],
    everydayRoutine: {
      morning:
        "Reviews the global ticketing queue, collects replacement server blades from the secure parts inventory, and walks the cold-aisle bays checking for amber failure indicator LEDs.",
      incidentScenario:
        "When a rack-level Top-of-Rack switch drops offline, responds immediately on the floor with a crash cart console to establish serial diagnostic access.",
      documentation:
        "Logs serial numbers, MAC addresses, and physical port assignments in enterprise Data Centre Infrastructure Management (DCIM) software before closing work orders.",
    },
    toolsAndEquipment: [
      {
        name: "Crash Cart Diagnostic Console",
        category: "Diagnostic Software",
        description: "Mobile cart with monitor, keyboard, and serial/USB interfaces for physical server console access.",
      },
      {
        name: "Optical Fiber Scope & Click Cleaner",
        category: "Measurement Gear",
        description: "Microscope tool that inspects fiber connector tips for microscopic dust particles and cleans ferrule ends.",
      },
      {
        name: "Anti-Static (ESD) Wrist Straps & Boots",
        category: "Safety & PPE",
        description: "Dissipates static electricity to prevent electrostatic discharge from damaging delicate microchips.",
      },
      {
        name: "Torque Calibration Screwdrivers",
        category: "Physical Hardware",
        description: "Ensures server rack rails and heatsinks are tightened to exact manufacturer specifications.",
      },
    ],
    workingConditions: [
      {
        aspect: "Thermal & Acoustic Environment",
        detail: "Cold aisles are maintained at 18°C–22°C with high-velocity airflow, while hot aisles reach 35°C–45°C. Server fan noise exceeds 85 dBA.",
        fieldReality: "Requires mandatory hearing protection and thermal jackets during prolonged troubleshooting in containment pods.",
      },
      {
        aspect: "Physical Demands",
        detail: "Walking up to 10–15 kilometers per shift across sprawling warehouse-scale facilities and lifting heavy 2U/4U chassis (up to 30 kg).",
        fieldReality: "Use of mechanical server lifts and strict ergonomic safety protocols to prevent repetitive strain injuries.",
      },
      {
        aspect: "Shift Patterns & Security",
        detail: "24/7/365 coverage with 12-hour rotating shifts (including overnight and holiday rosters) behind multi-factor biometric security mantraps.",
        fieldReality: "Requires strict adherence to zero-trust physical access zones and continuous CCTV surveillance.",
      },
    ],
    humanSignificance:
      "When users upload photos or train AI models, they interact with physical silicon chips that wear out constantly. Without technicians swapping burnt-out drives and failed cooling fans around the clock, cloud platforms would experience rapid hardware degradation.",
    citation: {
      source: "HM216 Subtopic 4 Research Guide; Microsoft & AWS Data Center Operational Job Profiles",
      note: "Documented tasks in server lifecycle maintenance and physical DCIM operational procedures.",
    },
  },
  {
    id: "critical-facilities-engineer",
    roleNumber: 2,
    title: "Critical-Facilities Engineer",
    shortLabel: "Facilities Engineer",
    category: "Data & Facilities",
    infrastructureArea: "High-Voltage Substations, Generators & Industrial Cooling",
    oneLineMission:
      "Guarantees that electrical power and continuous cooling never stop flowing to multi-megawatt computing complexes.",
    responsibilities: [
      "Operating high-voltage electrical switchgear, uninterruptible power supplies (UPS), and massive backup diesel generator arrays.",
      "Maintaining closed-loop chilled water cooling systems, cooling towers, and computer room air handling (CRAH) units.",
      "Monitoring power usage effectiveness (PUE), water consumption rates, and electrical phase balance in building management systems.",
      "Conducting scheduled emergency electrical transfer drills simulating complete loss of the municipal electric grid.",
    ],
    everydayRoutine: {
      morning:
        "Conducts thermodynamic walk-throughs inspecting chilled water differential pressures, chemical water treatment levels, and thermal scans of electrical busways.",
      incidentScenario:
        "If a municipal substation trips during a thunderstorm, verifies that 2MW backup diesel generators start within 10 seconds and carry the facility load seamlessly.",
      documentation:
        "Records generator fuel reserves, UPS battery bank cell voltages, and thermal infrared inspection imagery in compliance logs.",
    },
    toolsAndEquipment: [
      {
        name: "Infrared Thermal Imaging Camera",
        category: "Measurement Gear",
        description: "Detects loose electrical connections and overheating breakers before they can trigger an arc flash or fire.",
      },
      {
        name: "Arc-Flash Safety Suit & Face Shield (Category 4)",
        category: "Safety & PPE",
        description: "Heavy flame-resistant protective suit shielding technicians from catastrophic electrical explosions up to 40 cal/cm².",
      },
      {
        name: "Ultrasonic Flow Meter",
        category: "Measurement Gear",
        description: "Non-invasively measures chilled water velocity through stainless steel cooling pipes.",
      },
      {
        name: "Building Management System (BMS)",
        category: "Diagnostic Software",
        description: "Centralized SCADA telemetry monitoring thousands of thermal sensors, valve positions, and electrical breakers.",
      },
    ],
    workingConditions: [
      {
        aspect: "High-Voltage Electrical Risks",
        detail: "Facilities handle electrical feeds ranging from 480V up to 115,000V utility interconnects.",
        fieldReality: "Strict Lockout/Tagout (LOTO) protocols; mistakes around high-voltage switchgear can be fatal.",
      },
      {
        aspect: "Environmental Stress & Weather",
        detail: "Inspecting exterior rooftop cooling towers and fuel storage tanks during blizzards, heatwaves, or hurricanes.",
        fieldReality: "Facilities teams sleep on-site in dedicated bunk rooms during severe weather emergencies to prevent facility drops.",
      },
      {
        aspect: "Unforgiving Error Budgets",
        detail: "Even a 5-minute complete cooling failure can cause server temperatures to spike above safe thresholds, triggering automatic thermal shutdowns.",
        fieldReality: "Continuous on-call readiness; every mechanical valve and electrical circuit breaker has an N+1 or 2N backup path.",
      },
    ],
    humanSignificance:
      "Computers generate colossal amounts of heat and require flawless electricity. Critical-facilities engineers operate the industrial thermodynamic lifelines that make the 'weightless cloud' physically possible.",
    citation: {
      source: "Uptime Institute Facility Management Standards; HM216 Subtopic 2 & 4 Case Studies",
      note: "Standards for Tier III/IV data centre maintenance and high-voltage substation resilience.",
    },
  },
  {
    id: "network-operations-engineer",
    roleNumber: 3,
    title: "Network Operations (NOC) Engineer",
    shortLabel: "NOC Engineer",
    category: "Network Operations",
    infrastructureArea: "Global Backbone Routers & Peering Fabrics",
    oneLineMission:
      "Monitors global optical backbone traffic, mitigates routing disruptions, and reroutes traffic when cables cut or routers fail.",
    responsibilities: [
      "Monitoring international backbone links using real-time telemetry dashboards showing packet loss, latency, and optical power.",
      "Troubleshooting Border Gateway Protocol (BGP) route flaps, peering policy leaks, and asymmetric routing bottlenecks.",
      "Coordinating emergency traffic re-engineering when undersea or terrestrial fiber trunks suffer physical breaks.",
      "Mitigating multi-terabit volumetric DDoS attacks by applying traffic scrubbing filters and BGP Flowspec rules.",
    ],
    everydayRoutine: {
      morning:
        "Participates in global shift handover briefings between international time zones (e.g., Singapore to Dublin to Seattle NOCs).",
      incidentScenario:
        "When an undersea fiber pair loses light abruptly, immediately triggers automated traffic drainage to shift thousands of gigabits onto alternate geographic routes.",
      documentation:
        "Drafts technical incident post-mortems detailing time-to-detection (TTD), root-cause analysis (RCA), and preventative rule updates.",
    },
    toolsAndEquipment: [
      {
        name: "SNMP & Streaming Telemetry Dashboards",
        category: "Diagnostic Software",
        description: "Real-time network visibility platforms tracking link saturation, packet discards, and optical signal attenuation.",
      },
      {
        name: "BGP Route Visualizers & Looking Glasses",
        category: "Diagnostic Software",
        description: "Software that maps global autonomous system routing paths and identifies accidental route hijacks worldwide.",
      },
      {
        name: "Command Line Terminal Multiplexers",
        category: "Diagnostic Software",
        description: "Secure SSH bastion environments used to simultaneously push configuration changes to hundreds of core routers.",
      },
      {
        name: "Emergency Conference Bridge",
        category: "Diagnostic Software",
        description: "Dedicated communications channels linking NOC staff, field engineers, and executive incident commanders.",
      },
    ],
    workingConditions: [
      {
        aspect: "24/7 Follow-the-Sun Shift Work",
        detail: "Engineers work in dedicated monitoring rooms surrounded by multi-screen video walls, operating on 8-to-12-hour rotating schedules.",
        fieldReality: "Requires high cognitive endurance to maintain vigilance during quiet periods and rapidly switch to emergency incident command.",
      },
      {
        aspect: "High-Stakes Decision Making",
        detail: "Routing decisions affect millions of concurrent user sessions and billions of dollars in commercial transactions.",
        fieldReality: "Strict peer-review procedures; misconfiguring a single BGP routing filter can accidentally disconnect an entire nation.",
      },
      {
        aspect: "Cross-Organizational Coordination",
        detail: "Must negotiate with foreign telecom operators, competitor ISPs, and transit carriers during international routing disputes.",
        fieldReality: "Clear, precise verbal and written technical communication is as vital as coding ability.",
      },
    ],
    humanSignificance:
      "The Internet does not automatically fix itself. When deep-sea cables snap or routers crash, NOC engineers work in real time behind the scenes to steer the world's communication around the wreckage.",
    citation: {
      source: "IETF RFC 4271; RIPE NCC Network Operations Documentation; HM216 Subtopic 1 & 4",
      note: "Verified procedures for global BGP path management and multi-homed carrier operations.",
    },
  },
  {
    id: "fiber-optic-technician",
    roleNumber: 4,
    title: "Fibre-Optic & Subsea Cable Technician",
    shortLabel: "Fibre & Cable Tech",
    category: "Physical Infrastructure",
    infrastructureArea: "Undersea Cables, Beach Manholes & Subterranean Conduits",
    oneLineMission:
      "Physically splices hair-thin glass cores in muddy municipal trenches and aboard specialized cable ships in rough seas.",
    responsibilities: [
      "Precision fusion arc-splicing of single-mode optical fiber cores with micro-meter tolerances under microscope magnification.",
      "Deploying Optical Time-Domain Reflectometers (OTDR) to pinpoint cable breaks dozens of miles away down to the exact meter.",
      "Working aboard specialized cable repair ships to hoist, inspect, splice, and re-submerge damaged transoceanic cables.",
      "Sealing high-pressure waterproof joint closures and inspecting beach landing manholes against coastal erosion.",
    ],
    everydayRoutine: {
      morning:
        "Prepares optical cleavers, calibrates fusion splicer arc intensities, and reviews subterranean utility blueprints before street excavation begins.",
      incidentScenario:
        "When an excavator cuts a municipal fiber trunk, enters a confined utility vault with portable gas detectors and pumps to begin emergency core fusion.",
      documentation:
        "Records optical insertion loss (dB) and back-reflection traces for every individual fiber strand in permanent carrier route records.",
    },
    toolsAndEquipment: [
      {
        name: "Precision Fusion Arc Splicer",
        category: "Physical Hardware",
        description: "Uses high-voltage electric arcs to melt and fuse two microscopic glass cores together with optical loss under 0.02 dB.",
      },
      {
        name: "Optical Time-Domain Reflectometer (OTDR)",
        category: "Measurement Gear",
        description: "Shoots laser pulses into fiber and measures backscatter reflections to map optical attenuation and locate breaks miles away.",
      },
      {
        name: "High-Precision Diamond Fiber Cleaver",
        category: "Physical Hardware",
        description: "Scores and snaps optical glass perpendicular to within 0.5 degrees to enable flawless fusion splicing.",
      },
      {
        name: "Confined-Space Gas Detector & Ventilation Blower",
        category: "Safety & PPE",
        description: "Tests underground manholes for deadly hydrogen sulfide and methane gases before technicians climb inside.",
      },
    ],
    workingConditions: [
      {
        aspect: "Extreme Physical Work Environments",
        detail: "Splicing in flooded utility manholes beneath city streets, roadside ditches, bucket trucks in winter storms, or rolling ships in gale-force winds.",
        fieldReality: "Requires steady hands and intense focus while working in cramped, dirty, and hazardous outdoor conditions.",
      },
      {
        aspect: "Subsea Repair Ship Deployments",
        detail: "Crews on cable ships (like the CS Reliance) deploy at sea for weeks at a time using dynamic positioning thrusters over 4,000-meter ocean trenches.",
        fieldReality: "Extended isolation from family, dangerous deck operations with heavy steel cables under tension, and unpredictable weather.",
      },
      {
        aspect: "Zero-Margin Tolerances",
        detail: "A single microscopic speck of dust on a 9-micron glass core will vaporize under high-powered laser light and ruin the splice.",
        fieldReality: "Technicians maintain surgical-cleanroom hygiene inside portable vans or shipboard jointing containers.",
      },
    ],
    humanSignificance:
      "Every gigabyte of data that crosses an ocean or traverses a city travels through glass strands thinner than a human hair. Fiber technicians are the manual artisans whose physical precision holds the global digital web together.",
    citation: {
      source: "KIS-ORCA Subsea Cable Maintenance; ITU-T G.652 Standards; HM216 Subtopic 5 Research",
      note: "Technical procedures for arc-fusion splicing and marine cable recovery operations.",
    },
  },
  {
    id: "cybersecurity-specialist",
    roleNumber: 5,
    title: "Cybersecurity & Security Operations (SOC) Analyst",
    shortLabel: "Cybersecurity Analyst",
    category: "Systems & Security",
    infrastructureArea: "Security Operations Centres & Perimeter Firewalls",
    oneLineMission:
      "Defends infrastructure nodes, network backbones, and authentication systems against state-sponsored attacks, intrusion, and zero-day exploits.",
    responsibilities: [
      "Monitoring centralized Security Information and Event Management (SIEM) systems for anomalous network traffic and intrusion attempts.",
      "Conducting threat hunting to discover hidden lateral movement within critical control systems and data center networks.",
      "Responding to zero-day vulnerabilities by deploying network-wide IPS signatures and isolating compromised nodes.",
      "Managing public key infrastructure (PKI), TLS certificates, and cryptographic hardware security modules (HSMs).",
    ],
    everydayRoutine: {
      morning:
        "Reviews global threat intelligence feeds, triages overnight automated alerts, and checks anomalous DNS query spikes.",
      incidentScenario:
        "When an unauthorized credential-stuffing attack spikes against an edge API gateway, initiates rate-limiting rules and coordinates forensic packet captures.",
      documentation:
        "Prepares chain-of-custody forensic reports, indicators of compromise (IoCs), and executive security briefing summaries.",
    },
    toolsAndEquipment: [
      {
        name: "Security Information & Event Management (SIEM)",
        category: "Diagnostic Software",
        description: "Aggregates and analyzes billions of log events per second from firewalls, servers, and routers using behavioral analytics.",
      },
      {
        name: "Deep Packet Inspection (DPI) Analyzers",
        category: "Diagnostic Software",
        description: "Captures and dissects raw network packets (Wireshark/Zeek) down to the byte level to inspect suspicious payloads.",
      },
      {
        name: "Hardware Security Modules (HSM)",
        category: "Physical Hardware",
        description: "Tamper-resistant physical appliances that securely generate, store, and process root cryptographic keys.",
      },
      {
        name: "Endpoint Detection & Response (EDR) Agent",
        category: "Diagnostic Software",
        description: "Monitors server operating systems in real time to instantly kill malicious processes and isolate compromised hosts.",
      },
    ],
    workingConditions: [
      {
        aspect: "Asymmetric Cognitive Pressure",
        detail: "Defenders must protect every port and server, whereas attackers only need to find a single unpatched flaw.",
        fieldReality: "High cognitive burden and alert fatigue from filtering thousands of false positives daily.",
      },
      {
        aspect: "Urgent Incident Response Cycles",
        detail: "Active compromises require immediate containment regardless of the hour, often requiring 18-hour continuous war-room sessions.",
        fieldReality: "Strict operational security (OPSEC) rules; analysts must avoid tipping off adversaries while investigating.",
      },
      {
        aspect: "Continuous Skill Evolution",
        detail: "Adversary tactics, techniques, and procedures (TTPs) evolve weekly as AI-assisted exploitation increases.",
        fieldReality: "Requires ongoing rigorous study of vulnerability disclosures and defensive engineering certifications.",
      },
    ],
    humanSignificance:
      "The physical infrastructure of the Internet would collapse into chaos within hours without cybersecurity specialists actively thwarting automated botnets, ransomware crews, and state-backed espionage campaigns.",
    citation: {
      source: "NIST Cybersecurity Framework (CSF 2.0); SANS Institute Incident Response Guides; HM216 Subtopic 4",
      note: "Documented SOC workflows, threat-hunting methodologies, and cyber incident management standards.",
    },
  },
  {
    id: "database-administrator",
    roleNumber: 6,
    title: "Database Administrator & Storage Engineer",
    shortLabel: "Database Administrator",
    category: "Data & Facilities",
    infrastructureArea: "Distributed Storage Fabrics & Relational Databases",
    oneLineMission:
      "Protects society's digital memory, ensuring that petabytes of records, transactions, and user data remain durable, consistent, and instantaneously retrievable.",
    responsibilities: [
      "Architecting distributed database replication clusters across multi-continental cloud regions with millisecond sync latency.",
      "Tuning complex SQL query execution plans, indexing schemas, and storage memory buffers to prevent system bottlenecks.",
      "Conducting automated backup verification drills and testing point-in-time recovery to guarantee zero data loss.",
      "Managing data encryption at rest and in transit in compliance with strict privacy and financial sovereignty laws.",
    ],
    everydayRoutine: {
      morning:
        "Analyzes overnight slow-query telemetry logs, reviews disk I/O latency metrics across flash storage arrays, and optimizes database connection pools.",
      incidentScenario:
        "When an unexpected storage volume corruption occurs on a primary database node, triggers an automated replica promotion to maintain 100% service availability.",
      documentation:
        "Maintains data architecture schemas, disaster recovery runbooks, and audit trails demonstrating regulatory data integrity.",
    },
    toolsAndEquipment: [
      {
        name: "Database Query Profilers & APM Tools",
        category: "Diagnostic Software",
        description: "Visualizes index performance, lock contention, and execution bottlenecks across distributed database clusters.",
      },
      {
        name: "Enterprise Flash Storage Arrays (NVMe-oF)",
        category: "Physical Hardware",
        description: "Ultra-fast solid-state hardware arrays delivering millions of IOPS over high-speed optical fabrics.",
      },
      {
        name: "Automated Backup & Snapshot Engines",
        category: "Diagnostic Software",
        description: "Creates immutable, write-once-read-many (WORM) snapshots of multi-terabyte databases to defend against data loss.",
      },
      {
        name: "Data Masking & Redaction Tools",
        category: "Diagnostic Software",
        description: "Sanitizes personally identifiable information (PII) before database replicas are used in testing environments.",
      },
    ],
    workingConditions: [
      {
        aspect: "Zero-Loss Responsibility",
        detail: "Losing user financial records or medical databases is catastrophic and irreversible.",
        fieldReality: "Database administrators carry heavy psychological pressure during major database migrations and schema updates.",
      },
      {
        aspect: "Maintenance Window Scheduling",
        detail: "Major database restructuring and maintenance must be conducted during lowest-traffic windows (often 2:00 AM – 5:00 AM on weekends).",
        fieldReality: "Requires routine irregular hours and meticulous preparation to avoid unexpected downtime.",
      },
      {
        aspect: "Scaling Distributed Systems",
        detail: "Managing the physics of the CAP theorem (Consistency, Availability, Partition tolerance) across transoceanic distances.",
        fieldReality: "Deep theoretical understanding of distributed systems combined with practical command-line operational discipline.",
      },
    ],
    humanSignificance:
      "Every digital interaction produces data. Database administrators ensure that society's collective memory—from bank balances to family photographs—remains permanently safe from corruption and instantly accessible.",
    citation: {
      source: "ACM SIGMOD Systems Principles; VLDB Operational Case Studies; HM216 Subtopic 4 Research",
      note: "Empirical studies in distributed storage durability and operational disaster recovery workflows.",
    },
  },
  {
    id: "site-reliability-engineer",
    roleNumber: 7,
    title: "Software & Site Reliability Engineer (SRE)",
    shortLabel: "Software & SRE",
    category: "Systems & Security",
    infrastructureArea: "Cloud Orchestration, Kubernetes & Distributed Software",
    oneLineMission:
      "Applies software engineering discipline to operations, writing automation code to keep planetary-scale digital services online without human intervention.",
    responsibilities: [
      "Designing automated self-healing mechanisms and container orchestration clusters (Kubernetes) that absorb server crashes automatically.",
      "Defining and monitoring Service Level Indicators (SLIs) and Service Level Objectives (SLOs) to establish strict system error budgets.",
      "Conducting Chaos Engineering experiments (such as Chaos Monkey) in production to prove services can survive random data centre outages.",
      "Refactoring application code and infrastructure-as-code (Terraform) to eliminate repetitive manual operational tasks ('toil').",
    ],
    everydayRoutine: {
      morning:
        "Reviews error budget burn rates with software developers to decide whether teams can release new features or must focus on stability.",
      incidentScenario:
        "When an unhandled edge-case bug causes memory leaks across 5,000 microservice containers, executes an automated progressive rollback to the last stable release.",
      documentation:
        "Authors blameless post-mortem documents investigating root systemic causes rather than assigning personal fault.",
    },
    toolsAndEquipment: [
      {
        name: "Distributed Tracing & APM Telemetry",
        category: "Diagnostic Software",
        description: "Traces individual user requests across hundreds of microservices to spot latency spikes and failing RPC calls.",
      },
      {
        name: "Container Orchestration Engine (Kubernetes)",
        category: "Diagnostic Software",
        description: "Automates deployment, scaling, and self-healing recovery of containerized software across global server clusters.",
      },
      {
        name: "Infrastructure-as-Code (Terraform / Pulumi)",
        category: "Diagnostic Software",
        description: "Defines physical and virtual networks, load balancers, and cloud resources purely as audited version-controlled code.",
      },
      {
        name: "Automated On-Call Paging Systems",
        category: "Diagnostic Software",
        description: "Intelligently routes high-severity production alerts directly to the responsible engineers' mobile devices within seconds.",
      },
    ],
    workingConditions: [
      {
        aspect: "On-Call Rotation Schedules",
        detail: "Engineers carry emergency secondary pagers for one-week shifts, obligated to acknowledge high-severity alerts within 5 minutes.",
        fieldReality: "Sleep disruption and elevated stress during on-call weeks; requires robust organizational boundaries to prevent burnout.",
      },
      {
        aspect: "Blameless Culture",
        detail: "Pioneered by Google's SRE methodology: failures are treated as systemic opportunities to improve software, not reasons to punish individuals.",
        fieldReality: "Fosters open reporting of near-misses and psychological safety across engineering organizations.",
      },
      {
        aspect: "Balancing Coding vs. Firefighting",
        detail: "SREs strictly cap operational firefighting to 50% of their time; the other 50% must be spent writing automation software.",
        fieldReality: "Requires relentless automation of manual tasks to keep engineering overhead sustainable as systems grow exponentially.",
      },
    ],
    humanSignificance:
      "When billions of users click simultaneously, no human team could manually configure every server. Site Reliability Engineers build the intelligent software layer that allows the global Internet to heal itself when physical components fail.",
    citation: {
      source: "Google Site Reliability Engineering Handbook; USENIX SREcon Technical Archive; HM216 Subtopic 4",
      note: "Standard operational principles for error budgets, blameless post-mortems, and distributed automation.",
    },
  },
];
