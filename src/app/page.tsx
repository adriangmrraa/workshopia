import { Header } from "@/components/Header";
import { DesktopLogoStrip, MobileLogoStrip } from "@/components/LogoStrip";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Modalidades } from "@/components/sections/Modalidades";
import { Cronograma } from "@/components/sections/Cronograma";
import { Requisitos } from "@/components/sections/Requisitos";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0b0d] text-white">
      <Header />

      <div className="pt-16">
        <MobileLogoStrip />
        <DesktopLogoStrip />
      </div>

      <main>
        <Hero />
        <Modalidades />
        <Cronograma />
        <Requisitos />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
