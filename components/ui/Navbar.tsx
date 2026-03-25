"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[75%] max-w-6xl">
      <div
        className="
        relative flex items-center justify-between px-6 py-3 rounded-full
        
        bg-white/5 backdrop-blur-3xl
        border border-white/20
        
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        overflow-hidden
      "
      >
        {/* LOGO / NAME */}
        <div className="flex items-center gap-2 font-medium text-white">
          <div className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center text-sm font-bold">
            V
          </div>
          Vansh Shah
        </div>

        {/* NAV LINKS */}
        <div className="relative flex items-center gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.name} href={link.href}>
                <div className="relative px-5 py-2 rounded-full text-sm cursor-pointer">
                  
                  {/* ACTIVE PILL */}
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="absolute inset-0 rounded-full 
                      bg-white/20 backdrop-blur-md border border-white/30"
                    />
                  )}

                  {/* TEXT */}
                  <span
                    className={`relative z-10 transition ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <Link href="/contact">
          <div className="px-5 py-2 rounded-full border border-white/30 text-sm text-white hover:bg-white/10 transition">
            Hire Me
          </div>
        </Link>
      </div>
    </div>
  );
}