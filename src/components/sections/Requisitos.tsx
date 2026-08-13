const requirements = [
  { text: "Una computadora funcional para trabajar con la base y seguir la práctica en vivo." },
  { text: "Interés genuino en IA, automatización y resolver problemas con datos." },
  { text: "Conocimientos básicos de uso de computadora y conexión a internet." },
  { text: "Disponibilidad para crear cuentas y abrir las herramientas que vamos a utilizar en la jornada." },
  { text: "Espacio suficiente para descargar la base de trabajo y los materiales del workshop." },
  { text: "Ganas de experimentar, iterar y aprender haciendo, no solo mirando la clase." },
  { text: "Si tenés un proyecto, negocio o proceso que quieras mejorar, podés traerlo para aplicarlo en el ejercicio. Si no, te ayudamos a encontrar un caso útil para trabajar." },
];

export function Requisitos() {
  return (
    <section id="requisitos" className="relative py-12 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 lg:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white">
              Requisitos para participar
            </h2>
          </div>
          <div className="glass rounded-3xl p-6 sm:p-10 space-y-6">
            {requirements.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="mt-0.5 h-2 w-2 rounded-full bg-[#E62E2E] shrink-0 shadow-[0_0_8px_rgba(230,46,46,0.5)]" />
                <span className="text-white/70 leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
