"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { ArrowDown, ArrowUpRight, CableCar, MapPin, MoonStar } from "lucide-react";
import { artifacts, phases, productOne } from "@/lib/product-one";
import { ProductOneHeader } from "@/components/product-one-header";

export default function ProductOnePage() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });

  return (
    <main className="product-one-page min-h-screen overflow-x-hidden bg-[#f4f8f7] text-[#071a35]">
      <motion.div aria-hidden="true" className="scroll-progress" style={{ scaleX: reduceMotion ? scrollYProgress : progress }} />
      <section className="product-one-hero">
        <ProductOneHeader />
        <div aria-hidden="true" className="product-one-topography" />
        <motion.div aria-hidden="true" className="route-glow route-glow-one" animate={reduceMotion ? undefined : { y: [0, -20, 0], x: [0, 12, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div aria-hidden="true" className="route-glow route-glow-two" animate={reduceMotion ? undefined : { y: [0, 18, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
        <div className="section-shell relative z-10 grid min-h-[690px] items-center gap-12 pb-24 pt-16 lg:grid-cols-[1.15fr_.85fr] lg:pt-20">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}>
            <span className="product-kicker">Producto 01 · Scrum aplicado al turismo</span>
            <h1>{productOne.title}</h1>
            <p className="product-one-subtitle">{productOne.subtitle}</p>
            <p className="product-one-intro">{productOne.description}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link className="product-primary-cta" href="#ruta">Explorar los 13 artefactos <ArrowDown aria-hidden="true" /></Link>
              <span className="product-route-pill"><CableCar aria-hidden="true" /> Mi Teleférico <span>→</span> <MoonStar aria-hidden="true" /> Valle de la Luna</span>
            </div>
          </motion.div>

          <motion.div initial={reduceMotion ? false : { opacity: 0, scale: .92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: .15, duration: .85, ease: [0.22, 1, 0.36, 1] }} className="experience-map">
            <div className="map-orbit map-orbit-a" /><div className="map-orbit map-orbit-b" />
            <span className="map-point map-point-one"><CableCar aria-hidden="true" /><b>Alturas</b><small>Líneas Roja y Plateada</small></span>
            <span className="map-path"><i /><i /><i /><i /><i /></span>
            <span className="map-point map-point-two"><MoonStar aria-hidden="true" /><b>La luna</b><small>Experiencia sensorial</small></span>
            <span className="map-center"><MapPin aria-hidden="true" /><strong>La Paz</strong><small>3.640 m s. n. m.</small></span>
          </motion.div>
        </div>
      </section>

      <section className="product-one-summary">
        <div className="section-shell grid gap-px overflow-hidden rounded-[1.8rem] border border-[#bddbd8] bg-[#bddbd8] sm:grid-cols-3">
          {[["13", "artefactos conectados"], ["5", "momentos del proceso"], ["1", "experiencia turística"]].map(([value, label], index) => (
            <motion.div key={label} initial={reduceMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="bg-white px-7 py-8"><strong>{value}</strong><span>{label}</span></motion.div>
          ))}
        </div>
      </section>

      <section id="ruta" className="section-shell py-24 lg:py-32">
        <div className="mb-16 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div><p className="eyebrow">Ruta de desarrollo</p><h2 className="section-title mt-5">De una idea a una experiencia lista para aprender.</h2></div>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600 lg:justify-self-end">Cada artefacto responde una pregunta distinta. Juntos permiten descubrir, alinear, validar, planificar y ejecutar el producto sin perder de vista al visitante.</p>
        </div>

        <nav aria-label="Etapas del proceso" className="phase-index">
          {phases.map((phase) => <a key={phase.number} href={`#fase-${phase.number}`}><span>{phase.number}</span>{phase.title}</a>)}
        </nav>

        <div className="timeline mt-20">
          {phases.map((phase, phaseIndex) => {
            const phaseArtifacts = artifacts.filter((artifact) => artifact.phase === phaseIndex);
            return (
              <section id={`fase-${phase.number}`} key={phase.number} className="timeline-phase">
                <motion.aside initial={reduceMotion ? false : { opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .35 }} className="phase-copy">
                  <span>{phase.number}</span><h3>{phase.title}</h3><p>{phase.description}</p>
                </motion.aside>
                <div className="timeline-items">
                  {phaseArtifacts.map((artifact, itemIndex) => {
                    const Icon = artifact.icon;
                    return (
                      <motion.article key={artifact.slug} initial={reduceMotion ? false : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ delay: reduceMotion ? 0 : itemIndex * .08, duration: .55, ease: [0.22, 1, 0.36, 1] }} className="timeline-card">
                        <div className="timeline-node"><span>{String(artifact.order).padStart(2, "0")}</span></div>
                        <div className="artifact-vector" aria-hidden="true"><span className="vector-ring" /><Icon /></div>
                        <div className="timeline-card-copy"><p className="artifact-label">Artefacto {String(artifact.order).padStart(2, "0")}</p><h4>{artifact.title}</h4><p>{artifact.short}</p><Link href={`/producto-1/${artifact.slug}`}>Conocer el artefacto <ArrowUpRight aria-hidden="true" /></Link></div>
                      </motion.article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="product-closing">
        <div className="section-shell grid gap-8 py-20 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="eyebrow text-[#74e1d4]">Una ruta, muchas decisiones</p><h2>El valor aparece cuando cada artefacto conecta con el siguiente.</h2></div><Link href="/producto-1/concepto-del-servicio" className="product-primary-cta">Comenzar por el concepto <ArrowUpRight aria-hidden="true" /></Link></div>
      </section>
      <footer className="bg-[#030f20] py-8 text-white"><div className="section-shell flex flex-col gap-2 text-sm text-white/55 sm:flex-row sm:justify-between"><span>TUR-2652 · Prácticas Ágiles para el Turismo</span><span>Sitio informativo no oficial</span></div></footer>
    </main>
  );
}

