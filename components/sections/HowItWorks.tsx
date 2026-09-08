import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";

const STEPS = [
  {
    step: 1,
    title: "Nos cuentas tu caso",
    description: "Por WhatsApp, teléfono o formulario — como prefieras.",
    image: "/images/como_funciona_1.jpg",
  },
  {
    step: 2,
    title: "Un asesor revisa tus opciones",
    description: "Te explica qué producto se ajusta a tu situación y resuelve tus dudas.",
    image: "/images/como_funciona_2.jpg",
  },
  {
    step: 3,
    title: "Avanzas con información clara",
    description: "Decides con los datos completos, sin presión ni letra pequeña sorpresa.",
    image: "/images/como_funciona_3.jpg",
  },
];

export function HowItWorks() {
  return (
    <Section tone="paper">
      <Container>
        <h2 className="text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
          Cómo funciona
        </h2>

        <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map(({ step, title, description, image }) => (
            <li
              key={step}
              className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]"
            >
              <div className="aspect-[16/9] overflow-hidden bg-[var(--color-paper)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <span className="font-[var(--font-display)] text-3xl font-semibold text-[var(--color-accent)]">
                  {String(step).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-[var(--color-ink)]">{title}</h3>
                <p className="mt-2 text-[0.95rem] text-[var(--color-ink-soft)]">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
