"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Radio, Wifi, AlertCircle } from "lucide-react";

interface PropagationNode {
  id: string;
  x: number;
  y: number;
  label: string;
  reached: boolean;
  active: boolean;
}

interface SignalLog {
  timestamp: string;
  message: string;
  type: "info" | "success" | "error";
}

const INITIAL_NODES: PropagationNode[] = [
  { id: "origin", x: 50, y: 50, label: "Origin", reached: true, active: false },
  { id: "node-a", x: 20, y: 75, label: "Node A", reached: false, active: false },
  { id: "node-b", x: 50, y: 85, label: "Node B", reached: false, active: false },
  { id: "node-c", x: 80, y: 75, label: "Node C", reached: false, active: false },
  { id: "node-d", x: 10, y: 45, label: "Node D", reached: false, active: false },
  { id: "node-e", x: 85, y: 40, label: "Node E", reached: false, active: false },
  { id: "node-f", x: 50, y: 20, label: "Node F", reached: false, active: false },
];

const PROPAGATION_ORDER = [
  "node-f",
  "node-d",
  "node-e",
  "node-a",
  "node-c",
  "node-b",
];

const EDGES: [string, string][] = [
  ["origin", "node-f"],
  ["origin", "node-d"],
  ["origin", "node-e"],
  ["origin", "node-a"],
  ["origin", "node-c"],
  ["origin", "node-b"],
  ["node-d", "node-a"],
  ["node-e", "node-c"],
  ["node-a", "node-b"],
  ["node-c", "node-b"],
  ["node-f", "node-d"],
  ["node-f", "node-e"],
];

function nodeById(nodes: PropagationNode[], id: string): PropagationNode | undefined {
  return nodes.find((n) => n.id === id);
}

