import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";

export function CTASection() {
  return (
    <Section tone="primary">
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">
            ¿Tienes dudas sobre qué producto te conviene?
          </h2>
          <p className="mt-3 max-w-lg text-white/80">
            Escríbenos y un asesor te responde directamente, sin formularios
            largos ni compromisos.
          </p>
        </div>
        <WhatsAppButton message="Hola, tengo dudas sobre qué producto de Rozher Seguros me conviene.">
          Escribir por WhatsApp
        </WhatsAppButton>
      </Container>
    </Section>
  );
}
