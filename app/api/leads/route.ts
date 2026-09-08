import { NextRequest, NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation/schemas";

/**
 * Endpoint de recepción de leads. Fase 0/1: valida y responde OK.
 * Fase 4: aquí se conecta el envío real a email/CRM/webhook/n8n.
 * No se expone ninguna credencial en el cliente; cualquier integración
 * futura usa variables de entorno server-side (sin prefijo NEXT_PUBLIC_).
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Datos inválidos.", details: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // TODO (Fase 4): enviar a CRM/email/webhook. Placeholder intencional.
  console.log("[lead recibido]", parsed.data);

  return NextResponse.json({ ok: true });
}
