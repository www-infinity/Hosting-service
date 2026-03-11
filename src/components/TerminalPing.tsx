"use client";

import { useState, useRef, useEffect, useCallback, KeyboardEvent } from "react";
import { Terminal } from "lucide-react";

type SpinState = "para" | "ortho";

interface TerminalLine {
  id: number;
  type: "input" | "output" | "error" | "success" | "system";
  text: string;
}

interface NodePingResult {
  node: string;
  latencyMs: number;
  spinState: SpinState;
  hops: number;
}

let lineCounter = 0;
function mkLine(type: TerminalLine["type"], text: string): TerminalLine {
  return { id: lineCounter++, type, text };
}

function simulatePing(target: string): NodePingResult {
  const latency = Math.round(0.8 + Math.random() * 2.6);
  const spin: SpinState = Math.random() > 0.5 ? "para" : "ortho";
  const hops = Math.floor(2 + Math.random() * 4);
  return { node: target || "hydrhost-origin", latencyMs: latency, spinState: spin, hops };
}

function buildPingOutput(r: NodePingResult): TerminalLine[] {
  return [
    mkLine("output", `PING ${r.node} via 1420.405 MHz spin-flip beacon`),
    mkLine("output", `  Hop count   : ${r.hops} hydrogen-string nodes`),
    mkLine("output", `  Spin state  : ${r.spinState.toUpperCase()} (${r.spinState === "para" ? "HIGH — antiparallel, data=1" : "LOW  — parallel,      data=0"})`),
    mkLine("success", `  Round-trip  : ${r.latencyMs.toFixed(1)} ms  ✓ ACK received`),
  ];
}

const HELP_LINES: TerminalLine[] = [
  mkLine("output", "Available commands:"),
  mkLine("output", "  ping [node]   — broadcast 1420 MHz handshake to a node"),
  mkLine("output", "  handshake     — run full Hydrogen Handshake discovery sequence"),
  mkLine("output", "  harvest       — trigger Joule-Thomson thermal harvest routine"),
  mkLine("output", "  freq          — show dual-frequency architecture"),
  mkLine("output", "  status        — show live node & shell status"),
  mkLine("output", "  deploy        — show GitHub Actions deployment steps"),
  mkLine("output", "  connect       — show infrastructure registration contacts"),
  mkLine("output", "  clear         — clear terminal"),
  mkLine("output", "  help          — show this message"),
];

const FREQ_LINES: TerminalLine[] = [
  mkLine("system", "── Dual-Frequency Architecture ──────────────────────────────"),
  mkLine("output", "  TIER 1 │ H₂ Vibrational Clock"),
  mkLine("output", "         │ 5.460 × 10¹⁴ Hz  │  λ = 549 nm"),
  mkLine("output", "         │ para-H₂  → data HIGH (1)"),
  mkLine("output", "         │ ortho-H₂ → data LOW  (0)"),
  mkLine("output", ""),
  mkLine("output", "  TIER 2 │ Hyperfine Maser Sync"),
  mkLine("output", "         │ 1 420 405 751.786 Hz  │  λ = 21.106 cm"),
  mkLine("output", "         │ Spin-flip packet = routing timestamp"),
  mkLine("output", "         │ Stability: 10⁻¹⁵ fractional freq / 1000 s"),
  mkLine("system", "─────────────────────────────────────────────────────────────"),
];

const STATUS_LINES: TerminalLine[] = [
  mkLine("system", "── Node Status ──────────────────────────────────────────────"),
  mkLine("success", "  [✓] API Gateway          OPERATIONAL   99.999% uptime"),
  mkLine("success", "  [✓] Hydrogen-Shell Nodes  OPERATIONAL   4 active"),
  mkLine("success", "  [✓] 1420 MHz Maser Sync   OPERATIONAL   locked"),
  mkLine("success", "  [✓] Joule-Thomson TEG      HARVESTING    ΔT = +12.4 K"),
  mkLine("success", "  [✓] Vector Map             SEALED        6 nodes recorded"),
  mkLine("output",  "  [~] Object Storage         DEGRADED      98.7% uptime"),
  mkLine("system", "─────────────────────────────────────────────────────────────"),
];

