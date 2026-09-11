import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { estudioSlugs, getEstudioBySlug } from "@/data/estudios";
import { pageMetadata } from "@/lib/seo";
import { getStudyInquiryMessage } from "@/lib/whatsapp";

export function generateStaticParams() {
  return estudioSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getEstudioBySlug(slug);
  if (!item) return {};
  return pageMetadata({
    title: item.nombre,
    description: item.resumen,
    path: `/estudios/${item.slug}`,
  });
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <section className="mt-8">
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <p className="mt-3 leading-relaxed text-ink-muted">{text}</p>
    </section>
  );
}

export default async function EstudioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getEstudioBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <PageHero eyebrow="Estudios" title={item.nombre} description={item.resumen} />
      <Section>
        <div className="mx-auto max-w-3xl">
          <Block title="¿Qué es?" text={item.queEs} />
          <Block title="¿Para qué se solicita?" text={item.paraQue} />
          <Block title="¿Cómo se realiza?" text={item.comoSeRealiza} />
          <Block title="¿Requiere preparación?" text={item.preparacion} />
          <Block title="¿Cuánto demora aproximadamente?" text={item.duracionAprox} />
          <Block title="¿Cómo se obtiene el resultado?" text={item.resultado} />
          <div className="mt-10 space-y-4">
            <MedicalNotice />
            <MedicalNotice variant="urgent" />
          </div>
        </div>
      </Section>
      <CtaBanner
        title="Consultar o solicitar turno"
        label="Consultar / solicitar turno"
        message={getStudyInquiryMessage(item.nombre)}
      />
    </>
  );
}
