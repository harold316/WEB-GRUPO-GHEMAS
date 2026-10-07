import type { RecursoArchivo } from "@/types";

/**
 * Arquitectura lista para conectar almacenamiento real (Drive, S3, CMS).
 * Los recursos son materiales generales, no resultados individuales de pacientes.
 * Los resultados individuales deberán requerir autenticación y acceso privado.
 */
export const informes: RecursoArchivo[] = [
  {
    id: "indice-charlson",
    nombre: "Índice de comorbilidad de Charlson",
    descripcion:
      "Cartilla de consulta para apoyar la evaluación clínica de comorbilidades.",
    tipo: "PDF",
    audiencia: "profesionales",
    categoria: "Material de consulta",
    href: "/downloads/profesionales/indice-charlson-ghemas.pdf",
    disponible: true,
  },
  {
    id: "formulario-ecog-profesional",
    nombre: "Escala ECOG para consultorio",
    descripcion:
      "Hoja de consultorio para registrar la escala funcional ECOG durante la consulta.",
    tipo: "PDF",
    audiencia: "profesionales",
    categoria: "Formularios profesionales",
    href: "/downloads/profesionales/escala-ecog-ghemas-hoja-consultorio.pdf",
    disponible: true,
  },
  {
    id: "formulario-hct-ci-profesional",
    nombre: "Formulario HCT-CI (hoja rápida)",
    descripcion:
      "Hoja rápida para registrar comorbilidades HCT-CI durante la evaluación clínica.",
    tipo: "PDF",
    audiencia: "profesionales",
    categoria: "Formularios profesionales",
    href: "/downloads/profesionales/HCT-CI_GHEMAS_hoja_rapida.pdf",
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
    id: "planilla-warfarina-sin-puente",
    nombre: "Planilla de warfarina sin puente con enoxaparina",
    descripcion:
      "Planilla de apoyo para profesionales. Verificar la pauta individual antes de utilizarla.",
    tipo: "PDF",
    audiencia: "profesionales",
    categoria: "Formularios profesionales",
    href: "/downloads/profesionales/Planilla_Warfarina_SIN_Puente_Enoxaparina_GHEMAS.pdf",
    disponible: true,
  },
  {
    id: "planilla-warfarina-con-puente",
    nombre: "Planilla de warfarina con puente con enoxaparina",
    descripcion:
      "Planilla de apoyo para profesionales. Verificar la pauta individual antes de utilizarla.",
    tipo: "PDF",
    audiencia: "profesionales",
    categoria: "Formularios profesionales",
    href: "/downloads/profesionales/Planilla_Warfarina_CON_Puente_Enoxaparina_GHEMAS.pdf",
    disponible: true,
  },
  {
    id: "planilla-acenocumarol-con-puente",
    nombre: "Planilla de acenocumarol con puente con enoxaparina",
    descripcion:
      "Planilla de apoyo para profesionales. Verificar la pauta individual antes de utilizarla.",
    tipo: "PDF",
    audiencia: "profesionales",
    categoria: "Formularios profesionales",
    href: "/downloads/profesionales/Planilla_Acenocumarol_CON_Puente_Enoxaparina_GHEMAS_visual.pdf",
    disponible: true,
  },
  {
    id: "planilla-acenocumarol-sin-puente",
    nombre: "Planilla de acenocumarol sin puente con enoxaparina",
    descripcion:
      "Planilla de apoyo para profesionales. Verificar la pauta individual antes de utilizarla.",
    tipo: "PDF",
    audiencia: "profesionales",
    categoria: "Formularios profesionales",
    href: "/downloads/profesionales/Planilla_Acenocumarol_SIN_Puente_GHEMAS_FINAL-1.pdf",
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
