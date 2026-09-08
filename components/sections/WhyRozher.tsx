import { Container } from "@/components/shared/Container";
import { ShieldCheck, MessagesSquare, Compass } from "lucide-react";

const REASONS = [
  {
    icon: MessagesSquare,
    title: "Asesoría personal, no un formulario frío",
    description:
      "Cada consulta la atiende una persona que responde tus dudas antes de que decidas, no un sistema automático.",
  },
  {
    icon: ShieldCheck,
    title: "Transparencia sobre lo que sí y lo que no",
    description:
      "Te explicamos exactamente cómo funciona cada producto y qué papel juega Rozher Seguros en el proceso.",
  },
  {
    icon: Compass,
    title: "Te ayudamos a comparar, no solo a vender",
    description:
      "Nuestro trabajo es que entiendas tus opciones para que la decisión sea tuya, con información clara.",
  },
];

export function WhyRozher() {
  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
          ¿Por qué hablar con Rozher?
        </h2>
        <p className="mt-4 text-lg text-[var(--color-ink-soft)]">
          No somos un banco. Somos el equipo que te ayuda a entender tus
          opciones y te conecta con quien puede resolverlas.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {REASONS.map(({ icon: Icon, title, description }) => (
          <div key={title} className="border-t-2 border-[var(--color-accent)] pt-5">
            <Icon className="text-[var(--color-primary)]" size={28} strokeWidth={1.75} />
            <h3 className="mt-4 text-lg font-semibold text-[var(--color-ink)]">{title}</h3>
            <p className="mt-2 text-[0.95rem] text-[var(--color-ink-soft)]">{description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
