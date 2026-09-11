type Props = {
  query: string;
  title: string;
};

/**
 * Mapa embebido sin API keys.
 * Recibe una dirección o consulta; reemplazar `query` por la ubicación real.
 */
export function ContactMap({ query, title }: Props) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;

  return (
    <div className="overflow-hidden dark:opacity-90 dark:contrast-125 dark:saturate-50 dark:invert-[.86] dark:hue-rotate-180">
      <iframe
        title={`Mapa de ${title}`}
        src={src}
        className="h-56 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
