"use client";

import { motion, type Variants } from "framer-motion";

const steps = [
  {
    color: "orange" as const,
    label: "Drop your JD",
    description:
      "Paste any job description. AI parses requirements, seniority, and skills automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 5v14M5 12h14" stroke="#d97757" />
      </svg>
    ),
  },
  {
    color: "orange" as const,
    label: "AI sources candidates",
    description:
      "We search LinkedIn, Apollo, and job boards. Candidates are ranked by fit score, not luck.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="6" stroke="#d97757" />
        <path d="M20 20l-3-3" stroke="#d97757" />
      </svg>
    ),
  },
  {
    color: "blue" as const,
    label: "Personalised outreach",
    description:
      "AI writes and sends tailored messages to every candidate. Open rates 3× higher than generic blasts.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#6a9bcc" />
      </svg>
    ),
  },
  {
    color: "green" as const,
    label: "Interviews scheduled",
    description:
      "Calendly integration auto-books interviews based on your availability. Zero back-and-forth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="#788c5d" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="#788c5d" />
      </svg>
    ),
  },
  {
    color: "green" as const,
    label: "Live dashboard",
    description:
      "Real-time pipeline view: source quality, drop-off, time-to-hire, cost per role. Updated daily.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#788c5d" />
        <path d="M3 9h18M9 21V9" stroke="#788c5d" />
      </svg>
    ),
  },
];

const dotColors = {
  orange: "border-orange",
  blue:   "border-blue",
  green:  "border-green",
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-dark-2 px-6 py-16 md:px-12 md:py-[100px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-orange">
          The solution
        </p>
        <h2
          className="mb-5 font-display font-black leading-[1.05] tracking-[-0.03em] text-paper"
          style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
        >
          Your entire hiring ops,
          <br />
          run by <em className="text-orange">AI.</em>
        </h2>
        <p className="max-w-[540px] text-base leading-[1.7] text-gray">
          HirePilot combines two ideas into one service: automation that does the
          work, and intelligence that shows you everything.
        </p>
      </motion.div>

      {/* Steps grid */}
      <motion.div
        className="relative mt-12 grid grid-cols-2 gap-y-10 md:mt-16 md:grid-cols-5 md:gap-y-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Connecting gradient line — desktop only */}
        <div
          className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-px md:block"
          style={{
            background:
              "linear-gradient(90deg, transparent, #d97757, #6a9bcc, #788c5d, transparent)",
            opacity: 0.3,
          }}
        />

        {steps.map(({ color, label, description, icon }) => (
          <motion.div
            key={label}
            className="group px-6 text-center"
            variants={stepVariants}
          >
            {/* Dot */}
            <div
              className={`relative z-10 mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border bg-dark transition-transform duration-300 group-hover:scale-110 ${dotColors[color]}`}
            >
              <div className="h-5 w-5">{icon}</div>
            </div>

            <h4 className="mb-2.5 text-[13px] font-semibold text-paper">{label}</h4>
            <p className="text-[13px] leading-[1.6] text-gray">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
