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
    <section id="aprendizaje" className="relative py-12 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white mb-6">
            ¿Qué vas a aprender?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-light">
            Recorré el proceso completo de construcción de una solución con IA.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative glass rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E62E2E] text-white font-bold text-sm shadow-[0_0_20px_rgba(230,46,46,0.3)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight-custom">
                  {step.title}
                </h3>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
