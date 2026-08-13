import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logos/futurelogopng.png"
              alt="Future"
              width={100}
              height={32}
              className="transition-opacity group-hover:opacity-80 w-20 sm:w-24 md:w-28 h-auto"
            />
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/50">
            <Link href="#modalidades" className="hover:text-white transition-colors">
              Modalidades
            </Link>
            <Link href="#cronograma" className="hover:text-white transition-colors">
              Cronograma
            </Link>
            <Link href="#requisitos" className="hover:text-white transition-colors">
              Requisitos
            </Link>
            <Link href="#faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Future. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
