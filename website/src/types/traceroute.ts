/**
 * Strongly typed data contracts for the Physical Traceroute educational experience.
 * Grounded directly in HM216 Science, Technology, and Society (STS) research documents.
 */

export interface HardwareSpec {
  label: string;
  value: string;
  detail?: string;
}

export interface HumanRole {
  role: string;
  responsibility: string;
  fieldReality: string;
}

export interface ResearchReference {
  documentTitle: string;
  sectionOrPage: string;
  documentId?: string;
  citationNotes: string;
}

export interface PhysicalMetric {
  label: string;
  value: string;
  unit?: string;
  context: string;
}

export interface TracerouteStage {
  id: string;
  stageNumber: number;
  title: string;
  shortLabel: string;
  category: string;
  summary: string;
  physicalExplanation: string;
  hardwareSpecs: HardwareSpec[];
  whyItMatters: string;
  humanRoles: HumanRole[];
  researchReference: ResearchReference;
  caveats: string[];
  metrics: PhysicalMetric[];
  iconKey: "radio" | "ethernet" | "git-commit" | "anchor" | "cable" | "server";
}
