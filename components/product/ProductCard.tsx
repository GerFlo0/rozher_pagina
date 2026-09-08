import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products/types";

const CATEGORY_LABEL: Record<Product["category"], string> = {
  credito: "Crédito",
  seguro: "Seguro",
  servicio: "Servicio",
};

const STATUS_LABEL: Record<Product["status"], string | null> = {
  disponible: null,
  proximamente: "Próximamente",
  pausado: "No disponible por ahora",
};

export function ProductCard({ product }: { product: Product }) {
  const statusLabel = STATUS_LABEL[product.status];

  return (
    <Link
      href={`/productos/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)]"
    >
      {product.image && (
        <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-paper)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent)]">
            {CATEGORY_LABEL[product.category]}
          </span>
          {statusLabel && (
            <span className="rounded-full bg-[var(--color-paper)] px-2.5 py-1 text-xs font-medium text-[var(--color-ink-soft)]">
              {statusLabel}
            </span>
          )}
        </div>

        <h3 className="mt-3 text-xl font-semibold text-[var(--color-ink)]">{product.name}</h3>
        <p className="mt-2 flex-1 text-[0.95rem] text-[var(--color-ink-soft)]">
          {product.shortDescription}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-[var(--color-primary)]">
          Conocer producto
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
