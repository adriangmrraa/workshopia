import Image from "next/image";

export function QuienLoDicta() {
  return (
    <section id="quien-lo-dicta" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#E62E2E]/15 to-transparent rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/adrian-gamarra.jpg"
                alt="Hector Adrian Arganaraz Gamarra"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d]/60 via-transparent to-transparent" />
            </div>
          </div>
          <div className="space-y-8 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white">
              ¿Quién lo dicta?
            </h2>
            <p className="text-3xl sm:text-4xl font-black gradient-text tracking-tight-custom">
              Hector Adrian Arganaraz Gamarra
            </p>
            <div className="space-y-5 text-white/70 text-lg leading-relaxed">
              <p>
                Desarrollador de software, especialista en IA aplicada, automatización y transformación tecnológica.
              </p>
              <p>
                Fundador de <span className="text-[#E62E2E] font-semibold">Fusa Labs</span> y actualmente <span className="text-[#E62E2E] font-semibold">Marketing Automation Specialist en codexy</span>, donde diseño e implemento ecosistemas de atención al cliente 24/7 con agentes de IA, n8n, APIs y bases de datos vectoriales.
              </p>
              <p>
                Trabajo con tecnologías como <span className="text-[#E62E2E] font-semibold">Next.js</span>, <span className="text-[#E62E2E] font-semibold">Node.js</span>, <span className="text-[#E62E2E] font-semibold">Python</span>, <span className="text-[#E62E2E] font-semibold">n8n</span>, <span className="text-[#E62E2E] font-semibold">PostgreSQL</span> y <span className="text-[#E62E2E] font-semibold">vector databases</span>. Mi foco es convertir procesos manuales en sistemas automáticos, escalables y medibles.
              </p>
              <p>
                También fui coordinador del <span className="text-[#E62E2E] font-semibold">Hackathon Espacial Federal</span> en Formosa y participé en el desarrollo de proyectos como <span className="text-[#E62E2E] font-semibold">"Mi Proceso"</span>, plataforma con IA para seguimiento de expedientes judiciales en tiempo real.
              </p>
              <p>
                Mi experiencia en comunicación, periodismo y redacción me permite transformar lo técnico en mensajes claros que generan resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
