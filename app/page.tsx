"use client";
/* eslint-disable @next/next/no-html-link-for-pages -- full document navigation is required by the deployed Sites runtime */

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight, Blocks, Compass, DraftingCompass, Leaf, LockKeyhole, Route, Sparkles, UsersRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CornerFrameLink } from "@/components/ui/corner-frame-link";

const stats = [["Gestión", "2026 - II"], ["Créditos", "06"], ["Clases", "40"], ["Horas", "180"]];
const abilities = [
  { icon: DraftingCompass, label: "Diseñar productos turísticos sostenibles" },
  { icon: UsersRound, label: "Colaborar y crear valor con Scrum" },
  { icon: Blocks, label: "Organizar el trabajo mediante Kanban" },
  { icon: Compass, label: "Investigar viajeros y comunidades" },
  { icon: Sparkles, label: "Validar ideas con experimentación" },
  { icon: Leaf, label: "Liderar cambios con impacto sostenible" },
];
const products = [
  { number: "01", title: "Diseña un producto turístico con Scrum", official: "Producto turístico desarrollado mediante Scrum", description: "Convierte una idea en una propuesta sostenible mediante Sprints, colaboración e inspección continua.", tags: ["Scrum", "Producto turístico", "Trabajo en equipo"], status: "Contenido preparado", available: true },
  { number: "02", title: "Valida una experiencia turística viable", official: "Producto Turístico Mínimo Viable (MVT) validado", description: "Investiga necesidades, construye un prototipo y valida su propuesta de valor con usuarios reales.", tags: ["Design Thinking", "Lean Startup", "Kanban"], status: "Próximamente", available: false },
  { number: "03", title: "Transforma una organización o destino", official: "Plan de Transformación Ágil para una organización o destino turístico", description: "Diseña una estrategia de cambio que integra liderazgo, cultura, innovación y sostenibilidad.", tags: ["Liderazgo ágil", "ADKAR", "Innovación"], status: "Próximamente", available: false },
];
const learningPath = ["Comprender", "Crear", "Validar", "Transformar"];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const heroImageY = useTransform(scrollYProgress, [0, 0.22], ["0%", "11%"]);
  const heroCopyY = useTransform(scrollYProgress, [0, 0.2], ["0px", "-54px"]);
  const reveal = { initial: reduceMotion ? false : { opacity: 0, y: 26 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.18 }, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <motion.div aria-hidden="true" className="scroll-progress" style={{ scaleX: scrollYProgress }} />
      <section className="hero relative min-h-[760px] overflow-hidden text-white">
        <motion.div aria-hidden="true" className="absolute -inset-x-4 -inset-y-16" style={reduceMotion ? undefined : { y: heroImageY }}>
          <Image src="/hero-illimani.png" alt="" fill priority className="object-cover object-[68%_center] scale-[1.04]" sizes="100vw" />
        </motion.div>
        <div className="hero-scrim absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,15,35,.9)_0%,rgba(3,15,35,.58)_42%,rgba(3,15,35,.05)_72%)]" />
        <motion.div aria-hidden="true" className="hero-mist" animate={reduceMotion ? undefined : { x: ["-7%", "7%", "-7%"], opacity: [.16, .3, .16] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} />
        <div aria-hidden="true" className="city-lights"><i /><i /><i /><i /><i /><i /></div>
        <div aria-hidden="true" className="hero-grid absolute inset-0" />
        <motion.div aria-hidden="true" className="hero-orbit hero-orbit-one" animate={reduceMotion ? undefined : { y: [0, -14, 0], rotate: [0, 3, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div aria-hidden="true" className="hero-orbit hero-orbit-two" animate={reduceMotion ? undefined : { y: [0, 18, 0], x: [0, -8, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
        <header className="relative z-20 mx-auto flex w-full max-w-[1480px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#inicio" className="group flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd35a]">
            <span className="grid size-12 place-items-center overflow-hidden rounded-full border border-white/25 bg-white/10 p-1.5 shadow-lg backdrop-blur-md"><Image src="/logo-turismo.svg" alt="" width={40} height={40} className="size-full object-contain" /></span>
            <span><span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-white/60">Carrera de Turismo</span><span className="block text-lg font-extrabold tracking-tight">TUR-2652</span></span>
          </a>
          <nav aria-label="Navegación principal" className="hidden items-center gap-8 text-sm font-semibold text-white/75 md:flex">
            <a className="nav-link" href="#asignatura">Asignatura</a><a className="nav-link" href="#aprendizajes">Aprendizajes</a><a className="nav-link" href="#productos">Productos</a>
          </nav>
          <div className="logo-ficticio" aria-label="Identidad institucional provisional"><span>U</span><span className="hidden sm:inline">UMSA</span></div>
        </header>
        <div id="inicio" className="relative z-10 mx-auto flex min-h-[650px] w-full max-w-[1480px] items-center px-5 pb-24 pt-12 sm:px-8 lg:px-12">
          <motion.div style={reduceMotion ? undefined : { y: heroCopyY }} initial={reduceMotion ? false : { opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }} className="max-w-[820px]">
            <Badge className="mb-7 border border-white/20 bg-white/10 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur-md">Gestión académica 2026 - II</Badge>
            <p className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.24em] text-[#ffd35a]"><span className="h-px w-10 bg-[#ffd35a]" /> Agilidad para transformar</p>
            <h1 className="hero-title max-w-[800px] text-balance text-[clamp(3.15rem,7.2vw,7.4rem)] font-black leading-[0.88] tracking-[-0.065em]">Turismo que se adapta <span className="hero-highlight">al cambio.</span></h1>
            <p className="mt-7 max-w-[650px] text-pretty text-lg leading-relaxed text-white/78 sm:text-xl">Prácticas ágiles para crear productos sostenibles, gestionar proyectos colaborativos y liderar la transformación de organizaciones y destinos turísticos.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CornerFrameLink href="#productos">Descubrir los productos <ArrowDown aria-hidden="true" /></CornerFrameLink>
              <span className="text-sm font-semibold text-white/60">Carrera de Turismo · UMSA</span>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/14 bg-[#061a35]/55 backdrop-blur-xl">
          <div className="mx-auto grid max-w-[1480px] grid-cols-2 divide-x divide-white/14 px-5 sm:grid-cols-4 sm:px-8 lg:px-12">
            {stats.map(([label, value], index) => <motion.div key={label} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 + index * .09 }} className={`px-4 py-5 sm:px-7 ${index > 1 ? "border-t border-white/14 sm:border-t-0" : ""}`}><span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-white/55">{label}</span><strong className="mt-1 block text-xl font-black tracking-tight text-white">{value}</strong></motion.div>)}
          </div>
        </div>
      </section>

      <section id="asignatura" className="section-shell grid gap-12 py-24 lg:grid-cols-[.78fr_1.22fr] lg:py-32">
        <motion.div {...reveal}><p className="eyebrow">La asignatura</p><h2 className="section-title mt-5">Pensar distinto para hacer mejor turismo.</h2></motion.div>
        <motion.div {...reveal} className="lg:pt-11">
          <p className="max-w-[760px] text-xl leading-relaxed text-slate-600 sm:text-2xl">Responder a escenarios turísticos complejos mediante colaboración, experimentación y mejora continua. Cada herramienta se convierte en una forma concreta de generar valor para viajeros, comunidades y territorios.</p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-200 sm:grid-cols-3">
            {[["7", "unidades de aprendizaje"], ["3", "productos integradores"], ["1", "reto: transformar el turismo"]].map(([value, label], index) => <motion.div key={label} whileHover={reduceMotion ? undefined : { y: -5 }} transition={{ type: "spring", stiffness: 280, damping: 22 }} className="metric-card bg-white p-7 sm:p-8"><strong className="text-4xl font-black tracking-[-0.05em] text-primary">{value}</strong><span className="mt-2 block text-sm font-semibold leading-snug text-slate-600">{label}</span><span aria-hidden="true" className="metric-index">0{index + 1}</span></motion.div>)}
          </div>
        </motion.div>
      </section>

      <section id="aprendizajes" className="bg-[#071a35] py-24 text-white lg:py-32">
        <div className="section-shell">
          <motion.div {...reveal} className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><div><p className="eyebrow text-[#69e3d2]">Capacidades para el futuro</p><h2 className="section-title mt-5 max-w-[760px]">Herramientas para crear, validar y liderar.</h2></div><p className="max-w-sm text-base leading-relaxed text-white/60">De la idea inicial a una estrategia de transformación con impacto sostenible.</p></motion.div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {abilities.map(({ icon: Icon, label }, index) => <motion.article key={label} initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 22 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} whileHover={reduceMotion ? undefined : { y: -7 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: reduceMotion ? 0 : index * 0.055, duration: 0.45 }} className="ability-card group rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-7"><div className="ability-icon mb-12 grid size-11 place-items-center rounded-full bg-secondary text-[#071a35]"><Icon aria-hidden="true" className="size-5" strokeWidth={1.8} /></div><span className="text-lg font-bold leading-snug">{label}</span><span aria-hidden="true" className="ability-number">0{index + 1}</span></motion.article>)}
          </div>
        </div>
      </section>

      <section id="productos" className="section-shell py-24 lg:py-32">
        <motion.div {...reveal} className="max-w-[820px]"><p className="eyebrow">Productos del semestre</p><h2 className="section-title mt-5">Tres desafíos. Una transformación.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">El semestre avanza como una ruta: comprender el problema, construir una solución, validarla y convertir el aprendizaje en cambio.</p></motion.div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {products.map((product, index) => {
            const card = <motion.article initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} whileHover={reduceMotion ? undefined : { y: product.available ? -10 : -4 }} viewport={{ once: true, amount: 0.18 }} transition={{ delay: reduceMotion ? 0 : index * 0.08, duration: 0.5 }} aria-disabled={!product.available} className={`product-card ${product.available ? "product-card-active" : "product-card-locked"}`}>
              <div className="flex items-start justify-between gap-4"><span className="product-number">{product.number}</span><Badge className={product.available ? "bg-secondary text-secondary-foreground" : "bg-slate-100 text-slate-500"}>{!product.available && <LockKeyhole aria-hidden="true" className="mr-1 size-3" />}{product.status}</Badge></div>
              <h3 className="mt-14 text-2xl font-black leading-[1.08] tracking-[-0.035em] sm:text-[1.75rem]">{product.title}</h3><p className="mt-3 text-sm font-semibold leading-relaxed text-primary">{product.official}</p><p className="mt-5 leading-relaxed text-slate-600">{product.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">{product.tags.map((tag) => <span key={tag} className="topic-chip">{tag}</span>)}</div>
              <div className="mt-auto pt-10">{product.available ? <div className="flex items-center justify-between border-t border-slate-200 pt-5 text-sm font-extrabold text-[#071a35]"><span>Explorar Producto 1</span><span className="product-arrow"><ArrowUpRight aria-hidden="true" className="size-5" /></span></div> : <div className="border-t border-slate-200 pt-5 text-sm font-semibold text-slate-400">Se habilitará durante el semestre</div>}</div>
            </motion.article>;
            return product.available ? <a key={product.number} href="/producto-1" className="product-card-link rounded-[2rem] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-primary">{card}</a> : <div key={product.number}>{card}</div>;
          })}
        </div>
      </section>

      <section className="bg-[#e7f8f5] py-24 lg:py-28">
        <div className="section-shell"><motion.div {...reveal} className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center"><div><p className="eyebrow">Ruta de aprendizaje</p><h2 className="section-title mt-5">Avanzar también es aprender.</h2><p className="mt-5 max-w-md leading-relaxed text-slate-600">Cada etapa recupera lo aprendido y lo convierte en una solución más clara, viable y relevante.</p></div><div className="learning-route">{learningPath.map((item, index) => <div key={item} className="route-stop"><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong>{index < learningPath.length - 1 && <Route aria-hidden="true" className="route-icon" />}</div>)}</div></motion.div></div>
      </section>

      <footer className="bg-[#041225] py-10 text-white"><div className="section-shell flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div className="flex items-center gap-4"><span className="grid size-12 place-items-center overflow-hidden rounded-full border border-white/15 bg-white/5 p-1.5"><Image src="/logo-turismo.svg" alt="" width={40} height={40} className="size-full object-contain" /></span><div><strong className="block text-lg">TUR-2652</strong><span className="text-sm text-white/50">Carrera de Turismo · Gestión 2026-II</span></div></div><p className="max-w-xs text-sm leading-relaxed text-white/45 sm:text-right">Sitio web informativo no oficial.</p></div></footer>
    </main>
  );
}
