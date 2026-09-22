import { NextResponse } from "next/server";
import { VISITAS_KEY, VISITAS_NAMESPACE } from "@/config/visitas";

function counterUrl(action: "get" | "hit") {
  return `https://abacus.jasoncameron.dev/${action}/${VISITAS_NAMESPACE}/${VISITAS_KEY}`;
}

async function leerValor(action: "get" | "hit") {
  const respuesta = await fetch(counterUrl(action), { cache: "no-store" });
  if (!respuesta.ok) {
    throw new Error(`Contador no disponible (${respuesta.status})`);
  }
  const data = (await respuesta.json()) as { value?: number };
  return typeof data.value === "number" ? data.value : 0;
}

export async function GET() {
  try {
    const total = await leerValor("get");
    return NextResponse.json({ total });
  } catch {
    return NextResponse.json({ total: null }, { status: 503 });
  }
}

export async function POST() {
  try {
    const total = await leerValor("hit");
    return NextResponse.json({ total });
  } catch {
    return NextResponse.json({ total: null }, { status: 503 });
  }
}
