import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Pending } from "@/components/shared/Pending";

export const metadata: Metadata = { title: "Términos y condiciones" };

export default function TerminosPage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-20 lg:py-24">
      <h1 className="text-4xl font-semibold text-[var(--color-ink)]">Términos y condiciones</h1>
      <p className="mt-6 text-[var(--color-ink-soft)]">
        <Pending value={undefined} />
      </p>
    </Container>
  );
}
