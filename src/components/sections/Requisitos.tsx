const requirements = [
  { emoji: "💻", text: "Una computadora personal para trabajar durante el workshop." },
  { emoji: "🤖", text: "Interés en Inteligencia Artificial y automatización." },
  { emoji: "🧠", text: "Conocimientos básicos de uso de computadora e Internet." },
  { emoji: "🔑", text: "Poder crear y utilizar cuentas en las herramientas que vamos a utilizar durante la jornada." },
  { emoji: "📂", text: "Tener disponible un espacio para descargar el repositorio y los recursos del workshop." },
  { emoji: "🛠️", text: "Tener ganas de hacer y experimentar, no solamente mirar la clase." },
  { emoji: "💡", text: "Si tenés un proyecto, emprendimiento, negocio o proceso que quieras mejorar con IA, podés traerlo como caso práctico. En el caso de que no consigas, te vamos a ayudar a que lo encuentres." },
];

export function Requisitos() {
  return (
    <section id="requisitos" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white">
              Requisitos para participar
            </h2>
          </div>
          <div className="glass rounded-3xl p-8 sm:p-14 space-y-8">
            {requirements.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="text-2xl shrink-0 mt-0.5">{item.emoji}</span>
                <span className="text-white/70 leading-relaxed">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
