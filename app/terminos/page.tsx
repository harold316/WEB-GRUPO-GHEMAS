import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Términos de uso",
  description: "Condiciones de uso del sitio informativo de Hematología.",
  path: "/terminos",
});

export default function TerminosPage() {
  return (
    <>
      <PageHero title="Términos de uso" />
      <Section>
        <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-ink-muted">
          <p>
            El contenido tiene fines informativos y educativos y no reemplaza una
            evaluación médica profesional. No se ofrecen diagnósticos ni
            tratamientos a través de este sitio.
          </p>
          <p>
            Ante una situación de urgencia médica, acudir a un servicio de
            emergencias.
          </p>
          <p>
            Los datos de profesionales, sedes y contacto publicados como ejemplo
            deben sustituirse por información real antes de la puesta en
            producción. Reemplazar este texto por los términos legales
            definitivos.
          </p>
        </div>
      </Section>
    </>
  );
}
