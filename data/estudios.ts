import type { Estudio } from "@/types";

export const estudios: Estudio[] = [
  {
    id: "hemostasia",
    slug: "estudios-de-hemostasia-y-coagulacion",
    nombre: "Estudios de hemostasia y coagulación",
    icono: "shield",
    resumen:
      "Análisis de laboratorio que ayudan a evaluar cómo coagula la sangre, siempre interpretados en contexto clínico.",
    queEs:
      "Son un conjunto de pruebas de laboratorio que exploran distintos aspectos de la coagulación y de las plaquetas. Pueden incluir estudios básicos o más específicos, según lo que el profesional considere necesario. No existe un único “análisis de coagulación” que responda todas las preguntas.",
    paraQue:
      "Se solicitan para ampliar la evaluación ante sangrados, hematomas, trombosis, hallazgos previos alterados, o antes de procedimientos cuando hay un motivo clínico. También pueden usarse para el seguimiento de tratamientos anticoagulantes, según indicación. El pedido es individualizado.",
    comoSeRealiza:
      "En general se obtiene una muestra de sangre venosa en el laboratorio. Algunas pruebas requieren condiciones especiales de extracción y traslado. El detalle concreto lo indica el centro donde se realiza el estudio.",
    preparacion:
      "La preparación depende de cada prueba y de la medicación habitual. En algunos casos se solicita ayuno u horarios específicos. No se debe suspender medicación por cuenta propia: cualquier duda sobre anticoagulantes o antiagregantes debe consultarse con el equipo tratante.",
    duracionAprox:
      "La extracción suele durar pocos minutos. El tiempo de procesamiento varía según el tipo de estudio y el laboratorio (desde el mismo día hasta varios días en pruebas especializadas).",
    resultado:
      "El informe se entrega según las vías del laboratorio o de la institución (portal, retiro en sede u otra modalidad). Los resultados deben interpretarse en consulta; un valor fuera de rango no equivale, por sí solo, a un diagnóstico.",
  },
  {
    id: "frotis",
    slug: "frotis-de-sangre-periferica",
    nombre: "Frotis de sangre periférica",
    icono: "microscope",
    resumen:
      "Observación al microscopio de las células de la sangre para complementar el hemograma.",
    queEs:
      "El frotis de sangre periférica es el estudio de una muestra de sangre extendida en un portaobjetos y observada al microscopio. Permite valorar la forma y las características de glóbulos rojos, blancos y plaquetas, como complemento del hemograma automatizado.",
    paraQue:
      "Se solicita cuando el hemograma muestra alteraciones que requieren una mirada morfológica, o cuando el cuadro clínico lo sugiere. Ayuda a orientar el estudio, pero no reemplaza otros análisis ni establece por sí solo un diagnóstico completo.",
    comoSeRealiza:
      "Se obtiene una muestra de sangre (habitualmente de una venopunción o, en algunos casos, de un pinchazo capilar) y se realiza el extendido. Un profesional capacitado observa la preparación al microscopio.",
    preparacion:
      "En la mayoría de los casos no requiere una preparación especial. Si se extrae junto con otros análisis, pueden aplicarse las indicaciones de esos estudios (por ejemplo, ayuno). El laboratorio informará si hay alguna consigna puntual.",
    duracionAprox:
      "La toma de muestra es breve. El informe puede estar disponible el mismo día o en 24 a 72 horas, según el centro y la complejidad del hallazgo.",
    resultado:
      "El resultado suele entregarse como un informe descriptivo. Es importante revisarlo con el profesional que lo solicitó, junto con el resto de los estudios.",
  },
  {
    id: "puncion-medula",
    slug: "puncion-aspirado-de-medula-osea",
    nombre: "Punción / aspirado de médula ósea",
    icono: "scan",
    resumen:
      "Procedimiento para obtener una muestra líquida de médula ósea cuando el estudio de sangre no es suficiente.",
    queEs:
      "El aspirado de médula ósea es un procedimiento mediante el cual se obtiene una muestra del tejido hematopoyético (donde se forman las células de la sangre). Se realiza cuando la evaluación de la sangre periférica no alcanza para comprender un cuadro o cuando está indicado un estudio más profundo.",
    paraQue:
      "Se indica en situaciones seleccionadas, por ejemplo para estudiar alteraciones persistentes del hemograma u otras sospechas hematológicas. La decisión es médica y se explica en la consulta, incluyendo beneficios, alternativas y cuidados.",
    comoSeRealiza:
      "Habitualmente se realiza con anestesia local, en un entorno asistencial adecuado. La zona más frecuente es la pelvis (cresta ilíaca), aunque el sitio lo define el equipo. Se obtiene una muestra líquida para análisis. El procedimiento lo realiza un profesional entrenado.",
    preparacion:
      "Se informan indicaciones específicas: medicación habitual (en especial anticoagulantes), ayuno si corresponde, y estudios previos. Es importante comunicar alergias y antecedentes de sangrado. Las consignas concretas se entregan por escrito antes del procedimiento.",
    duracionAprox:
      "El procedimiento en sí suele durar un tiempo relativamente breve; la permanencia en el centro puede ser mayor por la preparación y la observación posterior. El tiempo exacto lo informa el equipo el día de la práctica.",
    resultado:
      "Las muestras se envían a laboratorio para distintos estudios (citología y otros, según lo solicitado). Los plazos varían. Los resultados se discuten en una consulta de seguimiento; no se publican ni se envían por canales inseguros desde este sitio.",
  },
  {
    id: "biopsia-medula",
    slug: "biopsia-de-medula-osea",
    nombre: "Biopsia de médula ósea",
    icono: "bone",
    resumen:
      "Obtención de un cilindro de tejido óseo y medular para estudio anatomopatológico, cuando está indicado.",
    queEs:
      "La biopsia de médula ósea consiste en obtener un pequeño cilindro de hueso y médula para su análisis en anatomía patológica. Con frecuencia se complementa con el aspirado, aunque no siempre se realizan juntos. Permite evaluar la arquitectura del tejido, algo que el aspirado no muestra de la misma manera.",
    paraQue:
      "Se solicita cuando el estudio hematológico requiere información sobre la estructura de la médula ósea. La indicación es individual y se conversa en la consulta. Este texto no reemplaza el consentimiento informado ni las explicaciones del equipo tratante.",
    comoSeRealiza:
      "Se efectúa en un entorno clínico, con anestesia local y las medidas de confort que indique el centro. El sitio más habitual es la cresta ilíaca posterior. Tras la toma de muestra se colocan curaciones y se dan indicaciones de cuidado.",
    preparacion:
      "Suele requerir indicaciones sobre medicación, estudios previos y ayuno si el centro lo solicita. Debe informarse el uso de anticoagulantes o antiagregantes para que el equipo decida cómo proceder. No suspender fármacos sin indicación explícita.",
    duracionAprox:
      "El tiempo del procedimiento varía según cada caso y si se asocia a aspirado. La recuperación inmediata suele permitir el alta el mismo día, según criterio médico. El detalle lo confirma el centro.",
    resultado:
      "El informe de anatomía patológica puede demorar varios días, según los estudios complementarios. La entrega se realiza por los canales institucionales del consultorio o del centro, nunca como archivo público en este sitio web.",
  },
];

export function getEstudioBySlug(slug: string) {
  return estudios.find((item) => item.slug === slug);
}

export const estudioSlugs = estudios.map((item) => item.slug);
