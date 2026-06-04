// ============================================================
// EXAMEN - FUNCIONES Y PROPOSITOS DEL CTE (Consejo Tecnico Escolar)
// Acuerdo del CTE: Articulo 7 (Propositos I-VIII) + Articulo 8 (Funciones I-VII)
// 20 reactivos | clave 7878 | timer 90s por pregunta | resultado al final
// SNTE Seccion 21 - Promocion Horizontal USICAMM
// correcta: indice 0 = opcion a, 1 = opcion b, 2 = opcion c
// Trampa central: PROPOSITO (el para que, Art. 7) vs FUNCION (lo que hace, Art. 8)
// ============================================================

export const CLAVE_EXAMEN = "7878";
export const TIEMPO_POR_PREGUNTA = 90; // segundos por reactivo

export const REACTIVOS = [
  {
    id: 1,
    tipo: "Concepto",
    enunciado: `Conforme al Acuerdo, ¿cuál es la diferencia entre un propósito (Art. 7) y una función (Art. 8) del CTE?`,
    opciones: [
      `Los propósitos son las acciones operativas de cada sesión y las funciones son las metas anuales del plantel.`,
      `Los propósitos son los fines que orientan el trabajo del CTE en el marco de la autonomía profesional; las funciones son las acciones y tareas que el CTE realiza para lograrlos.`,
      `Propósitos y funciones son equivalentes; ambos describen las atribuciones exclusivas del director escolar.`,
    ],
    correcta: 1,
    explicacion: `Los propósitos (Art. 7) son los FINES (el para qué) del CTE en el marco de la autonomía profesional; las funciones (Art. 8) son lo que el CTE HACE para alcanzarlos. El distractor que habla de "acciones operativas" y "metas anuales" invierte los términos; el que los llama equivalentes los reduce a atribuciones del director.`,
    fuente: `Art. 7 y Art. 8`,
  },
  {
    id: 2,
    tipo: "Completar",
    enunciado: `Un propósito del CTE es construir un proyecto educativo en cada Escuela cimentado en la ________, con el fin de que el Colectivo docente realice sus tareas pensando en las condiciones de ________ y los contextos diferenciados, para hacer efectivo el derecho humano a la educación.`,
    opciones: [
      `diversidad / desigualdad`,
      `equidad / vulnerabilidad`,
      `inclusión / marginación`,
    ],
    correcta: 0,
    explicacion: `Texto literal del Art. 7, fr. I: proyecto educativo "cimentado en la diversidad" pensando en las "condiciones de desigualdad" y los contextos diferenciados. "Equidad/vulnerabilidad" e "inclusión/marginación" son conceptos cercanos, pero no la cita.`,
    fuente: `Art. 7 fr. I`,
  },
  {
    id: 3,
    tipo: "Caso",
    enunciado: `El colectivo se asegura de que todas las acciones educativas pongan al centro el bienestar de sus estudiantes, buscando que cada uno se forme como persona capaz de participar activamente en la vida colectiva de su entorno. ¿Qué PROPÓSITO del CTE sustenta esta orientación?`,
    opciones: [
      `Hacer efectivo el derecho humano a la educación de las y los estudiantes de Educación Básica.`,
      `Contribuir al desarrollo del pensamiento crítico y al fortalecimiento de los lazos de la Escuela con la comunidad.`,
      `Priorizar el interés superior de las niñas, niños, adolescentes y jóvenes en todos los procesos educativos, para que se formen como ciudadanas y ciudadanos partícipes en la construcción de una sociedad democrática con justicia social.`,
    ],
    correcta: 2,
    explicacion: `Propósito II (Art. 7): interés superior de NNAJ + formación ciudadana + sociedad democrática con justicia social. El distractor del derecho humano a la educación es parte del propósito I; el del pensamiento crítico y los lazos con la comunidad es parte del propósito VI.`,
    fuente: `Art. 7 fr. II`,
  },
  {
    id: 4,
    tipo: "Completar",
    enunciado: `Un propósito del CTE es deliberar sobre el currículo considerando aquello que es pertinente y necesario de acuerdo con las condiciones concretas de existencia en las que viven y trabajan, tomando como ________ principal sus ________ y experiencia pedagógica.`,
    opciones: [
      `insumo / saberes`,
      `referente / conocimientos`,
      `sustento / competencias`,
    ],
    correcta: 0,
    explicacion: `Texto literal del Art. 7, fr. IV: "tomando como insumo principal sus saberes y experiencia pedagógica". Deliberar el currículo se apoya en los saberes y la experiencia del magisterio, no en competencias o conocimientos genéricos.`,
    fuente: `Art. 7 fr. IV`,
  },
  {
    id: 5,
    tipo: "Caso",
    enunciado: `El Colectivo docente revisa lo que plantea el currículo nacional y lo ajusta para que responda a las circunstancias concretas del entorno donde viven sus estudiantes. ¿Qué PROPÓSITO del CTE corresponde?`,
    opciones: [
      `Deliberar sobre el currículo considerando lo pertinente y necesario, tomando como insumo principal sus saberes y experiencia pedagógica.`,
      `Analizar de forma permanente el logro de los aprendizajes y capacidades del alumnado.`,
      `Contextualizar los contenidos de los programas sintéticos para atender las necesidades formativas de las y los estudiantes de acuerdo con la realidad de cada Escuela.`,
    ],
    correcta: 2,
    explicacion: `Propósito V (Art. 7): CONTEXTUALIZAR los contenidos según la realidad social, territorial, cultural, ambiental, económica y educativa. El distractor de deliberar sobre el currículo es el propósito IV (decidir qué es pertinente); jala porque ambos hablan del currículo, pero contextualizar es ADAPTAR los contenidos a la realidad.`,
    fuente: `Art. 7 fr. V`,
  },
  {
    id: 6,
    tipo: "Caso",
    enunciado: `Una directora destina tiempo dentro del CTE para que el equipo docente participe en actividades de desarrollo profesional colaborativo que fortalezcan su capacidad de tomar decisiones sobre su propia práctica. ¿Cuál PROPÓSITO del CTE sustenta su decisión?`,
    opciones: [
      `Favorecer el trabajo pedagógico colegiado y fomentar espacios de intercambio y de reflexión entre los integrantes del Colectivo docente.`,
      `Propiciar espacios de formación entre las maestras y los maestros que les permitan ejercer plenamente su autonomía profesional.`,
      `Construir un proyecto educativo en cada Escuela cimentado en la diversidad.`,
    ],
    correcta: 1,
    explicacion: `Propósito III (Art. 7): espacios de FORMACIÓN para ejercer la autonomía profesional. El distractor del trabajo pedagógico colegiado es una FUNCIÓN (Art. 8, fr. II), no un propósito; jala por la palabra "espacios". La distinción: FORMARSE (propósito III) vs FAVORECER el trabajo colegiado (función II).`,
    fuente: `Art. 7 fr. III`,
  },
  {
    id: 7,
    tipo: "Caso",
    enunciado: `El colectivo diseña un plan para atender las dificultades más urgentes de la Escuela, lo ejecuta y revisa periódicamente sus avances, estrechando al mismo tiempo su vínculo con las familias y la localidad. ¿Qué PROPÓSITO del CTE corresponde?`,
    opciones: [
      `Planear, implementar y dar seguimiento a los procesos de mejora continua, priorizando la solución de problemas específicos de la Escuela y el fortalecimiento de los lazos de la Escuela con la comunidad.`,
      `Impulsar el Proceso de Mejora Continua como una práctica permanente en las Escuelas en estrecha vinculación con la comunidad.`,
      `Definir los objetivos, las metas y las acciones para la atención de las prioridades y los problemas educativos.`,
    ],
    correcta: 0,
    explicacion: `Propósito VI (Art. 7): PLANEAR, IMPLEMENTAR y DAR SEGUIMIENTO a la mejora continua. El distractor de impulsar la mejora como práctica permanente es la FUNCIÓN V (Art. 8) y el de definir objetivos y metas es la función III. Las tres hablan de mejora/problemas: aquí lo distintivo es PLANEAR-IMPLEMENTAR-DAR SEGUIMIENTO.`,
    fuente: `Art. 7 fr. VI`,
  },
  {
    id: 8,
    tipo: "Caso",
    enunciado: `Cada bimestre, el colectivo examina cómo van avanzando las y los estudiantes y señala los obstáculos que la Escuela aún no ha resuelto para garantizar que nadie quede fuera por motivos de género, origen étnico o condición. ¿Qué PROPÓSITO del CTE corresponde?`,
    opciones: [
      `Tomar decisiones de carácter pedagógico que contribuyan a una educación de excelencia priorizando el máximo logro de los aprendizajes.`,
      `Analizar de forma permanente el logro de los aprendizajes y capacidades del alumnado e identificar los retos que debe superar la Escuela para brindar oportunidades de aprendizaje con inclusión, equidad, igualdad de género e interculturalidad.`,
      `Abordar cualquier tema o proceso educativo que se considere necesario en función de la mejora continua.`,
    ],
    correcta: 1,
    explicacion: `Propósito VII (Art. 7): ANALIZAR el logro + IDENTIFICAR los retos con inclusión, equidad, igualdad de género e interculturalidad. El distractor de tomar decisiones de carácter pedagógico es la FUNCIÓN VI; jala por "logro/excelencia", pero ANALIZAR el logro (propósito VII) no es lo mismo que DECIDIR pedagógicamente (función VI).`,
    fuente: `Art. 7 fr. VII`,
  },
  {
    id: 9,
    tipo: "Caso",
    enunciado: `En una sesión ordinaria, el CTE acuerda dedicar tiempo a un asunto no previsto en la agenda porque lo considera urgente para el avance de sus estudiantes y el fortalecimiento de la Escuela. ¿Qué PROPÓSITO del CTE lo respalda?`,
    opciones: [
      `Decidir las formas de organización de las sesiones de CTE que mejor atiendan a las características del Colectivo docente.`,
      `Tomar decisiones de carácter pedagógico que contribuyan a una educación de excelencia.`,
      `Abordar cualquier tema o proceso educativo que se considere necesario, siempre y cuando esté en función de la mejora continua de las Escuelas, contribuyendo al máximo logro de aprendizaje de los educandos.`,
    ],
    correcta: 2,
    explicacion: `Propósito VIII (Art. 7): abordar CUALQUIER tema necesario en función de la mejora continua. El distractor de organización de las sesiones es la FUNCIÓN I; jala por "decidir". El de decisiones pedagógicas es la función VI.`,
    fuente: `Art. 7 fr. VIII`,
  },
  {
    id: 10,
    tipo: "Caso",
    enunciado: `Una Escuela diseña su propuesta formativa reconociendo que su alumnado vive en condiciones dispares, con la finalidad de que cada estudiante pueda ejercer plenamente su acceso a una educación de calidad. ¿Qué PROPÓSITO del CTE corresponde?`,
    opciones: [
      `Contextualizar los contenidos de los programas sintéticos de acuerdo con la realidad de cada Escuela.`,
      `Priorizar el interés superior de las niñas, niños, adolescentes y jóvenes en todos los procesos educativos.`,
      `Construir un proyecto educativo en cada Escuela cimentado en la diversidad, para hacer efectivo el derecho humano a la educación de las y los estudiantes de Educación Básica.`,
    ],
    correcta: 2,
    explicacion: `Propósito I (Art. 7): construir el PROYECTO EDUCATIVO cimentado en la diversidad para hacer efectivo el derecho a la educación. El distractor de contextualizar los contenidos es el propósito V; jala por "contextos/realidad", pero aquí se CONSTRUYE el proyecto educativo, no se adaptan contenidos.`,
    fuente: `Art. 7 fr. I`,
  },
  {
    id: 11,
    tipo: "Concepto",
    enunciado: `"Decidir las formas de organización de las sesiones de CTE que mejor atiendan a las características del Colectivo docente, el logro de los propósitos y el cumplimiento de sus funciones." Este enunciado corresponde a:`,
    opciones: [
      `Una función del CTE.`,
      `Un propósito del CTE relacionado con la formación entre pares.`,
      `Una atribución exclusiva del Consejo Técnico de Zona.`,
    ],
    correcta: 0,
    explicacion: `Es la FUNCIÓN I del CTE (Art. 8): decidir cómo se organizan las sesiones. No es un propósito (los propósitos son los fines del Art. 7) ni una atribución del Consejo Técnico de Zona.`,
    fuente: `Art. 8 fr. I`,
  },
  {
    id: 12,
    tipo: "Concepto",
    enunciado: `"Favorecer el trabajo pedagógico colegiado, así como fomentar espacios de intercambio y de reflexión entre los diferentes integrantes del Colectivo docente." Este enunciado corresponde a:`,
    opciones: [
      `Un propósito del CTE: propiciar espacios de formación para ejercer la autonomía profesional.`,
      `Una función del CTE.`,
      `Una meta del Programa Escolar de Mejora Continua.`,
    ],
    correcta: 1,
    explicacion: `Es la FUNCIÓN II del CTE (Art. 8): favorecer el trabajo colegiado y los espacios de intercambio y reflexión. Se confunde con el propósito III (espacios de formación), pero ese habla de FORMARSE para la autonomía, mientras que la función habla de FAVORECER el trabajo colegiado.`,
    fuente: `Art. 8 fr. II`,
  },
  {
    id: 13,
    tipo: "Caso",
    enunciado: `Después de reconocer sus principales desafíos, el Colectivo docente y la Comunidad escolar acuerdan qué quieren lograr, cómo lo medirán y qué pasos darán para resolverlos. ¿Qué FUNCIÓN del CTE corresponde?`,
    opciones: [
      `Planear, implementar y dar seguimiento a los procesos de mejora continua, priorizando la solución de problemas específicos de la Escuela.`,
      `Definir los objetivos, las metas y las acciones para la atención de las prioridades y los problemas educativos identificados por el Colectivo docente y la Comunidad escolar.`,
      `Impulsar el Proceso de Mejora Continua como una práctica permanente en las Escuelas.`,
    ],
    correcta: 1,
    explicacion: `Función III (Art. 8): DEFINIR objetivos, metas y acciones para las prioridades y problemas. El distractor de planear, implementar y dar seguimiento es el PROPÓSITO VI (Art. 7), no una función; jala por "problemas". El de impulsar la mejora es la función V.`,
    fuente: `Art. 8 fr. III`,
  },
  {
    id: 14,
    tipo: "Concepto",
    enunciado: `"Elegir a los integrantes del Comité de Planeación y Evaluación." Este enunciado del Acuerdo corresponde a:`,
    opciones: [
      `Una función del CTE.`,
      `Un propósito del CTE vinculado con la mejora continua.`,
      `Una facultad de la autoridad educativa de la entidad.`,
    ],
    correcta: 0,
    explicacion: `Es la FUNCIÓN IV del CTE (Art. 8): elegir a los integrantes del Comité de Planeación y Evaluación. No es un propósito (Art. 7) ni una facultad de la autoridad educativa.`,
    fuente: `Art. 8 fr. IV`,
  },
  {
    id: 15,
    tipo: "Caso",
    enunciado: `El CTE busca que el proceso de mejorar la Escuela no sea algo que ocurra solo en ciertas fechas, sino que forme parte de la cultura cotidiana del plantel, involucrando también a las familias y vecinos. ¿Qué FUNCIÓN del CTE corresponde?`,
    opciones: [
      `Planear, implementar y dar seguimiento a los procesos de mejora continua.`,
      `Abordar cualquier tema que esté en función de la mejora continua de las Escuelas.`,
      `Impulsar el Proceso de Mejora Continua como una práctica permanente en las Escuelas en estrecha vinculación con la comunidad.`,
    ],
    correcta: 2,
    explicacion: `Función V (Art. 8): IMPULSAR la mejora continua como una práctica permanente. El distractor de planear, implementar y dar seguimiento es el PROPÓSITO VI (Art. 7) y el de abordar cualquier tema es el propósito VIII. Distinción clave: PLANEAR (propósito VI) vs IMPULSAR como práctica permanente (función V).`,
    fuente: `Art. 8 fr. V`,
  },
  {
    id: 16,
    tipo: "Caso",
    enunciado: `En sesión, el Colectivo docente llega a acuerdos sobre la enseñanza y el aprendizaje para elevar la calidad del servicio educativo y obtener los mejores resultados posibles con su alumnado. ¿Qué FUNCIÓN del CTE corresponde?`,
    opciones: [
      `Tomar decisiones de carácter pedagógico que contribuyan a una educación de excelencia priorizando el máximo logro de los aprendizajes de niñas, niños y adolescentes.`,
      `Tomar acuerdos para realizar y concretar el Diagnóstico socioeducativo de la escuela.`,
      `Deliberar sobre el currículo considerando aquello que es pertinente y necesario.`,
    ],
    correcta: 0,
    explicacion: `Función VI (Art. 8): tomar DECISIONES DE CARÁCTER PEDAGÓGICO para una educación de excelencia / máximo logro. El distractor del Diagnóstico socioeducativo es la función VII y el de deliberar el currículo es el propósito IV (Art. 7).`,
    fuente: `Art. 8 fr. VI`,
  },
  {
    id: 17,
    tipo: "Completar",
    enunciado: `Es función del CTE tomar acuerdos para realizar y concretar el ________ de la escuela, considerando la realidad social, territorial, cultural y educativa de las y los estudiantes.`,
    opciones: [
      `Programa Analítico`,
      `Diagnóstico socioeducativo`,
      `Programa Escolar de Mejora Continua`,
    ],
    correcta: 1,
    explicacion: `Texto literal del Art. 8, fr. VII: el "Diagnóstico socioeducativo" considera la realidad social, territorial, cultural y educativa. El Programa Analítico y el Programa Escolar de Mejora Continua son documentos distintos.`,
    fuente: `Art. 8 fr. VII`,
  },
  {
    id: 18,
    tipo: "Relacionar",
    enunciado: `Relacione cada función del CTE (Art. 8) con su descripción.`,
    columnaA: [
      `1. Función IV`,
      `2. Función VII`,
      `3. Función II`,
    ],
    columnaB: [
      `a) Favorecer el trabajo pedagógico colegiado y fomentar espacios de intercambio y de reflexión.`,
      `b) Elegir a los integrantes del Comité de Planeación y Evaluación.`,
      `c) Tomar acuerdos para realizar y concretar el Diagnóstico socioeducativo de la escuela.`,
    ],
    opciones: [
      `1a, 2b, 3c`,
      `1c, 2a, 3b`,
      `1b, 2c, 3a`,
    ],
    correcta: 2,
    explicacion: `Función IV = elegir al Comité de Planeación y Evaluación (1→b); Función VII = Diagnóstico socioeducativo (2→c); Función II = trabajo pedagógico colegiado (3→a). La combinación correcta es 1b, 2c, 3a.`,
    fuente: `Art. 8`,
  },
  {
    id: 19,
    tipo: "Caso",
    enunciado: `Un supervisor afirma: "Da igual hablar del propósito de planear y dar seguimiento a la mejora continua que de la función de impulsarla como práctica permanente; es lo mismo." ¿Cuál es la precisión correcta?`,
    opciones: [
      `No: planear, implementar y dar seguimiento a la mejora continua es un PROPÓSITO (Art. 7, fr. VI), mientras que impulsar la mejora continua como práctica permanente es una FUNCIÓN (Art. 8, fr. V).`,
      `Sí son lo mismo, porque ambos enunciados están en el Artículo 7.`,
      `No, pero ambos son funciones del Artículo 8; solo cambia la redacción.`,
    ],
    correcta: 0,
    explicacion: `Son fracciones distintas en artículos distintos: planear/implementar/dar seguimiento = PROPÓSITO VI (Art. 7); impulsar la mejora como práctica permanente = FUNCIÓN V (Art. 8). Las otras dos opciones ubican mal los artículos (confunden el Art. 7 con el Art. 8).`,
    fuente: `Art. 7 fr. VI y Art. 8 fr. V`,
  },
  {
    id: 20,
    tipo: "Concepto",
    enunciado: `Respecto de la mejora continua, ¿cuál de los siguientes enunciados es una FUNCIÓN del CTE (Art. 8) y no un propósito (Art. 7)?`,
    opciones: [
      `Planear, implementar y dar seguimiento a los procesos de mejora continua.`,
      `Impulsar el Proceso de Mejora Continua como una práctica permanente en estrecha vinculación con la comunidad.`,
      `Abordar cualquier tema o proceso educativo que esté en función de la mejora continua de las Escuelas.`,
    ],
    correcta: 1,
    explicacion: `Impulsar la mejora continua como práctica permanente es la FUNCIÓN V (Art. 8). El distractor de planear, implementar y dar seguimiento es el propósito VI y el de abordar cualquier tema es el propósito VIII (ambos del Art. 7). Recuerda: PLANEAR/SEGUIR y ABORDAR cualquier tema son PROPÓSITOS; IMPULSAR como práctica permanente es FUNCIÓN.`,
    fuente: `Art. 8 fr. V`,
  },
];

export default REACTIVOS;
