import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PathologyIcon } from "@/components/icons/PathologyIcons";
import { Card } from "@/components/ui/Card";
import type { Patologia } from "@/types";

export function PathologyCard({ patologia }: { patologia: Patologia }) {
  return (
    <Card className="flex h-full flex-col">
      <PathologyIcon id={patologia.id} />
      <h3 className="mt-4 font-serif text-xl text-ink">{patologia.nombre}</h3>
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
