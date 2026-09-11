import type { RecursoArchivo } from "@/types";

/**
 * Arquitectura lista para conectar almacenamiento real (Drive, S3, CMS).
 * Los archivos actuales son ejemplos públicos, no resultados de pacientes.
 * Los resultados individuales deberán requerir autenticación y acceso privado.
 */
export const informes: RecursoArchivo[] = [
  {
    id: "formulario-paciente",
    nombre: "Formulario de datos para la consulta (ejemplo)",
    descripcion:
      "Modelo de formulario para completar datos administrativos antes de la visita. Reemplazar por el archivo institucional.",
    tipo: "TXT",
    audiencia: "pacientes",
    categoria: "Formularios",
    href: "/downloads/pacientes/formulario-consulta-ejemplo.txt",
    disponible: true,
  },
  {
    id: "indicaciones-laboratorio",
    nombre: "Indicaciones generales de laboratorio (ejemplo)",
    descripcion:
      "Orientaciones generales. Las indicaciones reales dependen del estudio solicitado y del laboratorio.",
    tipo: "TXT",
    audiencia: "pacientes",
    categoria: "Indicaciones",
    href: "/downloads/pacientes/indicaciones-laboratorio-ejemplo.txt",
    disponible: true,
  },
  {
    id: "documentacion-consulta",
    nombre: "Documentación sugerida para la consulta (ejemplo)",
    descripcion:
      "Lista orientativa de estudios previos y documentación. No incluye resultados médicos individuales.",
    tipo: "TXT",
    audiencia: "pacientes",
    categoria: "Documentación",
    href: "/downloads/pacientes/documentacion-consulta-ejemplo.txt",
    disponible: true,
  },
  {
    id: "info-pacientes",
    nombre: "Información para pacientes (ejemplo)",
    descripcion:
      "Texto institucional de bienvenida y avisos. Sustituir por el material definitivo del grupo.",
    tipo: "TXT",
    audiencia: "pacientes",
    categoria: "Información para pacientes",
    href: "/downloads/pacientes/informacion-pacientes-ejemplo.txt",
    disponible: true,
  },
  {
    id: "solicitud-profesional",
    nombre: "Formulario de solicitud para profesionales (ejemplo)",
    descripcion:
      "Modelo para derivaciones entre profesionales. No utilizar para datos clínicos sensibles en este sitio.",
    tipo: "TXT",
    audiencia: "profesionales",
    categoria: "Formularios profesionales",
    href: "/downloads/profesionales/solicitud-derivacion-ejemplo.txt",
    disponible: true,
  },
  {
    id: "documentacion-profesionales",
    nombre: "Documentación de interés (ejemplo)",
    descripcion:
      "Espacio reservado para material institucional dirigido a colegas.",
    tipo: "TXT",
    audiencia: "profesionales",
    categoria: "Documentación",
    href: "/downloads/profesionales/documentacion-interes-ejemplo.txt",
    disponible: true,
  },
  {
    id: "material-interes",
    nombre: "Material de interés (próximamente)",
    descripcion:
      "Aquí se podrán publicar recursos adicionales cuando estén disponibles en el almacenamiento institucional.",
    tipo: "PDF",
    audiencia: "profesionales",
    categoria: "Material de interés",
    href: "#",
    disponible: false,
  },
];
