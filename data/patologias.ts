import type { Patologia } from "@/types";

export const patologias: Patologia[] = [
  {
    id: "anemia",
    nombre: "Anemia",
    slug: "anemia",
    icono: "droplets",
    resumen:
      "Disminución de glóbulos rojos o de hemoglobina que puede generar cansancio y otros síntomas.",
    descripcion:
      "La anemia es un hallazgo de laboratorio y un motivo de consulta frecuente. En términos generales, se relaciona con una menor cantidad de glóbulos rojos o de hemoglobina, lo que puede disminuir la capacidad de transportar oxígeno. Existen distintas causas posibles (carenciales, crónicas, hematológicas u otras), por lo que su interpretación debe realizarse en conjunto con la historia clínica, el examen físico y estudios complementarios. El contenido de este sitio es educativo y no permite diagnosticar el tipo de anemia ni su origen.",
    sintomas: [
      "Cansancio o menor tolerancia al esfuerzo",
      "Palidez",
      "Mareos o sensación de debilidad",
      "Falta de aire en actividades habituales",
      "Otros síntomas que varían según la causa y la intensidad",
    ],
    cuandoConsultar: [
      "Cuando un análisis de sangre muestra valores alterados de hemoglobina o glóbulos rojos",
      "Si hay síntomas persistentes de fatiga, palidez o intolerancia al esfuerzo",
      "Si otra especialidad indica evaluación hematológica",
      "Ante dudas sobre estudios previos o necesidad de seguimiento",
    ],
  },
  {
    id: "trombosis",
    nombre: "Trombosis",
    slug: "trombosis",
    icono: "activity",
    resumen:
      "Formación de un coágulo en un vaso sanguíneo. Requiere evaluación médica oportuna.",
    descripcion:
      "La trombosis es la formación de un coágulo que puede afectar venas o arterias. Puede asociarse a factores transitorios o persistentes, y su abordaje depende del tipo de evento, la localización y el contexto de cada persona. Hematología suele participar en la evaluación de factores de riesgo, estudios de coagulación cuando corresponde y en el seguimiento de tratamientos anticoagulantes, siempre de forma individualizada. Este texto no reemplaza la valoración de un evento agudo, que debe resolverse en un ámbito asistencial adecuado.",
    sintomas: [
      "Dolor, hinchazón o enrojecimiento en una extremidad (en algunos casos de trombosis venosa)",
      "Síntomas respiratorios o dolor torácico, que requieren atención inmediata",
      "Hallazgos en estudios de imágenes indicados por un equipo médico",
      "Los síntomas no son específicos y no permiten confirmar el diagnóstico por sí solos",
    ],
    cuandoConsultar: [
      "Ante un diagnóstico reciente de trombosis, para orientación y seguimiento",
      "Si se indicó anticoagulación y se necesita control hematológico",
      "Cuando existen dudas sobre estudios de coagulación o antecedentes familiares relevantes",
      "Ante una situación aguda con dolor intenso, falta de aire o síntomas graves: acudir a emergencias",
    ],
  },
  {
    id: "alteraciones-coagulacion",
    nombre: "Alteraciones de la coagulación",
    slug: "alteraciones-de-la-coagulacion",
    icono: "shield",
    resumen:
      "Tendencia a sangrado o a formar coágulos. Se evalúa con historia clínica y estudios dirigidos.",
    descripcion:
      "Las alteraciones de la coagulación pueden manifestarse como tendencia al sangrado, hematomas frecuentes, o bien como una predisposición a formar coágulos. Incluyen un grupo amplio de situaciones, desde hallazgos de laboratorio hasta trastornos congénitos o adquiridos. La evaluación hematológica considera antecedentes personales y familiares, medicamentos, cirugías previas y estudios de hemostasia cuando están indicados. Ningún valor de laboratorio se interpreta de forma aislada.",
    sintomas: [
      "Hematomas o sangrados más frecuentes de lo habitual",
      "Sangrado prolongado ante procedimientos",
      "Hallazgos alterados en estudios de coagulación",
      "En otros casos, antecedentes de eventos trombóticos",
    ],
    cuandoConsultar: [
      "Si un análisis muestra alteraciones en pruebas de coagulación",
      "Antes de procedimientos, si existe antecedente de sangrado o de trombosis",
      "Cuando otra especialidad solicita evaluación de hemostasia",
      "Si hay dudas sobre medicación anticoagulante o antiagregante (sin suspenderla por cuenta propia)",
    ],
  },
  {
    id: "plaquetas-bajas",
    nombre: "Plaquetas bajas",
    slug: "plaquetas-bajas",
    icono: "trendingDown",
    resumen:
      "Trombocitopenia: menor cantidad de plaquetas. Requiere contexto clínico para interpretarla.",
    descripcion:
      "Se habla de plaquetas bajas (trombocitopenia) cuando el recuento plaquetario está por debajo del rango de referencia del laboratorio. Puede deberse a múltiples causas, algunas transitorias y otras que requieren estudio hematológico. El significado clínico depende del valor, de la rapidez del cambio, de síntomas asociados y de otros hallazgos del hemograma. Un resultado aislado no equivale a un diagnóstico.",
    sintomas: [
      "En algunos casos, moretones o puntos rojos en la piel",
      "Sangrado de encías o nariz",
      "Puede no generar síntomas y detectarse en un análisis de rutina",
      "Cualquier sangrado importante requiere atención médica inmediata",
    ],
    cuandoConsultar: [
      "Cuando un hemograma muestra un recuento plaquetario disminuido",
      "Si hay sangrado, moretones inexplicados o petequias",
      "Si se indica control evolutivo o estudios complementarios",
      "Ante un descenso marcado o síntomas de alarma: consultar de forma urgente",
    ],
  },
  {
    id: "plaquetas-elevadas",
    nombre: "Plaquetas elevadas",
    slug: "plaquetas-elevadas",
    icono: "trendingUp",
    resumen:
      "Trombocitosis: recuento plaquetario por encima del rango de referencia.",
    descripcion:
      "Las plaquetas elevadas (trombocitosis) pueden observarse en contextos reactivos (por ejemplo, asociados a otras condiciones médicas) o, con menor frecuencia, en trastornos hematológicos. La interpretación siempre requiere correlacionar el recuento con el resto del hemograma, la historia clínica y, si corresponde, estudios adicionales. No corresponde asumir un diagnóstico a partir de un único valor.",
    sintomas: [
      "Con frecuencia no produce síntomas y se detecta en un análisis",
      "En algunos casos puede coexistir con otros hallazgos de laboratorio",
      "Los síntomas, de existir, no son específicos",
    ],
    cuandoConsultar: [
      "Si un recuento plaquetario se mantiene elevado en controles sucesivos",
      "Cuando el médico de cabecera sugiere evaluación hematológica",
      "Si hay otros valores del hemograma alterados de forma concomitante",
    ],
  },
  {
    id: "globulos-blancos-elevados",
    nombre: "Glóbulos blancos elevados",
    slug: "globulos-blancos-elevados",
    icono: "trendingUp",
    resumen:
      "Leucocitosis: aumento de glóbulos blancos. Tiene múltiples causas posibles.",
    descripcion:
      "Un recuento elevado de glóbulos blancos (leucocitosis) puede relacionarse con infecciones, inflamación, medicamentos, estrés fisiológico u otras situaciones, y en algunos casos con enfermedades hematológicas. El tipo de células que se encuentran aumentadas (neutrófilos, linfocitos u otras) aporta información, pero no alcanza para un diagnóstico por sí solo. Hematología interviene cuando el hallazgo persiste, se asocia a otras alteraciones o requiere estudios específicos.",
    sintomas: [
      "Puede no haber síntomas y detectarse en un análisis de control",
      "A veces se asocia a un cuadro infeccioso o inflamatorio",
      "Fiebre, cansancio u otros síntomas generales, que deben valorarse en consulta",
    ],
    cuandoConsultar: [
      "Si la leucocitosis persiste o se acompaña de otras alteraciones del hemograma",
      "Cuando se indica un frotis de sangre periférica u otros estudios",
      "Si otra especialidad deriva a Hematología para ampliar la evaluación",
    ],
  },
  {
    id: "globulos-blancos-disminuidos",
    nombre: "Glóbulos blancos disminuidos",
    slug: "globulos-blancos-disminuidos",
    icono: "trendingDown",
    resumen:
      "Leucopenia o neutropenia: menor cantidad de glóbulos blancos o de un subtipo.",
    descripcion:
      "La disminución de glóbulos blancos (leucopenia) o de neutrófilos (neutropenia) puede tener causas diversas, incluyendo infecciones virales, medicamentos, deficiencias nutricionales o trastornos hematológicos. El riesgo y el abordaje dependen del valor, de su duración y del contexto clínico. Un resultado aislado debe interpretarse con el resto del hemograma y con la evaluación médica.",
    sintomas: [
      "Puede ser un hallazgo de laboratorio sin síntomas",
      "En algunos casos, infecciones recurrentes o fiebre",
      "La fiebre en personas con recuentos muy bajos requiere evaluación urgente",
    ],
    cuandoConsultar: [
      "Ante un recuento de glóbulos blancos o neutrófilos disminuido",
      "Si hay fiebre, infecciones reiteradas u otros síntomas asociados",
      "Cuando se necesita orientación sobre controles o estudios complementarios",
    ],
  },
  {
    id: "policitemia",
    nombre: "Policitemia",
    slug: "policitemia",
    icono: "circleDot",
    resumen:
      "Aumento de glóbulos rojos o del hematocrito. Puede ser primario o secundario.",
    descripcion:
      "La policitemia se refiere a un aumento de la masa eritrocitaria, que en la práctica suele sospecharse ante hematocrito o hemoglobina elevados. Puede ser secundaria a otras condiciones (por ejemplo, relacionadas con oxígeno o tabaco) o, en algunos casos, formar parte de un trastorno mieloproliferativo. El estudio hematológico busca comprender el origen del hallazgo y definir controles. No se debe iniciar ni suspender tratamientos a partir de esta información educativa.",
    sintomas: [
      "A veces no hay síntomas y se detecta en un análisis",
      "Cefalea, enrojecimiento o molestias inespecíficas en algunos casos",
      "Los síntomas no confirman el diagnóstico",
    ],
    cuandoConsultar: [
      "Si el hematocrito o la hemoglobina se encuentran elevados de forma reiterada",
      "Cuando el médico de cabecera solicita evaluación hematológica",
      "Si coexisten otras alteraciones del hemograma",
    ],
  },
  {
    id: "mieloma-multiple",
    nombre: "Mieloma múltiple",
    slug: "mieloma-multiple",
    icono: "bone",
    resumen:
      "Trastorno de células plasmáticas. Su diagnóstico y seguimiento son estrictamente médicos.",
    descripcion:
      "El mieloma múltiple es una enfermedad hematológica que involucra a las células plasmáticas. Puede sospecharse a partir de síntomas, hallazgos de laboratorio o estudios de imágenes, pero el diagnóstico requiere una evaluación especializada y estudios específicos. En este sitio se ofrece información general para orientar la consulta; no se describen criterios diagnósticos ni tratamientos. Cada situación es particular y debe ser abordada por un equipo de salud.",
    sintomas: [
      "Cansancio, dolor óseo u otros síntomas generales, que no son exclusivos de esta enfermedad",
      "Alteraciones en análisis de sangre o de orina indicados por un profesional",
      "Muchas personas consultan por hallazgos de laboratorio y no por un síntoma único",
    ],
    cuandoConsultar: [
      "Si otra especialidad sugiere evaluación hematológica por proteinograma u otros hallazgos",
      "Ante síntomas persistentes que el médico considera necesario estudiar",
      "Para orientación sobre estudios o seguimiento ya indicados",
    ],
  },
  {
    id: "leucemias",
    nombre: "Leucemias",
    slug: "leucemias",
    icono: "microscope",
    resumen:
      "Grupo de enfermedades de la sangre. Requieren diagnóstico especializado; la información aquí es general.",
    descripcion:
      "Las leucemias son un conjunto de enfermedades hematológicas que afectan la producción de células sanguíneas. Existen distintos tipos, con presentaciones y evoluciones muy diferentes. El diagnóstico se basa en estudios clínicos y de laboratorio específicos, y el tratamiento lo define un equipo especializado. Esta página no busca alarmar ni clasificar síntomas: su objetivo es facilitar el acceso a una consulta si ya existen hallazgos o una derivación médica.",
    sintomas: [
      "Cansancio, fiebre, moretones o infecciones, que también ocurren en muchas otras condiciones",
      "Alteraciones en el hemograma que motivan una derivación",
      "Ningún síntoma permite, por sí solo, afirmar o descartar una leucemia",
    ],
    cuandoConsultar: [
      "Cuando un hemograma u otros estudios motivan una evaluación hematológica",
      "Si existe una derivación formal de otro profesional",
      "Para una segunda opinión o seguimiento, según indicación médica",
      "Ante síntomas agudos intensos o deterioro rápido: consultar en emergencias",
    ],
  },
  {
    id: "linfomas",
    nombre: "Linfomas",
    slug: "linfomas",
    icono: "layers",
    resumen:
      "Tumores del sistema linfático. El diagnóstico es médico y no se realiza por síntomas aislados.",
    descripcion:
      "Los linfomas son un grupo heterogéneo de enfermedades que se originan en el sistema linfático. Pueden presentarse de formas muy distintas y su estudio corresponde a equipos de Hematología y especialidades relacionadas. La información de esta ficha es introductoria: no enumera criterios diagnósticos ni pronósticos. Cualquier adenopatía o síntoma persistente debe valorarse en consulta, sin asumir un diagnóstico a partir de internet.",
    sintomas: [
      "Ganglios aumentados de tamaño, que también pueden deberse a infecciones u otras causas",
      "Síntomas generales inespecíficos (cansancio, fiebre o sudoración), que no son exclusivos",
      "Hallazgos en estudios de imágenes o laboratorio solicitados por un profesional",
    ],
    cuandoConsultar: [
      "Si el médico de cabecera indica evaluación hematológica",
      "Ante ganglios persistentes u otros síntomas que un profesional considera necesario estudiar",
      "Para orientación sobre estudios ya realizados",
    ],
  },
  {
    id: "trastornos-hierro",
    nombre: "Trastornos del hierro",
    slug: "trastornos-del-hierro",
    icono: "flaskConical",
    resumen:
      "Déficit o sobrecarga de hierro. Se interpretan con laboratorio y contexto clínico.",
    descripcion:
      "Los trastornos del hierro incluyen tanto el déficit (frecuente y con distintas causas) como la sobrecarga. Los valores de ferritina, saturación de transferrina y hemoglobina se interpretan en conjunto y pueden modificarse por inflamación u otras condiciones. Hematología puede participar cuando el déficit es de difícil explicación, se asocia a anemia, o cuando se sospecha una sobrecarga que requiere estudio. No se recomienda automedicarse con hierro ni suspender indicaciones vigentes sin consulta.",
    sintomas: [
      "En el déficit: cansancio u otros síntomas de anemia, cuando esta existe",
      "En la sobrecarga: a menudo pocos síntomas iniciales; suele detectarse por laboratorio",
      "Los análisis de hierro no se interpretan de forma aislada",
    ],
    cuandoConsultar: [
      "Si los estudios de hierro o la ferritina están alterados",
      "Cuando la anemia se asocia a déficit de hierro y se busca su origen",
      "Si existe sospecha de sobrecarga o antecedentes familiares relevantes",
    ],
  },
];

export function getPatologiaBySlug(slug: string) {
  return patologias.find((item) => item.slug === slug);
}

export const patologiaSlugs = patologias.map((item) => item.slug);
