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
,
  // ═══════════════════════════════════════════════════════════
  // OBJETIVOS DE LA NEM (Art. 11 LGE) - 4 objetivos
  // ═══════════════════════════════════════════════════════════
  {
    "id": "O1",
    "tipo": "OBJETIVO",
    "nombre_corto": "Desarrollo humano integral del educando",
    "frase_completa": "(Art. 11) El Estado, a través de la nueva escuela mexicana, buscará la equidad, la excelencia y la mejora continua... Tendrá como objetivos el desarrollo humano integral del educando, reorientar el Sistema Educativo Nacional, incidir en la cultura educativa mediante la corresponsabilidad e impulsar transformaciones sociales dentro de la escuela y en la comunidad.",
    "fragmento": "que el educando se forme de manera plena en todas sus dimensiones; es el primer objetivo que persigue la Nueva Escuela Mexicana",
    "trampa_comun": "OJO: el Art. 11 lo enuncia como OBJETIVO; el Art. 12 lo DESARROLLA en 5 propósitos. Aquí se pregunta por el objetivo, no por el propósito del DHI."
  },
  {
    "id": "O2",
    "tipo": "OBJETIVO",
    "nombre_corto": "Reorientar el Sistema Educativo Nacional",
    "frase_completa": "(Art. 11) ...Tendrá como objetivos... reorientar el Sistema Educativo Nacional...",
    "fragmento": "cambiar el rumbo de todo el SEN para colocar al centro el máximo logro de aprendizaje de niñas, niños, adolescentes y jóvenes",
    "trampa_comun": "Es objetivo del Art. 11. No lo confundas con la 'mejora continua' ni con los fines del Art. 15."
  },
  {
    "id": "O3",
    "tipo": "OBJETIVO",
    "nombre_corto": "Incidir en la cultura educativa mediante la corresponsabilidad",
    "frase_completa": "(Art. 11) ...Tendrá como objetivos... incidir en la cultura educativa mediante la corresponsabilidad...",
    "fragmento": "transformar la manera de entender la educación haciendo que toda la comunidad asuma su parte",
    "trampa_comun": "Palabra firma: CORRESPONSABILIDAD. Se confunde con la participación de madres y padres (Art. 128-129)."
  },
  {
    "id": "O4",
    "tipo": "OBJETIVO",
    "nombre_corto": "Impulsar transformaciones sociales en la escuela y la comunidad",
    "frase_completa": "(Art. 11) ...Tendrá como objetivos... impulsar transformaciones sociales dentro de la escuela y en la comunidad.",
    "fragmento": "lograr que la educación genere cambios sociales que trasciendan el aula hacia la comunidad",
    "trampa_comun": "Firma: TRANSFORMACIONES SOCIALES + ESCUELA Y COMUNIDAD. Es objetivo (Art. 11), no fin (Art. 15)."
  },
  // ═══════════════════════════════════════════════════════════
  // DESARROLLO HUMANO INTEGRAL - DHI (Art. 12 LGE) - 5 propósitos
  // ═══════════════════════════════════════════════════════════
  {
    "id": "D1",
    "tipo": "DHI",
    "nombre_corto": "Contribuir a la formación del pensamiento crítico, a la transformación y al crecimiento solidario de la sociedad, enfatizando el trabajo en equipo y el aprendizaje colaborativo.",
    "frase_completa": "(Art. 12, fr. I) En la prestación de los servicios educativos se impulsará el desarrollo humano integral para: contribuir a la formación del pensamiento crítico, a la transformación y al crecimiento solidario de la sociedad, enfatizando el trabajo en equipo y el aprendizaje colaborativo.",
    "fragmento": "enfatizando el trabajo en equipo y el aprendizaje colaborativo",
    "trampa_comun": "Firma: TRABAJO EN EQUIPO + APRENDIZAJE COLABORATIVO. Es propósito del DHI (Art. 12), no fin ni criterio."
  },
  {
    "id": "D2",
    "tipo": "DHI",
    "nombre_corto": "Propiciar un diálogo continuo entre las humanidades, las artes, la ciencia, la tecnología y la innovación como factores del bienestar y la transformación social.",
    "frase_completa": "(Art. 12, fr. II) ...se impulsará el desarrollo humano integral para: propiciar un diálogo continuo entre las humanidades, las artes, la ciencia, la tecnología y la innovación como factores del bienestar y la transformación social.",
    "fragmento": "diálogo continuo entre las humanidades, las artes, la ciencia, la tecnología y la innovación",
    "trampa_comun": "Firma: HUMANIDADES + ARTES + CIENCIA + TECNOLOGÍA + INNOVACIÓN como factores de bienestar."
  },
  {
    "id": "D3",
    "tipo": "DHI",
    "nombre_corto": "Fortalecer el tejido social para evitar la corrupción, mediante la honestidad y la integridad, y favorecer una justa distribución del ingreso.",
    "frase_completa": "(Art. 12, fr. III) ...para: fortalecer el tejido social para evitar la corrupción, a través del fomento de la honestidad y la integridad, además de proteger la naturaleza, impulsar el desarrollo en lo social, ambiental, económico, así como favorecer la generación de capacidades productivas y fomentar una justa distribución del ingreso.",
    "fragmento": "fortalecer el tejido social para evitar la corrupción... fomentar una justa distribución del ingreso",
    "trampa_comun": "Firma: TEJIDO SOCIAL + EVITAR LA CORRUPCIÓN + JUSTA DISTRIBUCIÓN DEL INGRESO."
  },
  {
    "id": "D4",
    "tipo": "DHI",
    "nombre_corto": "Combatir las causas de discriminación y violencias, especialmente las que se ejercen contra niñas, niños, adolescentes y mujeres.",
    "frase_completa": "(Art. 12, fr. IV, reformada DOF 15-ene-2026) ...para: combatir las causas de discriminación y violencias en las diferentes regiones del país, especialmente las que se ejercen contra las niñas, niños, adolescentes y las mujeres, de conformidad con los deberes reforzados del Estado de protección de este sector de la población.",
    "fragmento": "combatir las causas de discriminación y violencias... especialmente las que se ejercen contra las niñas, niños, adolescentes y las mujeres",
    "trampa_comun": "Firma: COMBATIR DISCRIMINACIÓN Y VIOLENCIAS + MUJERES. Fracción reformada el 15-ene-2026."
  },
  {
    "id": "D5",
    "tipo": "DHI",
    "nombre_corto": "Alentar la construcción de relaciones sociales, económicas y culturales con base en el respeto de los derechos humanos.",
    "frase_completa": "(Art. 12, fr. V) ...para: alentar la construcción de relaciones sociales, económicas y culturales con base en el respeto de los derechos humanos.",
    "fragmento": "construcción de relaciones sociales, económicas y culturales con base en el respeto de los derechos humanos",
    "trampa_comun": "Firma: RELACIONES SOCIALES, ECONÓMICAS Y CULTURALES + DERECHOS HUMANOS."
  }
];

