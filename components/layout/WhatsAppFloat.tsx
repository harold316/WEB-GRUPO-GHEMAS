import { MessageCircle } from "lucide-react";
import { getAppointmentUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={getAppointmentUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-float transition hover:scale-105 hover:bg-whatsapp-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp sm:bottom-6 sm:right-6"
      aria-label="Solicitar turno por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
