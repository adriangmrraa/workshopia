const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScMAwRueNaKLBONOOakpJYPbVfTRJkejaWj348geaf3VWElxQ/viewform";

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E62E2E]/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,46,46,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight-custom text-white mb-8 heading-glow">
          ¿Preparado para construir con IA?
        </h2>
        <p className="text-xl sm:text-2xl text-white/60 max-w-2xl mx-auto mb-12 font-light text-balance">
          No te vas solamente con apuntes. Te vas con una base real sobre la que podés seguir construyendo.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 bg-[#E62E2E] text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(230,46,46,0.45)] transition-all duration-300 hover:scale-[1.03] text-lg animate-glow"
        >
          Reservar mi lugar ahora
        </a>
      </div>
    </section>
  );
}
