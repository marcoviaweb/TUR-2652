"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- full document navigation is required by the deployed Sites runtime */

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown, ArrowLeft, ArrowRight, BookOpenCheck, Boxes, Check,
  ClipboardCheck, Flag, ListChecks, MapPinned, Route, ShieldCheck,
  Sparkles, UsersRound,
} from "lucide-react";
import { ProductOneHeader } from "@/components/product-one-header";
import { artifacts } from "@/lib/product-one";
import { getRemainingArtifact } from "@/lib/remaining-artifacts";

const icons = [UsersRound, Boxes, ShieldCheck, Sparkles, Route, MapPinned, ListChecks, ClipboardCheck, BookOpenCheck, Flag];

export function RemainingArtifactDetail({ slug }: { slug: string }) {
  const reduceMotion = useReducedMotion();
  const artifact = getRemainingArtifact(slug)!;
  const Icon = icons[artifact.order - 4];
  const index = artifacts.findIndex((item) => item.slug === slug);
  const previous = artifacts[index - 1];
  const next = artifacts[index + 1];
  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: .12 },
    transition: { duration: .62, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <main className="raa-page" style={{ "--raa-accent": artifact.accent } as React.CSSProperties}>
      <section className="raa-hero">
        <Image className="raa-hero-image" src={artifact.image} alt={artifact.imageAlt} fill priority sizes="100vw" />
        <div className="raa-hero-shade" />
        <ProductOneHeader compact />
        <div className="section-shell raa-hero-content">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <a className="raa-back" href="/producto-1"><ArrowLeft aria-hidden="true" /> Ruta del producto</a>
            <p className="raa-kicker"><span />{artifact.eyebrow}</p>
            <h1>{artifact.title}</h1>
            <p className="raa-lead">{artifact.heroLead}</p>
            <a className="raa-scroll" href="#definicion">Explorar el artefacto <ArrowDown aria-hidden="true" /></a>
          </motion.div>
          <motion.div className="raa-orbit" initial={reduceMotion ? false : { opacity: 0, scale: .75 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .18, duration: .7 }} aria-hidden="true"><Icon /><span>{String(artifact.order).padStart(2, "0")}</span></motion.div>
        </div>
      </section>

      <section id="definicion" className="section-shell raa-definition">
        <motion.div {...reveal}>
          <p className="raa-label">Qué es</p>
          <h2>Una decisión visible para avanzar con claridad.</h2>
        </motion.div>
        <motion.div {...reveal} className="raa-definition-copy">
          <p>{artifact.definition}</p>
          <aside><Icon aria-hidden="true" /><div><small>Propósito</small><strong>{artifact.purpose}</strong></div></aside>
        </motion.div>
      </section>

      <section className="raa-template">
        <div className="section-shell">
          <motion.header {...reveal} className="raa-section-heading"><div><p>La plantilla</p><h2>{artifact.templateTitle}</h2></div><span>{artifact.templateIntro}</span></motion.header>
          <div className="raa-template-grid">
            {artifact.template.map((block, blockIndex) => (
              <motion.article {...reveal} key={block.title}>
                <header><small>{String(blockIndex + 1).padStart(2, "0")}</small><Icon aria-hidden="true" /></header>
                <h3>{block.title}</h3>
                {block.meta && <p className="raa-meta">{block.meta}</p>}
                <ul>{block.items.map((item) => <li key={item}><span />{item}</li>)}</ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="raa-applied">
        <div className="section-shell">
          <motion.header {...reveal} className="raa-section-heading raa-heading-light"><div><p>Aplicación al producto</p><h2>{artifact.appliedTitle}</h2></div><span>{artifact.appliedIntro}</span></motion.header>
          <div className="raa-applied-list">
            {artifact.applied.map((block, blockIndex) => (
              <motion.article {...reveal} key={block.title}>
                <div className="raa-index">{String(blockIndex + 1).padStart(2, "0")}</div>
                <div className="raa-card-copy">
                  <header><div>{block.meta && <small>{block.meta}</small>}<h3>{block.title}</h3></div>{block.score && <strong>{block.score}</strong>}</header>
                  {block.lead && <p className="raa-card-lead">{block.lead}</p>}
                  <ul>{block.items.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="raa-closing">
        <motion.div {...reveal} className="section-shell">
          <Icon aria-hidden="true" />
          <p>Resultado del artefacto</p>
          <h2>{artifact.closingTitle}</h2>
          <span>{artifact.closingText}</span>
        </motion.div>
      </section>

      <nav className="section-shell raa-nav" aria-label="Navegación entre artefactos">
        <a href={`/producto-1/${previous.slug}`}><ArrowLeft aria-hidden="true" /><span><small>Anterior</small><strong>{previous.title}</strong></span></a>
        {next ? <a href={`/producto-1/${next.slug}`}><span><small>Siguiente</small><strong>{next.title}</strong></span><ArrowRight aria-hidden="true" /></a> : <a href="/producto-1"><span><small>Finalizar</small><strong>Ver la ruta completa</strong></span><ArrowRight aria-hidden="true" /></a>}
      </nav>
      <footer className="raa-footer"><div className="section-shell"><span>La Paz desde las alturas a la luna</span><span>Producto 1 · Desarrollo ágil</span></div></footer>
    </main>
  );
}
