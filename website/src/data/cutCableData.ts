export interface MeshNode {
  id: string;
  name: string;
  x: number;
  y: number;
  role: "hub" | "endpoint";
}

export interface MeshLink {
  id: string;
  from: string;
  to: string;
  label: string;
  pathD: string;
  broken: boolean;
  activeTraffic: boolean;
}

export const NETWORK_NODES: MeshNode[] = [
  { id: "lon", name: "London Hub", x: 120, y: 110, role: "endpoint" },
  { id: "par", name: "Paris IXP", x: 260, y: 70, role: "hub" },
  { id: "fra", name: "Frankfurt IXP", x: 440, y: 110, role: "hub" },
  { id: "mar", name: "Marseille Landing", x: 280, y: 240, role: "hub" },
  { id: "bom", name: "Mumbai Hub", x: 580, y: 220, role: "endpoint" },
];

export const INITIAL_LINKS: Omit<MeshLink, "broken" | "activeTraffic">[] = [
  {
    id: "link-lon-par",
    from: "lon",
    to: "par",
    label: "Channel Tunnel Fiber",
    pathD: "M 120,110 L 260,70",
  },
  {
    id: "link-par-fra",
    from: "par",
    to: "fra",
    label: "Trans-European Terrestrial",
    pathD: "M 260,70 L 440,110",
  },
  {
    id: "link-lon-mar",
    from: "lon",
    to: "mar",
    label: "Atlantic Coastal Line",
    pathD: "M 120,110 L 280,240",
  },
  {
    id: "link-par-mar",
    from: "par",
    to: "mar",
    label: "Rhone Valley Trunk",
    pathD: "M 260,70 L 280,240",
  },
  {
    id: "link-fra-bom",
    from: "fra",
    to: "bom",
    label: "Suez/Red Sea Subsea Cable",
    pathD: "M 440,110 L 580,220",
  },
  {
    id: "link-mar-bom",
    from: "mar",
    to: "bom",
    label: "SEA-ME-WE Optical Trunk",
    pathD: "M 280,240 L 580,220",
  },
];

