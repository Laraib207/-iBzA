"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/20 via-transparent to-[#00F5D4]/20" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          We build <br />
          <span className="text-[#5865F2]">next-gen</span> digital experiences
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Website Design · Digital Marketing · SEO <br />
          Powered by <span className="text-white">FOSS</span>, secured by design.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-[#5865F2] px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
            Get Started
          </button>
          <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/5 transition">
            Talk to Experts
          </button>
        </div>
      </motion.div>
    </section>
  );
}
