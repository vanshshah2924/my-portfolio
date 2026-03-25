"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern animated portfolio with glass UI and smooth scroll experience.",
    github: "https://github.com/vanshshah2924/my-portfolio",
    live: "#",
    image: "/project1.png",
  },
  {
    title: "Agency Landing Page",
    desc: "High-converting landing page designed for client generation.",
    github: "https://github.com/vanshshah2924",
    live: "#",
    image: "/project2.png",
  },
  {
    title: "Business Website",
    desc: "Professional website for small business with modern UI.",
    github: "https://github.com/vanshshah2924",
    live: "#",
    image: "/project3.png",
  },
  {
    title: "Social Media Growth System",
    desc: "Strategy + content system to grow Instagram accounts.",
    github: "https://github.com/vanshshah2924",
    live: "#",
    image: "/project4.png",
  },
  {
    title: "E-commerce UI Concept",
    desc: "Clean and minimal UI for online store experience.",
    github: "https://github.com/vanshshah2924",
    live: "#",
    image: "/project5.png",
  },
  {
    title: "Dashboard UI",
    desc: "Modern analytics dashboard with charts & clean layout.",
    github: "https://github.com/vanshshah2924",
    live: "#",
    image: "/project6.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            Featured <span className="text-yellow-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Real work that shows my skills & creativity 🚀
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.desc}
                </p>

                {/* BUTTONS */}
                <div className="flex gap-4">

                  {/* GITHUB */}
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-yellow-400 hover:underline"
                  >
                    <FaGithub />
                    View Code
                  </a>

                  {/* LIVE */}
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-white/70 hover:text-white"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>
              </div>

              {/* GLOW EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-yellow-400/10 blur-2xl" />
            </motion.div>
          ))}

        </div>

        {/* VIEW ALL */}
        <div className="text-center mt-20">
          <a
            href="https://github.com/vanshshah2924"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            <FaGithub />
            Explore All Projects
          </a>
        </div>

      </div>
    </section>
  );
}