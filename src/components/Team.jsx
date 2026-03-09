import useFadeUp from "../hooks/useFadeUp";
import { TEAM, CORE_STAFF } from "../data";

const DEFAULT_TEAM = TEAM;
const DEFAULT_STAFF = CORE_STAFF;

function getInitials(name) {
  const cleaned = name.replace("Mr. ", "").replace("Ms. ", "");
  const parts = cleaned.split(" ");
  return parts[0][0] + (parts[1] ? parts[1][0] : "");
}

function TeamCard({ member, index }) {
  const ref = useFadeUp(index * 60);
  const avatarClass = member.gender === "F"
    ? "bg-linear-to-br from-pink-600 to-pink-400"
    : "bg-linear-to-br from-green-700 to-green-500";

  return (
    <div ref={ref} className="fade-up bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-green-300 transition-all duration-300 flex items-center gap-4">
      <div className={`size-14 rounded-full flex items-center justify-center font-display font-black text-lg text-white shrink-0 shadow-md ${avatarClass}`}>
        {getInitials(member.name)}
      </div>
      <div className="min-w-0">
        <p className="text-green-700 text-xs font-bold tracking-wide uppercase mb-0.5 truncate">
          {member.role}
        </p>
        <h4 className="text-gray-900 font-bold text-sm leading-tight mb-1 truncate">
          {member.name}
        </h4>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full">
            {member.edu}
          </span>
          <span className="bg-green-50 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">
            {member.exp}
          </span>
        </div>
      </div>
    </div>
  );
}

function StaffCard({ staff, index }) {
  const ref = useFadeUp(index * 80);
  return (
    <div ref={ref} className="fade-up bg-linear-to-br from-green-800 to-green-700 rounded-2xl p-6 text-white shadow-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-green-700/30 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="size-12 rounded-full bg-white/15 flex items-center justify-center font-display font-black text-lg">
          {getInitials(staff.name)}
        </div>
        <div>
          <h4 className="font-bold text-base leading-tight">{staff.name}</h4>
          <p className="text-green-300 text-xs mt-0.5">{staff.role}</p>
        </div>
      </div>
      <div className="h-px bg-white/10 mb-4" />
      {staff.phone ? (
        <div className="flex items-center gap-2">
          <span>📞</span>
          <span className="text-amber-400 text-sm font-semibold">+977-{staff.phone}</span>
        </div>
      ) : (
        <p className="text-white/30 text-sm italic">Contact via office</p>
      )}
    </div>
  );
}

export default function Team({ data, staff }) {
  const titleRef = useFadeUp(0);
  const staffTitleRef = useFadeUp(0);

  const team = data || DEFAULT_TEAM;
  const coreStaff = staff || DEFAULT_STAFF;

  return (
    <section id="team" className="py-28 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={titleRef} className="fade-up max-w-2xl mb-16">
          <p className="text-green-700 text-xs font-bold tracking-widest uppercase mb-3">
            Leadership
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
            Our <span className="text-green-700">Executive Committee</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-linear-to-r from-green-700 to-amber-500 mb-6" />
          <p className="text-gray-500 text-lg leading-relaxed">
            CSDS Nepal's General Assembly elects 9 Executive Committee
            members — a diverse group with decades of combined development
            sector experience.
          </p>
        </div>

        {/* Executive Committee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Core Staff */}
        <div ref={staffTitleRef} className="fade-up">
          <p className="text-green-700 text-xs font-bold tracking-widest uppercase mb-3">
            Core Staff
          </p>
          <h3 className="font-display text-3xl font-black text-gray-900 mb-8">
            The Team Behind the Work
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreStaff.map((s, i) => (
              <StaffCard key={s.name} staff={s} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}