const DEPLOY_LINES: TerminalLine[] = [
  mkLine("system", "── GitHub Actions Deployment ─────────────────────────────────"),
  mkLine("output", "  1. Repo > Settings > Pages > Source: GitHub Actions"),
  mkLine("output", "  2. next.config.ts — output: 'export', trailingSlash: true"),
  mkLine("output", "  3. Push to main → .github/workflows/deploy.yml triggers"),
  mkLine("output", "  4. npm ci → npm run build → ./out uploaded as artifact"),
  mkLine("output", "  5. actions/deploy-pages@v4 serves from root domain"),
  mkLine("success", "  Docs: /deploy for full walkthrough"),
  mkLine("system", "──────────────────────────────────────────────────────────────"),
];

const CONNECT_LINES: TerminalLine[] = [
  mkLine("system", "── Infrastructure Contacts ───────────────────────────────────"),
  mkLine("output", "  OGE HyCo Connect   — network area registration"),
  mkLine("output", "  Fluxys Open Seasons — H₂ infrastructure proposals"),
  mkLine("output", "  Hynetwork Services  — transport & connection contracts"),
  mkLine("output", "  Sensidyne           — H₂ detection hardware  800-451-9444"),
  mkLine("output", "  Bruker NMR/para-H₂  — +33 (3) 88 73 68 00"),
  mkLine("success", "  Docs: /connect for full sign-up process"),
  mkLine("system", "──────────────────────────────────────────────────────────────"),
];

