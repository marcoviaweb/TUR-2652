import { Activity, ChartNoAxesCombined, CircleGauge, ClipboardList, Columns3, Route, Tags, Telescope } from "lucide-react";

export const PRODUCT_TWO_VIDEO = "JvRf_H2Sz7c";

export const productTwo = {
  title: "Valida una experiencia turística viable",
  experience: "La Paz desde las alturas a la luna",
  description: "Lean y Kanban hacen visible el trabajo necesario para que cada visitante viva un recorrido fluido, confiable y capaz de mejorar.",
};

export const statikStations = [
  {
    order: 0, slug: "producto-turistico", title: "El producto turístico", short: "Comprendemos la experiencia, las personas que la hacen posible y sus condiciones reales de operación.", icon: Telescope,
    eyebrow: "Punto de partida", hero: "Primero entendemos la experiencia que queremos cuidar.",
    definition: "La identificación del producto delimita el servicio sobre el que se aplicará Kanban. Describe qué vive el visitante, quién participa y con qué recursos se presta el servicio.",
    touristValue: "Permite conservar la promesa turística mientras se organiza el trabajo que ocurre detrás de cada salida.",
    findings: ["Tour guiado de medio día para un máximo de 15 visitantes.", "Recojo y retorno al hotel, teleférico, Valle de la Luna, degustación e inmersión cultural.", "Equipo de reservas, tres guías, dos personas de logística y un conductor.", "Un vehículo de 15 plazas condiciona la cantidad de salidas simultáneas."],
    visual: "journey", connection: "Con el servicio delimitado, el equipo puede reconocer qué situaciones afectan al visitante o dificultan la operación.",
  },
  {
    order: 1, slug: "oportunidades-de-mejora", title: "Lo que debemos mejorar", short: "Convertimos las preocupaciones del equipo y de los viajeros en objetivos concretos y medibles.", icon: Activity,
    eyebrow: "Fase 01 · Insatisfacciones", hero: "Cada dificultad señala una oportunidad para mejorar el viaje.",
    definition: "STATIK comienza reconociendo las fuentes de insatisfacción. Cada problema se relaciona con su efecto y se transforma en una meta verificable.",
    touristValue: "Las mejoras se concentran en aquello que el visitante percibe: respuestas oportunas, menos esperas e información clara.",
    findings: ["Confirmar reservas con anticipo dentro de 24 horas.", "Atender cambios de fecha, cantidad o idioma el mismo día.", "Reducir a menos de 15 minutos la espera entre el teleférico y el Valle.", "Entregar la información del grupo al guía con dos días de anticipación.", "Limitar cada audio a tres minutos y evaluar si resulta claro y atractivo."],
    visual: "targets", connection: "Las metas orientan el análisis de las solicitudes que realmente llegan al servicio.",
  },
  {
    order: 2, slug: "demanda-del-viajero", title: "Lo que solicitan los viajeros", short: "Observamos tipos, frecuencia y urgencia para diseñar un sistema que responda a la demanda real.", icon: ClipboardList,
    eyebrow: "Fase 02 · Demanda", hero: "Escuchar la demanda permite responder antes de que el viaje comience.",
    definition: "El análisis de demanda identifica qué solicitudes llegan, cuántas aparecen en un periodo y cuáles requieren atención prioritaria.",
    touristValue: "Evita que una modificación urgente o un reclamo se pierdan entre consultas normales.",
    findings: ["20 reservas individuales o familiares por mes.", "10 reservas de grupos y 30 consultas sobre el paquete.", "25 cambios de idioma o audioguía y 8 cambios de fecha o cantidad.", "3 reclamos o comentarios posteriores al tour.", "96 solicitudes mensuales; 36 son de alta urgencia."],
    visual: "demand", connection: "Conocida la demanda, se contrasta con lo que cada rol puede atender al mismo tiempo.",
  },
  {
    order: 3, slug: "capacidad-y-restricciones", title: "Nuestra capacidad real", short: "Medimos cuánto trabajo puede asumir el equipo e identificamos dónde se detiene el flujo.", icon: CircleGauge,
    eyebrow: "Fase 03 · Capacidad", hero: "Una experiencia confiable se diseña con los recursos que realmente existen.",
    definition: "La capacidad de respuesta indica cuántos casos puede manejar cada rol a la vez, cuánto tarda y qué restricción limita el servicio completo.",
    touristValue: "Reduce promesas imposibles, sobrecarga del equipo y esperas inesperadas durante el recorrido.",
    findings: ["Reservas puede manejar 4 confirmaciones y 5 cierres pendientes.", "Logística prepara hasta 3 salidas simultáneas, con tres días de anticipación.", "Tres guías están disponibles, pero el vehículo permite una salida a la vez.", "El vehículo puede realizar un máximo de dos viajes por día.", "La confirmación actual tarda 36 horas; la meta es reducirla a 24."],
    visual: "capacity", connection: "La capacidad define límites realistas para cada etapa del flujo de trabajo.",
  },
  {
    order: 4, slug: "flujo-del-servicio", title: "El recorrido del trabajo", short: "Mostramos cómo avanza una solicitud desde el primer contacto hasta la evaluación final.", icon: Route,
    eyebrow: "Fase 04 · Flujo", hero: "Detrás de cada gran recorrido existe una ruta de trabajo clara.",
    definition: "El flujo describe las etapas que atraviesa una solicitud, la persona responsable y la condición que debe cumplir antes de avanzar.",
    touristValue: "Asegura que ningún grupo inicie su experiencia sin confirmaciones, equipos o información indispensable.",
    findings: ["Solicitud recibida: datos básicos completos.", "Cotización y confirmación: reserva confirmada y 50 % de anticipo.", "Preparación logística: servicios, equipos, guía y conductor confirmados.", "Servicio en ejecución y retorno: experiencia completada y llegada al hotel.", "Cierre y evaluación: opinión registrada, incidencias documentadas y caso archivado."],
    visual: "flow", connection: "El flujo permite clasificar las tarjetas y acordar cuál debe atenderse primero.",
  },
  {
    order: 5, slug: "clases-de-servicio", title: "Prioridades visibles", short: "Diferenciamos reservas, cambios, incidencias y mejoras mediante colores, plazos y prioridades.", icon: Tags,
    eyebrow: "Fase 05 · Clases de servicio", hero: "El color correcto ayuda a actuar en el momento correcto.",
    definition: "Las clases de servicio agrupan trabajos con necesidades similares. El color comunica su tipo, mientras el plazo y la prioridad orientan la decisión del equipo.",
    touristValue: "Una incidencia durante el recorrido se atiende antes que una consulta sin fecha comprometida.",
    findings: ["Rojo · Reclamo o incidencia · el mismo día · prioridad 1.", "Amarillo · Modificación · el mismo día · prioridad 2.", "Azul · Reserva o consulta · máximo 24 horas · prioridad 3.", "Gris · Mejora interna · revisión semanal · prioridad 4."],
    visual: "classes", connection: "Las etapas, los límites y las clases de servicio se reúnen en el tablero Kanban.",
  },
  {
    order: 6, slug: "tablero-kanban", title: "El tablero Kanban", short: "Reunimos columnas, límites, tarjetas y reglas en una sola vista compartida.", icon: Columns3,
    eyebrow: "Fase 06 · Visualización", hero: "Todo el servicio, visible en una sola mirada.",
    definition: "El tablero Kanban representa el estado real del trabajo. Sus límites evitan sobrecarga y sus reglas establecen cuándo una tarjeta puede avanzar.",
    touristValue: "El equipo detecta bloqueos a tiempo y coordina el servicio antes de que afecten la experiencia.",
    findings: ["No se inicia trabajo nuevo cuando una etapa alcanzó su límite.", "Cada tarjeta avanza únicamente al cumplir su condición de salida.", "La prioridad más baja numéricamente se atiende primero.", "Los obstáculos se marcan y se revisan en la reunión diaria.", "El vehículo único se hace visible con límites de 1 en ejecución y retorno."],
    visual: "board", connection: "El tablero comienza como una hipótesis y se ajusta a partir de resultados observables.",
  },
  {
    order: 7, slug: "medicion-y-mejora", title: "Medir y mejorar", short: "Ponemos el sistema en marcha, revisamos indicadores y realizamos un cambio a la vez.", icon: ChartNoAxesCombined,
    eyebrow: "Fase 07 · Mejora continua", hero: "Medir convierte cada salida en una oportunidad de aprendizaje.",
    definition: "La puesta en marcha combina indicadores, reuniones breves y experimentos de mejora. El tablero evoluciona según la evidencia del servicio cotidiano.",
    touristValue: "La experiencia aprende de cada grupo y mejora sin perder aquello que los viajeros valoran.",
    findings: ["Prueba inicial de dos semanas con todas las solicitudes en curso.", "Reunión diaria de 10 a 15 minutos para obstáculos y urgencias.", "Revisión semanal de demanda, límites y trabajo próximo.", "Revisión mensual de los indicadores y ajustes del sistema.", "Introducir una mejora a la vez para comprobar su efecto."],
    visual: "metrics", connection: "Los resultados conducen de nuevo a las metas, el flujo y los límites: la mejora es continua.",
  },
] as const;

