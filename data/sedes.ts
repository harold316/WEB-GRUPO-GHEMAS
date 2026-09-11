import type { Sede } from "@/types";

/**
 * Sedes de ejemplo. Fechas, horarios y direcciones se reemplazan
 * sin tocar componentes; más adelante pueden alimentarse desde un CMS o API.
 */
export const sedes: Sede[] = [
  {
    id: "sede-1",
    slug: "sede-ejemplo-1",
    nombre: "Sede 1 (dato de ejemplo)",
    direccion: "Dirección de la sede (dato de ejemplo)",
    ciudad: "Ciudad (dato de ejemplo)",
    diasAtencion: ["Día 1 (ejemplo)", "Día 2 (ejemplo)"],
    horarios: "Horarios de atención (dato de ejemplo)",
    proximasFechas: [
      "Próxima fecha (dato de ejemplo)",
      "Consultar disponibilidad actualizada",
    ],
    profesionalesIds: ["profesional-1", "profesional-2"],
    mapaQuery: "Dirección de la sede (dato de ejemplo)",
    notas:
      "Las fechas publicadas son orientativas y de ejemplo. Confirmar turno por WhatsApp.",
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
