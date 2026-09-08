# Rozher Seguros — Plataforma web

Proyecto Next.js (App Router) + Tailwind CSS v4. Ver
`rozher-plan-arquitectura.md` para el detalle completo de arquitectura,
sitemap, design system y fases.

## Requisitos
- Node.js 18.18+ (recomendado 20 LTS)

## Empezar

```bash
npm install
cp .env.example .env.local   # y define NEXT_PUBLIC_WHATSAPP_NUMBER
npm run dev
```

Abre http://localhost:3000

## Scripts
- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción (verificado sin errores/warnings)
- `npm run start` — sirve el build de producción
- `npm run lint` — ESLint

## Dónde está cada cosa
- `app/` — rutas (una carpeta por página, `productos/[slug]` es la plantilla de producto)
- `components/` — layout, sections (secciones de Home), product (piezas de producto), forms, shared
- `lib/products/data.ts` — **única fuente de productos**. Agregar un producto no requiere tocar rutas.
- `lib/products/pending.ts` — marcador `[INFORMACIÓN PENDIENTE]`; ver `<Pending />` en `components/shared`
- `lib/analytics/events.ts` — definición central de eventos (page_view, cta_click, whatsapp_click, etc.)
- `lib/whatsapp.ts` — construcción de links de WhatsApp con mensaje contextual
- `app/api/leads/route.ts` — recepción de formulario (Fase 4: conectar a CRM/email/webhook real)

## Estado actual (Fase 0–1 del plan)
Todo el contenido del Crédito de Nómina IMSS que aún no ha sido confirmado
por Rozher se muestra visiblemente como "Información pendiente de
confirmar" — nunca como dato inventado. Ver la sección 10 de
`rozher-plan-arquitectura.md` para la lista exacta de lo que falta.
