import { Container } from "@/components/shared/Container";
import { Pending } from "@/components/shared/Pending";
import type { Product } from "@/lib/products/types";

export function HowProductWorks({ steps }: { steps: Product["howItWorks"] }) {
  return (
    <Container className="py-16 sm:py-20">
      <h2 className="text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
        Cómo funciona el proceso
      </h2>
      <ol className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
        {steps.map(({ step, title, description }) => (
          <li key={step}>
            <span className="font-[var(--font-display)] text-4xl font-semibold text-[var(--color-accent)]">
              {String(step).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-[var(--color-ink)]">
              <Pending value={title} />
            </h3>
            <p className="mt-2 text-[0.95rem] text-[var(--color-ink-soft)]">
              <Pending value={description} />
            </p>
          </li>
        ))}
      </ol>
    </Container>
  );
}
