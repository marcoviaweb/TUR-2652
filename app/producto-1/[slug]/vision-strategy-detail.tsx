"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- full document navigation is required by the deployed Sites runtime */

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowLeft, ArrowRight, Binoculars, BriefcaseBusiness, Building2, Camera, Check, Compass, Goal, Handshake, Headphones, Heart, Leaf, Map, Music2, Smartphone, Sparkles, Target, UsersRound } from "lucide-react";
import { ProductOneHeader } from "@/components/product-one-header";

const visionFormula = [
  ["Para", "Segmento objetivo", "Jóvenes y adultos profesionales de 22 a 40 años, viajeros independientes, grupos de amigos y turistas interesados en cultura, fotografía y experiencias innovadoras."],
  ["Que requieren", "Necesidad", "Dejar el papel pasivo del recorrido tradicional para interactuar con La Paz mediante tecnología, naturaleza, cultura y los cinco sentidos."],
  ["El servicio", "Nombre", "La Paz desde las alturas a la luna."],
  ["Es una experiencia de", "Categoría", "Turismo de naturaleza, cultural, experiencial, urbano, sensorial y fotográfico."],
  ["Que ofrece", "Valor diferencial", "Una conexión inmersiva entre el teleférico y el Valle de la Luna que convierte al visitante en protagonista."],
] as const;

const strategyPillars = [
  { number: "01", title: "Grupo objetivo", icon: UsersRound, lead: "Viajeros que buscan algo más que una visita convencional.", items: ["Jóvenes y adultos extranjeros de 22 a 40 años.", "Turistas independientes interesados en cultura, naturaleza, fotografía y redes sociales.", "Hoteles y agencias que desean ofrecer experiencias diferentes a sus huéspedes."] },
  { number: "02", title: "Necesidades", icon: Heart, lead: "Participar, descubrir y llevarse una historia propia.", items: ["Pasar de observador a protagonista.", "Encontrar una experiencia nueva después de conocer los atractivos principales.", "Recibir historias breves e información en el momento oportuno.", "Escuchar, probar, sentir, observar y participar de la cultura.", "Recibir fotografías y un video corto como recuerdo digital."] },
  { number: "03", title: "Atributos", icon: Sparkles, lead: "Una experiencia completa, inmersiva y segura.", items: ["Participación activa del turista.", "Descubrimiento mediante realidad aumentada.", "Paisajes, sonidos andinos, aromas, sabores y texturas.", "Música, danzas y vestimenta como acercamiento a la identidad cultural.", "Transporte privado de ida y vuelta con rastreo GPS."] },
  { number: "04", title: "Objetivos", icon: Goal, lead: "Crear valor turístico, cultural, social y económico.", items: ["Generar ingresos mediante un paquete turístico completo.", "Crear alianzas con hoteles, agencias, restaurantes, operadores y emprendimientos.", "Posicionar La Paz como un destino innovador, tecnológico y cultural.", "Diferenciar la oferta, generar empleo e impulsar la economía local.", "Promover la cultura boliviana y producir impacto económico, cultural y social."] },
] as const;

function useArtifactMotion() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, .2], [0, reduceMotion ? 0 : 90]);
  const reveal = { initial: reduceMotion ? false : { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .15 }, transition: { duration: .62, ease: [0.22, 1, 0.36, 1] as const } };
  return { reduceMotion, scrollYProgress, heroY, reveal };
}

function ArtifactHero({ number, eyebrow, title, italic, lead, image, alt, children }: { number: string; eyebrow: string; title: string; italic: string; lead: string; image: string; alt: string; children: React.ReactNode }) {
  const { reduceMotion, heroY } = useArtifactMotion();
  return <section className="avs-hero"><motion.div className="avs-hero-image" style={reduceMotion ? undefined : { y: heroY }}><Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" /></motion.div><div className="avs-hero-shade" /><div className="lunar-grain" /><ProductOneHeader compact /><div className="section-shell relative z-10 flex min-h-[760px] items-end pb-20 pt-20 lg:pb-28"><motion.div initial={reduceMotion ? false : { opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="max-w-[930px]"><a className="artifact-breadcrumb" href="/producto-1"><ArrowLeft /> Ruta del Producto 1</a><p className="avs-kicker mt-10"><span /> {eyebrow}</p><h1>{title}<em>{italic}</em></h1><p className="avs-hero-lead">{lead}</p>{children}</motion.div></div><div className="avs-hero-number">{number}</div></section>;
}

