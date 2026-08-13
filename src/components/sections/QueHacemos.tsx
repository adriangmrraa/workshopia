export function QueHacemos() {
  return (
    <section id="que-hacemos" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0d] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight-custom text-white">
            ¿Qué vamos a hacer?
          </h2>
          <p className="text-xl sm:text-2xl text-white/60 leading-relaxed text-balance font-light">
            No es una clase de teoría. Durante el workshop vamos a trabajar sobre una solución concreta, analizar cómo está construida y recorrer el proceso de implementación.
          </p>
          <p className="text-xl sm:text-2xl text-white font-semibold leading-relaxed text-balance">
            La idea es que entiendas qué hay detrás de una solución con IA y puedas continuar trabajando sobre ella después.
          </p>
        </div>
      </div>
    </section>
  );
}
