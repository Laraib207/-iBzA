"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "UI/UX Architecture",
      icon: "design_services",
      desc: "Designing immersive digital habitats that captivate and convert.",
      color: "text-purple-400",
    },
    {
      title: "Full-Stack Fusion",
      icon: "code",
      desc: "Building robust, scalable applications with next-gen frameworks.",
      color: "text-blue-400",
    },
    {
      title: "Web3 Integration",
      icon: "token",
      desc: "Connecting your business to the decentralized future of the web.",
      color: "text-cyan-400",
    },
    {
      title: "Brand Velocity",
      icon: "rocket_launch",
      desc: "Accelerating market presence with strategic identity design.",
      color: "text-orange-400",
    },
  ];

  return (
    <section id="services" className="py-32 relative bg-[#050505] overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold font-display text-white mb-6"
            >
                Core <span className="text-primary">Capabilities</span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 max-w-2xl mx-auto"
            >
                Deploying advanced technological solutions across the digital spectrum.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className={`w-14 h-14 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
                <span className="material-symbols-outlined text-3xl">
                  {item.icon}
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
