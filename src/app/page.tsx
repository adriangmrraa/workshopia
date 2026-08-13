import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Credenciales } from "@/components/sections/Credenciales";
import { QueHacemos } from "@/components/sections/QueHacemos";
import { QueTeLlevas } from "@/components/sections/QueTeLlevas";
import { ParaQuien } from "@/components/sections/ParaQuien";
import { Aprendizaje } from "@/components/sections/Aprendizaje";
import { Cronograma } from "@/components/sections/Cronograma";
import { Modalidades } from "@/components/sections/Modalidades";
import { QuienLoDicta } from "@/components/sections/QuienLoDicta";
import { Precio } from "@/components/sections/Precio";
import { Requisitos } from "@/components/sections/Requisitos";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Credenciales />
        <QueHacemos />
        <QueTeLlevas />
        <ParaQuien />
        <Aprendizaje />
        <Cronograma />
        <Modalidades />
        <QuienLoDicta />
        <Precio />
        <Requisitos />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
