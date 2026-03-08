import { useState } from "react";
import useFadeUp from "../hooks/useFadeUp";
import { useForm, ValidationError } from "@formspree/react";

const CONTACT_ITEMS = [
  {
    icon: "📍",
    title: "Head Office",
    lines: [
      "Dhangadhi Sub Metropolitan-5, Kailali",
      "Sudurpachim Province, Nepal",
    ],
  },
  {
    icon: "📞",
    title: "Phone",
    lines: ["+977-9858424892"],
  },
  {
    icon: "📧",
    title: "Email",
    lines: ["cecsddhn@gmail.com", "taprajjoshi@yahoo.com"],
  },
  {
    icon: "🏛️",
    title: "Registration",
    lines: ["DAO Reg. No: 2519", "SWC: 50470 | PAN: 609353860"],
  },
];

const SUBJECTS = [
  "Select a topic",
  "Partnership Inquiry",
  "Volunteer / Internship",
  "Donation / Funding",
  "Program Information",
  "Media / Press",
  "Other",
];

export default function Contact() {
  const leftRef = useFadeUp(0);
  const rightRef = useFadeUp(150);

  // Replace with your Formspree form ID
  const [state, handleSubmit] = useForm("mwvndvee");

  return (
    <section id="contact" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="fade-up max-w-2xl mb-16" ref={useFadeUp(0)}>
          <p className="text-green-700 text-xs font-bold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
            Contact{" "}
            <span className="text-green-700">CSDS Nepal</span>
          </h2>
          <div className="w-16 h-1 rounded-full bg-linear-to-r from-green-700 to-amber-500 mb-6" />
          <p className="text-gray-500 text-lg leading-relaxed">
            Whether you are an individual, organization, or government body
            — we welcome partnerships, volunteers, and donors who share our
            vision for an equitable Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — Contact Info */}
          <div ref={leftRef} className="fade-up">
            <div className="flex flex-col gap-5 mb-10">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="size-12 rounded-xl bg-linear-to-br from-green-700 to-green-500 flex items-center justify-center text-xl shrink-0 shadow-md">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-green-700 text-xs font-bold tracking-widest uppercase mb-1">
                      {item.title}
                    </h4>
                    {item.lines.map((line) => (
                      <p
                        key={line}
                        className="text-gray-600 text-sm leading-relaxed"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="CECSD Nepal Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31773905575!2d80.5497!3d28.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a1a0b3f3a3f3a3%3A0x1234567890abcdef!2sDhangadhi%2C%20Kailali!5e0!3m2!1sen!2snp!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div ref={rightRef} className="fade-up">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">

              {state.succeeded ? (
                /* Success State */
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="size-20 rounded-full bg-green-100 flex items-center justify-center text-4xl mb-6">
                    ✅
                  </div>
                  <h3 className="font-display text-2xl font-black text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                    Thank you for reaching out to CECSD Nepal. We will get
                    back to you as soon as possible.
                  </p>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit}>
                  <h3 className="font-display text-2xl font-black text-gray-900 mb-6">
                    Send a Message
                  </h3>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold text-gray-700 tracking-wide uppercase mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 outline-none focus:border-green-500 focus:bg-white transition-all duration-200"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold text-gray-700 tracking-wide uppercase mb-2"
                      >
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 outline-none focus:border-green-500 focus:bg-white transition-all duration-200"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-bold text-gray-700 tracking-wide uppercase mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 outline-none focus:border-green-500 focus:bg-white transition-all duration-200 cursor-pointer"
                    >
                      {SUBJECTS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-gray-700 tracking-wide uppercase mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your inquiry..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 outline-none focus:border-green-500 focus:bg-white transition-all duration-200 resize-none"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-4 bg-linear-to-r from-green-700 to-green-600 text-white font-bold rounded-xl hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-700/30 transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Sending..." : "Send Message →"}
                  </button>

                  <p className="text-center text-gray-400 text-xs mt-4">
                    We typically respond within 1-2 business days
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}