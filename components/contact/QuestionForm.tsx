"use client";

import { FormEvent, useState } from "react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MedicalNotice } from "@/components/ui/MedicalNotice";

export function QuestionForm() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = `Hola, quiero enviar una pregunta o sugerencia de tema para el blog. Nombre: ${nombre || "No informado"}. Mensaje: ${mensaje}`;
    window.open(getWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-line bg-surface p-6 shadow-card"
    >
      <h3 className="font-serif text-2xl text-ink">¿Tenés alguna duda?</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        Podés enviarnos tu pregunta o sugerirnos un tema para nuestros próximos
        contenidos.
      </p>
      <label className="mt-5 block text-sm font-medium text-ink" htmlFor="nombre">
        Nombre
      </label>
      <input
        id="nombre"
        name="nombre"
        autoComplete="name"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="mt-1 min-h-12 w-full rounded-xl border border-line px-3 text-base text-ink"
      />
      <label className="mt-4 block text-sm font-medium text-ink" htmlFor="pregunta">
        Pregunta o tema sugerido
      </label>
      <textarea
        id="pregunta"
        name="pregunta"
        required
        rows={4}
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        className="mt-1 w-full rounded-xl border border-line px-3 py-3 text-base text-ink"
      />
      <p className="mt-3 text-xs leading-relaxed text-ink-muted">
        Este formulario no reemplaza una consulta médica y no debe utilizarse
        para situaciones de urgencia. No envíes información clínica sensible.
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-button px-5 text-sm font-semibold text-white"
        >
          Enviar por WhatsApp
        </button>
        <WhatsAppButton variant="secondary" label="O escribir directo" />
      </div>
      <div className="mt-4">
        <MedicalNotice variant="urgent" />
      </div>
    </form>
  );
}