export default function TerminalPing() {
  const [lines, setLines] = useState<TerminalLine[]>([
    mkLine("system", "HydrHost Signal Terminal v1.0  —  1420.405 MHz backbone"),
    mkLine("output", "Type 'help' for available commands."),
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [busy, setBusy] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const appendLines = useCallback((newLines: TerminalLine[]) => {
    setLines((prev) => [...prev, ...newLines]);
  }, []);

  const runCommand = useCallback(async (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const [verb, ...args] = cmd.split(/\s+/);

    appendLines([mkLine("input", `$ ${raw.trim()}`)]);

    if (!verb) return;

    setHistory((h) => [raw.trim(), ...h.slice(0, 49)]);
    setHistoryIdx(-1);

    if (verb === "clear") {
      setLines([mkLine("system", "HydrHost Signal Terminal v1.0  —  1420.405 MHz backbone")]);
      return;
    }
    if (verb === "help")    { appendLines(HELP_LINES);    return; }
    if (verb === "freq")    { appendLines(FREQ_LINES);    return; }
    if (verb === "status")  { appendLines(STATUS_LINES);  return; }
    if (verb === "deploy")  { appendLines(DEPLOY_LINES);  return; }
    if (verb === "connect") { appendLines(CONNECT_LINES); return; }

    if (verb === "ping") {
      setBusy(true);
      appendLines([mkLine("output", `Broadcasting spin-flip beacon…`)]);
      await new Promise<void>((r) => setTimeout(r, 600 + Math.random() * 400));
      appendLines(buildPingOutput(simulatePing(args[0] ?? "hydrhost-origin")));
      setBusy(false);
      return;
    }

    if (verb === "handshake") {
      setBusy(true);
      const steps: Array<[number, TerminalLine]> = [
        [200,  mkLine("output", "  [1/5] Charging spin-flip pulse at 1420.405 751 786 MHz…")],
        [500,  mkLine("output", "  [2/5] Broadcasting 1024 × 704 ps burst (~724 ns)…")],
        [800,  mkLine("output", "  [3/5] Listening for ACK from hydrogen maser peers…")],
        [1200, mkLine("success", "  [4/5] ACK received — peer: hydrhost-node-f  ΔT = 1.8 ms")],
        [1500, mkLine("success", "  [5/5] Handshake complete — vector address exchanged ✓")],
        [1700, mkLine("system",  "  Hydrogen Handshake protocol: ESTABLISHED")],
      ];
      for (const [delay, line] of steps) {
        await new Promise<void>((r) => setTimeout(r, delay));
        setLines((prev) => [...prev, line]);
      }
      setBusy(false);
      return;
    }

    if (verb === "harvest") {
      setBusy(true);
      const shellRate   = (2.1 + Math.random() * 0.8).toFixed(2);
      const coreRate    = (1.3 + Math.random() * 0.4).toFixed(2);
      const deltaT      = (parseFloat(shellRate) - parseFloat(coreRate)).toFixed(2);
      const energy      = (parseFloat(deltaT) * 4.2).toFixed(2);
      const triggered   = parseFloat(shellRate) > parseFloat(coreRate);
      appendLines([mkLine("output", "  Checking Joule-Thomson thermal gradient…")]);
      await new Promise<void>((r) => setTimeout(r, 700));
      appendLines([
        mkLine("output",  `  Shell expansion cooling rate : ${shellRate} W/m³`),
        mkLine("output",  `  Node core heat-generation    : ${coreRate} W/m³`),
        mkLine("output",  `  Thermal gradient ΔT          : ${deltaT} K`),
        triggered
          ? mkLine("success", `  Threshold exceeded — Potential Energy Harvest TRIGGERED`)
          : mkLine("output",  `  Threshold not reached — harvest on standby`),
        mkLine("output",  `  TEG energy harvested         : ${energy} J`),
        mkLine("success", `  Signal transmitter powered via thermal gradient ✓`),
      ]);
      setBusy(false);
      return;
    }

    appendLines([mkLine("error", `Command not found: '${verb}'.  Type 'help' for options.`)]);
  }, [appendLines]);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !busy) {
      const val = input;
      setInput("");
      void runCommand(val);
    }
    if (e.key === "ArrowUp") {
      setHistoryIdx((i) => {
        const next = Math.min(i + 1, history.length - 1);
        setInput(history[next] ?? "");
        return next;
      });
    }
    if (e.key === "ArrowDown") {
      setHistoryIdx((i) => {
        const next = Math.max(i - 1, -1);
        setInput(next === -1 ? "" : (history[next] ?? ""));
        return next;
      });
    }
  }, [busy, input, history, runCommand]);

  const LINE_COLOR: Record<TerminalLine["type"], string> = {
    input:   "text-white",
    output:  "text-cyan-300",
    success: "text-emerald-400",
    error:   "text-red-400",
    system:  "text-slate-500",
  };

  return (
    <div
      className="rounded-xl border border-slate-700/50 overflow-hidden glass"
      role="region"
      aria-label="HydrHost interactive terminal"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-b border-slate-800">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
        </div>
        <Terminal className="w-4 h-4 text-cyan-400 ml-2" aria-hidden="true" />
        <span className="text-slate-400 text-xs font-mono">
          hydrhost-terminal — 1420.405 MHz
        </span>
        {busy && (
          <span
            className="ml-auto w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
            aria-label="Processing"
            aria-live="polite"
          />
        )}
      </div>

      {/* Output */}
      <div
        className="h-72 overflow-y-auto p-4 space-y-0.5 bg-slate-950/90"
        aria-live="polite"
        aria-atomic="false"
        role="log"
      >
        {lines.map((line) => (
          <p
            key={line.id}
            className={`font-mono text-xs leading-5 whitespace-pre-wrap ${LINE_COLOR[line.type]}`}
          >
            {line.text}
          </p>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 border-t border-slate-800">
        <span className="text-cyan-400 font-mono text-xs shrink-0 text-glow-cyan" aria-hidden="true">
          ❯
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={busy}
          placeholder={busy ? "processing…" : "type a command…"}
          className="flex-1 bg-transparent font-mono text-xs text-cyan-300 placeholder-slate-600 outline-none disabled:opacity-50"
          aria-label="Terminal command input"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
        />
      </div>
    </div>
  );
}
