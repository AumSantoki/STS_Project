export interface ChartDataItem {
  label: string;
  value: number;
  secondaryValue?: number;
  unit: string;
  color?: string;
  note?: string;
}

export interface MetricSection {
  id: string;
  title: string;
  subtitle: string;
  source: string;
  data: ChartDataItem[];
}

export const CABLE_VS_SATELLITE_DATA: MetricSection = {
  id: "cable-vs-satellite",
  title: "Intercontinental Data Traffic Share",
  subtitle: "Cables vs satellites for global cross-ocean communications",
  source: "TeleGeography Submarine Telecoms Report & ICPC (verified)",
  data: [
    { label: "Submarine Fiber Cables", value: 99, unit: "%", color: "#C47745", note: "Carries 99% of all intercontinental internet traffic" },
    { label: "Satellites (LEO & GEO)", value: 1, unit: "%", color: "#8E9B80", note: "Mainly used for remote islands, maritime & aviation" },
  ],
};

export const DATA_CENTRE_ENERGY_DATA: MetricSection = {
  id: "data-centre-energy",
  title: "Global Data Centre Electricity Consumption",
  subtitle: "2024 estimated baseline vs 2030 projection (in Terawatt-hours, TWh)",
  source: "IEA (International Energy Agency) Electricity 2024 Analysis & Projections Report",
  data: [
    { label: "2024 Actual / Baseline", value: 460, unit: "TWh", color: "#252720", note: "Roughly 1.5% to 2% of total global electricity demand" },
    { label: "2026 Near-Term", value: 650, unit: "TWh", color: "#D7B96D", note: "Rapid acceleration driven by AI and cloud workloads" },
    { label: "2030 Projection", value: 1050, unit: "TWh", color: "#C47745", note: "IEA upper-range projection, exceeding entire electricity use of Japan" },
  ],
};

export const CABLE_FAULTS_DATA: MetricSection = {
  id: "cable-faults",
  title: "Causes of Undersea Cable Faults",
  subtitle: "Breakdown of ~150 to 200 annual subsea cable breaks",
  source: "ICPC (International Cable Protection Committee) Global Fault Database (verified)",
  data: [
    { label: "Commercial Fishing Trawlers", value: 42, unit: "%", color: "#C47745", note: "Heavy bottom nets catching and dragging shallow cables" },
    { label: "Ship Anchors", value: 28, unit: "%", color: "#D7B96D", note: "Emergency or unanchored dragging anchors hooking cables" },
    { label: "Natural Hazards", value: 18, unit: "%", color: "#8E9B80", note: "Submarine landslides, earthquakes, and turbidity currents" },
    { label: "Component Failure / Shark / Other", value: 12, unit: "%", color: "#34372E", note: "Power feed equipment, optical repeaters, abrasion on rocks" },
  ],
};

export const CAPACITY_GROWTH_DATA: MetricSection = {
  id: "capacity-growth",
  title: "Growth of Global Lit Subsea Cable Capacity",
  subtitle: "Potential bandwidth across global oceans (Terabits per second, Tbps)",
  source: "Subsea Telecoms Forum Annual Industry Report & ITU statistics (verified)",
  data: [
    { label: "2000", value: 2, unit: "Tbps", color: "#8E9B80" },
    { label: "2005", value: 12, unit: "Tbps", color: "#8E9B80" },
    { label: "2010", value: 60, unit: "Tbps", color: "#D7B96D" },
    { label: "2015", value: 240, unit: "Tbps", color: "#D7B96D" },
    { label: "2020", value: 680, unit: "Tbps", color: "#C47745" },
    { label: "2024", value: 1450, unit: "Tbps", color: "#C47745" },
  ],
};

