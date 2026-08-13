import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1B1D20]/90 backdrop-blur-md border-b border-[#3A3D41]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Future" width={100} height={40} priority />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#que-hacemos" className="text-[#8A8D91] hover:text-[#F5F7FA] transition-colors">Qué hacemos</a>
          <a href="#que-te-llevas" className="text-[#8A8D91] hover:text-[#F5F7FA] transition-colors">Qué te llevás</a>
          <a href="#cronograma" className="text-[#8A8D91] hover:text-[#F5F7FA] transition-colors">Cronograma</a>
          <a href="#precio" className="text-[#8A8D91] hover:text-[#F5F7FA] transition-colors">Precio</a>
          <a href="#faq" className="text-[#8A8D91] hover:text-[#F5F7FA] transition-colors">FAQ</a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScMAwRueNaKLBONOOakpJYPbVfTRJkejaWj348geaf3VWElxQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E62E2E] text-white px-5 py-2 rounded-lg font-semibold hover:bg-transparent hover:text-[#E62E2E] border-2 border-[#E62E2E] transition-all"
          >
            Reservar lugar
          </a>
        </nav>
      </div>
    </header>
  );
}
