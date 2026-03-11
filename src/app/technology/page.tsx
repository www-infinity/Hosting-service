import type { Metadata } from "next";
import Link from "next/link";
import {
  Waves,
  Cpu,
  Thermometer,
  Globe,
  ArrowRight,
  ExternalLink,
  FlaskConical,
  Zap,
} from "lucide-react";
import type { NanoMaterial, ThermalSpec, CitationEntry } from "@/types";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Deep technical overview of HydrHost's molecular-scale signal processing architecture: hydrogen vibrational frequencies, nanoscale shell storage, Joule-Thomson thermal harvesting, and infrastructure-less HERA-model data transfer.",
};

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const NANO_MATERIALS: NanoMaterial[] = [
  {
    id: "clathrasil",
    name: "Clathrasil (SiO₂ framework)",
    type: "clathrasil",
    storageCapacity: "~1.5 wt%",
    releaseTemp: "< 0 °C (pressure-swing)",
    description:
      "Microporous crystalline silica cages with pore diameters of 0.3–0.5 nm. Hydrogen molecules are physically adsorbed into the cage lattice. State-change triggered by pressure delta, not heat — zero thermal noise added to the signal layer.",
    reference: "PubMed 17361969",
  },
  {
    id: "core-shell-nabh4-ni",
    name: "NaBH₄@Ni Core-Shell Nanocubes",
    type: "core-shell",
    storageCapacity: "10.6 wt%",
    releaseTemp: "250–350 °C",
    description:
      "Sodium borohydride cores enclosed in nickel shells. The nickel shell acts as both a catalyst and a thermal gate: it holds hydrogen in until a localised heat pulse unlocks the outer barrier, releasing a precise H₂ burst for signal encoding.",
    reference: "ResearchGate 376333969",
  },
  {
    id: "mg-re-nanocomposite",
    name: "Mg-RE (Nd/Gd/Er) Nanocomposites",
    type: "composite",
    storageCapacity: "6–7 wt%",
    releaseTemp: "200–300 °C",
    description:
      "Arc-plasma-synthesised core-shell particles with a magnesium core and rare-earth oxide shell. The rare-earth shell fine-tunes hydrogen desorption kinetics, enabling programmable multi-step release patterns usable as bit sequences.",
    reference: "ResearchGate 257175545",
  },
  {
    id: "ni-borohydride",
    name: "Nickel-Decorated Borohydrides",
    type: "borohydride",
    storageCapacity: "12–14 wt%",
    releaseTemp: "< 100 °C (with Ni catalyst)",
    description:
      "Nickel nanoparticle decoration drastically lowers desorption temperature. Enables room-temperature-adjacent signal triggering, making these the preferred candidate for the active compute shell layer inside HydrHost nodes.",
    reference: "ResearchGate (proposed)",
  },
];

const THERMAL_SPECS: ThermalSpec[] = [
  {
    property: "Thermal conductivity",
    value: "0.1805",
    unit: "W/m·K",
    comparison: "≈7× higher than air (0.026 W/m·K)",
  },
  {
    property: "Joule-Thomson coefficient (300 K, 1 atm)",
    value: "+0.037",
    unit: "K/bar",
    comparison: "Positive — heats on expansion (inverts below ~200 K)",
  },
  {
    property: "Specific heat capacity (Cₚ)",
    value: "14.30",
    unit: "kJ/kg·K",
    comparison: "≈14× higher than air (1.01 kJ/kg·K)",
  },
  {
    property: "Inversion temperature",
    value: "~200",
    unit: "K (−73 °C)",
    comparison: "Below this T, H₂ cools on expansion like N₂/O₂",
  },
  {
    property: "Lower flammability limit",
    value: "4",
    unit: "vol% in air",
    comparison: "Managed by sealed shell encapsulation",
  },
];

