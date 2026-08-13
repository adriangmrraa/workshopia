const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScMAwRueNaKLBONOOakpJYPbVfTRJkejaWj348geaf3VWElxQ/viewform";

const plans = [
  {
    title: "ONLINE",
    price: "$30.000",
    description: "Participación en vivo con acceso a la práctica, la explicación y la base para seguir construyendo.",
    features: [
      "Workshop completo",
      "Base de trabajo y recursos",
      "Materiales descargables",
      "Acompañamiento en tiempo real",
      "Espacio para preguntas y resolución de dudas",
      "Material para seguir practicando después",
    ],
    cta: "Inscribirme online",
  },
  {
    title: "PRESENCIAL",
    location: "Formosa Capital",
    price: "$70.000",
    description: "Experiencia presencial con más interacción, seguimiento directo y una mirada más cercana a la ejecución real.",
    features: [
      "Workshop completo",
      "Base de trabajo y recursos",
      "Materiales descargables",
      "Acompañamiento en vivo",
      "Preguntas y feedback directo",
      "Material para seguir practicando después",
      "Acceso directo al instructor",
    ],
    cta: "Reservar lugar presencial",
    highlighted: true,
  },
  {
    title: "EMPRESA",
    price: "$150.000",
    description:
      "Diseño de una intervención práctica para equipos que quieren aplicar IA real sobre procesos, decisiones y automatizaciones concretas.",
    features: [
      "Workshop completo",
      "Base de trabajo y recursos",
      "Herramientas y materiales descargables",
      "Acompañamiento en vivo",
      "Espacio para preguntas y revisión del contexto",
      "Material para seguir practicando después",
      "Auditoría empresarial personalizada",
      "Trabajo sobre procesos reales del equipo",
      "16 horas de seguimiento",
    ],
    cta: "Solicitar modalidad empresa",
  },
];

export function Modalidades() {
  return (
    <section id="modalidades" className="relative py-12 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white mb-6">
            Modalidades
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light text-balance">
            Todos los niveles incluyen la práctica completa, la base de trabajo, materiales para seguir construyendo y acompañamiento para que la ejecución sea clara y aplicable.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.title}
              className={`group relative glass rounded-3xl p-8 sm:p-10 flex flex-col transition-all duration-500 hover:-translate-y-1 animate-fade-in-up ${
                plan.highlighted
                  ? "border-[#E62E2E]/40 shadow-[0_0_40px_rgba(230,46,46,0.08)]"
                  : "border-white/5 hover:border-white/10"
              }`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
                {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#E62E2E] text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-[0_0_20px_rgba(230,46,46,0.4)]">
                  Mas elegido
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-1 tracking-tight-custom">
                  {plan.title}
                </h3>
                {plan.location && (
                  <p className="text-sm text-white/40">Formosa Capital</p>
                )}
              </div>
              <p className="text-4xl font-black text-[#E62E2E] mb-3 tracking-tight-custom">
                {plan.price}
              </p>
              <p className="text-sm text-white/50 mb-8 leading-relaxed">
                {plan.description}
              </p>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#E62E2E] shrink-0 shadow-[0_0_6px_rgba(230,46,46,0.6)]" />
                    <span className="text-white/70 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-6 py-3.5 font-bold rounded-full transition-all duration-300 hover:scale-[1.02] w-full ${
                  plan.highlighted
                    ? "bg-[#E62E2E] text-white hover:shadow-[0_0_24px_rgba(230,46,46,0.35)]"
                    : "bg-white text-black hover:bg-white/90"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
