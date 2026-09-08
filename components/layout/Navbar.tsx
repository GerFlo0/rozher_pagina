"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Menu, X, MapPin, Phone, ChevronDown } from "lucide-react";
import { Container } from "@/components/shared/Container";

const PRODUCT_LINKS = [
  { href: "/productos", label: "Créditos" },
  { href: "/seguros", label: "Seguros" },
];

const NAV_LINKS = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(18,35,59,0.06)]">
      {/* Barra utilitaria */}
      <div className="hidden bg-[var(--color-primary-dark)] text-white/90 md:block">
        <Container className="flex h-9 items-center justify-end gap-6 text-[0.8rem]">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={14} /> Cobertura nacional
          </span>
          <a href="tel:" className="inline-flex items-center gap-1.5 hover:text-white">
            <Phone size={14} /> Atención a clientes
          </a>
        </Container>
      </div>

      {/* Nav principal */}
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-[var(--color-primary)] text-sm font-bold text-white">
            R
          </span>
          <span className="text-lg font-bold tracking-tight text-[var(--color-primary)] md:text-xl">
            Rozher <span className="font-medium text-[var(--color-ink)]">Seguros</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <ProductsDropdown />
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.95rem] font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/productos/credito-nomina-imss"
            className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent)] px-5 py-2.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-[var(--color-accent-dark)]"
          >
            Solicitar ahora
          </Link>
        </div>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-[var(--radius-sm)] p-2 text-[var(--color-primary)] md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[var(--color-border)] bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {/* Productos como grupo en móvil */}
            <p className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
              Productos
            </p>
            {PRODUCT_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[var(--radius-sm)] px-5 py-3 text-base font-medium text-[var(--color-ink)] hover:bg-[var(--color-paper)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="my-1 h-px bg-[var(--color-border)]" />
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[var(--radius-sm)] px-3 py-3 text-base font-medium text-[var(--color-ink)] hover:bg-[var(--color-paper)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/productos/credito-nomina-imss"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent)] px-5 py-3 text-base font-semibold text-white"
            >
              Solicitar ahora
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}

/** Menú desplegable "Productos" para escritorio: hover + click + teclado. */
function ProductsDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 text-[0.95rem] font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
      >
        Productos
        <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-2"
          >
          <div className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white py-1 shadow-[var(--shadow-card)]">
          {PRODUCT_LINKS.map((link) => (
            <Link
            key={link.href}
            href={link.href}
            role="menuitem"
            onClick={() => setOpen(false)}
            className="block px-4 py-2 text-[0.95rem] font-medium text-[var(--color-ink)] hover:bg-[var(--color-paper)] hover:text-[var(--color-accent)]"
            >
            {link.label}
            </Link>
          ))}
          </div>
        </div>
      )}
    </div>
  );
}
