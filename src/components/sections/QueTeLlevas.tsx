const assets = [
  {
    title: "REPOSITORIO REAL",
    description:
      "Una base descargable en formato ZIP con código, estructura y configuración lista para usar.",
    icon: "📦",
  },
  {
    title: "CÓDIGO",
    description:
      "Código y estructura sobre la que podés trabajar. Mirá cómo está armado y modificalo a tu necesidad.",
    icon: "💻",
  },
  {
    title: "RECURSOS",
    description:
      "Plantillas, configuraciones y materiales utilizados durante el workshop.",
    icon: "🧰",
  },
  {
    title: "IMPLEMENTACIÓN",
    description:
      "Vas a ver cómo se construye y funciona en vivo. De prototipo a solución en una jornada.",
    icon: "🚀",
  },
];

export function QueTeLlevas() {
  return (
    <section id="que-te-llevas" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white">
            ¿Qué te llevás?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((item, index) => (
            <div
              key={item.title}
              className="group relative glass rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-6 transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight-custom">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
