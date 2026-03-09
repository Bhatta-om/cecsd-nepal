import useFadeUp from "../hooks/useFadeUp";
import { PROGRAMS } from "../data";

const DEFAULT_PROGRAMS = PROGRAMS;

export default function Programs({ data }) {
  const titleRef = useFadeUp(0);
  const programs = data || DEFAULT_PROGRAMS;

  return (
    <section id="programs" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={titleRef} className="fade-up max-w-2xl mb-16">
          <p className="text-green-700 text-xs font-bold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
            Our Core{" "}
            <span className="text-green-700">Program Areas</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-linear-to-r from-green-700 to-amber-500 mb-6" />
          <p className="text-gray-500 text-lg leading-relaxed">
            CSDS Nepal delivers impactful programs across six key areas,
            reaching the most vulnerable communities in Kailali and
            Sudurpachim Province.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <ProgramCard key={program.title} program={program} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ program, index }) {
  const ref = useFadeUp(index * 80);
  return (
    <div
      ref={ref}
      className={`fade-up bg-white rounded-2xl p-8 border border-gray-100 border-t-4 ${program.color} shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group`}
    >
      <span className="text-5xl mb-5 block">{program.icon}</span>
      <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
        {program.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {program.desc}
      </p>
      <div className="mt-6 h-px bg-linear-to-r from-green-600/0 via-green-600/50 to-green-600/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
}