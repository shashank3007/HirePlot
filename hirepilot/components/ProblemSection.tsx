"use client";

import { motion, type Variants } from "framer-motion";

const problems = [
  {
    num: "01",
    heading: "Agencies bleed you dry",
    body: "Traditional recruitment agencies charge ₹50,000–₹2,00,000 per hire for work that is mostly copy-paste sourcing and cold emails. You pay a premium for mediocrity.",
  },
  {
    num: "02",
    heading: "Job portals waste your time",
    body: "Naukri and LinkedIn cost ₹3–8L per year — and you still do all the screening yourself. You just paid for an inbox full of irrelevant applications.",
  },
  {
    num: "03",
    heading: "In-house recruiters are expensive",
    body: "A decent recruiter costs ₹6–12L per year in salary alone — before benefits, tools, and management overhead. Overkill for a 20-person startup.",
  },
  {
    num: "04",
    heading: "Zero visibility into the pipeline",
    body: "Founder asks \u201cwhere are we on the backend role?\u201d \u2014 nobody knows. Hiring happens in Slack threads, WhatsApp groups, and Excel files nobody updates.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProblemSection() {
  return (
    <section className="px-12 py-[100px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-orange">
          The problem
        </p>
        <h2
          className="mb-5 font-display font-black leading-[1.05] tracking-[-0.03em] text-paper"
          style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
        >
          Hiring is <em className="text-orange">broken</em>
          <br />
          for Indian startups.
        </h2>
        <p className="max-w-[540px] text-base leading-[1.7] text-gray">
          Every option on the market was built for someone else — not the Series A
          founder with 10 open roles and no time.
        </p>
      </motion.div>

      {/* Problem grid */}
      <motion.div
        className="mt-16 grid grid-cols-2 border border-white/[0.06]"
        style={{ gap: "2px" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {problems.map(({ num, heading, body }) => (
          <motion.div
            key={num}
            className="relative overflow-hidden bg-dark-2 px-9 py-10 transition-colors duration-300 hover:bg-dark-3"
            variants={itemVariants}
          >
            {/* Ghost number */}
            <span className="pointer-events-none absolute right-5 top-3 font-display text-[72px] font-black leading-none text-white/[0.04]">
              {num}
            </span>
            <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.06em] text-orange">
              {heading}
            </h3>
            <p className="max-w-[320px] text-[15px] leading-[1.7] text-gray">
              {body}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
