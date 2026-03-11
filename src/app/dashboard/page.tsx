import type { Metadata } from "next";
import {
  Server,
  Thermometer,
  Wifi,
  Activity,
  TrendingUp,
  TrendingDown,
  Minus,
  AlertTriangle,
  CreditCard,
} from "lucide-react";
import type { MetricCard } from "@/types";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Monitor your HydrHost hydrogen-cooled infrastructure in real time.",
};

const METRICS: MetricCard[] = [
  {
    id: "nodes-active",
    label: "Active Nodes",
    value: "4",
    unit: "nodes",
    trend: "stable",
  },
  {
    id: "bandwidth",
    label: "Bandwidth Used",
    value: "1.23",
    unit: "TB / mo",
    trend: "up",
  },
  {
    id: "temp",
    label: "Core Temperature",
    value: "−252",
    unit: "°C",
    trend: "down",
  },
  {
    id: "latency",
    label: "Avg Latency",
    value: "1.8",
    unit: "ms",
    trend: "down",
  },
];

const TREND_ICON: Record<MetricCard["trend"], React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  up: TrendingUp,
  down: TrendingDown,
  stable: Minus,
};

const TREND_COLOR: Record<MetricCard["trend"], string> = {
  up: "text-emerald-400",
  down: "text-cyan-400",
  stable: "text-slate-400",
};

const SERVICES = [
  { name: "API Gateway", status: "Running", icon: Wifi },
  { name: "Compute Nodes", status: "Running", icon: Server },
  { name: "Hydrogen Cooling", status: "Running", icon: Thermometer },
  { name: "Signal Propagation", status: "Running", icon: Activity },
];

export default function DashboardPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-400 mt-1 text-sm">
            Real-time overview of your hydrogen-cooled infrastructure.
          </p>
        </div>

        {/* Metric cards */}
        <section aria-labelledby="metrics-heading">
          <h2 id="metrics-heading" className="sr-only">
            Infrastructure metrics
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {METRICS.map((metric) => {
              const TrendIcon = TREND_ICON[metric.trend];
              const trendColor = TREND_COLOR[metric.trend];
              return (
                <div
                  key={metric.id}
                  className="rounded-xl bg-slate-900 border border-slate-800 p-6 space-y-3"
                >
                  <dt className="text-slate-400 text-sm font-medium">
                    {metric.label}
                  </dt>
                  <dd className="flex items-end justify-between">
                    <span className="text-3xl font-bold text-white">
                      {metric.value}{" "}
                      <span className="text-base font-normal text-slate-500">
                        {metric.unit}
                      </span>
                    </span>
                    <TrendIcon
                      className={`w-5 h-5 ${trendColor}`}
                      aria-hidden
                    />
                  </dd>
                </div>
              );
            })}
          </dl>
        </section>

        {/* Services table */}
        <section aria-labelledby="services-heading">
          <h2
            id="services-heading"
            className="text-xl font-semibold text-white mb-4"
          >
            Running Services
          </h2>
          <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
            <table className="w-full text-sm" aria-label="Running services">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-left">
                  <th scope="col" className="px-6 py-3 font-medium">
                    Service
                  </th>
                  <th scope="col" className="px-6 py-3 font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {SERVICES.map(({ name, status, icon: Icon }) => (
                  <tr key={name} className="hover:bg-slate-800/40 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                        <span className="text-white font-medium">{name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 text-emerald-400">
                        <span
                          className="w-2 h-2 rounded-full bg-emerald-400"
                          aria-hidden="true"
                        />
                        {status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Payment Authorization Status */}
        <section
          aria-labelledby="payment-status-heading"
          className="rounded-xl border-2 border-amber-500/30 bg-amber-500/5 p-6"
          role="alert"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle
              className="w-6 h-6 text-amber-400 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div className="space-y-3 flex-1">
              <h2
                id="payment-status-heading"
                className="text-lg font-bold text-white flex items-center gap-2"
              >
                <CreditCard className="w-5 h-5" aria-hidden="true" />
                Payment Setup Required
              </h2>
              <div className="space-y-2 text-sm text-slate-300">
                <p>
                  <strong className="text-amber-400">No payment processing is currently active.</strong>{" "}
                  This dashboard displays simulated metrics for demonstration purposes only.
                </p>
                <p>
                  Before any billing can begin, the following setup steps must be completed:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-4 text-slate-400">
                  <li>PayPal Business account verification</li>
                  <li>Payment gateway integration and security testing</li>
                  <li>User authentication and authorization system</li>
                  <li>Service level agreements and terms of service</li>
                </ul>
                <div className="mt-4 rounded-lg bg-slate-900/50 border border-slate-700 p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-500">Payment Account:</span>
                      <div className="text-white font-mono mt-1">
                        watsonkris611@gmail.com
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-500">Authorization Status:</span>
                      <div className="text-amber-400 font-semibold mt-1">
                        ⚠ Not Configured
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 transition-colors text-sm font-medium"
                  >
                    View Payment Information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
