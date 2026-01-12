"use client";

export default function Work() {
  const projects = [
    {
      title: "Neon Fintech",
      category: "Fintech App",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Orbital Dashboard",
      category: "Analytics Platform",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Zenith Health",
      category: "Medical AI",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="work" className="py-24 bg-[#0B0D10]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-500 text-xs font-bold uppercase tracking-widest mb-4 inline-block">
            Selected Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-[#9d9fb9] text-lg max-w-2xl mx-auto">
            A showcase of our most impactful digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden bg-[#1c1c27] border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-video w-full overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs font-bold tracking-widest uppercase text-white/80 mb-1">{project.category}</p>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
            <button className="px-8 py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
                View All Projects
            </button>
        </div>
      </div>
    </section>
  );
}
