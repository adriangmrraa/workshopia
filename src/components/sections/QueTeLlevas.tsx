import Image from "next/image";

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
    <section id="que-te-llevas" className="py-20 lg:py-32 bg-[#2A2D31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            ¿Qué te llevás?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((item) => (
            <div
              key={item.title}
              className="bg-[#1B1D20] border border-[#3A3D41] rounded-2xl p-6 hover:border-[#E62E2E] transition-colors"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-[#E62E2E]">
                {item.title}
              </h3>
              <p className="text-[#8A8D91] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
