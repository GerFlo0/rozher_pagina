"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/shared/Container";

type Slide = {
  tab: string;
  title: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
};

/**
 * Carrusel de encabezado estilo banca (referencia Inbursa): imagen de fondo
 * con overlay oscuro, texto y CTA encima, y pestañas inferiores que cambian
 * de slide. Auto-avanza, se pausa al pasar el cursor y respeta
 * prefers-reduced-motion. Las imágenes son placeholders sustituibles.
 */
const SLIDES: Slide[] = [
  {
    tab: "Crédito IMSS",
    title: "Tu pensión también puede ser tu respaldo",
    text: "Crédito personal con cobranza delegada para pensionados y trabajadores IMSS. Te asesoramos en todo el trámite.",
    ctaLabel: "Conocer el crédito",
    ctaHref: "/productos/credito-nomina-imss",
    image: "/images/products/credito-pensionados-2.jpg",
  },
  {
    tab: "Tarjetas Aeroméxico",
    title: "Haz que cada compra cuente",
    text: "Tres tarjetas de crédito Aeroméxico Inbursa para acumular en cada compra y aprovechar beneficios de viaje.",
    ctaLabel: "Ver tarjetas",
    ctaHref: "/productos/tarjetas-aeromexico-inbursa",
    image: "/images/placeholder-wide.jpg",
  },
  {
    tab: "Seguros",
    title: "Protege lo que más te importa",
    text: "Seguros de vida, gastos médicos mayores y auto, con la asesoría de un experto para elegir la cobertura correcta.",
    ctaLabel: "Ver seguros",
    ctaHref: "/seguros",
    image: "/images/products/seguros.jpg",
  },
];

const INTERVAL = 6000;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduced.current) return;
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(id);
  }, [paused, active]);

  const go = (i: number) => setActive((i + SLIDES.length) % SLIDES.length);

  return (
    <section
      className="relative isolate overflow-hidden bg-[var(--color-primary)]"
      aria-roledescription="carousel"
      aria-label="Productos destacados"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Fondo: imagen del slide activo + overlays de legibilidad */}
      <div className="absolute inset-0 -z-10">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            aria-hidden={i !== active}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${s.image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-dark)]/95 via-[var(--color-primary-dark)]/80 to-[var(--color-primary)]/45" />
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-xl text-white">
          {SLIDES.map((s, i) => (
            <div
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${SLIDES.length}`}
              hidden={i !== active}
            >
              <h1 className="text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
                {s.title}
              </h1>
              <p className="mt-5 max-w-lg text-lg text-white/85">{s.text}</p>
              <div className="mt-8">
                <Link
                  href={s.ctaHref}
                  className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent)] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[var(--color-accent-dark)]"
                >
                  {s.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Flechas */}
        <div className="mt-10 flex items-center gap-3">
          <button
            onClick={() => go(active - 1)}
            aria-label="Anterior"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => go(active + 1)}
            aria-label="Siguiente"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </Container>

      {/* Pestañas inferiores */}
      <div className="relative border-t border-white/15">
        <Container>
          <div className="flex flex-wrap gap-x-8 gap-y-1 py-3">
            {SLIDES.map((s, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-current={i === active}
                className={`border-b-2 py-2 text-sm font-medium transition-colors ${
                  i === active
                    ? "border-[var(--color-accent)] text-white"
                    : "border-transparent text-white/60 hover:text-white"
                }`}
              >
                {s.tab}
              </button>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
