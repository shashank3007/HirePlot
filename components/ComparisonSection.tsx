"use client";

import { motion } from "framer-motion";

const competitors = [
  {
    name: "Traditional agency",
    cost: "₹50K–2L per hire",
    speed: "2–4 weeks",
    transparency: "None",
    scales: "No",
    isHirePilot: false,
  },
  {
    name: "LinkedIn / Naukri",
    cost: "₹3–8L per year",
    speed: "DIY effort",
    transparency: "Basic",
    scales: "Barely",
    isHirePilot: false,
  },
  {
    name: "In-house recruiter",
    cost: "₹6–12L per year",
    speed: "Moderate",
    transparency: "Internal only",
    scales: "Limited",
    isHirePilot: false,
  },
  {
    name: "HirePilot ✦",
    cost: "₹20–40K/month",
    speed: "48 hours",
    transparency: "Live dashboard",
    scales: "Yes, unlimited roles",
    isHirePilot: true,
  },
];

const headers = ["Option", "Cost", "Speed", "Transparency", "Scales with you"];

function BadgeGood({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] text-green">
      <span className="text-[7px]">●</span>
      {children}
    </span>
  );
}

function BadgeBad({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] tracking-[0.06em] text-gray/45">
      {children}
    </span>
  );
}

export default function ComparisonSection() {
  return (
    <section className="bg-dark-2 px-12 py-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-orange">
          The comparison
        </p>
        <h2
          className="mb-16 font-display font-black leading-[1.05] tracking-[-0.03em] text-paper"
          style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
        >
          There is no
          <br />
          <em className="text-orange">real competition.</em>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      >
        <table className="w-full border-collapse border border-white/[0.06]">
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th
                  key={h}
                  className={`border-b border-white/[0.06] bg-dark px-7 py-[18px] text-left font-mono text-[10px] uppercase tracking-[0.14em] text-gray ${
                    i === 0 ? "w-[28%]" : ""
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {competitors.map(({ name, cost, speed, transparency, scales, isHirePilot }) => (
              <tr
                key={name}
                className={`border-b border-white/[0.04] last:border-b-0 ${
                  isHirePilot
                    ? "bg-orange/[0.06]"
                    : "transition-colors duration-200 hover:bg-white/[0.015]"
                }`}
              >
                <td
                  className={`px-7 py-5 text-sm ${
                    isHirePilot ? "font-semibold text-orange" : "text-gray"
                  }`}
                >
                  {name}
                </td>
                <td className="px-7 py-5">
                  {isHirePilot ? <BadgeGood>{cost}</BadgeGood> : <BadgeBad>{cost}</BadgeBad>}
                </td>
                <td className="px-7 py-5">
                  {isHirePilot ? <BadgeGood>{speed}</BadgeGood> : <BadgeBad>{speed}</BadgeBad>}
                </td>
                <td className="px-7 py-5">
                  {isHirePilot ? <BadgeGood>{transparency}</BadgeGood> : <BadgeBad>{transparency}</BadgeBad>}
                </td>
                <td className="px-7 py-5">
                  {isHirePilot ? <BadgeGood>{scales}</BadgeGood> : <BadgeBad>{scales}</BadgeBad>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
