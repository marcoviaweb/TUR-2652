"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Check, Download, ExternalLink, FileText, Gauge, Leaf, Play, Repeat2, Sparkles, TimerReset } from "lucide-react";
import { ProductTwoHeader } from "@/components/product-two-header";
import { ProductTwoVisual } from "@/components/product-two-visual";
import { KanbanDemo } from "@/components/kanban-demo";
import { PRODUCT_TWO_VIDEO, statikStations } from "@/lib/product-two";

const principles = [
  { icon: Sparkles, title: "Valor", text: "Comenzar por aquello que el visitante realmente aprecia." },
  { icon: Gauge, title: "Flujo", text: "Hacer visible el recorrido de cada solicitud." },
  { icon: TimerReset, title: "Enfoque", text: "Limitar el trabajo para responder con confianza." },
  { icon: Repeat2, title: "Aprendizaje", text: "Medir, ajustar y mejorar una decisión a la vez." },
];

export default function ProductTwoPage() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  const heroY = useTransform(scrollYProgress, [0, .18], ["0px", "80px"]);
  const reveal = { initial: reduce ? false : { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .18 }, transition: { duration: .62, ease: [0.22, 1, 0.36, 1] as const } };
  return <main className="p2-page">
    <motion.div className="p2-progress" style={{ scaleX: reduce ? scrollYProgress : progress }} />
    <section className="p2-hero"><div className="p2-grid"/><div className="p2-orbit p2-orbit-a"/><div className="p2-orbit p2-orbit-b"/><ProductTwoHeader />
      <div className="p2-shell p2-hero-layout"><motion.div initial={reduce ? false : { opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85 }} className="p2-hero-copy"><span className="p2-kicker"><i/> Producto 02 · Lean + Kanban</span><h1>De una gran idea a una experiencia <em>que funciona.</em></h1><p>Organizamos cada solicitud, coordinación y momento del recorrido para ofrecer un viaje fluido, confiable y preparado para mejorar.</p><div className="p2-actions"><a href="#descubrir">Descubrir el sistema <ArrowDown/></a><span><Leaf/> La Paz · Bolivia</span></div></motion.div>
      <motion.div style={reduce ? undefined : { y: heroY }} className="p2-hero-visual"><ProductTwoVisual variant="hero"/><div className="p2-floating-card"><span>Flujo en curso</span><strong>Experiencia visible</strong><i><b/></i></div></motion.div></div>
    </section>

    <section id="descubrir" className="p2-intro"><div className="p2-shell"><motion.div {...reveal} className="p2-heading"><div><span>El desafío</span><h2>Una experiencia memorable también necesita una operación confiable.</h2></div><p>El visitante ve paisajes, escucha relatos y descubre el Valle. Detrás de ese momento existe un flujo de reservas, cambios, coordinación y aprendizaje que debe funcionar sin fricciones.</p></motion.div><div className="p2-problem-grid">{[["36 h","para confirmar hoy","Meta · 24 h"],["35 min","de espera entre atractivos","Meta · menos de 15"],["1","vehículo disponible","Restricción principal"],["96","solicitudes al mes","36 de alta urgencia"]].map(([value,label,meta],index)=><motion.article {...reveal} key={label}><small>0{index+1}</small><strong>{value}</strong><p>{label}</p><span>{meta}</span></motion.article>)}</div></div></section>

    <section className="p2-lean"><div className="p2-shell"><motion.div {...reveal} className="p2-heading p2-heading-light"><div><span>La mirada Lean</span><h2>Menos espera. Más valor para cada viajero.</h2></div><p>Lean guía las decisiones; Kanban convierte esa intención en un sistema visible que el equipo puede observar y mejorar.</p></motion.div><div className="p2-principles">{principles.map(({icon:Icon,title,text},index)=><motion.article initial={reduce ? false : { opacity:0,y:30 }} whileInView={{opacity:1,y:0}} whileHover={reduce?undefined:{y:-8}} viewport={{once:true}} transition={{delay:index*.08}} key={title}><span><Icon/></span><small>0{index+1}</small><h3>{title}</h3><p>{text}</p></motion.article>)}</div></div></section>

    <section id="ruta" className="p2-route"><div className="p2-shell"><motion.div {...reveal} className="p2-heading"><div><span>Ruta STATIK</span><h2>Ocho estaciones para hacer visible el servicio.</h2></div><p>Cada paso produce la información necesaria para el siguiente. El tablero final no se inventa: se construye desde la realidad de la experiencia.</p></motion.div><div className="p2-stations">{statikStations.map((station,index)=>{const Icon=station.icon;return <motion.article key={station.slug} initial={reduce?false:{opacity:0,x:index%2?28:-28}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:.2}} transition={{duration:.55}}><div className="p2-station-line"><i/><span>{String(station.order).padStart(2,"0")}</span></div><a href={`/producto-2/${station.slug}`}><div className="p2-station-icon"><Icon/></div><div><small>{station.eyebrow}</small><h3>{station.title}</h3><p>{station.short}</p><strong>Explorar estación <ArrowUpRight/></strong></div></a></motion.article>})}</div></div></section>

    <section className="p2-board-section"><div className="p2-shell"><motion.div {...reveal} className="p2-heading p2-heading-light"><div><span>Tablero interactivo</span><h2>Todo el servicio en una sola mirada.</h2></div><p>Filtra las tarjetas por clase de servicio y selecciónalas para comprender cómo se organiza el trabajo.</p></motion.div><KanbanDemo compact/><motion.a {...reveal} href="/producto-2/tablero-kanban" className="p2-board-link">Conocer las reglas del tablero <ArrowUpRight/></motion.a></div></section>

    <section className="p2-media"><div className="p2-shell"><motion.div {...reveal} className="p2-heading"><div><span>Conoce el caso</span><h2>Del paisaje al flujo de valor.</h2></div><p>Mientras se produce el nuevo video de Lean y Kanban, presentamos temporalmente la experiencia turística que da origen al sistema.</p></motion.div><div className="p2-media-grid"><motion.article {...reveal} className="p2-video"><header><Play/><div><small>Video temporal</small><h3>La Paz desde las alturas a la luna</h3></div></header><div><iframe src={`https://www.youtube-nocookie.com/embed/${PRODUCT_TWO_VIDEO}?rel=0`} title="Presentación de La Paz desde las alturas a la luna" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/></div></motion.article><div className="p2-docs">{[
      {tag:"GUÍA PDF",title:"Construye un tablero Kanban con STATIK",text:"Definiciones, plantillas y pasos para aplicar el método en productos turísticos.",href:"/Guia_Kanban_STATIK_Turismo_TUR-2652.pdf",download:"Guia_Kanban_STATIK_Turismo_TUR-2652.pdf"},
      {tag:"CASO PDF",title:"Una travesía organizada con Kanban",text:"Aplicación completa al servicio entre el teleférico y el Valle de la Luna.",href:"/Una_Traves%C3%ADa_Entre_Cielo_Luna_Kanban.pdf",download:"Una_Travesía_Entre_Cielo_Luna_Kanban.pdf"}
    ].map(doc=><motion.article {...reveal} key={doc.tag}><div><FileText/><span>{doc.tag}</span></div><h3>{doc.title}</h3><p>{doc.text}</p><nav><a href={doc.href} target="_blank" rel="noreferrer">Abrir <ExternalLink/></a><a href={doc.href} download={doc.download}>Descargar <Download/></a></nav></motion.article>)}</div></div></div></section>

    <section className="p2-closing"><div className="p2-shell"><motion.div {...reveal}><Check/><span>Validar para avanzar</span><h2>Cuando el trabajo fluye,<br/><em>la experiencia se disfruta.</em></h2><a href="#ruta">Recorrer las ocho estaciones <ArrowUpRight/></a></motion.div><ProductTwoVisual variant="closing"/></div></section>
    <footer className="p2-footer"><div className="p2-shell"><span>TUR-2652 · Producto 2</span><span>Lean · Kanban · Mejora continua</span></div></footer>
  </main>;
}
