const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScMAwRueNaKLBONOOakpJYPbVfTRJkejaWj348geaf3VWElxQ/viewform";

export function Precio() {
  return (
    <section id="precio" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white mb-6">
              Inversión
            </h2>
            <p className="text-xl text-white/60 font-light">
              Estamos en etapa de preventa y vamos a aumentar los tickets.
            </p>
          </div>
          <div className="glass rounded-3xl p-8 sm:p-14 space-y-8 animate-fade-in-up">
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { label: "Online", price: "$30.000" },
                { label: "Presencial", price: "$70.000" },
                { label: "Empresa", price: "$150.000" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">
                    {item.label}
                  </p>
                  <p className="text-4xl font-black text-[#E62E2E] tracking-tight-custom">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-lg">Fecha:</span>
                <div>
                  <span className="text-white/40">Sábado 5 de septiembre. Fecha exacta a confirmar.</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">Presencial:</span>
                <div>
                  <span className="text-white font-medium">Formosa Capital</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg">Online:</span>
                <div>
                  <span className="text-white font-medium">Google Meet o Zoom</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-white/40 text-center">
              Los cupos presenciales y Business son limitados.
            </p>
            <div className="text-center pt-2">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#E62E2E] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(230,46,46,0.4)] transition-all duration-300 hover:scale-[1.03] text-lg animate-glow"
              >
                Reservar mi lugar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
