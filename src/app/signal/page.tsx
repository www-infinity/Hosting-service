import type { Metadata } from "next";
import { Radio } from "lucide-react";
import SignalGeneratorClient from "@/components/SignalGeneratorClient";

export const metadata: Metadata = {
  title: "Signal Generator",
  description:
    "Interactive 1420.405 MHz hydrogen hyperfine signal generator — visualise atomic-string propagation through the HydrHost network.",
};

export default function SignalPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header className="space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
            <Radio className="w-4 h-4" aria-hidden="true" />
            HydrHost Signal Layer
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            1420 MHz Hydrogen Signal Generator
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-3xl">
            This tool simulates the propagation of a{" "}
            <strong className="text-white">1420.405751786 MHz</strong> carrier
            packet — modelled on the hydrogen hyperfine spin-flip transition —
            through a network of hydrogen-shell nodes. Each node that receives
            the spin-flip records its vector address, building a complete
            end-to-end path that can retrieve any piece of stored data without
            a central DNS or routing authority.
          </p>
        </header>

        {/* Physics callout */}
        <div className="rounded-xl bg-slate-900 border border-cyan-500/20 px-6 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-slate-500 text-xs mb-1">Carrier signal</p>
            <p className="text-cyan-400 font-mono font-semibold">
              1420.405 751 786 MHz
            </p>
            <p className="text-slate-500 text-xs mt-0.5">
              H hyperfine transition
            </p>
          </div>
          <div>
            <p className="text-slate-500 text-xs mb-1">Physical mechanism</p>
            <p className="text-white font-medium">Electron spin-flip</p>
            <p className="text-slate-500 text-xs mt-0.5">
              ΔE = 5.87 × 10⁻⁶ eV
            </p>
          </div>
          <div>
            <p className="text-slate-500 text-xs mb-1">Theoretical basis</p>
            <p className="text-white font-medium">Yépez String Model</p>
            <p className="text-slate-500 text-xs mt-0.5">
              arXiv:physics/0602159
            </p>
          </div>
        </div>

        {/* Interactive generator */}
        <SignalGeneratorClient />

        {/* How it works */}
        <section
          aria-labelledby="how-it-works-heading"
          className="rounded-xl bg-slate-900 border border-slate-800 p-6 space-y-4"
        >
          <h2
            id="how-it-works-heading"
            className="text-white font-bold text-lg"
          >
            How this maps to real hosting
          </h2>
          <ol className="space-y-3 text-sm text-slate-300 list-decimal list-inside">
            <li>
              <strong className="text-white">Origin node</strong> fires a
              spin-flip packet encoded with the payload hash and destination
              vector address.
            </li>
            <li>
              Each intermediate{" "}
              <strong className="text-white">hydrogen-shell node</strong>{" "}
              receives the packet, appends its own coordinates to the path
              string, and rebroadcasts.
            </li>
            <li>
              The{" "}
              <strong className="text-white">vector map</strong> accumulates
              the full path — equivalent to a self-describing routing table
              that lives inside the signal itself.
            </li>
            <li>
              To retrieve data, the system reads the vector map and
              re-generates the spin-flip sequence in reverse, walking the
              string path back to the storage node with zero external lookups.
            </li>
            <li>
              No GitHub, no Vercel, no centralised DNS — the network{" "}
              <strong className="text-white">is</strong> the address book.
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
