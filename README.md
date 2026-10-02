# solyd.com.ar — sitio web de SOLYD

Sitio institucional de SOLYD construido con **Astro 7 + Tailwind CSS 4**. Estático, sin backend,
listo para publicar en Vercel, Cloudflare Pages o Netlify.

---

## 1. Correrlo en tu máquina

Necesitás Node.js 20 o superior.

```bash
npm install      # instala dependencias (la primera vez)
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera el sitio estático en /dist
npm run preview  # sirve /dist para revisarlo antes de publicar
```

La carpeta `dist/` ya viene generada en esta entrega: si querés, podés subirla tal cual a cualquier
hosting sin instalar nada.

---

## 2. Dónde se edita cada cosa

Casi todo el contenido vive en **un solo archivo**: `src/data/site.ts`.

| Qué querés cambiar | Dónde |
|---|---|
| Email, teléfono, LinkedIn, ubicación | `src/data/site.ts` → `site` |
| Endpoint del formulario de contacto | `src/data/site.ts` → `site.formEndpoint` |
| Menú de navegación | `src/data/site.ts` → `nav` |
| Las tres unidades (consulting, dev, design) y sus servicios | `src/data/site.ts` → `units` |
| Vocabulario de la trama animada | `src/data/site.ts` → `keywords` |
| Frase del manifiesto | `src/data/site.ts` → `manifesto` |
| Los pasos de "Próximos pasos" (contacto) | `src/data/site.ts` → `steps` |
| Sectores | `src/data/site.ts` → `sectors` |
| Textos de la portada y del contacto | `src/pages/index.astro` / `src/pages/contacto.astro` |
| Colores, tipografías, tarjetas, botones | `src/styles/global.css` |
| Animaciones de la portada (hero, trama, tarjetas apiladas, manifiesto) | `src/styles/motion.css` y el `<script>` de `src/pages/index.astro` |
| Ilustraciones animadas de cada unidad | `src/components/Visual*.astro` |
| Logos de SOLYD y de clientes | `src/assets/` |
| Favicon, imagen para redes, robots.txt | `public/` |

### Estructura

```
src/
├─ data/site.ts          ← contenido y configuración (empezá por acá)
├─ layouts/Base.astro    ← <head>, SEO, header, footer, scripts
├─ components/           ← Header, Footer, Icon, PageHero, CTASection, Visual* (ilustraciones animadas)
├─ pages/                ← index (landing única), contacto, 404
├─ styles/global.css     ← sistema de diseño completo
├─ styles/motion.css     ← portada con movimiento
└─ assets/               ← logos e imágenes optimizadas por Astro
public/                  ← favicon, og-image.jpg, robots.txt
```

---

## 3. Antes de publicar: lo que falta confirmar

1. **Teléfono y LinkedIn.** Están vacíos en `src/data/site.ts`; si se dejan vacíos no se muestran.
   El mail de contacto es `info@solyd.com.ar`.
2. **Formulario de contacto.** Creá un formulario gratuito en [Formspree](https://formspree.io) o
   [Web3Forms](https://web3forms.com), copiá la URL que te dan y pegala en `site.formEndpoint`.
   Mientras esté vacío, el botón abre el cliente de correo del visitante con la consulta ya escrita
   (funciona, pero convierte menos).

Versión actual: landing institucional básica (portada, qué hacemos, cómo trabajamos, diagnóstico)
más la página de contacto. Casos, métricas, equipo y logos de clientes quedaron fuera a propósito
para una etapa posterior.

---

## 4. Publicar en solyd.com.ar

El sitio es estático, así que cualquiera de estas tres opciones sirve. **Cloudflare Pages** es la más
cómoda si el dominio `.com.ar` ya lo administrás con Cloudflare.

### Opción A — Cloudflare Pages (recomendada)

1. Subí esta carpeta a un repositorio de GitHub.
2. En el panel de Cloudflare: *Workers & Pages* → *Create* → *Pages* → *Connect to Git*.
3. Configuración de build: framework **Astro**, comando `npm run build`, carpeta de salida `dist`.
4. Cuando termine el primer deploy, entrá a *Custom domains* y agregá `solyd.com.ar` y
   `www.solyd.com.ar`.
5. En NIC.ar, apuntá los nameservers del dominio a los que te indique Cloudflare.

### Opción B — Vercel

```bash
npm i -g vercel
vercel          # deploy de prueba
vercel --prod   # deploy definitivo
```

Después, en el panel del proyecto: *Settings* → *Domains* → agregar `solyd.com.ar`. Vercel te va a
dar un registro `A` (y un `CNAME` para `www`) que hay que cargar en el DNS del dominio.

### Opción C — Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Opción D — Hosting tradicional (FTP/cPanel)

Corré `npm run build` y subí **el contenido** de `dist/` a la carpeta pública del hosting
(`public_html` o similar). No hace falta Node en el servidor.

> **Importante:** el mail de `@solyd.com.ar` no se toca. Publicar el sitio sólo cambia los registros
> web (`A` / `CNAME` / nameservers); los registros `MX` del correo quedan como están. Si vas a mover
> los nameservers a Cloudflare, copiá primero los `MX` actuales para recrearlos ahí.

---

## 5. Después de publicar

- Verificá la propiedad en [Google Search Console](https://search.google.com/search-console) y cargá
  `https://solyd.com.ar/sitemap-index.xml`.
- Sumá analítica si querés medir: [Plausible](https://plausible.io) (una línea en `Base.astro`) o GA4.
- Probá cómo se ve el link al compartirlo en LinkedIn o WhatsApp: la imagen es `public/og-image.jpg`.

---

## 6. Notas de diseño

- Color de marca: navy `#02026C`. Acentos: azul eléctrico `#3D5AFE` y cian `#00CFE8`.
- Tipografías: **Space Grotesk** para títulos, **Inter** para texto. Vienen incluidas en el proyecto
  (no dependen de Google Fonts).
- Las animaciones respetan `prefers-reduced-motion` y el contenido se ve completo aunque el visitante
  tenga JavaScript desactivado.
