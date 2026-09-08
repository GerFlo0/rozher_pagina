import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Pending } from "@/components/shared/Pending";

export const metadata: Metadata = { title: "Aviso de privacidad" };

export default function PrivacidadPage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-20 lg:py-24">
      <h1 className="text-4xl font-semibold text-[var(--color-ink)]">Aviso de privacidad</h1>
      <p className="mt-6 text-[var(--color-ink-soft)]">
        <Pending value={undefined} />
      </p>
    </Container>
  );
}
