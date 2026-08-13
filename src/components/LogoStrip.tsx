import Image from "next/image";

const logos = [
  { src: "/logos/logofusalabs.png", alt: "Fusa Labs", width: 140, height: 50 },
  { src: "/logos/codexy-logo.svg", alt: "Codexy", width: 120, height: 50 },
  { src: "/logos/periodistapp-logo.png", alt: "PeriodistApp", width: 140, height: 50 },
  { src: "/logos/muzapp-logo.png", alt: "Muzapp", width: 140, height: 50 },
  { src: "/logos/argentina-al-espacio-logo.png", alt: "Argentina al Espacio", width: 140, height: 50 },
  { src: "/logos/clinicforge-logo.png", alt: "Clinicforge", width: 140, height: 50 },
  { src: "/logos/aae-logo.png", alt: "AAE", width: 120, height: 50 },
];

export function LogoStrip() {
  return (
    <section className="relative py-6 lg:py-8 bg-[#0a0b0d] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-0">
        <div
          className="flex gap-8 sm:gap-12 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-4 sm:px-8 lg:px-12 no-scrollbar"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-none snap-center flex items-center justify-center h-16 sm:h-20 lg:h-24 px-4 sm:px-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#E62E2E]/30 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer min-w-[160px] sm:min-w-[200px]"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
