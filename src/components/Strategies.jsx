import useFadeUp from "../hooks/useFadeUp";
import { STRATEGIES } from "../data";

export default function Strategies() {
  const titleRef = useFadeUp(0);

  return (
    <section className="py-28 bg-[#0F1A10] relative overflow-hidden">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(76,175,80,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(76,175,80,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-96 bg-green-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div ref={titleRef} className="fade-up max-w-2xl mb-16">
          <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
            How We Work
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Our{" "}
            <span className="text-amber-400">Strategies</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-linear-to-r from-green-500 to-amber-400 mb-6" />
          <p className="text-white/60 text-lg leading-relaxed">
            Seven strategic pillars guide our work — ensuring sustainable,
            rights-based, and community-owned development outcomes across
            Sudurpachim Province.
          </p>
        </div>

        {/* ── Strategy Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STRATEGIES.map((strategy, i) => (
            <StrategyCard key={strategy.title} strategy={strategy} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StrategyCard({ strategy, index }) {
  const ref = useFadeUp(index * 70);

  return (
    <div
      ref={ref}
      className="fade-up group bg-white/4 border border-white/10 rounded-2xl p-6 hover:bg-green-500/10 hover:border-green-500/30 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Number */}
      <p className="font-display font-black text-4xl text-amber-400/20 mb-3 group-hover:text-amber-400/40 transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </p>

      {/* Title */}
      <h4 className="text-white font-semibold text-base mb-3">
        {strategy.title}
      </h4>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed">
        {strategy.desc}
      </p>

      {/* Bottom accent */}
      <div className="mt-5 w-8 h-0.5 rounded-full bg-green-500/40 group-hover:w-full transition-all duration-500" />
    </div>
  );
}