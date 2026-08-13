import Image from "next/image";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScMAwRueNaKLBONOOakpJYPbVfTRJkejaWj348geaf3VWElxQ/viewform";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0b0d] via-[#0a0b0d] to-[#1a1c20]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,46,46,0.1),transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-[#9CA3AF] uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E62E2E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E62E2E]" />
              </span>
              Etapa de preventa · Cupos limitados
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight-custom leading-[0.95]">
              <span className="block text-white">WORKSHOP IA</span>
              <span className="block gradient-text heading-glow mt-2">
                APRENDÉ A IMPLEMENTAR IA DE FORMA PRÁCTICA
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 max-w-xl leading-relaxed text-balance">
              Un workshop intensivo y práctico de 6 horas para entender cómo utilizar Inteligencia Artificial, identificar oportunidades reales de aplicación y llevarte recursos que podés seguir utilizando después del encuentro.
            </p>

            <p className="text-base text-white/80 font-medium max-w-xl leading-relaxed">
              No se trata solamente de mostrar herramientas. Durante el workshop tenés acompañamiento, ves los procesos en vivo, hacés preguntas y entendés cómo llevar estas tecnologías a situaciones reales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E62E2E] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(230,46,46,0.4)] transition-all duration-300 hover:scale-[1.03] text-lg animate-glow"
              >
                Reservar mi lugar
              </a>
              <a
                href="#modalidades"
                className="inline-flex items-center justify-center px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300 text-lg"
              >
                Ver modalidades
              </a>
            </div>

            <p className="text-sm text-white/40">
              Una vez enviado el formulario nos pondremos en contacto para confirmar tu inscripción.
            </p>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 animate-float">
              <Image
                src="/images/adrian-gamarra.jpg"
                alt="Hector Adrian Arganaraz Gamarra"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d]/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
