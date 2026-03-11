export interface NavLink {
  label: string;
  href: string;
}

export interface FooterSection {
  heading: string;
  links: NavLink[];
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaLabel: string;
}

export interface StatusEntry {
  id: string;
  name: string;
  status: "operational" | "degraded" | "outage" | "maintenance";
  uptimePercent: number;
}

export interface MetricCard {
  id: string;
  label: string;
  value: string;
  unit: string;
  trend: "up" | "down" | "stable";
}

export interface FrequencyTier {
  id: "hyperfine" | "vibrational";
  label: string;
  frequencyHz: number;
  frequencyDisplay: string;
  wavelength: string;
  mechanism: string;
  application: string;
  cyclesPerSecond: string;
}

export interface NanoMaterial {
  id: string;
  name: string;
  type: "clathrasil" | "core-shell" | "borohydride" | "composite";
  storageCapacity: string;
  releaseTemp: string;
  description: string;
  reference: string;
}

export interface ThermalSpec {
  property: string;
  value: string;
  unit: string;
  comparison: string;
}

export interface CitationEntry {
  id: string;
  index: number;
  authors: string;
  title: string;
  journal: string;
  year: number;
  url: string;
}

export type SpinState = "para" | "ortho";
export type BitEdge = "rising" | "falling" | "stable";

export interface ThermalHarvestEvent {
  nodeId: string;
  timestamp: string;
  shellCoolingRate: number;
  coreHeatRate: number;
  deltaT: number;
  energyHarvestedJoules: number;
}

export interface LatencyReading {
  id: string;
  nodeId: string;
  latencyMs: number;
  spinState: SpinState;
  timestamp: string;
  hops: number;
}

export interface TerminalCommand {
  verb: string;
  args: string[];
  raw: string;
}
