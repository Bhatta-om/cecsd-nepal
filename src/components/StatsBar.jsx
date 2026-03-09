import { useState, useEffect, useRef } from "react";
import { STATS } from "../data";

const DEFAULT_STATS = STATS;

function StatCard({ value, label }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const num = parseInt(value.replace(/[^0-9]/g, "")) || 0;
    if (!num) { setCount(value); return; }
    let start = 0;
    const step = Math.ceil(num / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(String(start) + (value.includes("+") ? "+" : ""));
      }
    }, 25);
    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center py-8 px-6 border-r border-white/10 last:border-r-0"
    >
      <p className="font-display font-black text-5xl text-amber-400 leading-none mb-2">
        {count || value}
      </p>
      <p className="text-white/50 text-xs tracking-widest uppercase text-center">
        {label}
      </p>
    </div>
  );
}

export default function StatsBar({ data }) {
  const stats = data || DEFAULT_STATS;

  return (
    <div className="bg-[#0a1208] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
}