export type ProductTwoStation = (typeof statikStations)[number];
export const getProductTwoStation = (slug: string) => statikStations.find((item) => item.slug === slug);

export const kanbanColumns = [
  { title: "Solicitud recibida", limit: "Sin límite", cards: [{ type: "blue", title: "Agencia · consulta de paquete", meta: "Reserva y consulta" }, { type: "yellow", title: "Idioma inglés · grupo de 6", meta: "Modificación" }] },
  { title: "Cotización y confirmación", limit: "Límite 4", cards: [{ type: "blue", title: "10 viajeros · mañana", meta: "Reserva y consulta" }, { type: "blue", title: "6 viajeros · viernes", meta: "Reserva y consulta" }, { type: "yellow", title: "Cambio de fecha · familia de 5", meta: "Modificación" }] },
  { title: "Preparación logística", limit: "Límite 3", cards: [{ type: "blue", title: "Colegio · 15 viajeros", meta: "Reserva y consulta" }, { type: "gray", title: "Itinerario coordinado", meta: "Mejora interna" }] },
  { title: "Servicio en ejecución", limit: "Límite 1", cards: [{ type: "blue", title: "Grupo familiar · 8 viajeros", meta: "Reserva y consulta" }] },
  { title: "Retorno al hotel", limit: "Límite 1", cards: [] },
  { title: "Cierre y evaluación", limit: "Límite 5", cards: [{ type: "red", title: "Audio muy largo · grupo del lunes", meta: "Reclamo" }, { type: "blue", title: "Sondeo pendiente · grupo escolar", meta: "Reserva y consulta" }] },
  { title: "Finalizado", limit: "Sin límite", cards: [{ type: "gray", title: "Audios más breves", meta: "Mejora interna" }] },
] as const;
