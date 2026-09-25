"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, CableCar, Ear, Eye, Footprints, Hand, MapPin, Mountain, Music2, Sparkles, UtensilsCrossed, Wind } from "lucide-react";
import { artifacts, phases } from "@/lib/product-one";
import { ProductOneHeader } from "@/components/product-one-header";

const journey = [
  { number: "01", icon: CableCar, title: "Elevarse", text: "La Paz se abre bajo tus pies desde las líneas Roja y Plateada." },
  { number: "02", icon: Ear, title: "Escuchar", text: "Relatos, música y geografía acompañan el viaje sobre la ciudad." },
  { number: "03", icon: Footprints, title: "Explorar", text: "El sendero entra entre agujas de arcilla moldeadas por agua y tiempo." },
  { number: "04", icon: Sparkles, title: "Sentir Bolivia", text: "Sabores, aromas, sonidos y memoria convierten la visita en vivencia." },
];

const senses = [
  { icon: Eye, name: "Mirar", detail: "Paisaje y realidad aumentada" },
  { icon: Ear, name: "Escuchar", detail: "Relatos y sonidos andinos" },
  { icon: Hand, name: "Tocar", detail: "Texturas y territorio" },
  { icon: UtensilsCrossed, name: "Saborear", detail: "Productos bolivianos" },
  { icon: Music2, name: "Recordar", detail: "Cultura, danza e identidad" },
];

