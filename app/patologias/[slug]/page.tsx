import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { PathologyIcon } from "@/components/icons/PathologyIcons";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { getPatologiaBySlug, patologiaSlugs } from "@/data/patologias";
import { pageMetadata } from "@/lib/seo";
import { getPathologyInquiryMessage } from "@/lib/whatsapp";
import { PathologyImageViewer } from "@/components/pathologies/PathologyImageViewer";

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
  const flyers = item.flyers ?? (item.flyer ? [item.flyer] : []);

  return (
    <>
      <PageHero eyebrow="Patologías" title={item.nombre} description={item.resumen} />
      <Section>
        <div className="mx-auto max-w-3xl">
          {flyers.length > 0 ? (
            flyers.map((flyer) => (
              <div
                key={flyer}
                className="relative mb-10 overflow-hidden rounded-3xl border border-line bg-mint shadow-soft"
              >
                <PathologyImageViewer
                  src={flyer}
                  alt={`Ampliar imagen informativa de ${item.nombre}`}
                >
                  <Image
                    src={flyer}
                    alt={`Información de ${item.nombre}`}
                    width={item.id === "alteraciones-coagulacion" ? 1116 : item.id === "trombosis-venosa-profunda" ? 860 : item.id === "anemia-ferropenica" ? 853 : item.id === "trombocitopenia" ? 1536 : flyer.endsWith(".jpeg") ? 1079 : item.id === "mieloma-multiple" ? 1079 : 666}
                    height={item.id === "alteraciones-coagulacion" ? 1280 : item.id === "trombosis-venosa-profunda" ? 1280 : item.id === "anemia-ferropenica" ? 1280 : item.id === "trombocitopenia" ? 1024 : flyer.endsWith(".jpeg") ? 760 : item.id === "mieloma-multiple" ? 760 : 1024}
                    className="h-auto w-full cursor-zoom-in"
                    priority={flyer === flyers[0]}
                  />
                </PathologyImageViewer>
              </div>
            ))
          ) : (
            <PathologyIcon id={item.id} className="mb-6 h-12 w-12" />
          )}
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
