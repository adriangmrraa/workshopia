import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 bg-[#1B1D20] border-t border-[#3A3D41]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Future" width={100} height={40} />
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#8A8D91]">
            <Link href="#que-hacemos" className="hover:text-[#F5F7FA] transition-colors">
              Qué hacemos
            </Link>
            <Link href="#que-te-llevas" className="hover:text-[#F5F7FA] transition-colors">
              Qué te llevás
            </Link>
            <Link href="#cronograma" className="hover:text-[#F5F7FA] transition-colors">
              Cronograma
            </Link>
            <Link href="#precio" className="hover:text-[#F5F7FA] transition-colors">
              Precio
            </Link>
            <Link href="#faq" className="hover:text-[#F5F7FA] transition-colors">
              FAQ
            </Link>
          </nav>
          <p className="text-sm text-[#8A8D91]">
            © {new Date().getFullYear()} Future. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
