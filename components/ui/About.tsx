"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-black text-white overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-yellow-400/20 blur-[120px] rounded-full top-0 left-0" />
        <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full bottom-0 right-0" />
      </div>

      <div className="max-w-6xl mx-auto">

        {/* 🔥 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            About <span className="text-yellow-400">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Turning ideas into digital experiences that actually grow businesses 🚀
          </p>
        </motion.div>

        {/* 🔥 MAIN CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-semibold mb-6">
              Hey, I'm <span className="text-yellow-400">Vansh Shah</span> 👋
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              I’m a student and a passionate freelancer focused on building
              modern websites and helping brands grow online.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              Along with my studies, I’m building my own digital agency where I
              provide services like website development, social media handling,
              and content creation.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              My goal is simple — create designs that not only look amazing but
              also bring real business results.
            </p>

            {/* CTA */}
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Let’s Work Together
            </button>
          </motion.div>

          {/* RIGHT - SKILLS */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {[
              {
                title: "Web Development",
                desc: "Building fast, responsive and modern websites using latest tech.",
              },
              {
                title: "Social Media Management",
                desc: "Creating content, reels & strategies to grow brands online.",
              },
              {
                title: "Design & Branding",
                desc: "Clean, aesthetic UI/UX that attracts and converts users.",
              },
              {
                title: "Content Creation",
                desc: "Engaging posts, reels and visuals for audience growth.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-xl p-5 rounded-xl border border-white/10 hover:border-yellow-400/40 transition"
              >
                <h4 className="text-lg font-semibold text-yellow-400">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 🔥 STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center"
        >
          {[
            { number: "10+", label: "Clients Connected" },
            { number: "50+", label: "Projects Planned" },
            { number: "100%", label: "Learning Mindset" },
            { number: "24/7", label: "Focused Growth" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10"
            >
              <h3 className="text-3xl font-bold text-yellow-400">
                {item.number}
              </h3>
              <p className="text-gray-400 text-sm mt-2">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* 🔥 VISION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-28 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-4">
            My Vision 🚀
          </h3>
          <p className="text-gray-400 leading-relaxed">
            I aim to build a strong digital agency that helps businesses grow
            online using smart strategy, creative design, and modern technology.
          </p>
        </motion.div>

      </div>
    </section>
  );
}