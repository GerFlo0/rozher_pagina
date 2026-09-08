import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary-dark)] pt-16 pb-8 text-white/90">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-4">
          <div>
            <p className="font-[var(--font-display)] text-lg font-semibold text-white">
              Rozher Seguros
            </p>
            <p className="mt-3 max-w-xs text-sm text-white/70">
              Asesoría en productos financieros y de seguros. Rozher Seguros es
              intermediario/asesor comercial; las condiciones de cada producto
              corresponden a la institución otorgante correspondiente.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Productos</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link href="/productos/credito-nomina-imss" className="hover:text-white">Crédito de Nómina IMSS</Link></li>
              <li><Link href="/productos" className="hover:text-white">Ver todos los créditos</Link></li>
              <li><Link href="/seguros" className="hover:text-white">Seguros</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Empresa</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link href="/nosotros" className="hover:text-white">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
              <li><Link href="/privacidad" className="hover:text-white">Aviso de privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-white">Términos y condiciones</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contacto directo</p>
            <div className="mt-3">
              <WhatsAppButton message="Hola, quiero información sobre los productos de Rozher Seguros." variant="solid">
                Escribir por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {year} Rozher Seguros. Todos los derechos reservados.</p>
          <p>Datos legales y regulatorios: información pendiente de confirmar.</p>
        </div>
      </Container>
    </footer>
  );
}
