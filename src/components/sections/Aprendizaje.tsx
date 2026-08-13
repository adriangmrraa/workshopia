const steps = [
  {
    title: "IDEA",
    description:
      "Definimos el problema y el objetivo de la solución.",
  },
  {
    title: "ARQUITECTURA",
    description:
      "Diseñamos la estructura, componentes, modelos y flujo de datos.",
  },
  {
    title: "CÓDIGO",
    description:
      "Construimos sobre la base preparada, explicando cada parte.",
  },
  {
    title: "IA",
    description:
      "Integramos el modelo, prompts y lógica de inteligencia artificial.",
  },
  {
    title: "INTEGRACIONES",
    description:
      "Conectamos APIs, servicios y herramientas del ecosistema.",
  },
  {
    title: "IMPLEMENTACIÓN",
    description:
      "De prototipo a solución: deployment, costos, seguridad y escalabilidad.",
  },
];

export function Aprendizaje() {
  return (
    <section id="aprendizaje" className="py-20 lg:py-32 bg-[#2A2D31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            ¿Qué vas a aprender?
          </h2>
          <p className="mt-4 text-lg text-[#8A8D91] max-w-2xl mx-auto">
            Recorré el proceso completo de construcción de una solución con IA.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-[#1B1D20] border border-[#3A3D41] rounded-2xl p-6 hover:border-[#E62E2E] transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E62E2E] text-white font-bold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold">{step.title}</h3>
              </div>
              <p className="text-[#8A8D91] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
