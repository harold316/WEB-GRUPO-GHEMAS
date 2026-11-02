import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PathologyCard } from "@/components/cards/PathologyCard";
import { PathologyAreas } from "@/components/pathologies/PathologyAreas";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { areasPatologias, patologias } from "@/data/patologias";
import { ScienceBackdrop } from "@/components/home/ScienceBackdrop";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Patologías que atendemos",
  description:
    "Información educativa sobre patologías hematológicas frecuentes. No reemplaza una consulta médica.",
  path: "/patologias",
});

const patologiasEnAreas = new Set(
  areasPatologias.flatMap((area) => area.patologiaIds),
);
const otrasPatologias = patologias.filter((item) => !patologiasEnAreas.has(item.id));

export default function PatologiasPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultas frecuentes"
        title="Patologías que atendemos"
        description="Fichas introductorias para comprender motivos habituales de consulta. El diagnóstico siempre es médico."
      />
      <Section className="relative overflow-hidden bg-[#eef7f4] dark:bg-surface-muted">
        <ScienceBackdrop />
        <div className="relative">
          <PathologyAreas />
          {otrasPatologias.length > 0 ? (
            <section className="mt-12">
              <h2 className="mb-6 font-serif text-3xl text-ink">
                Otras patologías hematológicas
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {otrasPatologias.map((item) => (
                  <PathologyCard key={item.id} patologia={item} />
                ))}
              </div>
            </section>
          ) : null}
          <div className="mt-10 space-y-4">
            <MedicalNotice />
            <MedicalNotice variant="urgent" />
          </div>
        </div>
      </Section>
      <CtaBanner title="¿Necesitás una evaluación?" />
    </>
  );
}
