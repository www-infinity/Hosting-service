import Link from "next/link";
import {
  Zap,
  Shield,
  Globe,
  Activity,
  ArrowRight,
  Server,
  Thermometer,
  Wifi,
} from "lucide-react";
import type { Feature } from "@/types";

const FEATURES: Feature[] = [
  {
    id: "hydrogen-cooling",
    icon: "Thermometer",
    title: "Hydrogen Cooling",
    description:
      "Our proprietary hydrogen-shell cooling grows around each processing unit, generating a natural potential difference that self-powers the system while keeping temperatures near absolute zero.",
  },
  {
    id: "signal-propagation",
    icon: "Wifi",
    title: "Signal Propagation",
    description:
      "Data is encoded along hydrogen-string pathways using vector mapping. Every atomic node tracks its own propagation path, enabling instant retrieval from any point in the network.",
  },
  {
    id: "zero-downtime",
    icon: "Activity",
    title: "99.999% Uptime SLA",
    description:
      "Redundant hydrogen lattice nodes mean no single point of failure. Your services stay live even when individual nodes enter maintenance cycles.",
  },
  {
    id: "global-edge",
    icon: "Globe",
    title: "Global Edge Network",
    description:
      "Signal hops propagate through our worldwide edge nodes, routing your requests along the lowest-latency hydrogen-string path to any destination on Earth.",
  },
  {
    id: "secure-by-default",
    icon: "Shield",
    title: "Secure by Default",
    description:
      "Every data packet is wrapped in an atomic-address envelope. Only a verified vector map can unwrap it — making man-in-the-middle attacks structurally impossible.",
  },
  {
    id: "instant-scale",
    icon: "Server",
    title: "Instant Scaling",
    description:
      "Spin up new hydrogen-shell compute nodes in under 200 ms. Our orchestration layer allocates atomic resources on demand with no cold-start penalty.",
  },
];

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  Thermometer,
  Wifi,
  Activity,
  Globe,
  Shield,
  Server,
};

const STATS = [
  { label: "Uptime SLA", value: "99.999%" },
  { label: "Edge nodes", value: "340+" },
  { label: "Data transferred", value: "1.2 EB" },
  { label: "Avg latency", value: "< 2 ms" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-slate-950 pt-24 pb-20 px-4 sm:px-6 lg:px-8"
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
            <Zap className="w-4 h-4" aria-hidden="true" />
            Powered by Hydrogen Technology
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            The highest-performance hosting{" "}
            <span className="text-cyan-400">on the internet</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            HydrHost uses hydrogen-shell cooling, atomic-string signal
            propagation, and vector-mapped data retrieval to deliver cloud
            infrastructure that is faster, cooler, and more resilient than
            anything built on conventional silicon.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors text-sm sm:text-base"
              aria-label="View hosting plans"
            >
              View Plans
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/status"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-slate-500 hover:text-white transition-colors text-sm sm:text-base"
              aria-label="Check system status"
            >
              System Status
              <Activity className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        aria-label="Key metrics"
        className="border-y border-slate-800 bg-slate-900/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <dt className="text-sm text-slate-500 font-medium">
                  {stat.label}
                </dt>
                <dd className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Features */}
      <section
        aria-labelledby="features-heading"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <h2
              id="features-heading"
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Built different, at the atomic level
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-base sm:text-lg">
              Every layer of HydrHost is engineered around hydrogen physics —
              not retrofitted onto legacy silicon infrastructure.
            </p>
          </div>

          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
            aria-label="Platform features"
          >
            {FEATURES.map((feature) => {
              const Icon = ICON_MAP[feature.icon];
              return (
                <li
                  key={feature.id}
                  className="rounded-xl bg-slate-900 border border-slate-800 p-6 hover:border-cyan-500/40 transition-colors"
                >
                  <div
                    className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4"
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5 text-cyan-400" aria-hidden />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="cta-heading"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800"
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Ready to go hydrogen?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Pick a plan, deploy in minutes, and experience the difference that
            atomic-level infrastructure makes on your application&apos;s
            performance.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors"
            aria-label="Choose a hosting plan"
          >
            Choose a Plan
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
