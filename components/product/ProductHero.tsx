import type { Product } from "@/lib/products/types";
import { Container } from "@/components/shared/Container";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Pending } from "@/components/shared/Pending";

export function ProductHero({ product }: { product: Product }) {
  return (
    <section className="bg-[var(--color-primary)] text-white">
      <Container className="grid grid-cols-1 items-center gap-10 py-16 sm:py-20 md:grid-cols-2 lg:py-24">
        <div>
          <p className="text-sm font-medium text-white/70">
            {product.category === "credito" ? "Crédito" : product.category === "seguro" ? "Seguro" : "Servicio"}
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">{product.description}</p>

          {product.audience && (
            <p className="mt-4 max-w-xl text-white/70">
              <span className="font-medium text-white">¿A quién va dirigido? </span>
              <Pending value={product.audience} />
            </p>
          )}

          <div className="mt-8">
            <WhatsAppButton message={product.cta.whatsappMessage} productSlug={product.slug}>
              {product.cta.label}
            </WhatsAppButton>
          </div>
        </div>

        {product.image && (
          <div className="overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] ring-1 ring-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </Container>
    </section>
  );
}
