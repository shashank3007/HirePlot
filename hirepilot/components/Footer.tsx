import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-white/[0.06] px-12 py-8">
      <Link
        href="/"
        className="font-display text-[18px] font-black tracking-tight text-paper"
      >
        Hire<span className="text-orange">Pilot</span>
      </Link>
      <p className="font-mono text-[11px] tracking-[0.08em] text-gray/50">
        Built in India · For Indian founders · © 2026
      </p>
    </footer>
  );
}
