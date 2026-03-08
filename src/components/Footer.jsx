import useFadeUp from "../hooks/useFadeUp";
import { NAV_LINKS } from "../data";

const PROGRAMS = [
  "Human Rights",
  "Anti-Trafficking",
  "Peace Building",
  "Community Dev.",
  "Education",
  "Networking",
];

const QUICK_LINKS = [
  { label: "About CSDS Nepal", id: "about" },
  { label: "Our Programs", id: "programs" },
  { label: "Strategies", id: "programs" },
  { label: "Our Team", id: "team" },
  { label: "Photo Gallery", id: "gallery" },
  { label: "Contact Us", id: "contact" },
];

export default function Footer() {
  const ref = useFadeUp(0);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1208] border-t border-white/5">

      {/* Top CTA Banner */}
      <div className="bg-linear-to-r from-green-800 to-green-700 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-black text-white mb-2">
              Ready to Make a Difference?
            </h3>
            <p className="text-green-200 text-sm leading-relaxed">
              Partner with us, volunteer, or donate to support communities
              across Sudurpachim Province.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={() => scrollTo("contact")}
              className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/30 cursor-pointer text-sm"
            >
              Partner With Us
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-sm border border-white/20"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div ref={ref} className="fade-up max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/logo.png"
                alt="CSDS Nepal"
                className="w-14 h-14 object-contain shrink-0"
              />
              <div>
                <p className="text-white font-bold text-sm leading-tight">
                  CSDS Nepal
                </p>
                <p className="text-amber-400 text-xs tracking-widest uppercase">
                  Est. 2019
                </p>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Creative Environment Conservation and Social Development Center (CSDS), Nepal —
              empowering marginalized communities through rights-based
              development since 2019.
            </p>

            {/* Registration badges */}
            <div className="flex flex-col gap-2">
              {[
                "DAO Reg. No: 2519",
                "SWC Reg. No: 50470",
                "PAN: 609353860",
              ].map((badge) => (
                <span
                  key={badge}
                  className="text-white/30 text-xs border border-white/10 rounded-lg px-3 py-1.5 w-fit"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/40 hover:text-amber-400 text-sm transition-colors duration-200 cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-amber-400 transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-5">
              Our Programs
            </h4>
            <ul className="flex flex-col gap-3">
              {PROGRAMS.map((program) => (
                <li key={program}>
                  <button
                    onClick={() => scrollTo("programs")}
                    className="text-white/40 hover:text-amber-400 text-sm transition-colors duration-200 cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-amber-400 transition-all duration-300" />
                    {program}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-lg mt-0.5">📍</span>
                <p className="text-white/40 text-sm leading-relaxed">
                  Dhangadhi Sub Metropolitan-5,<br />
                  Kailali, Sudurpachim Province, Nepal
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <p className="text-white/40 text-sm">+977-9858424892</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg mt-0.5">📧</span>
                <div>
                  <p className="text-white/40 text-sm">cecsddhn@gmail.com</p>
                  <p className="text-white/40 text-sm">taprajjoshi@yahoo.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs text-center md:text-left">
            © {currentYear} CSDS Nepal. All rights reserved. Built with ❤️ for community impact.
          </p>
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-white/25 hover:text-white/60 text-xs transition-colors duration-200 cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}