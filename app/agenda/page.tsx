import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { LocationCard } from "@/components/cards/LocationCard";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { sedes } from "@/data/sedes";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Agenda y lugares de atención",
  description:
    "Sedes, días, horarios y próximas fechas. Confirmá tu turno por WhatsApp.",
  path: "/agenda",
});

export default function AgendaPage() {
  return (
    <>
      <PageHero
        eyebrow="Turnos"
        title="Agenda y lugares de atención"
        description="Las fechas y horarios se gestionan desde datos reemplazables, preparados para un CMS o API."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {sedes.map((sede) => (
            <LocationCard key={sede.id} sede={sede} />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
