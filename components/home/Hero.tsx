import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-aqua/30 blur-3xl dark:bg-aqua/10" />
      <div className="pointer-events-none absolute -bottom-16 left-0 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="animate-fade-up">
          <p className="inline-flex rounded-full border border-brand/15 bg-surface/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Hematología clínica
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-ink sm:text-5xl lg:text-[3.35rem]">
            Hematología especializada, cerca de vos
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Atención especializada para el diagnóstico, estudio y seguimiento de
            enfermedades de la sangre y del sistema hematológico.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton label="Solicitar turno por WhatsApp" />
            <Button href="/profesionales" variant="secondary">
              Conocer nuestro equipo
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-line/80 pt-6">
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-ink-muted">
                Canal
              </dt>
              <dd className="mt-1 font-serif text-lg text-ink sm:text-xl">WhatsApp</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-ink-muted">
                Enfoque
              </dt>
              <dd className="mt-1 font-serif text-lg text-ink sm:text-xl">Especializado</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-wider text-ink-muted">
                Contenido
              </dt>
              <dd className="mt-1 font-serif text-lg text-ink sm:text-xl">Educativo</dd>
            </div>
          </dl>
        </div>
        <div className="animate-fade-up relative delay-150">
          <div className="relative aspect-[5/4] min-h-[280px] overflow-hidden rounded-[2rem] border border-line bg-surface shadow-soft ring-1 ring-brand/10 sm:min-h-[360px]">
            <Image
              src="/images/hero-consulta-hematologica.jpg"
              alt="Consulta hematológica: médico especialista atendiendo a una paciente en consultorio"
              fill
              priority
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <p className="absolute -bottom-4 right-6 rounded-full border border-line bg-surface px-4 py-2 text-xs font-medium text-ink shadow-card">
            Atención médica profesional
          </p>
        </div>
      </div>
    </section>
  );
}

function AttentionGlyph({ name }: { name: "drop" | "clipboard" | "scope" | "calendar" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" {...common}>
      {name === "drop" ? (
        <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z" />
      ) : null}
      {name === "clipboard" ? (
        <>
          <rect x="6" y="4" width="12" height="16" rx="2" />
          <path d="M9 4h6v3H9zM9 12l2 2 4-4" />
        </>
      ) : null}
      {name === "scope" ? (
        <>
          <circle cx="8" cy="8" r="3" />
          <path d="M10.2 10.2 14 14M14 14h4v3h-3" />
        </>
      ) : null}
      {name === "calendar" ? (
        <>
          <rect x="4" y="5" width="16" height="15" rx="2" />
          <path d="M8 3v4M16 3v4M4 10h16" />
        </>
      ) : null}
    </svg>
  );
}

const atencion = [
  {
    title: "Diagnóstico",
    text: "Evaluamos hallazgos de laboratorio y síntomas en un marco clínico prudente.",
    glyph: "drop" as const,
    image: "/images/atencion/diagnostico-lab.jpg",
    alt: "Toma de muestra de sangre en laboratorio",
  },
  {
    title: "Evaluación hematológica",
    text: "Orientación especializada para comprender el hemograma y los estudios complementarios.",
    glyph: "clipboard" as const,
    image: "/images/atencion/evaluacion-lab.jpg",
    alt: "Microscopio y análisis de hemograma en laboratorio",
  },
  {
    title: "Estudios especializados",
    text: "Información clara sobre procedimientos y preparación, cuando están indicados.",
    glyph: "scope" as const,
    image: "/images/atencion/estudios-lab.jpg",
    alt: "Analizador hematológico en laboratorio",
  },
  {
    title: "Seguimiento médico",
    text: "Acompañamiento a lo largo del tiempo, con un canal directo para turnos.",
    glyph: "calendar" as const,
    image: "/images/atencion/seguimiento-lab.jpg",
    alt: "Agenda de turnos en el teléfono junto a un emblema médico",
  },
];

export function AttentionCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {atencion.map((item, index) => (
        <article
          key={item.title}
          className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_8px_30px_rgba(17,124,112,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-line dark:bg-surface"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <div className="flex flex-1 flex-col p-5 pb-2">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#117C70] text-white">
              <AttentionGlyph name={item.glyph} />
            </span>
            <h3 className="mt-4 font-serif text-xl leading-snug text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
          </div>
          <div className="relative mt-auto h-40 w-full overflow-hidden sm:h-44">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
