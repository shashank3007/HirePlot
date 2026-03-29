"use client";

import { motion, type Transition } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" } as Transition,
});

const statCards = [
  {
    value: "48",
    suffix: "hrs",
    label: "From JD to shortlisted candidates",
    accentClass: "text-orange",
    hoverBorder: "hover:border-orange/30",
    barClass: "bg-orange",
  },
  {
    value: "1",
    suffix: "/5th",
    label: "Cost vs. in-house recruiter",
    accentClass: "text-blue",
    hoverBorder: "hover:border-blue/30",
    barClass: "bg-blue",
  },
  {
    value: "₹0",
    suffix: "",
    label: "To start — no setup fees, no lock-in",
    accentClass: "text-green",
    hoverBorder: "hover:border-green/30",
    barClass: "bg-green",
  },
];

export default function HeroSection() {
  return (
    <section className="relative grid min-h-screen grid-cols-1 items-center overflow-hidden px-6 pb-16 pt-28 md:grid-cols-2 md:px-12 md:pb-20 md:pt-[140px]">
      {/* Left column */}
      <div>
        <motion.p
          className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-orange"
          {...fadeUp(0.3)}
        >
          AI-Powered Recruiting Intelligence
        </motion.p>

        <motion.h1
          className="mb-7 font-display font-black leading-[1.02] tracking-[-0.03em] text-paper"
          style={{ fontSize: "clamp(48px, 5.5vw, 82px)" }}
          {...fadeUp(0.45)}
        >
          Hire faster.<br />
          Pay <em className="text-orange">less.</em><br />
          See everything.
        </motion.h1>

        <motion.p
          className="mb-11 max-w-[480px] text-[17px] leading-[1.7] text-gray"
          {...fadeUp(0.6)}
        >
          India&apos;s recruiting agencies charge ₹2L per hire for work AI completes
          in 48 hours. HirePilot replaces your entire hiring workflow — sourcing,
          screening, scheduling, analytics — at a monthly retainer your startup
          can actually afford.
        </motion.p>

        <motion.div className="flex items-center gap-4" {...fadeUp(0.75)}>
          <Link
            href="#get-started"
            className="group inline-flex items-center gap-2.5 rounded-sm bg-orange px-8 py-3.5 text-sm font-semibold text-dark transition-all duration-200 hover:-translate-y-px hover:bg-[#e8835e]"
          >
            Start for free
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            href="#how-it-works"
            className="border-b border-gray/30 pb-0.5 font-mono text-[12px] uppercase tracking-[0.1em] text-gray transition-colors duration-200 hover:border-paper/40 hover:text-paper"
          >
            See how it works
          </Link>
        </motion.div>
      </div>

      {/* Right column — stat cards */}
      <motion.div
        className="flex flex-col gap-4 md:pl-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
      >
        {statCards.map(({ value, suffix, label, accentClass, hoverBorder, barClass }) => (
          <div
            key={label}
            className={`group relative overflow-hidden rounded-sm border border-white/[0.06] bg-dark-2 px-7 py-6 transition-all duration-300 hover:translate-x-1 ${hoverBorder}`}
          >
            {/* Left accent bar */}
            <div
              className={`absolute bottom-0 left-0 top-0 w-[3px] ${barClass} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            />
            <div className="mb-1.5 font-display text-[42px] font-black leading-none tracking-[-0.03em] text-paper">
              {value}
              <span className={accentClass}>{suffix}</span>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-gray">
              {label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Background "HIRE" text */}
      <div
        className="pointer-events-none absolute bottom-[-40px] right-[-20px] select-none font-display font-black leading-none tracking-[-0.04em] text-white/[0.025]"
        style={{ fontSize: "clamp(180px, 22vw, 340px)" }}
        aria-hidden="true"
      >
        HIRE
      </div>
    </section>
  );
}
