/**
 * Strongly typed contracts for "The Physical Internet — Interactive Hardware Atlas".
 * Grounded in HM216 Science, Technology, and Society (STS) Research Documents.
 */

export interface AnatomicalPart {
  id: string;
  name: string;
  materialOrTech: string;
  description: string;
  physicalLocation: string;
}

export interface HardwareSpecification {
  label: string;
  value: string;
  context: string;
}

export interface HardwareComponent {
  id: string;
  componentNumber: number;
  name: string;
  subtitle: string;
  category: "Compute & Storage" | "Routing & Switching" | "Optical Transmission" | "Subsea Infrastructure" | "Optoelectronics" | "Power & Thermal";
  oneLinePurpose: string;
  physicalDescription: string;
  howItWorks: string;
  internetRole: string;
  anatomicalParts: AnatomicalPart[];
  specifications: HardwareSpecification[];
  connectedRoleIds: string[]; // references peopleRoles.ts role IDs
  connectedStageNumbers: number[]; // references tracerouteStages.ts stageNumbers
  academicSource: {
    documentTitle: string;
    chapterOrSection: string;
    citationNote: string;
  };
}
