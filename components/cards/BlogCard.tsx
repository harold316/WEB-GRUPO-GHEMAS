import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { formatDate } from "@/lib/utils";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { Articulo } from "@/types";

export function BlogCard({ articulo }: { articulo: Articulo }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden p-0">
      <PlaceholderImage label={articulo.categoria} seed={articulo.slug} />
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          {articulo.categoria} · {formatDate(articulo.fecha)}
        </p>
        <h3 className="mt-2 font-serif text-xl text-ink">{articulo.titulo}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {articulo.resumen}
        </p>
        <Link
          href={`/blog/${articulo.slug}`}
          className="mt-5 text-sm font-semibold text-brand"
        >
          Leer artículo
        </Link>
      </div>
    </Card>
  );
}
