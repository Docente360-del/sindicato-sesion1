// src/data/examen-fines-criterios.js
// Examen Fines y Criterios LGE - 10 reactivos extraidos del PDF oficial del profe Juan Carlos
// Tipos: opcion (9) + relacionar (1)

export const PREGUNTAS_FC = [
  {
    "id": 1,
    "tipo": "opcion",
    "enunciado": "¿Cuál de las siguientes enunciaciones refleja el carácter inclusivo del derecho a la educación?",
    "opciones": [
      "El Estado velará porque la educación responda al interés social y porque los servicios educativos particulares se ajusten a la normativa que rige al Sistema Educativo Nacional.",
      "Ninguna escuela podrá negar la inscripción ni la aplicación de evaluaciones a los estudiantes que no realicen aportaciones económicas voluntarias.",
      "Se adecuarán los procesos de enseñanza para atender las capacidades, circunstancias, necesidades, estilos y ritmos de aprendizaje de cada educando; se eliminarán las barreras a la participación y se dispondrá de los apoyos y de la educación especial necesarios en todos los niveles y modalidades."
    ],
    "correcta": 2,
    "explicacion": "INCLUSIVA (Art. 16 fracc. VII LGE). Tomará en cuenta las diversas capacidades, circunstancias, necesidades, estilos y ritmos de aprendizaje + eliminar barreras al aprendizaje y a la participación + accesibilidad + ajustes razonables. Opción A es Pública (Art. 7 fracc. III), Opción B es Gratuita (Art. 7 fracc. IV)."
  },
  {
    "id": 2,
    "tipo": "opcion",
    "enunciado": "Realizar una feria que indague las creencias, culturas y formas de vida de algunos pueblos originarios, haciendo énfasis en las aportaciones culturales, artísticas y lingüísticas. Identifique el criterio de la educación que hace referencia a la situación anterior:",
    "opciones": [
      "Nacional",
      "Respeto al interés general de la sociedad",
      "Inclusiva"
    ],
    "correcta": 0,
    "explicacion": "NACIONAL (Art. 16 fracc. II LGE): 'sin hostilidades ni exclusivismos, la educación atenderá... a la continuidad y acrecentamiento de NUESTRA CULTURA'. Una feria sobre culturas de pueblos originarios mexicanos refleja el acrecentamiento de la cultura nacional. La opción B es un criterio del Art. 16 fracc. IV, pero se enfoca en interés general vs particular, no en culturas."
  },
  {
    "id": 3,
    "tipo": "opcion",
    "enunciado": "En la elaboración del programa escolar, el colectivo docente elige iniciativas para fomentar los fines educativos de la Ley General de Educación. ¿Cuál acción ejemplifica de forma directa la formación en la cultura de la paz?",
    "opciones": [
      "Cada mañana, las y los estudiantes participan en un 'Círculo de Buenas Noticias' donde comparten logros personales, expresan gratitud y entonan un canto comunitario que refuerza el clima de alegría y cohesión grupal.",
      "Se implementa un programa de mediación escolar: alumnas y alumnos capacitados como pares mediadores facilitan diálogos estructurados cuando surgen desacuerdos, ayudan a las partes a reconocer responsabilidades y acuerdan soluciones justas sin recurrir a la violencia.",
      "Durante la Semana de la Armonía, el alumnado organiza juegos cooperativos y jornadas de arte colaborativo que promueven la convivencia, el compañerismo y la estabilidad emocional dentro de la comunidad escolar."
    ],
    "correcta": 1,
    "explicacion": "CULTURA DE LA PAZ (Fin V, Art. 15 fracc. V LGE): 'Formar a los educandos en la cultura de la paz, el respeto, la tolerancia, los valores democráticos que favorezcan el diálogo constructivo, la solidaridad y la búsqueda de acuerdos que permitan la SOLUCIÓN NO VIOLENTA DE CONFLICTOS'. La mediación escolar concreta exactamente esa solución no violenta de conflictos. Las otras opciones promueven convivencia genérica pero no atienden conflictos específicos."
  },
  {
    "id": 4,
    "tipo": "opcion",
    "enunciado": "En la revisión del proyecto escolar, el Consejo Técnico valora distintas actividades para asegurar que la educación se rija por el criterio humanista establecido en la Ley General de Educación. ¿Cuál actividad corresponde?",
    "opciones": [
      "El alumnado diseña y modera foros de diálogo llamados 'Rompamos estereotipos': en equipos mixtos analizan casos reales de discriminación por género, origen étnico y orientación religiosa, elaboran propuestas de acción solidaria y forman un pacto escolar para erradicar privilegios y asegurar un trato igualitario para toda la comunidad.",
      "Para fortalecer la cooperación académica, el plantel pone en marcha el programa 'Padrinos de Lectura': estudiantes con alto desempeño acompañan a quienes presentan rezago lector, diseñan actividades lúdicas y fijan metas de avance trimestral, reconociendo públicamente los logros alcanzados por ambas partes.",
      "Con la finalidad de promover la identidad nacional, la escuela organiza la 'Semana de la Patria', en la que se realizan concursos sobre historia de México, talleres de elaboración de símbolos patrios y presentaciones artísticas que exaltan valores cívicos y el amor a los emblemas nacionales."
    ],
    "correcta": 0,
    "explicacion": "HUMANISTA (Art. 16 fracc. III LGE): 'al fomentar el aprecio y respeto por la dignidad de las personas, sustentado en los ideales de fraternidad e igualdad de derechos, promoviendo el mejoramiento de la convivencia humana y EVITANDO CUALQUIER TIPO DE PRIVILEGIO DE RAZAS, RELIGIÓN, GRUPOS, SEXO O DE PERSONAS'. La opción A trabaja directamente con discriminación por género, origen étnico, religión y erradicar privilegios. La opción B es Excelencia, la C es Nacional."
  },
  {
    "id": 5,
    "tipo": "opcion",
    "enunciado": "En un plantel de educación media, el Consejo Escolar implementa la figura de la 'Asamblea General': cada bimestre, todos los grupos eligen delegadas y delegados que participan —junto con representantes del personal docente y directivo— en la deliberación del presupuesto anual, la planeación de eventos culturales y la actualización del reglamento interno. Las resoluciones aprobadas por mayoría simple se publican y son vinculantes para toda la comunidad. ¿A qué criterio de la educación hace referencia esta práctica?",
    "opciones": [
      "Participativo",
      "Democrático",
      "Integral"
    ],
    "correcta": 1,
    "explicacion": "DEMOCRÁTICO (Art. 16 fracc. I LGE): 'considerando a la democracia no solamente como una estructura jurídica y un régimen político, sino como un SISTEMA DE VIDA fundado en el constante mejoramiento económico, social y cultural del pueblo'. La asamblea con elecciones, deliberación colectiva y resoluciones vinculantes encarna la democracia como sistema de vida. OJO: 'Participativo' NO es un criterio de la LGE, es un distractor."
  },
  {
    "id": 6,
    "tipo": "opcion",
    "enunciado": "El Consejo Técnico analiza proyectos para alinear la práctica escolar con la Ley General de Educación. ¿Cuál de las siguientes iniciativas concreta el criterio ambiental?",
    "opciones": [
      "En la Semana de la Sostenibilidad, los grupos elaboran proyectos de huertos escolares y trueque de ropa; los mejores trabajos reciben un distintivo ecológico, y se publican infografías sobre estilos de vida saludables y solidarios dentro del plan de formación ciudadana.",
      "Cada primavera se organiza la Jornada Verde: reforestación en el ejido cercano, limpieza de riberas y elaboración de murales que promueven 'amor a la naturaleza', seguida de un concurso de fotografía sobre paisajes locales para fomentar el aprecio por el entorno.",
      "El plantel incorpora un Módulo Permanente de Ciencias Ambientales y Gestión del Riesgo: laboratorio meteorológico escolar, simulaciones de evacuación ante desastres, cálculo de la huella hídrica del centro, auditorías de consumo energético y un foro trimestral donde el alumnado propone políticas internas de reducción de emisiones y consumo sostenible, vinculadas a indicadores de resiliencia comunitaria."
    ],
    "correcta": 2,
    "explicacion": "CRITERIO AMBIENTAL (Art. 16 fracc. V LGE): 'Inculcará los conceptos y principios de las ciencias ambientales, el desarrollo sostenible, la PREVENCIÓN Y COMBATE A LOS EFECTOS DEL CAMBIO CLIMÁTICO, la reducción del riesgo de desastres, la biodiversidad, el CONSUMO SOSTENIBLE Y LA RESILIENCIA'. La opción C es la única que articula ciencias ambientales + gestión del riesgo + consumo sostenible + resiliencia (el conjunto literal del criterio). Las otras son acciones puntuales sin la dimensión de ciencias ambientales y resiliencia."
  },
  {
    "id": 7,
    "tipo": "opcion",
    "enunciado": "Identifica cuál de las siguientes descripciones hace referencia a uno de los fines de la educación:",
    "opciones": [
      "Garantizar que todas y todos los estudiantes consoliden de manera continua su desarrollo integral, a fin de desplegar plenamente sus capacidades y alcanzar el más alto nivel de aprendizaje posible.",
      "Concebir la escuela como núcleo comunitario donde se construyen saberes, se intercambian valores culturales y se practican formas de convivencia que fortalecen la vida en sociedad.",
      "Estimular el juicio reflexivo mediante actividades de análisis, debate y conciencia histórica, con un enfoque humanista que impulse la transformación social."
    ],
    "correcta": 0,
    "explicacion": "FIN I (Art. 15 fracc. I LGE): 'CONTRIBUIR AL DESARROLLO INTEGRAL Y PERMANENTE de los educandos, para que ejerzan de manera plena sus capacidades, a través de la mejora continua del Sistema Educativo Nacional'. La opción A es paráfrasis directa del Fin I. CUIDADO con las trampas: opción B es del Acuerdo Educativo Nacional (Art. 14 fracc. I), opción C es del Desarrollo Humano Integral (Art. 12 NEM), NO son fines del Art. 15."
  },
  {
    "id": 8,
    "tipo": "relacionar",
    "enunciado": "Relaciona los criterios de la educación con la descripción correspondiente:",
    "columnaA": [
      "1. Integral",
      "2. De excelencia",
      "3. Equitativa"
    ],
    "columnaB": [
      "a) Un alumno llega a otro país y no cuenta con los recursos necesarios para pagar las aportaciones. No obstante, el Directivo le brinda todas las facilidades para continuar con su orientación básica.",
      "b) En una escuela de educación básica, se busca que los alumnos desarrollen sus habilidades físicas, cognitivas y emocionales, con la intención de favorecer el trabajo en equipo y lograr la excelencia educativa.",
      "c) Una maestra de educación básica analiza con sus alumnos las causas de la migración e identifica a través de un debate, utiliza el pensamiento crítico para que los alumnos reflexionen sobre cómo es que muchos mexicanos apoyan indirecta y directamente la economía de varios países."
    ],
    "opciones": [
      "1c, 2b, 3a",
      "1b, 2c, 3a",
      "1a, 2b, 3c"
    ],
    "correcta": 1,
    "explicacion": "1b - INTEGRAL (Art. 16 fracc. IX): 'capacidades cognitivas, socioemocionales y físicas'. 2c - EXCELENCIA (Art. 16 fracc. X): 'desarrollo del pensamiento crítico + lazos escuela-comunidad'. 3a - EQUITATIVA (Art. 16 fracc. VI): 'acceso, tránsito, permanencia + apoyar a estudiantes en condiciones de vulnerabilidad'. Por eso: 1b, 2c, 3a."
  },
  {
    "id": 9,
    "tipo": "opcion",
    "enunciado": "En una zona serrana, la asistencia de las niñas disminuye en temporada de cosecha porque deben cuidar a hermanos menores y recorrer largas distancias sin transporte. ¿Qué acción del plantel refleja mejor la igualdad sustantiva para sostener su permanencia escolar?",
    "opciones": [
      "Se implementa un programa municipal de desayuno escolar gratuito para todo el alumnado sin priorizar a quienes más faltan; la escuela mantiene horarios habituales.",
      "La comunidad escolar organiza transporte comunitario matutino 3 días por semana, horario flexible de tareas, tutoría de recuperación exclusiva para las niñas con ausencias estacionales y seguimiento individual para acreditar el grado.",
      "Se permite que las familias excusen por escrito las faltas de las niñas durante la cosecha; al final del ciclo presentan un examen global sin apoyos intermedios."
    ],
    "correcta": 1,
    "explicacion": "IGUALDAD SUSTANTIVA (Art. 9 LGE reforma DOF 15-01-2026): 'políticas educativas con enfoque diferenciado, con perspectiva de género... para la prevención y atención de la deserción escolar de las mujeres, adolescentes, niñas y niños'. La opción B aplica medidas específicas para las niñas (acción afirmativa), no trato igual a todos (eso sería igualdad formal). La A es igualdad formal y la C es excusar la inasistencia sin garantizar aprendizaje."
  },
  {
    "id": 10,
    "tipo": "opcion",
    "enunciado": "En una primaria se instauró un programa de mediación escolar: alumnas y alumnos capacitados ayudan a sus pares a resolver desacuerdos mediante el diálogo; se promueve la tolerancia y la búsqueda de acuerdos sin violencia. Selecciona el fin de la educación que corresponde:",
    "opciones": [
      "Formar a los educandos en la cultura de la paz, el respeto, la tolerancia, los valores democráticos que favorezcan el diálogo constructivo, la solidaridad y la búsqueda de acuerdos que permitan la solución no violenta de conflictos y la convivencia en un marco de respeto a las diferencias.",
      "Promover la comprensión, el aprecio, el conocimiento y enseñanza de la pluralidad étnica, cultural y lingüística de la nación, el diálogo e intercambio intercultural sobre la base de equidad y respeto mutuo; así como la valoración de las tradiciones y particularidades culturales de las diversas regiones del país.",
      "Contribuir al desarrollo integral y permanente de los educandos, para que ejerzan de manera plena sus capacidades, a través de la mejora continua del Sistema Educativo Nacional."
    ],
    "correcta": 0,
    "explicacion": "FIN V (Art. 15 fracc. V LGE): 'Formar a los educandos en la CULTURA DE LA PAZ... diálogo constructivo... SOLUCIÓN NO VIOLENTA DE CONFLICTOS'. El programa de mediación con diálogo y acuerdos sin violencia encaja literalmente con este fin. Opción B es Fin VII (pluralidad étnica), opción C es Fin I (desarrollo integral). Las palabras clave del caso (tolerancia, diálogo, sin violencia) se alinean con el Fin V."
  }
];
