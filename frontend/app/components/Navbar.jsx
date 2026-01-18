"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
              href={`/#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest"
            >
              {item}
            </Link>
          ))}

          <Link
            href="/#contact"
            className="px-5 py-2 text-sm font-bold bg-white text-black rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-0 left-0 w-full bg-[#050505] z-40 flex flex-col items-center justify-center gap-8 md:hidden overflow-hidden"
          >
             {["Services", "Work", "About"].map((item) => (
              <Link
                key={item}
                href={`/#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold font-display text-white hover:text-primary transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 text-lg font-bold bg-white text-black rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Let's Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
