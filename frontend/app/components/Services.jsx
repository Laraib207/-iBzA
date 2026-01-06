// export default function Services() {
//   const services = [
//     { title: "Website Design", icon: "🌐" },
//     { title: "Digital Marketing", icon: "📈" },
//     { title: "SEO Optimization", icon: "🔍" },
//     { title: "Branding & UI/UX", icon: "🎨" },
//   ];

//   return (
//     <section className="py-24 bg-[#0B0D10]">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-bold mb-12 text-center">
//           What we do best
//         </h2>

//         <div className="grid md:grid-cols-4 gap-6">
//           {services.map((s, i) => (
//             <div
//               key={i}
//               className="bg-[#12141A] rounded-2xl p-6 border border-white/10 hover:border-[#00F5D4]/50 hover:-translate-y-2 transition"
//             >
//               <div className="text-3xl">{s.icon}</div>
//               <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
//               <p className="mt-2 text-sm text-gray-400">
//                 Premium solutions built with open-source freedom.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  // Scroll-based animations
  const yText = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const scaleGlow = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const services = [
    {
      title: "Website Design",
      icon: "🌐",
      description: "Stunning, responsive websites that captivate and convert your audience.",
      gradient: "from-cyan-500/20 to-blue-500/20",
      iconGradient: "from-cyan-400 to-blue-500",
      borderGlow: "group-hover:shadow-cyan-500/50",
    },
    {
      title: "Digital Marketing",
      icon: "📈",
      description: "Data-driven strategies that amplify your brand and accelerate growth.",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconGradient: "from-purple-400 to-pink-500",
      borderGlow: "group-hover:shadow-purple-500/50",
    },
    {
      title: "SEO Optimization",
      icon: "🔍",
      description: "Dominate search rankings with cutting-edge optimization techniques.",
      gradient: "from-green-500/20 to-emerald-500/20",
      iconGradient: "from-green-400 to-emerald-500",
      borderGlow: "group-hover:shadow-green-500/50",
    },
    {
      title: "Branding & UI/UX",
      icon: "🎨",
      description: "Memorable identities and intuitive experiences that users love.",
      gradient: "from-orange-500/20 to-red-500/20",
      iconGradient: "from-orange-400 to-red-500",
      borderGlow: "group-hover:shadow-orange-500/50",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden flex items-center justify-center py-32 bg-gradient-to-b from-[#0B0E14] via-[#0F1218] to-[#0B0E14]"
    >
      {/* Ambient Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ scale: scaleGlow }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#5865F2]/15 to-[#00F5D4]/10 blur-[140px] rounded-full"
        />
        <motion.div
          style={{ scale: scaleGlow }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#00F5D4]/15 to-[#5865F2]/10 blur-[140px] rounded-full"
        />
      </div>

      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Animated Glow Core */}
      <motion.div
        style={{ scale: scaleGlow }}
        className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#5865F2]/20 via-purple-500/10 to-[#00F5D4]/15 blur-[180px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Header Section */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#5865F2]/20 to-[#00F5D4]/20 border border-[#5865F2]/30 text-sm font-medium text-[#00F5D4] mb-6">
              ✨ Our Expertise
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white mb-6"
          >
            What we do
            <br />
            <span className="bg-gradient-to-r from-[#5865F2] via-purple-400 to-[#00F5D4] bg-clip-text text-transparent">
              best for you
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Premium solutions built with open-source freedom.
            <br />
            Engineered with precision. Designed for impact.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.iconGradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}
              />

              {/* Card Content */}
              <div className="relative h-full bg-[#12141A]/90 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Icon Container */}
                <div className="relative z-10 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block"
                  >
                    <div
                      className={`text-5xl p-4 rounded-2xl bg-gradient-to-br ${service.gradient} border border-white/10 backdrop-blur-sm shadow-lg ${service.borderGlow} transition-shadow duration-300`}
                    >
                      {service.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                  <h3
                    className={`text-2xl font-bold mb-3 bg-gradient-to-r ${service.iconGradient} bg-clip-text text-transparent group-hover:text-white transition-all duration-300`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-6 right-6 text-white/50 group-hover:text-white transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>

                {/* Decorative Corner Lines */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/5 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white/5 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Ready to transform your digital presence?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-[#5865F2] to-[#00F5D4] shadow-lg shadow-[#5865F2]/50 hover:shadow-xl hover:shadow-[#00F5D4]/50 transition-all duration-300"
            >
              Start Your Project
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Work
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0E14] to-transparent pointer-events-none" />
    </section>
  );
}