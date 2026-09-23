"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const MIN = 1;
const MAX = 4;
const ZOOM_DOBLE = 2.6;

function limitar(valor: number, min: number, max: number) {
  return Math.min(max, Math.max(min, valor));
}

function distancia(a: Touch, b: Touch) {
  return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
}

export function PhotoViewer({ src, alt }: { src: string; alt: string }) {
  const marco = useRef<HTMLDivElement>(null);
  const [escala, setEscala] = useState(1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const estado = useRef({
    escala: 1,
    x: 0,
    y: 0,
    arrastre: false,
    lastX: 0,
    lastY: 0,
    pellizco: 0,
    escalaPellizco: 1,
    ultimoToque: 0,
  });

  function aplicar(nextEscala: number, nextX: number, nextY: number) {
    const escalaNueva = limitar(nextEscala, MIN, MAX);
    const xNueva = escalaNueva === MIN ? 0 : nextX;
    const yNueva = escalaNueva === MIN ? 0 : nextY;
    estado.current.escala = escalaNueva;
    estado.current.x = xNueva;
    estado.current.y = yNueva;
    setEscala(escalaNueva);
    setX(xNueva);
    setY(yNueva);
  }

  useEffect(() => {
    const nodo = marco.current;
    if (!nodo) return;

    function onWheel(event: WheelEvent) {
      event.preventDefault();
      const factor = event.deltaY > 0 ? 0.9 : 1.12;
      aplicar(estado.current.escala * factor, estado.current.x, estado.current.y);
    }

    nodo.addEventListener("wheel", onWheel, { passive: false });
    return () => nodo.removeEventListener("wheel", onWheel);
  }, []);

  function onPointerDown(event: React.PointerEvent) {
    if (event.pointerType === "touch") return;
    if (estado.current.escala <= MIN) return;
    estado.current.arrastre = true;
    estado.current.lastX = event.clientX;
    estado.current.lastY = event.clientY;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: React.PointerEvent) {
    if (!estado.current.arrastre) return;
    aplicar(
      estado.current.escala,
      estado.current.x + event.clientX - estado.current.lastX,
      estado.current.y + event.clientY - estado.current.lastY,
    );
    estado.current.lastX = event.clientX;
    estado.current.lastY = event.clientY;
  }

  function onPointerUp() {
    estado.current.arrastre = false;
  }

  function onDoubleClick(event: React.MouseEvent) {
    event.stopPropagation();
    if (estado.current.escala > MIN) {
      aplicar(1, 0, 0);
      return;
    }
    aplicar(ZOOM_DOBLE, 0, 0);
  }

  function onTouchStart(event: React.TouchEvent) {
    if (event.touches.length === 2) {
      estado.current.pellizco = distancia(event.touches[0], event.touches[1]);
      estado.current.escalaPellizco = estado.current.escala;
      return;
    }
    if (event.touches.length === 1) {
      const ahora = Date.now();
      if (ahora - estado.current.ultimoToque < 280) {
        event.preventDefault();
        if (estado.current.escala > MIN) aplicar(1, 0, 0);
        else aplicar(ZOOM_DOBLE, 0, 0);
        estado.current.ultimoToque = 0;
        return;
      }
      estado.current.ultimoToque = ahora;
      estado.current.arrastre = estado.current.escala > MIN;
      estado.current.lastX = event.touches[0].clientX;
      estado.current.lastY = event.touches[0].clientY;
    }
  }

  function onTouchMove(event: React.TouchEvent) {
    if (event.touches.length === 2) {
      event.preventDefault();
      const actual = distancia(event.touches[0], event.touches[1]);
      if (estado.current.pellizco <= 0) return;
      aplicar(
        estado.current.escalaPellizco * (actual / estado.current.pellizco),
        estado.current.x,
        estado.current.y,
      );
      return;
    }
    if (event.touches.length === 1 && estado.current.arrastre) {
      event.preventDefault();
      aplicar(
        estado.current.escala,
        estado.current.x + event.touches[0].clientX - estado.current.lastX,
        estado.current.y + event.touches[0].clientY - estado.current.lastY,
      );
      estado.current.lastX = event.touches[0].clientX;
      estado.current.lastY = event.touches[0].clientY;
    }
  }

  function onTouchEnd(event: React.TouchEvent) {
    if (event.touches.length < 2) estado.current.pellizco = 0;
    if (event.touches.length === 0) estado.current.arrastre = false;
  }

  return (
    <div
      ref={marco}
      className="relative h-[min(88vh,900px)] w-[min(92vw,900px)] touch-none overflow-hidden"
      onClick={(event) => event.stopPropagation()}
      onDoubleClick={onDoubleClick}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ cursor: escala > 1 ? "grab" : "zoom-in" }}
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${x}px, ${y}px) scale(${escala})`,
          transition: estado.current.arrastre ? "none" : "transform 160ms ease-out",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          draggable={false}
          className="object-contain select-none"
          sizes="92vw"
          priority
        />
      </div>
    </div>
  );
}
