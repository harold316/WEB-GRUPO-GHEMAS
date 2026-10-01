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
    profesionalesIds: ["profesional-1", "profesional-2", "profesional-4"],
    mapaQuery:
      "Dr. Ignacio Arrieta 1728, Villa Luzuriaga, Buenos Aires, Argentina",
    fotos: [
      "/images/sedes/arrieta-frente.jpg",
      "/images/sedes/arrieta-sala.jpg",
      "/images/sedes/arrieta-consultorio.jpg",
    ],
    notas:
      "Las fechas publicadas son orientativas. Confirmá el turno por WhatsApp.",
  },
  {
    id: "sede-2",
    slug: "consultorio-aguero-moron",
    nombre: "Consultorio Baruch",
    direccion: "Agüero 1235",
    ciudad: "Morón, Buenos Aires",
    diasAtencion: ["Martes", "Viernes"],
    horarios: "Turnos martes y viernes. Confirmar horario por WhatsApp.",
    proximasFechas: ["Consultar disponibilidad actualizada"],
    profesionalesIds: ["profesional-1", "profesional-3"],
    mapaQuery: "-34.669082,-58.613823",
    fotos: ["/images/sedes/baruch-frente.jpg"],
    notas:
      "La disponibilidad puede modificarse. El canal preferido para turnos es WhatsApp.",
  },
  {
    id: "sede-3",
    slug: "consultorios-evolutions-moron",
    nombre: "Consultorios Evolutions",
    direccion: "Cabildo 255",
    ciudad: "B1708JPE Morón, Provincia de Buenos Aires, Argentina",
    diasAtencion: ["A coordinar"],
    horarios: "Consultar días y horarios por WhatsApp.",
    proximasFechas: ["Consultar disponibilidad actualizada"],
    profesionalesIds: [],
    mapaQuery:
      "Cabildo 255, B1708JPE Morón, Provincia de Buenos Aires, Argentina",
    fotos: [
      "/images/sedes/consultorios-evolutions-recepcion.jpeg",
      "/images/sedes/consultorios-evolutions-consultorio.jpeg",
      "/images/sedes/consultorios-evolutions-frente.jpeg",
    ],
    notas: "Confirmá disponibilidad y profesionales asignados por WhatsApp.",
  },
];

export function getSedeById(id: string) {
  return sedes.find((item) => item.id === id);
}

export function getSedesByIds(ids: string[]) {
  return sedes.filter((item) => ids.includes(item.id));
}
