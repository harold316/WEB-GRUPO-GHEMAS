import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactMap } from "@/components/contact/ContactMap";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { contact } from "@/config/contact";
import { pageMetadata } from "@/lib/seo";
import { getAppointmentUrl } from "@/lib/whatsapp";

export const metadata = pageMetadata({
  title: "Contacto",
  description:
    "WhatsApp, teléfono, email y ubicación del consultorio de Hematología. Solicitá turno en un toque.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Estamos cerca"
        title="Contacto"
        description="El canal principal para turnos es WhatsApp. Los datos actuales son de ejemplo y se cambian en un solo archivo de configuración."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <ul className="space-y-5 text-sm text-ink-muted">
              <li className="flex gap-3">
                <MessageCircle className="h-5 w-5 text-brand" aria-hidden="true" />
                <span>
                  <strong className="block text-ink">WhatsApp</strong>
                  {contact.whatsappDisplay}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-brand" aria-hidden="true" />
                <span>
                  <strong className="block text-ink">Teléfono</strong>
                  <a href={contact.phoneHref} className="underline-offset-2 hover:underline">
                    {contact.phoneDisplay}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-brand" aria-hidden="true" />
                <span>
                  <strong className="block text-ink">Email</strong>
                  <a href={`mailto:${contact.email}`} className="underline-offset-2 hover:underline">
                    {contact.email}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-brand" aria-hidden="true" />
                <span>
                  <strong className="block text-ink">Dirección</strong>
                  {contact.address}, {contact.city}
                </span>
              </li>
              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-brand" aria-hidden="true" />
                <span>
                  <strong className="block text-ink">Horarios</strong>
                  {contact.hours}
                </span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={contact.instagramUrl}
                className="rounded-full border border-line p-3"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={contact.facebookUrl}
                className="rounded-full border border-line p-3"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={getAppointmentUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-line p-3"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6">
              <WhatsAppButton className="w-full" />
            </div>
          </Card>
          <div className="overflow-hidden rounded-2xl border border-line shadow-card">
            <ContactMap
              query={`${contact.address}, ${contact.city}, Argentina`}
              title="Consultorio Arrieta"
            />
          </div>
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
