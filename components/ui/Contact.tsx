"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-black text-white overflow-hidden"
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-yellow-400/20 blur-[120px] top-0 left-0 rounded-full" />
        <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-[120px] bottom-0 right-0 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-yellow-400 uppercase tracking-widest text-sm mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Let’s Build Something
            <br />
            <span className="text-yellow-400">Amazing Together 🚀</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-md">
            Have a project idea or want to grow your business online?  
            Let’s connect and turn your vision into reality.
          </p>

          {/* CONTACT OPTIONS */}
          <div className="mt-10 space-y-4">

            <a
              href="mailto:your@email.com"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition"
            >
              <FaEnvelope /> vanshkshah2924@email.com
            </a>

            <a
              href="https://wa.me/918320402086"
              target="_blank"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition"
            >
              <FaWhatsapp /> WhatsApp Chat
            </a>

            <a
              href="https://instagram.com/vnshhh.29"
              target="_blank"
              className="flex items-center gap-3 text-gray-300 hover:text-white transition"
            >
              <FaInstagram /> Instagram
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 space-y-6"
        >
          {/* NAME */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-yellow-400 outline-none transition"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-yellow-400 outline-none transition"
          />

          {/* MESSAGE */}
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-yellow-400 outline-none transition"
          />

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold"
          >
            Send Message 🚀
          </motion.button>

          {/* GLOW BORDER */}
          <div className="absolute inset-0 rounded-2xl border border-transparent hover:border-yellow-400/30 transition pointer-events-none" />
        </motion.form>
      </div>
    </section>
  );
}