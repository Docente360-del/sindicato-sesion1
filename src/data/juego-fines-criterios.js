// src/data/juego-fines-criterios.js
// JUEGO Domina Fines y Criterios - SNTE Seccion 21
// Mecanica HIBRIDA BRUTAL:
//  - Pregunta: fragmento LITERAL del DOF
//  - Opciones CRITERIOS: nombres cortos (Equitativa, Humanista, etc.)
//  - Opciones FINES: frases LITERALES cortas (primeros 12-18 palabras)
//  - Las 3 opciones son del MISMO tipo (nunca mezcla Fin con Criterio)
// Verificado contra LGE DOF 15-01-2026 (Art. 15 + Art. 16)

export const ITEMS_LGE = [
  // ═══════════════════════════════════════════════════════════
  // CRITERIOS (Art. 16 LGE) - opciones = nombre corto adjetivo
  // ═══════════════════════════════════════════════════════════
  {
    "id": "C1",
    "tipo": "CRITERIO",
    "nombre_corto": "Democrática",
    "frase_completa": "Será democrática, considerando a la democracia no solamente como una estructura jurídica y un régimen político, sino como un sistema de vida fundado en el constante mejoramiento económico, social y cultural del pueblo.",
    "fragmento": "considerando a la democracia no solamente como una estructura jurídica y un régimen político, sino como un sistema de vida fundado en el constante mejoramiento económico, social y cultural del pueblo",
    "trampa_comun": "Suena al criterio Nacional (mejoramiento del pueblo) y al criterio Humanista. La clave es 'DEMOCRACIA COMO SISTEMA DE VIDA'."
  },
  {
    "id": "C2",
    "tipo": "CRITERIO",
    "nombre_corto": "Nacional",
    "frase_completa": "Será nacional, en cuanto que, sin hostilidades ni exclusivismos, la educación atenderá a la comprensión y solución de nuestros problemas, al aprovechamiento sustentable de nuestros recursos naturales, a la defensa de nuestra soberanía e independencia política, al aseguramiento de nuestra independencia económica y a la continuidad y acrecentamiento de nuestra cultura.",
    "fragmento": "sin hostilidades ni exclusivismos, la educación atenderá a la comprensión y solución de nuestros problemas, al aprovechamiento sustentable de nuestros recursos naturales, a la defensa de nuestra soberanía",
    "trampa_comun": "Suena al criterio Equitativo (sin exclusivismos) y al criterio Intercultural. La clave es 'SIN HOSTILIDADES NI EXCLUSIVISMOS + INDEPENDENCIA + ACRECENTAMIENTO DE NUESTRA CULTURA'."
  },
  {
    "id": "C3",
    "tipo": "CRITERIO",
    "nombre_corto": "Humanista",
    "frase_completa": "Será humanista, al fomentar el aprecio y respeto por la dignidad de las personas, sustentado en los ideales de fraternidad e igualdad de derechos, promoviendo el mejoramiento de la convivencia humana y evitando cualquier tipo de privilegio de razas, religión, grupos, sexo o de personas.",
    "fragmento": "fomentar el aprecio y respeto por la dignidad de las personas, sustentado en los ideales de fraternidad e igualdad de derechos, evitando cualquier tipo de privilegio de razas, religión, grupos, sexo",
    "trampa_comun": "Suena al criterio Democrático (igualdad). La clave es 'FRATERNIDAD + EVITAR PRIVILEGIO DE RAZAS, RELIGION, GRUPOS, SEXO'."
  },
  {
    "id": "C4",
    "tipo": "CRITERIO",
    "nombre_corto": "Equitativa",
    "frase_completa": "Será equitativa, al favorecer el pleno ejercicio del derecho a la educación de todas las personas, para lo cual combatirá las desigualdades socioeconómicas, regionales, de capacidades y de género, respaldará a estudiantes en condiciones de vulnerabilidad social y ofrecerá a todos los educandos una educación pertinente que asegure su acceso, tránsito, permanencia y, en su caso, egreso oportuno en los servicios educativos.",
    "fragmento": "al favorecer el pleno ejercicio del derecho a la educación de todas las personas, para lo cual combatirá las desigualdades socioeconómicas, regionales, de capacidades y de género, respaldará a estudiantes en condiciones de vulnerabilidad social",
    "trampa_comun": "Suena al criterio Inclusivo (capacidades). La clave es 'COMBATIR DESIGUALDADES SOCIOECONÓMICAS, REGIONALES, DE CAPACIDADES Y DE GÉNERO + ACCESO, TRÁNSITO, PERMANENCIA'."
  },
  {
    "id": "C5",
    "tipo": "CRITERIO",
    "nombre_corto": "Inclusiva",
    "frase_completa": "Será inclusiva, al tomar en cuenta las diversas capacidades, circunstancias, necesidades, estilos y ritmos de aprendizaje de los educandos, y así eliminar las distintas barreras al aprendizaje y a la participación, para lo cual adoptará medidas en favor de la accesibilidad y los ajustes razonables.",
    "fragmento": "tomar en cuenta las diversas capacidades, circunstancias, necesidades, estilos y ritmos de aprendizaje de los educandos, y así eliminar las distintas barreras al aprendizaje y a la participación",
    "trampa_comun": "Suena al criterio Equitativo (capacidades). La clave es 'BARRERAS AL APRENDIZAJE Y A LA PARTICIPACIÓN + ACCESIBILIDAD + AJUSTES RAZONABLES'."
  },
  {
    "id": "C6",
    "tipo": "CRITERIO",
    "nombre_corto": "Intercultural",
    "frase_completa": "Será intercultural, al promover la convivencia armónica entre personas y comunidades sobre la base del respeto a sus diferentes concepciones, opiniones, tradiciones, costumbres y modos de vida y del reconocimiento de sus derechos, en un marco de inclusión social.",
    "fragmento": "promover la convivencia armónica entre personas y comunidades sobre la base del respeto a sus diferentes concepciones, opiniones, tradiciones, costumbres y modos de vida",
    "trampa_comun": "Suena al criterio Humanista (convivencia) y al Inclusivo. La clave es 'CONVIVENCIA ARMÓNICA + CONCEPCIONES + OPINIONES + TRADICIONES + COSTUMBRES + MODOS DE VIDA'."
  },
  {
    "id": "C7",
    "tipo": "CRITERIO",
    "nombre_corto": "Integral",
    "frase_completa": "Será integral porque educará para la vida y estará enfocada a las capacidades y desarrollo de las habilidades cognitivas, socioemocionales y físicas de las personas que les permitan alcanzar su bienestar y contribuir al desarrollo social.",
    "fragmento": "educará para la vida y estará enfocada a las capacidades y desarrollo de las habilidades cognitivas, socioemocionales y físicas de las personas",
    "trampa_comun": "Suena al criterio Inclusivo (capacidades) y al de Excelencia. La clave es 'EDUCAR PARA LA VIDA + HABILIDADES COGNITIVAS, SOCIOEMOCIONALES Y FÍSICAS'."
  },
  {
    "id": "C8",
    "tipo": "CRITERIO",
    "nombre_corto": "De excelencia",
    "frase_completa": "Será de excelencia, orientada al mejoramiento permanente de los procesos formativos que propicien el máximo logro de aprendizaje de los educandos, para el desarrollo de su pensamiento crítico, así como el fortalecimiento de los lazos entre escuela y comunidad.",
    "fragmento": "mejoramiento permanente de los procesos formativos que propicien el máximo logro de aprendizaje de los educandos, para el desarrollo de su pensamiento crítico, así como el fortalecimiento de los lazos entre escuela y comunidad",
    "trampa_comun": "Suena al criterio Integral (desarrollo). La clave es 'MEJORAMIENTO PERMANENTE + MÁXIMO LOGRO DE APRENDIZAJE + LAZOS ESCUELA-COMUNIDAD'."
  },
  // ═══════════════════════════════════════════════════════════
  // FINES (Art. 15 LGE) - opciones = frase LITERAL corta
  // ═══════════════════════════════════════════════════════════
  {
    "id": "F1",
    "tipo": "FIN",
    "nombre_corto": "Contribuir al desarrollo integral y permanente de los educandos, para que ejerzan de manera plena sus capacidades, a través de la mejora continua del Sistema Educativo Nacional.",
    "frase_completa": "Contribuir al desarrollo integral y permanente de los educandos, para que ejerzan de manera plena sus capacidades, a través de la mejora continua del Sistema Educativo Nacional.",
    "fragmento": "ejerzan de manera plena sus capacidades, a través de la mejora continua del Sistema Educativo Nacional",
    "trampa_comun": "Suena al criterio Integral y al de Excelencia. La clave es 'CONTRIBUIR AL DESARROLLO INTEGRAL Y PERMANENTE + MEJORA CONTINUA DEL SEN'."
  },
  {
    "id": "F2",
    "tipo": "FIN",
    "nombre_corto": "Promover el respeto irrestricto de la dignidad humana, como valor fundamental e inalterable de la persona y de la sociedad.",
    "frase_completa": "Promover el respeto irrestricto de la dignidad humana, como valor fundamental e inalterable de la persona y de la sociedad, a partir de una formación humanista que contribuya a la mejor convivencia social en un marco de respeto por los derechos de todas las personas y la integridad de las familias, el aprecio por la diversidad y la corresponsabilidad con el interés general.",
    "fragmento": "como valor fundamental e inalterable de la persona y de la sociedad, a partir de una formación humanista que contribuya a la mejor convivencia social",
    "trampa_comun": "Suena al criterio Humanista (también dignidad). La clave es 'DIGNIDAD HUMANA + INTEGRIDAD DE LAS FAMILIAS + CORRESPONSABILIDAD'."
  },
  {
    "id": "F3",
    "tipo": "FIN",
    "nombre_corto": "Inculcar el enfoque de derechos humanos y de igualdad sustantiva, con el mismo trato y oportunidades para las personas.",
    "frase_completa": "Inculcar el enfoque de derechos humanos y de igualdad sustantiva, y promover el conocimiento, respeto, disfrute y ejercicio de todos los derechos, con el mismo trato y oportunidades para las personas.",
    "fragmento": "promover el conocimiento, respeto, disfrute y ejercicio de todos los derechos, con el mismo trato y oportunidades para las personas",
    "trampa_comun": "Suena al criterio Democrático (derechos). La clave es 'INCULCAR + ENFOQUE DE DERECHOS HUMANOS + IGUALDAD SUSTANTIVA'."
  },
  {
    "id": "F4",
    "tipo": "FIN",
    "nombre_corto": "Fomentar el amor a la Patria, el aprecio por sus culturas, el conocimiento de su historia y el compromiso con los valores, símbolos patrios y las instituciones nacionales.",
    "frase_completa": "Fomentar el amor a la Patria, el aprecio por sus culturas, el conocimiento de su historia y el compromiso con los valores, símbolos patrios y las instituciones nacionales.",
    "fragmento": "el aprecio por sus culturas, el conocimiento de su historia y el compromiso con los valores, símbolos patrios y las instituciones nacionales",
    "trampa_comun": "Suena al criterio Nacional (cultura nacional). La clave es 'AMOR A LA PATRIA + SÍMBOLOS PATRIOS + INSTITUCIONES NACIONALES'."
  },
  {
    "id": "F5",
    "tipo": "FIN",
    "nombre_corto": "Formar a los educandos en la cultura de la paz, la solución no violenta de conflictos y la convivencia en un marco de respeto a las diferencias.",
    "frase_completa": "Formar a los educandos en la cultura de la paz, el respeto, la tolerancia, los valores democráticos que favorezcan el diálogo constructivo, la solidaridad y la búsqueda de acuerdos que permitan la solución no violenta de conflictos y la convivencia en un marco de respeto a las diferencias.",
    "fragmento": "los valores democráticos que favorezcan el diálogo constructivo, la solidaridad y la búsqueda de acuerdos que permitan la solución no violenta de conflictos",
    "trampa_comun": "Suena al fin de Solidaridad Internacional. La clave es 'CULTURA DE LA PAZ + SOLUCIÓN NO VIOLENTA DE CONFLICTOS'."
  },
  {
    "id": "F6",
    "tipo": "FIN",
    "nombre_corto": "Propiciar actitudes solidarias en el ámbito internacional, en la independencia y en la justicia, así como el respeto entre las naciones.",
    "frase_completa": "Propiciar actitudes solidarias en el ámbito internacional, en la independencia y en la justicia para fortalecer el ejercicio de los derechos de todas las personas, el cumplimiento de sus obligaciones y el respeto entre las naciones.",
    "fragmento": "fortalecer el ejercicio de los derechos de todas las personas, el cumplimiento de sus obligaciones y el respeto entre las naciones",
    "trampa_comun": "Suena al fin de Derechos Humanos (F3). La clave es 'ACTITUDES SOLIDARIAS EN EL ÁMBITO INTERNACIONAL + RESPETO ENTRE LAS NACIONES'."
  },
  {
    "id": "F7",
    "tipo": "FIN",
    "nombre_corto": "Promover la comprensión, el aprecio, el conocimiento y enseñanza de la pluralidad étnica, cultural y lingüística de la nación.",
    "frase_completa": "Promover la comprensión, el aprecio, el conocimiento y enseñanza de la pluralidad étnica, cultural y lingüística de la nación, el diálogo e intercambio intercultural sobre la base de equidad y respeto mutuo; así como la valoración de las tradiciones y particularidades culturales de las diversas regiones del país.",
    "fragmento": "el diálogo e intercambio intercultural sobre la base de equidad y respeto mutuo; así como la valoración de las tradiciones y particularidades culturales de las diversas regiones del país",
    "trampa_comun": "Suena al criterio Intercultural (mismas palabras). La clave es 'PLURALIDAD ÉTNICA, CULTURAL Y LINGÜÍSTICA DE LA NACIÓN'."
  },
  {
    "id": "F8",
    "tipo": "FIN",
    "nombre_corto": "Inculcar el respeto por la naturaleza, el desarrollo sostenible y la resiliencia frente al cambio climático.",
    "frase_completa": "Inculcar el respeto por la naturaleza, a través de la generación de capacidades y habilidades que aseguren el manejo integral, la conservación y el aprovechamiento de los recursos naturales, el desarrollo sostenible y la resiliencia frente al cambio climático.",
    "fragmento": "la generación de capacidades y habilidades que aseguren el manejo integral, la conservación y el aprovechamiento de los recursos naturales, el desarrollo sostenible y la resiliencia frente al cambio climático",
    "trampa_comun": "Suena al criterio Integral (capacidades). La clave es 'RESPETO POR LA NATURALEZA + DESARROLLO SOSTENIBLE + CAMBIO CLIMÁTICO'."
  },
  {
    "id": "F9",
    "tipo": "FIN",
    "nombre_corto": "Fomentar la honestidad, el civismo y los valores necesarios para transformar la vida pública del país.",
    "frase_completa": "Fomentar la honestidad, el civismo y los valores necesarios para transformar la vida pública del país.",
    "fragmento": "los valores necesarios para transformar la vida pública del país",
    "trampa_comun": "Suena al criterio Humanista (valores). La clave es 'HONESTIDAD + CIVISMO + TRANSFORMAR LA VIDA PÚBLICA'."
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
