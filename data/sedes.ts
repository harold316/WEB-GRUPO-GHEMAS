import type { Sede } from "@/types";

/**
 * Sedes de ejemplo. Fechas, horarios y direcciones se reemplazan
 * sin tocar componentes; más adelante pueden alimentarse desde un CMS o API.
 */
export const sedes: Sede[] = [
  {
    id: "sede-1",
    slug: "consultorio-ghemas-villa-luzuriaga",
    nombre: "Consultorio Arrieta",
    direccion: "Dr. Ignacio Arrieta 1728",
    ciudad: "Villa Luzuriaga, Buenos Aires",
    diasAtencion: ["Martes", "Viernes"],
    horarios: "Turnos martes y viernes. Confirmar horario por WhatsApp.",
    proximasFechas: [
      "Consultar disponibilidad actualizada",
    ],
    profesionalesIds: ["profesional-1", "profesional-2"],
    mapaQuery:
      "Dr. Ignacio Arrieta 1728, Villa Luzuriaga, Buenos Aires, Argentina",
    notas:
      "Las fechas publicadas son orientativas. Confirmá el turno por WhatsApp.",
  },
  {
    id: "sede-2",
    slug: "sede-ejemplo-2",
    nombre: "Sede 2 (dato de ejemplo)",
    direccion: "Dirección de la sede (dato de ejemplo)",
    ciudad: "Ciudad (dato de ejemplo)",
    diasAtencion: ["Día 1 (ejemplo)"],
    horarios: "Horarios de atención (dato de ejemplo)",
    proximasFechas: ["Consultar próximas fechas disponibles"],
    profesionalesIds: ["profesional-1", "profesional-3"],
    mapaQuery: "Dirección de la sede (dato de ejemplo)",
    notas:
      "La disponibilidad puede modificarse. El canal preferido para turnos es WhatsApp.",
  },
];

export function getSedeById(id: string) {
  return sedes.find((item) => item.id === id);
}

export function getSedesByIds(ids: string[]) {
  return sedes.filter((item) => ids.includes(item.id));
}
