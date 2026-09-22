/** Identificador público del contador (no es una clave privada). */
export const VISITAS_NAMESPACE = "grupo-ghemas";
export const VISITAS_KEY =
  process.env.VERCEL_ENV === "production" ? "visitas" : "visitas-dev";