export function ProductVisionDetail() {
  const { scrollYProgress, reveal } = useArtifactMotion();
  return <main className="avs-page avs-vision"><motion.div className="concept-progress" style={{ scaleX: scrollYProgress }} />
    <ArtifactHero number="02" eyebrow="Fase 01 · Descubrir · Artefacto 02" title="Visión " italic="del producto" lead="Una dirección compartida para crear una experiencia que conecte al visitante con La Paz y permanezca en su memoria." image="/vision-conexion.webp" alt="Viajera contempla las luces de La Paz mientras escucha la experiencia"><a href="#vision" className="avs-primary">Conocer la visión <ArrowDown /></a></ArtifactHero>

    <section id="vision" className="avs-definition section-shell py-24 lg:py-36"><motion.div {...reveal} className="avs-label"><Binoculars /><span>Definición académica</span></motion.div><motion.div {...reveal} className="avs-definition-grid"><h2>La estrella que orienta cada decisión.</h2><div><p>La declaración de visión es una descripción concisa y aspiracional que define el propósito fundamental y el impacto de largo plazo del servicio turístico.</p><p>Su función es alinear al equipo y a las personas interesadas, ofreciendo un marco común para decidir qué construir, para quién y con qué valor.</p></div></motion.div></section>

    <section className="avs-formula py-24 lg:py-32"><div className="section-shell"><motion.div {...reveal} className="avs-heading"><div><p>Plantilla de visión</p><h2>Cinco ideas.<br />Una dirección clara.</h2></div><span>La visión conecta a las personas, su necesidad y la promesa que hace diferente al producto.</span></motion.div><div className="avs-formula-list">{visionFormula.map(([starter,title,text],i)=><motion.article {...reveal} key={title}><small>0{i+1}</small><div><span>{starter}</span><h3>{title}</h3></div><p>{text}</p></motion.article>)}</div></div></section>

    <section className="avs-gallery" aria-label="La visión turística en imágenes"><motion.figure {...reveal}><Image src="/vision-tecnologia.webp" alt="Viajeros descubren el Valle de la Luna mediante tecnología accesible" fill sizes="50vw" className="object-cover" /><figcaption><Smartphone /><span>Descubrir con curiosidad</span></figcaption></motion.figure><motion.figure {...reveal}><Image src="/vision-cultura.webp" alt="Visitantes comparten un momento musical con un artista local" fill sizes="50vw" className="object-cover" /><figcaption><Music2 /><span>Conectar con la cultura</span></figcaption></motion.figure></section>

    <section className="avs-statement py-24 lg:py-36"><div className="section-shell"><motion.div {...reveal} className="avs-label avs-label-light"><Target /><span>Visión aplicada</span></motion.div><motion.blockquote {...reveal}>Convertir a La Paz en un referente de turismo urbano y paisajístico innovador, integrando el teleférico y el Valle de la Luna en una experiencia multisensorial, participativa y sostenible.</motion.blockquote><motion.p {...reveal}>Una propuesta para que turistas nacionales y extranjeros conozcan la ciudad, la experimenten y creen una conexión emocional con su patrimonio natural y cultural.</motion.p></div></section>

    <section className="avs-value py-24 lg:py-36"><div className="section-shell"><motion.div {...reveal} className="avs-heading"><div><p>Propuesta de valor</p><h2>Ver menos desde afuera.<br />Vivir más de cerca.</h2></div><span>La experiencia une sonidos, aromas, sabores, música, vestimenta, paisaje y realidad aumentada.</span></motion.div><div className="avs-value-grid">{[[Headphones,"Escucha","Historias y música acompañan la vista de la ciudad."],[Camera,"Explora","Estaciones temáticas despiertan curiosidad y participación."],[Compass,"Siente","Los sentidos acercan al visitante al territorio."],[Heart,"Recuerda","Cada descubrimiento construye un vínculo personal con La Paz."]].map(([Icon,title,text],i)=><motion.article {...reveal} key={String(title)}><span>0{i+1}</span><Icon /><h3>{String(title)}</h3><p>{String(text)}</p></motion.article>)}</div></div></section>

    <ArtifactNav previous="concepto-del-servicio" previousTitle="Concepto del servicio" next="estrategia-del-producto" nextTitle="Estrategia del producto" />
    <ArtifactFooter />
  </main>;
}

