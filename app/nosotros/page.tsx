import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Pending } from "@/components/shared/Pending";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce a Rozher Seguros, empresa de asesoría en productos financieros y de seguros.",
};

export default function NosotrosPage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-20 lg:py-24">
      <h1 className="text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
        Nosotros
      </h1>
      <p className="mt-6 text-lg text-[var(--color-ink-soft)]">
        Rozher Seguros es una empresa de asesoría en productos financieros y
        de seguros. Ayudamos a las personas a entender sus opciones y las
        conectamos con la institución o el producto que corresponde a su
        caso.
      </p>
      <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
        <Pending value={undefined} /> — historia, misión y datos
        institucionales de Rozher Seguros.
      </p>
    </Container>
  );
}
