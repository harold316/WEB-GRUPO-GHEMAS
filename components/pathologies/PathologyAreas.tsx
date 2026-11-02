import Link from "next/link";
import { PathologyCard } from "@/components/cards/PathologyCard";
import { areasPatologias, patologias } from "@/data/patologias";
import type { Patologia } from "@/types";

export function PathologyAreas() {
  return (
    <div className="space-y-10">
      {areasPatologias.map((area) => {
        const areaPatologias = area.patologiaIds
          .map((id) => patologias.find((patologia) => patologia.id === id))
          .filter((patologia): patologia is Patologia => Boolean(patologia));
        const enfermedadesAdicionales = area.enfermedades.filter((enfermedad) => {
          const ficha = enfermedad.slug
            ? patologias.find((patologia) => patologia.slug === enfermedad.slug)
            : undefined;
          return (
            !ficha ||
            ficha.nombre.toLocaleLowerCase() !== enfermedad.nombre.toLocaleLowerCase()
          );
        });

        return (
          <section key={area.titulo}>
            <h2 className="mb-5 font-serif text-2xl text-ink sm:text-3xl">
              {area.titulo}
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {areaPatologias.map((patologia) => (
                <PathologyCard key={patologia.id} patologia={patologia} />
              ))}
            </div>
            {enfermedadesAdicionales.length > 0 ? (
              <div className="mt-5">
                <h3 className="text-sm font-semibold text-ink">
                  Otros motivos de consulta en esta área
                </h3>
                <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-muted">
                  {enfermedadesAdicionales.map((enfermedad) => (
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
              </div>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
