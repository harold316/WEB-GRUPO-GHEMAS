import Link from "next/link";
import { MedicalIcon } from "@/components/ui/MedicalIcon";
import { Card } from "@/components/ui/Card";
import type { Estudio } from "@/types";

export function StudyCard({ estudio }: { estudio: Estudio }) {
  return (
    <Card className="flex h-full flex-col">
      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-mint text-brand">
        <MedicalIcon name={estudio.icono} className="h-5 w-5" />
      </span>
      <h3 className="font-serif text-xl text-ink">{estudio.nombre}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {estudio.resumen}
      </p>
      <Link
        href={`/estudios/${estudio.slug}`}
        className="mt-5 text-sm font-semibold text-brand"
      >
        Ver procedimiento
      </Link>
    </Card>
  );
}
