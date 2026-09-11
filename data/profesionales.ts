import type { Profesional } from "@/types";

/**
 * Datos de ejemplo claramente identificables.
 * Reemplazar por información real del equipo cuando esté disponible.
 */
export const profesionales: Profesional[] = [
  {
    id: "profesional-1",
    slug: "profesional-ejemplo-1",
    titulo: "Dra.",
    nombre: "Nombre",
    apellido: "del Profesional I",
    especialidad: "Especialidad (dato de ejemplo)",
    formacion: [
      "Formación académica (dato de ejemplo)",
      "Posgrado / residencia (dato de ejemplo)",
    ],
    experiencia:
      "Experiencia profesional (dato de ejemplo). Completar con trayectoria real del equipo.",
    areasInteres: [
      "Área de interés 1 (ejemplo)",
      "Área de interés 2 (ejemplo)",
      "Área de interés 3 (ejemplo)",
    ],
    sedesIds: ["sede-1", "sede-2"],
    foto: "/images/profesionales/profesional-1.svg",
    bio: "Perfil de ejemplo para presentar a un integrante del equipo. Reemplazar esta biografía por una descripción real, breve y profesional.",
    esEjemplo: true,
  },
  {
    id: "profesional-2",
    slug: "profesional-ejemplo-2",
    titulo: "Dr.",
    nombre: "Nombre",
    apellido: "del Profesional II",
    especialidad: "Especialidad (dato de ejemplo)",
    formacion: [
      "Formación académica (dato de ejemplo)",
      "Posgrado / residencia (dato de ejemplo)",
    ],
    experiencia:
      "Experiencia profesional (dato de ejemplo). Completar con trayectoria real del equipo.",
    areasInteres: [
      "Área de interés 1 (ejemplo)",
      "Área de interés 2 (ejemplo)",
    ],
    sedesIds: ["sede-1"],
    foto: "/images/profesionales/profesional-2.svg",
    bio: "Perfil de ejemplo. Reemplazar por la presentación real del profesional, sin incluir datos sensibles de pacientes.",
    esEjemplo: true,
  },
  {
    id: "profesional-3",
    slug: "profesional-ejemplo-3",
    titulo: "Dra.",
    nombre: "Nombre",
    apellido: "del Profesional III",
    especialidad: "Especialidad (dato de ejemplo)",
    formacion: [
      "Formación académica (dato de ejemplo)",
      "Actualización continua (dato de ejemplo)",
    ],
    experiencia:
      "Experiencia profesional (dato de ejemplo). Completar con trayectoria real del equipo.",
    areasInteres: [
      "Área de interés 1 (ejemplo)",
      "Área de interés 2 (ejemplo)",
      "Área de interés 3 (ejemplo)",
    ],
    sedesIds: ["sede-2"],
    foto: "/images/profesionales/profesional-3.svg",
    bio: "Perfil de ejemplo para una tercera integrante del grupo. Sustituir por datos reales cuando estén disponibles.",
    esEjemplo: true,
  },
];

export function getProfesionalBySlug(slug: string) {
  return profesionales.find((item) => item.slug === slug);
}

export function getProfesionalesByIds(ids: string[]) {
  return profesionales.filter((item) => ids.includes(item.id));
}

export const profesionalSlugs = profesionales.map((item) => item.slug);
