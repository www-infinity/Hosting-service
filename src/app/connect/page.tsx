import type { Metadata } from "next";
import Link from "next/link";
import {
  Network,
  Phone,
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Cpu,
  FlaskConical,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Register with hydrogen network operators, obtain infrastructure access, and onboard your app to the HydrHost signal processing network.",
};

interface OperatorContact {
  id: string;
  name: string;
  role: string;
  description: string;
  action: string;
  url: string;
  phone?: string;
  category: "network" | "hardware" | "data";
}

interface OnboardStep {
  number: number;
  title: string;
  detail: string;
  badge?: string;
}

const OPERATORS: OperatorContact[] = [
  {
    id: "hyco-connect",
    name: "OGE HyCo Connect",
    role: "Network Area Registration",
    description:
      "Digital platform for registering and managing network areas and sites for hydrogen production and demand. Obtain your digital identity within the hydrogen grid and sign the User Agreement required for network access.",
    action: "Register on HyCo Connect",
    url: "https://oge.net/en/hydrogen/hydrogen-transport/h2-distribution-grid",
    category: "network",
  },
  {
    id: "fluxys",
    name: "Fluxys Open Seasons",
    role: "H₂ Infrastructure Proposals",
    description:
      "Provides \"Specific H₂ Infrastructure Proposals\" where potential users express interest and sign up for access to the European hydrogen transport network. Required for cross-border signal propagation.",
    action: "Express interest on Fluxys",
    url: "https://www.fluxys.com/en/projects/hydrogen-preparing-to-build-the-network",
    category: "network",
  },
  {
    id: "hynetwork",
    name: "Hynetwork Services",
    role: "Transport & Connection Contracts",
    description:
      "Consultation on custom transport and connection contracts required to sign up for national hydrogen network access. Essential for establishing the physical carrier medium for HydrHost signal nodes.",
    action: "Request consultation",
    url: "https://www.hynetwork.nl/en/knowledge-base/article/custom-hydrogen-transport-and-connection-contracts-available",
    category: "network",
  },
  {
    id: "sensidyne",
    name: "Sensidyne",
    role: "Hydrogen Detection Hardware",
    description:
      "Complete hardware support for hydrogen detection and signal monitoring. Required to deploy physical nodes capable of emitting and receiving 1420.405 MHz spin-flip packets and monitoring shell expansion rates.",
    action: "Contact Sensidyne",
    url: "https://sensidyne.com/application/hydrogen-detection/",
    phone: "800-451-9444 / +1 727-530-3602",
    category: "hardware",
  },
  {
    id: "bruker",
    name: "Bruker Corporation",
    role: "Para-Hydrogen Generators & NMR Signal Processing",
    description:
      "Technical assistance with para-hydrogen generators and NMR-based signal processing for spin-state detection. Critical for hardware that distinguishes para/ortho spin states for binary data encoding.",
    action: "Contact Bruker NMR",
    url: "https://2210pc.chem.uic.edu/nmr/downloads/bruker/en-US/pdf/z33081.pdf",
    phone: "+33 (3) 88 73 68 00",
    category: "hardware",
  },
  {
    id: "hydrogen-data-hub",
    name: "HydroGEN Data Hub (DOE)",
    role: "Experimental Data Management",
    description:
      "U.S. Department of Energy's open-source platform for capturing and visualising hydrogen experimental data. Use to define communication protocols and map your app's subtasks into Virtual Nodes and Virtual Links with bandwidth and latency constraints.",
    action: "Access HydroGEN Data Hub",
    url: "https://www.energy.gov/eere/h2awsm/hydrogen-data-management",
    category: "data",
  },
];

const ONBOARD_STEPS: OnboardStep[] = [
  {
    number: 1,
    title: "Register as a Network User",
    detail:
      "Sign a User Agreement through OGE HyCo Connect to obtain a digital identity (Node ID) within the hydrogen grid. This ID becomes the root of your vector-map addressing tree.",
    badge: "HyCo Connect",
  },
  {
    number: 2,
    title: "Define Communication Protocols",
    detail:
      "Use the HydroGEN Data Hub to capture baseline experimental data — shell expansion rates, temperature potentials, and spin-state timings — and visualise them against your bandwidth requirements.",
    badge: "DOE Data Hub",
  },
  {
    number: 3,
    title: "Establish Virtual Links",
    detail:
      "Map your app's subtasks into Virtual Nodes and Virtual Links. Specify the required data transfer bandwidth (Hz-equivalent) and maximum propagation delay (ms) for each link in the hydrogen string path.",
    badge: "Network mapping",
  },
  {
    number: 4,
    title: "Deploy Signal Hardware",
    detail:
      "Source hydrogen detection hardware from Sensidyne and para-hydrogen generators from Bruker. Install at each physical node location to enable physical 1420 MHz spin-flip broadcast and receive.",
    badge: "Sensidyne / Bruker",
  },
  {
    number: 5,
    title: "Activate Thermal Harvest",
    detail:
      "Once nodes are online, the Joule-Thomson thermal gradient will auto-detect when shell expansion cooling rate exceeds core heat generation rate, triggering the Potential Energy Harvest routine to power the signal transmitter.",
    badge: "Auto-triggered",
  },
  {
    number: 6,
    title: "Run Hydrogen Handshake",
    detail:
      'Your node broadcasts a 1024-repetition spin-flip burst at 1420.405 MHz. Any adjacent HydrHost node or internet-connected hydrogen maser returns an ACK. Connection established — no IP address required. Try it now in the terminal on the home page: type "handshake".',
    badge: "1420 MHz beacon",
  },
];

