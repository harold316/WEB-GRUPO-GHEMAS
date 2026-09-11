import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { classNames } from "@/lib/utils";

export function CtaBanner({
  title = "¿Necesitás una evaluación hematológica?",
  text = "Nuestro equipo está disponible para orientarte y ayudarte a solicitar tu turno.",
  label = "Solicitar turno por WhatsApp",
  message,
  className,
}: {
  title?: string;
  text?: string;
  label?: string;
  message?: string;
  className?: string;
}) {
  return (
    <section className={classNames("px-4 py-14 sm:px-6", className)}>
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-cta px-6 py-12 text-white shadow-soft sm:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
            {text}
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton label={label} message={message} variant="inverse" />
          </div>
        </div>
      </div>
    </section>
  );
}
