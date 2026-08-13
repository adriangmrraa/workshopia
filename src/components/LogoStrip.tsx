import Image from "next/image";

export interface ImageLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface TextLogo {
  type: "text";
  label: string;
}

export type LogoItem = ImageLogo | TextLogo;

export const logos: LogoItem[] = [
  { src: "/logos/futurelogopng.png", alt: "Future", width: 100, height: 32 },
  { src: "/logos/logofusalabs.png", alt: "Fusa Labs", width: 140, height: 50 },
  { type: "text", label: "Argentina al Espacio" },
  { type: "text", label: "Pointe Coach" },
  { type: "text", label: "WhatsApp Agent Base" },
  { type: "text", label: "Prospector" },
  { type: "text", label: "Plataform AI Solutions" },
  { type: "text", label: "Dentalogic" },
  { type: "text", label: "SaaS Fusa Labs" },
  { type: "text", label: "Jarvis" },
  { src: "/logos/Citro png logo.png", alt: "Citrofeo", width: 120, height: 50 },
  { type: "text", label: "Clinicforge" },
  { type: "text", label: "PeriodistApp" },
  { src: "/logos/codexy-logo.svg", alt: "Codexy", width: 120, height: 50 },
  { src: "/logos/muzapp-logo.png", alt: "Muzapp", width: 140, height: 50 },
  { src: "/logos/aae-logo.png", alt: "AAE", width: 120, height: 50 },
  { type: "text", label: "Radio Parque" },
  { type: "text", label: "Radio Uno" },
  { type: "text", label: "CoFactory" },
  { type: "text", label: "Claro" },
  { type: "text", label: "Tim Líder" },
  { type: "text", label: "TOTAL Equipamientos" },
  { type: "text", label: "Santino Pizza Bar" },
  { type: "text", label: "Drugstore El Uruguayo" },
  { type: "text", label: "AH SPORTS" },
  { type: "text", label: "Proyectos políticos" },
  { type: "text", label: "Figuras políticas" },
  { type: "text", label: "Empresas Formosa" },
  { type: "text", label: "+15 clínicas dentales y estéticas" },
];

function isTextLogo(logo: LogoItem): logo is TextLogo {
  return (logo as TextLogo).type === "text";
}

function LogoStripInner({ className }: { className?: string }) {
  return (
    <div className={`overflow-hidden ${className || ""}`}>
      <div className="mb-3 flex items-center justify-center gap-3 px-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/50 sm:text-xs">
        <span className="h-px flex-1 bg-white/10" />
        <span>Mis clientes y dónde trabajé</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 px-4 sm:px-8 lg:px-12 no-scrollbar">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-none snap-center flex items-center justify-center h-10 sm:h-12 lg:h-14 px-3 sm:px-4 rounded-lg border border-white/5 bg-white/[0.02] hover:border-[#E62E2E]/30 hover:bg-white/[0.04] transition-all duration-300 cursor-pointer min-w-[100px] sm:min-w-[120px]"
          >
            {isTextLogo(logo) ? (
              <span className="text-[10px] sm:text-xs font-medium text-white/70 text-center leading-snug">
                {logo.label}
              </span>
            ) : (
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-7 sm:h-9 lg:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobileLogoStrip() {
  return (
    <div className="fixed top-16 left-0 w-full z-40 bg-[#0a0b0d]/95 backdrop-blur-sm border-b border-white/5 md:hidden">
      <LogoStripInner />
    </div>
  );
}

export function DesktopLogoStrip() {
  return (
    <div className="hidden md:block bg-[#0a0b0d] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-0">
        <LogoStripInner className="py-2 lg:py-3" />
      </div>
    </div>
  );
}
