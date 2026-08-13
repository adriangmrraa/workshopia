const schedule = [
  { time: "10:00", title: "Apertura", description: "Qué vamos a construir y cómo funciona el repositorio." },
  { time: "10:30", title: "Arquitectura", description: "Cómo pensar una solución con IA: problema, componentes, modelos, datos y lógica." },
  { time: "11:30", title: "Construcción", description: "Empezá a trabajar sobre la solución real: código, configuración e integraciones." },
  { time: "13:00", title: "Break", description: "Almuerzo y descanso." },
  { time: "14:00", title: "Implementación", description: "Hacé que esto funcione en vivo." },
  { time: "15:30", title: "Personalización", description: "Tomá la base y adaptala. Variables, conexiones y próximos pasos." },
  { time: "16:15", title: "De prototipo a solución", description: "Errores comunes, seguridad, costos y escalabilidad." },
  { time: "17:00", title: "Cierre", description: "Entrega del repositorio, recursos, preguntas y próximos pasos." },
];

export function Cronograma() {
  return (
    <section id="cronograma" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white mb-6">
            Cronograma
          </h2>
          <p className="text-xl text-white/60 font-light">
            7 horas de jornada total con descansos incluidos.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {schedule.map((item, index) => (
            <div
              key={item.time}
              className="group flex gap-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center group-hover:border-[#E62E2E]/50 transition-colors duration-500">
                  <span className="text-sm font-bold text-[#E62E2E]">{item.time}</span>
                </div>
                {index < schedule.length - 1 && (
                  <div className="w-px h-full bg-gradient-to-b from-white/10 to-transparent my-3" />
                )}
              </div>
              <div className="pb-12">
                <h3 className="text-xl font-bold text-white mb-2 tracking-tight-custom">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
