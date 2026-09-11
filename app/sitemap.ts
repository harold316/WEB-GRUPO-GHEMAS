import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { patologias } from "@/data/patologias";
import { profesionales } from "@/data/profesionales";
import { estudios } from "@/data/estudios";
import { articulos } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/patologias",
    "/profesionales",
    "/estudios",
    "/informes",
    "/blog",
    "/agenda",
    "/contacto",
    "/privacidad",
    "/terminos",
  ];

  const dynamicRoutes = [
    ...patologias.map((item) => `/patologias/${item.slug}`),
    ...profesionales.map((item) => `/profesionales/${item.slug}`),
    ...estudios.map((item) => `/estudios/${item.slug}`),
    ...articulos.map((item) => `/blog/${item.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
  }));
}
