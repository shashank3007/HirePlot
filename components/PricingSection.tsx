"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "₹20K",
    featured: false,
    badge: null,
    features: [
      "Up to 3 active roles",
      "AI sourcing + screening",
      "Automated outreach",
      "Interview scheduling",
      "Weekly pipeline report",
    ],
  },
  {
    name: "Growth",
    price: "₹30K",
    featured: true,
    badge: "Most popular",
    features: [
      "Up to 8 active roles",
      "Everything in Starter",
      "Live recruiting dashboard",
      "Dedicated account manager",
      "Offer letter automation",
      "Slack integration",
    ],
  },
  {
    name: "Scale",
    price: "₹40K",
    featured: false,
    badge: null,
    features: [
      "Unlimited active roles",
      "Everything in Growth",
      "Custom sourcing playbooks",
      "Employer brand strategy",
      "Priority support (2hr SLA)",
      "Quarterly hiring review",
    ],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PricingSection() {
  return (
    <section id="pricing" className="px-12 py-[100px]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-orange">
          Pricing
        </p>
        <h2
          className="mb-5 font-display font-black leading-[1.05] tracking-[-0.03em] text-paper"
          style={{ fontSize: "clamp(36px, 4vw, 58px)" }}
        >
          Simple retainers.
          <br />
          <em className="text-orange">No per-hire</em> highway robbery.
        </h2>
        <p className="max-w-[540px] text-base leading-[1.7] text-gray">
          Pay monthly, cancel anytime. No commissions, no surprise fees, no
          recruiter markups.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="mt-16 grid grid-cols-3"
        style={{ gap: "2px" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {plans.map(({ name, price, featured, badge, features }) => (
          <motion.div
            key={name}
            className={`relative flex flex-col rounded-sm border p-11 transition-all duration-300 hover:-translate-y-1.5 ${
              featured
                ? "border-orange bg-orange hover:border-[#e8835e]"
                : "border-white/[0.05] bg-dark-2 hover:border-orange/20"
            }`}
            variants={cardVariants}
          >
            {/* Badge */}
            {badge && (
              <span className="mb-7 self-start rounded-full bg-dark/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-dark">
                {badge}
              </span>
            )}

            {/* Plan name */}
            <p
              className={`mb-3 font-mono text-[11px] uppercase tracking-[0.14em] ${
                featured ? "text-dark/70" : "text-gray"
              }`}
            >
              {name}
            </p>

            {/* Price */}
            <p
              className={`font-display text-[52px] font-black leading-none tracking-[-0.04em] ${
                featured ? "text-dark" : "text-paper"
              }`}
            >
              {price}
            </p>
            <p
              className={`mb-8 mt-1 font-mono text-[11px] ${
                featured ? "text-dark/60" : "text-gray"
              }`}
            >
              per month
            </p>

            {/* Divider */}
            <div
              className={`mb-7 h-px ${
                featured ? "bg-dark/15" : "bg-white/[0.07]"
              }`}
            />

            {/* Features */}
            <ul className="flex flex-1 flex-col gap-3.5">
              {features.map((feat) => (
                <li
                  key={feat}
                  className={`flex items-start gap-3 text-sm leading-[1.5] ${
                    featured ? "text-dark/80" : "text-gray"
                  }`}
                >
                  <span
                    className={`mt-px shrink-0 font-mono text-[12px] ${
                      featured ? "text-dark" : "text-orange"
                    }`}
                  >
                    →
                  </span>
                  {feat}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="#get-started"
              className={`mt-9 block rounded-sm border py-3 text-center text-[13px] font-semibold transition-all duration-200 ${
                featured
                  ? "border-transparent bg-dark text-paper hover:bg-dark-2"
                  : "border-white/[0.12] text-paper hover:border-white/25 hover:bg-white/[0.06]"
              }`}
            >
              Get started
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
