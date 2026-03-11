import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "HydrHost — Hydrogen-Powered Cloud Hosting",
    template: "%s | HydrHost",
  },
  description:
    "Highest-performance cloud hosting powered by hydrogen cooling technology, signal propagation, and vector-mapped data retrieval.",
  keywords: [
    "hydrogen hosting",
    "cloud hosting",
    "hydrogen cooling",
    "data center",
    "signal propagation",
    "HydrHost",
  ],
  openGraph: {
    type: "website",
    siteName: "HydrHost",
    title: "HydrHost — Hydrogen-Powered Cloud Hosting",
    description:
      "Next-generation cloud infrastructure cooled by hydrogen technology for maximum uptime and minimal energy footprint.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-slate-950 text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-950 focus:rounded-md focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
