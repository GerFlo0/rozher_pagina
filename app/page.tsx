import { HeroSlider } from "@/components/sections/HeroSlider";
import { WhyRozher } from "@/components/sections/WhyRozher";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Container } from "@/components/shared/Container";
import { getFeaturedProducts } from "@/lib/products/data";

export default function HomePage() {
  const featured = getFeaturedProducts();

  return (
    <>
      <HeroSlider />

      <Container className="py-16 sm:py-20 lg:py-24">
        <h2 className="text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
          Productos destacados
        </h2>
        <div className="mt-10">
          <ProductGrid products={featured} />
        </div>
      </Container>

      <WhyRozher />
      <HowItWorks />
      <TrustSection />
      <CTASection />
    </>
  );
}