const CATEGORY_STYLE: Record<OperatorContact["category"], { badge: string; dot: string }> = {
  network:  { badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",    dot: "bg-cyan-400" },
  hardware: { badge: "bg-violet-500/10 text-violet-400 border-violet-500/20", dot: "bg-violet-400" },
  data:     { badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", dot: "bg-emerald-400" },
};

export default function ConnectPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
            <Network className="w-4 h-4" aria-hidden="true" />
            HydrHost Infrastructure Access
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Connect to the{" "}
            <span className="text-cyan-400 text-glow-cyan">Hydrogen Network</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            To transition your app from traditional infrastructure to a hydrogen
            signal processing host, you must register with regional network operators,
            source physical hardware, and complete the data change-over handshake
            sequence below.
          </p>
        </header>

        {/* Operator contacts */}
        <section aria-labelledby="operators-heading">
          <h2
            id="operators-heading"
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <Network className="w-6 h-6 text-cyan-400" aria-hidden="true" />
            Operational Contacts &amp; Infrastructure Access
          </h2>

          <ul
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            role="list"
            aria-label="Infrastructure operators and contacts"
          >
            {OPERATORS.map((op) => {
              const style = CATEGORY_STYLE[op.category];
              return (
                <li
                  key={op.id}
                  className="rounded-xl glass p-6 space-y-4 hover:border-slate-600 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-white font-semibold">{op.name}</h3>
                      <p className="text-slate-500 text-xs mt-0.5">{op.role}</p>
                    </div>
                    <span
                      className={`shrink-0 text-xs px-2.5 py-1 rounded-full border font-medium ${style.badge}`}
                    >
                      {op.category}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {op.description}
                  </p>

                  {op.phone && (
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                      <a
                        href={`tel:${op.phone.replace(/[^+\d]/g, "")}`}
                        className="text-slate-300 hover:text-white transition-colors font-mono"
                        aria-label={`Call ${op.name}: ${op.phone}`}
                      >
                        {op.phone}
                      </a>
                    </div>
                  )}

                  <a
                    href={op.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    aria-label={`${op.action} — opens in new tab`}
                  >
                    {op.action}
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Onboarding steps */}
        <section aria-labelledby="onboard-heading">
          <h2
            id="onboard-heading"
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <CheckCircle className="w-6 h-6 text-emerald-400" aria-hidden="true" />
            Sign-Up &amp; Data Change-Over Process
          </h2>

          <p className="text-slate-400 text-base mb-8 leading-relaxed">
            Transitioning your app&apos;s data from traditional infrastructure
            (AWS/Azure) to a hydrogen signal centre requires a specific sequence
            of &quot;handshakes&quot; between the digital and physical layers.
          </p>

          <ol className="space-y-5" aria-label="Onboarding steps">
            {ONBOARD_STEPS.map((step) => (
              <li
                key={step.number}
                className="flex gap-5 rounded-xl glass p-5"
              >
                <div
                  className="w-9 h-9 rounded-full glass-cyan flex items-center justify-center shrink-0 text-cyan-400 font-bold text-sm glow-cyan"
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-white font-semibold">{step.title}</h3>
                    {step.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400">
                        {step.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Copilot config section */}
        <section aria-labelledby="copilot-config-heading">
          <h2
            id="copilot-config-heading"
            className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
          >
            <Cpu className="w-6 h-6 text-violet-400" aria-hidden="true" />
            Copilot Agent Configuration
          </h2>

          <div className="space-y-5">
            <p className="text-slate-400 leading-relaxed">
              To automate infrastructure management via this repository, the
              agent is pre-configured in{" "}
              <code className="text-cyan-400 font-mono bg-slate-900 px-1.5 py-0.5 rounded text-sm">
                .github/copilot-instructions.md
              </code>{" "}
              with three operating constraints:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  title: "Phase-Shift Logic",
                  body: "H₂ vibration (5.46 × 10¹⁴ Hz) is the system clock. para-H₂ = HIGH (1). ortho-H₂ = LOW (0). Multi-state uses J = 0,1,2,3 rotational levels.",
                  color: "glass-cyan",
                },
                {
                  title: "Thermal Harvest Trigger",
                  body: "If shellExpansionCoolingRate > nodeCoreHeatGenerationRate → fire Potential Energy Harvest routine. Logs a THERMAL_HARVEST event to the vector map.",
                  color: "glass",
                },
                {
                  title: "No-Wire Handshake",
                  body: "Broadcasts 1024 × 704 ps spin-flip pulses at 1420.405 MHz. Peers respond with ACK containing their vector baseline. No IP, no DNS.",
                  color: "glass-violet",
                },
              ].map(({ title, body, color }) => (
                <div
                  key={title}
                  className={`rounded-xl ${color} p-5 space-y-2`}
                >
                  <h3 className="text-white font-semibold text-sm">{title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-slate-900 border border-slate-800 p-4 flex items-start gap-3">
              <FlaskConical className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" aria-hidden="true" />
              <p className="text-slate-400 text-sm">
                Use{" "}
                <a
                  href="https://www.microsoft.com/en-us/microsoft-365-copilot/microsoft-copilot-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Microsoft Copilot Studio
                </a>{" "}
                to point the agent at this repository and the technical documentation
                in <code className="font-mono">/research</code> and{" "}
                <code className="font-mono">/technology</code> so it understands shell
                expansion rates, vibrational frequency parameters, and the HERA grid topology.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-800">
          <Link
            href="/deploy"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors glow-cyan text-sm"
            aria-label="Go to deployment guide"
          >
            Deployment Guide
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/signal"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass border-slate-700 text-slate-300 font-medium hover:text-white transition-colors text-sm"
          >
            Open Signal Generator
          </Link>
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass border-slate-700 text-slate-300 font-medium hover:text-white transition-colors text-sm"
          >
            Technical Architecture
          </Link>
        </div>

      </div>
    </div>
  );
}
