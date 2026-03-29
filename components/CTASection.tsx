"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <section
      id="get-started"
      className="relative overflow-hidden px-12 py-[120px] text-center"
    >
      {/* Radial orange glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(217,119,87,0.12), transparent)",
        }}
      />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-orange">
          Get started
        </p>

        <h2
          className="mx-auto mb-6 font-display font-black leading-none tracking-[-0.04em] text-paper"
          style={{ fontSize: "clamp(44px, 6vw, 88px)" }}
        >
          Your first hire,
          <br />
          <em className="text-orange">on us.</em>
        </h2>

        <p className="mx-auto mb-12 max-w-[500px] text-[17px] leading-[1.7] text-gray">
          Fill one role free. No credit card, no commitment. See the difference
          in 48 hours or we&apos;ll tell you it&apos;s not for you.
        </p>

        {/* Email form */}
        <div
          className="mx-auto mb-5 flex max-w-[480px] overflow-hidden rounded-sm border border-white/[0.12] transition-colors duration-200 focus-within:border-orange"
          onClick={() => inputRef.current?.focus()}
        >
          <input
            ref={inputRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@startup.com"
            className="flex-1 bg-dark-2 px-5 py-3.5 text-sm text-paper outline-none placeholder:text-gray/50"
          />
          <button
            type="button"
            className="shrink-0 bg-orange px-7 py-3.5 text-[13px] font-semibold text-dark transition-colors duration-200 hover:bg-[#e8835e]"
          >
            Start free →
          </button>
        </div>

        <p className="font-mono text-[11px] tracking-[0.08em] text-gray/40">
          No spam. No sales calls. Just results.
        </p>
      </motion.div>
    </section>
  );
}
