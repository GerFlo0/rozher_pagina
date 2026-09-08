import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getProductsByCategory } from "@/lib/products/data";

export const metadata: Metadata = {
  title: "Créditos",
  description: "Conoce las opciones de crédito disponibles con la asesoría de Rozher Seguros.",
};

export default function ProductosPage() {
  const products = getProductsByCategory("credito");

  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <h1 className="text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
        Créditos
      </h1>
      <p className="mt-4 max-w-xl text-lg text-[var(--color-ink-soft)]">
        Estas son las opciones disponibles hoy. Si no ves lo que buscas,
        escríbenos y te ayudamos a encontrarlo.
      </p>
      <div className="mt-12">
        <ProductGrid products={products} />
      </div>
    </Container>
  );
}