export function ProductStrategyDetail() {
  const { scrollYProgress, reveal } = useArtifactMotion();
  return <main className="avs-page avs-strategy"><motion.div className="concept-progress" style={{ scaleX: scrollYProgress }} />
    <ArtifactHero number="03" eyebrow="Fase 01 · Descubrir · Artefacto 03" title="Estrategia " italic="del producto" lead="Las decisiones que conectan una experiencia memorable con un servicio viable, sostenible y valioso para La Paz." image="/strategy-equipo.webp" alt="Equipo multidisciplinario diseña una experiencia turística sobre un mapa de La Paz"><a href="#estrategia" className="avs-primary">Explorar la estrategia <ArrowDown /></a></ArtifactHero>

    <section id="estrategia" className="avs-definition section-shell py-24 lg:py-36"><motion.div {...reveal} className="avs-label"><Map /><span>Product Vision Board</span></motion.div><motion.div {...reveal} className="avs-definition-grid"><h2>De una gran visión a decisiones concretas.</h2><div><p>El Product Vision Board es una herramienta de modelado estratégico que amplía la visión y la acerca a la ejecución.</p><p>Relaciona el grupo objetivo, las necesidades del mercado, los atributos distintivos de la experiencia y los objetivos que sostienen el servicio y su aporte a la comunidad.</p></div></motion.div></section>

    <section className="avs-strategy-vision py-24 lg:py-32"><div className="section-shell"><motion.div {...reveal}><p>Visión que guía la estrategia</p><h2>La Paz, referente de experiencias urbanas y paisajísticas innovadoras.</h2><span>Teleférico, Valle de la Luna, tecnología y cultura se integran para crear una experiencia inmersiva, participativa y sostenible.</span></motion.div></div></section>

    <section className="avs-pillars py-24 lg:py-36"><div className="section-shell"><motion.div {...reveal} className="avs-heading"><div><p>Tablero estratégico</p><h2>Cuatro decisiones<br />sostienen la experiencia.</h2></div><span>Cada dimensión responde una pregunta necesaria para convertir la visión en un producto viable.</span></motion.div><div className="avs-pillar-grid">{strategyPillars.map(({number,title,icon:Icon,lead,items})=><motion.article {...reveal} key={title}><header><span>{number}</span><Icon /></header><h3>{title}</h3><p>{lead}</p><ul>{items.map(item=><li key={item}><Check />{item}</li>)}</ul></motion.article>)}</div></div></section>

    <section className="avs-strategy-gallery"><motion.figure {...reveal}><Image src="/strategy-alianza.webp" alt="Alianza entre un operador turístico y un hotel de La Paz" fill sizes="50vw" className="object-cover" /><figcaption><Handshake /><div><small>Alianzas que amplían el alcance</small><strong>Hoteles, agencias y operadores conectan la experiencia con nuevos visitantes.</strong></div></figcaption></motion.figure><motion.figure {...reveal}><Image src="/strategy-sostenibilidad.webp" alt="Guía acompaña responsablemente a visitantes por el Valle de la Luna" fill sizes="50vw" className="object-cover" /><figcaption><Leaf /><div><small>Valor que permanece</small><strong>La operación cuida el territorio y fortalece la economía local.</strong></div></figcaption></motion.figure></section>

    <section className="avs-impact py-24 lg:py-36"><div className="section-shell"><motion.div {...reveal} className="avs-heading avs-heading-light"><div><p>Resultados esperados</p><h2>Una experiencia que beneficia a más personas.</h2></div><span>El éxito combina satisfacción del visitante, sostenibilidad operativa y valor para el destino.</span></motion.div><div className="avs-impact-grid">{[[BriefcaseBusiness,"Económico","Ingresos, alianzas comerciales, empleo y movimiento para emprendimientos locales."],[Sparkles,"Turístico","Una oferta competitiva que posiciona La Paz mediante innovación y tecnología."],[Music2,"Cultural","Participación activa que acerca al visitante a expresiones e identidad bolivianas."],[Building2,"Social","Trabajo colaborativo y oportunidades conectadas con actores del territorio."]].map(([Icon,title,text])=><motion.article {...reveal} key={String(title)}><Icon /><h3>{String(title)}</h3><p>{String(text)}</p></motion.article>)}</div></div></section>

    <ArtifactNav previous="vision-del-producto" previousTitle="Visión del producto" next="estructuracion-del-equipo" nextTitle="Estructuración del equipo" />
    <ArtifactFooter />
  </main>;
}

function ArtifactNav({ previous, previousTitle, next, nextTitle }: { previous: string; previousTitle: string; next: string; nextTitle: string }) { return <nav className="avs-nav section-shell" aria-label="Navegación entre artefactos"><a href={`/producto-1/${previous}`}><ArrowLeft /><span><small>Artefacto anterior</small><strong>{previousTitle}</strong></span></a><a href={`/producto-1/${next}`}><span><small>Siguiente artefacto</small><strong>{nextTitle}</strong></span><ArrowRight /></a></nav>; }
function ArtifactFooter() { return <footer className="lunar-footer py-8"><div className="section-shell flex flex-col gap-2 text-sm sm:flex-row sm:justify-between"><span>TUR-2652 · Producto 1</span><span>Sitio informativo no oficial</span></div></footer>; }