export default function SignalGeneratorClient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const waveFrameRef = useRef<number>(0);
  const [phase, setPhase] = useState(0);
  const [running, setRunning] = useState(false);
  const [propagating, setPropagating] = useState(false);
  const [nodes, setNodes] = useState<PropagationNode[]>(INITIAL_NODES);
  const [logs, setLogs] = useState<SignalLog[]>([
    {
      timestamp: new Date().toISOString(),
      message: "Signal generator ready. Press Launch to fire a 1420.405 MHz spin-flip packet.",
      type: "info",
    },
  ]);
  const [frequency] = useState(1420.405751786);
  const [amplitude, setAmplitude] = useState(0.7);
  const [nodesReached, setNodesReached] = useState(0);

  const addLog = useCallback((message: string, type: SignalLog["type"] = "info") => {
    setLogs((prev) => [
      ...prev.slice(-49),
      { timestamp: new Date().toISOString(), message, type },
    ]);
  }, []);

  // Draw sine wave on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      // Background grid
      ctx.strokeStyle = "rgba(100,116,139,0.1)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Centre line
      ctx.strokeStyle = "rgba(100,116,139,0.3)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Sine wave
      const cycles = 4;
      const amp = amplitude * (height / 2 - 12);
      const currentPhase = waveFrameRef.current;

      // Glow
      ctx.shadowColor = "rgba(34,211,238,0.6)";
      ctx.shadowBlur = running ? 10 : 0;
      ctx.strokeStyle = running ? "#22d3ee" : "#0e7490";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let px = 0; px < width; px++) {
        const t = (px / width) * cycles * 2 * Math.PI + currentPhase;
        const py = height / 2 - Math.sin(t) * amp;
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Phase marker (vertical line tracking the wave front)
      const markerX = ((currentPhase / (2 * Math.PI)) % 1) * width;
      ctx.strokeStyle = "rgba(251,191,36,0.8)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(markerX, 0);
      ctx.lineTo(markerX, height);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    draw();
  }, [phase, amplitude, running]);

  // Animation loop
  useEffect(() => {
    let animId: number;
    if (running) {
      const tick = () => {
        waveFrameRef.current += 0.06;
        setPhase(waveFrameRef.current);
        animId = requestAnimationFrame(tick);
      };
      animId = requestAnimationFrame(tick);
    }
    return () => cancelAnimationFrame(animId);
  }, [running]);

  // Propagation sequence
  const launchSignal = useCallback(async () => {
    if (propagating) return;
    setPropagating(true);
    setRunning(true);
    setNodesReached(0);
    setNodes(INITIAL_NODES);
    addLog("▶ Launching 1420.405 MHz spin-flip packet from Origin node...", "info");

    for (let i = 0; i < PROPAGATION_ORDER.length; i++) {
      const id = PROPAGATION_ORDER[i];
      await new Promise<void>((resolve) => setTimeout(resolve, 420));
      setNodes((prev) =>
        prev.map((n) =>
          n.id === id ? { ...n, reached: true, active: true } : { ...n, active: false }
        )
      );
      setNodesReached(i + 1);
      addLog(`✓ Spin-flip received at ${id.replace("node-", "Node ").replace("origin", "Origin")} — vector path recorded.`, "success");
    }

    await new Promise<void>((resolve) => setTimeout(resolve, 300));
    setNodes((prev) => prev.map((n) => ({ ...n, active: false })));
    addLog(`✅ Propagation complete. ${PROPAGATION_ORDER.length} nodes reached. Vector map sealed.`, "success");
    setPropagating(false);
  }, [propagating, addLog]);

  const resetSignal = useCallback(() => {
    setRunning(false);
    setPropagating(false);
    setNodes(INITIAL_NODES);
    setNodesReached(0);
    waveFrameRef.current = 0;
    setPhase(0);
    setLogs([
      {
        timestamp: new Date().toISOString(),
        message: "Signal generator reset. Ready.",
        type: "info",
      },
    ]);
  }, []);

  return (
    <div className="space-y-6">
      {/* Controls bar */}
      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={launchSignal}
          disabled={propagating}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Launch 1420 MHz signal"
        >
          <Radio className="w-4 h-4" aria-hidden="true" />
          {propagating ? "Propagating…" : "Launch Signal"}
        </button>
        <button
          onClick={() => setRunning((v) => !v)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700 text-slate-300 font-medium text-sm hover:border-slate-500 hover:text-white transition-colors"
          aria-label={running ? "Pause wave animation" : "Play wave animation"}
        >
          {running ? "⏸ Pause Wave" : "▶ Play Wave"}
        </button>
        <button
          onClick={resetSignal}
          disabled={propagating}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700 text-slate-300 font-medium text-sm hover:border-slate-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Reset signal generator"
        >
          ↺ Reset
        </button>

        {/* Amplitude slider */}
        <div className="flex items-center gap-3 ml-auto">
          <label
            htmlFor="amplitude-slider"
            className="text-slate-400 text-sm whitespace-nowrap"
          >
            Amplitude
          </label>
          <input
            id="amplitude-slider"
            type="range"
            min="0.1"
            max="1"
            step="0.05"
            value={amplitude}
            onChange={(e) => setAmplitude(parseFloat(e.target.value))}
            className="w-28 accent-cyan-400"
            aria-label="Signal amplitude"
          />
          <span className="text-cyan-400 text-sm font-mono w-8">
            {amplitude.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Frequency readout */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Carrier Frequency", value: `${frequency.toFixed(3)} MHz`, mono: true },
          { label: "Wavelength", value: "21.106 cm", mono: true },
          { label: "Nodes reached", value: `${nodesReached} / ${PROPAGATION_ORDER.length}`, mono: false },
          { label: "Status", value: propagating ? "Propagating" : running ? "Transmitting" : "Idle", mono: false },
        ].map(({ label, value, mono }) => (
          <div
            key={label}
            className="rounded-lg bg-slate-900 border border-slate-800 px-4 py-3"
          >
            <p className="text-slate-500 text-xs mb-1">{label}</p>
            <p className={`text-white font-semibold text-sm ${mono ? "font-mono" : ""}`}>
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Wave canvas */}
      <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
        <div className="px-4 py-2 border-b border-slate-800 flex items-center gap-2">
          <Wifi className="w-4 h-4 text-cyan-400" aria-hidden="true" />
          <span className="text-slate-400 text-xs font-mono">
            1420.405 MHz hydrogen hyperfine carrier — spin-flip oscillation
          </span>
          {running && (
            <span
              className="ml-auto w-2 h-2 rounded-full bg-cyan-400 animate-pulse"
              aria-label="Signal active"
              aria-live="polite"
            />
          )}
        </div>
        <canvas
          ref={canvasRef}
          width={800}
          height={120}
          className="w-full h-[120px]"
          aria-label="1420 MHz sine wave visualisation"
          role="img"
        />
      </div>

      {/* Propagation network */}
      <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
        <div className="px-4 py-2 border-b border-slate-800">
          <span className="text-slate-400 text-xs font-mono">
            Hydrogen-string propagation network — vector map
          </span>
        </div>
        <div className="relative w-full" style={{ paddingBottom: "50%" }}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            aria-label="Signal propagation network diagram"
            role="img"
          >
            {/* Edges */}
            {EDGES.map(([fromId, toId]) => {
              const from = nodeById(nodes, fromId);
              const to = nodeById(nodes, toId);
              if (!from || !to) return null;
              const lit = from.reached && to.reached;
              return (
                <line
                  key={`${fromId}-${toId}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke={lit ? "#22d3ee" : "#334155"}
                  strokeWidth={lit ? "0.8" : "0.5"}
                  strokeOpacity={lit ? "0.7" : "0.4"}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map((node) => (
              <g key={node.id} aria-label={`${node.label}: ${node.reached ? "reached" : "waiting"}`}>
                {node.active && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="6"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="0.5"
                    opacity="0.5"
                  >
                    <animate
                      attributeName="r"
                      values="4;9;4"
                      dur="0.8s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.6;0;0.6"
                      dur="0.8s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="4"
                  fill={node.reached ? "#0e7490" : "#1e293b"}
                  stroke={node.active ? "#fbbf24" : node.reached ? "#22d3ee" : "#475569"}
                  strokeWidth={node.active ? "1" : "0.6"}
                />
                <text
                  x={node.x}
                  y={node.y + 7.5}
                  textAnchor="middle"
                  fontSize="3.5"
                  fill={node.reached ? "#94a3b8" : "#475569"}
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* Log */}
      <div
        className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden"
        aria-label="Signal propagation log"
        aria-live="polite"
        aria-atomic="false"
      >
        <div className="px-4 py-2 border-b border-slate-800 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-slate-500" aria-hidden="true" />
          <span className="text-slate-400 text-xs font-mono">Signal log</span>
        </div>
        <ul className="max-h-48 overflow-y-auto p-4 space-y-1.5 font-mono text-xs" role="log">
          {logs.map((log, i) => (
            <li
              key={i}
              className={`flex gap-3 ${
                log.type === "success"
                  ? "text-emerald-400"
                  : log.type === "error"
                  ? "text-red-400"
                  : "text-slate-400"
              }`}
            >
              <span className="text-slate-600 shrink-0">
                {log.timestamp.slice(11, 19)}
              </span>
              <span>{log.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
