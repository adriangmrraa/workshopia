import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#0a0b0d]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/logos/futurelogopng.png"
            alt="Future"
            width={100}
            height={32}
            priority
            className="transition-opacity group-hover:opacity-80 h-12 sm:h-14 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          <a
            href="#que-hacemos"
            className="text-white/50 hover:text-white transition-colors"
          >
            Metodología
          </a>
          <a
            href="#credenciales"
            className="text-white/50 hover:text-white transition-colors"
          >
            Experiencia
          </a>
          <a
            href="#quien-lo-dicta"
            className="text-white/50 hover:text-white transition-colors"
          >
            Quién soy
          </a>
          <a
            href="#modalidades"
            className="text-white/50 hover:text-white transition-colors"
          >
            Modalidades
          </a>
          <a
            href="#cronograma"
            className="text-white/50 hover:text-white transition-colors"
          >
            Cronograma
          </a>
          <a
            href="#faq"
            className="text-white/50 hover:text-white transition-colors"
          >
            FAQ
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScMAwRueNaKLBONOOakpJYPbVfTRJkejaWj348geaf3VWElxQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-5 py-2 bg-[#E62E2E] text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(230,46,46,0.35)] transition-all duration-300 hover:scale-[1.03]"
          >
            Reservar lugar
          </a>
        </nav>
      </div>
    </header>
  );
}
