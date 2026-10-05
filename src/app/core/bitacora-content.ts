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
 *   src/assets/images/portada.jpg   → única fotografía (solo en la portada)
 *   src/assets/videos/intervencion.mp4
 *   src/assets/videos/aprendizaje.mp4
 *
 * Lo que aparece entre corchetes `[ ]` son datos que solo tú conoces y que
 * no se pueden escribir sin inventarlos: textos alternativos y pies de las
 * imágenes, y los datos de la entrega. No hay marcadores de posición para
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
    'Realizada de forma individual por Juan Sebastián Ríos Rodríguez, responsable de toda la experiencia.',
  datos: [
    { label: 'Fecha', valor: 'Domingo 4 de octubre de 2026' },
    { label: 'Escenario', valor: 'Calle 68, sector Castilla, Medellín' },
    { label: 'Modalidad', valor: 'Acompañamiento y escucha individual' },
  ],
  imagen: {
    src: 'assets/images/portada.jpg',
    alt: 'Fotografía de la experiencia de acompañamiento y escucha: [Descripción de lo que se ve en la fotografía].',
    caption: '[Pie de foto breve de la fotografía principal]',
    ratio: '1/1',
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
    'La experiencia fue planeada previamente y se eligió la calle 68 del sector Castilla, en Medellín, como escenario para realizar el acompañamiento. A continuación se describe el lugar, la organización y los materiales.',
  bloques: [
    {
      titulo: 'El lugar',
      texto:
        'La calle 68 del sector Castilla se eligió previamente como escenario de la experiencia, por ser un espacio de carácter comercial y de tránsito frecuente de personas. En este lugar es común encontrar personas que recorren la zona ofreciendo dulces y otros productos como una forma de obtener ingresos para su sustento diario.',
    },
    {
      titulo: 'La organización',
      texto:
        'La actividad fue planeada previamente y se definió la calle 68 del sector Castilla como escenario de la experiencia, junto con el propósito de acompañar y escuchar. No estaba determinado quién sería la persona acompañada ni el momento exacto del encuentro. Una vez en el lugar, se esperó a que se presentara la oportunidad de acercamiento con una persona que ofreciera dulces para obtener ingresos. Cuando se presentó esa oportunidad, se realizó la invitación a comer y se generó el espacio de conversación y acompañamiento. El encuentro fue sencillo y respetuoso, sin establecer una actividad rígida ni condicionar la interacción a la realización de la actividad académica.',
    },
    {
      titulo: 'Materiales',
      texto:
        'El único material utilizado fue un teléfono celular, empleado para registrar parte de la experiencia mediante video. La grabación se realizó desde una distancia prudente y sin registrar directamente la conversación, como una decisión consciente para preservar la privacidad, dignidad y tranquilidad de la persona acompañada. Por esta misma razón, se evitó realizar una grabación cercana o intrusiva del encuentro. La intención era documentar la experiencia sin convertir a la persona ni a su situación personal en material de exposición para una actividad académica.',
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
    'El acompañamiento se dio desde la presencia y la escucha. La invitación a comer formaba parte del propósito definido de la experiencia; lo que no estaba previsto era con qué persona se produciría el encuentro. La experiencia partió del reconocimiento de que, para algunas de quienes ofrecen dulces en la calle, las condiciones económicas pueden dificultar incluso el acceso cotidiano a una alimentación adecuada. El siguiente video es la evidencia de esta experiencia.',
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
      texto:
        'Durante la intervención se generó un espacio de conversación y acompañamiento mientras compartíamos una comida. La experiencia permitió prestar atención a la persona, escucharla y compartir un momento cotidiano sin centrar el encuentro únicamente en su situación económica o en su actividad de venta.',
    },
    {
      titulo: 'Al cerrar la visita',
      texto:
        'Al finalizar el encuentro, se dio cierre de manera natural y respetuosa. La experiencia permitió reconocer el valor de dedicar tiempo a otra persona y comprender que una acción sencilla, como compartir una comida y brindar un espacio de escucha, puede convertirse en una forma concreta de acompañamiento y reconocimiento de la dignidad humana.',
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
    'Video en el que respondo, en mi propia voz, las tres preguntas de la bitácora de aprendizaje.',
  video: {
    src: 'assets/videos/aprendizaje.mp4',
    titulo: 'Reflexión final',
    descripcion:
      'Respuesta a las tres preguntas: lo que hice, lo que aprendí sobre el Humanismo Amigoniano y lo que cambiaría si repitiera la experiencia.',
    ratio: '9/16',
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
  firma: [
    { label: 'Responsable', valor: 'Juan Sebastián Ríos Rodríguez' },
    { label: 'Asignatura', valor: '[Asignatura / institución]' },
    { label: 'Entrega', valor: '[Fecha de entrega]' },
  ],
};
