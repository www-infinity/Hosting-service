import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, Radio, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "Research",
  description:
    "The physics behind HydrHost: hydrogen string model, 1420 MHz hyperfine line, and atomic-string signal propagation applied to cloud infrastructure.",
};

interface CitationEntry {
  id: string;
  authors: string;
  title: string;
  journal: string;
  year: number;
  url: string;
}

const CITATIONS: CitationEntry[] = [
  {
    id: "yepez-2006",
    authors: "Yépez, O.",
    title: "String Model of the Hydrogen Atom",
    journal: "arXiv:physics/0602159",
    year: 2006,
    url: "https://arxiv.org/abs/physics/0602159",
  },
  {
    id: "ewen-purcell-1951",
    authors: "Ewen, H. I. & Purcell, E. M.",
    title: "Observation of a Line in the Galactic Radio Spectrum",
    journal: "Nature 168, 356",
    year: 1951,
    url: "https://doi.org/10.1038/168356a0",
  },
  {
    id: "sloan-2003",
    authors: "Sloan, E. D. & Koh, C.",
    title: "Clathrate Hydrates of Natural Gases (3rd ed.)",
    journal: "CRC Press",
    year: 2007,
    url: "https://doi.org/10.1201/9781420008494",
  },
  {
    id: "dirac-1928",
    authors: "Dirac, P. A. M.",
    title: "The Quantum Theory of the Electron",
    journal: "Proc. R. Soc. Lond. A 117, 610–624",
    year: 1928,
    url: "https://doi.org/10.1098/rspa.1928.0023",
  },
];

