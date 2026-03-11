import type { Metadata } from "next";
import Link from "next/link";
import { Rocket, ArrowRight, ExternalLink, CheckCircle, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "Deploy",
  description:
    "Step-by-step guide to deploying HydrHost to GitHub Pages via GitHub Actions static export — zero platform lock-in, served from your root domain.",
};

interface DeployStep {
  number: number;
  title: string;
  detail: string;
  code?: string;
  codeLang?: string;
}

const STEPS: DeployStep[] = [
  {
    number: 1,
    title: "Enable GitHub Pages via Actions",
    detail:
      "In your repository, navigate to Settings → Pages. Under \"Build and deployment\", set the Source to \"GitHub Actions\". This tells GitHub to accept an artifact from a workflow run instead of a branch.",
  },
  {
    number: 2,
    title: "Verify next.config.ts — static export",
    detail:
      "The repo is already configured for static export. Confirm next.config.ts contains output: 'export' and trailingSlash: true. This instructs Next.js to emit a fully self-contained ./out directory during next build.",
    code: `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // generates ./out on next build
  trailingSlash: true,   // required for GitHub Pages routing
  images: {
    unoptimized: true,   // static export has no image API
  },
};

export default nextConfig;`,
    codeLang: "typescript",
  },
  {
    number: 3,
    title: "The deploy workflow is already in place",
    detail:
      "The file .github/workflows/deploy.yml is committed to this repository. It triggers on every push to main: installs dependencies, runs next build (producing ./out), uploads the artifact, then deploys it to your GitHub Pages URL.",
    code: `name: Deploy Hydrogen Signal Center

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: "./out"

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment`,
    codeLang: "yaml",
  },
  {
    number: 4,
    title: "Push to main → live in ~90 seconds",
    detail:
      "Merge your branch to main (or push directly). GitHub Actions will pick up the workflow, build the static site, and deploy it. Your site will be live at https://www-infinity.github.io/Hosting-service/ within ~90 seconds.",
  },
  {
    number: 5,
    title: "Custom domain (optional)",
    detail:
      "To serve from a root domain (e.g. hydrhost.io) instead of the GitHub subdomain: add a CNAME file containing your domain to the public/ directory, then configure your DNS provider to point to <username>.github.io. GitHub will auto-provision TLS.",
    code: `# public/CNAME — one line, your domain, no https://
hydrhost.io`,
    codeLang: "plaintext",
  },
  {
    number: 6,
    title: "Copilot Agent monitors deployments",
    detail:
      "With .github/copilot-instructions.md committed, GitHub Copilot understands the hydrogen signal protocols and can autonomously write transition scripts, monitor shell expansion rates from sensor feeds, and trigger data change-overs when thermal thresholds are met.",
  },
];

const CHECKLIST = [
  "Repository is public (required for free GitHub Pages)",
  "Settings → Pages → Source set to GitHub Actions",
  "next.config.ts has output: 'export' and trailingSlash: true",
  ".github/workflows/deploy.yml is present on main branch",
  "npm run build succeeds locally and produces ./out",
  "(Optional) public/CNAME contains your custom domain",
  "(Optional) DNS CNAME record points to <username>.github.io",
];