const CITATIONS: CitationEntry[] = [
  {
    id: "vaia-vibration",
    index: 1,
    authors: "University Physics Vol. 3",
    title: "Vibrations of the Hydrogen Molecule H₂",
    journal: "Vaia / OpenStax",
    year: 2023,
    url: "https://www.vaia.com/en-us/textbooks/physics/university-physics-3-edition/chapter-7/problem-62-vibrations-of-the-hydrogen-molecule-mathrmh2-can-/",
  },
  {
    id: "hellwig-1970",
    index: 2,
    authors: "Hellwig, H. et al.",
    title: "Hydrogen Maser as Frequency Standard",
    journal: "IEEE Trans. Instrum. Meas. 19, 200",
    year: 1970,
    url: "https://ui.adsabs.harvard.edu/abs/1970ITIM...19..200H",
  },
  {
    id: "nist-maser",
    index: 3,
    authors: "NIST Time & Frequency Division",
    title: "Hydrogen Maser — Time and Frequency Z",
    journal: "NIST.gov",
    year: 2024,
    url: "https://www.nist.gov/pml/time-and-frequency-division/popular-links/time-frequency-z/time-and-frequency-z-h",
  },
  {
    id: "pubmed-clathrasil",
    index: 4,
    authors: "Weitkamp, J. et al.",
    title: "Storage of Hydrogen in Clathrasils",
    journal: "Angew. Chem. (PubMed 17361969)",
    year: 2007,
    url: "https://pubmed.ncbi.nlm.nih.gov/17361969/",
  },
  {
    id: "rg-nabh4-ni",
    index: 5,
    authors: "Zhang, X. et al.",
    title: "Reversible Hydrogen Storage in Core-Shell NaBH₄@Ni Nanocubes",
    journal: "ResearchGate 376333969",
    year: 2023,
    url: "https://www.researchgate.net/publication/376333969",
  },
  {
    id: "rg-mg-re",
    index: 6,
    authors: "Luo, W. et al.",
    title: "Hydrogen Storage in Core-Shell Mg-RE Nano-composites",
    journal: "ResearchGate 257175545",
    year: 2013,
    url: "https://www.researchgate.net/publication/257175545",
  },
  {
    id: "rg-thermal",
    index: 9,
    authors: "Melideo, D. et al.",
    title: "Heat Transfer Analysis of High-Pressure Hydrogen Tank Fillings",
    journal: "ResearchGate 361239221",
    year: 2022,
    url: "https://www.researchgate.net/publication/361239221",
  },
  {
    id: "hera-2024",
    index: 10,
    authors: "HERA Collaboration",
    title:
      "Hydrogen Epoch of Reionization Array: Science and Instrumentation",
    journal: "arXiv:2401.04304",
    year: 2024,
    url: "https://arxiv.org/html/2401.04304v1",
  },
  {
    id: "hydrogen-ai",
    index: 11,
    authors: "GCG Communications",
    title: "Powering AI: How Hydrogen Is Fueling the Future of Data Centers",
    journal: "gcgcom.com",
    year: 2024,
    url: "https://gcgcom.com/business-services/powering-ai-how-hydrogen-is-fueling-the-future-of-data-centers/",
  },
];

