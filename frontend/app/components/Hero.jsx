// "use client";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/20 via-transparent to-[#00F5D4]/20" />

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 text-center px-6"
//       >
//         <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
//           We build <br />
//           <span className="text-[#5865F2]">next-gen</span> digital experiences
//         </h1>

//         <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
//           Website Design · Digital Marketing · SEO <br />
//           Powered by <span className="text-white">FOSS</span>, secured by design.
//         </p>

//         <div className="mt-10 flex justify-center gap-4">
//           <button className="bg-[#5865F2] px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
//             Get Started
//           </button>
//           <button className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/5 transition">
//             Talk to Experts
//           </button>
//         </div>
//       </motion.div>
//     </section>
//   );
// }



// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function Hero() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "center start"],
//   });

//   // Scroll-based animations
//   const yText = useTransform(scrollYProgress, [0, 1], [80, 0]);
//   const opacityText = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
//   const scaleGlow = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

//   return (
//     <section
//       ref={ref}
//       className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#0B0E14]"
//     >
//       {/* Ambient Gradient Background */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#5865F2]/20 blur-[120px] rounded-full" />
//         <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-[#00F5D4]/20 blur-[120px] rounded-full" />
//       </div>

//       {/* Grid Texture */}
//       <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

//       {/* Glow Core */}
//       <motion.div
//         style={{ scale: scaleGlow }}
//         className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#5865F2]/30 to-[#00F5D4]/20 blur-[160px]"
//       />

//       {/* Content */}
//       <motion.div
//         style={{ y: yText, opacity: opacityText }}
//         className="relative z-10 text-center px-6 max-w-4xl"
//       >
//         <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white">
//           We craft
//           <br />
//           <span className="bg-gradient-to-r from-[#5865F2] to-[#00F5D4] bg-clip-text text-transparent">
//             digital realities
//           </span>
//         </h1>

//         <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
//           Websites · Branding · SEO · Growth
//           <br />
//           Engineered with precision. Designed for impact.
//         </p>

//         <div className="mt-12 flex justify-center gap-5">
//           <button className="px-7 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-[#5865F2] to-[#4752C4] shadow-lg hover:scale-105 transition-all">
//             Start Project
//           </button>

//           <button className="px-7 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-all">
//             Speak to Experts
//           </button>
//         </div>
//       </motion.div>

//       {/* Bottom Fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0E14] to-transparent" />
//     </section>
//   );
// }







"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  // Scroll-based animations
  const yText = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const scaleGlow = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-[#0B0E14]"
    >
      {/* Ambient Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#5865F2]/20 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-[#00F5D4]/20 blur-[120px] rounded-full" />
      </div>

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow Core */}
      <motion.div
        style={{ scale: scaleGlow }}
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#5865F2]/30 to-[#00F5D4]/20 blur-[160px]"
      />

      {/* Content */}
      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white">
          We craft
          <br />
          <span className="bg-gradient-to-r from-[#5865F2] to-[#00F5D4] bg-clip-text text-transparent">
            digital realities
          </span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
          Websites · Branding · SEO · Growth
          <br />
          Engineered with precision. Designed for impact.
        </p>

        <div className="mt-12 flex justify-center gap-5">
          <button className="px-7 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-[#5865F2] to-[#4752C4] shadow-lg hover:scale-105 transition-all">
            Start Project
          </button>

          <button className="px-7 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-all">
            Speak to Experts
          </button>
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0E14] to-transparent" />
    </section>
  );
}
