"use client";

import { motion } from "framer-motion";
import { SiFigma, SiFramer } from "react-icons/si";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaInstagram, FaGitAlt 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiCanva, SiGithub 
} from "react-icons/si";

const skills = [
  // 💻 FRONTEND
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaReact />, name: "React.js" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },

  // 🔧 TOOLS (IMPORTANT ADD)
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <SiGithub />, name: "GitHub" },

  // 🎨 DESIGN
  { icon: <SiCanva />, name: "Canva Design" },
  { icon: <FaInstagram />, name: "Content Creation" },
  { icon: <FaInstagram />, name: "Reels Editing" },

  // 📈 MARKETING
  { icon: <FaInstagram />, name: "Instagram Growth" },
  { icon: <FaInstagram />, name: "Social Media Strategy" },
  { icon: <FaInstagram />, name: "Audience Engagement" },

  // 🧠 BUSINESS / FREELANCING
  { icon: <FaReact />, name: "Landing Pages" },
  { icon: <FaReact />, name: "Website Optimization" },
  { icon: <FaReact />, name: "Client Handling" },
  { icon: <FaReact />, name: "Freelancing" },

  // ⚙️ EXTRA
  { icon: <FaJs />, name: "Responsive Design" },
  { icon: <FaJs />, name: "UI/UX Basics" },
  { icon: <FaJs />, name: "Performance Optimization" },
];

export default function SkillsStrip() {
  return (
    <div className="relative overflow-hidden py-8 bg-white/5 border-y border-white/10 flex items-center">

      {/* GRADIENT FADE LEFT */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />

      {/* GRADIENT FADE RIGHT */}
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

      {/* SCROLLING STRIP */}
      <motion.div
        className="flex items-center gap-3 text-lg text-gray-300 min-w-max hover:text-yellow-400 transition"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-lg text-gray-300 min-w-max"
          >
            <span className="text-yellow-400 text-2xl">
              {skill.icon}
            </span>
            {skill.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}