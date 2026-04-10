# 🛒 Frontend Ecommerce Challenge

[![Deploy Status](https://img.shields.io/badge/Deploy-Netlify-00C7B7?style=flat-square&logo=netlify)](https://ecommerce-callenge.netlify.app/)
[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=flat-square&logo=angular)](https://angular.io/)

## 🔗 Live Demo
**[Vistar el proyecto en vivo (Netlify)](https://ecommerce-callenge.netlify.app/)**

## 📌 Descripción

Este proyecto consiste en la implementación frontend de un flujo básico de ecommerce. Se priorizó un enfoque técnico centrado en la escalabilidad, alta performance, patrones modernos de arquitectura y alineación a Core Web Vitals.

**Flujos soportados:**
- Catálogo de productos (PLP)
- Página de detalle de producto (PDP) con galería y tabbed content
- Simulación de Carrito local reactivo
- Módulo de Cross-Selling
- Interfaz resiliente (Manejo de Loading states & Errors/Fallbacks)

---

## 🚀 Stack Tecnológico

- **Framework:** Angular 21 (Standalone Components)
- **Estado:** Angular Signals + RxJS (para manejo asíncrono de flujos)
- **Estilos:** SCSS (Arquitectura modular enfocada a componentes)
- **Markup:** HTML5 Semántico
- **Data:** Mock asíncrono con latencia simulada

---

## 🏗️ Arquitectura y Principios Aplicados

Se implementó una **Feature-Based Architecture**, complementada estrechamente por el patrón **Container / Presentational** (Smart & Dumb Components).

### 📂 Estructura de Directorios (src/app/)

```text
core/        → Singleton services (Product, Cart, Analytics, SEO, Breadcrumbs)
shared/      → Componentes agnósticos y reutilizables (UI elements, Error fallbacks, Product-Cards)
features/    → Lógica encapsulada por dominio de negocio (product-list, product-detail)
```

### 🧠 Criterios Estructurales
- **Separation of Concerns:** El entorno es predecible, los Containers despachan el fetching y los Presentacionales solo consumen los Signals y operan sobre la UI.
- **Single Responsibility:** Los módulos, especialmente en el PDP (Gallery, Info, Accordion), fueron creados como entidades estrictamente autocontenidas, siendo altamente reutilizables.
- **Desacoplamiento Angular:** El estado de negocio recae en la capa lógica (`core/services`), desconectando el UI del Engine.

---

## ⚡ Performance y Core Web Vitals

A nivel estructural, se ejecutaron optimizaciones modernas para evitar bloqueos de renderizado y re-renders innecesarios:
- `ChangeDetectionStrategy.OnPush` implementado en toda la aplicación.
- Uso de **Signals** por defecto para crear un rendering granular en el DOM sin recaer en el overhead reactivo tradicional de Zone.js.
- Imágenes diferidas por API nativa mediante `NgOptimizedImage` (`loading="lazy"`).
- Boundary definition mediante Lazy Loading a nivel de ruteo abstracto.

---

## 🛡️ Manejo de Estados

- **Loading:** Componente transversal `<app-loading>` atado orgánicamente a la latencia de resolución de los HTTP Requests / RxJS Observables.
- **Error Handling:** Implementación de bloques estructurales condicionales con fallbacks visuales `<app-error>` gestionados vía pipeline de rescate (`catchError`) cuando los catálogos carecen de ID's o los servicios fallan.

---

## 📊 Analytics y SEO Integrado

- **SEO dinámico:** El `SeoService` inyecta las etiquetas cruciales en el ciclo de vida del Container (`<title>`, `<meta name="description">`, `og:title`), protegiendo indexación y tarjetas compartidas de bots en redes.
- **Tracking (GA4 Compatible):** Servicio proxy sobre `window.dataLayer`, desacoplando librerías de terceros con métodos legibles como `trackViewItem`, `trackViewItemList` y `trackAddToCart` al activarse features.

---

## ⚙️ Instalación y Entorno de Desarrollo

```bash
# Instalar dependencias requeridas (Node >= 18)
npm install

# Levantar entorno local (Development Server)
ng serve
```
El aplicativo correrá por default en `http://localhost:4200`

---

## 📌 Respuestas a Preguntas del Challenge (Decisiones Técnicas)

### 1. ¿Qué decisiones tomaste para mejorar la performance en esta página?
Prioricé la reducción drástica del costo computacional derivado de la detección de cambios en Angular mediante `OnPush` de forma estricta y delegando estados puramente a **Signals**. Se ejecutó el pipeline del directive `NgOptimizedImage` forzando las dimensiones primarias para evitar un perjudicial Cumulative Layout Shift (CLS) en la galería, mientras que las pantallas separables se cargan de forma *Lazy*.

### 2. ¿Cómo estructurarías esta solución para soportar múltiples marcas con diferentes estilos?
Bajo el prisma de un sistema escalable White-Label (Multi-Tenant), implementaría un motor de Theming alimentado por **Variables Nativas CSS (Custom Properties)**, configurando palettes, fonts y border-radiuses desde un archivo JSON distribuido vía API de configuración en el `APP_INITIALIZER`. A nivel frontend, el directorio `features/` jamás permutaría su lógica, en caso muy radical existirían inyecciones de plantillas para reubicar flex-layouts puntuales si la marca exige disrupción estructural agresiva.

### 3. Si esta página presenta problemas de LCP (Largest Contentful Paint) en producción, ¿cómo lo abordarías?
1. **Identificar Nodo Crítico:** El LCP en ecommerce suele ser el "Hero image" de PDP; anularía el lazy-loading en esa imagen primaria (`priority="true"` sobre NgOptimizedImage).
2. **Pre-Fetching / Pre-Loading:** Insertar recursos estáticos crudos como `<link rel="preload" as="image" href="...">` para apurar peticiones clave.
3. **Optimización Asset Server:** Sirviendo las texturas por CDNs que generen compresión agresiva (WebP / AVIF) según negociación de headers con el cliente.
4. **Implementación SSR:** Activar Server Side Rendering permitiendo enviar paint HTML final al cliente suprimiendo el retraso del bootstrap puramente SPA.

### 4. ¿Cómo evitarías que eventos de Analytics se disparen múltiples veces en una SPA?
El primer paso está hecho: centralización dogmática del tracking mediante un proveedor puro (`AnalyticsService`). Los disparos de métricas (`dataLayer.push`) los ejecutaría atados únicamente al evento de finalización del render de la ruta principal interceptando los eventos desde el ciclo de vida (y no desde templates o inputs reactivos en cadena). Si ocurren rebotes en inputs de usuarios usaría un `distinctUntilChanged` vía RxJS.

### 5. ¿Qué consideraciones SEO tendrías en cuenta para esta página en un entorno real?
El rendering SPA por defecto debilita el "SEO time-to-index", obligaría desde el comienzo la implementación de Angular SSR (Server-Side Rendering) hidratando el `HTML` inicial. Dinamizar eficientemente las etiquetas (Title/Open-Graphs) como ya ha sido estructurado en este repo. Finalmente, definiría `<link rel="canonical" href="..">` para blindar el catálogo frente a multirutas, urls repetidas y penalizaciones de indexadores por colisiones de filtros (e.g. `?sort=price`).

