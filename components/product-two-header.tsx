"use client";

import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export function ProductTwoHeader({ compact = false }: { compact?: boolean }) {
  return <header className={`p2-header ${compact ? "p2-header-compact" : ""}`}>
    <a href="/" className="p2-brand"><span><Image src="/logo-turismo.svg" alt="" width={42} height={42} /></span><div><small>Prácticas ágiles para el turismo</small><strong>TUR-2652</strong></div></a>
    <nav aria-label="Navegación del producto"><a href="/producto-1">Producto 1</a><a href="/producto-2#ruta">Ruta STATIK</a><a href="/" className="p2-back"><ArrowLeft aria-hidden="true" /> Inicio</a></nav>
  </header>;
}
