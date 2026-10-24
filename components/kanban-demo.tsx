"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CircleAlert, Filter, X } from "lucide-react";
import { kanbanColumns } from "@/lib/product-two";

const filters = [
  { id: "all", label: "Todas" }, { id: "red", label: "Incidencias" }, { id: "yellow", label: "Cambios" }, { id: "blue", label: "Reservas" }, { id: "gray", label: "Mejoras" },
] as const;

type Card = (typeof kanbanColumns)[number]["cards"][number];

export function KanbanDemo({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [selected, setSelected] = useState<Card | null>(null);
  const reduceMotion = useReducedMotion();
  return <div className={`kanban-demo ${compact ? "kanban-demo-compact" : ""}`}>
    <div className="kanban-toolbar"><div><Filter aria-hidden="true" /><span>Filtrar tarjetas</span></div><div role="group" aria-label="Filtrar por clase de servicio">{filters.map(item => <button key={item.id} className={filter === item.id ? "active" : ""} onClick={() => setFilter(item.id)}><i className={`dot-${item.id}`} />{item.label}</button>)}</div></div>
    <div className="kanban-scroll" tabIndex={0} aria-label="Tablero Kanban desplazable"><div className="kanban-board">
      {kanbanColumns.map((column, columnIndex) => <section className="kanban-column" key={column.title}><header><span>{String(columnIndex + 1).padStart(2, "0")}</span><h3>{column.title}</h3><small>{column.limit}</small></header><div className="kanban-card-list">
        <AnimatePresence mode="popLayout">{column.cards.filter(card => filter === "all" || card.type === filter).map((card, index) => <motion.button layout initial={reduceMotion ? false : { opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .94 }} transition={{ delay: index * .025 }} key={card.title} className={`kanban-card card-${card.type}`} onClick={() => setSelected(card)}><i /><strong>{card.title}</strong><span>{card.meta}</span><small>Ver detalle</small></motion.button>)}</AnimatePresence>
        {column.cards.filter(card => filter === "all" || card.type === filter).length === 0 && <div className="kanban-empty">Sin tarjetas visibles</div>}
      </div></section>)}
    </div></div>
    <p className="kanban-note"><CircleAlert aria-hidden="true" /> Demostración educativa. Las tarjetas permiten explorar el sistema, pero los cambios no se guardan.</p>
    <AnimatePresence>{selected && <motion.div className="kanban-modal-layer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)}><motion.article role="dialog" aria-modal="true" aria-label={`Detalle de ${selected.title}`} initial={reduceMotion ? false : { opacity: 0, y: 20, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10 }} onClick={event => event.stopPropagation()} className={`kanban-modal card-${selected.type}`}><button aria-label="Cerrar detalle" onClick={() => setSelected(null)}><X /></button><span>{selected.meta}</span><h3>{selected.title}</h3><p>La tarjeta muestra el trabajo pendiente, su clase de servicio y la etapa actual. Debe avanzar solo cuando cumpla la condición de salida de esta columna.</p><small>Selecciona otra tarjeta para observar cómo cambia la prioridad.</small></motion.article></motion.div>}</AnimatePresence>
  </div>;
}
