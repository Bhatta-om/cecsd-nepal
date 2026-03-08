import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    const hideTimer = setTimeout(() => setVisible(false), 2600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 bg-[#0F1A10] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(76,175,80,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(76,175,80,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 bg-green-500/10 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6">

        {/* Logo */}
        <div className="size-20 rounded-2xl bg-linear-to-br from-green-700 to-green-500 flex items-center justify-center font-display font-black text-white text-3xl shadow-2xl shadow-green-700/50 animate-pulse">
          CE
        </div>

        {/* Name */}
        <div className="text-center">
          <h1 className="font-display font-black text-white text-2xl leading-tight">
            CECSD Nepal
          </h1>
          <p className="text-amber-400 text-xs tracking-widest uppercase mt-1">
            Empowering Communities
          </p>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-linear-to-r from-green-500 to-amber-400 rounded-full animate-[loading_2s_ease-in-out_forwards]" />
        </div>

        <p className="text-white/30 text-xs tracking-widest uppercase">
          Loading...
        </p>
      </div>
    </div>
  );
}