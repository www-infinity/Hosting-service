import Link from "next/link";
import { Zap, Github, Twitter } from "lucide-react";
import type { FooterSection } from "@/types";

const FOOTER_SECTIONS: FooterSection[] = [
  {
    heading: "Product",
    links: [
      { label: "Services", href: "/services" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "System Status", href: "/status" },
      { label: "Signal Generator", href: "/signal" },
    ],
  },
  {
    heading: "Technology",
    links: [
      { label: "Research", href: "/research" },
      { label: "Architecture", href: "/technology" },
      { label: "Connect", href: "/connect" },
      { label: "Deploy", href: "/deploy" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-cyan-400 font-bold text-lg"
              aria-label="HydrHost home"
            >
              <Zap className="w-5 h-5" aria-hidden="true" />
              <span>HydrHost</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Next-generation hosting powered by hydrogen cooling technology.
              Maximum uptime. Minimum footprint.
            </p>
            <div className="flex gap-4" aria-label="Social links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Link sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.heading}>
              <h3 className="text-white font-semibold text-sm mb-4">
                {section.heading}
              </h3>
              <ul className="space-y-2" role="list">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} HydrHost. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Powered by hydrogen cooling &amp; signal propagation technology
          </p>
        </div>
      </div>
    </footer>
  );
}
