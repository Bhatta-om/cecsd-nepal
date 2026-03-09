import useFadeUp from "../hooks/useFadeUp";

const DEFAULT_VMG = [
  { icon: "🌟", title: "Vision", desc: "Sustained peace and a developed society through empowerment of people living in difficult circumstances." },
  { icon: "🎯", title: "Mission", desc: "Ensuring rights of marginalized women and children through advocacy, capacity building, and leadership development." },
  { icon: "🏆", title: "Goal", desc: "Strengthen systems to enable access to formal education, TEVT skills, and combat all forms of discrimination." },
];

const DEFAULT_ABOUT = {
  tag: "About CSDS Nepal",
  heading: "A Community-Led Development Organization",
  description: "Founded in 2075 B.S. (2019) by experienced community development professionals, CSDS Nepal operates from Dhangadhi, Kailali. We champion rights, dignity, and opportunity for the most marginalized communities in Sudurpachim Province.",
  years_of_service: "5+",
};

export default function About({ data, vmg }) {
  const leftRef = useFadeUp(0);
  const rightRef = useFadeUp(150);

  const about = data || DEFAULT_ABOUT;
  const vmgList = vmg || DEFAULT_VMG;

  return (
    <section id="about" className="py-28 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left — Image */}
          <div ref={leftRef} className="fade-up hidden lg:block relative">
            <img
              src="/images/image3.jpeg"
              alt="CSDS Nepal Community"
              className="w-full h-120 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-green-700 text-white rounded-2xl px-6 py-5 shadow-xl shadow-green-700/40">
              <p className="font-display font-black text-4xl leading-none">
                {about.years_of_service}
              </p>
              <p className="text-xs tracking-widest uppercase text-green-200 mt-1">
                Years of Service
              </p>
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-green-600/20 -z-10" />
          </div>

          {/* Right — Content */}
          <div ref={rightRef} className="fade-up">
            <p className="text-green-700 text-xs font-bold tracking-widest uppercase mb-3">
              {about.tag}
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
              {about.heading.split("Development").map((part, i) =>
                i === 0 ? (
                  <span key={i}>{part}<span className="text-green-700">Development</span></span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </h2>
            <div className="w-16 h-1 rounded-full bg-linear-to-r from-green-700 to-amber-500 mb-6" />
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              {about.description}
            </p>

            {/* VMG Cards */}
            <div className="flex flex-col gap-4">
              {vmgList.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm hover:border-green-400 hover:translate-x-2 transition-all duration-300"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className="size-11 rounded-xl bg-linear-to-br from-green-700 to-green-500 flex items-center justify-center text-xl shrink-0 shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-green-700 text-xs font-bold tracking-widest uppercase mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}