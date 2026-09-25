"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- full document navigation is required by the deployed Sites runtime */

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import {
  ArrowDown, ArrowLeft, ArrowRight, AudioLines, BusFront, Camera,
  Check, Compass, Headphones, Leaf, MapPin, Moon, Mountain,
  ShieldCheck, Smartphone, Sparkles, TramFront, UsersRound, Utensils,
  Waves,
} from "lucide-react";
import { ProductOneHeader } from "@/components/product-one-header";

const templateDimensions = [
  ["Nombre del servicio", "Identificación con la cual será conocido el proyecto."],
  ["Contexto y oportunidad", "Ubicación, necesidad no atendida y segmento de clientes al que responde."],
  ["Relato de la experiencia", "Descripción cronológica desde la recepción hasta el cierre y el retorno."],
  ["Componentes incluidos", "Elementos tangibles e intangibles: transporte, guías, alimentación, equipamiento, seguros y tecnología."],
  ["Innovación y diferenciación", "El atributo único que distingue al servicio de la oferta tradicional."],
] as const;

const journey = [
  { time: "09:00", title: "Punto de encuentro", text: "La experiencia comienza en un punto céntrico de La Paz. El grupo aborda un minibús privado con seguimiento GPS y seguro de accidentes personales.", icon: BusFront },
  { time: "+20 min", title: "Línea Roja", text: "En la estación, dos guías profesionales bilingües realizan el control de seguridad, entregan audífonos y explican la dinámica del recorrido.", icon: TramFront },
  { time: "En altura", title: "Línea Plateada", text: "Los visitantes escuchan historias, música y explicaciones sobre la topografía paceña mientras observan la ciudad desde las cabinas.", icon: Headphones },
  { time: "Conexión", title: "Rumbo al valle", text: "Al terminar el trayecto aéreo, el transporte privado lleva al grupo al Valle de la Luna para iniciar la exploración sensorial.", icon: MapPin },
  { time: "Exploración", title: "Búsqueda lunar", text: "Una aplicación móvil con realidad aumentada guía el descubrimiento de imágenes y pistas vinculadas con la tierra, el agua, los sonidos, los sabores, los aromas y la memoria cultural.", icon: Smartphone },
  { time: "Cierre", title: "Vivir la cultura", text: "El grupo escucha música nacional, utiliza vestimenta típica paceña, baila y crea fotografías. La experiencia concluye con fotografías y videos digitales de recuerdo.", icon: Camera },
] as const;

const stations = [
  { number: "01", title: "Tierra", text: "Interpretación de las formaciones geológicas que construyen el paisaje lunar.", icon: Mountain },
  { number: "02", title: "Agua", text: "Descubrimiento de las huellas que dejó el agua al modelar las formaciones del valle.", icon: Waves },
  { number: "03", title: "Sabores y aromas", text: "Flora y fauna del lugar acompañadas por una degustación de productos bolivianos.", icon: Leaf },
  { number: "04", title: "Sonidos de los Andes", text: "Viento, instrumentos y paisaje se combinan en una escucha inmersiva con audífonos.", icon: AudioLines },
  { number: "05", title: "Memoria cultural", text: "Relatos sobre cultura, danzas y vestimenta que conectan el territorio con su identidad.", icon: UsersRound },
] as const;

const components = [
  { title: "Logística y transporte", text: "Minibús privado con rastreo GPS y seguro de accidentes personales.", icon: BusFront },
  { title: "Guía y mediación", text: "Dos guías profesionales bilingües en español e inglés.", icon: UsersRound },
  { title: "Tecnología y equipo", text: "Aplicación de realidad aumentada, audífonos, señalética, parlante y trajes típicos.", icon: Smartphone },
  { title: "Sabores bolivianos", text: "Mate de cedrón, mate de coca, sucumbé, chocolates Ceibo, quinua y pito de cañahua.", icon: Utensils },
  { title: "Seguridad y salud", text: "Botiquín de primeros auxilios, control de seguridad y protocolo de deslinde legal.", icon: ShieldCheck },
] as const;

