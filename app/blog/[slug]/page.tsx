import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ShareButtons } from "@/components/ui/ShareButtons";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { articuloSlugs, getArticuloBySlug } from "@/data/blog";
import { pageMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return articuloSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getArticuloBySlug(slug);
  if (!item) return {};
  return pageMetadata({
    title: item.titulo,
    description: item.resumen,
    path: `/blog/${item.slug}`,
  });
}

export default async function ArticuloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getArticuloBySlug(slug);
  if (!item) notFound();
  const path = `/blog/${item.slug}`;

  return (
    <>
      <ArticleJsonLd
        title={item.titulo}
        description={item.resumen}
        date={item.fecha}
        url={`${siteConfig.url}${path}`}
      />
      <PageHero
        eyebrow={`${item.categoria} · ${formatDate(item.fecha)}`}
        title={item.titulo}
        description={item.resumen}
      />
      <Section>
        <article className="mx-auto max-w-3xl">
          <PlaceholderImage label={item.titulo} seed={item.slug} className="rounded-2xl" />
          <div className="mt-10 space-y-5 text-base leading-relaxed text-ink-muted">
            {item.contenido.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>
          <div className="mt-10">
            <h2 className="mb-4 font-serif text-2xl text-ink">Compartir</h2>
            <ShareButtons title={item.titulo} path={path} />
          </div>
          <div className="mt-10 space-y-4">
            <MedicalNotice />
            <MedicalNotice variant="urgent" />
          </div>
        </article>
      </Section>
      <CtaBanner />
    </>
  );
}
