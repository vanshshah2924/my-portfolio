"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl">
        <div
          className="flex items-center justify-between w-full px-6 py-3 rounded-full
          bg-white/5 backdrop-blur-3xl border border-white/20
          shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* Logo / Name */}
          <div className="flex items-center gap-2 font-medium text-white">
            <div className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center text-sm font-bold">
              V
            </div>
            Vansh Shah
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link key={link.name} href={link.href}>
                  <div className="relative px-4 py-2 rounded-full text-sm cursor-pointer">
                    {/* Active Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-md border border-white/30"
                      />
                    )}

                    <span
                      className={`relative z-10 transition ${
                        isActive ? "text-white" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <Link href="/contact">
            <div className="px-5 py-2 rounded-full border border-white/30 text-sm text-white hover:bg-white/10 transition">
              Hire Me
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
        <div
          className="flex items-center justify-between px-6 py-3 rounded-full
          bg-white/5 backdrop-blur-3xl border border-white/20 shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden"
        >
          {/* Logo */}
          <div className="flex items-center gap-2 font-medium text-white">
            <div className="w-7 h-7 rounded-full bg-white/30 flex items-center justify-center text-sm font-bold">
              V
            </div>
            Vansh
          </div>

          {/* Hamburger */}
          <div
            className="space-y-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
            <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
            <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-3 bg-[#121212] rounded-xl shadow-lg flex flex-col items-center gap-4 py-4"
          >
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                <div
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg px-6 py-2 rounded-lg hover:bg-[#FF4D1C]/20 transition"
                >
                  {link.name}
                </div>
              </Link>
            ))}

            <Link href="/contact">
              <div
                onClick={() => setIsOpen(false)}
                className="mt-2 px-6 py-2 rounded-full border border-[#FF4D1C] text-[#FF4D1C] hover:bg-[#FF4D1C]/20 transition"
              >
                Hire Me
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </>
  );
}