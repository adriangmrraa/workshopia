const highlights = [
  {
    title: "Agente conversacional",
    description:
      "Diseño e implemento agentes en WhatsApp Cloud API integrados con n8n y CRM (Airtable/Sheets/Supabase).",
  },
  {
    title: "Automatización end-to-end",
    description:
      "Orquesto captación, scoring, routing, SLAs y reporting, reduciendo tiempos de respuesta y errores operativos.",
  },
  {
    title: "Dashboards y datos",
    description:
      "Construyo dashboards en Next.js + Node.js con métricas comerciales y operativas, roles/ACL y series históricas.",
  },
  {
    title: "Integraciones y despliegue",
    description:
      "Despliego en Docker/EasyPanel sobre VPS, con manejo de entornos, logging y backups.",
  },
];

const skills = [
  "WhatsApp Cloud API",
  "n8n",
  "Supabase",
  "OpenAI / RAG",
  "Next.js",
  "Node.js",
  "Meta Ads",
  "GA4",
  "Docker",
  "Airtable / Sheets",
  "Mercado Pago",
  "REST APIs",
];

const results = [
  { metric: "-33%", label: "Tiempo de respuesta" },
  { metric: "+22%", label: "Conversión lead → turno" },
  { metric: "-8 h/sem", label: "Reporting manual" },
  { metric: "-29%", label: "Tickets repetidos" },
  { metric: "92/100", label: "CSAT" },
];

export function Credenciales() {
  return (
    <section id="credenciales" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white mb-6">
            ¿Por qué escucharme?
          </h2>
          <p className="text-xl text-white/60 font-light leading-relaxed text-balance">
            No solo hablo de IA: diseño, construyo y mido sistemas que generan resultados.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((item, index) => (
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
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

        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <div className="glass rounded-3xl p-8 sm:p-14">
            <h3 className="text-2xl font-black text-white mb-8 tracking-tight-custom">
              Educación
            </h3>
            <div className="space-y-8">
              <div>
                <p className="text-white font-semibold text-lg">
                  Máster en Marketing Digital, Growth Hacking y eCommerce
                </p>
                <p className="text-white/50 text-sm mt-1">
                  OBS Business School (2021)
                </p>
              </div>
              <div>
                <p className="text-white font-semibold text-lg">
                  Licenciatura en Publicidad
                </p>
                <p className="text-white/50 text-sm mt-1">
                  Universidad Siglo XXI (2023 – presente)
                </p>
              </div>
              <div>
                <p className="text-white font-semibold text-lg">
                  Certificados
                </p>
                <p className="text-white/50 text-sm mt-1">
                  Adobe Creative Cloud (Platzi, 2018) · Creación de Contenido y Ads (Platzi/Crehana, 2020)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
