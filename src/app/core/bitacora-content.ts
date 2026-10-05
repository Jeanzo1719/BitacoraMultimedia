import type {
  ContenidoAprendizaje,
  ContenidoEscenario,
  ContenidoFooter,
  ContenidoHero,
  ContenidoIntervencion,
  ContenidoResultado,
  NavLink,
  PreguntaAprendizaje,
} from './modelos';

/**
 * CONTENIDO DE LA BITÁCORA
 * ========================
 *
 * Evidencia real disponible: una fotografía y dos videos.
 *
 *   src/assets/images/portada.jpg   → única fotografía
 *   src/assets/videos/intervencion.mp4
 *   src/assets/videos/aprendizaje.mp4
 *
 * Lo que aparece entre corchetes `[ ]` son datos que solo tú conoces y que
 * no se pueden escribir sin inventarlos: fecha, nombre del escenario,
 * descripciones concretas y firma. No hay marcadores de posición para
 * fotografías ni videos: si un archivo falta, se avisa con su nombre.
 *
 * Privacidad: sin nombres completos, direcciones, teléfonos ni ningún dato
 * identificatorio de la persona acompañada.
 */

export const NAVEGACION: readonly NavLink[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'escenario', label: 'Escenario' },
  { id: 'intervencion', label: 'Intervención' },
  { id: 'resultado', label: 'Resultado' },
  { id: 'aprendizaje', label: 'Aprendizaje' },
];

/* ------------------------------------------------------------------ */
/* 1. Inicio                                                           */
/* ------------------------------------------------------------------ */

export const HERO: ContenidoHero = {
  id: 'inicio',
  eyebrow: 'Bitácora multimedia',
  titulo: 'Un espacio para compartir',
  subtitulo: 'Bitácora multimedia de una experiencia de acompañamiento y escucha',
  descripcion:
    'La experiencia consistió en acompañar y escuchar a una persona que se encontraba en una situación de soledad, con el propósito de abrir un espacio de conversación, compañía y reconocimiento de su dignidad.',
  responsable:
    'Realizada de forma individual por [Nombre del estudiante], responsable de toda la experiencia.',
  datos: [
    { label: 'Fecha', valor: '[Fecha de la experiencia]' },
    { label: 'Escenario', valor: '[Nombre del escenario]' },
    { label: 'Modalidad', valor: 'Acompañamiento y escucha individual' },
  ],
  imagen: {
    src: 'assets/images/portada.jpg',
    alt: 'Fotografía de la experiencia de acompañamiento y escucha: [Descripción de lo que se ve en la fotografía].',
    caption: '[Pie de foto breve de la fotografía principal]',
    ratio: '3/2',
  },
};

/* ------------------------------------------------------------------ */
/* 2. El escenario y la preparación                                    */
/* ------------------------------------------------------------------ */

export const ESCENARIO: ContenidoEscenario = {
  id: 'escenario',
  eyebrow: '01 · Dónde y cómo',
  titulo: 'El escenario y la preparación',
  intro:
    'La experiencia se desarrolló en [Nombre del escenario]. Antes de llegar se definieron el propósito de la visita, el orden de la conversación y la duración prevista.',
  bloques: [
    {
      titulo: 'El lugar',
      texto: '[Descripción breve del lugar y del contexto en el que se dio el encuentro.]',
    },
    {
      titulo: 'La organización',
      texto: '[Descripción de cómo se organizó la actividad y cuánto duró la visita.]',
    },
    {
      titulo: 'Materiales',
      texto:
        'Se llevó lo mínimo necesario para sostener la conversación sin invadirla: [Materiales realmente utilizados].',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 3. La intervención                                                  */
/* ------------------------------------------------------------------ */

export const INTERVENCION: ContenidoIntervencion = {
  id: 'intervencion',
  eyebrow: '02 · El encuentro',
  titulo: 'La intervención',
  intro:
    'El acompañamiento se dio desde la presencia y la escucha. [Descripción breve de lo que se hizo durante el encuentro.] Las evidencias de esta experiencia son la fotografía y el video.',
  imagen: {
    src: 'assets/images/portada.jpg',
    alt: 'Fotografía de la persona acompañada durante el encuentro: [Descripción de lo que se ve en la fotografía].',
    caption: '[Pie de foto breve]',
    ratio: '4/5',
  },
  video: {
    src: 'assets/videos/intervencion.mp4',
    titulo: 'La experiencia en video',
    descripcion: '[Descripción breve de lo que muestra el video.]',
  },
};

/* ------------------------------------------------------------------ */
/* 4. El resultado de la experiencia                                  */
/* ------------------------------------------------------------------ */

export const RESULTADO: ContenidoResultado = {
  id: 'resultado',
  eyebrow: '03 · Lo que quedó',
  titulo: 'El resultado de la experiencia',
  intro:
    'Lo que dejó el encuentro se observó en el momento, más que en un producto entregado. Estas son las observaciones reales de la experiencia.',
  bloques: [
    {
      titulo: 'Durante el encuentro',
      texto: '[Descripción de lo que se observó durante la intervención.]',
    },
    {
      titulo: 'Al cerrar la visita',
      texto: '[Descripción de lo que se observó al terminar.]',
    },
  ],
  /**
   * Si durante la intervención se elaboró algún producto tangible
   * (una carta, un dibujo, un trabajo…), escríbelo aquí y la página lo
   * mostrará. Mientras sea `null`, no se reserva ningún espacio para él.
   */
  producto: null,
};

/* ------------------------------------------------------------------ */
/* 5. Bitácora de aprendizaje                                          */
/* ------------------------------------------------------------------ */

export const APRENDIZAJE: ContenidoAprendizaje = {
  id: 'aprendizaje',
  eyebrow: '04 · Cierre',
  titulo: 'Bitácora de aprendizaje',
  intro:
    'Video grabado desde el escenario de práctica en el que respondo las tres preguntas de la bitácora.',
  video: {
    src: 'assets/videos/aprendizaje.mp4',
    titulo: 'Reflexión final',
    descripcion: 'La reflexión sobre lo hecho, lo aprendido y lo que cambiaría.',
  },
  preguntas: [
    '¿Qué hice?',
    '¿Qué aprendí sobre el Humanismo Amigoniano?',
    '¿Qué cambiaría si repitiera la experiencia?',
  ] satisfies readonly PreguntaAprendizaje[],
};

/* ------------------------------------------------------------------ */
/* 6. Cierre                                                           */
/* ------------------------------------------------------------------ */

export const FOOTER: ContenidoFooter = {
  titulo: 'Un espacio para compartir',
  nota: 'Las imágenes y los videos se utilizan con autorización para fines académicos. No se incluye información personal identificatoria de la persona acompañada.',
  firma: [
    { label: 'Responsable', valor: '[Nombre del estudiante]' },
    { label: 'Asignatura', valor: '[Asignatura / institución]' },
    { label: 'Entrega', valor: '[Fecha de entrega]' },
  ],
};
