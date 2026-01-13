"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Star = ({ className, style }) => (
  <motion.div
    className={`absolute rounded-full bg-white ${className}`}
    style={style}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0] }}
    transition={{
      duration: Math.random() * 3 + 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: Math.random() * 5,
    }}
  />
);

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [stars, setStars] = useState([]);
  const [brightStars, setBrightStars] = useState([]);

  useEffect(() => {
    // Generate stars only on the client side to avoid hydration mismatch
    const newStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setStars(newStars);

    const newBrightStars = Array.from({ length: 20 }).map((_, i) => ({
      id: `bright-${i}`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setBrightStars(newBrightStars);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Dynamic Starfield Background */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <Star
            key={star.id}
            className="w-[2px] h-[2px]"
            style={{
              top: star.top,
              left: star.left,
            }}
          />
        ))}
        {brightStars.map((star) => (
          <Star
            key={star.id}
            className="w-[3px] h-[3px] shadow-[0_0_10px_white]"
            style={{
              top: star.top,
              left: star.left,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] z-10" />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-primary backdrop-blur-sm">
            System Online • v2.0
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 mb-8 tracking-tight"
        >
          EXPLORING THE <br />
          <span className="text-stroke-white text-white/10">DIGITAL UNIVERSE</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          We engineer high-performance digital experiences for the modern web.
          Specializing in <span className="text-white font-bold">FOSS</span>, <span className="text-white font-bold">Web3</span>, and Enterprise Solutions.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105">
            Start Mission
          </button>
          <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
            View Protocol
          </button>
        </motion.div>
      </motion.div>

      {/* Decorative Planet (CSS Only) */}
      <motion.div
        className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-gradient-to-t from-primary/20 via-transparent to-transparent blur-3xl opacity-30 pointer-events-none z-0"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
