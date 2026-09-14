import { notFound } from "next/navigation";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { PhysicianJsonLd } from "@/components/seo/JsonLd";
import { getProfesionalBySlug, profesionalSlugs } from "@/data/profesionales";
import { getSedesByIds } from "@/data/sedes";
import { pageMetadata } from "@/lib/seo";
import { fullProfessionalName } from "@/lib/utils";
import { getProfessionalAppointmentMessage } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return profesionalSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getProfesionalBySlug(slug);
  if (!item) return {};
  const name = fullProfessionalName(item);
  return pageMetadata({
    title: name,
    description: `${item.especialidad}. ${item.bio}`,
    path: `/profesionales/${item.slug}`,
  });
}

export default async function ProfesionalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getProfesionalBySlug(slug);
  if (!item) notFound();
  const name = fullProfessionalName(item);
  const sedes = getSedesByIds(item.sedesIds);

  return (
    <>
      <PhysicianJsonLd name={name} url={`${siteConfig.url}/profesionales/${item.slug}`} />
      <PageHero eyebrow="Equipo" title={name} description={item.especialidad} />
      <Section>
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-mint">
              <Image
                src={item.foto}
                alt={`Fotografía de ${name}`}
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>
            {item.esEjemplo ? (
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-brand">
                Dato de ejemplo — reemplazar
              </p>
            ) : null}
            {item.MN ? (
              <p className="mt-3 text-sm text-ink-muted">MN {item.MN}</p>
            ) : null}
            {item.celular ? (
              <p className="mt-3 text-sm text-ink-muted">
                Celular:{" "}
                <a href={`tel:${item.celular.replace(/\D/g, "")}`} className="font-medium text-brand">
                  {item.celular}
                </a>
              </p>
            ) : null}
          </div>
          <div className="space-y-8">
            <section>
              <h2 className="font-serif text-2xl text-ink">Presentación</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{item.bio}</p>
            </section>
            <section>
              <h2 className="font-serif text-2xl text-ink">Formación académica</h2>
              <ul className="mt-3 list-disc pl-5 text-ink-muted">
                {item.formacion.map((linea) => (
                  <li key={linea}>{linea}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-serif text-2xl text-ink">Experiencia</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{item.experiencia}</p>
            </section>
            <section>
              <h2 className="font-serif text-2xl text-ink">Áreas de interés</h2>
              <ul className="mt-3 list-disc pl-5 text-ink-muted">
                {item.areasInteres.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="font-serif text-2xl text-ink">Lugares donde atiende</h2>
              <ul className="mt-3 list-disc pl-5 text-ink-muted">
                {sedes.map((sede) => (
                  <li key={sede.id}>
                    {sede.nombre} — {sede.direccion}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </Section>
      <CtaBanner
        title={`Solicitar turno con ${item.titulo} ${item.apellido}`}
        label="Solicitar turno con este profesional"
        message={getProfessionalAppointmentMessage(item)}
      />
    </>
  );
}
