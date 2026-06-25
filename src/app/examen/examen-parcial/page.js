"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock, ChevronLeft, ChevronRight, CheckCircle2, XCircle,
  RotateCcw, Award, ArrowRightLeft, ListOrdered, Flag, BookOpen
} from "lucide-react";

const CLAVE = "8888";
const NARANJA = "#F47216";
const NARANJA_DARK = "#D85A0A";
const NARANJA_BG = "#FFF4EB";
const NARANJA_SOFT = "#FDD9B5";
const VERDE = "#16A34A";
const ROJO = "#DC2626";
const GRIS = "#94A3B8";
const LETRAS = ["a", "b", "c", "d"];

const REACTIVOS = [
  {
    "id": 1,
    "bloque": "A · Ejes articuladores",
    "tema": "Eje inclusión",
    "tipo": "opcion",
    "enunciado": "En un grupo hay estudiantes con distintos ritmos de aprendizaje, uno con discapacidad auditiva y otro recién llegado de otro país. La maestra ajusta materiales, tiempos y formas de participación para que todos puedan aprender juntos, sin que nadie quede fuera. ¿Qué eje articulador del Plan 2022 orienta principalmente esta práctica?",
    "opciones": [
      "Inclusión.",
      "Igualdad de género.",
      "Vida saludable."
    ],
    "correcta": 0,
    "frase": "«ajusta materiales, tiempos y formas para que todos participen, sin que nadie quede fuera».",
    "porque": "Atender la diversidad para que todos aprendan juntos.",
    "descartes": [
      "Igualdad de género — no se cuestionan roles por sexo.",
      "Vida saludable — no habla de hábitos de salud."
    ]
  },
  {
    "id": 2,
    "bloque": "A · Ejes articuladores",
    "tema": "Eje pensamiento crítico",
    "tipo": "opcion",
    "enunciado": "Circula en redes una noticia alarmante sobre la escuela. La maestra pide al grupo verificar la fuente, contrastar con otros medios e identificar la intención de quien la difunde antes de opinar. ¿Qué eje articulador se favorece principalmente?",
    "opciones": [
      "Apropiación de las culturas a través de la lectura y la escritura.",
      "Pensamiento crítico.",
      "Interculturalidad crítica."
    ],
    "correcta": 1,
    "frase": "«verificar la fuente, contrastar y identificar la intención antes de opinar».",
    "porque": "Analizar y juzgar la información para formar un juicio propio.",
    "descartes": [
      "Apropiación de las culturas — no se trata de disfrutar la cultura escrita.",
      "Interculturalidad crítica — no se cuestiona la jerarquía entre saberes."
    ]
  },
  {
    "id": 3,
    "bloque": "A · Ejes articuladores",
    "tema": "Eje interculturalidad crítica",
    "tipo": "opcion",
    "enunciado": "En una comunidad indígena, la maestra integra la lengua y los saberes locales al mismo nivel que los contenidos escolares y promueve el diálogo entre ambos sin jerarquizarlos. ¿Qué eje articulador sustenta esta práctica?",
    "opciones": [
      "Inclusión.",
      "Artes y experiencias estéticas.",
      "Interculturalidad crítica."
    ],
    "correcta": 2,
    "frase": "«saberes locales al mismo nivel, sin jerarquizar».",
    "porque": "Diálogo de saberes sin jerarquía.",
    "descartes": [
      "Inclusión — es más amplia, no capta el «sin jerarquías».",
      "Artes y experiencias estéticas — no se trata de crear arte."
    ]
  },
  {
    "id": 4,
    "bloque": "A · Ejes articuladores",
    "tema": "Eje igualdad de género",
    "tipo": "opcion",
    "enunciado": "Al organizar los equipos de trabajo, la maestra evita asignar tareas por sexo y propone reflexionar sobre por qué ciertos juegos o labores se etiquetan como «de niños» o «de niñas». ¿Qué eje articulador se favorece principalmente?",
    "opciones": [
      "Vida saludable.",
      "Inclusión.",
      "Igualdad de género."
    ],
    "correcta": 2,
    "frase": "«evitar asignar tareas por sexo y cuestionar las etiquetas de niños/de niñas».",
    "porque": "Cuestiona los roles asignados por sexo.",
    "descartes": [
      "Vida saludable — no habla de hábitos de salud.",
      "Inclusión — es más amplia."
    ]
  },
  {
    "id": 5,
    "bloque": "A · Ejes articuladores",
    "tema": "Eje vida saludable",
    "tipo": "opcion",
    "enunciado": "En un proyecto, el grupo analiza el contenido de azúcar de las bebidas que consume, planea menús más sanos y promueve la actividad física en los recreos. ¿Qué eje articulador se favorece principalmente?",
    "opciones": [
      "Vida saludable.",
      "Pensamiento crítico.",
      "Apropiación de las culturas a través de la lectura y la escritura."
    ],
    "correcta": 0,
    "frase": "«alimentación sana y actividad física para el bienestar».",
    "porque": "Hábitos para el bienestar corporal.",
    "descartes": [
      "Pensamiento crítico — no se analiza ni juzga información.",
      "Apropiación de las culturas — no se trata de cultura escrita."
    ]
  },
  {
    "id": 6,
    "bloque": "A · Ejes articuladores",
    "tema": "Eje apropiación de la cultura escrita",
    "tipo": "opcion",
    "enunciado": "La maestra promueve que el grupo lea diversos textos, escriba sus propias historias y participe en un círculo de lectura para disfrutar y compartir lo leído como parte de su vida cotidiana. ¿Qué eje articulador se favorece principalmente?",
    "opciones": [
      "Artes y experiencias estéticas.",
      "Apropiación de las culturas a través de la lectura y la escritura.",
      "Inclusión."
    ],
    "correcta": 1,
    "frase": "«leer, escribir y disfrutar lo leído como práctica cotidiana».",
    "porque": "La cultura escrita como parte de la vida cotidiana.",
    "descartes": [
      "Artes y experiencias estéticas — no se trata de crear arte.",
      "Inclusión — es más amplia."
    ]
  },
  {
    "id": 7,
    "bloque": "A · Ejes articuladores",
    "tema": "Eje artes y experiencias estéticas",
    "tipo": "opcion",
    "enunciado": "En un proyecto, el alumnado explora la música, la danza y la pintura de su región, crea sus propias obras y reflexiona sobre lo que le hacen sentir. ¿Qué eje articulador se favorece principalmente?",
    "opciones": [
      "Interculturalidad crítica.",
      "Vida saludable.",
      "Artes y experiencias estéticas."
    ],
    "correcta": 2,
    "frase": "«explorar y crear arte, y reflexionar sobre lo que les hace sentir».",
    "porque": "Crear y apreciar manifestaciones artísticas.",
    "descartes": [
      "Interculturalidad crítica — no se cuestiona la jerarquía entre saberes.",
      "Vida saludable — no habla de hábitos de salud."
    ]
  },
  {
    "id": 8,
    "bloque": "A · Ejes articuladores",
    "tema": "Carácter de los ejes",
    "tipo": "opcion",
    "enunciado": "Una maestra sostiene que «la inclusión» solo se trabaja en el campo De lo Humano y lo Comunitario. ¿Qué afirmación es correcta sobre los ejes articuladores en el Plan 2022?",
    "opciones": [
      "Cada eje articulador se trabaja en un único campo formativo.",
      "Los ejes articuladores son transversales y atraviesan los cuatro campos formativos.",
      "Los ejes articuladores sustituyen a los campos formativos."
    ],
    "correcta": 1,
    "frase": "«¿los ejes se limitan a un campo o atraviesan todos?».",
    "porque": "Los ejes son transversales a los cuatro campos.",
    "descartes": [
      "Único campo — falso: no se limitan a un solo campo.",
      "Sustituyen a los campos — no los sustituyen."
    ]
  },
  {
    "id": 9,
    "bloque": "A · Ejes articuladores",
    "tema": "Distinguir dos ejes",
    "tipo": "completar",
    "enunciado": "Cuestionar por qué se considera «superior» un saber frente a otro corresponde al eje de ________; verificar la veracidad de una información antes de difundirla corresponde al eje de ________.",
    "opciones": [
      "pensamiento crítico / interculturalidad crítica",
      "inclusión / pensamiento crítico",
      "interculturalidad crítica / pensamiento crítico"
    ],
    "correcta": 2,
    "frase": "«verificar la veracidad de la información = pensamiento crítico (segundo espacio)».",
    "porque": "Jerarquía de saberes → intercultural; veracidad → crítico.",
    "descartes": [
      "pensamiento crítico / interculturalidad crítica — invierte el orden de los dos ejes.",
      "inclusión / pensamiento crítico — «inclusión» no aplica al primer espacio."
    ]
  },
  {
    "id": 10,
    "bloque": "A · Ejes articuladores",
    "tema": "Eje predominante (foco)",
    "tipo": "mejor",
    "enunciado": "En preescolar, la educadora propone preparar una receta tradicional saludable y, durante la actividad, cuestiona la idea de que cocinar es «cosa de niñas». Si la pregunta indaga por el eje que se favorece con ese CUESTIONAMIENTO, ¿cuál es?",
    "opciones": [
      "Vida saludable.",
      "Igualdad de género.",
      "Interculturalidad crítica."
    ],
    "correcta": 1,
    "frase": "«el CUESTIONAMIENTO de que cocinar es de niñas».",
    "porque": "Cuestiona los roles asignados por sexo.",
    "descartes": [
      "Vida saludable — sería por la receta, no por el cuestionamiento.",
      "Interculturalidad crítica — no hay jerarquía cultural en juego."
    ]
  },
  {
    "id": 11,
    "bloque": "B · Campos formativos",
    "tema": "Campo Lenguajes",
    "tipo": "opcion",
    "enunciado": "El alumnado escribe, revisa y publica un periódico mural para comunicar a la comunidad los resultados de una investigación. ¿A qué campo formativo corresponde principalmente?",
    "opciones": [
      "Saberes y Pensamiento Científico.",
      "Ética, Naturaleza y Sociedades.",
      "Lenguajes."
    ],
    "correcta": 2,
    "frase": "«escribir y publicar para comunicar».",
    "porque": "Producir y comunicar textos con un propósito.",
    "descartes": [
      "Saberes y Pensamiento Científico — no se explica un fenómeno con datos.",
      "Ética, Naturaleza y Sociedades — no es corresponsabilidad ética."
    ]
  },
  {
    "id": 12,
    "bloque": "B · Campos formativos",
    "tema": "Campo Saberes y Pensamiento Científico",
    "tipo": "opcion",
    "enunciado": "El grupo mide, registra y compara el crecimiento de plantas bajo distintas condiciones y formula explicaciones con base en los datos. ¿A qué campo formativo corresponde principalmente?",
    "opciones": [
      "Saberes y Pensamiento Científico.",
      "De lo Humano y lo Comunitario.",
      "Lenguajes."
    ],
    "correcta": 0,
    "frase": "«medir, registrar y explicar con base en datos».",
    "porque": "Explicar fenómenos a partir de datos.",
    "descartes": [
      "De lo Humano y lo Comunitario — no es lo corporal ni lo socioemocional.",
      "Lenguajes — no es solo comunicar un texto."
    ]
  },
  {
    "id": 13,
    "bloque": "B · Campos formativos",
    "tema": "Campo Ética, Naturaleza y Sociedades",
    "tipo": "opcion",
    "enunciado": "El alumnado investiga un problema ambiental de la localidad, reflexiona sobre la corresponsabilidad de las personas y acuerda compromisos para el cuidado del entorno. ¿A qué campo formativo corresponde principalmente?",
    "opciones": [
      "Lenguajes.",
      "Saberes y Pensamiento Científico.",
      "Ética, Naturaleza y Sociedades."
    ],
    "correcta": 2,
    "frase": "«corresponsabilidad de las personas y compromisos de cuidado del entorno».",
    "porque": "Reflexión ética sobre persona-ambiente-sociedad.",
    "descartes": [
      "Lenguajes — no es solo producir un texto.",
      "Saberes y Pensamiento Científico — el foco no es explicar con datos."
    ]
  },
  {
    "id": 14,
    "bloque": "B · Campos formativos",
    "tema": "Campo De lo Humano y lo Comunitario",
    "tipo": "opcion",
    "enunciado": "En preescolar, la educadora propone juegos de equilibrio, lanzamiento y coordinación, y conversa con el grupo sobre cómo cuidar su cuerpo y colaborar con los demás. ¿A qué campo formativo corresponde principalmente?",
    "opciones": [
      "De lo Humano y lo Comunitario.",
      "Ética, Naturaleza y Sociedades.",
      "Saberes y Pensamiento Científico."
    ],
    "correcta": 0,
    "frase": "«cuidar el cuerpo y colaborar con los demás».",
    "porque": "Lo corporal, lo socioemocional y la colaboración.",
    "descartes": [
      "Ética, Naturaleza y Sociedades — no es corresponsabilidad ambiental.",
      "Saberes y Pensamiento Científico — no se explica un fenómeno con datos."
    ]
  },
  {
    "id": 15,
    "bloque": "B · Campos formativos",
    "tema": "Campo Lenguajes (oralidad)",
    "tipo": "opcion",
    "enunciado": "Un grupo prepara y presenta una obra de teatro; cuida la expresión oral, los gestos y la entonación para transmitir una historia al público. ¿A qué campo formativo corresponde principalmente?",
    "opciones": [
      "Lenguajes.",
      "Artes (como campo formativo).",
      "De lo Humano y lo Comunitario."
    ],
    "correcta": 0,
    "frase": "«expresión oral para transmitir una historia al público».",
    "porque": "Comunicar con el lenguaje oral.",
    "descartes": [
      "Artes (como campo) — «Artes» no es un campo: es el eje «artes y experiencias estéticas».",
      "De lo Humano y lo Comunitario — no es lo corporal ni lo socioemocional."
    ]
  },
  {
    "id": 16,
    "bloque": "B · Campos formativos",
    "tema": "Campo Saberes y Pensamiento Científico",
    "tipo": "opcion",
    "enunciado": "El alumnado plantea preguntas sobre por qué flotan algunos objetos, formula hipótesis, experimenta y registra resultados para construir una explicación. ¿A qué campo formativo corresponde principalmente?",
    "opciones": [
      "Ética, Naturaleza y Sociedades.",
      "De lo Humano y lo Comunitario.",
      "Saberes y Pensamiento Científico."
    ],
    "correcta": 2,
    "frase": "«hipótesis, experimentación y explicación».",
    "porque": "Indagación científica para construir una explicación.",
    "descartes": [
      "Ética, Naturaleza y Sociedades — no hay reflexión ética central.",
      "De lo Humano y lo Comunitario — no es lo socioemocional."
    ]
  },
  {
    "id": 17,
    "bloque": "B · Campos formativos",
    "tema": "Campo De lo Humano y lo Comunitario",
    "tipo": "opcion",
    "enunciado": "En un proyecto, el grupo identifica las emociones que surgen en los conflictos del aula, practica formas de autorregularse y acuerda maneras de colaborar mejor. ¿A qué campo formativo corresponde principalmente?",
    "opciones": [
      "De lo Humano y lo Comunitario.",
      "Saberes y Pensamiento Científico.",
      "Lenguajes."
    ],
    "correcta": 0,
    "frase": "«reconocer emociones, autorregularse y colaborar».",
    "porque": "Lo socioemocional y lo comunitario.",
    "descartes": [
      "Saberes y Pensamiento Científico — no se explica un fenómeno con datos.",
      "Lenguajes — no es producir un texto."
    ]
  },
  {
    "id": 18,
    "bloque": "B · Campos formativos",
    "tema": "Campos y prácticas",
    "tipo": "relacionar",
    "enunciado": "Relacione cada campo formativo con una práctica representativa:",
    "columnaA": [
      "1. Lenguajes",
      "2. Saberes y Pensamiento Científico",
      "3. Ética, Naturaleza y Sociedades"
    ],
    "columnaB": [
      "I. Experimentar y explicar un fenómeno con datos.",
      "II. Acordar compromisos para el cuidado del entorno.",
      "III. Redactar y publicar un texto para la comunidad."
    ],
    "opciones": [
      "1-III, 2-I, 3-II",
      "1-I, 2-III, 3-II",
      "1-III, 2-II, 3-I"
    ],
    "correcta": 0,
    "frase": "«par seguro: Saberes = experimentar y explicar con datos (2-I)».",
    "porque": "Empareja todo correctamente: Lenguajes-publicar texto, Saberes-datos, Ética-cuidado del entorno.",
    "descartes": [
      "1-I, 2-III, 3-II — manda Lenguajes al par científico.",
      "1-III, 2-II, 3-I — invierte Lenguajes y Ética."
    ]
  },
  {
    "id": 19,
    "bloque": "C · Criterios (LGE Art. 16)",
    "tema": "Criterio inclusiva",
    "tipo": "opcion",
    "enunciado": "La Ley General de Educación señala que la educación, al tomar en cuenta las diversas capacidades, circunstancias y ritmos de aprendizaje, y al eliminar las barreras para el aprendizaje y la participación mediante accesibilidad y ajustes razonables, cumple uno de sus criterios. ¿Cuál es?",
    "opciones": [
      "Será nacional.",
      "Será inclusiva.",
      "Será democrática."
    ],
    "correcta": 1,
    "frase": "«eliminar las barreras para el aprendizaje y la participación con ajustes razonables».",
    "porque": "Atender la diversidad y quitar barreras.",
    "descartes": [
      "Será nacional — soberanía, recursos y cultura.",
      "Será democrática — la democracia como sistema de vida."
    ]
  },
  {
    "id": 20,
    "bloque": "C · Criterios (LGE Art. 16)",
    "tema": "Criterio equitativa",
    "tipo": "opcion",
    "enunciado": "Una política prioriza recursos y apoyos hacia las escuelas de zonas con mayor rezago para asegurar el acceso, permanencia y egreso de estudiantes en condiciones de vulnerabilidad. ¿Qué criterio de la educación (Art. 16 LGE) se atiende principalmente?",
    "opciones": [
      "Será humanista.",
      "Será nacional.",
      "Será equitativa."
    ],
    "correcta": 2,
    "frase": "«priorizar a quien más lo necesita; asegurar acceso, permanencia y egreso».",
    "porque": "Combatir las desigualdades y asegurar la permanencia.",
    "descartes": [
      "Será humanista — dignidad, fraternidad e igualdad.",
      "Será nacional — soberanía y cultura."
    ]
  },
  {
    "id": 21,
    "bloque": "C · Criterios (LGE Art. 16)",
    "tema": "Criterio democrática",
    "tipo": "opcion",
    "enunciado": "Una escuela entiende la democracia no solo como forma de gobierno, sino como un sistema de vida orientado al mejoramiento constante de la comunidad, y la vive en sus prácticas cotidianas. ¿Qué criterio de la educación se expresa?",
    "opciones": [
      "Será humanista.",
      "Será democrática.",
      "Será intercultural."
    ],
    "correcta": 1,
    "frase": "«la democracia como sistema de vida».",
    "porque": "Democracia como forma de vida y mejora constante.",
    "descartes": [
      "Será humanista — el respeto a la dignidad.",
      "Será intercultural — la convivencia entre culturas."
    ]
  },
  {
    "id": 22,
    "bloque": "C · Criterios (LGE Art. 16)",
    "tema": "Criterio humanista",
    "tipo": "opcion",
    "enunciado": "Un docente centra su práctica en el aprecio y respeto por la dignidad de cada persona, los ideales de fraternidad e igualdad y la mejora de la convivencia, evitando cualquier privilegio. ¿Qué criterio de la educación se expresa?",
    "opciones": [
      "Será humanista.",
      "Será nacional.",
      "Será integral."
    ],
    "correcta": 0,
    "frase": "«dignidad, fraternidad e igualdad, sin privilegios».",
    "porque": "Aprecio y respeto por la dignidad humana.",
    "descartes": [
      "Será nacional — soberanía y cultura.",
      "Será integral — el desarrollo completo de la persona."
    ]
  },
  {
    "id": 23,
    "bloque": "C · Criterios (LGE Art. 16)",
    "tema": "Criterio intercultural",
    "tipo": "opcion",
    "enunciado": "Una escuela promueve la convivencia armónica entre personas y comunidades, con respeto a sus tradiciones, costumbres y modos de vida, en un marco de inclusión social. ¿Qué criterio de la educación se expresa?",
    "opciones": [
      "Será democrática.",
      "Será intercultural.",
      "Será equitativa."
    ],
    "correcta": 1,
    "frase": "«convivencia armónica con respeto a tradiciones y modos de vida».",
    "porque": "Respeto entre personas y comunidades distintas.",
    "descartes": [
      "Será democrática — la democracia como sistema de vida.",
      "Será equitativa — combatir las desigualdades."
    ]
  },
  {
    "id": 24,
    "bloque": "C · Criterios (LGE Art. 16)",
    "tema": "Fines vs criterios",
    "tipo": "opcion",
    "enunciado": "Un maestro confunde los «fines» con los «criterios» de la educación. ¿Cuál afirmación es correcta conforme a la Ley General de Educación?",
    "opciones": [
      "Los fines (Art. 15) son los propósitos que persigue la educación; los criterios (Art. 16) son las características que la orientan (democrática, humanista, etc.).",
      "Los fines y los criterios son sinónimos y se enuncian en el mismo artículo.",
      "Los criterios (Art. 16) son los propósitos y los fines (Art. 15) son las características."
    ],
    "correcta": 0,
    "frase": "«fines = propósitos (Art. 15); criterios = características (Art. 16)».",
    "porque": "Distingue correctamente propósitos y características.",
    "descartes": [
      "Sinónimos y mismo artículo — falso: no son sinónimos ni del mismo artículo.",
      "Conceptos invertidos — tiene los conceptos al revés."
    ]
  },
  {
    "id": 25,
    "bloque": "D · Fines (LGE Art. 15)",
    "tema": "Fin: desarrollo integral",
    "tipo": "opcion",
    "enunciado": "Una escuela orienta toda su acción a que cada estudiante desarrolle de manera integral y permanente sus capacidades, a través de la mejora continua. ¿Qué fin de la educación (Art. 15 LGE) se expresa principalmente?",
    "opciones": [
      "Contribuir al desarrollo integral y permanente de los educandos.",
      "Promover el respeto al medio ambiente.",
      "Fomentar el amor a la patria."
    ],
    "correcta": 0,
    "frase": "«desarrollo integral y permanente de las capacidades».",
    "porque": "Es el primer fin (Art. 15, fracción I).",
    "descartes": [
      "Respeto al medio ambiente — ese es otro fin.",
      "Amor a la patria — ese es otro fin (identidad nacional)."
    ]
  },
  {
    "id": 26,
    "bloque": "D · Fines (LGE Art. 15)",
    "tema": "Fin: dignidad humana (humanista)",
    "tipo": "opcion",
    "enunciado": "Un proyecto escolar promueve el respeto irrestricto a la dignidad humana y una formación humanista que mejore la convivencia y el aprecio por la diversidad. ¿Qué fin de la educación se atiende principalmente?",
    "opciones": [
      "Inculcar el enfoque de derechos humanos.",
      "Fortalecer la identidad nacional.",
      "Promover el respeto a la dignidad humana desde una formación humanista."
    ],
    "correcta": 2,
    "frase": "«respeto a la dignidad humana y formación humanista».",
    "porque": "Dignidad humana y formación humanista (Art. 15, fr. II).",
    "descartes": [
      "Enfoque de derechos humanos — ese es otro fin (DDHH e igualdad sustantiva).",
      "Identidad nacional — ese es otro fin."
    ]
  },
  {
    "id": 27,
    "bloque": "D · Fines (LGE Art. 15)",
    "tema": "Fin: derechos humanos e igualdad sustantiva",
    "tipo": "opcion",
    "enunciado": "La escuela trabaja para que el alumnado conozca, respete y ejerza sus derechos con el mismo trato y oportunidades, incorporando el enfoque de derechos humanos e igualdad sustantiva. ¿Qué fin de la educación se atiende principalmente?",
    "opciones": [
      "Promover actividades físicas y deporte.",
      "Inculcar el enfoque de derechos humanos y de igualdad sustantiva.",
      "Promover el cuidado del medio ambiente."
    ],
    "correcta": 1,
    "frase": "«derechos humanos e igualdad sustantiva, con el mismo trato y oportunidades».",
    "porque": "Enfoque de DDHH e igualdad sustantiva (Art. 15, fr. III).",
    "descartes": [
      "Actividades físicas y deporte — ese es otro fin.",
      "Cuidado del medio ambiente — ese es otro fin."
    ]
  },
  {
    "id": 28,
    "bloque": "D · Fines (LGE Art. 15)",
    "tema": "Fines vs principios del Art. 3.º",
    "tipo": "opcion",
    "enunciado": "Una maestra explica que la educación del Estado será obligatoria, universal, inclusiva, pública, gratuita y laica. ¿Dónde se establecen ORIGINALMENTE estas características?",
    "opciones": [
      "En los fines de la educación (Art. 15 LGE).",
      "En el Artículo 3.º constitucional.",
      "En los criterios de la educación (Art. 16 LGE)."
    ],
    "correcta": 1,
    "frase": "«obligatoria, universal, inclusiva, pública, gratuita y laica».",
    "porque": "Se establecen en el Artículo 3.º constitucional.",
    "descartes": [
      "Fines (Art. 15 LGE) — esas no son los fines.",
      "Criterios (Art. 16 LGE) — esas no son los criterios."
    ]
  },
  {
    "id": 29,
    "bloque": "D · Fines (LGE Art. 15)",
    "tema": "Fin vs criterio",
    "tipo": "completar",
    "enunciado": "Lograr que el alumnado «ejerza de manera plena sus capacidades» mediante el desarrollo integral es un ________ de la educación; que la educación atienda la diversidad y elimine barreras es un ________ de la educación.",
    "opciones": [
      "criterio / fin",
      "fin / criterio",
      "fin / principio constitucional"
    ],
    "correcta": 1,
    "frase": "«desarrollo integral = fin; atender la diversidad/eliminar barreras = criterio».",
    "porque": "Desarrollo integral (fin) y criterio inclusiva.",
    "descartes": [
      "criterio / fin — invierte fin y criterio.",
      "fin / principio constitucional — lo segundo es un criterio, no un «principio constitucional»."
    ]
  },
  {
    "id": 30,
    "bloque": "D · Fines (LGE Art. 15)",
    "tema": "Propósito rector",
    "tipo": "mejor",
    "enunciado": "Ante una decisión escolar, el colectivo se pregunta cuál es, según la NEM y la LGE, el propósito que debe orientar toda su acción educativa. ¿Cuál es la respuesta MÁS integral?",
    "opciones": [
      "Cumplir con los trámites administrativos del plantel.",
      "Mantener el orden y la disciplina del grupo.",
      "Lograr el máximo desarrollo integral y los aprendizajes de los educandos."
    ],
    "correcta": 2,
    "frase": "«el propósito que orienta TODA la acción educativa».",
    "porque": "El máximo desarrollo y aprendizaje de NNA.",
    "descartes": [
      "Trámites administrativos — lo administrativo es un medio, no el fin.",
      "Orden y disciplina — la disciplina es un medio, no el fin."
    ]
  },
  {
    "id": 31,
    "bloque": "E · Programa Analítico, Sintético y PDA",
    "tema": "Sintético vs Analítico",
    "tipo": "completar",
    "enunciado": "El ________ es nacional y lo emite la SEP; el ________ lo construye el colectivo en el CTE para contextualizarlo a su comunidad.",
    "opciones": [
      "Programa Analítico / Programa Sintético",
      "Programa Sintético / Programa Analítico",
      "Programa Sintético / Programa Escolar de Mejora Continua"
    ],
    "correcta": 1,
    "frase": "«nacional, lo emite la SEP = Sintético».",
    "porque": "Sintético (nacional) / Analítico (lo hace el colectivo).",
    "descartes": [
      "Analítico / Sintético — invierte los documentos.",
      "Sintético / PEMC — el PEMC no es un documento curricular."
    ]
  },
  {
    "id": 32,
    "bloque": "E · Programa Analítico, Sintético y PDA",
    "tema": "Plano: lectura de la realidad",
    "tipo": "opcion",
    "enunciado": "El colectivo analiza el contexto escuela-comunidad y elabora un diagnóstico para decidir qué atender. ¿Qué plano del Programa Analítico realiza?",
    "opciones": [
      "Lectura de la realidad.",
      "Contextualización.",
      "Codiseño."
    ],
    "correcta": 0,
    "frase": "«analizar el contexto y elaborar el diagnóstico».",
    "porque": "Diagnóstico del contexto escuela-comunidad.",
    "descartes": [
      "Contextualización — eso es vincular el Sintético con lo local.",
      "Codiseño — eso es incorporar un contenido nuevo."
    ]
  },
  {
    "id": 33,
    "bloque": "E · Programa Analítico, Sintético y PDA",
    "tema": "Plano: codiseño",
    "tipo": "opcion",
    "enunciado": "El colectivo incorpora un contenido local que no aparece en el Programa Sintético y le asocia PDA propios. ¿Qué plano del Programa Analítico realiza?",
    "opciones": [
      "Lectura de la realidad.",
      "Contextualización.",
      "Codiseño."
    ],
    "correcta": 2,
    "frase": "«incorporar un contenido NO previsto y asociarle PDA propios».",
    "porque": "Agregar lo nuevo con PDA propios.",
    "descartes": [
      "Lectura de la realidad — eso es diagnosticar el contexto.",
      "Contextualización — eso es vincular lo que ya existe."
    ]
  },
  {
    "id": 34,
    "bloque": "E · Programa Analítico, Sintético y PDA",
    "tema": "Plano: contextualización",
    "tipo": "opcion",
    "enunciado": "El colectivo toma un contenido del Programa Sintético y lo vincula con una situación-problema de la localidad. ¿Qué plano del Programa Analítico realiza?",
    "opciones": [
      "Contextualización.",
      "Lectura de la realidad.",
      "Codiseño."
    ],
    "correcta": 0,
    "frase": "«vincular un contenido del Sintético con lo local».",
    "porque": "Vincular lo existente con una situación local.",
    "descartes": [
      "Lectura de la realidad — eso es diagnosticar el contexto.",
      "Codiseño — eso es agregar un contenido nuevo."
    ]
  },
  {
    "id": 35,
    "bloque": "E · Programa Analítico, Sintético y PDA",
    "tema": "PDA",
    "tipo": "opcion",
    "enunciado": "En el Plan 2022, los elementos que expresan lo que se espera que progrese el alumnado y que sustituyen a los «aprendizajes esperados» se denominan:",
    "opciones": [
      "Estándares curriculares.",
      "Competencias para la vida.",
      "Procesos de Desarrollo de Aprendizaje (PDA)."
    ],
    "correcta": 2,
    "frase": "«lo que progresa el alumnado y sustituye a los aprendizajes esperados».",
    "porque": "Procesos de Desarrollo de Aprendizaje.",
    "descartes": [
      "Estándares curriculares — ese término no es del Plan 2022.",
      "Competencias para la vida — ese es de un plan anterior."
    ]
  },
  {
    "id": 36,
    "bloque": "E · Programa Analítico, Sintético y PDA",
    "tema": "Construir el Analítico",
    "tipo": "ordenar",
    "enunciado": "Ordene las acciones para construir el Programa Analítico:",
    "pasos": [
      "1. Seleccionar y secuenciar contenidos del Sintético según el diagnóstico.",
      "2. Incorporar contenidos locales no previstos y asociarles PDA.",
      "3. Analizar las condiciones del alumnado y el contexto comunitario."
    ],
    "opciones": [
      "3, 1, 2",
      "1, 3, 2",
      "3, 2, 1"
    ],
    "correcta": 0,
    "frase": "«empieza en el diagnóstico (3) y cierra en el codiseño (2)».",
    "porque": "3 → 1 → 2 (diagnóstico, contextualización, codiseño).",
    "descartes": [
      "1, 3, 2 — no empieza en seleccionar (1).",
      "3, 2, 1 — el codiseño (2) no va antes de seleccionar (1)."
    ]
  },
  {
    "id": 37,
    "bloque": "E · Programa Analítico, Sintético y PDA",
    "tema": "Del Analítico a la planeación",
    "tipo": "opcion",
    "enunciado": "A partir del Programa Analítico, ¿qué elabora cada docente para organizar las actividades concretas del aula?",
    "opciones": [
      "El Programa Sintético.",
      "La planeación didáctica.",
      "El PEMC."
    ],
    "correcta": 1,
    "frase": "«del Analítico deriva el documento para el aula».",
    "porque": "La planeación didáctica del docente.",
    "descartes": [
      "El Programa Sintético — es previo y nacional.",
      "El PEMC — es de mejora, no del aula."
    ]
  },
  {
    "id": 38,
    "bloque": "E · Programa Analítico, Sintético y PDA",
    "tema": "Programa Analítico",
    "tipo": "negativa",
    "enunciado": "Son afirmaciones correctas sobre el Programa Analítico, EXCEPTO:",
    "opciones": [
      "Lo construye de manera colegiada el colectivo docente.",
      "Contextualiza el Programa Sintético a la comunidad.",
      "Es de alcance nacional y obligatorio en toda la República."
    ],
    "correcta": 2,
    "frase": "«en negativa, marca lo VERDADERO y queda la que sobra».",
    "porque": "FALSO: lo nacional/obligatorio es el Sintético, no el Analítico.",
    "descartes": [
      "Lo construye el colectivo — verdadero.",
      "Contextualiza el Sintético — verdadero."
    ]
  },
  {
    "id": 39,
    "bloque": "F · CTE, autonomía y PEMC",
    "tema": "Función del CTE",
    "tipo": "opcion",
    "enunciado": "¿Cuál es una función propia del Consejo Técnico Escolar?",
    "opciones": [
      "Tomar decisiones pedagógicas colegiadas para mejorar los aprendizajes.",
      "Asignar plazas y resolver trámites laborales del personal.",
      "Autorizar de manera individual cambios de adscripción."
    ],
    "correcta": 0,
    "frase": "«el verbo que gana es decidir en colegiado lo pedagógico».",
    "porque": "Decisiones pedagógicas colegiadas.",
    "descartes": [
      "Asignar plazas y trámites — es asunto laboral-administrativo.",
      "Cambios de adscripción individuales — es un trámite individual."
    ]
  },
  {
    "id": 40,
    "bloque": "F · CTE, autonomía y PEMC",
    "tema": "Fases del PEMC",
    "tipo": "ordenar",
    "enunciado": "Ordene las fases del Programa Escolar de Mejora Continua (PEMC):",
    "pasos": [
      "1. Establecer objetivos y metas.",
      "2. Realizar el diagnóstico de la escuela.",
      "3. Definir las acciones.",
      "4. Dar seguimiento y evaluar."
    ],
    "opciones": [
      "2, 1, 3, 4",
      "1, 2, 3, 4",
      "2, 3, 1, 4"
    ],
    "correcta": 0,
    "frase": "«diagnóstico (2) primero, seguimiento (4) al final».",
    "porque": "2 → 1 → 3 → 4.",
    "descartes": [
      "1, 2, 3, 4 — no empieza en metas (1).",
      "2, 3, 1, 4 — las acciones (3) no van antes de las metas (1)."
    ]
  },
  {
    "id": 41,
    "bloque": "F · CTE, autonomía y PEMC",
    "tema": "Autonomía profesional",
    "tipo": "opcion",
    "enunciado": "El colectivo decide, con base en su diagnóstico, ajustar contenidos y métodos de enseñanza sin requerir autorización externa, porque es una decisión pedagógica propia. ¿Qué se ejerce?",
    "opciones": [
      "La autonomía profesional del colectivo docente.",
      "La autonomía financiera del plantel.",
      "La supervisión jerárquica."
    ],
    "correcta": 0,
    "frase": "«decisión pedagógica y curricular del colectivo».",
    "porque": "Autonomía profesional del colectivo docente.",
    "descartes": [
      "Autonomía financiera — no es manejo de presupuesto.",
      "Supervisión jerárquica — no es fiscalización jerárquica."
    ]
  },
  {
    "id": 42,
    "bloque": "F · CTE, autonomía y PEMC",
    "tema": "Documento que construye el CTE",
    "tipo": "opcion",
    "enunciado": "¿Qué documento construye y revisa de manera colegiada el colectivo en el CTE para contextualizar el currículo a su comunidad?",
    "opciones": [
      "El Programa Sintético.",
      "El reglamento escolar.",
      "El Programa Analítico."
    ],
    "correcta": 2,
    "frase": "«el colectivo lo construye para contextualizar el currículo».",
    "porque": "El Programa Analítico.",
    "descartes": [
      "El Programa Sintético — es nacional, no lo hace el colectivo.",
      "El reglamento escolar — no contextualiza el currículo."
    ]
  },
  {
    "id": 43,
    "bloque": "F · CTE, autonomía y PEMC",
    "tema": "CTE vs CEPSE",
    "tipo": "negativa",
    "enunciado": "En el marco de la autonomía profesional, son funciones del CTE las siguientes, EXCEPTO:",
    "opciones": [
      "Analizar de forma colegiada los resultados de aprendizaje.",
      "Elaborar y evaluar el PEMC.",
      "Gestionar con las familias el mantenimiento de la infraestructura."
    ],
    "correcta": 2,
    "frase": "«marca lo pedagógico (sí del CTE) y queda lo que sobra».",
    "porque": "FALSO: la infraestructura con familias es del CEPSE, no del CTE.",
    "descartes": [
      "Analizar resultados — verdadero.",
      "Elaborar el PEMC — verdadero."
    ]
  },
  {
    "id": 44,
    "bloque": "F · CTE, autonomía y PEMC",
    "tema": "Liderazgo en el CTE",
    "tipo": "mejor",
    "enunciado": "Para mejorar los aprendizajes, ¿cuál es la acción MÁS pertinente de un director en el CTE?",
    "opciones": [
      "Entregar a cada docente un formato único y verificar su llenado.",
      "Promover el análisis colegiado de resultados y la toma de decisiones compartida del colectivo.",
      "Asumir él solo las decisiones para agilizar el trabajo."
    ],
    "correcta": 1,
    "frase": "«la acción MÁS pertinente para mejorar aprendizajes».",
    "porque": "Análisis colegiado y decisión compartida.",
    "descartes": [
      "Formato único — es administrativo.",
      "Asumir él solo — el verticalismo no moviliza al colectivo."
    ]
  },
  {
    "id": 45,
    "bloque": "G · Evaluación, inclusión y convivencia",
    "tema": "Evaluación formativa",
    "tipo": "opcion",
    "enunciado": "Tras una actividad, la maestra usa los errores del grupo para realimentar y ajustar su enseñanza, no para calificar. ¿Qué tipo de evaluación realiza?",
    "opciones": [
      "Sumativa.",
      "Formativa.",
      "Diagnóstica."
    ],
    "correcta": 1,
    "frase": "«usar el error para realimentar y ajustar, no para calificar».",
    "porque": "Evaluar para mejorar y realimentar.",
    "descartes": [
      "Sumativa — califica al cierre.",
      "Diagnóstica — va al inicio."
    ]
  },
  {
    "id": 46,
    "bloque": "G · Evaluación, inclusión y convivencia",
    "tema": "Evaluación por agentes",
    "tipo": "completar",
    "enunciado": "Valorar el propio desempeño es ________; valorar el de un compañero es ________.",
    "opciones": [
      "coevaluación / autoevaluación",
      "autoevaluación / coevaluación",
      "heteroevaluación / coevaluación"
    ],
    "correcta": 1,
    "frase": "«el propio desempeño = autoevaluación (primer espacio)».",
    "porque": "Propio = autoevaluación; del par = coevaluación.",
    "descartes": [
      "coevaluación / autoevaluación — invierte los términos.",
      "heteroevaluación / coevaluación — la heteroevaluación la hace el docente."
    ]
  },
  {
    "id": 47,
    "bloque": "G · Evaluación, inclusión y convivencia",
    "tema": "DUA",
    "tipo": "opcion",
    "enunciado": "La maestra ofrece el contenido en varios formatos, permite demostrar lo aprendido de distintas maneras y plantea retos que motivan. ¿Qué enfoque aplica?",
    "opciones": [
      "Adaptación curricular individual.",
      "Evaluación estandarizada.",
      "Diseño Universal para el Aprendizaje (DUA)."
    ],
    "correcta": 2,
    "frase": "«varios formatos + varias formas de demostrar + retos que motivan».",
    "porque": "Múltiples formas de representación, expresión e implicación.",
    "descartes": [
      "Adaptación curricular individual — es individual, no para todos.",
      "Evaluación estandarizada — no se trata de evaluar de forma estandarizada."
    ]
  },
  {
    "id": 48,
    "bloque": "G · Evaluación, inclusión y convivencia",
    "tema": "BAP",
    "tipo": "opcion",
    "enunciado": "Un estudiante participa poco porque las actividades siempre exigen una habilidad que se le dificulta; el problema está en la dinámica, no en él. ¿Cómo se denomina ese obstáculo?",
    "opciones": [
      "Una necesidad educativa especial del estudiante.",
      "Una barrera para el aprendizaje y la participación.",
      "Un ajuste razonable."
    ],
    "correcta": 1,
    "frase": "«el obstáculo está en la dinámica, no en la persona».",
    "porque": "Barrera del contexto (BAP).",
    "descartes": [
      "Necesidad educativa especial — ubica el problema en el alumno.",
      "Ajuste razonable — es la solución, no la causa."
    ]
  },
  {
    "id": 49,
    "bloque": "G · Evaluación, inclusión y convivencia",
    "tema": "Convivencia (restaurativo)",
    "tipo": "opcion",
    "enunciado": "Ante un conflicto, la escuela opta por que las partes reconozcan el daño, lo reparen y reconstruyan la relación, en lugar de solo sancionar. ¿Qué enfoque aplica?",
    "opciones": [
      "Punitivo.",
      "Restaurativo.",
      "Evitativo."
    ],
    "correcta": 1,
    "frase": "«reconocer el daño, repararlo y reconstruir la relación».",
    "porque": "Reparar el daño y la relación.",
    "descartes": [
      "Punitivo — solo sanciona.",
      "Evitativo — solo separa."
    ]
  },
  {
    "id": 50,
    "bloque": "G · Evaluación, inclusión y convivencia",
    "tema": "Interés superior de la niñez",
    "tipo": "opcion",
    "enunciado": "Una decisión escolar antepone el bienestar de un menor por encima de cualquier otra consideración. ¿Qué principio normativo la orienta?",
    "opciones": [
      "El interés superior de la niñez (LGDNNA).",
      "La autonomía de gestión.",
      "La libertad de cátedra."
    ],
    "correcta": 0,
    "frase": "«anteponer el bienestar del menor a cualquier otra cosa».",
    "porque": "Interés superior de la niñez (LGDNNA).",
    "descartes": [
      "Autonomía de gestión — no rige esto.",
      "Libertad de cátedra — no rige esto."
    ]
  }
];

