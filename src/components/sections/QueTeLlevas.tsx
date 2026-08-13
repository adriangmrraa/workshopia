const assets = [
  {
    title: "BASE REAL",
    description:
      "Una estructura descargable con código, configuración y lógica lista para estudiar, reutilizar y adaptar.",
  },
  {
    title: "CÓDIGO",
    description:
      "La arquitectura y la lógica detrás de la solución, para que puedas entender cómo se arma y modificarla con criterio.",
  },
  {
    title: "RECURSOS",
    description:
      "Plantillas, configuraciones y materiales prácticos que se usan en la ejecución real del sistema.",
  },
  {
    title: "IMPLEMENTACIÓN",
    description:
      "Vas a ver cómo se toma la idea, se conecta con datos y se lleva a una solución operativa en vivo.",
  },
];

export function QueTeLlevas() {
  return (
    <section id="que-te-llevas" className="relative py-12 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16 animate-fade-in-up">
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
