import useFadeUp from "../hooks/useFadeUp";
import { PROGRAMS } from "../data";

const DEFAULT_PROGRAMS = PROGRAMS;

export default function Programs({ data, ongoingPrograms }) {
  const titleRef = useFadeUp(0);
  const programs = data || DEFAULT_PROGRAMS;
  const ongoing = ongoingPrograms || [];

  return (
    <section id="programs" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <ProgramCard key={program.title} program={program} index={i} />
          ))}
        </div>

        {ongoing.length > 0 && (
          <div className="mt-20">
            <div className="max-w-2xl mb-10">
              <p className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-3">
                Currently Active
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-4">
                Ongoing <span className="text-green-700">Programs</span>
              </h2>
              <div className="w-16 h-1 rounded-full bg-linear-to-r from-amber-500 to-green-700 mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ongoing.map((item, i) => (
                <OngoingCard key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        )}
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
      <p className="text-gray-500 text-sm leading-relaxed">{program.desc}</p>
      <div className="mt-6 h-px bg-linear-to-r from-green-600/0 via-green-600/50 to-green-600/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
}

function OngoingCard({ item, index }) {
  const ref = useFadeUp(index * 80);
  return (
    <div
      ref={ref}
      className="fade-up bg-white rounded-2xl p-8 border border-l-4 border-amber-500 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
            {item.status || "Ongoing"}
          </span>
          <h3 className="font-display text-xl font-bold text-gray-900">
            {item.title}
          </h3>
          {item.funded_by && (
            <p className="text-green-700 text-sm font-semibold mt-1">
              Funded by: {item.funded_by}
            </p>
          )}
        </div>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-5">{item.desc}</p>
      {item.pdf && (
        <div className="flex gap-3 flex-wrap">
          <a
            href={item.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
          >
            👁️ View Letter
          </a>
          <a
            href={item.pdf}
            download="document.pdf"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200"
          >
            📄 Download Letter
          </a>
        </div>
      )}
    </div>
  );
}