const ETIQUETA_TIPO = {
  opcion: "Opción múltiple",
  completar: "Completar",
  mejor: "Mejor opción",
  ordenar: "Ordenar secuencia",
  negativa: "Negativa (EXCEPTO)",
  relacionar: "Relacionar columnas",
};

export default function ExamenParcial() {
  const [fase, setFase] = useState("gate"); // gate | examen | resultados
  const [clave, setClave] = useState("");
  const [errorClave, setErrorClave] = useState(false);
  const [idx, setIdx] = useState(0);
  const [resp, setResp] = useState({}); // id -> indice de opcion
  const [revIdx, setRevIdx] = useState(0);

  const total = REACTIVOS.length;
  const actual = REACTIVOS[idx];
  const contestadas = Object.keys(resp).length;
  const aciertos = useMemo(
    () => REACTIVOS.filter((r) => resp[r.id] === r.correcta).length,
    [resp]
  );

  function entrar() {
    if (clave.trim() === CLAVE) {
      setFase("examen");
      setErrorClave(false);
    } else {
      setErrorClave(true);
    }
  }

  function elegir(i) {
    setResp((prev) => ({ ...prev, [actual.id]: i }));
  }

  function ir(n) {
    setIdx(Math.max(0, Math.min(total - 1, n)));
  }

  function terminar() {
    setFase("resultados");
    setRevIdx(0);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reiniciar() {
    setResp({});
    setIdx(0);
    setRevIdx(0);
    setFase("examen");
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ============================ GATE ============================
  if (fase === "gate") {
    return (
      <div style={{ minHeight: "100vh", background: NARANJA_BG, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 10px 40px rgba(0,0,0,0.08)", padding: "40px 32px", maxWidth: "460px", width: "100%", textAlign: "center", border: "1px solid " + NARANJA_SOFT }}>
          <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: NARANJA, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <Lock size={32} color="#fff" />
          </div>
          <p style={{ fontSize: "13px", letterSpacing: "1px", color: NARANJA_DARK, fontWeight: 700, textTransform: "uppercase", margin: "0 0 6px" }}>SNTE Sección 21 · Nuevo León</p>
          <h1 style={{ fontSize: "26px", fontWeight: 800, color: "#1E293B", margin: "0 0 8px" }}>Examen Parcial</h1>
          <p style={{ fontSize: "15px", color: "#64748B", margin: "0 0 24px" }}>50 reactivos · Promoción Horizontal · Plan 2022 / NEM</p>
          <input
            type="text"
            inputMode="numeric"
            value={clave}
            onChange={(e) => { setClave(e.target.value); setErrorClave(false); }}
            onKeyDown={(e) => { if (e.key === "Enter") entrar(); }}
            placeholder="Escribe la clave"
            style={{ width: "100%", padding: "14px 16px", fontSize: "18px", textAlign: "center", letterSpacing: "4px", borderRadius: "12px", border: "2px solid " + (errorClave ? ROJO : NARANJA_SOFT), outline: "none", marginBottom: "12px", boxSizing: "border-box" }}
          />
          {errorClave && (
            <p style={{ color: ROJO, fontSize: "13px", margin: "0 0 12px" }}>Clave incorrecta. Inténtalo de nuevo.</p>
          )}
          <button
            onClick={entrar}
            style={{ width: "100%", padding: "14px", fontSize: "16px", fontWeight: 700, color: "#fff", background: NARANJA, border: "none", borderRadius: "12px", cursor: "pointer" }}
          >
            Entrar al examen
          </button>
          <p style={{ fontSize: "12px", color: "#94A3B8", margin: "18px 0 0" }}>Por la educación al servicio del pueblo</p>
        </div>
      </div>
    );
  }

  // ============================ RESULTADOS ============================
  if (fase === "resultados") {
    const r = REACTIVOS[revIdx];
    const elegida = resp[r.id];
    const pct = Math.round((aciertos / total) * 100);
    const calif = (aciertos / total) * 10;
    let mensaje = "Sigue repasando con el método PISTA.";
    if (pct >= 90) mensaje = "¡Excelente dominio, maestra/maestro!";
    else if (pct >= 70) mensaje = "Buen nivel. Afina los temas que fallaron.";
    else if (pct >= 50) mensaje = "Vas en camino. Repasa los bloques flojos.";

    return (
      <div style={{ minHeight: "100vh", background: NARANJA_BG, padding: "24px 16px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          {/* Tarjeta de puntaje */}
          <div style={{ background: "#fff", borderRadius: "20px", padding: "32px", textAlign: "center", boxShadow: "0 6px 24px rgba(0,0,0,0.06)", border: "1px solid " + NARANJA_SOFT, marginBottom: "20px" }}>
            <Award size={44} color={NARANJA} style={{ margin: "0 auto 10px" }} />
            <h2 style={{ fontSize: "22px", fontWeight: 800, color: "#1E293B", margin: "0 0 4px" }}>Resultado del Examen Parcial</h2>
            <p style={{ fontSize: "14px", color: "#64748B", margin: "0 0 20px" }}>{mensaje}</p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <div style={{ background: NARANJA_BG, borderRadius: "14px", padding: "16px 22px", minWidth: "120px" }}>
                <div style={{ fontSize: "30px", fontWeight: 800, color: NARANJA_DARK }}>{aciertos}/{total}</div>
                <div style={{ fontSize: "12px", color: "#64748B" }}>Aciertos</div>
              </div>
              <div style={{ background: NARANJA_BG, borderRadius: "14px", padding: "16px 22px", minWidth: "120px" }}>
                <div style={{ fontSize: "30px", fontWeight: 800, color: NARANJA_DARK }}>{pct}%</div>
                <div style={{ fontSize: "12px", color: "#64748B" }}>Porcentaje</div>
              </div>
              <div style={{ background: NARANJA_BG, borderRadius: "14px", padding: "16px 22px", minWidth: "120px" }}>
                <div style={{ fontSize: "30px", fontWeight: 800, color: NARANJA_DARK }}>{calif.toFixed(1)}</div>
                <div style={{ fontSize: "12px", color: "#64748B" }}>Calificación</div>
              </div>
            </div>
            <button onClick={reiniciar} style={{ marginTop: "22px", padding: "12px 24px", fontSize: "15px", fontWeight: 700, color: "#fff", background: NARANJA, border: "none", borderRadius: "12px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <RotateCcw size={18} /> Repetir examen
            </button>
          </div>

          {/* Mapa de revision */}
          <div style={{ background: "#fff", borderRadius: "16px", padding: "16px", marginBottom: "20px", border: "1px solid " + NARANJA_SOFT }}>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "#475569", margin: "0 0 10px" }}>Revisión por reactivo</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(38px, 1fr))", gap: "6px" }}>
              {REACTIVOS.map((q, i) => {
                const ok = resp[q.id] === q.correcta;
                const sinResp = resp[q.id] === undefined;
                const bg = sinResp ? GRIS : ok ? VERDE : ROJO;
                return (
                  <button key={q.id} onClick={() => setRevIdx(i)} style={{ aspectRatio: "1", borderRadius: "8px", border: i === revIdx ? "2px solid #1E293B" : "none", background: bg, color: "#fff", fontWeight: 700, fontSize: "13px", cursor: "pointer" }}>
                    {q.id}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detalle del reactivo en revision */}
          <div style={{ background: "#fff", borderRadius: "16px", padding: "24px", border: "1px solid " + NARANJA_SOFT }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: NARANJA_DARK, background: NARANJA_BG, padding: "4px 10px", borderRadius: "8px" }}>{r.bloque}</span>
              <span style={{ fontSize: "12px", color: "#94A3B8" }}>Reactivo {r.id} de {total} · {ETIQUETA_TIPO[r.tipo]}</span>
            </div>
            <p style={{ fontSize: "16px", fontWeight: 600, color: "#1E293B", margin: "0 0 14px", lineHeight: 1.5 }}>{r.enunciado}</p>

            {r.tipo === "relacionar" && <ColumnasRelacionar r={r} />}
            {r.tipo === "ordenar" && <PasosOrdenar r={r} />}

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
              {r.opciones.map((op, i) => {
                const esCorrecta = i === r.correcta;
                const esElegida = i === elegida;
                let bg = "#fff", bd = "#E2E8F0", ic = null;
                if (esCorrecta) { bg = "#F0FDF4"; bd = VERDE; ic = <CheckCircle2 size={18} color={VERDE} />; }
                else if (esElegida) { bg = "#FEF2F2"; bd = ROJO; ic = <XCircle size={18} color={ROJO} />; }
                return (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "12px 14px", borderRadius: "10px", background: bg, border: "1.5px solid " + bd }}>
                    <span style={{ fontWeight: 700, color: "#475569" }}>{LETRAS[i]})</span>
                    <span style={{ flex: 1, fontSize: "15px", color: "#1E293B" }}>{op}</span>
                    {ic}
                  </div>
                );
              })}
            </div>

            {elegida === undefined && (
              <p style={{ fontSize: "13px", color: ROJO, fontWeight: 600, margin: "0 0 14px" }}>No respondiste este reactivo.</p>
            )}

            {/* PISTA */}
            <div style={{ background: NARANJA_BG, borderRadius: "12px", padding: "16px", border: "1px dashed " + NARANJA_SOFT }}>
              <p style={{ fontSize: "13px", fontWeight: 800, color: NARANJA_DARK, margin: "0 0 8px", display: "flex", alignItems: "center", gap: "6px" }}>
                <BookOpen size={15} /> Método PISTA
              </p>
              <p style={{ fontSize: "14px", color: "#334155", margin: "0 0 6px" }}><b>Frase clave (ancla):</b> {r.frase}</p>
              {r.descartes && r.descartes.map((d, i) => (
                <p key={i} style={{ fontSize: "14px", color: "#64748B", margin: "0 0 4px" }}>✗ {d}</p>
              ))}
              <p style={{ fontSize: "14px", color: VERDE, fontWeight: 600, margin: "8px 0 0" }}>✔ {LETRAS[r.correcta]}) {r.opciones[r.correcta]} — {r.porque}</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "18px" }}>
              <button onClick={() => setRevIdx(Math.max(0, revIdx - 1))} disabled={revIdx === 0} style={navBtn(revIdx === 0)}>
                <ChevronLeft size={18} /> Anterior
              </button>
              <button onClick={() => setRevIdx(Math.min(total - 1, revIdx + 1))} disabled={revIdx === total - 1} style={navBtn(revIdx === total - 1)}>
                Siguiente <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================ EXAMEN ============================
  const elegida = resp[actual.id];

  return (
    <div style={{ minHeight: "100vh", background: NARANJA_BG, padding: "20px 16px 40px" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto" }}>
        {/* Encabezado */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", flexWrap: "wrap", gap: "8px" }}>
          <div>
            <p style={{ fontSize: "12px", fontWeight: 700, color: NARANJA_DARK, textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>SNTE Sección 21 · Examen Parcial</p>
            <h1 style={{ fontSize: "18px", fontWeight: 800, color: "#1E293B", margin: "2px 0 0" }}>50 reactivos · Plan 2022 / NEM</h1>
          </div>
          <div style={{ background: "#fff", borderRadius: "12px", padding: "8px 14px", border: "1px solid " + NARANJA_SOFT, fontSize: "13px", fontWeight: 700, color: "#475569" }}>
            Contestadas: <span style={{ color: NARANJA_DARK }}>{contestadas}</span>/{total}
          </div>
        </div>

        {/* Barra de progreso */}
        <div style={{ height: "8px", background: "#fff", borderRadius: "99px", overflow: "hidden", marginBottom: "16px", border: "1px solid " + NARANJA_SOFT }}>
          <div style={{ height: "100%", width: (contestadas / total) * 100 + "%", background: NARANJA, transition: "width 0.3s" }} />
        </div>

        {/* Mapa de navegacion */}
        <div style={{ background: "#fff", borderRadius: "14px", padding: "14px", marginBottom: "16px", border: "1px solid " + NARANJA_SOFT }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(36px, 1fr))", gap: "6px" }}>
            {REACTIVOS.map((q, i) => {
              const cont = resp[q.id] !== undefined;
              return (
                <button key={q.id} onClick={() => ir(i)} style={{ aspectRatio: "1", borderRadius: "8px", border: i === idx ? "2px solid " + NARANJA_DARK : "1px solid " + NARANJA_SOFT, background: cont ? NARANJA : "#fff", color: cont ? "#fff" : "#94A3B8", fontWeight: 700, fontSize: "12px", cursor: "pointer" }}>
                  {q.id}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tarjeta del reactivo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={actual.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ background: "#fff", borderRadius: "16px", padding: "24px", border: "1px solid " + NARANJA_SOFT }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ fontSize: "12px", fontWeight: 700, color: NARANJA_DARK, background: NARANJA_BG, padding: "4px 10px", borderRadius: "8px" }}>{actual.bloque}</span>
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff", background: NARANJA, padding: "4px 10px", borderRadius: "8px", display: "inline-flex", alignItems: "center", gap: "5px" }}>
                {actual.tipo === "relacionar" && <ArrowRightLeft size={13} />}
                {actual.tipo === "ordenar" && <ListOrdered size={13} />}
                {actual.tipo === "negativa" && <Flag size={13} />}
                {ETIQUETA_TIPO[actual.tipo]}
              </span>
            </div>

            <p style={{ fontSize: "12px", color: "#94A3B8", margin: "0 0 4px" }}>Reactivo {actual.id} de {total} · {actual.tema}</p>
            <p style={{ fontSize: "17px", fontWeight: 600, color: "#1E293B", margin: "0 0 16px", lineHeight: 1.55 }}>{actual.enunciado}</p>

            {actual.tipo === "relacionar" && <ColumnasRelacionar r={actual} />}
            {actual.tipo === "ordenar" && <PasosOrdenar r={actual} />}

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {actual.opciones.map((op, i) => {
                const sel = i === elegida;
                return (
                  <button
                    key={i}
                    onClick={() => elegir(i)}
                    style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", borderRadius: "12px", background: sel ? NARANJA_BG : "#fff", border: "2px solid " + (sel ? NARANJA : "#E2E8F0"), cursor: "pointer", textAlign: "left", transition: "all 0.15s" }}
                  >
                    <span style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: sel ? NARANJA : "#F1F5F9", color: sel ? "#fff" : "#475569", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>{LETRAS[i]}</span>
                    <span style={{ flex: 1, fontSize: "15px", color: "#1E293B", paddingTop: "3px" }}>{op}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controles inferiores */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "18px", gap: "10px" }}>
          <button onClick={() => ir(idx - 1)} disabled={idx === 0} style={navBtn(idx === 0)}>
            <ChevronLeft size={18} /> Anterior
          </button>

          {idx === total - 1 ? (
            <button onClick={terminar} style={{ padding: "12px 26px", fontSize: "15px", fontWeight: 700, color: "#fff", background: VERDE, border: "none", borderRadius: "12px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={18} /> Terminar examen
            </button>
          ) : (
            <button onClick={() => ir(idx + 1)} style={{ padding: "12px 26px", fontSize: "15px", fontWeight: 700, color: "#fff", background: NARANJA, border: "none", borderRadius: "12px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Siguiente <ChevronRight size={18} />
            </button>
          )}
        </div>

        {contestadas < total && (
          <p style={{ textAlign: "center", fontSize: "12px", color: "#94A3B8", marginTop: "12px" }}>
            Puedes terminar en cualquier momento. Te faltan {total - contestadas} por contestar.
          </p>
        )}
        {idx !== total - 1 && (
          <div style={{ textAlign: "center", marginTop: "8px" }}>
            <button onClick={terminar} style={{ background: "none", border: "none", color: NARANJA_DARK, fontSize: "13px", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>
              Terminar y ver resultados
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================ AUXILIARES ============================
function navBtn(disabled) {
  return {
    padding: "12px 20px",
    fontSize: "15px",
    fontWeight: 700,
    color: disabled ? "#CBD5E1" : "#475569",
    background: "#fff",
    border: "1px solid #E2E8F0",
    borderRadius: "12px",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  };
}

function ColumnasRelacionar({ r }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
      <div style={{ background: "#FFF4EB", borderRadius: "12px", padding: "14px", border: "1px solid #FDD9B5" }}>
        <p style={{ fontSize: "12px", fontWeight: 800, color: "#D85A0A", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Columna 1</p>
        {r.columnaA.map((x, i) => (
          <p key={i} style={{ fontSize: "14px", color: "#334155", margin: "0 0 6px", lineHeight: 1.4 }}>{x}</p>
        ))}
      </div>
      <div style={{ background: "#F8FAFC", borderRadius: "12px", padding: "14px", border: "1px solid #E2E8F0" }}>
        <p style={{ fontSize: "12px", fontWeight: 800, color: "#475569", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Columna 2</p>
        {r.columnaB.map((x, i) => (
          <p key={i} style={{ fontSize: "14px", color: "#334155", margin: "0 0 6px", lineHeight: 1.4 }}>{x}</p>
        ))}
      </div>
    </div>
  );
}

function PasosOrdenar({ r }) {
  return (
    <div style={{ background: "#F8FAFC", borderRadius: "12px", padding: "14px 16px", marginBottom: "16px", border: "1px solid #E2E8F0" }}>
      <p style={{ fontSize: "12px", fontWeight: 800, color: "#475569", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Acciones a ordenar</p>
      {r.pasos.map((x, i) => (
        <p key={i} style={{ fontSize: "14px", color: "#334155", margin: "0 0 6px", lineHeight: 1.4 }}>{x}</p>
      ))}
    </div>
  );
}
