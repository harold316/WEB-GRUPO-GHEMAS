import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ProfessionalCard } from "@/components/cards/ProfessionalCard";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { profesionales } from "@/data/profesionales";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Nuestro equipo",
  description:
    "Conocé al equipo de Hematología de Grupo Ghemas.",
  path: "/profesionales",
});

export default function ProfesionalesPage() {
  return (
    <>
      <PageHero
        eyebrow="Especialistas"
        title="Nuestro equipo"
        description="Profesionales de Hematología de Grupo Ghemas."
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
