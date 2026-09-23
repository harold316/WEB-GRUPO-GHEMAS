import type { Profesional } from "@/types/profesional";

/**
 * Datos de ejemplo claramente identificables.
 * Reemplazar por información real del equipo cuando esté disponible.
 */
export const profesionales: Profesional[] = [
  {
    id: "profesional-1",
    slug: "daniel-quispe-mamani",
    titulo: "Dr.",
    nombre: "Daniel",
    apellido: "Quispe Mamani",
    especialidad: "Medico Especialista en Hematología",
    MN: "168410",
    celular: "1121812360",
    email: "danielmedqm27@gmail.com",
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
    foto: "/images/profesionales/profesional-1.jpg",
    bio: "Médico del equipo de Hematología de Grupo Ghemas.",
    esEjemplo: false,
  },
  {
    id: "profesional-2",
    slug: "palmenia-morales-escobar",
    titulo: "Dra.",
    nombre: "Palmenia",
    apellido: "Morales Escobar",
    especialidad: "Medica Especialista en Diagnóstico por Imágenes",
    MN: "181260",
    MP: "459108",
    celular: "1156168585",
    email: "palmemorales97@gmail.com",
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
    foto: "/images/profesionales/profesional-2.jpg",
    bio: "Médica especialista en diagnóstico por imágenes del equipo de Grupo Ghemas.",
    esEjemplo: false,
  },
  {
    id: "profesional-3",
    slug: "jhenny-perez-magne",
    titulo: "Dra.",
    nombre: "Jhenny",
    apellido: "Perez Magne",
    especialidad: "Medica",
    MN: "147877",
    celular: "1151644478",
    email: "Jheanneth10@gmail.com",
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
    bio: "Médica cirujana del equipo de Grupo Ghemas.",
    esEjemplo: false,
  },
  {
    id: "profesional-4",
    slug: "profesional-4",
    titulo: "Dr.",
    nombre: "Israel",
    apellido: "Arze Duran",
    especialidad: "Medico Especialista en Cardiología",
    MN: "180705",
    formacion: [
      "Formación académica",
      "Posgrado / residencia",
    ],
    experiencia:
      "Completar con la trayectoria del profesional.",
    areasInteres: [
      "Área de interés 1",
      "Área de interés 2",
    ],
    sedesIds: ["sede-1"],
    foto: "/images/profesionales/profesional-4.jpg",
    bio: "Integrante del equipo de Grupo Ghemas.",
    esEjemplo: false,
  },
];

export function getProfesionalBySlug(slug: string) {
  return profesionales.find((item) => item.slug === slug);
}

export function getProfesionalesByIds(ids: string[]) {
  return profesionales.filter((item) => ids.includes(item.id));
}

export const profesionalSlugs = profesionales.map((item) => item.slug);
