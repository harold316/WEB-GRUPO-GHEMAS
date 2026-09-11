import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { StudyCard } from "@/components/cards/StudyCard";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { estudios } from "@/data/estudios";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Estudios y procedimientos hematológicos",
  description:
    "Información general sobre estudios de coagulación, frotis y procedimientos de médula ósea.",
  path: "/estudios",
});

export default function EstudiosPage() {
  return (
    <>
      <PageHero
        eyebrow="Prácticas"
        title="Estudios y procedimientos hematológicos"
        description="Descripciones educativas. La indicación, la preparación y los plazos los confirma el equipo tratante."
      />
      <Section className="bg-[#eef7f4] dark:bg-surface-muted">
        <div className="grid gap-5 md:grid-cols-2">
          {estudios.map((item) => (
            <StudyCard key={item.id} estudio={item} />
          ))}
        </div>
        <div className="mt-10">
          <MedicalNotice />
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
