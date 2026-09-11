import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ProfessionalCard } from "@/components/cards/ProfessionalCard";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { profesionales } from "@/data/profesionales";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Nuestro equipo",
  description:
    "Conocé al equipo de Hematología. Los perfiles actuales son de ejemplo y se reemplazan fácilmente.",
  path: "/profesionales",
});

export default function ProfesionalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Especialistas"
        title="Nuestro equipo"
        description="Tarjetas profesionales listas para cargar nombres, fotos y sedes reales."
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profesionales.map((item) => (
            <ProfessionalCard key={item.id} profesional={item} />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
