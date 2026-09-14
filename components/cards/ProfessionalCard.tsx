import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { fullProfessionalName } from "@/lib/utils";
import type { Profesional } from "@/types";

export function ProfessionalCard({ profesional }: { profesional: Profesional }) {
  const name = fullProfessionalName(profesional);

  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      <div className="relative aspect-[4/3] bg-mint">
        <Image
          src={profesional.foto}
          alt={`Fotografía de ${name}`}
          fill
          unoptimized
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        {profesional.esEjemplo ? (
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
            Dato de ejemplo
          </p>
        ) : null}
        <h3 className="mt-1 font-serif text-xl text-ink">{name}</h3>
        <p className="text-sm text-ink-muted">{profesional.especialidad}</p>
        {profesional.MN ? (
          <p className="mt-1 text-sm text-ink-muted">MN {profesional.MN}</p>
        ) : null}
        {profesional.MP ? (
          <p className="mt-1 text-sm text-ink-muted">MP {profesional.MP}</p>
        ) : null}
        {profesional.celular ? (
          <p className="mt-1 text-sm text-ink-muted">
            Celular:{" "}
            <a href={`tel:${profesional.celular.replace(/\D/g, "")}`} className="font-medium text-brand">
              {profesional.celular}
            </a>
          </p>
        ) : null}
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-muted">
          {profesional.bio}
        </p>
        <Link
          href={`/profesionales/${profesional.slug}`}
          className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-brand"
        >
          Ver perfil
        </Link>
      </div>
    </Card>
  );
}
