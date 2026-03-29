"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormValues {
  email: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function CTASection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  async function onSubmit({ email }: FormValues) {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section
      id="get-started"
      className="relative overflow-hidden px-6 py-20 text-center md:px-12 md:py-[120px]"
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

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-[480px] rounded-sm border border-green/30 bg-green/10 px-6 py-5"
          >
            <p className="font-semibold text-paper">You&apos;re on the list.</p>
            <p className="mt-1 text-sm text-gray">
              Check your inbox — we&apos;ll be in touch within 48 hours.
            </p>
          </motion.div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mx-auto mb-3 flex max-w-[480px] overflow-hidden rounded-sm border border-white/[0.12] transition-colors duration-200 focus-within:border-orange"
            >
              <input
                type="email"
                placeholder="your@startup.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="flex-1 bg-dark-2 px-5 py-3.5 text-sm text-paper outline-none placeholder:text-gray/50"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 bg-orange px-7 py-3.5 text-[13px] font-semibold text-dark transition-colors duration-200 hover:bg-[#e8835e] disabled:opacity-60"
              >
                {status === "loading" ? "Sending…" : "Start free →"}
              </button>
            </form>

            {(errors.email || status === "error") && (
              <p className="mb-3 font-mono text-[11px] text-orange/80">
                {errors.email?.message || errorMsg}
              </p>
            )}
          </>
        )}

        <p className="mt-4 font-mono text-[11px] tracking-[0.08em] text-gray/40">
          No spam. No sales calls. Just results.
        </p>
      </motion.div>
    </section>
  );
}
