import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import ProcessSection from "./ProcessSection";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  // 🔑 REQUIRED: Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        e.target
      )
      .then(() => {
        toast.success("Message sent ✅");
        setLoading(false);
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error(error.text || "Failed to send message");
        setLoading(false);
      });
  };

  return (
    <>
      <ProcessSection />

      <div className="min-h-screen bg-black text-white p-6 overflow-hidden">
        <Toaster position="top-right" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* HEADER */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Let’s Talk
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl">
            Have a project in mind or just want to say hi?  
            I’d love to hear from you.
          </p>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* FORM */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#141414] p-8 rounded-2xl border border-[#2a2a2a]"
            >
              {/* Hidden fields required by EmailJS template */}
              <input
                type="hidden"
                name="title"
                value="Portfolio Contact"
              />
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString()}
              />

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <input
                  name="name"
                  required
                  placeholder="Your Name"
                  className="bg-[#1b1b1b] p-4 rounded-xl outline-none border border-[#2a2a2a] focus:border-orange-400"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="bg-[#1b1b1b] p-4 rounded-xl outline-none border border-[#2a2a2a] focus:border-orange-400"
                />
              </div>

              <textarea
                name="message"
                required
                rows="5"
                placeholder="Your Message"
                className="bg-[#1b1b1b] p-4 rounded-xl outline-none border border-[#2a2a2a] focus:border-orange-400 w-full mb-6"
              />

              <button
                disabled={loading}
                className="w-full bg-orange-400 text-black font-medium py-4 rounded-xl hover:bg-orange-500 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {/* QUICK CONTACT */}
              <div className="flex gap-4 mt-6">
                <a
                  href="mailto:your@email.com"
                  className="flex-1 text-center py-3 rounded-xl border border-[#2a2a2a] hover:border-orange-400 transition"
                >
                  Email
                </a>
                <a
                  href="https://wa.me/923405403039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 rounded-xl border border-[#2a2a2a] hover:border-green-400 transition"
                >
                  WhatsApp
                </a>
              </div>
            </motion.form>

            {/* MAP + INFO */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-[#141414] rounded-2xl overflow-hidden border border-[#2a2a2a] h-[300px]">
                <iframe
                  title="map"
                  className="w-full h-full grayscale"
                  src="https://www.google.com/maps?q=Pakistan&output=embed"
                />
              </div>

              <div className="bg-[#141414] p-6 rounded-2xl border border-[#2a2a2a]">
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-400 text-sm">
                  Pakistan — Available Worldwide 🌍
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
