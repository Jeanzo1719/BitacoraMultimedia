# Un espacio para compartir — Bitácora multimedia

Página de una sola vista (SPA) construida con **Angular 22** que presenta, en forma de
bitácora cronológica, una experiencia de **Humanización / Humanismo Amigoniano**:
acompañamiento y escucha a una persona que se encontraba en una situación de soledad.
La intervención fue **individual**.

No es un informe académico: es un **diario visual** donde la fotografía y los videos
tienen el protagonismo y el texto solo los contextualiza.

## Estructura de la página

| Sección                        | Componente                         | Ancla           |
| ------------------------------ | ---------------------------------- | --------------- |
| Inicio (portada)               | `sections/hero-section.ts`         | `#inicio`       |
| El escenario y la preparación  | `sections/scenario-section.ts`     | `#escenario`    |
| La intervención                | `sections/intervention-section.ts` | `#intervencion` |
| El resultado de la experiencia | `sections/result-section.ts`       | `#resultado`    |
| Bitácora de aprendizaje        | `sections/learning-log-section.ts` | `#aprendizaje`  |
| Cierre                         | `shared/site-footer.ts`            | —               |

Componentes reutilizables en `src/app/shared/`:

- `site-nav.ts` — navegación fija: enlaces en línea en escritorio y menú desplegable en móvil.
- `section-heading.ts` — antetítulo + título + entrada, en tono claro o inverso.
- `media-figure.ts` — fotografía con marco de proporción fija y pie de foto. Si el archivo
  no está, el marco muestra solo el nombre del archivo que falta.
- `video-block.ts` — `<video controls>` con pie de foto; el póster es opcional.
- `site-footer.ts` — nota de privacidad y datos del estudiante.
- `reveal.directive.ts` — aparición progresiva al entrar en pantalla (se desactiva con
  `prefers-reduced-motion`).

Contenido y tipos: `src/app/core/bitacora-content.ts` (único archivo que se edita para
cambiar textos o medios) y `src/app/core/modelos.ts`.

## Comandos

```bash
pnpm install     # dependencias (pnpm 12)
pnpm start       # servidor de desarrollo en http://localhost:4200
pnpm build       # build de producción en dist/BitacoraMultimedia
pnpm test        # pruebas unitarias (Vitest)
```

## Multimedia

La bitácora usa únicamente la evidencia disponible: **una fotografía y dos videos**.

```text
src/assets/
├── images/
│   └── portada.jpg            ← única fotografía
└── videos/
    ├── intervencion.mp4       ← video de la experiencia
    └── aprendizaje.mp4        ← video de la reflexión final
```

`src/assets` se publica en la carpeta `/assets` (configurado en `angular.json`).

1. Coloca la fotografía en `src/assets/images/` con el nombre `portada.jpg`.
2. Coloca los videos en `src/assets/videos/` con los nombres `intervencion.mp4` y
   `aprendizaje.mp4`.
3. Si una fotografía no aparece, revisa la ruta en `bitacora-content.ts`: el marco
   muestra el nombre del archivo esperado.
4. No hay marcadores de posición ni espacios reservados a fotos o videos que no
   existan. Si más adelante se añade un póster para un video, basta con escribir su
   ruta en el campo `poster` de ese video.

### Producto tangible (opcional)

En `RESULTADO`, la propiedad `producto` está en `null`. Si durante la experiencia se
elaboró algo tangible, descríbelo ahí y la página lo mostrará junto a las
observaciones. Mientras sea `null`, no se reserva ningún espacio para un producto
que no existe.

### Textos pendientes

Lo que aparece entre corchetes `[ ]` son datos que solo conoce el autor y que no se
pueden escribir sin inventarlos: fecha, nombre del escenario, descripciones
concretas y firma. Son los únicos marcadores de la página.

## Privacidad

No se incorporan nombres completos, direcciones, teléfonos ni ningún dato identificatorio
de la persona acompañada. Las fotografías y los videos deben usarse con autorización
de la persona y, preferentemente, encuadres que no expongan información privada.
