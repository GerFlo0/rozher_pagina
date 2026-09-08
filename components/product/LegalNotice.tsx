import { Container } from "@/components/shared/Container";
import { Info } from "lucide-react";

/**
 * Aviso de transparencia al pie de la página de producto.
 * El texto de tasa/CAT y la mención de la institución otorgante están
 * pendientes de definición legal por parte de Rozher.
 */
export function LegalNotice() {
  return (
    <Container className="pb-16">
      <div className="flex items-start gap-3 rounded-[var(--radius-md)] bg-[var(--color-paper)] p-5 text-sm text-[var(--color-ink-soft)]">
        <Info size={18} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
        <p>
          Rozher Seguros es intermediario/asesor. El crédito es otorgado por una
          institución financiera con convenio con el IMSS; su otorgamiento está
          sujeto a la capacidad de crédito que determina el IMSS y a las
          condiciones de la institución otorgante. La información de tasa de
          interés y CAT, así como la identificación de la institución otorgante,
          está pendiente de confirmación por Rozher Seguros.
        </p>
      </div>
    </Container>
  );
}
