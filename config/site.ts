export const siteConfig = {
  name: "Ghemas",
  shortName: "Ghemas",
  tagline: "Hematología especializada, cerca de vos",
  description:
    "En Grupo GHEMAS ofrecemos un espacio de confianza para conversar sobre tu enfermedad, evaluar tus estudios, resolver tus dudas y brindarte una orientación médica clara y personalizada, acompañándote en cada etapa de tu atención y seguimiento con cercanía, calidez humana y compromiso profesional.",
  locale: "es_AR",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;
