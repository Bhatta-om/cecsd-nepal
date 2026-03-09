// Dynamic data loader
export async function loadSiteData() {
  const res = await fetch('/content/site.json');
  return res.json();
}

export const NAV_LINKS = ["Home", "About", "Programs", "Team", "Gallery", "Contact"];

export const STATS = [
  { value: "2019", label: "Year Founded" },
  { value: "9+", label: "Team Members" },
  { value: "4", label: "Program Areas" },
  { value: "50470", label: "SWC Reg. No." },
];

export const PROGRAMS = [
  {
    icon: "⚖️",
    title: "Human Rights & Advocacy",
    desc: "We educate communities on their rights, advocate for victims, and promote equality and inclusion across Sudurpachim Province.",
    color: "border-emerald-700",
  },
  {
    icon: "🕊️",
    title: "Peace Building",
    desc: "Leveraging expertise in post-conflict situations, we facilitate reconciliation and promote sustained peace at the grassroots level.",
    color: "border-blue-800",
  },
  {
    icon: "🚫",
    title: "Anti-Trafficking & Modern Slavery",
    desc: "Running awareness campaigns against human trafficking and labor exploitation, empowering vulnerable women and youth.",
    color: "border-red-800",
  },
  {
    icon: "🤝",
    title: "Community Mobilization",
    desc: "Building trust through participatory approaches, stakeholder mapping, volunteer coordination and grassroots capacity development.",
    color: "border-indigo-700",
  },
  {
    icon: "📚",
    title: "Education & Livelihood",
    desc: "Strengthening access to formal education, TEVT skills training, and entrepreneurship support to improve youth employability.",
    color: "border-purple-700",
  },
  {
    icon: "🌐",
    title: "Networking & Partnership",
    desc: "Coordinating with GOs, NGOs, and INGOs to create strong networks that amplify impact across the community.",
    color: "border-teal-700",
  },
];

export const STRATEGIES = [
  { title: "Human Rights", desc: "Support and sustain human rights through education, advocacy, and direct support for victims." },
  { title: "Advocacy", desc: "Make communities aware of rights-based approaches through training and targeted campaigns." },
  { title: "Peace Building", desc: "Publicize expertise in peace-building in post-conflict environments." },
  { title: "Networking", desc: "Coordinate with district agencies and CBOs for strong unified social impact." },
  { title: "Partnership", desc: "Collaborate with GOs, NGOs, and INGOs to scale programs at field level." },
  { title: "Capacity Building", desc: "Provide trainings in leadership, PRA, conflict management, and more." },
  { title: "Research", desc: "Study and investigate needs and potential programs for sustainability." },
];

export const TEAM = [
  { name: "Mr. Hari Joshi", role: "Chairperson", edu: "Masters", exp: "12 Yrs", gender: "M" },
  { name: "Mr. Yagya Raj Pathak", role: "Vice-Chairperson", edu: "B.A.", exp: "12 Yrs", gender: "M" },
  { name: "Ms. Urmila Bhatta", role: "Secretary", edu: "M.A.", exp: "15 Yrs", gender: "F" },
  { name: "Ms. Kusum Bhatta", role: "Treasurer", edu: "M.A.", exp: "10 Yrs", gender: "F" },
  { name: "Mr. Birendra Chaudhari", role: "Executive Member", edu: "M.A.", exp: "15 Yrs", gender: "M" },
  { name: "Mr. Lok Raj Bhatta", role: "Executive Member", edu: "B.A.", exp: "5 Yrs", gender: "M" },
  { name: "Mr. Chandra Chaudhari", role: "Executive Member", edu: "B.A.", exp: "12 Yrs", gender: "M" },
  { name: "Mr. Mukunda Bhatta", role: "Executive Member", edu: "MCA", exp: "8 Yrs", gender: "M" },
  { name: "Ms. Sita Joshi", role: "Executive Member", edu: "B.A.", exp: "1 Yr", gender: "F" },
];

export const CORE_STAFF = [
  { name: "Tap Raj Joshi", role: "Executive Director", phone: "9858424892" },
  { name: "Indra Kant Pant", role: "Program Manager", phone: "9851160169" },
  { name: "Sarmila Pathak", role: "Field Staff / Social Mobilizer", phone: "" },
];

export const GALLERY_LABELS = [
  "Community Meeting",
  "Field Activities",
  "Advocacy Program",
  "Capacity Building",
  "Women Empowerment",
  "Peace Building",
  "Anti-Trafficking Awareness",
  "Youth Program",
  "Training Session",
  "Community Outreach",
];