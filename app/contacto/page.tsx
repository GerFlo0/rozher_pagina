import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { LeadForm } from "@/components/forms/LeadForm";
import { Pending } from "@/components/shared/Pending";
import { Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta a un asesor de Rozher Seguros por WhatsApp, teléfono o correo.",
};

export default function ContactoPage() {
  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <h1 className="text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
        Contacto
      </h1>
      <p className="mt-4 max-w-xl text-lg text-[var(--color-ink-soft)]">
        Elige el canal que prefieras. Un asesor de Rozher Seguros te
        responderá directamente.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <WhatsAppButton message="Hola, quiero información sobre los productos de Rozher Seguros.">
          Escribir por WhatsApp
        </WhatsAppButton>
        <a
          href="tel:"
          className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] px-5 py-3 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-paper)]"
        >
          <Phone size={18} /> <Pending value={undefined} />
        </a>
        <a
          href="mailto:"
          className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] px-5 py-3 font-semibold text-[var(--color-ink)] hover:bg-[var(--color-paper)]"
        >
          <Mail size={18} /> <Pending value={undefined} />
        </a>
      </div>

      <div className="mt-6 -mx-5 sm:mx-0">
        <LeadForm productSlug="contacto-general" productName="Rozher Seguros" />
      </div>
    </Container>
  );
}
