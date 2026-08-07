# Inncentives — Sitio web

Sitio corporativo de **Inncentives**, plataforma de ICM (Incentive Compensation Management) de Neitek. Automatiza el ciclo completo de compensación variable: desde la carga de datos crudos hasta el pago calculado, trazable y explicado.

## Páginas

| Archivo | Página |
|---|---|
| `index.html` | Inicio — hero animado, funcionalidades, roles, alianzas, recursos |
| `producto.html` | Producto — funcionalidades, diferenciadores, comparativa, modos de uso |
| `soluciones.html` | Soluciones — vista por rol (RevOps, Finanzas, Ventas, RRHH) |
| `casos-de-exito.html` | Casos de éxito — grid filtrable por industria |
| `caso-locsa.html` | Detalle de caso — LOCSA |
| `recursos.html` | Recursos — guías, blog y webinars filtrables |

## Estructura

```
├── index.html            # páginas del sitio
├── producto.html
├── soluciones.html
├── casos-de-exito.html
├── caso-locsa.html
├── recursos.html
├── site-chrome.js        # header y footer compartidos (web components)
├── support.js            # runtime de renderizado
├── responsive.css        # media queries compartidas
└── assets/               # logos, ilustraciones e iconos SVG
```

## Características

- **Diseño responsive** — teléfono, tableta, laptop y escritorio, con reconstrucción de layout (no solo reescalado) en cada punto de quiebre.
- **Header y footer compartidos** — `site-chrome.js` los define una sola vez; el ítem de navegación activo se marca por página.
- **Hero cinematográfico** — recorrido por escenas con reproducción automática, controles de navegación y revelado progresivo del diagrama.
- **Visuales animados en CSS** — sin dependencias externas ni librerías de animación.
- **Animaciones al hacer scroll** — revelado con retardo escalonado, contadores y barras que arrancan al entrar en pantalla; respetan `prefers-reduced-motion`.
- **Secciones filtrables** — casos de éxito, recursos y vistas por rol.

## Despliegue

Sitio estático sin proceso de compilación. Sube el contenido del repositorio a cualquier hosting estático (GitHub Pages, Netlify, Vercel, S3 o un servidor web tradicional). No requiere Node ni dependencias.

```bash
# vista previa local
python3 -m http.server 8000
```

## Navegadores

Chrome, Safari, Firefox y Edge en sus versiones recientes.

---

© 2026 Inncentives · San Pedro Garza García, Nuevo León, México
ICM Solutions by Neitek
