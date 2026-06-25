// src/data/juego-fines-criterios.js
// JUEGO Domina Fines y Criterios - SNTE Seccion 21
// V2: Fragmentos AUDITADOS para NO regalar pista
//
// Mecanica HIBRIDA BRUTAL:
//  - Pregunta: fragmento LITERAL del DOF SIN la palabra-pista
//  - Opciones CRITERIOS: nombres cortos (Equitativa, Humanista, etc.)
//  - Opciones FINES: frases LITERALES cortas
//  - Las 3 opciones son del MISMO tipo (nunca mezcla Fin con Criterio)
//
// Verificado contra LGE DOF 15-01-2026 (Art. 15 + Art. 16)

export const ITEMS_LGE = [
  // ═══════════════════════════════════════════════════════════
  // CRITERIOS (Art. 16 LGE) - fragmentos SIN el adjetivo-pista
  // ═══════════════════════════════════════════════════════════
  {
    "id": "C1",
    "tipo": "CRITERIO",
    "nombre_corto": "Democrática",
    "frase_completa": "Será democrática, considerando a la democracia no solamente como una estructura jurídica y un régimen político, sino como un sistema de vida fundado en el constante mejoramiento económico, social y cultural del pueblo.",
    "fragmento": "no solamente como una estructura jurídica y un régimen político, sino como un sistema de vida fundado en el constante mejoramiento económico, social y cultural del pueblo",
    "trampa_comun": "Suena al criterio Nacional (mejoramiento del pueblo). La firma de Democrática es 'SISTEMA DE VIDA + MEJORAMIENTO ECONÓMICO, SOCIAL Y CULTURAL DEL PUEBLO'."
  },
  {
    "id": "C2",
    "tipo": "CRITERIO",
    "nombre_corto": "Nacional",
    "frase_completa": "Será nacional, en cuanto que, sin hostilidades ni exclusivismos, la educación atenderá a la comprensión y solución de nuestros problemas, al aprovechamiento sustentable de nuestros recursos naturales, a la defensa de nuestra soberanía e independencia política, al aseguramiento de nuestra independencia económica y a la continuidad y acrecentamiento de nuestra cultura.",
    "fragmento": "sin hostilidades ni exclusivismos, la educación atenderá a la comprensión y solución de nuestros problemas, al aseguramiento de nuestra independencia económica",
    "trampa_comun": "Suena al criterio Equitativo (sin exclusivismos). La firma de Nacional es 'SIN HOSTILIDADES NI EXCLUSIVISMOS + INDEPENDENCIA ECONÓMICA + ACRECENTAMIENTO DE NUESTRA CULTURA'."
  },
  {
    "id": "C3",
    "tipo": "CRITERIO",
    "nombre_corto": "Humanista",
    "frase_completa": "Será humanista, al fomentar el aprecio y respeto por la dignidad de las personas, sustentado en los ideales de fraternidad e igualdad de derechos, promoviendo el mejoramiento de la convivencia humana y evitando cualquier tipo de privilegio de razas, religión, grupos, sexo o de personas.",
    "fragmento": "sustentado en los ideales de fraternidad e igualdad de derechos, evitando cualquier tipo de privilegio de razas, religión, grupos, sexo o de personas",
    "trampa_comun": "Suena al criterio Democrático (igualdad de derechos) y al Intercultural. La firma de Humanista es 'FRATERNIDAD + EVITAR PRIVILEGIO DE RAZAS, RELIGIÓN, GRUPOS, SEXO'."
  },
  {
    "id": "C4",
    "tipo": "CRITERIO",
    "nombre_corto": "Equitativa",
    "frase_completa": "Será equitativa, al favorecer el pleno ejercicio del derecho a la educación de todas las personas, para lo cual combatirá las desigualdades socioeconómicas, regionales, de capacidades y de género, respaldará a estudiantes en condiciones de vulnerabilidad social y ofrecerá a todos los educandos una educación pertinente que asegure su acceso, tránsito, permanencia y, en su caso, egreso oportuno en los servicios educativos.",
    "fragmento": "respaldará a estudiantes en condiciones de vulnerabilidad social y ofrecerá a todos los educandos una educación pertinente que asegure su acceso, tránsito, permanencia y, en su caso, egreso oportuno",
    "trampa_comun": "Suena al criterio Inclusivo (vulnerabilidad). La firma de Equitativa es 'VULNERABILIDAD SOCIAL + ACCESO, TRÁNSITO, PERMANENCIA Y EGRESO OPORTUNO'."
  },
  {
    "id": "C5",
    "tipo": "CRITERIO",
    "nombre_corto": "Inclusiva",
    "frase_completa": "Será inclusiva, al tomar en cuenta las diversas capacidades, circunstancias, necesidades, estilos y ritmos de aprendizaje de los educandos, y así eliminar las distintas barreras al aprendizaje y a la participación, para lo cual adoptará medidas en favor de la accesibilidad y los ajustes razonables.",
    "fragmento": "al tomar en cuenta las diversas capacidades, circunstancias, necesidades, estilos y ritmos de aprendizaje de los educandos, adoptando medidas que faciliten su plena participación",
    "trampa_comun": "Suena al criterio Equitativo (capacidades) e Integral. La firma de Inclusiva es 'CAPACIDADES, CIRCUNSTANCIAS, NECESIDADES, ESTILOS Y RITMOS + AJUSTES RAZONABLES'."
  },
  {
    "id": "C6",
    "tipo": "CRITERIO",
    "nombre_corto": "Intercultural",
    "frase_completa": "Será intercultural, al promover la convivencia armónica entre personas y comunidades sobre la base del respeto a sus diferentes concepciones, opiniones, tradiciones, costumbres y modos de vida y del reconocimiento de sus derechos, en un marco de inclusión social.",
    "fragmento": "el respeto a sus diferentes concepciones, opiniones, tradiciones, costumbres y modos de vida y del reconocimiento de sus derechos, en un marco de inclusión social",
    "trampa_comun": "Suena al criterio Humanista (convivencia) y al fin de Pluralidad Étnica. La firma de Intercultural es 'CONCEPCIONES + OPINIONES + TRADICIONES + COSTUMBRES + MODOS DE VIDA'."
  },
  {
    "id": "C7",
    "tipo": "CRITERIO",
    "nombre_corto": "Integral",
    "frase_completa": "Será integral porque educará para la vida y estará enfocada a las capacidades y desarrollo de las habilidades cognitivas, socioemocionales y físicas de las personas que les permitan alcanzar su bienestar y contribuir al desarrollo social.",
    "fragmento": "desarrollo de las habilidades cognitivas, socioemocionales y físicas de las personas que les permitan alcanzar su bienestar y contribuir al desarrollo social",
    "trampa_comun": "Suena al criterio Inclusivo (capacidades) y al de Excelencia. La firma de Integral es 'HABILIDADES COGNITIVAS, SOCIOEMOCIONALES Y FÍSICAS'."
  },
  {
    "id": "C8",
    "tipo": "CRITERIO",
    "nombre_corto": "De excelencia",
    "frase_completa": "Será de excelencia, orientada al mejoramiento permanente de los procesos formativos que propicien el máximo logro de aprendizaje de los educandos, para el desarrollo de su pensamiento crítico, así como el fortalecimiento de los lazos entre escuela y comunidad.",
    "fragmento": "mejoramiento permanente de los procesos formativos que propicien el máximo logro de aprendizaje de los educandos, así como el fortalecimiento de los lazos entre escuela y comunidad",
    "trampa_comun": "Suena al criterio Integral (desarrollo). La firma de Excelencia es 'MEJORAMIENTO PERMANENTE + MÁXIMO LOGRO DE APRENDIZAJE + LAZOS ESCUELA-COMUNIDAD'."
  },
  // ═══════════════════════════════════════════════════════════
  // FINES (Art. 15 LGE) - fragmentos = firma única del fin
  // ═══════════════════════════════════════════════════════════
  {
    "id": "F1",
    "tipo": "FIN",
    "nombre_corto": "Contribuir al desarrollo integral y permanente de los educandos, para que ejerzan de manera plena sus capacidades, a través de la mejora continua del Sistema Educativo Nacional.",
    "frase_completa": "Contribuir al desarrollo integral y permanente de los educandos, para que ejerzan de manera plena sus capacidades, a través de la mejora continua del Sistema Educativo Nacional.",
    "fragmento": "para que ejerzan de manera plena sus capacidades, a través de la mejora continua del Sistema Educativo Nacional",
    "trampa_comun": "Suena al criterio Integral y al de Excelencia. La firma de F1 es 'DESARROLLO INTEGRAL Y PERMANENTE + MEJORA CONTINUA DEL SEN'."
  },
  {
    "id": "F2",
    "tipo": "FIN",
    "nombre_corto": "Promover el respeto irrestricto de la dignidad humana, como valor fundamental e inalterable de la persona y de la sociedad.",
    "frase_completa": "Promover el respeto irrestricto de la dignidad humana, como valor fundamental e inalterable de la persona y de la sociedad, a partir de una formación humanista que contribuya a la mejor convivencia social en un marco de respeto por los derechos de todas las personas y la integridad de las familias, el aprecio por la diversidad y la corresponsabilidad con el interés general.",
    "fragmento": "como valor fundamental e inalterable de la persona y de la sociedad, a partir de una formación humanista que contribuya a la mejor convivencia social",
    "trampa_comun": "Suena al criterio Humanista (también dignidad). La firma de F2 es 'VALOR FUNDAMENTAL E INALTERABLE + INTEGRIDAD DE LAS FAMILIAS + CORRESPONSABILIDAD'."
  },
  {
    "id": "F3",
    "tipo": "FIN",
    "nombre_corto": "Inculcar el enfoque de derechos humanos y de igualdad sustantiva, con el mismo trato y oportunidades para las personas.",
    "frase_completa": "Inculcar el enfoque de derechos humanos y de igualdad sustantiva, y promover el conocimiento, respeto, disfrute y ejercicio de todos los derechos, con el mismo trato y oportunidades para las personas.",
    "fragmento": "promover el conocimiento, respeto, disfrute y ejercicio de todos los derechos, con el mismo trato y oportunidades para las personas",
    "trampa_comun": "Suena al criterio Democrático (derechos) y al Humanista. La firma de F3 es 'ENFOQUE DE DERECHOS HUMANOS + IGUALDAD SUSTANTIVA + MISMO TRATO Y OPORTUNIDADES'."
  },
  {
    "id": "F4",
    "tipo": "FIN",
    "nombre_corto": "Fomentar el amor a la Patria, el aprecio por sus culturas, el conocimiento de su historia y el compromiso con los valores, símbolos patrios y las instituciones nacionales.",
    "frase_completa": "Fomentar el amor a la Patria, el aprecio por sus culturas, el conocimiento de su historia y el compromiso con los valores, símbolos patrios y las instituciones nacionales.",
    "fragmento": "el aprecio por sus culturas, el conocimiento de su historia y el compromiso con los valores, símbolos patrios y las instituciones nacionales",
    "trampa_comun": "Suena al criterio Nacional (cultura) y al fin de Pluralidad Étnica. La firma de F4 es 'AMOR A LA PATRIA + SÍMBOLOS PATRIOS + INSTITUCIONES NACIONALES'."
  },
  {
    "id": "F5",
    "tipo": "FIN",
    "nombre_corto": "Formar a los educandos en la cultura de la paz, la solución no violenta de conflictos y la convivencia en un marco de respeto a las diferencias.",
    "frase_completa": "Formar a los educandos en la cultura de la paz, el respeto, la tolerancia, los valores democráticos que favorezcan el diálogo constructivo, la solidaridad y la búsqueda de acuerdos que permitan la solución no violenta de conflictos y la convivencia en un marco de respeto a las diferencias.",
    "fragmento": "los valores democráticos que favorezcan el diálogo constructivo, la solidaridad y la búsqueda de acuerdos que permitan la solución no violenta de conflictos",
    "trampa_comun": "Suena al fin de Solidaridad Internacional y al criterio Democrático. La firma de F5 es 'CULTURA DE LA PAZ + SOLUCIÓN NO VIOLENTA DE CONFLICTOS'."
  },
  {
    "id": "F6",
    "tipo": "FIN",
    "nombre_corto": "Propiciar actitudes solidarias en el ámbito internacional, en la independencia y en la justicia, así como el respeto entre las naciones.",
    "frase_completa": "Propiciar actitudes solidarias en el ámbito internacional, en la independencia y en la justicia para fortalecer el ejercicio de los derechos de todas las personas, el cumplimiento de sus obligaciones y el respeto entre las naciones.",
    "fragmento": "para fortalecer el ejercicio de los derechos de todas las personas, el cumplimiento de sus obligaciones y el respeto entre las naciones",
    "trampa_comun": "Suena al fin de Derechos Humanos (F3) y al criterio Nacional. La firma de F6 es 'ACTITUDES SOLIDARIAS EN EL ÁMBITO INTERNACIONAL + RESPETO ENTRE LAS NACIONES'."
  },
  {
    "id": "F7",
    "tipo": "FIN",
    "nombre_corto": "Promover la comprensión, el aprecio, el conocimiento y enseñanza de la pluralidad étnica, cultural y lingüística de la nación.",
    "frase_completa": "Promover la comprensión, el aprecio, el conocimiento y enseñanza de la pluralidad étnica, cultural y lingüística de la nación, el diálogo e intercambio intercultural sobre la base de equidad y respeto mutuo; así como la valoración de las tradiciones y particularidades culturales de las diversas regiones del país.",
    "fragmento": "el diálogo e intercambio intercultural sobre la base de equidad y respeto mutuo; así como la valoración de las tradiciones y particularidades culturales de las diversas regiones del país",
    "trampa_comun": "Suena MUCHO al criterio Intercultural (mismas palabras). La firma de F7 es 'PLURALIDAD ÉTNICA, CULTURAL Y LINGÜÍSTICA DE LA NACIÓN + DIVERSAS REGIONES DEL PAÍS'."
  },
  {
    "id": "F8",
    "tipo": "FIN",
    "nombre_corto": "Inculcar el respeto por la naturaleza, el desarrollo sostenible y la resiliencia frente al cambio climático.",
    "frase_completa": "Inculcar el respeto por la naturaleza, a través de la generación de capacidades y habilidades que aseguren el manejo integral, la conservación y el aprovechamiento de los recursos naturales, el desarrollo sostenible y la resiliencia frente al cambio climático.",
    "fragmento": "a través de la generación de capacidades y habilidades que aseguren el manejo integral, la conservación y el aprovechamiento de los recursos naturales, el desarrollo sostenible y la resiliencia frente al cambio climático",
    "trampa_comun": "Suena al criterio Integral (capacidades). La firma de F8 es 'RESPETO POR LA NATURALEZA + APROVECHAMIENTO DE RECURSOS + RESILIENCIA FRENTE AL CAMBIO CLIMÁTICO'."
  },
  {
    "id": "F9",
    "tipo": "FIN",
    "nombre_corto": "Fomentar la honestidad, el civismo y los valores necesarios para transformar la vida pública del país.",
    "frase_completa": "Fomentar la honestidad, el civismo y los valores necesarios para transformar la vida pública del país.",
    "fragmento": "los valores necesarios para transformar la vida pública del país",
    "trampa_comun": "Suena al criterio Humanista (valores) y al Democrático. La firma de F9 es 'HONESTIDAD + CIVISMO + TRANSFORMAR LA VIDA PÚBLICA DEL PAÍS'."
  }
];

export const TIPOS_INFO = {
  FIN: {
    nombre: "Fin de la educación",
    descripcion: "Art. 15 LGE",
    emoji: "🎯",
  },
  CRITERIO: {
    nombre: "Criterio de la educación",
    descripcion: "Art. 16 LGE",
    emoji: "🛡️",
  },
};
