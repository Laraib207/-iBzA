"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#050505] text-white overflow-hidden font-['Space_Grotesk',sans-serif]">

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Background Gradients */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5862f3]/20 rounded-full blur-3xl mix-blend-screen" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl mix-blend-screen" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 space-y-6"
          >
            <span className="text-[#5862f3] font-bold tracking-[0.2em] uppercase text-sm">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              Innovating with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5862f3] via-[#10b981] to-[#5862f3]">
                Purpose & Passion.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-light leading-relaxed">
              At iBzA, we believe in the power of technology to transform lives. We are dedicated to building a brighter, more connected future through creative engineering and positive impact.
            </p>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-6 bg-[#0B0D10]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed">
                To empower businesses and individuals with cutting-edge digital solutions. We strive to create software that is not only functional but also delightful to use. Our mission is to bridge the gap between complex technology and human-centric design.
              </p>
              <ul className="space-y-3">
                {[
                  "Empowering Growth",
                  "Sustainable Innovation",
                  "Community Focused"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-300">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#5862f3]/20 text-[#5862f3]">
                      <span className="material-symbols-outlined text-sm">check</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1d24] to-[#0B0D10] border border-white/5 p-1"
            >
              <div className="absolute inset-0 bg-grid-white/[0.05]" />
              <div className="relative h-full w-full rounded-xl bg-[#050505] flex items-center justify-center">
                 <span className="material-symbols-outlined text-6xl text-[#5862f3]/50">rocket_launch</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 relative">
          <div className="max-w-7xl mx-auto space-y-12">
             <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  The principles that guide every decision we make and every product we build.
                </p>
             </div>

             <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "lightbulb",
                    title: "Innovation",
                    desc: "We push boundaries and explore new frontiers to solve problems in unique ways."
                  },
                  {
                    icon: "favorite",
                    title: "Positivity",
                    desc: "We foster a culture of optimism and support, believing that great work comes from happy teams."
                  },
                  {
                    icon: "verified",
                    title: "Excellence",
                    desc: "We are committed to the highest quality in everything we do, from code to customer service."
                  }
                ].map((value, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="p-8 rounded-2xl bg-[#0f0f1a] border border-white/5 hover:border-[#5862f3]/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#5862f3]/10 text-[#5862f3] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">{value.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {value.desc}
                    </p>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 border-t border-white/5">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">Ready to build the future?</h2>
            <p className="text-slate-400 text-lg">
              Join us on our journey to create meaningful digital experiences.
            </p>
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#5862f3] text-white font-bold tracking-widest uppercase rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(88,98,243,0.4)]">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10">Get in Touch</span>
              <span className="material-symbols-outlined relative z-10 text-xl group-hover:rotate-45 transition-transform">arrow_outward</span>
            </button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
