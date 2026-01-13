"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold font-display text-white tracking-tighter group-hover:text-primary transition-colors">
            @iBzA
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-gray-500 group-hover:text-white transition-colors">
            "thelaraib"
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Work", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {item}
            </Link>
          ))}

          <Link
            href="#contact"
            className="px-5 py-2 text-sm font-bold bg-white text-black rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Button (Simple implementation) */}
        <button className="md:hidden p-2 text-white">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </motion.nav>
  );
}