const TYPE_BADGE: Record<NanoMaterial["type"], string> = {
  clathrasil: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "core-shell": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  borohydride: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  composite: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function TechnologyPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* ── Page header ── */}
        <header className="mb-14 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
            <Cpu className="w-4 h-4" aria-hidden="true" />
            HydrHost Technical Architecture
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Molecular-Scale Signal Processing{" "}
            <span className="text-cyan-400">via Hydrogen Physics</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed">
            A four-layer architecture that replaces wire-and-WiFi with the
            quantised vibrations, shell dynamics, and thermal gradients of
            hydrogen gas — enabling self-sustaining, infrastructure-less data
            hosting directly into the internet.
          </p>
        </header>

        {/* ── Layer overview ── */}
        <nav
          aria-label="Technology sections"
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16"
        >
          {[
            { href: "#signal-processing", icon: Waves, label: "Signal Processing" },
            { href: "#shell-storage", icon: FlaskConical, label: "Shell Storage" },
            { href: "#thermal-potential", icon: Thermometer, label: "Thermal Potential" },
            { href: "#infrastructure-less", icon: Globe, label: "Infrastructure-Less" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              className="flex flex-col items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 p-4 text-slate-400 hover:text-white hover:border-cyan-500/30 transition-colors text-center text-sm font-medium"
              aria-label={`Jump to ${label} section`}
            >
              <Icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>

        <div className="space-y-20">

          {/* ══════════════════════════════════════════════════════
              SECTION 1 — Signal Processing
          ══════════════════════════════════════════════════════ */}
          <section id="signal-processing" aria-labelledby="s1-heading">
            <div className="flex items-start gap-4 mb-7">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 mt-1" aria-hidden="true">
                <Waves className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-cyan-400 text-xs font-semibold uppercase tracking-widest mb-1">Layer 1</p>
                <h2 id="s1-heading" className="text-2xl sm:text-3xl font-bold text-white">
                  Signal Processing via Hydrogen Vibrational Frequencies
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Data in the HydrHost architecture is processed not through
                electrons moving in copper wire, but through the{" "}
                <strong className="text-white">quantised vibrations of molecular hydrogen</strong>.
                This gives the system two distinct clock domains — a
                high-throughput vibrational layer and a precision synchronisation
                layer — operating in parallel.
              </p>

              {/* Two-frequency table */}
              <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-800">
                  <h3 className="text-white font-semibold text-sm">
                    Dual-Frequency Architecture
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" aria-label="Hydrogen frequency tiers">
                    <thead>
                      <tr className="border-b border-slate-800 text-left text-slate-400">
                        <th scope="col" className="px-5 py-3 font-medium">Tier</th>
                        <th scope="col" className="px-5 py-3 font-medium">Frequency</th>
                        <th scope="col" className="px-5 py-3 font-medium">Wavelength</th>
                        <th scope="col" className="px-5 py-3 font-medium">Role in architecture</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      <tr>
                        <td className="px-5 py-4 font-medium text-white">H₂ Fundamental Vibration</td>
                        <td className="px-5 py-4 font-mono text-cyan-400">5.46 × 10¹⁴ Hz</td>
                        <td className="px-5 py-4 font-mono text-slate-300">549 nm</td>
                        <td className="px-5 py-4 text-slate-400">
                          High-throughput data clock — encodes payload bits
                          directly into vibrational quanta
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-medium text-white">Hyperfine Spin-Flip (21-cm)</td>
                        <td className="px-5 py-4 font-mono text-cyan-400">1420.405 751 786 MHz</td>
                        <td className="px-5 py-4 font-mono text-slate-300">21.106 cm</td>
                        <td className="px-5 py-4 text-slate-400">
                          Precision node-sync — hydrogen maser standard,
                          most accurate commercial frequency reference
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="rounded-xl bg-slate-900 border border-slate-800 p-5">
                  <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-bold">V</span>
                    Vibrational Clock (5.46 × 10¹⁴ Hz)
                  </h3>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex gap-2"><span className="text-cyan-400 shrink-0">→</span>H₂ harmonic vibration: bond stretches and compresses at 5.46 × 10¹⁴ cycles/second</li>
                    <li className="flex gap-2"><span className="text-cyan-400 shrink-0">→</span>Each compression = logical 1; each relaxation = logical 0</li>
                    <li className="flex gap-2"><span className="text-cyan-400 shrink-0">→</span>Theoretical clock rate: ~546 THz — orders of magnitude beyond silicon GHz processors</li>
                    <li className="flex gap-2"><span className="text-cyan-400 shrink-0">→</span>Photon energy: 2.26 eV — detectable by standard InGaAs photodetectors</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-slate-900 border border-slate-800 p-5">
                  <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-violet-500/20 text-violet-400 text-xs flex items-center justify-center font-bold">M</span>
                    Maser Sync Layer (1420.405 MHz)
                  </h3>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li className="flex gap-2"><span className="text-cyan-400 shrink-0">→</span>Hydrogen masers achieve fractional frequency stability of 10⁻¹⁵ over 1,000 s</li>
                    <li className="flex gap-2"><span className="text-cyan-400 shrink-0">→</span>Used as the primary timing reference by GPS, VLBI, and national metrology institutes</li>
                    <li className="flex gap-2"><span className="text-cyan-400 shrink-0">→</span>Provides a universal heartbeat that every node can lock onto — no NTP server required</li>
                    <li className="flex gap-2"><span className="text-cyan-400 shrink-0">→</span>Spin-flip packet = atomic-level routing timestamp for vector-map addressing</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 p-5">
                <p className="text-slate-300 text-sm">
                  <strong className="text-white">Architectural implication:</strong> The vibrational layer handles
                  data throughput while the maser layer handles timing and routing.
                  Together they form a self-synchronising signal stack that requires
                  no external clock source — the hydrogen itself is the oscillator.
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              SECTION 2 — Shell Storage
          ══════════════════════════════════════════════════════ */}
          <section id="shell-storage" aria-labelledby="s2-heading">
            <div className="flex items-start gap-4 mb-7">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0 mt-1" aria-hidden="true">
                <FlaskConical className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-1">Layer 2</p>
                <h2 id="s2-heading" className="text-2xl sm:text-3xl font-bold text-white">
                  The Shell as a Storage &amp; Retrieval Medium
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                The shell in HydrHost is not a metaphor — it is a{" "}
                <strong className="text-white">physical nanostructure</strong> that
                encapsulates hydrogen molecules and holds them in a known quantum
                state until a retrieval signal is issued. The state of the trapped
                H₂ (its vibrational mode, spin orientation, and position within the
                cage lattice) encodes the stored data. Release equals read.
              </p>

              <h3 className="text-white font-semibold text-lg">
                Candidate Nanostructure Materials
              </h3>

              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5" role="list" aria-label="Nanostructure materials">
                {NANO_MATERIALS.map((mat) => (
                  <li
                    key={mat.id}
                    className="rounded-xl bg-slate-900 border border-slate-800 p-5 space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-white font-semibold text-sm">{mat.name}</h4>
                      <span
                        className={`shrink-0 text-xs px-2 py-0.5 rounded-full border font-medium ${TYPE_BADGE[mat.type]}`}
                      >
                        {mat.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-slate-500 text-xs mb-0.5">Storage capacity</p>
                        <p className="text-cyan-400 font-mono text-sm">{mat.storageCapacity}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs mb-0.5">Release trigger</p>
                        <p className="text-slate-300 text-sm">{mat.releaseTemp}</p>
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">{mat.description}</p>
                    <p className="text-slate-600 text-xs">Ref: {mat.reference}</p>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl bg-slate-900 border border-slate-800 p-5 space-y-3">
                <h3 className="text-white font-semibold">Retrieval Mechanism</h3>
                <ol className="space-y-3 list-decimal list-inside text-slate-300 text-sm">
                  <li>
                    A localised <strong className="text-white">thermal or pressure pulse</strong> is
                    directed at the target shell node using the maser timing reference.
                  </li>
                  <li>
                    The shell material (e.g. NaBH₄@Ni) reaches its desorption threshold,
                    releasing a precise H₂ burst whose{" "}
                    <strong className="text-white">vibrational signature</strong> carries the stored bit pattern.
                  </li>
                  <li>
                    An adjacent detector reads the vibrational frequency of the released H₂,
                    decodes the payload, and re-seals the shell for the next write cycle.
                  </li>
                  <li>
                    The vector map records the full shell address, release timestamp, and
                    decoded payload — enabling deterministic replay for fault recovery.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              SECTION 3 — Thermal Potential
          ══════════════════════════════════════════════════════ */}
          <section id="thermal-potential" aria-labelledby="s3-heading">
            <div className="flex items-start gap-4 mb-7">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 mt-1" aria-hidden="true">
                <Thermometer className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="text-orange-400 text-xs font-semibold uppercase tracking-widest mb-1">Layer 3</p>
                <h2 id="s3-heading" className="text-2xl sm:text-3xl font-bold text-white">
                  Thermal Potential: The &ldquo;Faster Than Heat&rdquo; Expansion Engine
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Conventional data centres battle heat — they spend enormous energy
                cooling silicon that runs hot by design. The HydrHost thermal layer
                <strong className="text-white"> inverts this relationship</strong>: the
                same Joule-Thomson effect that makes hydrogen unique among gases
                becomes a power source rather than a problem.
              </p>

              {/* Thermal properties table */}
              <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-800">
                  <h3 className="text-white font-semibold text-sm">
                    Key Thermal Properties of Hydrogen
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" aria-label="Thermal properties of hydrogen">
                    <thead>
                      <tr className="border-b border-slate-800 text-left text-slate-400">
                        <th scope="col" className="px-5 py-3 font-medium">Property</th>
                        <th scope="col" className="px-5 py-3 font-medium">Value</th>
                        <th scope="col" className="px-5 py-3 font-medium">Context</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {THERMAL_SPECS.map((spec) => (
                        <tr key={spec.property}>
                          <td className="px-5 py-4 font-medium text-white">{spec.property}</td>
                          <td className="px-5 py-4 font-mono text-cyan-400">
                            {spec.value} <span className="text-slate-500">{spec.unit}</span>
                          </td>
                          <td className="px-5 py-4 text-slate-400">{spec.comparison}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  {
                    icon: "🔥",
                    title: "Joule-Thomson Heating",
                    body: "At room temperature (> 200 K inversion point) hydrogen heats when it expands through a nozzle. Expanding the shell faster than the core generates heat creates a steep outward thermal gradient — cold core, hot boundary.",
                  },
                  {
                    icon: "⚡",
                    title: "Gradient → Electricity",
                    body: "A thermoelectric generator (TEG) placed across the hot-boundary / cold-core interface converts the ΔT directly into electricity via the Seebeck effect. This powers the signal-processing circuitry, making the node self-sustaining.",
                  },
                  {
                    icon: "❄️",
                    title: "7× Cooling Efficiency",
                    body: "Hydrogen's 0.1805 W/m·K conductivity (7× air) means heat generated by processing is whisked away to the boundary before it can accumulate in the core — eliminating the need for external fans, chillers, or water loops.",
                  },
                ].map(({ icon, title, body }) => (
                  <div
                    key={title}
                    className="rounded-xl bg-slate-900 border border-slate-800 p-5 space-y-3"
                  >
                    <div className="text-2xl" aria-hidden="true">{icon}</div>
                    <h3 className="text-white font-semibold">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-orange-500/5 border border-orange-500/20 p-5">
                <p className="text-slate-300 text-sm">
                  <strong className="text-white">Self-sustaining design:</strong>{" "}
                  The thermal gradient produced by controlled shell expansion powers
                  the TEG, which powers the vibrational-frequency signal encoder, which
                  triggers the next shell expansion cycle. Once started, the loop
                  requires no external power input — only periodic H₂ resupply to
                  replenish desorbed hydrogen.
                </p>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════════════════
              SECTION 4 — Infrastructure-Less Transfer
          ══════════════════════════════════════════════════════ */}
          <section id="infrastructure-less" aria-labelledby="s4-heading">
            <div className="flex items-start gap-4 mb-7">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 mt-1" aria-hidden="true">
                <Globe className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-1">Layer 4</p>
                <h2 id="s4-heading" className="text-2xl sm:text-3xl font-bold text-white">
                  Infrastructure-Less Data Transfer via the Energy Internet
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                The final layer removes the dependency on owned physical
                infrastructure entirely. By modelling the network after the{" "}
                <strong className="text-white">
                  Hydrogen Epoch of Reionization Array (HERA)
                </strong>{" "}
                — a radio telescope grid that treats the entire interstellar
                hydrogen cloud as a redundant measurement plane — HydrHost
                transforms any environment containing hydrogen into a potential
                carrier medium.
              </p>

              <div className="rounded-xl bg-slate-900 border border-slate-800 p-6 space-y-4">
                <h3 className="text-white font-semibold text-lg">
                  HERA Model Applied to Hosting
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  HERA uses 350 close-packed 14-metre dishes to image the 21-cm
                  emission of neutral hydrogen across the entire sky.
                  Each dish is a node; the sky is the medium; the hydrogen IS the
                  data channel. HydrHost adapts this at terrestrial scale:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "Hydrogen as Transport Layer",
                      body: "Any volume of atmospheric hydrogen (or H₂ injected into a sealed conduit) can carry a 1420 MHz spin-flip packet. The network requires no cables — only nodes capable of emitting and detecting the hyperfine signal.",
                    },
                    {
                      title: "Redundant Grid Topology",
                      body: "Like the HERA dish array, nodes are deployed in overlapping coverage zones. If any node fails, adjacent nodes re-route the signal through alternative hydrogen paths — no single point of failure.",
                    },
                    {
                      title: "Self-Describing Addresses",
                      body: "Each packet carries its own HERA-style baseline vector: the geometric offset between the transmitting and receiving node. This offset IS the address. No DNS, no registry, no central authority.",
                    },
                    {
                      title: "State-Change Detection",
                      body: "Any infrastructure that can detect molecular state changes — including atmospheric sensors, existing 5G receivers tuned to 1420 MHz, or dedicated hydrogen detectors — can participate as a relay node.",
                    },
                  ].map(({ title, body }) => (
                    <div
                      key={title}
                      className="flex gap-3 rounded-lg bg-slate-800 border border-slate-700 p-4"
                    >
                      <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <h4 className="text-white font-medium text-sm mb-1">{title}</h4>
                        <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-slate-900 border border-slate-800 p-5 space-y-3">
                <h3 className="text-white font-semibold">
                  Why this eliminates platform gatekeeping
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Traditional hosting requires: a domain registrar, a DNS provider,
                  a CDN, a platform (GitHub, Vercel, AWS), and a payment processor —
                  each of which can revoke access. In the HydrHost model, none of
                  those exist. Your content is addressed by a hydrogen-lattice vector.
                  Any node that can detect a 1420 MHz signal can resolve it. The
                  signal itself is the host, the address book, and the delivery
                  mechanism simultaneously.
                </p>
              </div>
            </div>
          </section>

          {/* ── Future materials note ── */}
          <section aria-labelledby="future-heading">
            <div className="rounded-xl bg-violet-500/5 border border-violet-500/20 p-6 space-y-3">
              <h2 id="future-heading" className="text-white font-bold text-lg flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-violet-400" aria-hidden="true" />
                Next: Nickel-Decorated Borohydride Shells
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                The most promising near-term shell material for HydrHost nodes is
                the{" "}
                <strong className="text-white">Nickel-decorated borohydride</strong>{" "}
                family. Ni nanoparticle decoration reduces the desorption
                temperature from ~400 °C to below 100 °C, enabling room-temperature-adjacent
                signal triggering with 12–14 wt% theoretical storage density. Combined
                with the Joule-Thomson self-heating cycle, these materials make a
                passively activated, room-temperature node possible without any external
                heat source.
              </p>
              <Link
                href="/research"
                className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
              >
                Read the full string model research article
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* ── References ── */}
          <section aria-labelledby="refs-heading">
            <h2 id="refs-heading" className="text-xl font-bold text-white mb-5">
              References
            </h2>
            <ol className="space-y-3" role="list">
              {CITATIONS.map((c) => (
                <li key={c.id} className="flex gap-3 text-sm text-slate-400">
                  <span className="text-cyan-400 font-mono shrink-0 w-6">
                    [{c.index}]
                  </span>
                  <span>
                    {c.authors} ({c.year}).{" "}
                    <em className="text-slate-300">{c.title}</em>. {c.journal}.{" "}
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-cyan-400 hover:underline break-all"
                      aria-label={`${c.title} — external link`}
                    >
                      {c.url}
                      <ExternalLink className="w-3 h-3 shrink-0" aria-hidden="true" />
                    </a>
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {/* ── CTA ── */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-800">
            <Link
              href="/signal"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors text-sm"
            >
              Open Signal Generator
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-slate-500 hover:text-white transition-colors text-sm"
            >
              Read String Model Research
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-slate-500 hover:text-white transition-colors text-sm"
            >
              View Hosting Plans
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