export default function ProductOnePage() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, restDelta: 0.001 });
  const heroY = useTransform(scrollYProgress, [0, .18], ["0%", "12%"]);
  const heroCopyY = useTransform(scrollYProgress, [0, .16], ["0px", "-48px"]);
  const reveal = { initial: reduceMotion ? false : { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .2 }, transition: { duration: .65, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <main className="lunar-page min-h-screen overflow-x-hidden bg-[#f1e8dc] text-[#302521]">
      <motion.div aria-hidden="true" className="lunar-scroll-progress" style={{ scaleX: reduceMotion ? scrollYProgress : progress }} />
      <section className="lunar-hero">
        <motion.div className="lunar-hero-image" style={reduceMotion ? undefined : { y: heroY }} aria-hidden="true"><Image src="/valle-luna-hero.png" alt="" fill priority sizes="100vw" className="object-cover object-[62%_center]" /></motion.div>
        <div className="lunar-hero-shade" /><div className="lunar-grain" aria-hidden="true" />
        <ProductOneHeader />
        <div className="section-shell relative z-10 flex min-h-[820px] items-end pb-20 pt-24 lg:min-h-[880px] lg:pb-24">
          <motion.div style={reduceMotion ? undefined : { y: heroCopyY }} initial={reduceMotion ? false : { opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, ease: [0.22, 1, 0.36, 1] }} className="max-w-[970px]">
            <span className="lunar-kicker"><span /> Experiencia 01 · La Paz, Bolivia</span>
            <h1><span>De las alturas</span><strong>a la luna.</strong></h1>
            <p className="lunar-hero-lead">Una travesía sobre La Paz y dentro de un paisaje de otro mundo.</p>
            <div className="lunar-hero-actions"><a className="lunar-primary-cta" href="#experiencia">Iniciar la expedición <ArrowDown aria-hidden="true" /></a><span><MapPin aria-hidden="true" /> Mi Teleférico <i /> Valle de la Luna</span></div>
          </motion.div>
        </div>
        <div className="lunar-altitude"><span>ALT.</span><strong>3.640</strong><small>m s. n. m.</small></div>
        <div className="lunar-hero-index"><span>01</span><i /><small>Un viaje multisensorial</small></div>
      </section>

      <section id="experiencia" className="lunar-manifesto"><div className="section-shell grid gap-12 py-24 lg:grid-cols-[.72fr_1.28fr] lg:py-36"><motion.div {...reveal}><p className="lunar-eyebrow">La promesa</p><span className="lunar-moon-mark"><Mountain aria-hidden="true" /></span></motion.div><motion.div {...reveal}><h2>No vienes solo a observar. Vienes a formar parte del paisaje.</h2><div className="mt-10 grid gap-8 border-t border-[#9d6b47]/25 pt-8 sm:grid-cols-2"><p>La experiencia conecta el pulso urbano del teleférico con el silencio mineral del Valle de la Luna.</p><p>El visitante viaja, escucha, descubre, prueba y participa en una historia construida con territorio y cultura viva.</p></div></motion.div></div></section>

      <section className="lunar-journey"><div className="section-shell py-24 lg:py-32">
        <motion.div {...reveal} className="lunar-section-heading"><div><p className="lunar-eyebrow text-[#efbe72]">El recorrido</p><h2>De la ciudad<br />al paisaje lunar.</h2></div><p>Cuatro momentos transforman un recorrido turístico en una vivencia personal.</p></motion.div>
        <div className="journey-track"><div className="journey-line" aria-hidden="true"><motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} /></div>{journey.map(({ number, icon: Icon, title, text }, index) => <motion.article key={title} initial={reduceMotion ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: reduceMotion ? 0 : index * .12, duration: .6 }} className="journey-stop"><div className="journey-symbol"><Icon aria-hidden="true" /><span>{number}</span></div><h3>{title}</h3><p>{text}</p></motion.article>)}</div>
      </div></section>

      <section className="lunar-people" aria-label="Momentos de la experiencia turística">
        <div className="section-shell py-24 lg:py-36">
          <motion.div {...reveal} className="lunar-section-heading lunar-section-heading-light"><div><p className="lunar-eyebrow">Así se vive</p><h2>La Paz te espera.<br />Ven a vivirla.</h2></div><p>Una experiencia para mirar La Paz desde otra perspectiva, explorar con curiosidad y compartir su cultura.</p></motion.div>
          <div className="lunar-people-grid">
            <motion.figure {...reveal} className="lunar-people-card lunar-people-card-main"><Image src="/producto1-teleferico.webp" alt="Teleférico rojo sobre La Paz con viajeros y el Illimani iluminado al amanecer" fill sizes="(min-width: 900px) 60vw, 100vw" className="object-cover" /><figcaption><span>01 · Elevarse</span><strong>La aventura comienza sobre una ciudad extraordinaria.</strong></figcaption></motion.figure>
            <motion.figure {...reveal} className="lunar-people-card"><Image src="/producto1-valle.webp" alt="Viajeros contemplan la inmensidad de las formaciones del Valle de la Luna" fill sizes="(min-width: 900px) 40vw, 100vw" className="object-cover" /><figcaption><span>02 · Explorar</span><strong>Encuentra un paisaje que parece de otro mundo.</strong></figcaption></motion.figure>
            <motion.figure {...reveal} className="lunar-people-card"><Image src="/producto1-celebracion.webp" alt="Grupo de viajeros celebra y toma fotografías de La Paz al atardecer" fill sizes="(min-width: 900px) 40vw, 100vw" className="object-cover" /><figcaption><span>03 · Recordar</span><strong>Llévate una historia que querrás volver a contar.</strong></figcaption></motion.figure>
          </div>
          <motion.div {...reveal} className="lunar-people-invite"><div><Sparkles aria-hidden="true" /><span>Una ruta para vivirla, sentirla y recordarla.</span></div><a href="#ruta">Conocer cómo se diseñó <ArrowDown aria-hidden="true" /></a></motion.div>
        </div>
      </section>

      <section className="lunar-senses"><div className="lunar-senses-image" aria-hidden="true"><Image src="/producto1-celebracion.webp" alt="" fill sizes="100vw" className="object-cover object-center" /></div><div className="section-shell relative z-10 py-24 lg:py-36">
        <motion.div {...reveal} className="max-w-[780px]"><p className="lunar-eyebrow text-[#efbe72]">Cinco sentidos · un recuerdo</p><h2>La luna se descubre con todo el cuerpo.</h2><p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/68">Cada estación activa una forma distinta de conectar con el Valle de la Luna y con la identidad cultural de La Paz.</p></motion.div>
        <div className="senses-grid">{senses.map(({ icon: Icon, name, detail }, index) => <motion.article key={name} initial={reduceMotion ? false : { opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={reduceMotion ? undefined : { y: -8 }} viewport={{ once: true }} transition={{ delay: reduceMotion ? 0 : index * .07 }}><Icon aria-hidden="true" /><span>0{index + 1}</span><h3>{name}</h3><p>{detail}</p></motion.article>)}</div>
      </div></section>

      <section className="lunar-facts"><div className="section-shell grid gap-px bg-[#b98a63]/30 md:grid-cols-4">{[["15", "viajeros en el piloto"], ["2", "líneas de teleférico"], ["5", "estaciones sensoriales"], ["1", "Valle de la Luna"]].map(([value, label], index) => <motion.div key={label} {...reveal}><span>0{index + 1}</span><strong>{value}</strong><p>{label}</p></motion.div>)}</div></section>

      <section id="ruta" className="lunar-method section-shell py-24 lg:py-36">
        <motion.div {...reveal} className="lunar-section-heading lunar-section-heading-light"><div><p className="lunar-eyebrow">Detrás de la experiencia</p><h2>Una expedición<br />diseñada con agilidad.</h2></div><p>Los 13 artefactos muestran cómo la idea se convierte en un producto turístico viable, seguro y preparado para aprender de sus visitantes.</p></motion.div>
        <nav aria-label="Etapas del proceso" className="lunar-phase-index">{phases.map((phase) => <a key={phase.number} href={`#fase-${phase.number}`}><span>{phase.number}</span><strong>{phase.title}</strong></a>)}</nav>
        <div className="lunar-timeline">{phases.map((phase, phaseIndex) => <section id={`fase-${phase.number}`} key={phase.number} className="lunar-phase"><motion.aside {...reveal} className="lunar-phase-copy"><span>{phase.number}</span><div><p>Fase</p><h3>{phase.title}</h3><small>{phase.description}</small></div></motion.aside><div className="lunar-artifacts">{artifacts.filter((artifact) => artifact.phase === phaseIndex).map((artifact, itemIndex) => { const Icon = artifact.icon; return <motion.article key={artifact.slug} initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .18 }} transition={{ delay: reduceMotion ? 0 : itemIndex * .08, duration: .55 }} className="lunar-artifact-card"><div className="lunar-artifact-icon"><Icon aria-hidden="true" /></div><div><p>Estación {String(artifact.order).padStart(2, "0")}</p><h4>{artifact.title}</h4><span>{artifact.short}</span><a href={`/producto-1/${artifact.slug}`}>Explorar artefacto <ArrowUpRight aria-hidden="true" /></a></div></motion.article>; })}</div></section>)}</div>
      </section>

      <section className="lunar-closing"><div className="lunar-closing-bg" aria-hidden="true"><Image src="/producto1-valle.webp" alt="" fill sizes="100vw" className="object-cover object-center" /></div><div className="section-shell relative z-10 py-28 text-center lg:py-44"><motion.div {...reveal}><Wind aria-hidden="true" /><p className="lunar-eyebrow text-[#efbe72]">La expedición comienza aquí</p><h2>La Paz se mira desde arriba.<br /><span>La luna se vive desde dentro.</span></h2><a href="#ruta" className="lunar-primary-cta mt-9">Descubrir cómo fue diseñada <ArrowUpRight aria-hidden="true" /></a></motion.div></div></section>
      <footer className="lunar-footer"><div className="section-shell flex flex-col gap-3 py-8 text-sm sm:flex-row sm:items-center sm:justify-between"><span>TUR-2652 · Prácticas Ágiles para el Turismo</span><span>Sitio informativo no oficial · La Paz, Bolivia</span></div></footer>
    </main>
  );
}
