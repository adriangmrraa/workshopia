const pillars = [
  {
    title: "Agentes de ventas",
    description:
      "Diseño agentes que venden: Karen en Muzapp con 27+ herramientas, detección de urgencia, precio sensible y seguimiento automático hasta la compra.",
  },
  {
    title: "Agentes de atención al cliente",
    description:
      "Sistemas que resuelven sin intervención humana: PointCo Agent para Tienda Nube, WhatsApp Agent Base con 15 tools, routing y SLAs.",
  },
  {
    title: "Agentes internos operativos",
    description:
      "Copilotos y asistentes para equipos: dossier automático de invitados en PeriodistApp, alertas en vivo, Telegram bot interno con 37 tools para gestión.",
  },
  {
    title: "Agentes de código",
    description:
      "Los que uso para construir: agentes locales con contexto estratégico, RAG, guardrails y técnicas de prompt engineering para desarrollar software más rápido.",
  },
];

const storyCards = [
  {
    tone: "from-[#E62E2E]/90 via-[#7F1D1D]/70 to-[#0a0b0d]",
    accent: "#E62E2E",
    title: "Idea que se convierte en sistema",
    text: "Desde la necesidad real hasta una solución lista para operar.",
  },
  {
    tone: "from-[#4F46E5]/85 via-[#1E1B4B]/80 to-[#0a0b0d]",
    accent: "#8B5CF6",
    title: "Arquitectura de negocio y tecnología",
    text: "Pensar primero el flujo, la lógica y la conversión antes de escribir código.",
  },
  {
    tone: "from-[#0EA5E9]/80 via-[#082F49]/80 to-[#0a0b0d]",
    accent: "#38BDF8",
    title: "Implementación con criterio",
    text: "No hablo de IA abstracta: diseño, construyo y ajusto lo que realmente funciona.",
  },
  {
    tone: "from-[#F59E0B]/80 via-[#78350F]/80 to-[#0a0b0d]",
    accent: "#FBBF24",
    title: "Automatización con impacto",
    text: "Reducir fricción, ahorrar tiempo y aumentar productividad sin perder calidad.",
  },
  {
    tone: "from-[#10B981]/75 via-[#064E3B]/80 to-[#0a0b0d]",
    accent: "#34D399",
    title: "Sistemas que escalan",
    text: "Cada solución se construye pensando en crecimiento, operación y métricas reales.",
  },
  {
    tone: "from-[#F472B6]/75 via-[#831843]/75 to-[#0a0b0d]",
    accent: "#F9A8D4",
    title: "Ejecución real",
    text: "Lo que se ve aquí es el resultado de trabajo aplicado, no teoría de laboratorio.",
  },
];

const skills = [
  "Next.js",
  "Node.js",
  "Python",
  "FastAPI",
  "LangChain",
  "OpenAI / RAG",
  "WhatsApp Cloud API",
  "YCloud",
  "n8n",
  "Supabase",
  "PostgreSQL",
  "Drizzle ORM",
  "Docker",
  "VPS",
  "Meta Ads",
  "GA4",
  "Remotion",
  "Socket.IO",
  "Redis",
];

const results = [
  { metric: "+24%", label: "Tasa de respuesta" },
  { metric: "-33%", label: "Tiempo de respuesta" },
  { metric: "-29%", label: "Tickets repetidos" },
  { metric: "92/100", label: "Satisfacción de clientes" },
  { metric: "-8 h/sem", label: "Reporting manual" },
  { metric: ">99,9%", label: "Uptime" },
];

export function Credenciales() {
  return (
    <section id="credenciales" className="relative py-12 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-20 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white mb-6">
            ¿Por qué escucharme?
          </h2>
          <p className="text-xl text-white/60 font-light leading-relaxed text-balance">
            No solo hablo de IA: diseño, construyo y mido sistemas que generan resultados.
          </p>
        </div>

        <div className="mb-12 lg:mb-20 animate-fade-in-up">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#E62E2E] font-semibold">
              Mi metodología
            </p>
            <h3 className="mt-3 text-2xl sm:text-3xl font-black text-white tracking-tight-custom">
              Pensar en sistemas, decidir con criterio y construir ejecutando en base a datos.
            </h3>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory no-scrollbar">
            {storyCards.map((card, index) => (
              <article
                key={card.title}
                className={`group relative min-w-[78%] sm:min-w-[46%] lg:min-w-[30%] snap-center overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/20 bg-gradient-to-br ${card.tone}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.25), transparent 30%), linear-gradient(135deg, rgba(255,255,255,0.08), transparent 55%)' }} />
                <div className="relative h-72 sm:h-80 p-5 sm:p-6 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-bold text-white shadow-lg">
                      {index + 1}
                    </span>
                    <span className="h-12 w-12 rounded-full border border-white/20" style={{ background: `radial-gradient(circle, ${card.accent} 0%, rgba(255,255,255,0.1) 55%, transparent 100%)` }} />
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xl font-black text-white leading-tight tracking-tight-custom">
                      {card.title}
                    </h4>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 lg:mb-20">
          {pillars.map((item, index) => (
            <div
              key={item.title}
              className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-base font-bold text-white mb-2 tracking-tight-custom">
                {item.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-20">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-black text-white mb-8 tracking-tight-custom">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-white/10 text-sm text-white/70 hover:border-[#E62E2E]/50 hover:text-white transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-black text-white mb-8 tracking-tight-custom">
              Resultados
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {results.map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-2xl p-6 text-center hover:bg-white/[0.06] transition-all duration-500"
                >
                  <p className="text-3xl font-black text-[#E62E2E] mb-2">
                    {item.metric}
                  </p>
                  <p className="text-white/50 text-xs uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
