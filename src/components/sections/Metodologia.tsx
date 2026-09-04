const methodologySteps = [
  {
    number: "01",
    title: "Onboarding individual al inscribirte",
    description:
      "Desde que te registrás, coordinamos una conversación individual para entender tu contexto, tu rol y el proceso real que querés mejorar.",
  },
  {
    number: "02",
    title: "Validación del caso de uso",
    description:
      "Delimitamos un problema concreto y medible. Si no tenés un negocio propio, definimos un caso real de un cliente, familiar o conocido: no trabajamos con ejemplos ficticios.",
  },
  {
    number: "03",
    title: "Llamada grupal de setup técnico",
    description:
      "En una fecha a confirmar, revisamos herramientas, cuentas, workspace y requisitos para que el día del workshop podamos construir sin fricción.",
  },
  {
    number: "04",
    title: "Trabajo entre llamadas",
    description:
      "Completás el checklist, reunís la información del proceso y probás el entorno con una hoja de ruta clara. Durante la ventana final revisamos bloqueos y ajustes.",
  },
  {
    number: "05",
    title: "Workshop de ejecución",
    description:
      "El sábado 7 de noviembre llegás con el caso definido y el entorno listo para trabajar sobre una solución aplicable, iterarla y dejar próximos pasos concretos.",
  },
];

const calendar = [
  { date: "7 sep - 16 oct", label: "Onboarding individual", detail: "Agenda rolling al registrarte" },
  { date: "Sáb 17 oct", label: "Setup técnico grupal", detail: "Llamada sincrónica" },
  { date: "19 - 30 oct", label: "Roadmap y chequeo final", detail: "Trabajo guiado y revisión" },
  { date: "Sáb 7 nov", label: "Workshop práctico", detail: "09:00 a 17:00" },
];

export function Metodologia() {
  return (
    <section id="metodologia" className="relative py-12 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16 animate-fade-in-up">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E62E2E] mb-4">Cómo trabajamos</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white mb-6">
            Llegás al workshop con el problema real y el entorno listo
          </h2>
          <p className="text-xl text-white/60 font-light text-balance">
            La preparación empieza en el momento de la inscripción. El objetivo es usar el encuentro presencial u online para ejecutar, no para improvisar el proyecto.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-10 items-start">
          <div className="space-y-3">
            {methodologySteps.map((step, index) => (
              <div
                key={step.number}
                className="glass rounded-2xl p-5 sm:p-6 flex gap-4 sm:gap-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <span className="text-sm font-black text-[#E62E2E] pt-1 shrink-0">{step.number}</span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass rounded-3xl p-6 sm:p-8 lg:sticky lg:top-24 animate-fade-in-up">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Calendario propuesto</h3>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E62E2E] border border-[#E62E2E]/30 rounded-full px-3 py-1.5">A confirmar</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-6">
              Fechas sugeridas para dejar días suficientes entre la preparación y el workshop. La agenda individual se coordina de forma rolling.
            </p>
            <div className="space-y-0">
              {calendar.map((item) => (
                <div key={item.date} className="flex gap-4 border-l border-white/10 pl-5 pb-6 last:pb-0 relative">
                  <span className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-[#E62E2E] shadow-[0_0_8px_rgba(230,46,46,0.6)]" />
                  <div className="min-w-24 shrink-0">
                    <p className="text-sm font-bold text-white">{item.date}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="text-xs text-white/45 mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}