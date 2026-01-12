"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#050505] font-['Space_Grotesk'] text-white overflow-hidden">
      
      {/* Background Topography & Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuACYMpnSH-494AQ0r_yIci5oGJaedJEZ_HXZ4z0G12Zs2m1Exe5IBAhQnWxgVdKsO-d9xShtXgOlcyPRZSF2hYjOEBtS4wcFpL2GKFsBsb4oGRw7-8jFxQNFffKbE7nU7CNJ1ccEf_QHEs2np6sP0Q1gUecNXNqrIGz93ORHwTii6b356KnFZaCWA0FbFT_GpRO5QATvX_dKZB-HHWQXgxOu2PpkRx0yupnFOiRO1QhfpfVKONhNJ0X3VIQCoZ2SJ94hRyjcyRfCzbM')` 
          }}
        />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/80 to-[#050505]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center space-y-10">
        
        {/* System Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#5862f3]/10 border border-[#5862f3]/30 text-[#5862f3] text-[10px] font-bold tracking-[0.3em] uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5862f3] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5862f3]"></span>
          </span>
          System Operational: V2.0.4
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-[7rem] font-black leading-[0.9] tracking-tight text-white drop-shadow-[0_0_30px_rgba(88,98,243,0.3)]"
        >
          Architecting the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5862f3] via-[#10b981] to-[#5862f3] animate-gradient-x">
            Digital Future.
          </span>
        </motion.h1>

        {/* Sub-text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <div className="flex items-center justify-center gap-3 text-xl md:text-2xl font-light text-slate-300">
            <span>Engineering</span>
            <span className="px-3 py-1 bg-white/5 rounded border border-white/10 text-[#5862f3] font-medium text-sm md:text-base">Website Design</span>
          </div>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            We merge cinematic creativity with high-performance engineering to scale your brand through technical SEO and modern tech stacks.
          </p>
        </motion.div>

        {/* Cyber Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
        >
          <button className="group relative min-w-[220px] h-14 bg-[#5862f3] text-white font-bold tracking-widest uppercase rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(88,98,243,0.4)]">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2">
              Initialize Project
              <span className="material-symbols-outlined text-sm">terminal</span>
            </span>
          </button>

          <button className="min-w-[220px] h-14 border border-[#5862f3]/30 bg-[#5862f3]/5 text-white font-bold tracking-widest uppercase rounded-lg flex items-center justify-center gap-2 transition-all hover:border-[#5862f3] hover:bg-[#5862f3]/10 active:scale-95">
            View Portfolio
            <span className="material-symbols-outlined text-sm">view_in_ar</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Technical Specs */}
      <div className="absolute bottom-10 left-0 right-0 z-10 px-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
        
        {/* Network Stats */}
        <div className="flex gap-10 order-2 md:order-1">
          <div className="space-y-1">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Network Speed</p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-white tracking-tighter">450</span>
              <span className="text-[10px] text-[#5862f3] font-bold pb-1">GB/S</span>
            </div>
          </div>
          <div className="space-y-1 border-l border-white/10 pl-10">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Global Nodes</p>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-white tracking-tighter">124</span>
              <span className="text-[10px] text-[#10b981] font-bold pb-1 uppercase">Active</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-3 order-1 md:order-2">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">Scroll</p>
          <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
            <motion.div 
              animate={{ top: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-1/2 bg-gradient-to-b from-transparent via-[#5862f3] to-transparent" 
            />
          </div>
        </div>

        {/* Progress Bars */}
        <div className="hidden lg:flex flex-col gap-3 w-48 order-3">
          <div className="space-y-1">
            <div className="flex justify-between text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Processing</span>
              <span className="text-[#5862f3]">88%</span>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "88%" }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-full bg-[#5862f3]" 
              />
            </div>
          </div>
          <p className="text-[8px] text-slate-600 font-medium italic">All subsystems performing within nominal range.</p>
        </div>
      </div>
    </section>
  );
}

