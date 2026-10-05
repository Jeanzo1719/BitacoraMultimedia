import type {
  ContenidoAprendizaje,
  ContenidoEscenario,
  ContenidoFooter,
  ContenidoHero,
  ContenidoIntervencion,
  ContenidoPreparacion,
  ContenidoProducto,
  ContenidoResultados,
  NavLink,
  PreguntaAprendizaje,
} from './modelos';

/**
 * CONTENIDO DE LA BITÁCORA
 * ========================
 *
 * Este archivo es el único lugar donde se edita el texto y se apuntan los
 * archivos multimedia. Todo lo que aparece entre corchetes `[ ]` es un
 * PENDIENTE: sustitúyalo por información real de la experiencia.
 *
 * Multimedia:
 *  - Imágenes: `src/assets/images/**` (hoy hay marcadores de posición SVG).
 *  - Videos:   `src/assets/videos/*.mp4` (aún no incorporados).
 *
 * Privacidad: no se incluyen nombres completos, direcciones, teléfonos ni
 * ningún dato identificatorio de la persona acompañada.
 */

/** Navegación superior. Los identificadores coinciden con los `id` de cada sección. */
export const NAVEGACION: readonly NavLink[] = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'escenario', label: 'Escenario' },
  { id: 'intervencion', label: 'Intervención' },
  { id: 'producto', label: 'Producto' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'aprendizaje', label: 'Aprendizaje' },
];

/* ------------------------------------------------------------------ */
/* 1. Portada                                                         */
/* ------------------------------------------------------------------ */

export const HERO: ContenidoHero = {
  id: 'inicio',
  eyebrow: 'Bitácora multimedia',
  titulo: 'Un espacio para compartir',
  subtitulo: 'Bitácora multimedia de una experiencia de acompañamiento y escucha',
  descripcion:
    'Registro cronológico de una intervención individual: acompañar, escuchar y reconocer la dignidad de una persona que se encontraba en una situación de soledad.',
  responsable:
    'Registro y responsable de la experiencia: [Nombre del estudiante]. La intervención se realizó de forma individual, sin equipo.',
  datos: [
    { label: 'Fecha', valor: '[Fecha de la experiencia]' },
    { label: 'Escenario', valor: '[Nombre del escenario]' },
    { label: 'Modalidad', valor: 'Acompañamiento y escucha individual' },
  ],
  imagen: {
    src: 'assets/images/portada/portada-01.svg',
    alt: 'Fotografía principal de la bitácora: [Descripción real de la fotografía de portada, sin datos personales identificatorios].',
    caption: '[Pie de foto de la portada]',
    ratio: '3/2',
  },
};

/* ------------------------------------------------------------------ */
/* 2. El escenario                                                    */
/* ------------------------------------------------------------------ */

export const ESCENARIO: ContenidoEscenario = {
  id: 'escenario',
  eyebrow: '01 · Punto de partida',
  titulo: 'El escenario',
  intro:
    '[Descripción breve del lugar donde se realizó la experiencia: qué tipo de espacio es, cómo era el ambiente y por qué se eligió como escenario.]',
  datos: [
    { label: 'Lugar', valor: '[Nombre del escenario]' },
    {
      label: 'Tipo de espacio',
      valor: '[Domicilio / centro comunitario / espacio institucional / vía pública]',
    },
    { label: 'Momento', valor: '[Día y hora aproximada de la experiencia]' },
    { label: 'Duración', valor: '[Duración aproximada de la intervención]' },
  ],
  imagen: {
    src: 'assets/images/escenario/escenario-01.svg',
    alt: 'Fotografía del espacio donde se realizó la experiencia: [Descripción real del lugar].',
    caption: '[Pie de foto: el lugar del encuentro]',
    ratio: '4/3',
  },
  video: {
    src: 'assets/videos/introduccion.mp4',
    poster: 'assets/images/videos/poster-introduccion.svg',
    titulo: 'Presentación del escenario',
    descripcion: '[Descripción breve de lo que muestra este video introductorio.]',
    archivo: 'assets/videos/introduccion.mp4',
  },
};

/* ------------------------------------------------------------------ */
/* 3. Preparación e inicio                                            */
/* ------------------------------------------------------------------ */

