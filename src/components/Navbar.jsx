import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleSpy = () => {
      const sections = NAV_LINKS.map((n) =>
        document.getElementById(n.toLowerCase())
      );
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].getBoundingClientRect().top <= 120) {
          setActive(NAV_LINKS[i]);
          return;
        }
      }
      setActive("Home");
    };
    window.addEventListener("scroll", handleSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleSpy);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F1A10]/97 backdrop-blur-xl shadow-2xl"
          : "bg-[#0F1A10]/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => scrollTo("home")}
        >
          <img
            src="/images/logo.png"
            alt="CSDS Nepal"
            className="w-16 h-16 object-contain shrink-0 group-hover:scale-105 transition-transform duration-300"
          />

          <div className="flex flex-col justify-center">
            {/* Full name on xl screens */}
            <p className="hidden xl:block text-white font-bold text-[12px] leading-snug tracking-wide">
              Creative Environment Conservation and
            </p>
            <p className="hidden xl:block text-white font-bold text-[12px] leading-snug tracking-wide">
              Social Development Center (CSDS), Nepal
            </p>
            {/* 2 line on lg screens */}
            <p className="hidden lg:block xl:hidden text-white font-bold text-[11px] leading-snug">
              Creative Environment Conservation &
            </p>
            <p className="hidden lg:block xl:hidden text-white font-bold text-[11px] leading-snug">
              Social Development Center, Nepal
            </p>
            {/* Short on small screens */}
            <p className="lg:hidden text-white font-bold text-[14px] leading-snug">
              CSDS Nepal
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              <p className="text-amber-400 text-[10px] tracking-[0.15em] uppercase font-semibold">
                Kailali · Est. 2019
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  link === "Contact"
                    ? "bg-linear-to-r from-amber-500 to-amber-600 text-gray-900 font-bold shadow-lg hover:shadow-amber-500/40 hover:-translate-y-0.5"
                    : active === link
                    ? "text-amber-400 bg-amber-400/10 border border-amber-400/20"
                    : "text-white/80 hover:text-amber-400 hover:bg-amber-400/10"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none p-2"
          onClick={() => setMenuOpen((m) => !m)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F1A10]/98 backdrop-blur-xl border-t border-amber-400/20 px-6 py-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                link === "Contact"
                  ? "bg-linear-to-r from-amber-500 to-amber-600 text-gray-900 font-bold text-center"
                  : active === link
                  ? "text-amber-400 bg-amber-400/10"
                  : "text-white/80 hover:text-amber-400 hover:bg-white/5"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}