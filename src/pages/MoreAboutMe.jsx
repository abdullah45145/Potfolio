import React from "react";
import { useState } from "react";


export default function AboutPage() {
  const [active, setActive] = useState("About");

  const services = [
    { title: "Web Design", desc: "Modern, high-quality design made at a professional level." },
    { title: "Web Development", desc: "High-quality development of sites at the professional level." },
    { title: "Mobile Apps", desc: "Professional development of applications for iOS and Android." },
    { title: "Photography", desc: "High-quality photos of any category at a professional level." },
  ];

  const testimonials = [
    { name: "Daniel Lewis", text: "Richard was hired to create a corporate identity." },
    { name: "Jessica Miller", text: "Excellent designer with great communication skills." },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-5 md:p-10">
      {/* Navbar */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-lg font-semibold">About</h1>
        <nav className="flex gap-6 text-sm text-gray-400">
          {["About", "Resume", "Portfolio", "Blog", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`transition hover:text-white ${
                active === item
                  ? "text-white border-b border-orange-400 pb-1"
                  : ""
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl">
        {/* ABOUT */}
        {active === "About" && (
          <>
            <section>
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p className="text-gray-400 leading-relaxed">
                I'm a creative developer and UI/UX designer working in web
                development and print media. I enjoy turning complex problems
                into simple, beautiful and intuitive designs.
              </p>
            </section>

            {/* What I'm Doing */}
            <section className="mt-10">
              <h2 className="text-xl font-semibold mb-6">What I’m Doing</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((item) => (
                  <div
                    key={item.title}
                    className="bg-[#1b1b1b] p-6 rounded-xl border border-[#2a2a2a]"
                  >
                    <h3 className="text-white font-medium mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section className="mt-10">
              <h2 className="text-xl font-semibold mb-6">Testimonials</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="bg-[#1b1b1b] p-6 rounded-xl"
                  >
                    <h3 className="font-medium">{t.name}</h3>
                    <p className="text-gray-400 text-sm mt-2">{t.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* RESUME */}
        {active === "Resume" && (
          <section>
            <h2 className="text-2xl font-semibold mb-6">Resume</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-orange-400 font-medium mb-2">Education</h3>
                <p className="text-gray-400">
                  Bachelor of Computer Science — 2021
                </p>
              </div>

              <div>
                <h3 className="text-orange-400 font-medium mb-2">Experience</h3>
                <p className="text-gray-400">
                  Frontend Developer at XYZ Studio
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
