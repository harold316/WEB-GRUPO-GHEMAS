import { MapPin, Clock, CalendarDays } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ContactMap } from "@/components/contact/ContactMap";
import { getLocationAppointmentMessage } from "@/lib/whatsapp";
import { getProfesionalesByIds } from "@/data/profesionales";
import { fullProfessionalName } from "@/lib/utils";
import type { Sede } from "@/types";

export function LocationCard({ sede }: { sede: Sede }) {
  const profesionales = getProfesionalesByIds(sede.profesionalesIds);

  return (
    <Card className="flex h-full flex-col">
      <h3 className="font-serif text-2xl text-ink">{sede.nombre}</h3>
      <p className="mt-3 flex items-start gap-2 text-sm text-ink-muted">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
        {sede.direccion}, {sede.ciudad}
      </p>
      <p className="mt-2 flex items-start gap-2 text-sm text-ink-muted">
        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
        {sede.horarios}
      </p>
      <p className="mt-2 flex items-start gap-2 text-sm text-ink-muted">
        <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
        Días: {sede.diasAtencion.join(", ")}
      </p>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Próximas fechas disponibles
        </p>
        <ul className="mt-2 list-disc pl-5 text-sm text-ink-muted">
          {sede.proximasFechas.map((fecha) => (
            <li key={fecha}>{fecha}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Profesionales
        </p>
        <ul className="mt-2 text-sm text-ink-muted">
          {profesionales.map((item) => (
            <li key={item.id}>{fullProfessionalName(item)}</li>
          ))}
        </ul>
      </div>

      <p className="mt-3 text-xs text-ink-muted">{sede.notas}</p>
      <div className="mt-4 overflow-hidden rounded-xl">
        <ContactMap query={sede.mapaQuery} title={sede.nombre} />
      </div>
      <div className="mt-5">
        <WhatsAppButton
          className="w-full"
          label="Solicitar turno"
          message={getLocationAppointmentMessage(sede.nombre)}
        />
      </div>
    </Card>
  );
}
