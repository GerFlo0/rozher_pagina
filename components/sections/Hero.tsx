import { Container } from "@/components/shared/Container";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import Link from "next/link";

/**
 * Hero a ancho completo, estilo banca institucional (referencia Inbursa):
 * fondo navy con degradado, texto grande y dos CTAs. Preparado para recibir
 * una imagen de campaña de fondo (heroImageUrl) con overlay oscuro; sin ella
 * se muestra un tratamiento gráfico propio para que igual se vea sólido.
 */
export function Hero({ heroImageUrl }: { heroImageUrl?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-primary)]">
      {/* Imagen de campaña opcional + overlay (como los banners de la referencia) */}
      {heroImageUrl && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImageUrl})` }}
          aria-hidden="true"
        />
      )}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[var(--color-primary)]"
        aria-hidden="true"
      />
      {/* Detalle gráfico sutil (no decoración vacía: guía la vista al CTA) */}
      <div className="pointer-events-none absolute -right-24 top-1/2 -z-10 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[var(--color-accent)]/15 blur-3xl md:block" aria-hidden="true" />

      <Container className="grid grid-cols-1 items-center gap-10 py-16 sm:py-20 md:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div className="text-white">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white ring-1 ring-white/20">
            Crédito para pensionados y trabajadores IMSS
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            Tu pensión también puede ser tu respaldo
          </h1>
          <p className="mt-5 max-w-lg text-lg text-white/85">
            En Rozher Seguros te asesoramos para conocer tus opciones de crédito
            y te acompañamos, paso a paso, hasta que tengas toda la información
            para decidir.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/productos/credito-nomina-imss"
              className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-white px-6 py-3.5 text-base font-semibold text-[var(--color-primary)] transition hover:bg-white/90"
            >
              Solicitar mi crédito
            </Link>
            <WhatsAppButton
              variant="ghost"
              message="Hola, quiero información sobre el Crédito para pensionados IMSS de Rozher Seguros."
            >
              Hablar con un asesor
            </WhatsAppButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <HeroCard />
        </div>
      </Container>
    </section>
  );
}

/** Tarjeta-resumen propia (no foto de stock, no testimonios inventados). */
function HeroCard() {
  return (
    <div className="rounded-[var(--radius-lg)] bg-white/95 p-6 shadow-[var(--shadow-card)] ring-1 ring-white/40 backdrop-blur">
      <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
        Atención personalizada
      </p>
      <p className="mt-2 text-lg font-semibold text-[var(--color-ink)]">
        Un asesor real revisa tu caso
      </p>
      <ul className="mt-4 space-y-3 text-[0.95rem] text-[var(--color-ink-soft)]">
        {[
          "Un asesor te guía en el trámite con el IMSS",
          "Seguro por fallecimiento incluido, sin costo",
          "Sin penalización por pago anticipado",
        ].map((t) => (
          <li key={t} className="flex items-start gap-2.5">
            <span className="mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[var(--color-accent)] text-white">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5 9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
