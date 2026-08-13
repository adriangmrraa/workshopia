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
    <section id="cronograma" className="py-20 lg:py-32 bg-[#1B1D20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Cronograma
          </h2>
          <p className="mt-4 text-lg text-[#8A8D91]">
            7 horas de jornada total con descansos incluidos.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-0">
          {schedule.map((item, index) => (
            <div key={item.time} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#2A2D31] border border-[#3A3D41] flex items-center justify-center">
                  <span className="text-sm font-bold text-[#E62E2E]">{item.time}</span>
                </div>
                {index < schedule.length - 1 && (
                  <div className="w-px h-full bg-[#3A3D41] my-2" />
                )}
              </div>
              <div className="pb-10">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-[#8A8D91] text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
