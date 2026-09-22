import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/config/site";
import { contact } from "@/config/contact";
import { mainNav } from "@/data/navigation";
import { patologias } from "@/data/patologias";
import { getAppointmentUrl } from "@/lib/whatsapp";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { VisitCounter } from "@/components/layout/VisitCounter";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-footer text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex rounded-xl bg-white p-2">
            <BrandLogo height={56} className="h-12 sm:h-14" />
          </div>
          <p className="mt-4 font-serif text-xl">{siteConfig.name}</p>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            Atención hematológica especializada, con información clara y un
            canal directo para solicitar turno.
          </p>
          <a
            href={getAppointmentUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-semibold"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-aqua">
            Navegación
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-aqua">
            Patologías
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {patologias.slice(0, 6).map((item) => (
              <li key={item.id}>
                <Link href={`/patologias/${item.slug}`} className="hover:text-white">
                  {item.nombre}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/patologias" className="hover:text-white">
                Ver todas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-aqua">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>{contact.whatsappDisplay}</li>
            <li>{contact.phoneDisplay}</li>
            <li>{contact.email}</li>
            <li>{contact.address}</li>
            <li>{contact.city}</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a
              href={contact.instagramUrl}
              aria-label="Instagram"
              className="rounded-full border border-white/20 p-2 hover:bg-white/10"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={contact.facebookUrl}
              aria-label="Facebook"
              className="rounded-full border border-white/20 p-2 hover:bg-white/10"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/60 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p>
            © 2026 Ghemas — Consultorio / Grupo de Hematología. Todos los
            derechos reservados.
          </p>
          <VisitCounter />
          <p className="flex gap-4">
            <Link href="/privacidad" className="hover:text-white">
              Aviso de privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white">
              Términos de uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
