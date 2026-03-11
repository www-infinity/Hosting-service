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
