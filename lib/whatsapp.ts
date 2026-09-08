const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

/**
 * Construye un link de WhatsApp con mensaje contextual por producto.
 * El número real se define por variable de entorno (nunca hardcodeado).
 */
export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  if (!WHATSAPP_NUMBER) {
    // Sin número configurado aún: se deja visible en desarrollo.
    return `https://wa.me/?text=${encoded}`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
