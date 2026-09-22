/**
 * ID público de medición de Google Analytics 4.
 * Se lee de NEXT_PUBLIC_GA_MEASUREMENT_ID (por ejemplo G-XXXXXXXXXX).
 * Si está vacío, no se carga el script.
 */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";
