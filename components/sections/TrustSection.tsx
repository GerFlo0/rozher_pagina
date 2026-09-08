import { Container } from "@/components/shared/Container";
import { Lock, FileCheck2, UserCheck } from "lucide-react";

/**
 * Sección de confianza basada en hechos verificables sobre el proceso
 * (no en cifras, premios o alianzas no confirmadas — ver reglas de datos).
 */
const POINTS = [
  { icon: FileCheck2, text: "Te explicamos por escrito las condiciones antes de que decidas." },
  { icon: UserCheck, text: "Tu proceso lo sigue una persona, no un sistema anónimo." },
  { icon: Lock, text: "Tus datos se usan únicamente para atender tu solicitud." },
];

export function TrustSection() {
  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <div className="grid grid-cols-1 gap-10 rounded-[var(--radius-lg)] border border-[var(--color-border)] p-8 sm:grid-cols-3 sm:p-12">
        {POINTS.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3">
            <Icon className="mt-0.5 shrink-0 text-[var(--color-accent)]" size={22} strokeWidth={1.75} />
            <p className="text-[0.95rem] text-[var(--color-ink-soft)]">{text}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
