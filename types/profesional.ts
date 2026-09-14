export type Profesional = {
  id: string;
  slug: string;
  titulo: "Dr." | "Dra.";
  nombre: string;
  apellido: string;
  especialidad: string;
  MN?: string;
  MP?: string;
  celular?: string;
  email?: string;
  formacion: string[];
  experiencia: string;
  areasInteres: string[];
  sedesIds: string[];
  foto: string;
  bio: string;
  esEjemplo: boolean;
};
