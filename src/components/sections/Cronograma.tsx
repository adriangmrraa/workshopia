const schedule = [
  {
    time: "09:00",
    title: "Apertura y foco",
    description: "Alineamos objetivos, casos reales y la dinámica de trabajo del día.",
  },
  {
    time: "10:30",
    title: "Arquitectura y construcción",
    description: "Diseñamos la solución y empezamos a construir sobre el entorno preparado.",
  },
  {
    time: "13:00",
    title: "Pausa",
    description: "Almuerzo y espacio para ordenar lo construido.",
  },
  {
    time: "14:00",
    title: "Implementación y personalización",
    description: "Probamos la solución con contexto real y la adaptamos a cada caso.",
  },
  {
    time: "16:15",
    title: "Cierre y próximos pasos",
    description: "Revisamos aprendizajes, próximos pasos y cómo seguir desarrollando el sistema.",
  },
];

type ScheduleItem = {
  time: string;
  title: string;
  description: string;
};

export function Cronograma() {
  return (
    <section id="cronograma" className="relative py-12 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16 animate-fade-in-up">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E62E2E] mb-4">Sábado 7 de noviembre de 2026</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white mb-6">Cronograma</h2>
          <p className="text-xl text-white/60 font-light">Una jornada práctica para construir sobre casos reales.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="mb-5 flex items-center gap-3 text-sm text-white/45">
            <span className="h-px flex-1 bg-white/10" />
            <span>Agenda preliminar · horarios sujetos a confirmación</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {schedule.map((item: ScheduleItem, index) => (
              <div
                key={item.time}
                className="glass rounded-2xl p-5 animate-fade-in-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <p className="text-sm font-bold text-[#E62E2E] mb-4">{item.time}</p>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
