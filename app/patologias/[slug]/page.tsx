import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { MedicalIcon } from "@/components/ui/MedicalIcon";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { getPatologiaBySlug, patologiaSlugs } from "@/data/patologias";
import { pageMetadata } from "@/lib/seo";
import { getPathologyInquiryMessage } from "@/lib/whatsapp";

export function generateStaticParams() {
  return patologiaSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPatologiaBySlug(slug);
  if (!item) return {};
  return pageMetadata({
    title: item.nombre,
    description: item.resumen,
    path: `/patologias/${item.slug}`,
  });
}

export default async function PatologiaDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPatologiaBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <PageHero eyebrow="Patologías" title={item.nombre} description={item.resumen} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mint text-brand">
            <MedicalIcon name={item.icono} className="h-6 w-6" />
          </span>
          <h2 className="font-serif text-2xl text-ink">¿Qué es?</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-muted">
            {item.descripcion}
          </p>

          <h2 className="mt-10 font-serif text-2xl text-ink">
            Síntomas o alteraciones frecuentes
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-muted">
            {item.sintomas.map((sintoma) => (
              <li key={sintoma}>{sintoma}</li>
            ))}
          </ul>

          <h2 className="mt-10 font-serif text-2xl text-ink">
            ¿Cuándo consultar a Hematología?
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-muted">
            {item.cuandoConsultar.map((motivo) => (
              <li key={motivo}>{motivo}</li>
            ))}
          </ul>

          <div className="mt-10 space-y-4">
            <MedicalNotice />
            <MedicalNotice variant="urgent" />
          </div>
        </div>
      </Section>
      <CtaBanner
        title="¿Necesitás una evaluación?"
        label="Solicitar evaluación por WhatsApp"
        message={getPathologyInquiryMessage(item.nombre)}
      />
    </>
  );
}
