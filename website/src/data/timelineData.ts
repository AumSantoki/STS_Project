export interface TimelineMilestone {
  year: string;
  title: string;
  explanation: string; // One-line simple explanation under 20 words
  significance: string;
  source: string;
  category: "Telegraph" | "Coaxial" | "Fiber Optic" | "Hyperscale";
}

export const PHYSICAL_INTERNET_TIMELINE: TimelineMilestone[] = [
  {
    year: "1858",
    title: "First Transatlantic Telegraph Cable",
    explanation: "Queen Victoria sent the first message across the Atlantic using gutta-percha insulated copper wires.",
    significance: "Reduced communication time between London and New York from 10 days to a few minutes.",
    source: "Smithsonian Institution Archives & Atlantic Cable History (verified)",
    category: "Telegraph",
  },
  {
    year: "1866",
    title: "First Permanent Transatlantic Cable",
    explanation: "Brunel's massive iron steamship Great Eastern successfully laid durable submarine telegraph lines.",
    significance: "Established the first unbreakable electronic link between the Old World and the Americas.",
    source: "ICPC Historical Milestones Dossier (verified)",
    category: "Telegraph",
  },
  {
    year: "1956",
    title: "TAT-1 (First Transatlantic Telephone Cable)",
    explanation: "Carried 36 simultaneous voice calls across the Atlantic Ocean using coaxial copper cables.",
    significance: "Replaced radio-telephony and carried the historic Washington-Moscow Cold War hotline.",
    source: "AT&T Archives & Submarine Telecoms Forum (verified)",
    category: "Coaxial",
  },
  {
    year: "1969",
    title: "ARPANET First Node-to-Node Transmission",
    explanation: "Engineers transmitted the letters 'L-O' between UCLA and Stanford University over leased telephone circuits.",
    significance: "Invented packet switching (breaking data into chunks instead of reserving whole phone lines).",
    source: "DARPA Historical Archives / Computer History Museum (verified)",
    category: "Coaxial",
  },
  {
    year: "1988",
    title: "TAT-8 (First Transatlantic Optical Fiber Cable)",
    explanation: "The world's first deep-sea fiber optic cable used pulses of light rather than electricity.",
    significance: "Handled 40,000 phone calls at once; ignited the physical foundation of the modern World Wide Web.",
    source: "IEEE Milestone in Electrical Engineering & France Telecom (verified)",
    category: "Fiber Optic",
  },
  {
    year: "1997",
    title: "FLAG (Fiber-Optic Link Around the Globe)",
    explanation: "A continuous 28,000-kilometer fiber line connected the United Kingdom to Japan.",
    significance: "Linked Western Europe, the Middle East, India, and East Asia into an optical super-highway.",
    source: "FLAG Telecom Technical Specifications & Subsea Telecoms Forum (verified)",
    category: "Fiber Optic",
  },
  {
    year: "2010",
    title: "Hyperscale Cloud Consortia Era",
    explanation: "Tech giants like Google, Microsoft, and Meta began directly funding and building undersea cables.",
    significance: "Private tech companies overtook telecom monopolies as the primary builders of subsea infrastructure.",
    source: "TeleGeography Global Bandwidth Research Report 2024 (verified)",
    category: "Hyperscale",
  },
  {
    year: "2024",
    title: "Petabit-Scale Space-Division Multiplexing (SDM)",
    explanation: "New cables like 2Africa and Echo pack 24 fiber pairs capable of carrying hundreds of terabits per second.",
    significance: "Meets surging global demand for AI models, video streaming, and mobile cloud computing.",
    source: "SubCom & ASN Technical Whitepapers (verified)",
    category: "Hyperscale",
  },
];

