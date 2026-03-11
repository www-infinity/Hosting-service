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
import TerminalPing from "@/components/TerminalPing";

const FEATURES: Feature[] = [
  {
    id: "hydrogen-cooling",
    icon: "Thermometer",
    title: "Hydrogen Shell Cooling",
    description:
      "Joule-Thomson expansion grows a thermal shell around each node, creating a potential gradient that self-powers the signal encoder while keeping the core near absolute zero.",
  },
  {
    id: "signal-propagation",
    icon: "Wifi",
    title: "1420 MHz Propagation",
    description:
      "Data routing uses the hydrogen hyperfine spin-flip as a carrier. Each packet encodes its own vector address — no DNS, no central registry, no gatekeepers.",
  },
  {
    id: "zero-downtime",
    icon: "Activity",
    title: "99.999% Uptime SLA",
    description:
      "Redundant hydrogen-lattice nodes mean no single point of failure. Services stay live even when individual nodes cycle through thermal harvest routines.",
  },
  {
    id: "global-edge",
    icon: "Globe",
    title: "Global Edge Network",
    description:
      "HERA-model grid topology: every node with a 21-cm detector can relay packets. Coverage extends to any environment with atmospheric or piped hydrogen.",
  },
  {
    id: "secure-by-default",
    icon: "Shield",
    title: "Secure by Default",
    description:
      "Para/ortho spin-state encoding wraps each payload. Only a matching spin-sequence can decode the vector map — structurally immune to conventional interception.",
  },
  {
    id: "instant-scale",
    icon: "Server",
    title: "Instant Scaling",
    description:
      "Spin up new hydrogen-shell compute nodes in under 200 ms. The orchestration layer allocates atomic resources on demand with no cold-start thermal penalty.",
  },
];

const ICON_MAP: Record<
  string,
  React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = { Thermometer, Wifi, Activity, Globe, Shield, Server };

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
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-cyan text-cyan-400 text-sm font-medium glow-cyan">
            <Zap className="w-4 h-4" aria-hidden="true" />
            Powered by Hydrogen Physics
          </div>

          <h1
            id="hero-heading"
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            The highest-performance hosting{" "}
            <span className="text-cyan-400 text-glow-cyan">on the internet</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            HydrHost encodes data into hydrogen vibrational quanta at{" "}
            <strong className="text-white">5.46 × 10¹⁴ Hz</strong>, routes packets
            via the <strong className="text-white">1420.405 MHz</strong> spin-flip
            beacon, and powers every node from a Joule-Thomson thermal gradient —
            zero dependency on traditional infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors glow-cyan"
              aria-label="View hosting plans"
            >
              View Plans
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/signal"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass border-slate-700 text-slate-300 font-medium hover:text-white transition-colors"
              aria-label="Open signal generator"
            >
              Signal Generator
              <Activity className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section aria-label="Key metrics" className="border-y border-slate-800 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <dt className="text-sm text-slate-500 font-medium">{stat.label}</dt>
                <dd className="text-2xl sm:text-3xl font-bold text-white text-glow-cyan">
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
              Every layer engineered around hydrogen physics — not retrofitted onto
              legacy silicon infrastructure.
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
                  className="rounded-xl glass p-6 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-lg glass-cyan flex items-center justify-center mb-4"
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

      {/* Terminal section */}
      <section
        aria-labelledby="terminal-heading"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800/50"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 space-y-3">
            <h2 id="terminal-heading" className="text-3xl font-bold text-white">
              Talk to the network directly
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Ping hydrogen nodes, trigger a thermal harvest, or run the full
              Hydrogen Handshake discovery sequence — right from your browser.
              Try{" "}
              <code className="text-cyan-400 font-mono bg-slate-900 px-1.5 py-0.5 rounded text-sm">
                handshake
              </code>
              ,{" "}
              <code className="text-cyan-400 font-mono bg-slate-900 px-1.5 py-0.5 rounded text-sm">
                harvest
              </code>
              , or{" "}
              <code className="text-cyan-400 font-mono bg-slate-900 px-1.5 py-0.5 rounded text-sm">
                ping node-f
              </code>
              .
            </p>
          </div>
          <TerminalPing />
        </div>
      </section>

      {/* Frequency callout */}
      <section
        aria-labelledby="freq-callout-heading"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800/50"
      >
        <div className="max-w-5xl mx-auto">
          <h2
            id="freq-callout-heading"
            className="text-2xl font-bold text-white text-center mb-8"
          >
            Two frequencies. One self-sustaining network.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl gradient-border glass p-6 space-y-3">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
                Tier 1 — Data Clock
              </p>
              <p className="text-4xl font-extrabold text-cyan-400 text-glow-cyan font-mono">
                5.46 × 10¹⁴ Hz
              </p>
              <p className="text-white font-semibold">H₂ Fundamental Vibration</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Para-hydrogen = data HIGH. Ortho-hydrogen = data LOW. Every
                vibrational quantum encodes a bit at 546 THz clock speed.
              </p>
              <Link
                href="/technology#signal-processing"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
              >
                Technical deep-dive{" "}
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="rounded-xl glass-violet p-6 space-y-3">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
                Tier 2 — Maser Sync
              </p>
              <p className="text-4xl font-extrabold text-violet-400 text-glow-violet font-mono">
                1420.405 MHz
              </p>
              <p className="text-white font-semibold">Hydrogen Hyperfine Transition</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                The 21-cm spin-flip line. Universal discovery beacon. No DNS, no
                registrar — the signal IS the address.
              </p>
              <Link
                href="/research"
                className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
              >
                Read the research{" "}
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="cta-heading"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800"
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white">
            Ready to go hydrogen?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Register with a hydrogen network operator, configure your shell nodes,
            and deploy to the infrastructure-less internet — no gatekeepers required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors glow-cyan"
              aria-label="Connect to hydrogen network"
            >
              Connect to Network
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/deploy"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg glass border-slate-700 text-slate-300 font-medium hover:text-white transition-colors"
            >
              Deployment Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
