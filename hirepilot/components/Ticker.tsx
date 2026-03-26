const items = [
  "Sourcing",
  "AI Screening",
  "Outreach",
  "Scheduling",
  "Live Dashboard",
  "Offer Letters",
  "Pipeline Analytics",
  "Cost Per Hire",
];

// Doubled for seamless infinite loop
const doubled = [...items, ...items];

export default function Ticker() {
  return (
    <div className="overflow-hidden whitespace-nowrap border-b border-t border-white/[0.06] py-3.5">
      <div className="inline-flex animate-ticker">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="px-10 font-mono text-[11px] uppercase tracking-[0.14em] text-gray"
          >
            {item} <span className="text-orange">→</span>
          </span>
        ))}
      </div>
    </div>
  );
}
