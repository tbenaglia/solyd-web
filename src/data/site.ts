/**
 * SOLYD — contenido y configuración del sitio.
 * Editá este archivo para cambiar textos y datos de contacto.
 */

export const site = {
  name: "SOLYD",
  tagline: "Engineering Business Transformation",
  url: "https://solyd.com.ar",
  description:
    "Consultoría de operaciones, desarrollo de software y diseño digital en un mismo equipo. Rediseñamos procesos, construimos la tecnología que los sostiene y diseñamos la experiencia que los comunica.",
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

export const nav = [
  { href: "/#consulting", label: "Consulting" },
  { href: "/#dev", label: "Dev" },
  { href: "/#design", label: "Design" },
  { href: "/#como-trabajamos", label: "Cómo trabajamos" },
  { href: "/contacto/", label: "Contacto" },
];

export const cta = {
  label: "Coordinar una reunión",
  href: "/contacto/",
};

/* ---------------------------------------------------------------- Unidades */

/**
 * Las tres unidades de SOLYD.
 * `accent` es el color sobre fondo claro; `tint`, su versión para fondo oscuro.
 */
export const units = [
  {
    id: "consulting",
    kicker: "Ingeniería de operaciones",
    short: "Procesos, costos, planificación y logística.",
    title: "Ordenamos cómo funciona la empresa.",
    text: "Relevamos la operación real, identificamos dónde se pierde tiempo, dinero o control, y rediseñamos el proceso con reglas, responsables e indicadores.",
    accent: "#3d5afe",
    tint: "#7d92ff",
    items: [
      { title: "Procesos y operación", text: "Relevamiento y rediseño de la forma de trabajar." },
      { title: "Costos y rentabilidad", text: "Costo real de cada operación y márgenes por producto, cliente o canal." },
      { title: "Planificación y stock", text: "Proyección de demanda, reposición y niveles de inventario." },
      { title: "Logística y depósitos", text: "Almacenamiento, preparación y distribución." },
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
    text: "Un estudio de diseño dentro de un equipo de ingeniería. Sitios web, interfaces y productos digitales diseñados y desarrollados por las mismas personas.",
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

/** Palabras de la franja animada, por unidad. */
export const keywords = [
  ["Procesos", "Costos", "Planificación", "Logística", "Software", "Integraciones"],
  ["Tableros", "Automatización", "IA", "Sitios web", "Interfaces", "Motion"],
] as const;

/* --------------------------------------------------------- Cómo trabajamos */

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
  "Una solución sin proceso no sirve. Un proceso sin solución es difícil de sostener. Por eso quienes piensan el proceso, construyen el software y diseñan la experiencia son el mismo equipo.";

export const sectors = ["Agroindustria", "Logística y distribución", "Industria"] as const;
