/**
 * Modelos de datos de la bitácora.
 *
 * Toda la información multimedia y textual de la página vive en
 * `bitacora-content.ts`. Estos tipos describen la forma de ese contenido
 * y permiten reemplazarlo de forma segura al incorporar las evidencias reales.
 */

/** Enlace interno de la navegación superior. */
export interface NavLink {
  readonly id: string;
  readonly label: string;
}

/** Par etiqueta / dato breve (nunca una tabla de datos). */
export interface DatoClave {
  readonly label: string;
  readonly valor: string;
}

/** Imagen de la bitácora con su texto alternativo y su pie de foto. */
export interface ImagenBitacora {
  /** Ruta dentro de `src/assets`. */
  readonly src: string;
  /** Descripción de la imagen para lectores de pantalla. */
  readonly alt: string;
  /** Pie de foto breve. */
  readonly caption: string;
  /** Proporción del marco; controla el recorte sin deformar la foto. */
  readonly ratio: MediaRatio;
}

/** Proporciones admitidas para los marcos de imagen. */
export type MediaRatio = '16/9' | '3/2' | '4/3' | '4/5' | '1/1';

/** Video corto con póster y archivo esperado. */
export interface VideoBitacora {
  readonly src: string;
  readonly poster: string;
  readonly titulo: string;
  readonly descripcion: string;
  /** Nombre del archivo que debe incorporarse (o el que ya se reemplazo). */
  readonly archivo: string;
}

/** Bloque de texto breve con título (qué se elaboró, cómo, para qué). */
export interface BloqueTexto {
  readonly titulo: string;
  readonly texto: string;
}

/** Momento de la cronología. */
export interface MomentoCronologia {
  readonly etiqueta: string;
  readonly titulo: string;
  readonly descripcion: string;
  readonly imagen?: ImagenBitacora;
}

/**
 * Evidencia concreta del trabajo realizado (registro, material,
 * anotación, etc.). Se mantiene como lista corta y descriptiva.
 */
export interface Evidencia {
  readonly titulo: string;
  readonly detalle: string;
}

/**
 * Resultado observable. Nunca se da por confirmado: hasta que la
 * observación real esté escrita, el bloque queda marcado como pendiente.
 */
export interface ResultadoObservable {
  readonly titulo: string;
  readonly observacion: string;
  readonly registrado: boolean;
}

/**
 * Las tres preguntas de la Bitácora de Aprendizaje. El tipo restringe el
 * contenido a esas tres, de modo que no sea posible agregar otras.
 */
export type PreguntaAprendizaje =
  | '¿Qué hice?'
  | '¿Qué aprendí sobre el Humanismo Amigoniano?'
  | '¿Qué cambiaría si repitiera la experiencia?';

export interface ContenidoHero {
  readonly id: string;
  readonly eyebrow: string;
  readonly titulo: string;
  readonly subtitulo: string;
  readonly descripcion: string;
  readonly responsable: string;
  readonly datos: readonly DatoClave[];
  readonly imagen: ImagenBitacora;
}

export interface ContenidoEscenario {
  readonly id: string;
  readonly eyebrow: string;
  readonly titulo: string;
  readonly intro: string;
  readonly datos: readonly DatoClave[];
  readonly imagen: ImagenBitacora;
  readonly video: VideoBitacora;
}

export interface ContenidoPreparacion {
  readonly id: string;
  readonly eyebrow: string;
  readonly titulo: string;
  readonly intro: string;
  readonly momentos: readonly MomentoCronologia[];
  readonly materiales: readonly string[];
}

export interface ContenidoIntervencion {
  readonly id: string;
  readonly eyebrow: string;
  readonly titulo: string;
  readonly intro: string;
  readonly galeria: readonly ImagenBitacora[];
  readonly videos: readonly VideoBitacora[];
  readonly evidencias: readonly Evidencia[];
}

export interface ContenidoProducto {
  readonly id: string;
  readonly eyebrow: string;
  readonly titulo: string;
  readonly intro: string;
  readonly imagen: ImagenBitacora;
  readonly bloques: readonly BloqueTexto[];
}

export interface ContenidoResultados {
  readonly id: string;
  readonly eyebrow: string;
  readonly titulo: string;
  readonly intro: string;
  readonly nota: string;
  readonly items: readonly ResultadoObservable[];
}

export interface ContenidoAprendizaje {
  readonly id: string;
  readonly eyebrow: string;
  readonly titulo: string;
  readonly intro: string;
  readonly video: VideoBitacora;
  readonly preguntas: readonly PreguntaAprendizaje[];
  readonly nota: string;
}

export interface ContenidoFooter {
  readonly titulo: string;
  readonly nota: string;
  readonly firma: readonly DatoClave[];
}
