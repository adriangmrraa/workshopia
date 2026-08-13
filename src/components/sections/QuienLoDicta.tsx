import Image from "next/image";

export function QuienLoDicta() {
  return (
    <section id="quien-lo-dicta" className="py-20 lg:py-32 bg-[#1B1D20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#3A3D41] shadow-2xl shadow-black/40 max-w-md mx-auto lg:mx-0">
              <Image
                src="/images/adrian-gamarra.jpg"
                alt="Adrián Gamarra"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              ¿Quién lo dicta?
            </h2>
            <p className="text-2xl font-bold text-[#E62E2E]">Adrián Gamarra</p>
            <p className="text-lg text-[#8A8D91] leading-relaxed">
              Desarrollador y especialista en IA aplicada, automatización y transformación tecnológica.
            </p>
            <p className="text-[#F5F7FA] leading-relaxed">
              Desde <span className="text-[#E62E2E] font-semibold">Future</span> trabajo en la construcción e implementación de soluciones de software e inteligencia artificial para empresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
