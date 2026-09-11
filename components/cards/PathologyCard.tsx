import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MedicalIcon } from "@/components/ui/MedicalIcon";
import { Card } from "@/components/ui/Card";
import type { Patologia } from "@/types";

export function PathologyCard({ patologia }: { patologia: Patologia }) {
  return (
    <Card className="flex h-full flex-col">
      <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-mint text-brand">
        <MedicalIcon name={patologia.icono} className="h-5 w-5" />
      </span>
      <h3 className="font-serif text-xl text-ink">{patologia.nombre}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {patologia.resumen}
      </p>
      <Link
        href={`/patologias/${patologia.slug}`}
        className="mt-5 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-brand hover:text-brand-dark"
      >
        Ver ficha
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Card>
  );
}
