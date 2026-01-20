import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white px-6 md:px-12 pt-24 pb-10 overflow-hidden">
      {/* TOP CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 z-10 relative">
        
        {/* INQUIRIES */}
        <div>
          <p className="text-gray-400 mb-2">(Inquiries)</p>
          <a
            href="mailto:chabdullahok451@gmail.com"
            className="text-lg font-medium hover:text-orange-400 transition"
          >
            chabdullahok451@gmail.com
          </a>
        </div>

        {/* EMPTY CENTER (for spacing like design) */}
        <div className="hidden md:block" />

        {/* LINKS */}
        <div className="grid grid-cols-2 gap-10">
          {/* SOCIALS */}
          <div>
            <p className="text-gray-400 mb-4">(socials)</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.instagram.com/_abdullah_566_/"
                  target="_blank"
                  className="hover:text-orange-400 transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/abdullah45145"
                  target="_blank"
                  className="hover:text-orange-400 transition"
                >
                  Gitub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="hover:text-orange-400 transition"
                >
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-gray-400 mb-4">(navigation)</p>
            <ul className="space-y-3">
              <li>
                <a href="/projects" className="hover:text-orange-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-orange-400 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/"
                  target="_blank"
                  className="hover:text-orange-400 transition"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* HUGE BRAND TEXT */}
    <div className="overflow-hidden relative mt-24">
  <div className="whitespace-nowrap animate-marquee">
    <h1 className="inline-block text-[18vw] md:text-[16vw] font-bold leading-none tracking-tight text-white select-none mr-16">
      Abdullah.tech
    </h1>
    <h1 className="inline-block text-[18vw] md:text-[16vw] font-bold leading-none tracking-tight text-white select-none">
      Abdullah.tech
    </h1>
  </div>
</div>


      {/* BOTTOM LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
    </footer>
  );
}
