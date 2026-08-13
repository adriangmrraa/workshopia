const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScMAwRueNaKLBONOOakpJYPbVfTRJkejaWj348geaf3VWElxQ/viewform";

export function Modalidades() {
  return (
    <section id="modalidades" className="py-20 lg:py-32 bg-[#2A2D31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Dos formas de participar
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#1B1D20] border border-[#3A3D41] rounded-2xl p-8 text-center hover:border-[#E62E2E] transition-colors">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-2xl font-bold mb-2">Presencial</h3>
            <p className="text-[#8A8D91] mb-6">Formosa Capital</p>
            <p className="text-sm text-[#8A8D91] mb-6">Lugar a confirmar. Experiencia completa con acceso directo al instructor.</p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#E62E2E] text-white font-bold rounded-xl hover:bg-transparent hover:text-[#E62E2E] border-2 border-[#E62E2E] transition-all w-full"
            >
              Quiero participar
            </a>
          </div>
          <div className="bg-[#1B1D20] border border-[#3A3D41] rounded-2xl p-8 text-center hover:border-[#E62E2E] transition-colors">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-2xl font-bold mb-2">Online en vivo</h3>
            <p className="text-[#8A8D91] mb-6">Mediante Zoom / Google Meet</p>
            <p className="text-sm text-[#8A8D91] mb-6">Vas a ver exactamente la pantalla, demostraciones y desarrollo en tiempo real.</p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#E62E2E] text-white font-bold rounded-xl hover:bg-transparent hover:text-[#E62E2E] border-2 border-[#E62E2E] transition-all w-full"
            >
              Quiero participar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
