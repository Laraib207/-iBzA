export default function Services() {
  const services = [
    { title: "Website Design", icon: "🌐" },
    { title: "Digital Marketing", icon: "📈" },
    { title: "SEO Optimization", icon: "🔍" },
    { title: "Branding & UI/UX", icon: "🎨" },
  ];

  return (
    <section className="py-24 bg-[#0B0D10]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          What we do best
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-[#12141A] rounded-2xl p-6 border border-white/10 hover:border-[#00F5D4]/50 hover:-translate-y-2 transition"
            >
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-400">
                Premium solutions built with open-source freedom.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
