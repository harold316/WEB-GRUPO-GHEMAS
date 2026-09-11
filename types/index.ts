export type IconName =
  | "droplets"
  | "activity"
  | "shield"
  | "circleDot"
  | "trendingUp"
  | "trendingDown"
  | "layers"
  | "microscope"
  | "heartPulse"
  | "scan"
  | "bone"
  | "flaskConical";

export type Patologia = {
  id: string;
  nombre: string;
  slug: string;
  resumen: string;
  descripcion: string;
  sintomas: string[];
  cuandoConsultar: string[];
  icono: IconName;
};

export type Profesional = {
  id: string;
  slug: string;
  titulo: "Dr." | "Dra.";
  nombre: string;
  apellido: string;
  especialidad: string;
  formacion: string[];
  experiencia: string;
  areasInteres: string[];
  sedesIds: string[];
  foto: string;
  bio: string;
  esEjemplo: true;
};

export type Estudio = {
  id: string;
  slug: string;
  nombre: string;
  resumen: string;
  queEs: string;
  paraQue: string;
  comoSeRealiza: string;
  preparacion: string;
  duracionAprox: string;
  resultado: string;
  icono: IconName;
};

export type Sede = {
  id: string;
  slug: string;
  nombre: string;
  direccion: string;
  ciudad: string;
  diasAtencion: string[];
  horarios: string;
  proximasFechas: string[];
  profesionalesIds: string[];
  mapaQuery: string;
  notas: string;
};

export type Articulo = {
  id: string;
  slug: string;
  titulo: string;
  resumen: string;
  fecha: string;
  categoria: string;
  contenido: string[];
};

export type RecursoArchivo = {
  id: string;
  nombre: string;
  descripcion: string;
  tipo: "PDF" | "DOCX" | "TXT";
  audiencia: "pacientes" | "profesionales";
  categoria: string;
  href: string;
  disponible: boolean;
};

export type NavItem = {
  href: string;
  label: string;
};