export const PREPARACION: ContenidoPreparacion = {
  id: 'preparacion',
  eyebrow: '02 · Antes de comenzar',
  titulo: 'Preparación e inicio',
  intro:
    'Lo que ocurrió antes del primer saludo: la organización de la actividad, los materiales, el traslado y el comienzo del encuentro.',
  momentos: [
    {
      etiqueta: 'Momento 01',
      titulo: 'Preparación de la actividad',
      descripcion:
        'Definí el propósito de la visita, el orden de la conversación y la duración prevista. [Descripción real de la preparación previa.]',
      imagen: {
        src: 'assets/images/preparacion/preparacion-01.svg',
        alt: 'Fotografía de la preparación de la actividad: [Descripción real de lo que se observa en la imagen].',
        caption: '[Pie de foto de la preparación]',
        ratio: '3/2',
      },
    },
    {
      etiqueta: 'Momento 02',
      titulo: 'Materiales utilizados',
      descripcion:
        'Seleccioné los elementos que iba a llevar, pensados para sostener la conversación sin invadirla. [Descripción real de la selección de materiales.]',
      imagen: {
        src: 'assets/images/materiales/materiales-01.svg',
        alt: 'Fotografía de los materiales utilizados para la experiencia: [Descripción real de los objetos que aparecen].',
        caption: '[Pie de foto de los materiales]',
        ratio: '4/3',
      },
    },
    {
      etiqueta: 'Momento 03',
      titulo: 'Llegada al escenario',
      descripcion:
        '[Descripción real de la llegada: hora, lugar, primer contacto y cómo se dio el saludo.]',
      imagen: {
        src: 'assets/images/preparacion/preparacion-02.svg',
        alt: 'Fotografía de la llegada al escenario: [Descripción real de la imagen].',
        caption: '[Pie de foto de la llegada]',
        ratio: '3/2',
      },
    },
    {
      etiqueta: 'Momento 04',
      titulo: 'Inicio del encuentro',
      descripcion:
        'El primer contacto fue [Descripción real del inicio de la conversación y de cómo se rompió el silencio inicial].',
    },
  ],
  materiales: [
    '[Material 1 — por ejemplo: cuaderno de notas]',
    '[Material 2 — por ejemplo: bolígrafo]',
    '[Material 3 — por ejemplo: agua]',
    '[Material 4 — por ejemplo: material usado para el producto]',
  ],
};

/* ------------------------------------------------------------------ */
/* 4. Durante la intervención                                         */
/* ------------------------------------------------------------------ */

