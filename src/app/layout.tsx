import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Workshop Práctico de IA — Construí soluciones con IA",
  description:
    "Una jornada práctica para aprender construyendo sobre una base real y llevarte un repositorio que podés seguir utilizando después del workshop.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#1B1D20] text-[#F5F7FA] font-montserrat">
        {children}
      </body>
    </html>
  );
}
