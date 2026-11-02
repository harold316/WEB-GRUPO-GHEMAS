import type { Patologia } from "@/types";

export const patologias: Patologia[] = [
  {
    id: "anemia",
    nombre: "Anemia",
    slug: "anemia",
    icono: "droplets",
    flyer: "/images/patologias/anemia-flyer.jpg",
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
    id: "anemia-dietas-veganas",
    nombre: "Anemia en dietas veganas",
    slug: "anemia-dietas-veganas",
    icono: "droplets",
    flyer: "/images/patologias/anemia-dietas-veganas-flyer.png",
    resumen:
      "Una alimentación vegana requiere planificación para cubrir nutrientes relacionados con la formación de glóbulos rojos.",
    descripcion:
      "La anemia puede tener muchas causas y no se diagnostica por seguir una dieta vegana. Una alimentación vegana mal planificada puede no aportar suficiente vitamina B12, hierro u otros nutrientes; ante síntomas o resultados alterados, la evaluación médica y los análisis ayudan a determinar la causa. No iniciar suplementos sin orientación profesional.",
    sintomas: [
      "Cansancio o debilidad persistente",
      "Palidez, mareos o dolor de cabeza",
      "Falta de aire durante actividades habituales",
      "Los síntomas pueden tener otras causas y no confirman anemia por sí solos",
    ],
    cuandoConsultar: [
      "Si un análisis muestra hemoglobina baja o valores de hierro o vitamina B12 alterados",
      "Ante cansancio, palidez u otros síntomas persistentes",
      "Para recibir orientación sobre alimentación, estudios o suplementos",
    ],
  },
  {
    id: "anemia-ferropenica",
    nombre: "Anemia ferropénica",
    slug: "anemia-ferropenica",
    icono: "droplets",
    flyer: "/images/patologias/anemia-ferropenica.jpeg",
    resumen: "Anemia asociada a una disponibilidad insuficiente de hierro para producir hemoglobina.",
    descripcion: "La anemia ferropénica ocurre cuando el organismo no cuenta con hierro suficiente para producir la hemoglobina necesaria. Puede relacionarse con pérdidas de sangre, ingesta insuficiente, problemas de absorción o mayores requerimientos. La evaluación médica busca confirmar la deficiencia y comprender su causa antes de definir el abordaje.",
    sintomas: [
      "Cansancio o debilidad persistente",
      "Palidez, mareos, dolor de cabeza o falta de aire al esfuerzo",
      "En algunas personas, caída del cabello o uñas frágiles",
      "Los síntomas pueden variar y no confirman por sí solos una deficiencia de hierro",
    ],
    cuandoConsultar: [
      "Si un análisis muestra anemia o valores de hierro alterados",
      "Ante cansancio persistente, palidez u otros síntomas que requieren evaluación",
      "No iniciar suplementos de hierro sin consultar: es necesario confirmar el diagnóstico y su causa",
    ],
  },
  {
    id: "anemias-vcm-alto-bajo",
    nombre: "Anemias con VCM alto y bajo",
    slug: "anemias-vcm-alto-bajo",
    icono: "droplets",
    flyer: "/images/patologias/anemia-tipos.jpeg",
    resumen: "El VCM orienta sobre el tamaño de los glóbulos rojos y ayuda a estudiar distintos tipos de anemia.",
    descripcion: "El volumen corpuscular medio (VCM) es un valor del hemograma que describe el tamaño promedio de los glóbulos rojos. Un VCM bajo o alto puede orientar la evaluación hacia distintas causas, pero no determina por sí solo el tipo ni el origen de una anemia. La interpretación requiere considerar el resto del hemograma, los antecedentes y los estudios que indique el equipo de salud.",
    sintomas: [
      "Puede haber cansancio, palidez o falta de aire, aunque los síntomas varían y no identifican por sí solos la causa",
      "En ocasiones se detecta por cambios en el hemograma sin síntomas evidentes",
    ],
    cuandoConsultar: [
      "Si el hemograma informa un VCM bajo o alto, para interpretar el resultado en contexto",
      "Si hay síntomas persistentes o se indicó estudiar la causa de una anemia",
      "Antes de iniciar suplementos o modificar indicaciones, consultar con un profesional",
    ],
  },
  {
    id: "trombosis",
    nombre: "Trombosis",
    slug: "trombosis",
    icono: "activity",
    flyers: [
      "/images/patologias/trombosis-flyer.jpg",
      "/images/patologias/trombosis-causas.jpeg",
    ],
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
    id: "sindrome-antifosfolipidico",
    nombre: "Síndrome antifosfolipídico",
    slug: "sindrome-antifosfolipidico",
    icono: "activity",
    flyer: "/images/patologias/sindrome-antifosfolipidico-flyer.jpeg",
    resumen:
      "Trastorno autoinmune asociado a mayor riesgo de coágulos y, en algunas personas, complicaciones del embarazo.",
    descripcion:
      "El síndrome antifosfolipídico (SAF) es una enfermedad autoinmune en la que ciertos anticuerpos se asocian a trombosis o complicaciones del embarazo. Un resultado positivo aislado no confirma SAF: la interpretación requiere valoración clínica y análisis confirmatorios según indicación profesional. El seguimiento y el tratamiento se individualizan; no iniciar ni suspender anticoagulantes por cuenta propia.",
    sintomas: [
      "Puede no causar síntomas hasta que ocurre una trombosis o una complicación obstétrica",
      "Dolor e hinchazón en una pierna u otros signos de trombosis, que requieren evaluación",
      "Antecedentes de pérdidas gestacionales recurrentes u otras complicaciones del embarazo",
      "Los síntomas por sí solos no confirman el diagnóstico",
    ],
    cuandoConsultar: [
      "Si tuviste una trombosis sin causa clara, especialmente a edad joven",
      "Si presentás pérdidas gestacionales recurrentes o complicaciones obstétricas",
      "Si los análisis muestran anticuerpos antifosfolípidos y necesitás interpretarlos",
      "Ante falta de aire repentina, dolor intenso en el pecho o síntomas neurológicos súbitos, acudir a emergencias",
    ],
  },
  {
    id: "trombosis-venosa-profunda",
    nombre: "Trombosis venosa profunda (TVP)",
    slug: "trombosis-venosa-profunda",
    icono: "activity",
    flyer: "/images/patologias/trombosis-venosa-profunda.jpeg",
    resumen: "Coágulo en una vena profunda, habitualmente de una pierna. Requiere valoración médica oportuna.",
    descripcion: "La trombosis venosa profunda (TVP) ocurre cuando se forma un coágulo en una vena profunda, con frecuencia en una pierna. Puede ser grave si el coágulo se desplaza hacia los pulmones. La evaluación y el tratamiento corresponden a un equipo médico y dependen de cada caso.",
    sintomas: [
      "Hinchazón reciente en una pierna",
      "Dolor o sensibilidad, a menudo en la pantorrilla",
      "Aumento de temperatura, enrojecimiento o cambio de color en la zona",
      "Puede presentarse sin síntomas evidentes",
    ],
    cuandoConsultar: [
      "Ante hinchazón o dolor repentino en una pierna, buscar valoración médica el mismo día",
      "Si aparece falta de aire repentina, dolor en el pecho, desmayo o tos con sangre, acudir a emergencias de inmediato",
      "Si existen antecedentes personales o familiares de trombosis, consultar para una evaluación individual",
    ],
  },
  {
    id: "alteraciones-coagulacion",
    nombre: "Alteraciones de la coagulación",
    slug: "alteraciones-de-la-coagulacion",
    icono: "shield",
    flyer: "/images/patologias/alteraciones-coagulacion-factores.jpeg",
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
    id: "hemorragias",
    nombre: "Hemorragias",
    slug: "hemorragias",
    icono: "droplets",
    flyer: "/images/patologias/hemorragias-causas.jpeg",
    resumen: "El sangrado puede tener distintas causas y requiere interpretarse en su contexto clínico.",
    descripcion: "Las hemorragias o la tendencia al sangrado pueden relacionarse con alteraciones congénitas o adquiridas de la coagulación, problemas plaquetarios, enfermedades, déficits nutricionales o algunos medicamentos. La causa no puede determinarse solo por el aspecto del sangrado o por esta información general; requiere evaluación clínica y, cuando corresponde, estudios de laboratorio.",
    sintomas: [
      "Sangrado nasal o de encías que se repite o tarda en detenerse",
      "Moretones frecuentes o grandes sin una causa clara",
      "Sangrado abundante o prolongado después de una herida o procedimiento",
      "La intensidad y el contexto ayudan al equipo médico a decidir la evaluación necesaria",
    ],
    cuandoConsultar: [
      "Si hay episodios de sangrado repetidos, moretones frecuentes o antecedentes familiares relevantes",
      "Si un análisis o profesional sugiere estudiar la coagulación",
      "Ante sangrado abundante, que no se detiene, debilidad intensa o deterioro rápido, acudir a emergencias",
      "No suspender ni iniciar medicamentos por cuenta propia; consultar al equipo de salud",
    ],
  },
  {
    id: "plaquetas-bajas",
    nombre: "Plaquetas bajas",
    slug: "plaquetas-bajas",
    icono: "trendingDown",
    flyer: "/images/patologias/plaquetas-bajas-flyer.png",
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
    flyer: "/images/patologias/plaquetas-elevadas-flyer.png",
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
    id: "mieloma-multiple",
    nombre: "Mieloma múltiple",
    slug: "mieloma-multiple",
    icono: "bone",
    flyer: "/images/patologias/mieloma-multiple-flyer.jpeg",
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
    id: "globulos-blancos-elevados",
    nombre: "Glóbulos blancos elevados",
    slug: "globulos-blancos-elevados",
    icono: "trendingUp",
    flyer: "/images/patologias/globulos-blancos-elevados-flyer.png",
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
    flyer: "/images/patologias/globulos-blancos-disminuidos-flyer.png",
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
    id: "leucemias",
    nombre: "Leucemias",
    slug: "leucemias",
    icono: "microscope",
    flyer: "/images/patologias/leucemias-flyer.png",
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
    flyer: "/images/patologias/linfomas-flyer.png",
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
  {
    id: "acumulacion-hierro-exceso",
    nombre: "Acumulación de hierro en exceso",
    slug: "acumulacion-hierro-exceso",
    icono: "flaskConical",
    flyer: "/images/patologias/acumulacion-hierro-exceso-flyer.png",
    resumen:
      "La sobrecarga de hierro se evalúa con análisis y antecedentes; una ferritina elevada por sí sola no confirma el diagnóstico.",
    descripcion:
      "La acumulación excesiva de hierro puede relacionarse con distintas causas, como algunas condiciones hereditarias, transfusiones repetidas u otras enfermedades. La evaluación considera ferritina, saturación de transferrina, otros análisis y el contexto clínico; la ferritina también puede elevarse por inflamación o enfermedad hepática. El diagnóstico y el tratamiento requieren valoración profesional. No iniciar suplementos ni tratamientos para reducir el hierro por cuenta propia.",
    sintomas: [
      "Puede no causar síntomas y detectarse en análisis de laboratorio",
      "Cansancio o molestias articulares, que también pueden tener muchas otras causas",
      "Los síntomas por sí solos no confirman una sobrecarga de hierro",
    ],
    cuandoConsultar: [
      "Si los análisis muestran ferritina o saturación de transferrina alteradas",
      "Si hay antecedentes familiares de sobrecarga de hierro",
      "Para interpretar resultados y definir si hacen falta estudios adicionales",
    ],
  },
];

type EnfermedadArea = { nombre: string; slug?: string };
type AreaPatologia = {
  titulo: string;
  enfermedades: EnfermedadArea[];
  patologiaIds: string[];
};

export const areasPatologias: AreaPatologia[] = [
  {
    titulo: "Área 1. Anemias",
    enfermedades: [
      { nombre: "Anemias microcíticas", slug: "anemias-vcm-alto-bajo" },
      { nombre: "Anemias macrocíticas", slug: "anemias-vcm-alto-bajo" },
      { nombre: "Anemia ferropénica", slug: "anemia-ferropenica" },
      { nombre: "Anemias hemolíticas" },
      { nombre: "Anemias por déficit de vitamina B12 y ácido fólico" },
    ],
    patologiaIds: ["anemias-vcm-alto-bajo", "anemia-ferropenica"],
  },
  {
    titulo: "Área 2. Enfermedades trombóticas o trombosis",
    enfermedades: [
      { nombre: "Trombosis venosa profunda", slug: "trombosis-venosa-profunda" },
      { nombre: "Síndrome antifosfolipídico", slug: "sindrome-antifosfolipidico" },
      { nombre: "Trombocitosis (aumento de plaquetas)", slug: "plaquetas-elevadas" },
    ],
    patologiaIds: [
      "trombosis-venosa-profunda",
      "sindrome-antifosfolipidico",
      "plaquetas-elevadas",
    ],
  },
  {
    titulo: "Área 3. Hemorragias",
    enfermedades: [
      { nombre: "Trastornos de la coagulación", slug: "alteraciones-de-la-coagulacion" },
      { nombre: "Plaquetas bajas (trombocitopenia)", slug: "plaquetas-bajas" },
      { nombre: "Púrpura trombocitopénica inmune (PTI)" },
      { nombre: "Púrpuras y manifestaciones hemorrágicas", slug: "hemorragias" },
    ],
    patologiaIds: ["alteraciones-coagulacion", "plaquetas-bajas", "hemorragias"],
  },
  {
    titulo: "Área 4. Enfermedades oncohematológicas",
    enfermedades: [
      { nombre: "Leucemia linfocítica crónica (LLC)", slug: "leucemias" },
      { nombre: "Leucemia mieloide crónica (LMC)", slug: "leucemias" },
      { nombre: "Mieloma múltiple", slug: "mieloma-multiple" },
    ],
    patologiaIds: ["leucemias", "mieloma-multiple"],
  },
];

export function getPatologiaBySlug(slug: string) {
  return patologias.find((item) => item.slug === slug);
}

export const patologiaSlugs = patologias.map((item) => item.slug);
