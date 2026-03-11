import type { Metadata } from "next";
import type { StatusEntry } from "@/types";

export const metadata: Metadata = {
  title: "System Status",
  description:
    "Live status of all HydrHost hydrogen infrastructure components.",
};

const SYSTEMS: StatusEntry[] = [
  {
    id: "api-gateway",
    name: "API Gateway",
    status: "operational",
    uptimePercent: 99.999,
  },
  {
    id: "compute-nodes",
    name: "Compute Nodes (Hydrogen Shell)",
    status: "operational",
    uptimePercent: 99.998,
  },
  {
    id: "edge-network",
    name: "Global Edge Network",
    status: "operational",
    uptimePercent: 99.997,
  },
  {
    id: "signal-propagation",
    name: "Signal Propagation Layer",
    status: "operational",
    uptimePercent: 99.999,
  },
  {
    id: "vector-mapping",
    name: "Vector Map Retrieval",
    status: "operational",
    uptimePercent: 99.995,
  },
  {
    id: "hydrogen-cooling",
    name: "Hydrogen Cooling System",
    status: "operational",
    uptimePercent: 100,
  },
  {
    id: "dns",
    name: "DNS Resolution",
    status: "operational",
    uptimePercent: 99.999,
  },
  {
    id: "object-storage",
    name: "Object Storage",
    status: "degraded",
    uptimePercent: 98.7,
  },
];

const STATUS_CONFIG: Record<
  StatusEntry["status"],
  { label: string; dotClass: string; badgeClass: string }
> = {
  operational: {
    label: "Operational",
    dotClass: "bg-emerald-400",
    badgeClass: "text-emerald-400",
  },
  degraded: {
    label: "Degraded",
    dotClass: "bg-yellow-400",
    badgeClass: "text-yellow-400",
  },
  outage: {
    label: "Outage",
    dotClass: "bg-red-500",
    badgeClass: "text-red-400",
  },
  maintenance: {
    label: "Maintenance",
    dotClass: "bg-blue-400",
    badgeClass: "text-blue-400",
  },
};

function overallStatus(systems: StatusEntry[]): StatusEntry["status"] {
  if (systems.some((s) => s.status === "outage")) return "outage";
  if (systems.some((s) => s.status === "degraded")) return "degraded";
  if (systems.some((s) => s.status === "maintenance")) return "maintenance";
  return "operational";
}

export default function StatusPage() {
  const overall = overallStatus(SYSTEMS);
  const config = STATUS_CONFIG[overall];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-white">System Status</h1>
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${
              overall === "operational"
                ? "border-emerald-500/30 bg-emerald-500/10"
                : overall === "degraded"
                ? "border-yellow-500/30 bg-yellow-500/10"
                : "border-red-500/30 bg-red-500/10"
            }`}
            role="status"
            aria-live="polite"
            aria-label={`Overall system status: ${config.label}`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full ${config.dotClass} animate-pulse`}
              aria-hidden="true"
            />
            <span className={`font-semibold text-sm ${config.badgeClass}`}>
              {overall === "operational"
                ? "All Systems Operational"
                : overall === "degraded"
                ? "Some Systems Degraded"
                : "Active Incident"}
            </span>
          </div>
        </div>

        {/* System list */}
        <section aria-labelledby="components-heading">
          <h2
            id="components-heading"
            className="text-lg font-semibold text-white mb-4"
          >
            Components
          </h2>
          <ul
            className="rounded-xl border border-slate-800 overflow-hidden divide-y divide-slate-800"
            role="list"
            aria-label="System component statuses"
          >
            {SYSTEMS.map((system) => {
              const sc = STATUS_CONFIG[system.status];
              return (
                <li
                  key={system.id}
                  className="flex items-center justify-between px-6 py-4 bg-slate-900 hover:bg-slate-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2.5 h-2.5 rounded-full shrink-0 ${sc.dotClass}`}
                      aria-hidden="true"
                    />
                    <span className="text-white text-sm font-medium">
                      {system.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-500 text-xs hidden sm:block">
                      {system.uptimePercent.toFixed(3)}% uptime
                    </span>
                    <span
                      className={`text-xs font-semibold ${sc.badgeClass}`}
                      aria-label={`Status: ${sc.label}`}
                    >
                      {sc.label}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Last updated */}
        <p className="text-center text-slate-600 text-xs" aria-live="polite">
          Last updated: {new Date().toUTCString()}
        </p>
      </div>
    </div>
  );
}
