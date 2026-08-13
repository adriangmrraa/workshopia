import Image from "next/image";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScMAwRueNaKLBONOOakpJYPbVfTRJkejaWj348geaf3VWElxQ/viewform";

const galleryImages = [
  { src: "/images/adrian-gamarra.jpg", title: "Foto 1", subtitle: "Aprender IA con intención" },
  { src: "/images/foto 3.png", title: "Foto 2", subtitle: "Diseño real y ejecución" },
  { src: "/images/IMG_8277.JPG.jpeg", title: "Foto 3", subtitle: "Ideas que se vuelven acción" },
  { src: "/images/IMG_8279.JPG.jpeg", title: "Foto 4", subtitle: "Procesos claros y repetibles" },
  { src: "/images/IMG_8280.JPG.jpeg", title: "Foto 5", subtitle: "Estrategia con resultados" },
  { src: "/images/IMG_8281.JPG.jpeg", title: "Foto 6", subtitle: "Automatización con criterio" },
];

export function Hero() {
  return (
    <section className="relative min-h-[68vh] lg:min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0b0d] via-[#0a0b0d] to-[#1a1c20]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,46,46,0.1),transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 max-h-[45vh] lg:max-h-none">
              <Image
                src="/images/adrian-gamarra.jpg"
                alt="Hector Adrian Arganaraz Gamarra"
                width={600}
                height={700}
                className="w-full h-auto max-h-[45vh] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d]/70 via-transparent to-transparent" />
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2 animate-fade-in-up">
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

        <div className="mt-8 lg:mt-10">
          <div className="lg:hidden">
            <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar">
              {galleryImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="group relative h-[48vw] w-[86vw] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 snap-center shadow-lg shadow-black/20"
                >
                  <Image
                    src={image.src}
                    alt={`Foto del workshop ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d]/90 via-[#0a0b0d]/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <div className="translate-y-0 opacity-100 transition-all duration-700 ease-out group-hover:translate-y-[-2px] group-hover:opacity-100">
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70">
                        {image.title}
                      </p>
                      <h3 className="text-xl font-black uppercase leading-none text-white tracking-tight">
                        {image.subtitle}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-6 gap-3">
              {galleryImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="group relative h-52 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20"
                >
                  <Image
                    src={image.src}
                    alt={`Foto del workshop ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d]/90 via-[#0a0b0d]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.25em] text-white/70">
                      {image.title}
                    </p>
                    <h3 className="text-sm font-black uppercase leading-tight text-white tracking-tight">
                      {image.subtitle}
                    </h3>
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
