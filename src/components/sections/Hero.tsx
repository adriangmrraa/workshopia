import Image from "next/image";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScMAwRueNaKLBONOOakpJYPbVfTRJkejaWj348geaf3VWElxQ/viewform";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B1D20] via-[#1B1D20] to-[#2A2D31]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,46,46,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2A2D31] border border-[#3A3D41] text-sm font-medium text-[#8A8D91]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E62E2E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E62E2E]" />
              </span>
              Sábado 5 de septiembre · Formosa Capital + Online en vivo
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              WORKSHOP PRÁCTICO DE IA
              <br />
              <span className="text-[#E62E2E]">CONSTRUÍ SOLUCIONES CON IA</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#8A8D91] max-w-xl leading-relaxed">
              Una jornada práctica para aprender construyendo sobre una base real y llevarte un repositorio que podés seguir utilizando después del workshop.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#E62E2E] text-white font-bold rounded-xl hover:bg-transparent hover:text-[#E62E2E] border-2 border-[#E62E2E] transition-all text-lg"
              >
                Reservar mi lugar
              </a>
              <a
                href="#que-hacemos"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#F5F7FA] font-semibold rounded-xl border-2 border-[#3A3D41] hover:border-[#E62E2E] transition-all text-lg"
              >
                Ver más
              </a>
            </div>

            <p className="text-sm text-[#8A8D91]">
              Cupos limitados · Repositorio descargable · Demo en vivo
            </p>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#3A3D41] shadow-2xl shadow-black/40">
              <Image
                src="/images/adrian-gamarra.jpg"
                alt="Adrián Gamarra"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1D20]/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
