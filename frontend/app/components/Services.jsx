"use client";

export default function Services() {
  return (
    <section className="py-24 bg-[#0B0D10]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="px-4 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Our Expertise
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transforming Ideas into Digital Reality
          </h1>

          <p className="text-[#9d9fb9] text-lg max-w-2xl mx-auto">
            We combine high-end design with cutting-edge technology to build
            digital solutions that define industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "UI/UX Design",
              icon: "design_services",
              text: "Crafting intuitive and beautiful user interfaces with precision and user-centric flows.",
            },
            {
              title: "Development",
              icon: "code",
              text: "High-performance, scalable web applications built with the latest modern frameworks.",
            },
            {
              title: "Strategy",
              icon: "insights",
              text: "Data-driven growth and marketing roadmaps designed to scale your business globally.",
            },
            {
              title: "Branding",
              icon: "branding_watermark",
              text: "Distinctive visual stories and brand guidelines for modern, high-impact companies.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#1c1c27] rounded-xl p-6 border border-white/10 hover:border-primary/50 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-4">
                <span className="material-symbols-outlined text-primary">
                  {item.icon}
                </span>
              </div>

              <h2 className="text-white text-xl font-bold mb-2">
                {item.title}
              </h2>

              <p className="text-[#9d9fb9] text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
          <button className="group relative flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-gradient-to-r from-primary to-indigo-600 text-white text-base font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(89,102,243,0.4)]">
            <span className="relative z-10">Start Your Project</span>
          </button>

          <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-transparent border-2 border-[#3b3d54] hover:border-primary/50 text-white text-base font-bold transition-all hover:bg-white/5 active:scale-95">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
}

