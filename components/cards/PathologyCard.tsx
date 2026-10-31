import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PathologyIcon } from "@/components/icons/PathologyIcons";
import { PathologyImageViewer } from "@/components/pathologies/PathologyImageViewer";
import type { Patologia } from "@/types";

export function PathologyCard({ patologia }: { patologia: Patologia }) {
  const illustration = `/images/patologias/${patologia.id}.png`;
  const illustrationAlt = `Ilustracion educativa de ${patologia.nombre}`;

  return (
    <article className="group relative flex h-full min-h-[200px] overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-5 shadow-[0_8px_30px_rgba(17,124,112,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-line dark:bg-surface">
      <Link
        href={`/patologias/${patologia.slug}`}
        aria-label={`Ver ficha de ${patologia.nombre}`}
        className="absolute inset-0 z-10 rounded-[1.75rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      />
      <div className="relative z-0 flex min-w-0 flex-1 flex-col justify-between pr-2">
        <div>
          <PathologyIcon id={patologia.id} />
          <h3 className="mt-3 font-serif text-xl leading-snug text-ink">
            {patologia.nombre}
          </h3>
          <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-ink-muted">
            {patologia.resumen}
          </p>
        </div>
        <span className="mt-4 inline-flex min-h-10 items-center gap-1 text-sm font-semibold text-[#117C70] group-hover:text-brand-dark">
          Ver ficha
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
      <div className="relative z-20 w-[42%] max-w-[168px] shrink-0 self-center sm:w-[46%]">
        <PathologyImageViewer
          src={illustration}
          alt={illustrationAlt}
          className="block w-full cursor-zoom-in rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <div className="relative aspect-square overflow-hidden rounded-full shadow-[0_10px_24px_rgba(17,124,112,0.18)] ring-4 ring-white dark:ring-surface">
            <Image
              src={illustration}
              alt={illustrationAlt}
              fill
              className="object-cover"
              sizes="168px"
            />
          </div>
        </PathologyImageViewer>
      </div>
    </article>
  );
}
