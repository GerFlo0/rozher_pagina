import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getProductsByCategory } from "@/lib/products/data";

export const metadata: Metadata = {
  title: "Seguros",
  description: "Productos de seguros disponibles con la asesoría de Rozher Seguros.",
};

export default function SegurosPage() {
  const products = getProductsByCategory("seguro");

  return (
    <Container className="py-16 sm:py-20 lg:py-24">
      <h1 className="text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">Seguros</h1>
      <p className="mt-4 max-w-xl text-lg text-[var(--color-ink-soft)]">
        Estas son las coberturas disponibles con la asesoría de Rozher Seguros.
        Escríbenos y te ayudamos a elegir la que se ajusta a lo que necesitas.
      </p>
      <div className="mt-12">
        <ProductGrid products={products} />
      </div>
    </Container>
  );
}
