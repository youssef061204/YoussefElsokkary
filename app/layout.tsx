import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Youssef Elsokkary — Software Engineering & Applied ML",
  description: "Four engineering case studies in behavioral ML, reconciliation, controlled coding agents, and verification-first marketplaces. Architecture, measured results, and source evidence.",
  openGraph: {
    type: "website",
    title: "Youssef Elsokkary — Software Engineering & Applied ML",
    description: "Four software engineering and machine learning case studies: TradePersona, LedgerMatch, AI Operator, and Zentro.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
