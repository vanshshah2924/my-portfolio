"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaInstagram,
  FaVideo,
  FaChartLine,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";

const services = [
  // 🔥 WHAT I DO BEST (HIGHLIGHT THESE)
  {
    icon: <FaCode />,
    title: "Website Development",
    desc: "Modern, responsive websites & landing pages built to convert visitors into customers.",
    tag: "Top",
  },
  {
    icon: <FaRocket />,
    title: "Landing Pages",
    desc: "High-converting pages designed to generate leads and maximize sales.",
    tag: "Top",
  },
  {
    icon: <FaInstagram />,
    title: "Social Media Growth",
    desc: "Complete Instagram growth strategy, content & engagement to scale your brand.",
    tag: "Top",
  },

  // 📱 GROWTH SERVICES
  {
    icon: <FaVideo />,
    title: "Content Creation",
    desc: "Reels, posts & visuals designed to attract attention and go viral.",
  },
  {
    icon: <FaChartLine />,
    title: "SEO Optimization",
    desc: "Improve search rankings with on-page SEO, speed optimization & structure.",
  },
  {
    icon: <FaChartLine />,
    title: "Ad Campaign Setup",
    desc: "Instagram ads setup with targeting and strategy to generate leads faster.",
  },

  // 💼 BUSINESS SERVICES
  {
    icon: <FaPaintBrush />,
    title: "UI/UX & Branding",
    desc: "Clean, aesthetic design that builds trust and improves user experience.",
  },
  {
    icon: <FaCode />,
    title: "Custom Features",
    desc: "Forms, integrations, and dynamic features tailored to your business needs.",
  },
  {
    icon: <FaRocket />,
    title: "Lead Generation System",
    desc: "WhatsApp, forms & funnels setup to capture and convert visitors.",
  },

  // ⚙️ PREMIUM SERVICES
  {
    icon: <FaCode />,
    title: "Website Maintenance",
    desc: "Ongoing support, updates, bug fixes & performance monitoring.",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Optimization",
    desc: "Speed optimization, lazy loading & smooth performance improvements.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 px-6 bg-black text-white overflow-hidden"
    >
      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[400px] h-[400px] bg-yellow-400/20 blur-[120px] top-0 left-0 rounded-full" />
        <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-[120px] bottom-0 right-0 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* 🔥 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            My <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I don’t just build websites — I create complete digital systems that generate leads, grow your brand, and increase revenue 🚀
        </p>
        </motion.div>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >
              {/* GLOW EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-yellow-400/10 blur-2xl" />

              {/* ICON */}
              <div className="text-yellow-400 text-3xl mb-4">
                {service.icon}
              </div>

              {/* TITLE */}
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-xl font-semibold">
                    {service.title}
                </h3>

                {service.tag && (
                    <span className="text-[10px] px-2 py-1 rounded-full bg-yellow-400 text-black font-bold">
                    TOP
                     </span>
                )}
                </div>

              {/* DESC */}
              <p className="text-gray-400 text-sm">
                {service.desc}
              </p>

              {/* BORDER ANIMATION */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-yellow-400/30 transition" />
            </motion.div>
          ))}

        </div>

        {/* 🔥 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:scale-105 transition"
          >
            Start a Project 🚀
          </a>
        </motion.div>

      </div>
    </section>
  );
}