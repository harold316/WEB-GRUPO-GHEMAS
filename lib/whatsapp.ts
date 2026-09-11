import { contact } from "@/config/contact";

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(
    message ?? contact.defaultAppointmentMessage,
  );
  const number = digitsOnly(contact.whatsappNumber);
  return `https://wa.me/${number}?text=${text}`;
}

export function getAppointmentUrl() {
  return getWhatsAppUrl(contact.defaultAppointmentMessage);
}

export function getEvaluationUrl() {
  return getWhatsAppUrl(contact.evaluationMessage);
}

export function getProfessionalAppointmentMessage(params: {
  titulo: string;
  nombre: string;
  apellido: string;
}) {
  const articulo = params.titulo === "Dra." ? "la" : "el";
  return `Hola, quisiera solicitar un turno con ${articulo} ${params.titulo} ${params.nombre} ${params.apellido}.`;
}

export function getStudyInquiryMessage(nombre: string) {
  return `Hola, quisiera consultar / solicitar un turno relacionado con: ${nombre}.`;
}

export function getPathologyInquiryMessage(nombre: string) {
  return `Hola, quisiera solicitar una evaluación hematológica. Consulta sobre: ${nombre}.`;
}

export function getLocationAppointmentMessage(sede: string) {
  return `Hola, quisiera solicitar un turno en ${sede}.`;
}

export function getShareMessage(title: string, url: string) {
  return `Te comparto este artículo: ${title} ${url}`;
}
