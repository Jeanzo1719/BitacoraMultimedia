# Un espacio para compartir — Bitácora multimedia

Página de una sola vista (SPA) construida con **Angular 22** que presenta, en forma de
bitácora cronológica, una experiencia de **Humanización / Humanismo Amigoniano**:
acompañamiento y escucha a una persona que se encontraba en una situación de soledad.

No es un informe académico: es un **diario visual** recorrido por secciones, fotografías
grandes, videos cortos y textos breves.

## Estructura de la página

| Sección                 | Componente                         | Ancla           |
| ----------------------- | ---------------------------------- | --------------- |
| Portada                 | `sections/hero-section.ts`         | `#inicio`       |
| El escenario            | `sections/scenario-section.ts`     | `#escenario`    |
| Preparación e inicio    | `sections/preparation-section.ts`  | `#preparacion`  |
| Durante la intervención | `sections/intervention-section.ts` | `#intervencion` |
| Producto elaborado      | `sections/product-section.ts`      | `#producto`     |
| Resultados observables  | `sections/results-section.ts`      | `#resultados`   |
| Bitácora de aprendizaje | `sections/learning-log-section.ts` | `#aprendizaje`  |

Componentes reutilizables en `src/app/shared/`:

- `site-nav.ts` — navegación fija: enlaces en línea en escritorio y menú desplegable en móvil.
- `section-heading.ts` — antetítulo + título + entrada, en tono claro o inverso.
- `media-figure.ts` — fotografía con marco de proporción fija, pie de foto y distintivo
  automático de marcador de posición.
- `video-block.ts` — video con póster y controles; muestra un aviso si el `.mp4` no existe.
- `site-footer.ts` — nota de privacidad y firma.
- `reveal.directive.ts` — aparición progresiva al entrar en pantalla (se desactiva con
  `prefers-reduced-motion`).

Contenido y datos: `src/app/core/bitacora-content.ts` (único archivo que hay que editar para
cambiar textos o medios) y `src/app/core/modelos.ts` (tipos).

## Comandos

```bash
pnpm install     # dependencias (pnpm 12)
pnpm start       # servidor de desarrollo en http://localhost:4200
pnpm build       # build de producción en dist/BitacoraMultimedia
pnpm test        # pruebas unitarias (Vitest)
```

## Multimedia

```text
src/assets/
├── images/
│   ├── portada/portada-01.svg
│   ├── escenario/escenario-01.svg
│   ├── preparacion/preparacion-01.svg, preparacion-02.svg
│   ├── materiales/materiales-01.svg
│   ├── intervencion/intervencion-01.svg … intervencion-06.svg
│   ├── producto/producto-01.svg
│   └── videos/poster-introduccion.svg, poster-intervencion.svg,
│                poster-intervencion-detalle.svg, poster-aprendizaje.svg
└── videos/
    ├── introduccion.mp4        (pendiente)
    ├── intervencion.mp4        (pendiente)
    ├── intervencion-detalle.mp4 (pendiente)
    └── aprendizaje.mp4         (pendiente)
```

`src/assets` se publica en la carpeta `/assets` (configurado en `angular.json`).

### Cómo sustituir los marcadores de posición

1. Deja la fotografía real junto al marcador, por ejemplo
   `src/assets/images/intervencion/intervencion-01.jpg`.
2. En `src/app/core/bitacora-content.ts`, cambia solo la ruta (`src`) y el texto
   alternativo (`alt`) del elemento correspondiente.
3. Para los videos, guarda el `.mp4` en `src/assets/videos/` con el nombre exacto
   (`introduccion.mp4`, `intervencion.mp4`, `intervencion-detalle.mp4`,
   `aprendizaje.mp4`) y añade su póster real en `src/assets/images/videos/`.
4. El distintivo «Marcador de posición» desaparece solo cuando la ruta deja de
   terminar en `.svg`.

Los `.svg` actuales son únicamente marcadores: **no contienen ninguna fotografía real**.

### Textos pendientes

Todo lo que aparece entre corchetes `[ ]` en `bitacora-content.ts` está pendiente de
escribir con información verdadera de la experiencia: fecha, nombre del escenario,
descripciones, resultados observables y el resumen de la bitácora de aprendizaje.
En `RESULTADOS`, cada bloque se muestra como «Por completar» hasta que se escribe la
observación y se cambia `registrado: false` por `registrado: true`.

## Privacidad

No se incorporan nombres completos, direcciones, teléfonos ni ningún dato identificatorio
de la persona acompañada. Las fotografías y los videos deben usarse con autorización
de la persona y, preferentemente, encuadres que no expongan información privada.
