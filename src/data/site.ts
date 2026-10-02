/**
 * SOLYD — contenido y configuración del sitio.
 * Editá este archivo para cambiar textos y datos de contacto.
 */

export const site = {
  name: "SOLYD",
  tagline: "Engineering Business Transformation",
  url: "https://solyd.com.ar",
  description:
    "Consultoría en supply chain y operaciones industriales, desarrollo de software y diseño digital, con equipos integrados. Rediseñamos procesos, construimos la tecnología que los sostiene y diseñamos la experiencia que los comunica.",
  email: "info@solyd.com.ar",
  phone: "",
  phoneLabel: "",
  location: "Buenos Aires, Argentina",
  linkedin: "",
  /**
   * Endpoint del formulario de contacto.
   * Pegá acá tu URL de Formspree (https://formspree.io/f/xxxxxx) o Web3Forms.
   * Si queda vacío, el formulario abre el mail del visitante como fallback.
   */
  formEndpoint: "",
};

/**
 * Antepone la ruta base a un enlace interno.
 * En solyd.com.ar la base es "/"; cambia sólo en copias publicadas bajo una subcarpeta.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const url = (path: string) => `${base}${path}`;

export const nav = [
  { href: url("/#consulting"), label: "Consulting" },
  { href: url("/#dev"), label: "Dev" },
  { href: url("/#design"), label: "Design" },
  { href: url("/contacto/"), label: "Contacto" },
];

export const cta = {
  label: "Coordinar una reunión",
  href: url("/contacto/"),
};

/* ---------------------------------------------------------------- Unidades */

/**
 * Las tres unidades de SOLYD.
 * `accent` es el color sobre fondo claro; `tint`, su versión para fondo oscuro.
 */
export const units = [
  {
    id: "consulting",
    kicker: "Supply chain y operaciones industriales",
    short: "S&OP, inventarios, logística y costos.",
    title: "Ingeniería de operaciones para la cadena de suministro.",
    text: "Analizamos la operación de punta a punta —demanda, abastecimiento, producción, inventario y distribución— y rediseñamos procesos, políticas e indicadores para mejorar nivel de servicio, costo y capital de trabajo.",
    accent: "#3d5afe",
    tint: "#7d92ff",
    items: [
      { title: "Planificación S&OP", text: "Pronóstico de demanda, plan maestro de producción y balance de capacidad." },
      { title: "Inventarios y abastecimiento", text: "Políticas de reposición, stock de seguridad y compras." },
      { title: "Logística y almacenes", text: "Layout de depósitos, ruteo, transporte y nivel de servicio (OTIF)." },
      { title: "Costos y rentabilidad", text: "Costo industrial y logístico; márgenes por producto, cliente y canal." },
    ],
  },
  {
    id: "dev",
    kicker: "Software a medida",
    short: "Plataformas, integraciones, tableros e IA.",
    title: "Construimos la tecnología que sostiene el proceso.",
    text: "Desarrollamos plataformas, integraciones y automatizaciones sobre los sistemas que la empresa ya utiliza, para que la información se cargue una sola vez.",
    accent: "#00a8c2",
    tint: "#2be0f5",
    items: [
      { title: "Plataformas y portales", text: "Sistemas a medida para la operación, los equipos y los clientes." },
      { title: "Integraciones", text: "Conexión entre los sistemas existentes, sin doble carga." },
      { title: "Tableros e informes", text: "Indicadores en tiempo real, controles y reportes automáticos." },
      { title: "Automatización e IA", text: "Tareas repetitivas automatizadas y agentes de IA donde aportan valor." },
    ],
  },
  {
    id: "design",
    kicker: "Estudio de diseño digital",
    short: "Sitios web, interfaces y motion.",
    title: "Diseñamos la experiencia que lo comunica.",
    text: "Un estudio de diseño integrado a equipos de ingeniería. Sitios web, interfaces y productos digitales que se diseñan y se desarrollan en conjunto.",
    accent: "#7b5cff",
    tint: "#a995ff",
    items: [
      { title: "Sitios web", text: "Sitios institucionales y de producto, con gestor de contenidos." },
      { title: "Interfaces y producto digital", text: "Experiencia e interfaz para plataformas y aplicaciones." },
      { title: "Sistemas de diseño", text: "Componentes, tipografía y color para crecer con coherencia." },
      { title: "Motion e interacción", text: "Animación e interacción al servicio del mensaje." },
    ],
  },
] as const;

/** Vocabulario de la trama animada bajo la portada. */
export const keywords = [
  "S&OP", "MRP", "MPS", "OTIF", "fill rate", "lead time", "safety stock", "forecast accuracy",
  "demand planning", "ATP", "OEE", "throughput", "takt time", "bottleneck", "capacidad", "WMS",
  "TMS", "ERP", "cross-docking", "picking", "slotting", "last mile", "ruteo", "flota",
  "costo estándar", "activity-based costing", "margen", "working capital", "inventario", "rotación",
  "abastecimiento", "procurement", "BOM", "lote", "trazabilidad", "KPI", "dashboard", "API",
  "ETL", "SQL", "Python", "TypeScript", "webhook", "pipeline", "data model", "automation",
  "LLM", "agents", "integración", "backend", "frontend", "real-time", "alertas", "reporting",
  "UX", "UI", "wireframe", "prototype", "design system", "grid", "typography", "motion",
  "interaction", "layout", "componentes", "deploy", "CI/CD", "cloud", "Lean", "Six Sigma",
  "kaizen", "5S", "VSM", "root cause", "SLA", "backlog", "sprint", "nivel de servicio",
] as const;

/* ------------------------------ Próximos pasos (página de contacto) */

export const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Relevamos la situación real: procesos, datos, equipo y objetivos. Identificamos qué resolver primero.",
  },
  {
    n: "02",
    title: "Diseño",
    text: "Definimos cómo debe funcionar: el proceso, la herramienta o la experiencia, con criterios de éxito.",
  },
  {
    n: "03",
    title: "Construcción",
    text: "Desarrollamos por etapas. Cada etapa entrega algo que se puede usar y evaluar.",
  },
  {
    n: "04",
    title: "Puesta en marcha",
    text: "Implementamos, acompañamos la adopción y medimos el resultado.",
  },
] as const;

export const manifesto =
  "Una solución sin proceso no sirve. Un proceso sin solución es difícil de sostener. Por eso el proceso, el software y la experiencia se piensan con equipos integrados, desde el primer día.";

export const sectors = ["Agroindustria", "Logística y distribución", "Industria"] as const;
