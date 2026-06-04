// ============================================================
// EXAMEN - PREGUNTAS SESION 5
// 7 reactivos | clave 5555 | timer 90s por pregunta | resultado al final
// SNTE Seccion 21 - Promocion Horizontal USICAMM
// correcta: indice 0 = opcion a, 1 = opcion b, 2 = opcion c
// ============================================================

export const CLAVE_EXAMEN = "5555";
export const TIEMPO_POR_PREGUNTA = 90;

export const REACTIVOS = [
  {
    id: 1,
    tipo: "Caso",
    enunciado: `Una maestra de secundaria diseña un proyecto integrador en el que las y los estudiantes analizan diversas manifestaciones artísticas y literarias para expresar su postura crítica sobre un problema comunitario. Durante el proceso, ajustan su discurso según el interlocutor y el medio (digital o presencial). Según el Plan de Estudio 2022, ¿cuál es el objeto de aprendizaje del campo formativo de Lenguajes que se privilegia en esta situación?`,
    opciones: [
      `La apropiación de las lenguas como códigos de comunicación y sistemas de representación simbólica.`,
      `El desarrollo de procesos comunicativos éticos y creativos para la construcción de la identidad personal.`,
      `La experiencia y la interacción con el mundo mediante el empleo de diferentes lenguajes.`,
    ],
    correcta: 2,
    explicacion: `El campo de Lenguajes tiene como objeto de aprendizaje la experiencia y la interacción con el mundo mediante el empleo de diferentes lenguajes (orales, escritos, artísticos, corporales, digitales). El distractor de la apropiación como códigos y sistemas de representación es un componente parcial, no el objeto central; el de procesos comunicativos éticos corresponde a una finalidad del campo, no al objeto de aprendizaje.`,
    fuente: `Plan 2022 · Lenguajes`,
  },
  {
    id: 2,
    tipo: "Caso",
    enunciado: `Durante la sesión del Consejo Técnico Escolar dedicada al diagnóstico socioeducativo para el Proceso de Mejora Continua (PMC), el colectivo docente detecta la necesidad de evaluar el impacto de las nuevas estrategias de comunicación escuela-hogar. Para que el indicador sea integral, el director señala que es indispensable integrar de manera formal la perspectiva y la opinión de las familias. ¿Cuál de las siguientes acciones permite recuperar esa información de forma sistemática, institucional y con validez para el diagnóstico del PMC?`,
    opciones: [
      `Diseñar y aplicar una encuesta con preguntas cerradas y abiertas dirigida a una muestra representativa de los tutores al finalizar el periodo grupal.`,
      `Instalar un buzón de sugerencias físico y digital a la entrada de la escuela para que las familias expresen libremente sus opiniones de forma anónima.`,
      `Convocar a una asamblea general informativa y registrar en el acta de la sesión los comentarios, quejas y participaciones espontáneas de los asistentes.`,
    ],
    correcta: 0,
    explicacion: `Una encuesta con preguntas cerradas y abiertas, dirigida a una muestra representativa, es el instrumento que permite recoger datos sistematizados, cuantificables y cualitativos con validez para un diagnóstico formal. El buzón de sugerencias no asegura representatividad ni control; el acta de asamblea registra participaciones espontáneas, no una indagación sistemática.`,
    fuente: `Proceso de Mejora Continua`,
  },
  {
    id: 3,
    tipo: "Completar",
    enunciado: `La Nueva Escuela Mexicana busca reorientar el Sistema Educativo Nacional para incidir en la cultura educativa mediante la ________, al impulsar transformaciones sociales en la escuela y la comunidad.`,
    opciones: [
      `conciencia histórica`,
      `corresponsabilidad`,
      `evaluación formativa`,
    ],
    correcta: 1,
    explicacion: `La NEM reorienta el sistema educativo mediante la corresponsabilidad, entendida como la participación conjunta de escuela, familias y comunidad para impulsar transformaciones sociales. La conciencia histórica es un propósito formativo más que el mecanismo de transformación social, y la evaluación formativa es una herramienta pedagógica, no una vía para reorientar la cultura educativa.`,
    fuente: `Plan 2022 · NEM`,
  },
  {
    id: 4,
    tipo: "Completar",
    enunciado: `Dentro de la estructura curricular de la Nueva Escuela Mexicana, el eje articulador de Artes y Experiencias Estéticas busca que las y los estudiantes vayan más allá del aprendizaje técnico. Al implementar este eje, el colectivo de maestras y maestros debe asegurar que las manifestaciones artísticas funcionen como una vía para ________, lo que permite que las y los estudiantes reconozcan que los contenidos de ciencias o humanidades no son datos aislados, sino elementos que pueden interpretarse a través de la sensibilidad y el pensamiento crítico.`,
    opciones: [
      `la experimentación creativa y lúdica a través de expresiones artísticas`,
      `la ilustración gráfica de conceptos teóricos complejos`,
      `la construcción de mundos posibles y sentidos propios`,
    ],
    correcta: 2,
    explicacion: `El eje de Artes y Experiencias Estéticas busca que las manifestaciones artísticas sean una vía para la construcción de mundos posibles y de sentidos propios, lo que abre la interpretación sensible y crítica de los contenidos. La experimentación creativa es un medio, no el fin del eje; la ilustración gráfica reduce el arte a una función decorativa.`,
    fuente: `Plan 2022 · Ejes articuladores`,
  },
  {
    id: 5,
    tipo: "Caso",
    enunciado: `Al implementar el Aprendizaje Basado en Problemas (ABP) en la asignatura de Español, el maestro presenta a las y los estudiantes una noticia sobre el racismo en los medios de comunicación. Según esta metodología, ¿cuál es el primer paso que deben dar las y los alumnos para iniciar el proceso de aprendizaje?`,
    opciones: [
      `Analizar su propio contenido y el de la noticia mediante una ronda de preguntas detonantes.`,
      `Presentar una reseña de la noticia en la que se planteen distintas opiniones personales.`,
      `Diseñar un cartel publicitario que proponga soluciones al contexto presentado en la noticia.`,
    ],
    correcta: 0,
    explicacion: `En el Aprendizaje Basado en Problemas, el primer paso es que el alumnado analice el problema presentado y genere preguntas que orienten la investigación. La reseña con opiniones o el cartel con soluciones son productos que se elaboran después del proceso de análisis e investigación, no al inicio.`,
    fuente: `Metodologías NEM · ABP`,
  },
  {
    id: 6,
    tipo: "Concepto",
    enunciado: `Según las investigaciones sobre ambientes de aprendizaje eficaces, ¿cuál de las siguientes opciones explica el proceso de metacognición en un proyecto de Lenguajes?`,
    opciones: [
      `Las y los estudiantes consiguen memorizar los versos y la estructura de un poema a partir del diálogo entre ellos.`,
      `Las y los estudiantes monitorean y controlan sus propios pensamientos en un proyecto de escritura creativa.`,
      `Las y los estudiantes responden de forma intuitiva a preguntas sobre los sentimientos y las emociones de otros.`,
    ],
    correcta: 1,
    explicacion: `La metacognición consiste en que el estudiante monitoree y regule sus propios procesos de pensamiento, como ocurre cuando supervisa y controla su escritura creativa. Memorizar versos es repetición mecánica (no metacognición) y responder de forma intuitiva es reacción espontánea, no supervisión consciente del pensamiento.`,
    fuente: `Ambientes de aprendizaje`,
  },
  {
    id: 7,
    tipo: "Caso",
    enunciado: `Un maestro decide evaluar a sus estudiantes con exámenes de opción múltiple que solo requieren reconocer vocabulario aislado. Sin embargo, pone en duda su enfoque al notar que a sus estudiantes les cuesta usar el idioma en conversaciones reales. Desde la perspectiva del aprendizaje como experiencia formativa de la Nueva Escuela Mexicana (NEM), ¿cuál es el error en la visión del maestro?`,
    opciones: [
      `No considerar que el aprendizaje vincula el conocimiento con situaciones de la realidad.`,
      `Ignorar que la evaluación formativa debe centrarse en la calificación final.`,
      `Priorizar la evaluación de las funciones mentales superiores sobre las funciones básicas.`,
    ],
    correcta: 0,
    explicacion: `La NEM concibe el aprendizaje como una experiencia formativa que vincula el conocimiento con situaciones de la vida real. Evaluar solo vocabulario aislado desconecta el aprendizaje de su uso en contextos auténticos. La evaluación formativa no se centra en la calificación final (eso es incorrecto), y el distractor de funciones mentales superiores invierte el problema real.`,
    fuente: `Plan 2022 · NEM`,
  },
];

export default REACTIVOS;
