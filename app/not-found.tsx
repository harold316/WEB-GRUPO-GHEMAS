import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Página no encontrada"
        description="El enlace no existe o fue movido."
      />
      <Section>
        <Button href="/">Volver al inicio</Button>
      </Section>
    </>
  );
}
