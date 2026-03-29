"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing",      href: "#pricing" },
  { label: "Roadmap",      href: "#roadmap" },
];

export default function Navbar() {
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-dark/80 backdrop-blur-md"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-paper"
        >
          Hire<span className="text-orange">Pilot</span>
        </Link>

        {/* Nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm text-gray transition-colors duration-200 hover:text-paper"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#get-started"
          className="rounded-sm bg-orange px-4 py-2 text-sm font-medium text-dark transition-colors duration-200 hover:bg-orange-dim"
        >
          Get Started Free →
        </Link>
      </nav>
    </motion.header>
  );
}
