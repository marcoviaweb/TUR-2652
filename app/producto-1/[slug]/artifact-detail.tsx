"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- full document navigation is required by the deployed Sites runtime */

import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Route } from "lucide-react";
import { artifacts, getArtifact, phases, productOne } from "@/lib/product-one";
import { ProductOneHeader } from "@/components/product-one-header";
import { ConceptServiceDetail } from "./concept-service-detail";

export function ArtifactDetail({ slug }: { slug: string }) {
  const reduceMotion = useReducedMotion();
  if (slug === "concepto-del-servicio") return <ConceptServiceDetail />;
  const artifact = getArtifact(slug)!;
  const Icon = artifact.icon;
  const index = artifacts.findIndex((item) => item.slug === artifact.slug);
  const previous = artifacts[index - 1];
  const next = artifacts[index + 1];
  const phase = phases[artifact.phase];
  const reveal = { initial: reduceMotion ? false : { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .2 }, transition: { duration: .55, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <main className="artifact-page min-h-screen bg-[#f4f8f7] text-[#071a35]">
      <section className="artifact-hero">
        <ProductOneHeader compact />
        <div aria-hidden="true" className="artifact-grid" />
        <div className="section-shell relative z-10 grid gap-10 pb-20 pt-16 lg:grid-cols-[1fr_330px] lg:items-end lg:pb-24 lg:pt-24">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
            <a className="artifact-breadcrumb" href="/producto-1"><ArrowLeft aria-hidden="true" /> Producto 1</a>
            <p className="product-kicker mt-10">{phase.number} · {phase.title} · Artefacto {String(artifact.order).padStart(2, "0")}</p>
            <h1>{artifact.title}</h1>
            <p>{artifact.short}</p>
          </motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, scale: .88 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .12, duration: .65 }} className="artifact-hero-symbol" aria-hidden="true"><span /><Icon /></motion.div>
        </div>
      </section>

      <section className="section-shell py-20 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article {...reveal} className="artifact-info-card artifact-info-dark"><span>01</span><p className="eyebrow text-[#74e1d4]">¿Para qué sirve?</p><h2>{artifact.purpose}</h2></motion.article>
          <motion.article {...reveal} className="artifact-info-card"><span>02</span><p className="eyebrow">Aplicación al producto</p><h2>{productOne.title}</h2><p>{artifact.applied}</p></motion.article>
        </div>

        <motion.section {...reveal} className="artifact-evidence mt-6">
          <div><p className="eyebrow">Contenido del artefacto</p><h2>Lo que debe dejar visible</h2><p>Estas evidencias permiten revisar el trabajo, conversar sobre decisiones y avanzar con un criterio compartido.</p></div>
          <ol>{artifact.evidence.map((item, itemIndex) => <li key={item}><span><Check aria-hidden="true" /></span><div><small>0{itemIndex + 1}</small><strong>{item}</strong></div></li>)}</ol>
        </motion.section>

        <motion.aside {...reveal} className="artifact-connection"><Route aria-hidden="true" /><div><p className="eyebrow">Conexión metodológica</p><h2>Ningún artefacto trabaja aislado.</h2><p>La información creada aquí alimenta las decisiones del siguiente paso y puede revisarse cuando el equipo aprende algo nuevo del visitante o de la operación.</p></div></motion.aside>

        <nav className="artifact-pagination" aria-label="Navegación entre artefactos">
          {previous ? <a href={`/producto-1/${previous.slug}`}><ArrowLeft aria-hidden="true" /><span><small>Anterior</small><strong>{previous.title}</strong></span></a> : <a href="/producto-1"><ArrowLeft aria-hidden="true" /><span><small>Volver</small><strong>Ruta completa</strong></span></a>}
          {next ? <a className="artifact-next" href={`/producto-1/${next.slug}`}><span><small>Siguiente</small><strong>{next.title}</strong></span><ArrowRight aria-hidden="true" /></a> : <a className="artifact-next" href="/producto-1"><span><small>Finalizar</small><strong>Ver la ruta completa</strong></span><ArrowRight aria-hidden="true" /></a>}
        </nav>
      </section>
      <footer className="bg-[#030f20] py-8 text-white"><div className="section-shell flex flex-col gap-2 text-sm text-white/55 sm:flex-row sm:justify-between"><span>TUR-2652 · Producto 1</span><span>Sitio informativo no oficial</span></div></footer>
    </main>
  );
}
