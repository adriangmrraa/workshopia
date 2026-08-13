const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScMAwRueNaKLBONOOakpJYPbVfTRJkejaWj348geaf3VWElxQ/viewform";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#E62E2E] to-[#2A2D31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
          ¿Preparado para construir con IA?
        </h2>
        <p className="text-lg sm:text-xl text-[#F5F7FA]/80 max-w-2xl mx-auto mb-10">
          No te vas solamente con apuntes. Te vas con una base real sobre la que podés seguir construyendo.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#E62E2E] font-bold rounded-xl hover:bg-transparent hover:text-white border-2 border-white transition-all text-lg"
        >
          Reservar mi lugar ahora
        </a>
      </div>
    </section>
  );
}
