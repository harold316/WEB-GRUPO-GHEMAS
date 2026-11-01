import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { PathologyImageViewer } from "@/components/pathologies/PathologyImageViewer";
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
  const studyFlyer =
    item.id === "puncion-medula"
      ? "/images/estudios/puncion-aspirado-medula-flyer.png"
      : item.id === "biopsia-medula"
        ? "/images/estudios/biopsia-medula-flyer.png"
        : item.id === "frotis"
          ? "/images/estudios/frotis-sangre-periferica-flyer.png"
          : item.id === "hemostasia"
            ? "/images/estudios/hemostasia-coagulacion-flyer.png"
            : null;

  return (
    <>
      <PageHero
        eyebrow="Estudios"
        title={item.nombre}
        description={item.resumen}
        backgroundImage={
          item.id === "hemostasia" ? "/images/estudios/hemostasia.png" : undefined
        }
        backgroundAlt={
          item.id === "hemostasia"
            ? "CoaguChek Pro II, equipo de estudios de coagulación"
            : undefined
        }
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          {studyFlyer ? (
            <div className="mb-10 overflow-hidden rounded-3xl border border-line bg-mint shadow-soft">
              <PathologyImageViewer
                src={studyFlyer}
                alt={`Información sobre ${item.nombre.toLowerCase()}`}
                className="block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Image
                  src={studyFlyer}
                  alt={`Información sobre ${item.nombre.toLowerCase()}`}
                  width={768}
                  height={768}
                  className="h-auto w-full"
                  priority
                />
              </PathologyImageViewer>
            </div>
          ) : null}
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
