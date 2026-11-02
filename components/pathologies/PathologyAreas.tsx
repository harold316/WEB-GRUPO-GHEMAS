import Link from "next/link";
import { areasPatologias } from "@/data/patologias";

export function PathologyAreas() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {areasPatologias.map((area) => (
        <section
          key={area.titulo}
          className="rounded-3xl border border-white/80 bg-white p-6 shadow-[0_8px_30px_rgba(17,124,112,0.08)] dark:border-line dark:bg-surface"
        >
          <h2 className="font-serif text-2xl text-ink">{area.titulo}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-ink-muted">
            {area.enfermedades.map((enfermedad) => (
              <li key={enfermedad.nombre}>
                {enfermedad.slug ? (
                  <Link
                    href={`/patologias/${enfermedad.slug}`}
                    className="underline decoration-brand/40 underline-offset-4 hover:text-brand"
                  >
                    {enfermedad.nombre}
                  </Link>
                ) : (
                  enfermedad.nombre
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
