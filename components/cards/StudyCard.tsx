import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Estudio } from "@/types";

const visuals: Record<string, { tone: "dark" | "light" }> = {
  hemostasia: { tone: "dark" },
  frotis: { tone: "light" },
  "puncion-medula": { tone: "dark" },
  "biopsia-medula": { tone: "light" },
};

function StudyGlyph({ name }: { name: Estudio["icono"] }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "shield" ? <path d="M12 3 5 7v6c0 5 7 8 7 8s7-3 7-8V7z" /> : null}
      {name === "microscope" ? (
        <>
          <circle cx="11" cy="8" r="3" />
          <path d="M14 11 18 17M8 21h10M11 11v10" />
        </>
      ) : null}
      {name === "scan" ? (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      ) : null}
      {name === "bone" ? (
        <>
          <path d="M7 8c-2 0-3 1.5-3 3s1 3 3 3M17 8c2 0 3 1.5 3 3s-1 3-3 3M7 11h10" />
        </>
      ) : null}
    </svg>
  );
}

export function StudyCard({ estudio }: { estudio: Estudio }) {
  const tone = visuals[estudio.id]?.tone ?? "light";
  const dark = tone === "dark";
  const destacada = estudio.id === "puncion-medula";

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.75rem] transition-all duration-300 hover:-translate-y-1 ${
        destacada
          ? "min-h-[340px] shadow-[0_18px_44px_rgba(17,124,112,0.28)] ring-2 ring-[#117C70]/45 hover:shadow-[0_22px_50px_rgba(17,124,112,0.34)] md:col-span-2"
          : "min-h-[230px] shadow-[0_10px_32px_rgba(17,124,112,0.12)] hover:shadow-lg"
      }`}
    >
      <Image
        src={`/images/estudios/${estudio.id}.png`}
        alt={
          estudio.id === "hemostasia"
            ? `CoaguChek Pro II, ${estudio.nombre}`
            : `Ilustración educativa de ${estudio.nombre}`
        }
        fill
        unoptimized={estudio.id === "hemostasia"}
        className={
          estudio.id === "hemostasia"
            ? "object-contain object-right bg-white"
            : dark
              ? "object-cover object-right"
              : "object-cover object-[70%_center]"
        }
        sizes={destacada ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
      />
      <div
        className={
          dark
            ? "absolute inset-0 bg-gradient-to-r from-[#0b3d38]/92 via-[#0b3d38]/70 to-transparent"
            : "absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/25 dark:from-surface dark:via-surface/85 dark:to-transparent"
        }
      />
      <div
        className={`relative z-10 flex h-full flex-col justify-between ${
          destacada
            ? "min-h-[340px] max-w-[62%] p-6 sm:p-8"
            : "min-h-[230px] max-w-[58%] p-5 sm:p-6"
        }`}
      >
        <div>
          <span
            className={`mb-3 inline-flex items-center justify-center rounded-full ${
              destacada ? "h-12 w-12" : "h-9 w-9"
            } ${dark ? "bg-white/15 text-white" : "bg-[#117C70]/12 text-[#117C70]"}`}
          >
            <StudyGlyph name={estudio.icono} />
          </span>
          <h3
            className={`font-serif leading-snug ${
              destacada ? "text-2xl sm:text-3xl" : "text-xl"
            } ${dark ? "text-white" : "text-ink"}`}
          >
            {estudio.nombre}
          </h3>
          <p
            className={`mt-2 leading-relaxed ${
              destacada ? "line-clamp-4 text-base" : "line-clamp-3 text-sm"
            } ${dark ? "text-white/85" : "text-ink-muted"}`}
          >
            {estudio.resumen}
          </p>
        </div>
        <Link
          href={`/estudios/${estudio.slug}`}
          className={`mt-4 inline-flex min-h-10 items-center gap-1 font-semibold ${
            destacada ? "text-base" : "text-sm"
          } ${dark ? "text-white" : "text-[#117C70]"}`}
        >
          Ver procedimiento
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
