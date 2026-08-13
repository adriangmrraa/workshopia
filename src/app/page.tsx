import { Header } from "@/components/Header";
import { DesktopLogoStrip, MobileLogoStrip } from "@/components/LogoStrip";
import { Hero } from "@/components/sections/Hero";
import { Footer } from "@/components/Footer";

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
      </main>

      <Footer />
    </div>
  );
}
