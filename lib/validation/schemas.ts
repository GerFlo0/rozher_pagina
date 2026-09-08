import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre completo."),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\s-]{10,15}$/, "Escribe un teléfono válido (10 dígitos)."),
  email: z.string().trim().email("Escribe un correo válido.").optional().or(z.literal("")),
  productSlug: z.string().min(1),
  comments: z.string().trim().max(500).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
