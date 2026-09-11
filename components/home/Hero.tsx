import Image from "next/image";
import { Droplets, HeartPulse, Microscope, Stethoscope } from "lucide-react";
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

const atencion = [
  {
    title: "Diagnóstico",
    text: "Evaluamos hallazgos de laboratorio y síntomas en un marco clínico prudente.",
    icon: Stethoscope,
  },
  {
    title: "Evaluación hematológica",
    text: "Orientación especializada para comprender el hemograma y los estudios complementarios.",
    icon: HeartPulse,
  },
  {
    title: "Estudios especializados",
    text: "Información clara sobre procedimientos y preparación, cuando están indicados.",
    icon: Microscope,
  },
  {
    title: "Seguimiento médico",
    text: "Acompañamiento a lo largo del tiempo, con un canal directo para turnos.",
    icon: Droplets,
  },
];

export function AttentionCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {atencion.map((item, index) => (
        <article
          key={item.title}
          className="animate-fade-up rounded-3xl border border-line bg-surface p-6 shadow-card transition hover:-translate-y-1 hover:border-brand/25"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-mint text-brand">
            <item.icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="mt-4 font-serif text-xl text-ink">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
        </article>
      ))}
    </div>
  );
}
