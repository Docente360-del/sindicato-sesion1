// ============================================================
// EXAMEN · 17 DE JUNIO - Banco USICAMM
// Caracteristicas/Criterios, Fines, LGDNNA, Objetivos NEM y Programa Analitico
// 10 reactivos | clave 1706 | timer 90s por pregunta | orden fijo | resultado al final
// SNTE Seccion 21 - Promocion Horizontal USICAMM
// NO repite reactivos del examen Nivel 2 y 3 (Docente 360) ya publicado
// correcta: indice 0 = opcion a, 1 = opcion b, 2 = opcion c
// ============================================================

export const CLAVE_EXAMEN = "1706";
export const TIEMPO_POR_PREGUNTA = 90; // segundos por reactivo

export const REACTIVOS = [
  {
    id: 1,
    tipo: "Caso",
    enunciado: "¿Cuál es la descripción que refiere a uno de los objetivos de la Nueva Escuela Mexicana, establecidos en la Ley General de Educación?",
    opciones: [
      "Garantizar una educación equitativa y de excelencia, enfocada en alcanzar el máximo aprendizaje, cuyos propósitos son: formación integral, renovación del sistema educativo, fomento a la participación de todas y todos los actores y generación de cambios positivos en la escuela y la comunidad.",
      "Impulsar el desarrollo de habilidades para la vida y alcanzar el perfil de egreso, con base en las metas de los aprendizajes y la implementación de contenidos curriculares, así como en los criterios para el desempeño de las maestras y los maestros y la gestión educativa.",
      "Fomentar el crecimiento profesional mediante nuevas oportunidades de formación que enriquezcan los conocimientos del magisterio, la adquisición de nuevas experiencias y el fortalecimiento de sus competencias profesionales.",
    ],
    correcta: 0,
    explicacion: "El Art. 11 de la LGE fija los objetivos de la NEM: el desarrollo humano integral del educando (formación integral), reorientar el Sistema Educativo Nacional (renovación del sistema), incidir en la cultura educativa mediante la corresponsabilidad (participación de todos los actores) e impulsar transformaciones sociales en la escuela y la comunidad (cambios positivos). La opción b describe el perfil de egreso del Plan 2022 y la c, la formación continua docente.",
    fuente: "Objetivos de la NEM · Art. 11 LGE",
  },
  {
    id: 2,
    tipo: "Completar",
    enunciado: "Complete la descripción con el elemento que articula el plan de estudio.\n________ articula el trabajo interdisciplinario, la problematización de la realidad y la elaboración de proyectos, promoviendo una formación holística y situando los procesos formativos en los contextos de aprendizaje de las alumnas y los alumnos.",
    opciones: [
      "La autonomía profesional del magisterio",
      "La integración curricular",
      "El derecho humano a la educación",
    ],
    correcta: 1,
    explicacion: "La integración curricular es el elemento del Plan 2022 que articula el trabajo interdisciplinario, la problematización de la realidad y la elaboración de proyectos, dando una formación holística situada en los contextos de aprendizaje. La autonomía profesional y el derecho a la educación son principios del plan, pero no el elemento articulador descrito.",
    fuente: "Plan de Estudio 2022 · Integración curricular",
  },
  {
    id: 3,
    tipo: "Completar",
    enunciado: "Complete la descripción de una de las orientaciones para la construcción y reconstrucción del programa analítico.\nPara la construcción del programa analítico se menciona que las orientaciones ________ abordan los problemas, acontecimientos o temas de interés, sin llegar a desarrollar la planeación didáctica.",
    opciones: [
      "metodológicas y didácticas",
      "de la secuenciación de los contenidos",
      "de la situación educativa de niñas, niños y adolescentes",
    ],
    correcta: 0,
    explicacion: "Las orientaciones metodológicas y didácticas plantean cómo abordar los problemas, acontecimientos o temas de interés, sin llegar a concretar la planeación didáctica (esa concreción ocurre en el aula). La secuenciación de contenidos y la situación educativa son insumos previos, no la orientación descrita.",
    fuente: "Programa Analítico · Orientaciones",
  },
  {
    id: 4,
    tipo: "Caso",
    enunciado: "Identifique la estrategia aplicada en el Consejo Técnico Escolar que permite el desarrollo del primer plano: Lectura de la realidad, del programa analítico.",
    opciones: [
      "Reflexionar en colegiado sobre las condiciones de los diversos ámbitos presentes en su práctica y desarrollar un proceso de articulación con el plan de estudios y sus componentes, para tener una mirada actualizada y cercana a su práctica educativa.",
      "Analizar las situaciones que vive el alumnado y el problema que le impide presentarse regularmente a clases, pues la comunidad donde se encuentra la escuela está en una zona lejana y este aspecto afecta el cumplimiento total de asistencias de las alumnas y los alumnos.",
      "Seleccionar del programa sintético los contenidos pertinentes y diseñar la planeación didáctica con las actividades que se desarrollarán en el aula durante el periodo escolar.",
    ],
    correcta: 0,
    explicacion: "La Lectura de la realidad es el primer plano del programa analítico: el colectivo reflexiona en colegiado sobre las condiciones de los distintos ámbitos de su práctica y las articula con el plan de estudios para tener una mirada situada (a). La opción b se queda en un caso aislado de un solo factor, y la c corresponde a la planeación/codiseño, un plano posterior.",
    fuente: "Programa Analítico · Lectura de la realidad",
  },
  {
    id: 5,
    tipo: "Caso",
    enunciado: "Identifique la disposición establecida en la Ley General de los Derechos de Niñas, Niños y Adolescentes que considera las acciones y medidas que realizan las autoridades para garantizar la protección de los derechos de niñas, niños y adolescentes.",
    opciones: [
      "Atender sus intereses culturales, étnicos y afectivos, escuchar sus opiniones y respetar sus ritmos y estilos de aprendizaje.",
      "Generar ambientes propicios para la creación de redes académicas y fomentar el intercambio de saberes y experiencias.",
      "Aplicar estrategias educativas que atiendan la convivencia democrática y generar ambientes basados en una cultura de paz.",
    ],
    correcta: 0,
    explicacion: "Garantizar la protección de los derechos de NNA implica atender el interés superior de la niñez: considerar sus intereses culturales, étnicos y afectivos, escuchar su opinión y respetar sus ritmos y estilos (a). Las redes académicas (b) y la convivencia democrática y la cultura de paz (c) son acciones pedagógicas valiosas, pero no describen la disposición de protección de derechos.",
    fuente: "Interés superior de la niñez · LGDNNA",
  },
  {
    id: 6,
    tipo: "Caso",
    enunciado: "Identifique uno de los fines de la educación que están establecidos en la Ley General de Educación.",
    opciones: [
      "Contribuir a la formación del pensamiento crítico, a la transformación y al crecimiento solidario de la sociedad, enfatizando el trabajo en equipo y el aprendizaje colaborativo.",
      "Tomar en cuenta capacidades, circunstancias, necesidades, estilos y ritmos de aprendizaje, para eliminar las distintas barreras para el aprendizaje y la participación, adoptando medidas en favor de la accesibilidad.",
      "Promover el respeto a la dignidad humana a partir de una formación humanista que contribuya a la mejor convivencia social, al aprecio por la diversidad y a la corresponsabilidad con el interés general.",
    ],
    correcta: 2,
    explicacion: "El respeto a la dignidad humana mediante una formación humanista (c) es un fin de la educación (Art. 15 LGE). La opción a es un propósito del desarrollo humano integral (Art. 12) y la b describe el criterio de educación inclusiva (Art. 16); ambas se confunden con fines, pero no lo son.",
    fuente: "Fines de la educación · Art. 15 LGE",
  },
  {
    id: 7,
    tipo: "Caso",
    enunciado: "¿Cuál es uno de los fines de la educación básica establecidos en la Ley General de Educación?",
    opciones: [
      "Impulsar el desarrollo de la investigación científica y humanística, el desarrollo tecnológico, el arte, la cultura, el deporte y la educación física en los distintos ámbitos internacional, nacional, regional, estatal, municipal y comunitario.",
      "Promover programas de especialización, maestría y doctorado que contribuyan a la orientación integral, adecuados a las necesidades y contextos regionales y locales y a los recursos disponibles.",
      "Comprender, apreciar, conocer y enseñar la pluralidad étnica, cultural y lingüística de la nación, el diálogo e intercambio intercultural, y valorar las tradiciones de las regiones del país desde el respeto mutuo y la equidad.",
    ],
    correcta: 2,
    explicacion: "El conocimiento y aprecio de la pluralidad étnica, cultural y lingüística y el intercambio intercultural (c) es un fin propio de la educación básica (Art. 15 LGE). Las opciones a y b se refieren a la investigación y a los posgrados, ámbitos de la educación superior, no de la básica.",
    fuente: "Fines de la educación · Art. 15 LGE",
  },
  {
    id: 8,
    tipo: "Caso",
    enunciado: "El criterio de la educación que hace referencia a la educación inclusiva se ve reflejado cuando, durante una sesión del Consejo Técnico Escolar, una maestra de secundaria...",
    opciones: [
      "organiza un taller con las familias para sensibilizarlas sobre su importancia en el proceso de aprendizaje de sus hijas e hijos, abordando también el respeto y la tolerancia.",
      "propone llevar a cabo una exposición acerca de las tradiciones y creencias de las comunidades indígenas para demostrar que México es un país en el que se reconocen y aceptan las diferencias.",
      "comparte con sus compañeras y compañeros un tríptico que explica la importancia de realizar e implementar una planeación que se adecue a las necesidades de las alumnas y los alumnos.",
    ],
    correcta: 2,
    explicacion: "La educación inclusiva (Art. 16 LGE) busca eliminar las barreras para el aprendizaje y la participación adecuando la enseñanza a las necesidades de cada alumno; una planeación que se adecúe a esas necesidades (c) la materializa. El trabajo con familias (a) es corresponsabilidad y la exposición intercultural (b) corresponde al criterio intercultural, no a la inclusión.",
    fuente: "Criterio de inclusión · Art. 16 LGE",
  },
  {
    id: 9,
    tipo: "Caso",
    enunciado: "En una escuela primaria, un alumno presenta labio y paladar hendido, condición que le ocasiona dificultades para pronunciar con claridad. Cuando la maestra organiza al grupo en equipos para una exposición oral, varios de sus compañeros manifiestan su inconformidad y solicitan que el niño sea cambiado de equipo o que se le asigne una tarea distinta, pues consideran que su forma de hablar podría perjudicar la calificación de todos. De acuerdo con la Ley General de los Derechos de Niñas, Niños y Adolescentes, la situación descrita vulnera el derecho a...",
    opciones: [
      "la inclusión.",
      "la igualdad sustantiva.",
      "no ser discriminado.",
    ],
    correcta: 2,
    explicacion: "Rechazar al alumno por una condición física (labio y paladar hendido) que afecta su forma de hablar es una conducta discriminatoria: vulnera su derecho a no ser discriminado (LGDNNA). La inclusión y la igualdad sustantiva son principios relacionados, pero el derecho específicamente vulnerado por el trato de exclusión es el de no discriminación.",
    fuente: "Derecho a la no discriminación · LGDNNA",
  },
  {
    id: 10,
    tipo: "Caso",
    enunciado: "El colectivo docente decide reducir un día a la semana el tiempo del recreo, con el propósito de que las alumnas y los alumnos, reunidos por afinidad, repasen contenidos para prepararse para la evaluación estatal. Sin embargo, algunas alumnas y algunos alumnos expresan que no están de acuerdo con la situación. Identifique el derecho de niñas, niños y adolescentes que se vulnera en la situación anterior.",
    opciones: [
      "Al descanso y al esparcimiento.",
      "De asociación y reunión.",
      "A la libertad de expresión.",
    ],
    correcta: 0,
    explicacion: "Reducir el tiempo del recreo para repasar contenidos afecta el derecho de NNA al descanso y al esparcimiento (LGDNNA y Convención sobre los Derechos del Niño), pues el recreo es el espacio que lo materializa. La asociación y la libertad de expresión no son los derechos centralmente vulnerados por la reducción del recreo.",
    fuente: "Derecho al descanso y esparcimiento · LGDNNA",
  },
];