export function ConceptServiceDetail() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, .22], [0, reduceMotion ? 0 : 90]);
  const reveal = { initial: reduceMotion ? false : { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .16 }, transition: { duration: .65, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <main className="concept-page min-h-screen">
      <motion.div className="concept-progress" style={{ scaleX: scrollYProgress }} />
      <section className="concept-hero">
        <motion.div className="concept-hero-image" style={{ y: imageY }}><Image src="/valle-luna-hero.png" alt="Formaciones del Valle de la Luna iluminadas por el atardecer" fill priority sizes="100vw" className="object-cover" /></motion.div>
        <div className="concept-hero-shade" /><div className="lunar-grain" />
        <ProductOneHeader compact />
        <div className="section-shell relative z-10 flex min-h-[760px] items-end pb-20 pt-20 lg:pb-28">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="max-w-[920px]">
            <a className="artifact-breadcrumb" href="/producto-1"><ArrowLeft aria-hidden="true" /> Ruta del Producto 1</a>
            <p className="concept-kicker mt-10"><span /> Fase 01 · Descubrir · Artefacto 01</p>
            <h1>Concepto<br /><em>del servicio</em></h1>
            <p className="concept-hero-lead">La ficha que convierte una idea turística en una experiencia comprensible: define para quién existe, cómo se vive, qué necesita y por qué es diferente.</p>
            <a href="#definicion" className="concept-primary-cta">Descubrir el concepto <ArrowDown aria-hidden="true" /></a>
          </motion.div>
        </div>
        <div className="concept-hero-number" aria-hidden="true">01</div>
      </section>

      <section id="definicion" className="concept-definition section-shell py-24 lg:py-36">
        <motion.div {...reveal} className="concept-section-label"><Compass aria-hidden="true" /><span>Definición académica</span></motion.div>
        <motion.div {...reveal} className="concept-definition-grid">
          <h2>El puente entre<br />la idea y la acción.</h2>
          <div><p>El concepto del servicio es una representación cualitativa y estructurada que describe de manera integral la naturaleza, el flujo operativo y el valor diferencial de la experiencia turística.</p><p>Su propósito es precisar el alcance, el contexto de mercado y los componentes esenciales para que el equipo comparta una misma comprensión antes de convertir la propuesta en épicas e historias de usuario.</p></div>
        </motion.div>
      </section>

      <section className="concept-template py-24 lg:py-32">
        <div className="section-shell">
          <motion.div {...reveal} className="concept-heading"><div><p>La plantilla</p><h2>Cinco preguntas<br />dan forma al servicio.</h2></div><span>Estas dimensiones permiten revisar la propuesta con un lenguaje común y comprobar que la experiencia está completa.</span></motion.div>
          <div className="concept-dimensions">{templateDimensions.map(([title, text], index) => <motion.article {...reveal} key={title}><small>0{index + 1}</small><h3>{title}</h3><p>{text}</p></motion.article>)}</div>
        </div>
      </section>

      <section className="concept-application py-24 lg:py-36">
        <div className="section-shell">
          <motion.div {...reveal} className="concept-section-label concept-section-label-light"><Moon aria-hidden="true" /><span>Aplicación al producto turístico</span></motion.div>
          <motion.div {...reveal} className="concept-name"><div><p>Nombre del servicio</p><h2>La Paz desde las alturas <em>a la luna</em></h2></div><span>Una vivencia experiencial diferente entre el teleférico y el Valle de la Luna.</span></motion.div>
          <motion.article {...reveal} className="concept-opportunity"><div className="concept-orbit"><Sparkles aria-hidden="true" /></div><div><p className="concept-mini-label">Contexto y oportunidad</p><h3>De contemplar La Paz<br />a formar parte de ella.</h3></div><p>El proyecto conecta dos íconos del municipio de La Paz: la red de Mi Teleférico y el Valle de la Luna. Responde a jóvenes profesionales, viajeros independientes y visitantes de 22 a 40 años que buscan experiencias participativas, culturales, sensoriales y fotográficas. La oportunidad consiste en transformar un recorrido contemplativo en una vivencia inmersiva que combina paisaje, relatos, tecnología accesible, sabores locales y participación activa.</p></motion.article>
        </div>
      </section>

      <section className="concept-human-gallery" aria-label="Viajeros disfrutando la experiencia">
        <motion.figure {...reveal} className="concept-photo concept-photo-wide"><Image src="/concepto-teleferico.webp" alt="Viajeros escuchando relatos y disfrutando la vista de La Paz desde el teleférico" fill sizes="(min-width: 900px) 50vw, 100vw" className="object-cover" /><figcaption><small>01 · Elevarse</small><strong>La ciudad se escucha desde el cielo.</strong></figcaption></motion.figure>
        <motion.figure {...reveal} className="concept-photo concept-photo-tall"><Image src="/concepto-exploracion.webp" alt="Viajeros exploran las formaciones del Valle de la Luna junto a un guía local" fill sizes="(min-width: 900px) 50vw, 100vw" className="object-cover" /><figcaption><small>02 · Explorar</small><strong>El paisaje se convierte en descubrimiento.</strong></figcaption></motion.figure>
        <motion.div {...reveal} className="concept-gallery-quote"><Sparkles aria-hidden="true" /><p>Viajar no es solamente llegar a un lugar.</p><strong>Es participar de su historia.</strong></motion.div>
        <motion.figure {...reveal} className="concept-photo concept-photo-wide"><Image src="/concepto-cultura.webp" alt="Visitantes comparten bebidas y sabores bolivianos con anfitriones locales" fill sizes="(min-width: 900px) 50vw, 100vw" className="object-cover" /><figcaption><small>03 · Compartir</small><strong>Los sabores también cuentan La Paz.</strong></figcaption></motion.figure>
      </section>

      <section className="concept-route py-24 lg:py-36">
        <div className="section-shell">
          <motion.div {...reveal} className="concept-heading concept-heading-dark"><div><p>Relato de la experiencia</p><h2>Un viaje que cambia<br />con cada altura.</h2></div><span>El visitante no solamente observa lugares: viaja, escucha, descubre, siente y participa.</span></motion.div>
          <div className="concept-route-list">{journey.map((step, index) => { const Icon = step.icon; return <motion.article {...reveal} key={step.title}><div className="concept-route-marker"><Icon aria-hidden="true" /><span>{String(index + 1).padStart(2, "0")}</span></div><div><small>{step.time}</small><h3>{step.title}</h3><p>{step.text}</p></div></motion.article>; })}</div>
        </div>
      </section>

      <section className="concept-stations py-24 lg:py-36">
        <div className="section-shell">
          <motion.div {...reveal} className="concept-heading"><div><p>Exploración sensorial</p><h2>Cinco estaciones.<br />Un paisaje vivo.</h2></div><span>La realidad aumentada despierta la curiosidad; los sentidos convierten el descubrimiento en memoria.</span></motion.div>
          <div className="concept-station-grid">{stations.map((station) => { const Icon = station.icon; return <motion.article {...reveal} key={station.title}><span>{station.number}</span><Icon aria-hidden="true" /><h3>{station.title}</h3><p>{station.text}</p></motion.article>; })}</div>
          <motion.div {...reveal} className="concept-cultural-finale"><Camera aria-hidden="true" /><div><p>Experiencia cultural final</p><h3>Escuchar, vestir, bailar y recordar.</h3><span>Cada visitante se sumerge en la cultura paceña mediante música nacional y vestimenta típica. El cierre incluye fotografías y videos digitales como recuerdo de la experiencia.</span></div></motion.div>
        </div>
      </section>

      <section className="concept-components py-24 lg:py-36">
        <div className="section-shell">
          <motion.div {...reveal} className="concept-heading concept-heading-dark"><div><p>Componentes incluidos</p><h2>Todo lo necesario<br />para vivir la ruta.</h2></div><span>La experiencia integra operación, mediación, tecnología, sabores y seguridad en un solo servicio.</span></motion.div>
          <div className="concept-component-list">{components.map((item, index) => { const Icon = item.icon; return <motion.article {...reveal} key={item.title}><small>0{index + 1}</small><Icon aria-hidden="true" /><h3>{item.title}</h3><p>{item.text}</p></motion.article>; })}</div>
        </div>
      </section>

      <section className="concept-difference py-24 lg:py-36">
        <div className="section-shell"><motion.div {...reveal} className="concept-difference-card"><div className="concept-difference-moon"><Moon aria-hidden="true" /></div><p>Factor de innovación y diferenciación</p><h2>El visitante deja de ser espectador y se convierte en protagonista.</h2><div className="concept-difference-copy"><p>La tecnología de realidad aumentada ayuda a explorar el paisaje; los audífonos crean una capa de sonidos, música y relatos; y la vestimenta típica acerca al visitante a la identidad cultural boliviana.</p><p>La propuesta combina participación, cultura, naturaleza y tecnología accesible con garantías de seguridad, un estándar que busca diferenciarla de las ofertas tradicionales del sector.</p></div><div className="concept-values"><span><Check /> Inmersiva</span><span><Check /> Multisensorial</span><span><Check /> Participativa</span><span><Check /> Segura</span></div></motion.div></div>
      </section>

      <nav className="concept-next section-shell" aria-label="Navegación entre artefactos"><a href="/producto-1"><ArrowLeft /><span><small>Volver</small><strong>Ruta del Producto 1</strong></span></a><a href="/producto-1/vision-del-producto"><span><small>Siguiente artefacto</small><strong>Visión del producto</strong></span><ArrowRight /></a></nav>
      <footer className="lunar-footer py-8"><div className="section-shell flex flex-col gap-2 text-sm sm:flex-row sm:justify-between"><span>TUR-2652 · Producto 1</span><span>Sitio informativo no oficial</span></div></footer>
    </main>
  );
}
