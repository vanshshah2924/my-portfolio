"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 md:pt-32 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-yellow-400/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            I Build{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              High-Converting
            </span>
            <br />
            Websites & Brands 🚀
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400 max-w-lg text-lg"
          >
            Helping businesses grow with modern websites, social media,
            and powerful design that actually converts visitors into clients.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 mt-8"
          >
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Start Project
            </button>

            <button className="border border-white/20 px-6 py-3 rounded-xl backdrop-blur-md bg-white/5 hover:bg-white/10 transition">
              View Work →
            </button>
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-10 mt-12"
          >
            <div>
              <h3 className="text-3xl font-bold text-yellow-400">50+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">95%</h3>
              <p className="text-gray-400 text-sm">Satisfaction</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* IMAGE WITH GLOW */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full" />

            <img
              src="/profile1.png"
              alt="Vansh"
              className="relative w-[300px] md:w-[420px] rounded-2xl border border-white/10"
            />
          </motion.div>

          {/* FLOATING GLASS CARDS */}
          <div className="absolute right-0 top-10 space-y-6 hidden md:block">

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 shadow-lg"
            >
              <h4 className="text-yellow-400 font-semibold">Web Dev</h4>
              <p className="text-sm text-gray-300">
                Fast & responsive sites
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 shadow-lg"
            >
              <h4 className="text-yellow-400 font-semibold">Social Media</h4>
              <p className="text-sm text-gray-300">
                Growth strategies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white/10 backdrop-blur-xl p-4 rounded-xl border border-white/20 shadow-lg"
            >
              <h4 className="text-yellow-400 font-semibold">Branding</h4>
              <p className="text-sm text-gray-300">
                Premium design identity
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}