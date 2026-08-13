export function ParaQuien() {
  return (
    <section id="para-quien" className="py-20 lg:py-32 bg-[#1B1D20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              ¿Para quién es?
            </h2>
            <p className="text-lg text-[#8A8D91] leading-relaxed">
              No necesitás ser experto en IA. Vamos a construir desde una base preparada y explicar cada parte del proceso.
            </p>
            <ul className="space-y-4">
              {[
                "Querés empezar a construir soluciones con IA",
                "Sos desarrollador o estudiante",
                "Trabajás en tecnología",
                "Sos emprendedor y tenés una idea para convertirla en algo funcional",
                "Querés entender mejor cómo se integran IA, software y APIs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-[#E62E2E] shrink-0" />
                  <span className="text-[#F5F7FA]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#2A2D31] border border-[#3A3D41] rounded-2xl p-8 flex items-center justify-center">
            <p className="text-xl font-semibold text-center text-[#8A8D91]">
              &ldquo;No necesitás ser experto en IA. Vamos a construir desde una base preparada y explicar cada parte del proceso.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
