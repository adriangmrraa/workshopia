const schedule = [
  { time: "10:00", title: "Apertura", description: "Definimos qué vamos a construir y cómo se organiza la base de trabajo." },
  { time: "10:30", title: "Arquitectura", description: "Cómo pensar una solución con IA desde el problema, los datos, los componentes y la lógica del negocio." },
  { time: "11:30", title: "Construcción", description: "Empezamos a montar la solución real: código, configuración, flujo y conexiones." },
  { time: "13:00", title: "Break", description: "Pausa para recargar y seguir con criterio." },
  { time: "14:00", title: "Implementación", description: "Hacemos que la solución funcione en vivo y se pruebe con contexto real." },
  { time: "15:30", title: "Personalización", description: "Adaptamos la base a tu contexto, variables, flujos y próximos pasos." },
  { time: "16:15", title: "De prototipo a sistema", description: "Revisamos errores comunes, seguridad, costos y escalabilidad." },
  { time: "17:00", title: "Cierre", description: "Entrega de la base, recursos, preguntas y próximos pasos para seguir ejecutando." },
];

export function Cronograma() {
  return (
    <section id="cronograma" className="relative py-12 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white mb-6">
            Cronograma
          </h2>
          <p className="text-xl text-white/60 font-light">
            7 horas para pasar de idea, a arquitectura, a ejecución real con criterio.
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
              <div className="pb-8">
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
