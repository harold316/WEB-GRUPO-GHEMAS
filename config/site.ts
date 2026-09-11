export const siteConfig = {
  name: "Grupo de Hematología",
  shortName: "Hematología",
  tagline: "Hematología especializada, cerca de vos",
  description:
    "Atención especializada para el diagnóstico, estudio y seguimiento de enfermedades de la sangre y del sistema hematológico.",
  locale: "es_AR",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
