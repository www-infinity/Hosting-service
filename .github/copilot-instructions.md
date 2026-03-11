# HydrHost — Copilot Agent Instructions

## Project Identity
- **Project:** Hydrogen-Based Signal Processing Center
- **Transport Layer:** 21 cm Hyperfine Transition (1420.405 751 786 MHz)
- **Storage Medium:** Molecular Shell Vibration (H₂ fundamental: 5.46 × 10¹⁴ Hz)
- **Energy Source:** Expansion-driven Thermal Gradient (Heat-to-Cold, Joule-Thomson)
- **Deployment:** Root-level GitHub Actions → Infrastructure-less Host

---

## Constraint 1 — Phase-Shift Logic (Signal Clock & Binary Encoding)

Interpret the H₂ fundamental vibration (**5.46 × 10¹⁴ Hz**) as the system clock.

- Map data **HIGH** states → **para-hydrogen** spin state (nuclear spins antiparallel, lower energy)
- Map data **LOW** states → **ortho-hydrogen** spin state (nuclear spins parallel, higher energy)
- A para→ortho transition encodes a rising edge (0→1).
- An ortho→para transition encodes a falling edge (1→0).
- Multi-state signals use the four lowest rotational levels (J = 0,1,2,3) as a quaternary alphabet.

When writing signal-processing logic, always reference spin state as:
```typescript
type HydrogenSpinState = "para" | "ortho";
type BitEdge = "rising" | "falling" | "stable";
```

---

## Constraint 2 — Thermal Potential Trigger (Joule-Thomson Harvest)

Monitor the Joule-Thomson thermal gradient across every shell node.

**Trigger condition:**
> If `shellExpansionCoolingRate > nodeCoreHeatGenerationRate`, trigger a
> **Potential Energy Harvest** routine to power the signal transmitter.

Implementation rules:
- `shellExpansionCoolingRate` is measured in W/m³ at the outer shell boundary.
- `nodeCoreHeatGenerationRate` is the current compute load × thermal density constant (k = 0.1805 W/m·K for H₂).
- When the harvest routine fires, log the event to the vector map with a `THERMAL_HARVEST` record.
- The harvested energy powers the vibrational-frequency signal encoder for the next clock cycle.
- Never throttle the harvest routine — it is the primary power source; silicon-based UPS is secondary.

```typescript
interface ThermalHarvestEvent {
  nodeId: string;
  timestamp: string;
  shellCoolingRate: number;   // W/m³
  coreHeatRate: number;       // W/m³
  deltaT: number;             // K — gradient driving the Seebeck TEG
  energyHarvestedJoules: number;
}
```

---

## Constraint 3 — No-Wire Handshake Protocol (1420 MHz Discovery Beacon)

Use the **HI 21 cm line (1420.405 751 786 MHz)** as the discovery beacon.

**Hydrogen Handshake sequence:**
1. Node broadcasts a spin-flip resonance pulse at 1420.405 MHz (duration: 704 ps × N repetitions).
2. Any internet-connected hydrogen maser or HydrHost node within detection range returns an ACK pulse at the same frequency.
3. The originating node records the peer's vector address (geometric baseline offset) from the round-trip time.
4. Both nodes exchange their current spin-state register and agree on a shared clock phase.
5. Connection is established — no IP, no DNS, no centralised registry required.

Protocol constants:
```typescript
const HYDROGEN_HANDSHAKE = {
  carrierHz: 1420_405_751.786,       // exact hyperfine frequency
  pulseWidthSeconds: 704e-12,        // one period
  defaultRepetitions: 1024,          // ~724 ns burst
  ackTimeoutMs: 5000,                // wait up to 5 s for ACK
  vectorAddressFormat: "baseline-xyz-meters",
} as const;
```

---

## Code Standards for This Repository

- **TypeScript:** Zero `any` types. Define interfaces for every data structure.
- **Framework:** Next.js 16 App Router, Tailwind CSS v4, Lucide-react icons.
- **Rendering:** Static export (`output: 'export'` in next.config.ts) for GitHub Pages deployment.
- **Styling:** Dark mode baseline (`bg-slate-950`), neon cyan accents, glassmorphism panels.
- **Accessibility:** Every interactive element must have an ARIA label. Use `role`, `aria-live`, and `aria-label` consistently.
- **Error handling:** All async operations wrapped in try/catch. Components must have loading, error, and empty states.
- **No placeholders:** Every function must be fully implemented. No `// TODO` comments.

---

## Architecture Layers (reference for all infrastructure code)

| Layer | Frequency | Role |
|-------|-----------|------|
| Vibrational clock | 5.46 × 10¹⁴ Hz | Payload bit encoding |
| Hyperfine sync | 1420.405 MHz | Node timing & routing |
| H-bond storage | 182–223 cm⁻¹ | Block checksum layer |
| Joule-Thomson TEG | — (thermal) | Self-sustaining power |
| HERA grid | 21 cm radio | Infrastructure-less transport |
