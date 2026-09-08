/**
 * Capa central de eventos. Un solo punto de definición evita que cada
 * componente invente su propio nombre de evento o payload.
 * Implementación real (GA4 / Plausible / etc.) se conecta en trackEvent().
 */
export type AnalyticsEvent =
  | { name: "page_view"; path: string }
  | { name: "product_view"; productSlug: string }
  | { name: "cta_click"; intent: "info" | "consideration" | "conversion"; label: string; productSlug?: string }
  | { name: "whatsapp_click"; productSlug?: string }
  | { name: "phone_click" }
  | { name: "email_click" }
  | { name: "faq_open"; question: string; productSlug?: string }
  | { name: "form_start"; productSlug?: string }
  | { name: "form_submit"; productSlug?: string };

export function trackEvent(event: AnalyticsEvent) {
  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", event);
    return;
  }
  // TODO: conectar GA4 / Plausible / CRM cuando se defina el proveedor (Fase 4).
}