export const INTERVENCION: ContenidoIntervencion = {
  id: 'intervencion',
  eyebrow: '03 · En el encuentro',
  titulo: 'Durante la intervención',
  intro:
    'Recorrido visual del encuentro: fotografías originales, videos cortos y evidencias del trabajo realizado. [Descripción breve de lo que se hizo, en pocas líneas.]',
  galeria: [
    {
      src: 'assets/images/intervencion/intervencion-01.svg',
      alt: 'Fotografía del participante durante la intervención: [Descripción real de lo que ocurre en la imagen].',
      caption: '[Momento 1 · Descripción breve]',
      ratio: '4/5',
    },
    {
      src: 'assets/images/intervencion/intervencion-02.svg',
      alt: 'Fotografía del estudiante acompañando a la persona: [Descripción real de la imagen].',
      caption: '[Momento 2 · Descripción breve]',
      ratio: '4/5',
    },
    {
      src: 'assets/images/intervencion/intervencion-03.svg',
      alt: 'Fotografía de un momento de la conversación: [Descripción real de la imagen].',
      caption: '[Momento 3 · Descripción breve]',
      ratio: '4/5',
    },
    {
      src: 'assets/images/intervencion/intervencion-04.svg',
      alt: 'Fotografía de un momento de escucha: [Descripción real de la imagen].',
      caption: '[Momento 4 · Descripción breve]',
      ratio: '4/5',
    },
    {
      src: 'assets/images/intervencion/intervencion-05.svg',
      alt: 'Fotografía de un momento de compañía: [Descripción real de la imagen].',
      caption: '[Momento 5 · Descripción breve]',
      ratio: '4/5',
    },
    {
      src: 'assets/images/intervencion/intervencion-06.svg',
      alt: 'Fotografía del cierre de la intervención: [Descripción real de la imagen].',
      caption: '[Momento 6 · Descripción breve]',
      ratio: '4/5',
    },
  ],
  videos: [
    {
      src: 'assets/videos/intervencion.mp4',
      poster: 'assets/images/videos/poster-intervencion.svg',
      titulo: 'Fragmento del encuentro',
      descripcion: '[Descripción breve de este fragmento de la intervención.]',
      archivo: 'assets/videos/intervencion.mp4',
    },
    {
      src: 'assets/videos/intervencion-detalle.mp4',
      poster: 'assets/images/videos/poster-intervencion-detalle.svg',
      titulo: 'Detalle del acompañamiento',
      descripcion: '[Descripción breve de este segundo fragmento corto.]',
      archivo: 'assets/videos/intervencion-detalle.mp4',
    },
  ],
  evidencias: [
    {
      titulo: 'Registro del encuentro',
      detalle:
        '[Descripción real de la evidencia: anotaciones, fotografías, mensajes u otros registros.]',
    },
    {
      titulo: 'Producto en proceso',
      detalle: '[Descripción real de la evidencia del producto elaborado.]',
    },
    {
      titulo: 'Materiales empleados',
      detalle: '[Descripción real de la evidencia de los materiales utilizados.]',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 5. Producto elaborado                                              */
/* ------------------------------------------------------------------ */

export const PRODUCTO: ContenidoProducto = {
  id: 'producto',
  eyebrow: '04 · Lo que quedó',
  titulo: 'Producto elaborado',
  intro: '[Descripción de una línea sobre el producto realizado durante la experiencia.]',
  imagen: {
    src: 'assets/images/producto/producto-01.svg',
    alt: 'Fotografía del producto elaborado durante la experiencia: [Descripción real del producto].',
    caption: '[Pie de foto del producto]',
    ratio: '4/3',
  },
  bloques: [
    {
      titulo: 'Qué se elaboró',
      texto: '[Descripción real de lo que se elaboró durante la experiencia.]',
    },
    {
      titulo: 'Cómo se realizó',
      texto: '[Descripción real del proceso de elaboración y de la participación de la persona.]',
    },
    {
      titulo: 'Qué significado tuvo',
      texto: '[Descripción real del significado que tuvo el producto dentro de la experiencia.]',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 6. Resultados observables                                          */
/* ------------------------------------------------------------------ */

export const RESULTADOS: ContenidoResultados = {
  id: 'resultados',
  eyebrow: '05 · Lo que se observó',
  titulo: 'Resultados observables',
  intro:
    'Registro de lo que pudo observarse durante y después del encuentro. Cada bloque se completa con lo que realmente ocurrió.',
  nota: 'Pendiente de completar con las observaciones reales de la experiencia.',
  items: [
    {
      titulo: 'Participación de la persona',
      observacion: '[Descripción real de cómo participó la persona]',
      registrado: false,
    },
    {
      titulo: 'Interacción generada',
      observacion: '[Descripción real de la interacción que se generó]',
      registrado: false,
    },
    {
      titulo: 'Conversación',
      observacion: '[Descripción real de la conversación, sin datos personales identificatorios]',
      registrado: false,
    },
    {
      titulo: 'Expresión de recuerdos o experiencias',
      observacion: '[Descripción real de los recuerdos o experiencias expresados]',
      registrado: false,
    },
    {
      titulo: 'Estado de ánimo observado',
      observacion: '[Descripción real del estado de ánimo observado, sin diagnósticos]',
      registrado: false,
    },
    {
      titulo: 'Producto realizado conjuntamente',
      observacion: '[Descripción real del producto elaborado en conjunto]',
      registrado: false,
    },
    {
      titulo: 'Otros resultados',
      observacion: '[Descripción real de otros resultados observados]',
      registrado: false,
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 7. Bitácora de aprendizaje                                        */
/* ------------------------------------------------------------------ */

export const APRENDIZAJE: ContenidoAprendizaje = {
  id: 'aprendizaje',
  eyebrow: '06 · Cierre',
  titulo: 'Bitácora de aprendizaje',
  intro:
    'Registro personal desde el escenario de práctica. El video responde únicamente las tres preguntas que aparecen a su alrededor.',
  video: {
    src: 'assets/videos/aprendizaje.mp4',
    poster: 'assets/images/videos/poster-aprendizaje.svg',
    titulo: 'Bitácora de aprendizaje en video',
    descripcion:
      'Video realizado desde el escenario de práctica en el que se responden las tres preguntas de la bitácora.',
    archivo: 'assets/videos/aprendizaje.mp4',
  },
  preguntas: [
    '¿Qué hice?',
    '¿Qué aprendí sobre el Humanismo Amigoniano?',
    '¿Qué cambiaría si repitiera la experiencia?',
  ] satisfies readonly PreguntaAprendizaje[],
  nota: '[Resumen breve y opcional de la bitácora, máximo dos líneas. Las respuestas completas se conservan en el video.]',
};

/* ------------------------------------------------------------------ */
/* 8. Pie de página                                                   */
/* ------------------------------------------------------------------ */

export const FOOTER: ContenidoFooter = {
  titulo: 'Un espacio para compartir',
  nota: 'Bitácora académica elaborada con autorización de uso de las imágenes y los videos. Se omite toda información personal identificatoria de la persona acompañada.',
  firma: [
    { label: 'Responsable', valor: '[Nombre del estudiante]' },
    { label: 'Asignatura', valor: '[Asignatura / institución]' },
    { label: 'Entrega', valor: '[Fecha de entrega]' },
  ],
};
