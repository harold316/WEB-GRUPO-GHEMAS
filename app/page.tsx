import { Hero, AttentionCards } from "@/components/home/Hero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { PathologyCard } from "@/components/cards/PathologyCard";
import { ProfessionalCard } from "@/components/cards/ProfessionalCard";
import { StudyCard } from "@/components/cards/StudyCard";
import { LocationCard } from "@/components/cards/LocationCard";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { Button } from "@/components/ui/Button";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { patologias } from "@/data/patologias";
import { profesionales } from "@/data/profesionales";
import { estudios } from "@/data/estudios";
import { sedes } from "@/data/sedes";
import { ScienceBackdrop } from "@/components/home/ScienceBackdrop";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hematología especializada",
  description:
    "Hematología especializada: diagnóstico, estudios y seguimiento. Solicitá turno por WhatsApp.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section className="bg-[#eef7f4] dark:bg-surface-muted">
        <SectionHeading
          eyebrow="El consultorio"
          title="Atención especializada"
          description="Un espacio pensado para explicar con calma, ordenar estudios y acompañar el seguimiento hematológico."
        />
        <div className="mt-10">
          <AttentionCards />
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-[#eef7f4] dark:bg-surface-muted">
        <ScienceBackdrop />
        <div className="relative">
        <SectionHeading
          eyebrow="Orientación"
          title="¿Qué patologías atendemos?"
          description="Información educativa sobre motivos frecuentes de consulta. No constituye un diagnóstico."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {patologias.slice(0, 6).map((item) => (
            <PathologyCard key={item.id} patologia={item} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/patologias" variant="secondary">
            Ver todas las patologías
          </Button>
        </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Equipo"
          title="Nuestro equipo"
          description="Perfiles de ejemplo, listos para reemplazar por los datos reales del grupo."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {profesionales.map((item) => (
            <ProfessionalCard key={item.id} profesional={item} />
          ))}
        </div>
      </Section>

      <Section className="bg-surface-muted">
        <SectionHeading
          eyebrow="Prácticas"
          title="Estudios y procedimientos"
          description="Fichas claras para comprender qué se solicita y cómo se realiza, cuando el equipo lo indica."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {estudios.map((item) => (
            <StudyCard key={item.id} estudio={item} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Agenda"
          title="¿Dónde atendemos?"
          description="Sedes de ejemplo. Las fechas y horarios se actualizan desde los datos, sin tocar la interfaz."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {sedes.map((item) => (
            <LocationCard key={item.id} sede={item} />
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <MedicalNotice />
      </Section>
      <CtaBanner />
    </>
  );
}
