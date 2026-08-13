import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Workshop IA — Aprendé a implementar IA de forma práctica",
  description:
    "Workshop intensivo y práctico de IA para llevar a tu trabajo o negocio. Cupos limitados.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0b0d] text-[#F5F7FA] font-montserrat selection:bg-[#E62E2E]/40 selection:text-white">
        {children}
      </body>
    </html>
  );
}
