export function MedicalNotice({
  variant = "info",
}: {
  variant?: "info" | "urgent";
}) {
  if (variant === "urgent") {
    return (
      <p className="rounded-xl border border-amber-200/80 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950 dark:border-amber-500/30 dark:bg-amber-950/40 dark:text-amber-100">
        Ante una situación de urgencia médica, acudir a un servicio de
        emergencias.
      </p>
    );
  }

  return (
    <p className="rounded-xl border border-line bg-mint/70 px-4 py-3 text-sm leading-relaxed text-ink-muted">
      El contenido de este sitio tiene fines informativos y educativos y no
      reemplaza una evaluación médica profesional. La información es de
      carácter educativo y no sustituye una consulta.
    </p>
  );
}
