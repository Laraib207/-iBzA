"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-[#0B0D10]/90 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight">
          @iBzA <span className="text-[#00F5D4]">•</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a className="hover:text-white" href="#">Services</a>
          <a className="hover:text-white" href="#">Work</a>
          <a className="hover:text-white" href="#">About</a>
          <a className="hover:text-white" href="#">Contact</a>
        </div>

        <button className="bg-[#5865F2] px-5 py-2 rounded-xl text-sm font-medium hover:scale-105 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}
