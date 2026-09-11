export function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T12:00:00.000Z`));
}

export function fullProfessionalName(params: {
  titulo: string;
  nombre: string;
  apellido: string;
}) {
  return `${params.titulo} ${params.nombre} ${params.apellido}`;
}

export function classNames(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}
