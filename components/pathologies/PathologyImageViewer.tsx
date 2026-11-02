"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Minus, Plus, RotateCcw, X } from "lucide-react";

export function PathologyImageViewer({
  src,
  alt,
  children,
  className,
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const viewportRef = useRef<HTMLDivElement>(null);
  const dragOrigin = useRef<{
    x: number;
    y: number;
    offsetX: number;
    offsetY: number;
  } | null>(null);

  const changeZoom = (amount: number) => {
    const next = Math.min(3, Math.max(1, Number((zoom + amount).toFixed(2))));
    setZoom(next);
    if (next === 1) setOffset({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={className ?? "block w-full cursor-zoom-in text-left"}
        aria-label={`Ampliar imagen: ${alt}`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => {
          setZoom(1);
          setOffset({ x: 0, y: 0 });
          setIsOpen(true);
        }}
      >
        {children}
      </button>
      {isOpen
        ? createPortal(
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <button
            type="button"
            className="absolute right-4 top-4 z-110 flex h-14 w-14 items-center justify-center rounded-full border-2 border-slate-900 bg-white text-slate-950 shadow-2xl transition hover:scale-105 hover:bg-slate-100 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Cerrar imagen ampliada"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-8 w-8" strokeWidth={3} aria-hidden="true" />
          </button>
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            className="relative flex max-h-[94vh] max-w-full flex-col items-center justify-center overflow-hidden p-8"
            onWheel={(event) => {
              event.preventDefault();
              changeZoom(event.deltaY < 0 ? 0.15 : -0.15);
            }}
          >
            <div
              ref={viewportRef}
              className="relative h-[72vh] w-[82vw] shrink-0 overflow-hidden rounded-lg"
              style={{
                cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
                touchAction: zoom > 1 ? "none" : "auto",
              }}
              onPointerDown={(event) => {
                if (zoom <= 1 || !viewportRef.current) return;
                dragOrigin.current = {
                  x: event.clientX,
                  y: event.clientY,
                  offsetX: offset.x,
                  offsetY: offset.y,
                };
                event.currentTarget.setPointerCapture(event.pointerId);
                setIsDragging(true);
              }}
              onPointerMove={(event) => {
                if (!dragOrigin.current || !viewportRef.current) return;
                event.preventDefault();
                const maxX = (viewportRef.current.clientWidth * (zoom - 1)) / 2;
                const maxY = (viewportRef.current.clientHeight * (zoom - 1)) / 2;
                setOffset({
                  x: Math.min(maxX, Math.max(-maxX, dragOrigin.current.offsetX + event.clientX - dragOrigin.current.x)),
                  y: Math.min(maxY, Math.max(-maxY, dragOrigin.current.offsetY + event.clientY - dragOrigin.current.y)),
                });
              }}
              onPointerUp={(event) => {
                dragOrigin.current = null;
                setIsDragging(false);
                if (event.currentTarget.hasPointerCapture(event.pointerId)) {
                  event.currentTarget.releasePointerCapture(event.pointerId);
                }
              }}
              onPointerCancel={() => {
                dragOrigin.current = null;
                setIsDragging(false);
              }}
            >
              <Image
                src={src}
                alt={alt}
                sizes="100vw"
                fill
                draggable={false}
                style={{
                  transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})`,
                  backfaceVisibility: "hidden",
                  willChange: "transform",
                }}
                className="origin-center object-contain shadow-2xl"
                priority
              />
            </div>
            <div className="sticky bottom-0 z-10 mt-4 flex items-center gap-3 rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-950 shadow-xl">
              <button
                type="button"
                className="rounded-full p-2 text-slate-950 transition hover:bg-slate-200 disabled:opacity-50"
                aria-label="Alejar imagen"
                onClick={() => changeZoom(-0.25)}
                disabled={zoom <= 1}
              >
                <Minus className="h-6 w-6" strokeWidth={2.75} aria-hidden="true" />
              </button>
              <span className="min-w-16 text-center text-base font-bold tabular-nums text-slate-950" aria-live="polite">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                className="rounded-full p-2 text-slate-950 transition hover:bg-slate-200 disabled:opacity-50"
                aria-label="Acercar imagen"
                onClick={() => changeZoom(0.25)}
                disabled={zoom >= 3}
              >
                <Plus className="h-6 w-6" strokeWidth={2.75} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="rounded-full p-2 text-slate-950 transition hover:bg-slate-200"
                aria-label="Restablecer zoom"
                onClick={() => {
                  setZoom(1);
                  setOffset({ x: 0, y: 0 });
                }}
              >
                <RotateCcw className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>,
        document.body,
      )
        : null}
    </>
  );
}