export default function DeployPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
            <Rocket className="w-4 h-4" aria-hidden="true" />
            HydrHost Deployment
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Deploy to GitHub Pages{" "}
            <span className="text-cyan-400 text-glow-cyan">with one push</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            HydrHost is a fully static Next.js export. Every push to{" "}
            <code className="text-cyan-400 font-mono bg-slate-900 px-1.5 py-0.5 rounded">
              main
            </code>{" "}
            triggers a GitHub Actions build that compiles the site and serves it
            from your root domain — no Vercel, no AWS, no platform lock-in.
          </p>
        </header>

        {/* Pre-flight callout */}
        <div className="rounded-xl glass-cyan p-5 glow-cyan">
          <div className="flex items-start gap-3">
            <Settings className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-white font-semibold mb-1">
                The workflow is already configured
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                This repository already contains{" "}
                <code className="font-mono text-cyan-400">.github/workflows/deploy.yml</code>{" "}
                and the correct{" "}
                <code className="font-mono text-cyan-400">next.config.ts</code> settings.
                You only need to enable GitHub Pages once in repository Settings — then
                every push to <code className="font-mono text-cyan-400">main</code>{" "}
                deploys automatically.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <section aria-labelledby="steps-heading">
          <h2
            id="steps-heading"
            className="text-2xl font-bold text-white mb-8"
          >
            Step-by-Step Deployment
          </h2>
          <ol className="space-y-8" aria-label="Deployment steps">
            {STEPS.map((step) => (
              <li key={step.number} className="space-y-4">
                <div className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-full glass-cyan flex items-center justify-center shrink-0 text-cyan-400 font-bold text-sm glow-cyan"
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-white font-semibold text-lg">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>

                {step.code && (
                  <div className="ml-13 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-900/80 border-b border-slate-800">
                      <span className="text-slate-500 text-xs font-mono">
                        {step.codeLang}
                      </span>
                    </div>
                    <pre className="p-4 overflow-x-auto text-xs leading-5">
                      <code
                        className={
                          step.codeLang === "yaml"
                            ? "text-cyan-300"
                            : step.codeLang === "typescript"
                            ? "text-violet-300"
                            : "text-emerald-300"
                        }
                      >
                        {step.code}
                      </code>
                    </pre>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </section>

        {/* Checklist */}
        <section aria-labelledby="checklist-heading">
          <h2
            id="checklist-heading"
            className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
          >
            <CheckCircle className="w-6 h-6 text-emerald-400" aria-hidden="true" />
            Pre-Launch Checklist
          </h2>
          <ul
            className="rounded-xl glass overflow-hidden divide-y divide-slate-800"
            role="list"
            aria-label="Deployment checklist"
          >
            {CHECKLIST.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 px-6 py-4 hover:bg-slate-800/30 transition-colors"
              >
                <CheckCircle
                  className="w-4 h-4 text-emerald-400 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-slate-300 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Framework note */}
        <section aria-labelledby="framework-heading">
          <h2
            id="framework-heading"
            className="text-xl font-bold text-white mb-4"
          >
            Why static export instead of a Node.js server?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
            {[
              {
                title: "Zero server surface area",
                body: "Pure HTML/JS/CSS served from CDN edges means no runtime to attack, no process to crash, and no server costs.",
              },
              {
                title: "Instant global delivery",
                body: "GitHub Pages serves via Fastly CDN — your static files are cached at edge nodes worldwide the moment the artifact is deployed.",
              },
              {
                title: "Infrastructure-less by design",
                body: "Aligns with the HydrHost philosophy: the site itself is served without any platform intermediary owning your runtime environment.",
              },
              {
                title: "Upgrade path available",
                body: "When you need server-side features (live sensor feeds, real-time spin-state APIs), add a dedicated API server and keep the frontend static.",
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="rounded-xl glass p-5 space-y-2"
              >
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-slate-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MCP / Agent section */}
        <section aria-labelledby="agent-heading">
          <h2
            id="agent-heading"
            className="text-xl font-bold text-white mb-4"
          >
            Agent Mode &amp; MCP Integration
          </h2>
          <div className="rounded-xl glass p-6 space-y-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              Enable{" "}
              <a
                href="https://devblogs.microsoft.com/visualstudio/agent-mode-is-now-generally-available-with-mcp-support/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline inline-flex items-center gap-1"
              >
                GitHub Copilot Agent Mode
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>{" "}
              in VS Code to let Copilot autonomously write the transition scripts
              that handle the data handshake between the web layer and the hydrogen
              signal processor. With{" "}
              <a
                href="https://www.youtube.com/watch?v=_F6M410TZtU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline inline-flex items-center gap-1"
              >
                MCP (Model Context Protocol)
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
              , you can connect the agent directly to your physical hydrogen hardware
              for real-time thermal monitoring and autonomous change-over triggering.
            </p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex gap-2">
                <span className="text-cyan-400 shrink-0">1.</span>
                Install the Copilot extension in VS Code and enable Agent Mode.
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 shrink-0">2.</span>
                The{" "}
                <code className="font-mono text-xs text-cyan-400">
                  .github/copilot-instructions.md
                </code>{" "}
                in this repo automatically grounds the agent in HydrHost
                hydrogen protocols (phase-shift logic, thermal trigger, handshake).
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-400 shrink-0">3.</span>
                Use{" "}
                <a
                  href="https://www.microsoft.com/en-us/microsoft-365-copilot/microsoft-copilot-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Copilot Studio
                </a>{" "}
                to define the agent role: &ldquo;Monitor hydrogen shell heat-to-cold
                energy potentials and trigger data change-overs when thresholds
                are met.&rdquo;
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-800">
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors glow-cyan text-sm"
            aria-label="Register with infrastructure operators"
          >
            Register with Operators
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass border-slate-700 text-slate-300 font-medium hover:text-white transition-colors text-sm"
          >
            Technical Architecture
          </Link>
          <Link
            href="/signal"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass border-slate-700 text-slate-300 font-medium hover:text-white transition-colors text-sm"
          >
            Signal Generator
          </Link>
        </div>

      </div>
    </div>
  );
}
