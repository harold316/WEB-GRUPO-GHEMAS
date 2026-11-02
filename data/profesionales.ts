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
    email: "danielmedqm27@gmail.com",
    formacion: [
      "Médico: Universidad Técnica de Oruro, Bolivia.)",
      "Posgrado: Formación en Hematología: Hospital General de Agudos Dr. José María Ramos Mejía, Buenos Aires, Argentina.",
    ],
    experiencia:
      "Experiencia en atención hematológica ambulatoria y hospitalaria, incluyendo consultorios externos, internación y hospital de día. También cuento con experiencia en el diagnóstico, tratamiento y seguimiento de pacientes con enfermedades hematológicas clínicas y oncohematológicas.",
    areasInteres: [
      "Hematología clínica y oncohematología.",
      "Anemias y alteraciones del hemograma.",
      "Leucemias, linfomas y mieloma múltiple.",
      "Trastornos de coagulación, trombosis y anticoagulación.",
      "Alteraciones plaquetarias y enfermedades mieloproliferativas.",
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
    email: "palmemorales97@gmail.com",
    formacion: [
      "Especialista en Diagnóstico por Imágenes: título otorgado por la Universidad de Buenos Aires (UBA).",
      "Formación hospitalaria: Hospital Interzonal General de Agudos Eva Perón (ex Hospital Castex), San Martín, Buenos Aires.",
    ],
    experiencia:
      "Experiencia en diagnóstico por imágenes en el ámbito hospitalario y ambulatorio, incluyendo la evaluación e interpretación de estudios por imágenes. Orientación al diagnóstico oportuno de diferentes patologías mediante estudios complementarios, contribuyendo a la evaluación clínica y al seguimiento de los pacientes.",
    areasInteres: [
      "Diagnóstico por imágenes y radiología general.",
      "Ecografía general y especializada.",
      "Ecografía Doppler (Ecodoppler).",
      "Tomografía computada.",
      "Resonancia magnética.",
      "Diagnóstico por imágenes de patologías clínicas.",
      "Evaluación y seguimiento de enfermedades mediante estudios por imágenes.",
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
    foto: "/images/profesionales/profesional-3.jpg",
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
      "Especialista en Cardiología: título otorgado por la Universidad de Buenos Aires (UBA).",
      "Formación hospitalaria: Policlínico Bancario, Buenos Aires, Argentina.",
    ],
    experiencia:
      "Experiencia en atención cardiológica ambulatoria y hospitalaria, incluyendo consultorios externos, internación y áreas cerradas de cuidados críticos, como la Unidad Coronaria (UCO). Experiencia en la evaluación, diagnóstico, tratamiento y seguimiento de pacientes con enfermedades cardiovasculares, incluyendo el manejo de patologías cardíacas agudas y crónicas, la prevención cardiovascular y el control de factores de riesgo.",
    areasInteres: [
      "Cardiología clínica y prevención cardiovascular.",
      "Hipertensión arterial y factores de riesgo cardiovascular.",
      "Arritmias y trastornos del ritmo cardíaco.",
      "Insuficiencia cardíaca.",
      "Cardiopatía isquémica y enfermedad coronaria.",
      "Evaluación y seguimiento de enfermedades cardiovasculares.",
      "Electrocardiografía y estudios cardiológicos complementarios.",
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
