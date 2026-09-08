import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Rozher Seguros | Asesoría en créditos y seguros",
    template: "%s | Rozher Seguros",
  },
  description:
    "Rozher Seguros te asesora en productos de crédito y seguros, con acompañamiento de un asesor en cada paso.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