export default function ResearchPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Page header */}
        <header className="mb-12 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
            <BookOpen className="w-4 h-4" aria-hidden="true" />
            HydrHost Research Series
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Hydrogen String Theory &amp; the 1420 MHz Signal:{" "}
            <span className="text-cyan-400">
              A Foundation for Atomic Hosting Infrastructure
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            How the string model of the hydrogen atom, the cosmic 21-cm
            hyperfine line, and atomic-level signal propagation form the
            theoretical backbone of HydrHost&apos;s hosting architecture.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-500 pt-2">
            <span>HydrHost Research Team</span>
            <span aria-hidden="true">·</span>
            <time dateTime="2026-03-11">March 2026</time>
          </div>
        </header>

        <div className="prose-custom space-y-16">

          {/* Abstract */}
          <section aria-labelledby="abstract-heading">
            <div className="rounded-xl bg-slate-900/80 border border-cyan-500/20 p-6">
              <h2
                id="abstract-heading"
                className="text-white font-bold text-lg mb-3"
              >
                Abstract
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                The string model of the hydrogen atom, as proposed by Omar Yépez
                (arXiv, 2006), reframes the electron not as a point particle in
                orbit but as a field-string structure whose orbital shell
                represents its intersection with three-dimensional space. The
                primary observable signal of interstellar hydrogen — the
                1420.405 MHz (21-cm) hyperfine transition — arises from a
                spin-flip of the electron in the ground state, an interaction
                that Yépez attributes to magnetic-moment coupling between
                proton and electron string fields. This article translates those
                physical principles into the architecture of a self-sovereign
                hosting platform: one where data is encoded along atomic-string
                pathways, tracked by vector maps, and retrievable by tracing the
                complete propagation path without dependency on any centralised
                intermediary.
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section aria-labelledby="string-model-heading">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <FlaskConical className="w-5 h-5 text-cyan-400" />
              </div>
              <h2
                id="string-model-heading"
                className="text-2xl font-bold text-white"
              >
                1. The String Model of the Hydrogen Atom (Yépez, 2006)
              </h2>
            </div>

            <div className="space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                Standard quantum mechanics describes the hydrogen atom via the
                Schrödinger equation, placing the electron in probabilistic
                orbitals — regions of space where the electron is most likely to
                be found. Yépez&apos;s string model offers a complementary
                geometric interpretation: the electron is not a localised
                particle but a <strong className="text-white">gas string</strong>{" "}
                — a field constrained by the Heisenberg uncertainty principle
                whose mass exerts tension on surrounding space, forming an
                orbital that <em>is</em> the electron itself.
              </p>
              <p>
                In this model, different electron orbitals (s, p, d, f …)
                correspond to different{" "}
                <strong className="text-white">
                  topological intersection modes
                </strong>{" "}
                — the ways the string-electron can wrap, loop, or knot within
                3D space. A 1s orbital is a simple closed loop; higher orbitals
                are more complex knot configurations, each with a distinct
                vibrational character and energy eigenvalue.
              </p>

              <div className="rounded-lg bg-slate-800 border border-slate-700 p-5 space-y-2">
                <h3 className="text-white font-semibold text-base">
                  Key propositions of the Yépez string model
                </h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
                  <li>
                    The electron has{" "}
                    <strong className="text-white">no fixed position</strong>;
                    its &quot;orbital&quot; is the complete string topology.
                  </li>
                  <li>
                    The electron&apos;s rest mass is a{" "}
                    <strong className="text-white">
                      field-tension phenomenon
                    </strong>
                    : heavier orbitals require more topological complexity,
                    hence more string-field energy.
                  </li>
                  <li>
                    Fine structure and{" "}
                    <strong className="text-white">hyperfine structure</strong>{" "}
                    arise from the magnetic-moment interaction between the
                    proton&apos;s and electron&apos;s string fields — not from
                    arbitrary coupling constants.
                  </li>
                  <li>
                    Because the orbital <em>is</em> the electron, there is no
                    &quot;collapse&quot; on measurement — instead, the
                    interaction selects a specific string intersection mode.
                  </li>
                </ul>
              </div>

              <p>
                For HydrHost, we adopt this ontology at the infrastructure
                layer: every compute node is modelled as a{" "}
                <strong className="text-white">closed string loop</strong>,
                every data packet as an excitation that travels along the loop,
                and every routing decision as a topological transition between
                intersection modes.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="hyperfine-heading">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <Radio className="w-5 h-5 text-cyan-400" />
              </div>
              <h2
                id="hyperfine-heading"
                className="text-2xl font-bold text-white"
              >
                2. The 1420 MHz Hyperfine Signal — Nature&apos;s Carrier Wave
              </h2>
            </div>

            <div className="space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                The most important electromagnetic signal produced by hydrogen
                is the{" "}
                <strong className="text-white">
                  1420.405751786 MHz hyperfine transition
                </strong>{" "}
                (wavelength: 21.106 cm, period: ~704 ps). It was first detected
                in the Milky Way by Ewen &amp; Purcell (1951) and has since
                become the standard &quot;universal beacon&quot; used in SETI,
                radio astronomy, and deep-space navigation.
              </p>

              <div className="rounded-lg bg-slate-800 border border-slate-700 p-5">
                <h3 className="text-white font-semibold text-base mb-3">
                  Physical origin of the 21-cm line
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
                  <li>
                    In the ground state (n = 1), the hydrogen electron has two
                    possible spin orientations relative to the proton:{" "}
                    <strong className="text-white">parallel (↑↑)</strong> and{" "}
                    <strong className="text-white">antiparallel (↑↓)</strong>.
                  </li>
                  <li>
                    The parallel state has slightly higher energy (ΔE ≈
                    5.87 × 10⁻⁶ eV) due to magnetic coupling of the two
                    string-field moments.
                  </li>
                  <li>
                    When the electron spin{" "}
                    <strong className="text-white">flips</strong> from parallel
                    to antiparallel it releases a photon at exactly
                    1420.405 MHz.
                  </li>
                  <li>
                    In Yépez&apos;s model, this flip is a{" "}
                    <strong className="text-white">
                      topological reconfiguration
                    </strong>{" "}
                    of the electron string — a change from one intersection
                    mode to another — with the emitted photon encoding the
                    complete path history of the transition.
                  </li>
                </ol>
              </div>

              <p>
                HydrHost&apos;s signal-propagation layer uses this frequency as
                its conceptual carrier. Each node in the network maintains a
                <strong className="text-white"> spin-state register</strong>:
                a bit that tracks the current intersection mode of the local
                hydrogen shell. A routing event is encoded as a spin-flip
                message at 1420 MHz, broadcast to all adjacent nodes, and
                recorded in the vector map for future retrieval.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    label: "Carrier frequency",
                    value: "1420.405 MHz",
                    sub: "Hydrogen hyperfine transition",
                  },
                  {
                    label: "Wavelength",
                    value: "21.106 cm",
                    sub: "The cosmic 21-cm line",
                  },
                  {
                    label: "Energy gap",
                    value: "5.87 × 10⁻⁶ eV",
                    sub: "Spin-flip ΔE",
                  },
                ].map(({ label, value, sub }) => (
                  <div
                    key={label}
                    className="rounded-lg bg-slate-900 border border-slate-700 p-4 text-center"
                  >
                    <p className="text-slate-500 text-xs mb-1">{label}</p>
                    <p className="text-cyan-400 font-bold text-lg">{value}</p>
                    <p className="text-slate-500 text-xs mt-1">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section aria-labelledby="vibrational-heading">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <Waves className="w-5 h-5 text-cyan-400" />
              </div>
              <h2
                id="vibrational-heading"
                className="text-2xl font-bold text-white"
              >
                3. Gas-String Vibrational Frequencies &amp; Hydrate Modes
              </h2>
            </div>

            <div className="space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                Beyond the 21-cm radio line, hydrogen exhibits a richer
                vibrational spectrum when embedded in molecular structures such
                as{" "}
                <strong className="text-white">
                  gas hydrates (clathrates)
                </strong>
                — cage-like water-ice lattices that trap hydrogen molecules.
                These structures are the closest laboratory analogue to the
                &quot;shell of gas strings&quot; described by Yépez.
              </p>

              <div className="rounded-lg bg-slate-800 border border-slate-700 p-5">
                <h3 className="text-white font-semibold text-base mb-3">
                  Observable vibrational modes relevant to the string model
                </h3>
                <div className="overflow-x-auto">
                  <table
                    className="w-full text-sm text-left"
                    aria-label="Hydrogen vibrational modes"
                  >
                    <thead>
                      <tr className="border-b border-slate-700 text-slate-400">
                        <th scope="col" className="py-2 pr-6 font-medium">
                          Mode
                        </th>
                        <th scope="col" className="py-2 pr-6 font-medium">
                          Frequency range
                        </th>
                        <th scope="col" className="py-2 font-medium">
                          Physical origin
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/50">
                      {[
                        {
                          mode: "Hyperfine spin-flip",
                          freq: "1420.405 MHz (0.047 cm⁻¹)",
                          origin: "Proton–electron magnetic coupling",
                        },
                        {
                          mode: "H-bond stretching (sH hydrate)",
                          freq: "182 – 223 cm⁻¹",
                          origin: "Hydrogen-bond lattice vibration",
                        },
                        {
                          mode: "H₂O libration",
                          freq: "300 – 900 cm⁻¹",
                          origin: "Restricted rotation in hydrate cage",
                        },
                        {
                          mode: "O–H stretch",
                          freq: "3100 – 3600 cm⁻¹",
                          origin: "Covalent O–H bond vibration",
                        },
                        {
                          mode: "H–H stretch (free H₂)",
                          freq: "4161 cm⁻¹",
                          origin: "Diatomic hydrogen stretch",
                        },
                      ].map(({ mode, freq, origin }) => (
                        <tr key={mode} className="text-slate-300">
                          <td className="py-3 pr-6 font-medium text-white">
                            {mode}
                          </td>
                          <td className="py-3 pr-6 text-cyan-400 font-mono text-xs">
                            {freq}
                          </td>
                          <td className="py-3 text-slate-400">{origin}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p>
                In the HydrHost architecture, each of these frequency bands
                maps to a distinct{" "}
                <strong className="text-white">data-encoding tier</strong>:
                the 1420 MHz carrier layer handles routing heartbeats, the
                182–223 cm⁻¹ band handles storage-block checksums, and higher
                frequency modes are reserved for encrypted payload wrapping.
                The full frequency stack gives any packet a complete,
                inspectable address from the network edge all the way to its
                atomic storage location.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section aria-labelledby="application-heading">
            <h2
              id="application-heading"
              className="text-2xl font-bold text-white mb-6"
            >
              4. Application to Self-Sovereign Internet Hosting
            </h2>

            <div className="space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                The key insight from the Yépez model and the 21-cm line is
                that{" "}
                <strong className="text-white">
                  a signal carries its own complete path history
                </strong>
                . A spin-flip photon emitted by a hydrogen atom encodes the
                transition, the atom&apos;s position in the lattice, and the
                interaction that caused it. No external registry or DNS-style
                directory is needed — the signal{" "}
                <em>is</em> the address.
              </p>
              <p>
                HydrHost implements this principle directly:
              </p>

              <ul className="space-y-4">
                {[
                  {
                    title: "Vector-Mapped Addressing",
                    body: "Every data packet is assigned a vector address derived from the hydrogen-shell node coordinates and current spin state. This address is self-describing: any node that receives it can verify and forward it without contacting a central authority.",
                  },
                  {
                    title: "String-Path Routing",
                    body: "Packets travel along yarn-like hydrogen-string pathways. The string wraps real network atoms (physical cables, wireless hops, optical fibres), and its tension — analogous to the electron field tension — determines the minimum-energy routing path.",
                  },
                  {
                    title: "Spin-Register Retrieval",
                    body: "To retrieve stored data, the system re-generates the original spin-flip sequence from the vector map. This acts as a cryptographic proof-of-path: only the correct sequence unlocks the data at the correct storage node.",
                  },
                  {
                    title: "No Central Intermediary",
                    body: "Because both address and routing are encoded in the signal itself, there is no need for a centralised registrar, DNS provider, or platform gatekeeper. The hydrogen lattice IS the routing table.",
                  },
                ].map(({ title, body }) => (
                  <li
                    key={title}
                    className="flex gap-4 rounded-lg bg-slate-900 border border-slate-800 p-5"
                  >
                    <span
                      className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 mt-2"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-white font-semibold mb-1">{title}</h3>
                      <p className="text-slate-400 text-sm">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* References */}
          <section aria-labelledby="references-heading">
            <h2
              id="references-heading"
              className="text-2xl font-bold text-white mb-6"
            >
              References
            </h2>
            <ol className="space-y-3" role="list">
              {CITATIONS.map((c, i) => (
                <li
                  key={c.id}
                  className="flex gap-3 text-sm text-slate-400"
                >
                  <span className="text-cyan-400 font-mono shrink-0">
                    [{i + 1}]
                  </span>
                  <span>
                    {c.authors} ({c.year}).{" "}
                    <em className="text-slate-300">{c.title}</em>.{" "}
                    {c.journal}.{" "}
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline break-all"
                      aria-label={`${c.title} — external link`}
                    >
                      {c.url}
                    </a>
                  </span>
                </li>
              ))}
            </ol>
          </section>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-800">
            <Link
              href="/signal"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors text-sm"
              aria-label="Open signal generator"
            >
              Open Signal Generator
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
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
