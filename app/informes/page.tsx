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

function ResourceList({
  items,
  audience,
}: {
  items: RecursoArchivo[];
  audience: "pacientes" | "profesionales";
}) {
  const styles =
    audience === "pacientes"
      ? {
          card: "border-l-4 border-l-emerald-500",
          category: "text-emerald-700 dark:text-emerald-300",
          button: "bg-emerald-700 hover:bg-emerald-800",
        }
      : {
          card: "border-l-4 border-l-blue-500",
          category: "text-blue-700 dark:text-blue-300",
          button: "bg-blue-700 hover:bg-blue-800",
        };

  return (
    <div className="mt-6 grid gap-4">
      {items.map((item) => (
        <Card
          key={item.id}
          className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ${styles.card}`}
        >
          <div>
            <p className={`text-xs font-semibold uppercase tracking-wider ${styles.category}`}>
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
              className={`inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-white transition-colors ${styles.button}`}
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
        description="Formularios, indicaciones y material de consulta para pacientes y profesionales. Los resultados individuales de pacientes no se publican aquí y requieren un canal privado."
      />
      <Section>
        <div className="rounded-3xl border border-emerald-200 border-t-4 border-t-emerald-500 bg-emerald-50/80 p-6 sm:p-8 dark:border-emerald-900 dark:border-t-emerald-500 dark:bg-emerald-950/20">
          <SectionHeading title="Pacientes" description="Formularios, indicaciones, documentación e información general." />
          <ResourceList items={pacientes} audience="pacientes" />
        </div>
        <div className="mt-10 rounded-3xl border border-blue-200 border-t-4 border-t-blue-500 bg-blue-50/80 p-6 sm:p-8 dark:border-blue-900 dark:border-t-blue-500 dark:bg-blue-950/20">
          <SectionHeading
            title="Profesionales"
            description="Formularios profesionales, documentación y material de interés."
          />
          <ResourceList items={profesionales} audience="profesionales" />
        </div>
        <div className="mt-10">
          <MedicalNotice />
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
