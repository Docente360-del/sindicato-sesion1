// src/data/juego-fines-criterios.js
// JUEGO DOMINA FINES Y CRITERIOS - SNTE Seccion 21 Nuevo Leon
// 16 frases LITERALES de la LGE: 8 FINES (Art. 15) + 8 CRITERIOS (Art. 16)

export const ITEMS_LGE = [
  {
    "id": "F1",
    "tipo": "FIN",
    "nombre": "Desarrollo humano integral",
    "frase": "Contribuir al desarrollo integral y permanente del educando para que ejerza, de manera plena, sus capacidades humanas en todos los ámbitos de su vida.",
    "definicion": "Busca el despliegue pleno de las facultades cognitivas, afectivas, sociales, físicas y éticas de la persona para vivir con autonomía y dignidad.",
    "trampa_comun": "Suena al CRITERIO humanista (que también habla del desarrollo del educando), pero este FIN usa el verbo 'CONTRIBUIR' y se enfoca en CAPACIDADES HUMANAS plenas."
  },
  {
    "id": "F2",
    "tipo": "FIN",
    "nombre": "Promover el respeto a la naturaleza",
    "frase": "Promover el respeto a la naturaleza, así como contribuir a la conservación, mejoramiento y protección del medio ambiente, en favor de las generaciones presentes y futuras.",
    "definicion": "Impulsa que el educando valore, cuide y preserve la naturaleza y los seres vivos, asumiendo responsabilidad ecológica de largo plazo.",
    "trampa_comun": "Suena a la BASE de educación sostenible o al criterio Integral, pero el verbo PROMOVER y la palabra NATURALEZA (no 'medio ambiente') lo anclan al FIN."
  },
  {
    "id": "F3",
    "tipo": "FIN",
    "nombre": "Promover la cultura de paz",
    "frase": "Promover el uso del diálogo, la mediación y la resolución pacífica de conflictos en la convivencia cotidiana de la comunidad escolar.",
    "definicion": "Forma a los estudiantes en herramientas para resolver desacuerdos sin violencia, mediante el diálogo y la mediación.",
    "trampa_comun": "Suena al criterio INTERCULTURAL (que también habla de convivencia armónica), pero aquí lo central es DIÁLOGO + MEDIACIÓN + RESOLUCIÓN PACÍFICA."
  },
  {
    "id": "F4",
    "tipo": "FIN",
    "nombre": "Combatir las causas de discriminación",
    "frase": "Combatir las causas de discriminación y violencia en las diferentes regiones del país, especialmente la que se ejerce contra la niñez y las mujeres.",
    "definicion": "Identifica y enfrenta los orígenes estructurales de la discriminación para erradicarla del sistema educativo y la sociedad.",
    "trampa_comun": "Suena al criterio EQUITATIVO (combatir desigualdades), pero este FIN usa COMBATIR (acción activa) y enfatiza DISCRIMINACIÓN + VIOLENCIA contra niñez y mujeres."
  },
  {
    "id": "F5",
    "tipo": "FIN",
    "nombre": "Pensamiento crítico y solidaridad",
    "frase": "Contribuir a la formación del pensamiento crítico, a la transformación y al crecimiento solidario de la sociedad, enfatizando el trabajo en equipo y el aprendizaje colaborativo.",
    "definicion": "Forma estudiantes capaces de cuestionar la realidad, transformarla y trabajar de manera colaborativa para el bien común.",
    "trampa_comun": "Suena al criterio INTEGRAL (porque habla de formación), pero PENSAMIENTO CRÍTICO + TRANSFORMACIÓN SOCIAL son exclusivos de este FIN."
  },
  {
    "id": "F6",
    "tipo": "FIN",
    "nombre": "Aprendizaje a lo largo de la vida",
    "frase": "Estimular el aprendizaje permanente y la actitud de búsqueda del conocimiento a lo largo de la vida para el desarrollo personal y la transformación de la sociedad.",
    "definicion": "Promueve que el estudiante continúe formándose más allá de la escuela, con una actitud activa de búsqueda del conocimiento.",
    "trampa_comun": "Suena al criterio de EXCELENCIA (mejora continua), pero este FIN se enfoca en aprendizaje PERMANENTE a lo LARGO DE LA VIDA."
  },
  {
    "id": "F7",
    "tipo": "FIN",
    "nombre": "Apreciación de las manifestaciones del arte",
    "frase": "Fomentar la valoración y apreciación de las diversas manifestaciones del arte, así como el desarrollo de la creatividad artística mediante el descubrimiento y potenciación de talentos.",
    "definicion": "Cultiva la sensibilidad estética de los estudiantes mediante la apreciación, valoración y creación de obras artísticas.",
    "trampa_comun": "Suena al criterio INTEGRAL (formación amplia del educando), pero este FIN usa el verbo FOMENTAR y se enfoca específicamente en VALORACIÓN del ARTE."
  },
  {
    "id": "F8",
    "tipo": "FIN",
    "nombre": "Estilos de vida saludables",
    "frase": "Promover estilos de vida saludables, la educación para la salud, la prevención de las adicciones y el consumo responsable.",
    "definicion": "Fomenta hábitos individuales y colectivos que mantengan el bienestar físico y mental de los estudiantes.",
    "trampa_comun": "Suena al criterio INTEGRAL (formación integral), pero PROMOVER + ESTILOS DE VIDA SALUDABLES + PREVENCIÓN DE ADICCIONES son exclusivos del FIN."
  },
  {
    "id": "C1",
    "tipo": "CRITERIO",
    "nombre": "Democrático",
    "frase": "Considera al sistema de vida fundado en el constante mejoramiento económico, social y cultural del pueblo, sustentado en el respeto irrestricto de los derechos humanos.",
    "definicion": "Educa en y para la democracia como forma de vida, garantizando derechos, participación y mejora constante del bienestar social.",
    "trampa_comun": "Suena al criterio Nacional (sistema social mexicano), pero este CRITERIO se enfoca en DEMOCRACIA como forma de vida + DERECHOS HUMANOS."
  },
  {
    "id": "C2",
    "tipo": "CRITERIO",
    "nombre": "Nacional",
    "frase": "Atiende a la comprensión de nuestros problemas, al aprovechamiento sustentable de nuestros recursos, a la defensa de nuestra independencia política, al aseguramiento de nuestra independencia económica y a la continuidad y acrecentamiento de nuestra cultura.",
    "definicion": "Forma identidad nacional mediante el aprecio por la historia, los símbolos patrios, las instituciones, los recursos del país y el legado cultural mexicano.",
    "trampa_comun": "Suena a un FIN (porque habla de cultura y patria), pero las palabras ACRECENTAMIENTO DE NUESTRA CULTURA + INDEPENDENCIA son exclusivas del CRITERIO Nacional."
  },
  {
    "id": "C3",
    "tipo": "CRITERIO",
    "nombre": "Humanista",
    "frase": "Fomenta el aprecio y desarrollo integral del ser humano, su pensamiento y su capacidad de trascender, así como el respeto a la dignidad humana.",
    "definicion": "Pone al ser humano en el centro del proceso educativo, valorando su dignidad, libertad, pensamiento y capacidad de trascendencia.",
    "trampa_comun": "Suena al FIN de Desarrollo Humano Integral (ambos hablan del ser humano), pero este CRITERIO usa DIGNIDAD HUMANA + APRECIO DEL SER HUMANO + TRASCENDER."
  },
  {
    "id": "C4",
    "tipo": "CRITERIO",
    "nombre": "Equitativo",
    "frase": "Favorece el pleno ejercicio del derecho a la educación de todas las personas, combatiendo las desigualdades socioeconómicas, regionales, de capacidades y de género, para garantizar el acceso, tránsito y permanencia.",
    "definicion": "Distribuye recursos y oportunidades para que estudiantes en condiciones desiguales tengan acceso real a la educación y la concluyan.",
    "trampa_comun": "Suena al criterio INCLUSIVO (ambos atienden capacidades), pero este CRITERIO se enfoca en COMBATIR DESIGUALDADES + ACCESO, TRÁNSITO Y PERMANENCIA."
  },
  {
    "id": "C5",
    "tipo": "CRITERIO",
    "nombre": "Inclusivo",
    "frase": "Toma en cuenta las diversas capacidades, circunstancias, necesidades, estilos y ritmos de aprendizaje de los educandos para eliminar las distintas barreras al aprendizaje y a la participación; para tal efecto, el Estado proporcionará los recursos técnicos y pedagógicos necesarios.",
    "definicion": "Adapta el sistema educativo para que TODOS los estudiantes (incluidos los que tienen discapacidad o necesidades especiales) puedan aprender y participar.",
    "trampa_comun": "Suena al criterio EQUITATIVO (ambos atienden capacidades), pero este CRITERIO se enfoca en ELIMINAR BARRERAS DE APRENDIZAJE Y PARTICIPACIÓN + RECURSOS TÉCNICOS Y PEDAGÓGICOS."
  },
  {
    "id": "C6",
    "tipo": "CRITERIO",
    "nombre": "Intercultural",
    "frase": "Promueve la convivencia armónica entre personas y comunidades sobre la base del respeto a sus diferentes concepciones, opiniones, tradiciones y modos de vida y del reconocimiento de sus derechos, en un marco de inclusión social.",
    "definicion": "Educa en el diálogo respetuoso entre culturas distintas, reconociendo el valor de cada una y promoviendo la convivencia armónica entre ellas.",
    "trampa_comun": "Suena al FIN de Cultura de Paz (ambos hablan de convivencia), pero este CRITERIO usa CONCEPCIONES + OPINIONES + TRADICIONES + MODOS DE VIDA."
  },
  {
    "id": "C7",
    "tipo": "CRITERIO",
    "nombre": "Integral",
    "frase": "Educa para la vida, con el objeto de desarrollar en las personas capacidades cognitivas, socioemocionales y físicas que les permitan alcanzar su bienestar y contribuir al desarrollo social.",
    "definicion": "Forma a la persona en TODAS sus dimensiones (cognitiva, socioemocional, física) para vivir bien y aportar a la sociedad.",
    "trampa_comun": "Suena al FIN de Desarrollo Humano Integral (ambos hablan de desarrollo integral), pero este CRITERIO usa EDUCAR PARA LA VIDA + CAPACIDADES COGNITIVAS, SOCIOEMOCIONALES Y FÍSICAS."
  },
  {
    "id": "C8",
    "tipo": "CRITERIO",
    "nombre": "De excelencia",
    "frase": "Está orientado al mejoramiento integral constante que promueve el máximo logro de aprendizaje de los educandos, para el desarrollo de su pensamiento crítico y el fortalecimiento de los lazos entre escuela y comunidad.",
    "definicion": "Busca la mejora continua del sistema educativo y el máximo aprendizaje posible de cada estudiante, fortaleciendo el vínculo escuela-comunidad.",
    "trampa_comun": "Suena al FIN de Pensamiento Crítico (ambos lo mencionan), pero este CRITERIO se enfoca en MEJORAMIENTO INTEGRAL CONSTANTE + MÁXIMO LOGRO DE APRENDIZAJE."
  }
];

export const TIPOS_INFO = {
  FIN: {
    nombre: "Fin de la educación",
    emoji: "🎯",
    color: "#F47216",
  },
  CRITERIO: {
    nombre: "Criterio de la educación",
    emoji: "🛡️",
    color: "#D85A0A",
  },
};
