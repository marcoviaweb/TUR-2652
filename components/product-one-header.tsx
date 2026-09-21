import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function ProductOneHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className={`product-header ${compact ? "product-header-compact" : ""}`}>
      <div className="section-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="product-brand" aria-label="Volver a la página principal">
          <span className="grid size-11 place-items-center overflow-hidden rounded-full border border-white/15 bg-white/10 p-1.5">
            <Image src="/logo-turismo.svg" alt="" width={36} height={36} className="size-full object-contain" />
          </span>
          <span><small>Carrera de Turismo</small><strong>TUR-2652</strong></span>
        </Link>
        <Link href="/" className="back-link"><ArrowLeft aria-hidden="true" /> <span>Volver al inicio</span></Link>
      </div>
    </header>
  );
}

