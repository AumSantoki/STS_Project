/**
 * Strongly typed contracts for "The People Behind the Internet" section.
 * Grounded in HM216 Science, Technology, and Society (STS) Research Guide.
 */

export interface RoleTool {
  name: string;
  category: "Physical Hardware" | "Diagnostic Software" | "Safety & PPE" | "Measurement Gear";
  description: string;
}

export interface WorkingCondition {
  aspect: string;
  detail: string;
  fieldReality: string;
}

export interface ProfessionalRole {
  id: string;
  roleNumber: number;
  title: string;
  shortLabel: string;
  category: "Physical Infrastructure" | "Network Operations" | "Systems & Security" | "Data & Facilities";
  infrastructureArea: string;
  oneLineMission: string;
  responsibilities: string[];
  everydayRoutine: {
    morning: string;
    incidentScenario: string;
    documentation: string;
  };
  toolsAndEquipment: RoleTool[];
  workingConditions: WorkingCondition[];
  humanSignificance: string;
  citation: {
    source: string;
    note: string;
  };
}

export interface IncidentStep {
  stepNumber: number;
  timeElapsed: string;
  leadRole: string;
  roleId: string;
  actionTaken: string;
  toolsUsed: string;
  coordinationDetail: string;
}

export interface IncidentScenario {
  id: string;
  title: string;
  subtitle: string;
  eventType: "Subsea Cable Severed" | "Terrestrial Fiber Severed" | "Data Centre Cooling Loss" | "BGP Routing Anomaly";
  location: string;
  realWorldBasis: string;
  summary: string;
  affectedHardwareId?: string;
  affectedHardwareName?: string;
  steps: IncidentStep[];
  outcome: string;
  stsTakeaway: string;
}
