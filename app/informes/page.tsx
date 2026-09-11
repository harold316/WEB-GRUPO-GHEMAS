import { Download } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { informes } from "@/data/informes";
import { pageMetadata } from "@/lib/seo";
import type { RecursoArchivo } from "@/types";

export const metadata = pageMetadata({
  title: "Informes y formularios",
  description:
    "Formularios e indicaciones para pacientes y profesionales. No se publican resultados médicos individuales.",
  path: "/informes",
});

function ResourceList({ items }: { items: RecursoArchivo[] }) {
  return (
    <div className="mt-6 grid gap-4">
      {items.map((item) => (
        <Card key={item.id} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">
              {item.categoria} · {item.tipo}
            </p>
            <h3 className="mt-1 font-serif text-xl text-ink">{item.nombre}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {item.descripcion}
            </p>
          </div>
          {item.disponible ? (
            <a
              href={item.href}
              download
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-button px-5 text-sm font-semibold text-white"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Descargar
            </a>
          ) : (
            <span className="inline-flex min-h-12 shrink-0 items-center rounded-full border border-line px-5 text-sm text-ink-muted">
              Próximamente
            </span>
          )}
        </Card>
      ))}
    </div>
  );
}

export default function InformesPage() {
  const pacientes = informes.filter((item) => item.audiencia === "pacientes");
  const profesionales = informes.filter((item) => item.audiencia === "profesionales");

  return (
    <>
      <PageHero
        eyebrow="Documentación"
        title="Informes y formularios"
        description="Archivos de ejemplo para pacientes y colegas. La arquitectura está lista para conectar un almacenamiento real. Los resultados individuales de pacientes no se publican aquí y requerirán autenticación."
      />
      <Section>
        <div className="rounded-3xl border border-line bg-mint/50 p-6 sm:p-8">
          <SectionHeading title="Pacientes" description="Formularios, indicaciones, documentación e información general." />
          <ResourceList items={pacientes} />
        </div>
        <div className="mt-10 rounded-3xl border border-line bg-surface p-6 sm:p-8">
          <SectionHeading
            title="Profesionales"
            description="Formularios profesionales, documentación y material de interés."
          />
          <ResourceList items={profesionales} />
        </div>
        <div className="mt-10">
          <MedicalNotice />
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
