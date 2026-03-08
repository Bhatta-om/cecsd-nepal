import { useState } from "react";
import useFadeUp from "../hooks/useFadeUp";

const ALL_IMAGES = [
  // Existing 10
  { src: "/images/image1.jpeg", label: "Pradesh Sabha Visit", category: "Events" },
  { src: "/images/image2.jpeg", label: "SDG Youth Program", category: "Events" },
  { src: "/images/image3.jpeg", label: "Peace Building Activity", category: "Field" },
  { src: "/images/image4.jpeg", label: "Community Meeting", category: "Meetings" },
  { src: "/images/image5.jpeg", label: "Social Audit Training", category: "Training" },
  { src: "/images/image6.jpeg", label: "School Awareness", category: "Education" },
  { src: "/images/image7.jpeg", label: "Youth Leadership Training", category: "Training" },
  { src: "/images/image8.jpeg", label: "MSI Program Launch", category: "Events" },
  { src: "/images/image9.jpeg", label: "Stakeholder Meeting", category: "Meetings" },
  { src: "/images/image10.jpeg", label: "Youth Orientation", category: "Training" },
  // New 15
  { src: "/images/img-1.jpeg", label: "Community Outreach", category: "Field" },
  { src: "/images/img-2.jpeg", label: "Community Circle Meeting", category: "Meetings" },
  { src: "/images/img-3.jpeg", label: "Public Awareness Event", category: "Events" },
  { src: "/images/img-4.jpeg", label: "Women's Group Session", category: "Field" },
  { src: "/images/img-5.jpeg", label: "Field Coordination", category: "Field" },
  { src: "/images/img-6.jpeg", label: "Indoor Workshop", category: "Training" },
  { src: "/images/img-7.jpeg", label: "HR Meet Conference", category: "Events" },
  { src: "/images/img-8.jpeg", label: "Outdoor Community Session", category: "Meetings" },
  { src: "/images/img-9.jpeg", label: "Office Meeting", category: "Meetings" },
  { src: "/images/img-10.jpeg", label: "Ward Level Meeting", category: "Meetings" },
  { src: "/images/img-11.jpeg", label: "Youth Training Session", category: "Training" },
  { src: "/images/img-12.jpeg", label: "Stakeholder Consultation", category: "Meetings" },
  { src: "/images/img-13.jpeg", label: "Field Visit", category: "Field" },
  { src: "/images/img-14.jpeg", label: "Community Facilitation", category: "Training" },
  { src: "/images/img-15.jpeg", label: "Group Photo Session", category: "Events" },
];

const CATEGORIES = ["All", "Events", "Training", "Meetings", "Field", "Education"];

export default function Gallery() {
  const titleRef = useFadeUp(0);
  const gridRef = useFadeUp(150);
  const [lightbox, setLightbox] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? ALL_IMAGES
    : ALL_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div ref={titleRef} className="fade-up max-w-2xl mb-10">
          <p className="text-green-700 text-xs font-bold tracking-widest uppercase mb-3">
            Photo Gallery
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
            Our Work in{" "}
            <span className="text-green-700">Action</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-linear-to-r from-green-700 to-amber-500 mb-6" />
          <p className="text-gray-500 text-lg leading-relaxed">
            A glimpse into our community programs, field activities, and
            the lives we impact across Sudurpachim Province.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-green-700 text-white shadow-lg shadow-green-700/30"
                  : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {cat}
              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                activeCategory === cat ? "bg-white/20 text-white" : "bg-gray-200 text-gray-500"
              }`}>
                {cat === "All" ? ALL_IMAGES.length : ALL_IMAGES.filter(i => i.category === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="fade-up">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((img, i) => (
              <div
                key={img.src}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
                style={{ aspectRatio: i === 0 ? "auto" : "4/3" }}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ minHeight: i === 0 ? "300px" : "180px" }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-white font-semibold text-xs block">{img.label}</span>
                    <span className="text-amber-400 text-[10px] tracking-widest uppercase">{img.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center cursor-pointer"
          >✕</button>

          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
            {lightbox + 1} / {filtered.length}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + filtered.length) % filtered.length); }}
            className="absolute left-4 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center cursor-pointer"
          >←</button>

          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].label}
            className="max-w-5xl max-h-screen w-full object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % filtered.length); }}
            className="absolute right-4 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl flex items-center justify-center cursor-pointer"
          >→</button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white/70 text-sm font-medium">{filtered[lightbox].label}</p>
            <p className="text-amber-400 text-xs tracking-widest uppercase mt-1">{filtered[lightbox].category}</p>
          </div>
        </div>
      )}
    </section>
  );
}
