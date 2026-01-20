import React from "react";

const PricingSection = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Flexible Pricing for Every Stage
        </h2>
        <p className="text-gray-400 text-lg">
          Whether you're launching an MVP or scaling a brand, I have a plan for
          you. Don't let budget stop you. Let’s chat and find a solution to
          bring your project to life.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Starter Kit */}
        <div className="bg-[#111] rounded-3xl p-10 shadow-xl hover:scale-[1.02] transition">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold">Starter Kit</h3>
            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-xl">
              🌐
            </div>
          </div>

          <hr className="border-white/20 mb-6" />

          <p className="text-3xl font-bold mb-4">$999</p>
          <p className="text-gray-400 mb-8">
            Premium templates & essential features for businesses ready to
            launch fast
          </p>

          <ul className="space-y-4">
            {[
              "Premium Template Design",
              "Up to 3 Pages",
              "2 Rounds of Revisions",
              "Basic SEO Setup (Google)",
              "Fully Responsive (Mobile, Tablet & Desktop)",
              "Email Support",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-lg">↗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Premium */}
        <div className="bg-white text-black rounded-3xl p-10 shadow-xl hover:scale-[1.02] transition">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold">Premium</h3>
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl">
              🔥
            </div>
          </div>

          <hr className="border-black/20 mb-6" />

          <p className="text-2xl font-bold mb-4">Starts at $2,000</p>
          <p className="text-gray-600 mb-8">
            Tailored design & advanced tech for businesses seeking impact.
          </p>

          <ul className="space-y-4">
            {[
              "100% Custom Design",
              "5 Pages",
              "3 Rounds of Revisions",
              "Technical SEO & Speed Optimization",
              "Fully Responsive (All Screens)",
              "Advanced Animations & Interactions",
              "Complex Functionality (CMS, Integrations)",
              "WhatsApp & Email Support",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-lg">↗</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
