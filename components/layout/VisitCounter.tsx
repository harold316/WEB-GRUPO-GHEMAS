"use client";

import { useEffect, useState } from "react";

const SESION_KEY = "ghemas-visita-registrada";
const DIGITOS = 6;

function gruposReloj(total: number) {
  const padded = String(Math.max(0, total)).padStart(DIGITOS, "0").slice(-DIGITOS);
  return [padded.slice(0, 2), padded.slice(2, 4), padded.slice(4, 6)];
}

function Digito({ valor }: { valor: string }) {
  return (
    <span
      className="relative inline-flex h-10 w-7 items-center justify-center overflow-hidden rounded-md bg-gradient-to-b from-[#1c3330] to-[#0b1412] font-mono text-xl font-semibold leading-none text-aqua shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_4px_10px_rgba(0,0,0,0.35)] ring-1 ring-white/10"
      aria-hidden="true"
    >
      <span className="absolute inset-x-0 top-1/2 z-10 h-px bg-black/50" />
      <span className="absolute inset-x-0 top-0 h-1/2 bg-white/5" />
      {valor}
    </span>
  );
}

export function VisitCounter() {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    let cancelado = false;

    async function registrar() {
      const yaRegistrada = sessionStorage.getItem(SESION_KEY) === "1";
      const respuesta = await fetch("/api/visitas", {
        method: yaRegistrada ? "GET" : "POST",
        cache: "no-store",
      });
      const data = (await respuesta.json()) as { total?: number | null };
      if (!yaRegistrada && respuesta.ok) {
        sessionStorage.setItem(SESION_KEY, "1");
      }
      if (!cancelado && typeof data.total === "number") {
        setTotal(data.total);
      }
    }

    registrar().catch(() => {
      if (!cancelado) setTotal(null);
    });

    return () => {
      cancelado = true;
    };
  }, []);

  if (total === null) return null;

  const grupos = gruposReloj(total);

  return (
    <div
      className="flex flex-col items-center gap-1.5"
      aria-live="polite"
      aria-label={`Visitas: ${new Intl.NumberFormat("es-AR").format(total)}`}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-aqua/90">
        Visitas
      </p>
      <p className="flex items-center gap-1">
        {grupos.flatMap((grupo) => [grupo[0], grupo[1]]).map((digito, index) => (
          <Digito key={index} valor={digito} />
        ))}
      </p>
    </div>
  );
}
