export interface CableRoute {
  id: string;
  name: string;
  lengthKm: number;
  year: number;
  continents: string;
  ocean: "Atlantic" | "Pacific" | "Indian" | "Global";
  landingPoints: string[];
  capacityTbps: string;
  pathD: string;
  source: string;
}

export const CABLE_ROUTES: CableRoute[] = [
  {
    id: "marea",
    name: "MAREA",
    lengthKm: 6605,
    year: 2017,
    continents: "North America to Europe",
    ocean: "Atlantic",
    landingPoints: ["Virginia Beach (USA)", "Bilbao (Spain)"],
    capacityTbps: "224 Tbps",
    // Coordinates mapped to SVG viewBox="0 0 1000 500"
    pathD: "M 255,185 Q 360,165 465,178",
    source: "Telxius / Microsoft / Meta official dossier (verified)",
  },
  {
    id: "grace-hopper",
    name: "Grace Hopper",
    lengthKm: 6250,
    year: 2022,
    continents: "North America to Europe",
    ocean: "Atlantic",
    landingPoints: ["New York (USA)", "Bude (UK)", "Bilbao (Spain)"],
    capacityTbps: "352 Tbps",
    pathD: "M 270,175 Q 370,140 455,155",
    source: "Google Cloud Infrastructure Subsea Fleet (verified)",
  },
  {
    id: "dunant",
    name: "Dunant",
    lengthKm: 6400,
    year: 2021,
    continents: "North America to Europe",
    ocean: "Atlantic",
    landingPoints: ["Virginia Beach (USA)", "Saint-Hilaire-de-Riez (France)"],
    capacityTbps: "250 Tbps",
    pathD: "M 255,185 Q 365,150 460,170",
    source: "Google Subsea Infrastructure & SubCom (verified)",
  },
  {
    id: "faster",
    name: "FASTER",
    lengthKm: 11629,
    year: 2016,
    continents: "North America to Asia",
    ocean: "Pacific",
    landingPoints: ["Bandon (USA)", "Chiba & Mie (Japan)", "Tanshui (Taiwan)"],
    capacityTbps: "60 Tbps",
    pathD: "M 195,170 C 120,130 50,140 20,160 M 980,160 C 930,170 870,180 830,185",
    source: "NEC / Google Consortium specifications (verified)",
  },
  {
    id: "southern-cross",
    name: "Southern Cross NEXT",
    lengthKm: 15840,
    year: 2022,
    continents: "North America to Oceania",
    ocean: "Pacific",
    landingPoints: ["Los Angeles (USA)", "Suva (Fiji)", "Sydney (Australia)"],
    capacityTbps: "72 Tbps",
    pathD: "M 205,200 C 160,250 120,310 100,340 M 960,340 C 910,380 880,400 860,405",
    source: "Southern Cross Cable Network specifications (verified)",
  },
  {
    id: "sea-me-we-6",
    name: "SEA-ME-WE 6",
    lengthKm: 21700,
    year: 2025,
    continents: "Asia, Middle East, Europe",
    ocean: "Indian",
    landingPoints: ["Marseille (France)", "Suez (Egypt)", "Mumbai (India)", "Singapore"],
    capacityTbps: "126 Tbps",
    pathD: "M 470,175 Q 520,230 550,220 Q 610,250 670,250 Q 720,290 770,285",
    source: "Subsea Telecoms Forum & Consortium reports (verified)",
  },
  {
    id: "2africa",
    name: "2Africa",
    lengthKm: 45000,
    year: 2024,
    continents: "Africa, Europe, Middle East, Asia",
    ocean: "Global",
    landingPoints: ["Bude (UK)", "Genoa (Italy)", "Cape Town (South Africa)", "Mumbai (India)"],
    capacityTbps: "180 Tbps",
    pathD: "M 460,155 Q 490,210 470,260 Q 480,340 520,400 Q 560,340 550,230 Q 610,240 670,250",
    source: "Meta / ASN 2Africa Consortium technical whitepaper (verified)",
  },
  {
    id: "peace",
    name: "PEACE Cable",
    lengthKm: 15000,
    year: 2022,
    continents: "Asia, Africa, Europe",
    ocean: "Indian",
    landingPoints: ["Gwadar (Pakistan)", "Mombasa (Kenya)", "Marseille (France)"],
    capacityTbps: "96 Tbps",
    pathD: "M 470,175 Q 530,225 560,280 Q 600,280 645,230",
    source: "PCCW Global & Hengtong Group technical dossier (verified)",
  },
  {
    id: "echo",
    name: "Echo",
    lengthKm: 17130,
    year: 2024,
    continents: "North America to Southeast Asia",
    ocean: "Pacific",
    landingPoints: ["Eureka (USA)", "Guam", "Singapore", "Jakarta (Indonesia)"],
    capacityTbps: "140 Tbps",
    pathD: "M 195,175 C 130,210 60,250 10,270 M 990,270 C 900,270 820,280 770,290",
    source: "Meta / Google Subsea Trans-Pacific Program (verified)",
  },
  {
    id: "curie",
    name: "Curie",
    lengthKm: 10500,
    year: 2019,
    continents: "North America to South America",
    ocean: "Pacific",
    landingPoints: ["Los Angeles (USA)", "Valparaiso (Chile)", "Panama"],
    capacityTbps: "72 Tbps",
    pathD: "M 205,200 Q 240,260 270,300 Q 280,380 295,430",
    source: "Google Subsea Infrastructure / SubCom (verified)",
  },
];

