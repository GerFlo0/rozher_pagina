"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { leadSchema, type LeadInput } from "@/lib/validation/schemas";
import { trackEvent } from "@/lib/analytics/events";
import { Container } from "@/components/shared/Container";

export function LeadForm({ productSlug, productName }: { productSlug: string; productName: string }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [startedTracked, setStartedTracked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: { productSlug, name: "", phone: "", email: "", comments: "" },
  });

  const handleFocusStart = () => {
    if (!startedTracked) {
      trackEvent({ name: "form_start", productSlug });
      setStartedTracked(true);
    }
  };

  const onSubmit = async (data: LeadInput) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request-failed");
      trackEvent({ name: "form_submit", productSlug });
      setStatus("success");
      reset({ productSlug, name: "", phone: "", email: "", comments: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <Container className="max-w-xl py-16 text-center">
        <h2 className="text-2xl font-semibold text-[var(--color-ink)]">
          Recibimos tu solicitud
        </h2>
        <p className="mt-3 text-[var(--color-ink-soft)]">
          Un asesor de Rozher Seguros te contactará en breve para hablar sobre{" "}
          {productName}.
        </p>
      </Container>
    );
  }

  return (
    <Container className="max-w-xl py-16">
      <h2 className="text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
        Solicita información
      </h2>
      <p className="mt-2 text-[var(--color-ink-soft)]">
        Completa tus datos y un asesor te contacta. Solo pedimos lo esencial.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} onFocus={handleFocusStart} className="mt-8 space-y-5" noValidate>
        <input type="hidden" {...register("productSlug")} />

        <Field label="Nombre completo" error={errors.name?.message}>
          <input
            {...register("name")}
            type="text"
            autoComplete="name"
            className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] px-4 py-3 text-[var(--color-ink)] outline-none focus:border-[var(--color-primary)]"
          />
        </Field>

        <Field label="Teléfono" error={errors.phone?.message}>
          <input
            {...register("phone")}
            type="tel"
            autoComplete="tel"
            className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] px-4 py-3 text-[var(--color-ink)] outline-none focus:border-[var(--color-primary)]"
          />
        </Field>

        <Field label="Correo (opcional)" error={errors.email?.message}>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] px-4 py-3 text-[var(--color-ink)] outline-none focus:border-[var(--color-primary)]"
          />
        </Field>

        <Field label="Comentarios (opcional)" error={errors.comments?.message}>
          <textarea
            {...register("comments")}
            rows={3}
            className="w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] px-4 py-3 text-[var(--color-ink)] outline-none focus:border-[var(--color-primary)]"
          />
        </Field>

        {status === "error" && (
          <p className="text-sm text-[var(--color-pending)]">
            No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[var(--color-primary-dark)] disabled:opacity-60"
        >
          {isSubmitting ? "Enviando…" : "Enviar solicitud"}
        </button>
      </form>
    </Container>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[var(--color-ink)]">{label}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-[var(--color-pending)]">{error}</span>}
    </label>
  );
}
