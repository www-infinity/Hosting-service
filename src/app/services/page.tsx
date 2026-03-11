import type { Metadata } from "next";
import Link from "next/link";
import { Check, Zap } from "lucide-react";
import type { PricingTier } from "@/types";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Choose a HydrHost plan. Every tier includes hydrogen-cooled compute, global edge propagation, and 99.999% uptime.",
};

const TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: 9,
    period: "mo",
    description: "Perfect for personal projects and small experiments.",
    features: [
      "1 hydrogen-shell node",
      "50 GB SSD storage",
      "500 GB bandwidth / mo",
      "Shared edge propagation",
      "Community support",
      "99.9% uptime SLA",
    ],
    highlighted: false,
    ctaLabel: "Start for free",
  },
  {
    id: "pro",
    name: "Pro",
    price: 49,
    period: "mo",
    description: "For growing teams who need performance and reliability.",
    features: [
      "4 hydrogen-shell nodes",
      "250 GB NVMe storage",
      "5 TB bandwidth / mo",
      "Dedicated edge propagation",
      "Vector-mapped retrieval",
      "Priority email support",
      "99.99% uptime SLA",
    ],
    highlighted: true,
    ctaLabel: "Get started",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 199,
    period: "mo",
    description: "Maximum power for production workloads at scale.",
    features: [
      "Unlimited hydrogen-shell nodes",
      "2 TB NVMe storage",
      "Unlimited bandwidth",
      "Global atomic-string routing",
      "Full vector-map API access",
      "Dedicated 24/7 support",
      "Custom SLA up to 99.999%",
    ],
    highlighted: false,
    ctaLabel: "Contact sales",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Simple, transparent pricing
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            No surprise fees. Every plan runs on the same hydrogen-cooled
            infrastructure — you just choose the scale.
          </p>
        </div>

        {/* Pricing grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          role="list"
          aria-label="Pricing plans"
        >
          {TIERS.map((tier) => (
            <article
              key={tier.id}
              role="listitem"
              aria-label={`${tier.name} plan`}
              className={`relative rounded-2xl border p-8 flex flex-col gap-6 ${
                tier.highlighted
                  ? "bg-cyan-500/5 border-cyan-500/50 shadow-lg shadow-cyan-500/10"
                  : "bg-slate-900 border-slate-800"
              }`}
            >
              {tier.highlighted && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold"
                  aria-label="Most popular plan"
                >
                  <Zap className="w-3 h-3" aria-hidden="true" />
                  Most Popular
                </div>
              )}

              <div>
                <h2 className="text-white font-bold text-xl mb-1">
                  {tier.name}
                </h2>
                <p className="text-slate-400 text-sm">{tier.description}</p>
              </div>

              <div className="flex items-end gap-1">
                <span className="text-4xl font-extrabold text-white">
                  ${tier.price}
                </span>
                <span className="text-slate-400 text-sm mb-1.5">
                  /{tier.period}
                </span>
              </div>

              <ul className="space-y-3 flex-1" role="list" aria-label={`${tier.name} features`}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/dashboard"
                className={`block text-center px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                  tier.highlighted
                    ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                    : "border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"
                }`}
                aria-label={`${tier.ctaLabel} — ${tier.name} plan`}
              >
                {tier.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
