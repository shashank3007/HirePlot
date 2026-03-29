"use client";

import { motion, type Variants } from "framer-motion";

const milestones = [
  {
    period: "Month 1–2",
    mrr: "₹20K",
    accentClass: "text-orange",
    dotClass: "bg-orange",
    title: "Validate and sign first client",
    description:
      "DM 30 seed/Series A founders on LinkedIn. Offer to fill one role free. Convert 1 to a paying retainer. The first client is always the hardest — and the most important proof point.",
  },
  {
    period: "Month 2–3",
    mrr: "Setup",
    accentClass: "text-blue",
    dotClass: "bg-blue",
    title: "Build the automation stack",
    description:
      "Apollo → Claude API → Calendly → Notion. The entire workflow costs under ₹5,000/month to run. First client pays ₹20,000. Margin from day one.",
  },
  {
    period: "Month 3–5",
    mrr: "₹1.2L",
    accentClass: "text-orange",
    dotClass: "bg-orange",
    title: "Deliver results, earn referrals",
    description:
      "One great hiring outcome generates 2–3 warm referrals. Startups talk to each other. Raise price to ₹30K for new clients. Build the first case study.",
  },
  {
    period: "Month 5–8",
    mrr: "₹2.5L",
    accentClass: "text-blue",
    dotClass: "bg-blue",
    title: "Launch the dashboard product",
    description:
      "Package the Notion/Airtable ops layer into a lightweight web app. Existing clients get it included. New clients pay a premium for the intelligence layer.",
  },
  {
    period: "Month 8–12",
    mrr: "₹5.5L",
    accentClass: "text-green",
    dotClass: "bg-green",
    title: "Productise and scale",
    description:
      "15–20 startup clients. Begin converting retainer clients to SaaS seats. Two revenue streams running in parallel. Hire one part-time ops person on commission.",
  },
];

const rowVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function RoadmapSection() {
  return (
    <section
      id="roadmap"
      className="border-t border-white/[0.06] px-12 py-[100px]"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-orange">
          12-month trajectory
        </p>
        <h2
          className="mb-5 font-display font-black leading-[1.05] tracking-[-0.03em] text-paper"
          style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
        >
          From zero to
          <br />
          <em className="text-orange">₹5.5L MRR.</em>
        </h2>
        <p className="max-w-[540px] text-base leading-[1.7] text-gray">
          A bootstrapped venture built on one truth: startups will always need to
          hire. We just do it infinitely better.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        className="relative mt-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {/* Vertical gradient line at left-[200px] */}
        <div
          className="pointer-events-none absolute bottom-0 top-0 w-px"
          style={{
            left: "200px",
            background:
              "linear-gradient(180deg, #d97757, #6a9bcc, #788c5d)",
            opacity: 0.25,
          }}
        />

        {milestones.map(({ period, mrr, accentClass, dotClass, title, description }, i) => (
          <motion.div
            key={period}
            className="grid border-b border-white/[0.04] transition-colors duration-300 hover:bg-white/[0.015] last:border-b-0"
            style={{ gridTemplateColumns: "200px 1fr" }}
            variants={rowVariants}
          >
            {/* Left: phase */}
            <div className="flex flex-col items-end justify-center gap-1 py-8 pr-10">
              <span className={`font-mono text-[11px] uppercase tracking-[0.1em] ${accentClass}`}>
                {period}
              </span>
              <span className="font-display text-[22px] font-black tracking-[-0.03em] text-paper">
                {mrr}
              </span>
            </div>

            {/* Right: content */}
            <div className="relative border-l border-white/[0.06] py-8 pl-12">
              {/* Timeline dot */}
              <div
                className={`absolute left-[-4px] top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full ${dotClass}`}
              />
              <p className="mb-2 text-[17px] font-semibold text-paper">{title}</p>
              <p className="max-w-[580px] text-sm leading-[1.7] text-gray">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
