export function ParaQuien() {
  return (
    <section id="para-quien" className="relative py-12 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white">
              ¿Para quién es?
            </h2>
            <p className="text-xl text-white/60 leading-relaxed font-light">
              No hace falta ser experto. Lo importante es querer construir, probar ideas y entender cómo encaja IA con negocio, flujo y datos reales.
            </p>
            <ul className="space-y-4">
              {[
                "Querés empezar a construir soluciones con IA que tengan sentido real",
                "Sos desarrollador, estudiante o profesional de tecnología",
                "Trabajás con procesos, equipos o clientes y querés automatizar mejor",
                "Tenés una idea de negocio o producto y querés verla materializarse",
                "Querés entender cómo conectar IA, software, APIs y decisiones de negocio",
              ].map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#E62E2E] shrink-0 shadow-[0_0_8px_rgba(230,46,46,0.5)]" />
                  <span className="text-white/80 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#E62E2E]/20 to-transparent rounded-3xl blur-2xl" />
            <div className="relative glass rounded-3xl p-10 flex items-center justify-center min-h-[320px]">
              <p className="text-2xl sm:text-3xl font-semibold text-center text-white/80 leading-snug tracking-tight-custom">
                &ldquo;No necesitás ser experto en IA. Vamos a construir desde una base preparada y explicar cada parte del proceso.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
