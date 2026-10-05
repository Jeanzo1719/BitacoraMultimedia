/**
 * Modelos de datos de la bitácora.
 *
 * Reflejan la evidencia realmente disponible: una fotografía y dos videos.
 * El contenido vive en `bitacora-content.ts`.
 */

/** Enlace interno de la navegación superior. */
export interface NavLink {
  readonly id: string;
  readonly label: string;
}

/** Dato breve de identificación (nunca una tabla de datos). */
export interface DatoClave {
  readonly label: string;
  readonly valor: string;
}

/** Proporciones admitidas para los marcos de imagen. */
export type MediaRatio = '16/9' | '3/2' | '4/3' | '4/5';

/** Fotografía con su texto alternativo y su pie de foto. */
export interface ImagenBitacora {
  /** Ruta dentro de `src/assets`. */
  readonly src: string;
  /** Descripción de la imagen para lectores de pantalla. */
  readonly alt: string;
  /** Pie de foto breve. */
  readonly caption: string;
  readonly ratio: MediaRatio;
}

/** Video corto. El póster es opcional: solo se usa si existe el archivo. */
export interface VideoBitacora {
  readonly src: string;
  readonly titulo: string;
  readonly descripcion: string;
  readonly poster?: string;
}

/** Bloque de texto breve con título (lugar, organización, materiales…). */
export interface BloqueTexto {
  readonly titulo: string;
  readonly texto: string;
}

/**
 * Producto tangible, solo si durante la experiencia se elaboró alguno.
 * Si no existe, se deja en `null` y la página no reserva ningún espacio
 * para él.
 */
export interface ProductoOpcional {
  readonly titulo: string;
  readonly descripcion: string;
  readonly imagen?: ImagenBitacora;
}

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
  readonly bloques: readonly BloqueTexto[];
}

export interface ContenidoIntervencion {
  readonly id: string;
  readonly eyebrow: string;
  readonly titulo: string;
  readonly intro: string;
  readonly imagen: ImagenBitacora;
  readonly video: VideoBitacora;
}

export interface ContenidoResultado {
  readonly id: string;
  readonly eyebrow: string;
  readonly titulo: string;
  readonly intro: string;
  readonly bloques: readonly BloqueTexto[];
  /** `null` cuando no se elaboró ningún producto tangible. */
  readonly producto: ProductoOpcional | null;
}

/**
 * Las tres preguntas de la Bitácora de Aprendizaje. El tipo restringe el
 * contenido a esas tres, de modo que no sea posible agregar otras.
 */
export type PreguntaAprendizaje =
  | '¿Qué hice?'
  | '¿Qué aprendí sobre el Humanismo Amigoniano?'
  | '¿Qué cambiaría si repitiera la experiencia?';

export interface ContenidoAprendizaje {
  readonly id: string;
  readonly eyebrow: string;
  readonly titulo: string;
  readonly intro: string;
  readonly video: VideoBitacora;
  readonly preguntas: readonly PreguntaAprendizaje[];
}

export interface ContenidoFooter {
  readonly titulo: string;
  readonly nota: string;
  readonly firma: readonly DatoClave[];
}
