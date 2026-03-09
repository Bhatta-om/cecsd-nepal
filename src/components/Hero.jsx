import { useEffect, useRef } from "react";

export default function Hero({ data }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // Fallback data
  const hero = data || {
    tag: "NGO · Sudurpachim Province · Nepal",
    heading_line1: "Empowering Communities,",
    heading_line2: "Protecting Rights",
    description: "CSDS Nepal is a nonprofit development organization rooted in Kailali, dedicated to human rights advocacy, anti-trafficking, peace building, and community upliftment since 2019.",
    btn_primary: "Explore Our Work",
    btn_secondary: "Partner With Us",
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0F1A10]">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(76,175,80,0.8) 1px, transparent 1px),
          linear-gradient(90deg, rgba(76,175,80,0.8) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />
      <div className="absolute -top-24 -right-24 size-96 rounded-full bg-green-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-24 size-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/40 text-amber-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
            {hero.tag}
          </div>

          <h1 className="font-display text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {hero.heading_line1.replace(",", "").split(" ").map((word, i) =>
              i === hero.heading_line1.split(" ").length - 1 ? (
                <span key={i}><em className="not-italic text-amber-400">{word},</em></span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
            <br />
            {hero.heading_line2.split(" ").map((word, i) =>
              i === hero.heading_line2.split(" ").length - 1 ? (
                <em key={i} className="not-italic text-amber-400">{word}</em>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
            {hero.description}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={() => scrollTo("programs")}
              className="bg-linear-to-r from-amber-500 to-amber-600 text-gray-900 font-bold px-8 py-3.5 rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 cursor-pointer"
            >
              {hero.btn_primary}
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-transparent text-white border border-white/30 font-semibold px-8 py-3.5 rounded-xl hover:border-amber-400 hover:text-amber-400 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {hero.btn_secondary}
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "DAO Reg. 2519", sub: "District Admin Office" },
              { label: "SWC 50470", sub: "Social Welfare Council" },
              { label: "PAN 609353860", sub: "Registered NGO" },
            ].map((b) => (
              <div key={b.label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                <p className="text-white/90 font-bold text-sm">{b.label}</p>
                <p className="text-white/50 text-xs tracking-wide">{b.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="hidden lg:block relative h-120">
          <img src="/images/image1.jpeg" alt="CSDS Community Work"
            className="absolute top-0 right-0 w-10/12 h-96 object-cover rounded-2xl border-2 border-white/10 shadow-2xl" />
          <img src="/images/image2.jpeg" alt="CSDS Field Activities"
            className="absolute bottom-0 left-0 w-7/12 h-64 object-cover rounded-2xl border-2 border-amber-400/40 shadow-xl" />
          <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-[#0F1A10]/90 backdrop-blur-xl border border-green-500/30 rounded-2xl px-5 py-4 z-10 shadow-2xl">
            <p className="text-amber-400 font-display font-black text-2xl">2019</p>
            <p className="text-white/60 text-xs tracking-widest uppercase">Year Founded</p>
          </div>
          <div className="absolute bottom-8 right-4 bg-green-900/80 backdrop-blur-xl border border-green-500/30 rounded-2xl px-5 py-4 z-10 shadow-2xl">
            <p className="text-white font-display font-black text-lg">Kailali</p>
            <p className="text-green-300 text-xs tracking-widest uppercase">Sudurpachim Province</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <p className="text-white/40 text-xs tracking-widest uppercase">Scroll</p>
        <div className="w-px h-8 bg-linear-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}