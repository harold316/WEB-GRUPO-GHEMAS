import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Aviso de privacidad",
  description: "Cómo se tratan los datos en el sitio del consultorio de Hematología.",
  path: "/privacidad",
});

export default function PrivacidadPage() {
  return (
    <>
      <PageHero title="Aviso de privacidad" />
      <Section>
        <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-ink-muted">
          <p>
            Este sitio no solicita ni almacena información clínica sensible de
            pacientes. Los turnos se coordinan por WhatsApp u otros canales
            institucionales, fuera de este frontend público.
          </p>
          <p>
            No se publican resultados médicos individuales. Cualquier
            implementación futura de informes personales deberá incluir
            autenticación y acceso privado.
          </p>
          <p>
            El formulario de preguntas del blog no debe utilizarse para enviar
            datos de salud identificables. Reemplazar este texto por la política
            legal definitiva del grupo.
          </p>
        </div>
      </Section>
    </>
  );
}
