import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HirePilot — AI-Powered Recruiting for Indian Startups",
  description:
    "Hire faster. Pay less. See everything. AI-powered recruiting operations for Indian startups at 1/5th the cost of a single in-house recruiter.",
  keywords: [
    "AI recruiting",
    "hiring automation",
    "Indian startups",
    "recruiting software",
    "talent acquisition",
  ],
  openGraph: {
    title: "HirePilot — AI-Powered Recruiting for Indian Startups",
    description:
      "Replace your entire hiring workflow with AI. Sourcing, screening, outreach, scheduling — delivered in 48 hours at ₹20K/month.",
    type: "website",
    locale: "en_IN",
    siteName: "HirePilot",
  },
  twitter: {
    card: "summary_large_image",
    title: "HirePilot — AI-Powered Recruiting for Indian Startups",
    description:
      "Replace your entire hiring workflow with AI. 48-hour turnaround at ₹20K/month.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,700;1,9..144,900&family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-dark text-paper">{children}</body>
    </html>
  );
}