export const TIPOS_INFO = {
  FIN: {
    nombre: "Fin de la educación",
    singular: "fin",
    descripcion: "Art. 15 LGE",
    emoji: "🎯",
    display: "frase",
  },
  CRITERIO: {
    nombre: "Criterio de la educación",
    singular: "criterio",
    descripcion: "Art. 16 LGE",
    emoji: "🛡️",
    display: "corto",
  },
  OBJETIVO: {
    nombre: "Objetivo de la NEM",
    singular: "objetivo",
    descripcion: "Art. 11 LGE",
    emoji: "🧭",
    display: "corto",
  },
  DHI: {
    nombre: "Propósito del DHI",
    singular: "propósito",
    descripcion: "Art. 12 LGE",
    emoji: "🌱",
    display: "frase",
  },
};

// ═══════════════════════════════════════════════════════════
// DERECHOS Y OBLIGACIONES DE MADRES, PADRES O TUTORES
// Art. 128 (derechos) y Art. 129 (obligaciones) LGE
// Modo CLASIFICAR: arriba la palabra clave, abajo Derecho / Obligación
// ═══════════════════════════════════════════════════════════
export const DERECHOS_OBLIGACIONES = [
  { "id": "DR1", "clase": "DERECHO", "articulo": "Art. 128 · I", "palabra_clave": "Obtener inscripción en escuelas públicas para sus hijas, hijos o pupilos", "texto": "Obtener inscripción en escuelas públicas para que sus hijas, hijos o pupilos menores de dieciocho años reciban la educación preescolar, primaria, secundaria, media superior y, en su caso, inicial.", "trampa": "Es DERECHO: el padre tiene derecho a que le inscriban al hijo. No confundir con la OBLIGACIÓN de hacer que reciba educación (Art. 129 I)." },
  { "id": "DR2", "clase": "DERECHO", "articulo": "Art. 128 · II", "palabra_clave": "Participar con las autoridades de la escuela ante cualquier problema de la educación de sus hijos", "texto": "Participar activamente con las autoridades de la escuela en cualquier problema relacionado con la educación de sus hijas, hijos o pupilos, a fin de abocarse a su solución.", "trampa": "DERECHO a participar ANTE UN PROBLEMA. Cuidado: 'participar en el proceso educativo revisando progreso' es OBLIGACIÓN (Art. 129 II)." },
  { "id": "DR3", "clase": "DERECHO", "articulo": "Art. 128 · III", "palabra_clave": "Colaborar con las autoridades escolares al menos una vez al mes", "texto": "Colaborar con las autoridades escolares, al menos una vez al mes, para la superación de los educandos y en el mejoramiento de los establecimientos educativos.", "trampa": "TRAMPA BRUTAL: 'colaborar al menos una vez al mes' es DERECHO (Art. 128 III). 'Colaborar en las actividades que realice la institución' es OBLIGACIÓN (Art. 129 III)." },
  { "id": "DR4", "clase": "DERECHO", "articulo": "Art. 128 · IV", "palabra_clave": "Formar parte de las asociaciones de madres y padres de familia", "texto": "Formar parte de las asociaciones de madres y padres de familia y de los consejos de participación escolar o su equivalente.", "trampa": "DERECHO de asociación y participación escolar." },
  { "id": "DR5", "clase": "DERECHO", "articulo": "Art. 128 · V", "palabra_clave": "Opinar sobre las contraprestaciones (colegiaturas) en escuelas particulares", "texto": "Opinar, en los casos de la educación que impartan los particulares, en relación con las contraprestaciones que las escuelas fijen.", "trampa": "DERECHO exclusivo frente a escuelas particulares: opinar sobre colegiaturas." },
  { "id": "DR6", "clase": "DERECHO", "articulo": "Art. 128 · VI", "palabra_clave": "Conocer el nombre del personal docente de la escuela", "texto": "Conocer el nombre del personal docente y empleados adscritos en la escuela en la que estén inscritos sus hijas, hijos o pupilos.", "trampa": "DERECHO a la información: conocer quién atiende a sus hijos." },
  { "id": "DR7", "clase": "DERECHO", "articulo": "Art. 128 · VII", "palabra_clave": "Conocer los criterios y resultados de las evaluaciones de la escuela", "texto": "Conocer los criterios y resultados de las evaluaciones de la escuela a la que asistan sus hijas, hijos o pupilos.", "trampa": "DERECHO a conocer evaluaciones. Cuidado: INFORMAR cambios de conducta es OBLIGACIÓN (Art. 129 IV)." },
  { "id": "DR8", "clase": "DERECHO", "articulo": "Art. 128 · VIII", "palabra_clave": "Conocer los planes y programas de estudio y opinar sobre ellos", "texto": "Conocer de los planes y programas de estudio proporcionados por el plantel educativo, sobre los cuales podrán emitir su opinión.", "trampa": "DERECHO a conocer planes y programas y emitir opinión." },
  { "id": "DR9", "clase": "DERECHO", "articulo": "Art. 128 · XI", "palabra_clave": "Manifestar inconformidad por irregularidades o condiciones físicas de la escuela", "texto": "Manifestar su inconformidad ante las autoridades educativas sobre cualquier irregularidad del plantel y sobre las condiciones físicas de las escuelas.", "trampa": "DERECHO a inconformarse por irregularidades y condiciones físicas del plantel." },
  { "id": "OB1", "clase": "OBLIGACION", "articulo": "Art. 129 · I", "palabra_clave": "Hacer que sus hijos reciban la educación obligatoria", "texto": "Hacer que sus hijas, hijos o pupilos menores de dieciocho años reciban la educación preescolar, primaria, secundaria, media superior y, en su caso, inicial.", "trampa": "OBLIGACIÓN base. No confundir con el DERECHO a obtener inscripción (Art. 128 I)." },
  { "id": "OB2", "clase": "OBLIGACION", "articulo": "Art. 129 · II", "palabra_clave": "Participar en el proceso educativo revisando progreso, desempeño y conducta", "texto": "Participar en el proceso educativo de sus hijas, hijos o pupilos, al revisar su progreso, desempeño y conducta, velando siempre por su bienestar y desarrollo.", "trampa": "OBLIGACIÓN: revisar progreso, desempeño y conducta. Distinto del DERECHO a participar ante un problema (Art. 128 II)." },
  { "id": "OB3", "clase": "OBLIGACION", "articulo": "Art. 129 · III", "palabra_clave": "Colaborar con las instituciones en las actividades que realicen", "texto": "Colaborar con las instituciones educativas en las que estén inscritos sus hijas, hijos o pupilos, en las actividades que dichas instituciones realicen.", "trampa": "TRAMPA: colaborar EN LAS ACTIVIDADES es OBLIGACIÓN (Art. 129 III); colaborar 'al menos una vez al mes' es DERECHO (Art. 128 III)." },
  { "id": "OB4", "clase": "OBLIGACION", "articulo": "Art. 129 · IV", "palabra_clave": "Informar a las autoridades los cambios en la conducta y actitud del educando", "texto": "Informar a las autoridades educativas los cambios que se presenten en la conducta y actitud de los educandos, para que se apliquen los estudios correspondientes.", "trampa": "OBLIGACIÓN de informar cambios de conducta. Cuidado: CONOCER evaluaciones es DERECHO (Art. 128 VII)." },
  { "id": "OB5", "clase": "OBLIGACION", "articulo": "Art. 129 · V", "palabra_clave": "Acudir a los llamados de las autoridades sobre progreso, desempeño y conducta", "texto": "Acudir a los llamados de las autoridades educativas y escolares relacionados con la revisión del progreso, desempeño y conducta de sus hijas, hijos o pupilos.", "trampa": "OBLIGACIÓN: acudir cuando la escuela cita a revisión." },
  { "id": "OB6", "clase": "OBLIGACION", "articulo": "Art. 129 · VI", "palabra_clave": "Promover que sus hijos practiquen actividades físicas, deportivas y recreativas", "texto": "Promover la participación de sus hijas, hijos o pupilos en la práctica de actividades físicas, de recreación, deportivas y de educación física, como medio de cohesión familiar y comunitaria.", "trampa": "OBLIGACIÓN: promover actividad física, deporte y recreación." }
];

export const CLASES_INFO = {
  DERECHO: { nombre: "Derecho", articulo: "Art. 128 LGE", emoji: "✅", color: "#16a34a" },
  OBLIGACION: { nombre: "Obligación", articulo: "Art. 129 LGE", emoji: "📋", color: "#D85A0A" },
};
