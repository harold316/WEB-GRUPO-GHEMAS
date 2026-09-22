"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "lucide-react";

export function SedePhotoGallery({
  fotos,
  nombre,
}: {
  fotos: string[];
  nombre: string;
}) {
  const [abierta, setAbierta] = useState<number | null>(null);
  const [puedeCerrar, setPuedeCerrar] = useState(false);
  const [enCliente, setEnCliente] = useState(false);

  useEffect(() => {
    setEnCliente(true);
  }, []);

  useEffect(() => {
    if (abierta === null) {
      setPuedeCerrar(false);
      return;
    }

    const listo = window.setTimeout(() => setPuedeCerrar(true), 250);

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setAbierta(null);
      if (event.key === "ArrowRight") {
        setAbierta((actual) =>
          actual === null ? actual : (actual + 1) % fotos.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setAbierta((actual) =>
          actual === null ? actual : (actual - 1 + fotos.length) % fotos.length,
        );
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(listo);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [abierta, fotos.length]);

  function cerrar() {
    if (!puedeCerrar) return;
    setAbierta(null);
  }

  const visor =
    abierta !== null && enCliente
      ? createPortal(
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`Foto ampliada de ${nombre}`}
            onClick={cerrar}
          >
            <button
              type="button"
              onClick={cerrar}
              className="absolute right-4 top-4 rounded-full bg-white/95 p-2 text-ink shadow-soft"
              aria-label="Cerrar foto"
            >
              <X className="h-5 w-5" />
            </button>
            <div
              className="relative h-[min(88vh,900px)] w-[min(92vw,720px)]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={fotos[abierta]}
                alt={`Foto ampliada ${abierta + 1} de ${nombre}`}
                fill
                unoptimized
                className="object-contain"
                sizes="92vw"
                priority
              />
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {fotos.map((foto, index) => (
          <button
            key={foto}
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setAbierta(index);
            }}
            className="relative aspect-[3/4] overflow-hidden rounded-xl bg-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            aria-label={`Ampliar foto ${index + 1} de ${nombre}`}
          >
            <Image
              src={foto}
              alt={`Foto ${index + 1} de ${nombre}`}
              fill
              unoptimized
              className="object-cover"
              sizes="180px"
            />
          </button>
        ))}
      </div>
      {visor}
    </>
  );
}
