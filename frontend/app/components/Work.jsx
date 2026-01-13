"use client";

import { motion } from "framer-motion";

export default function Work() {
  const projects = [
    {
      title: "Neon Fintech",
      category: "DeFi Platform",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop", // Changed to crypto/tech image
      tech: ["React", "Solidity", "Web3.js"]
    },
    {
      title: "Orbital Dashboard",
      category: "Analytics",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      tech: ["Next.js", "D3.js", "Tailwind"]
    },
    {
      title: "Zenith Health",
      category: "AI Diagnostic",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      tech: ["Python", "TensorFlow", "React"]
    }
  ];

  return (
    <section id="work" className="py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div>
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block"
                >
                    Mission Log
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold font-display text-white"
                >
                    Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Missions</span>
                </motion.h2>
            </div>

            <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="px-6 py-2 border border-white/10 rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
                View All Operations
            </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-900 border border-white/10"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-primary text-xs font-mono mb-2 uppercase tracking-wider">
                        {project.category}
                    </p>
                    <h3 className="text-2xl font-bold font-display text-white mb-4">
                        {project.title}
                    </h3>

                    {/* Tech Stack Tags - Reveal on Hover */}
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {project.tech.map((t, idx) => (
                            <span key={idx} className="text-[10px] px-2 py-1 bg-white/10 backdrop-blur-md rounded border border-white/10 text-gray-300">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
