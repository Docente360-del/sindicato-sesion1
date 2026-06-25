'use client';

import { useState } from 'react';

const CLAVE = '3333';
const TITULO = 'Repaso Integral NEM';
const SUBTITULO = 'Plan 2022 \u00b7 16 reactivos';

const REACTIVOS = [
  {
    n: 1,
    tipo: 'opcion',
    enunciado:
      'Cuando el colectivo analiza el contexto escuela\u2013comunidad para decidir qu\u00e9 atender, trabaja el plano de ______ ; cuando incorpora contenidos locales no previstos en el Programa Sint\u00e9tico y les asocia PDA, trabaja el plano de ______ . \u00bfQu\u00e9 opci\u00f3n completa correctamente ambos espacios?',
    opciones: [
      'contextualizaci\u00f3n / codise\u00f1o',
      'lectura de la realidad / codise\u00f1o',
      'lectura de la realidad / contextualizaci\u00f3n',
    ],
    correcta: 1,
    pista:
      'El Programa Anal\u00edtico tiene tres planos. LECTURA DE LA REALIDAD es analizar el contexto escuela\u2013comunidad para decidir qu\u00e9 atender. CODISE\u00d1O es incorporar contenidos locales no previstos en el Programa Sint\u00e9tico y asociarles PDA. La contextualizaci\u00f3n solo sit\u00faa los contenidos que YA existen en el Sint\u00e9tico.',
  },
  {
    n: 2,
    tipo: 'opcion',
    enunciado:
      'El colectivo de una secundaria decide articular sus proyectos a partir de las necesidades, saberes y problemas del barrio, de modo que la escuela y su entorno se vinculen y el aprendizaje tenga sentido social. \u00bfQu\u00e9 planteamiento de la Nueva Escuela Mexicana sustenta esta decisi\u00f3n?',
    opciones: [
      'La autonom\u00eda curricular como libre elecci\u00f3n de contenidos por la escuela.',
      'La gesti\u00f3n administrativa como eje de la organizaci\u00f3n escolar.',
      'La comunidad como el n\u00facleo integrador de los procesos educativos.',
    ],
    correcta: 2,
    pista:
      'En la NEM la COMUNIDAD es el n\u00facleo integrador de los procesos educativos: la escuela articula sus proyectos con las necesidades, saberes y problemas de su entorno. No es autonom\u00eda como libre elecci\u00f3n de contenidos, ni gesti\u00f3n administrativa.',
  },
  {
    n: 3,
    tipo: 'opcion',
    enunciado:
      'Ante una noticia viral que circula en el grupo, una maestra de Formaci\u00f3n C\u00edvica organiza que el alumnado contraste la informaci\u00f3n con distintas fuentes, identifique qui\u00e9n la emite y con qu\u00e9 intenci\u00f3n. \u00bfQu\u00e9 eje articulador del Plan 2022 orienta principalmente esta pr\u00e1ctica?',
    opciones: [
      'Apropiaci\u00f3n de las culturas a trav\u00e9s de la lectura y la escritura.',
      'Inclusi\u00f3n.',
      'Pensamiento cr\u00edtico.',
    ],
    correcta: 2,
    pista:
      'Contrastar la informaci\u00f3n con distintas fuentes, identificar qui\u00e9n la emite y con qu\u00e9 intenci\u00f3n corresponde al eje PENSAMIENTO CR\u00cdTICO. No es Inclusi\u00f3n ni Apropiaci\u00f3n de las culturas.',
  },
  {
    n: 4,
    tipo: 'opcion',
    enunciado:
      'Para que todo el grupo acceda a un mismo contenido, la maestra ofrece el texto en audio, video e impreso (principio de ________), permite que demuestren lo aprendido con un dibujo, un cartel o una exposici\u00f3n (principio de ________) y propone retos con distintos niveles de inter\u00e9s (principio de implicaci\u00f3n). \u00bfQu\u00e9 opci\u00f3n completa los espacios?',
    opciones: [
      'acci\u00f3n y expresi\u00f3n / representaci\u00f3n',
      'representaci\u00f3n / acci\u00f3n y expresi\u00f3n',
      'implicaci\u00f3n / representaci\u00f3n',
    ],
    correcta: 1,
    pista:
      'DUA: ofrecer el contenido en audio, video e impreso es M\u00daLTIPLES FORMAS DE REPRESENTACI\u00d3N. Permitir que demuestren con dibujo, cartel o exposici\u00f3n es M\u00daLTIPLES FORMAS DE ACCI\u00d3N Y EXPRESI\u00d3N. La implicaci\u00f3n se refiere a la motivaci\u00f3n y el inter\u00e9s.',
  },
  {
    n: 5,
    tipo: 'ordenar',
    enunciado:
      'Ante un caso de presunto acoso escolar, ordene las acciones que el personal debe seguir conforme a un protocolo de actuaci\u00f3n:',
    pasos: [
      '1. Activar la protecci\u00f3n inmediata para resguardar a la persona afectada.',
      '2. Detectar e identificar la situaci\u00f3n de violencia mediante la observaci\u00f3n o el reporte.',
      '3. Dar seguimiento y acompa\u00f1amiento a las personas involucradas.',
      '4. Informar a las autoridades escolares y a las familias, y canalizar a las instancias correspondientes.',
    ],
    opciones: ['1, 2, 4, 3', '2, 4, 1, 3', '2, 1, 4, 3'],
    correcta: 2,
    pista:
      'Primero (2) detectar e identificar la situaci\u00f3n; luego (1) activar la protecci\u00f3n inmediata de la persona afectada; despu\u00e9s (4) informar a autoridades y familias y canalizar; y al final (3) dar seguimiento y acompa\u00f1amiento.',
  },
  {
    n: 6,
    tipo: 'opcion',
    enunciado:
      'Una maestra de tercero de primaria, antes de abordar el tema de fracciones, pide a sus alumnos que repartan en partes iguales una pizza y un pastel entre sus familiares, recuperando lo que ya saben de \u201crepartir\u201d en casa para conectarlo con el concepto nuevo. \u00bfQu\u00e9 principio del aprendizaje sustenta esta decisi\u00f3n?',
    opciones: [
      'El aprendizaje significativo, que vincula el contenido nuevo con los conocimientos previos del alumnado.',
      'La zona de desarrollo pr\u00f3ximo, que define lo que el alumno logra con la ayuda de un par m\u00e1s capaz.',
      'El aprendizaje por descubrimiento, que parte de la exploraci\u00f3n aut\u00f3noma sin estructura previa.',
    ],
    correcta: 0,
    pista:
      'Recuperar lo que ya saben de \u201crepartir\u201d en casa para conectarlo con las fracciones es APRENDIZAJE SIGNIFICATIVO: vincula el contenido nuevo con los conocimientos previos. La ZDP implica el apoyo de un par m\u00e1s capaz; el descubrimiento parte de la exploraci\u00f3n aut\u00f3noma.',
  },
  {
    n: 7,
    tipo: 'opcion',
    enunciado:
      'En la academia de Ciencias, una maestra observa que el concepto de \u201cecosistema\u201d se retoma cada a\u00f1o con mayor profundidad: en primero como \u201cseres vivos y su entorno\u201d y en tercero como \u201cflujos de materia y energ\u00eda\u201d. \u00bfQu\u00e9 noci\u00f3n del dise\u00f1o curricular describe MEJOR esta organizaci\u00f3n?',
    opciones: [
      'La secuenciaci\u00f3n lineal de contenidos, que evita repetir temas ya vistos para optimizar el tiempo.',
      'El curr\u00edculo en espiral, que revisita los mismos conceptos con creciente complejidad a lo largo de la trayectoria.',
      'La gradualidad por dificultad, que ordena los contenidos del m\u00e1s sencillo al m\u00e1s complejo dentro de un mismo grado.',
    ],
    correcta: 1,
    pista:
      'Revisitar el mismo concepto con creciente complejidad a lo largo de la trayectoria es el CURR\u00cdCULO EN ESPIRAL. La secuenciaci\u00f3n lineal evita repetir; la gradualidad por dificultad ordena dentro de un mismo grado.',
  },
  {
    n: 8,
    tipo: 'opcion',
    enunciado:
      'En un jard\u00edn de ni\u00f1os, la maestra pide a cada ni\u00f1o que comente qu\u00e9 fue lo que m\u00e1s se le dificult\u00f3 de su propio trabajo (________) y luego organiza que, en parejas, comenten sus dibujos con respeto (________). \u00bfQu\u00e9 opci\u00f3n completa los espacios?',
    opciones: [
      'heteroevaluaci\u00f3n / autoevaluaci\u00f3n',
      'autoevaluaci\u00f3n / coevaluaci\u00f3n',
      'coevaluaci\u00f3n / heteroevaluaci\u00f3n',
    ],
    correcta: 1,
    pista:
      'Que cada ni\u00f1o valore su PROPIO trabajo es AUTOEVALUACI\u00d3N. Que en parejas comenten sus dibujos es COEVALUACI\u00d3N (entre pares). La heteroevaluaci\u00f3n la realiza el docente u otro agente externo.',
  },
  {
    n: 9,
    tipo: 'opcion',
    enunciado:
      'En un proyecto, el alumnado de cuarto de primaria escribe, revisa y publica un peri\u00f3dico mural para comunicar a la comunidad los resultados de una investigaci\u00f3n. \u00bfA qu\u00e9 campo formativo del Plan 2022 corresponde principalmente esta pr\u00e1ctica?',
    opciones: [
      'Saberes y Pensamiento Cient\u00edfico.',
      '\u00c9tica, Naturaleza y Sociedades.',
      'Lenguajes.',
    ],
    correcta: 2,
    pista:
      'Escribir, revisar y publicar un peri\u00f3dico mural para comunicar corresponde al campo formativo LENGUAJES, centrado en la comunicaci\u00f3n y la producci\u00f3n de textos.',
  },
  {
    n: 10,
    tipo: 'opcion',
    enunciado:
      'En un proyecto, el alumnado mide, registra y compara el crecimiento de plantas bajo distintas condiciones, y formula explicaciones a partir de los datos obtenidos. \u00bfA qu\u00e9 campo formativo corresponde principalmente?',
    opciones: [
      'De lo Humano y lo Comunitario.',
      'Lenguajes.',
      'Saberes y Pensamiento Cient\u00edfico.',
    ],
    correcta: 2,
    pista:
      'Medir, registrar, comparar y formular explicaciones a partir de datos corresponde al campo SABERES Y PENSAMIENTO CIENT\u00cdFICO.',
  },
  {
    n: 11,
    tipo: 'opcion',
    enunciado:
      'En preescolar, la maestra propone juegos de equilibrio, lanzamiento y coordinaci\u00f3n, y conversa con los ni\u00f1os sobre c\u00f3mo cuidar su cuerpo y colaborar con los dem\u00e1s. \u00bfA qu\u00e9 campo formativo corresponde principalmente esta pr\u00e1ctica?',
    opciones: [
      'De lo Humano y lo Comunitario.',
      '\u00c9tica, Naturaleza y Sociedades.',
      'Vida saludable.',
    ],
    correcta: 0,
    pista:
      'Juegos de equilibrio, lanzamiento y coordinaci\u00f3n, junto con el cuidado del cuerpo y la colaboraci\u00f3n, corresponden al campo DE LO HUMANO Y LO COMUNITARIO. Ojo: \u201cVida saludable\u201d NO es un campo formativo del Plan 2022; es la trampa.',
  },
  {
    n: 12,
    tipo: 'opcion',
    enunciado:
      'El ________ es de alcance nacional y lo emite la autoridad educativa federal (SEP); el ________ lo construye el colectivo docente en el Consejo T\u00e9cnico Escolar para contextualizarlo a su comunidad. \u00bfQu\u00e9 opci\u00f3n completa los espacios?',
    opciones: [
      'Programa Anal\u00edtico / Programa Sint\u00e9tico',
      'Programa Sint\u00e9tico / Programa Anal\u00edtico',
      'Programa Sint\u00e9tico / Programa Escolar de Mejora Continua',
    ],
    correcta: 1,
    pista:
      'El PROGRAMA SINT\u00c9TICO es de alcance nacional y lo emite la SEP. El PROGRAMA ANAL\u00cdTICO lo construye el colectivo docente en el CTE para contextualizarlo a su comunidad.',
  },
  {
    n: 13,
    tipo: 'opcion',
    enunciado:
      'Una maestra, despu\u00e9s de tomar en cuenta el contexto de su comunidad, realiz\u00f3 un proyecto en el que los alumnos expresan y comunican su punto de vista sobre el manejo de la basura en su comunidad, externando diferentes opiniones y realizando un debate que les permita contrastar puntos de vista y proponer soluciones para atender esta situaci\u00f3n. \u00bfCon qu\u00e9 eje articulador se relaciona lo anterior?',
    opciones: ['Lenguajes', 'Pensamiento cr\u00edtico', 'Interculturalidad cr\u00edtica'],
    correcta: 1,
    pista:
      'Debatir, contrastar puntos de vista y proponer soluciones activa el eje PENSAMIENTO CR\u00cdTICO. Aunque hay comunicaci\u00f3n, el eje que se pregunta es el del an\u00e1lisis y la toma de postura (Lenguajes es campo formativo, no el eje aqu\u00ed).',
  },
  {
    n: 14,
    tipo: 'opcion',
    enunciado:
      'En preescolar, la educadora organiza un proyecto en el que ni\u00f1as y ni\u00f1os cocinan recetas saludables de sus familias. Durante el trabajo, dialoga con el grupo sobre por qu\u00e9 suele pensarse que cocinar o limpiar son tareas \u201cde ni\u00f1as\u201d y reparar cosas \u201cde ni\u00f1os\u201d, y los invita a cuestionar esa idea. \u00bfQu\u00e9 eje articulador del Plan 2022 se favorece principalmente con este cuestionamiento?',
    opciones: ['Igualdad de g\u00e9nero.', 'Vida saludable.', 'Interculturalidad cr\u00edtica.'],
    correcta: 0,
    pista:
      'Cuestionar la idea de que cocinar/limpiar es \u201cde ni\u00f1as\u201d y reparar es \u201cde ni\u00f1os\u201d favorece el eje IGUALDAD DE G\u00c9NERO. \u201cVida saludable\u201d es la trampa por las recetas saludables.',
  },
  {
    n: 15,
    tipo: 'opcion',
    enunciado:
      'En un grupo regular hay un alumno con discapacidad visual. Con apoyo de la USAER, la maestra ofrece el mismo contenido en braille, en audio, con material en relieve y tambi\u00e9n impreso, para que el alumno pueda acceder a la informaci\u00f3n por distintas v\u00edas. \u00bfQu\u00e9 principio del Dise\u00f1o Universal para el Aprendizaje (DUA) aplica al ofrecer varios formatos del mismo contenido?',
    opciones: [
      'M\u00faltiples formas de representaci\u00f3n.',
      'M\u00faltiples formas de implicaci\u00f3n.',
      'Ajuste razonable individual.',
    ],
    correcta: 0,
    pista:
      'Ofrecer el mismo contenido en braille, audio, relieve e impreso son M\u00daLTIPLES FORMAS DE REPRESENTACI\u00d3N del DUA (varias v\u00edas de acceso a la misma informaci\u00f3n). El ajuste razonable es una medida individual espec\u00edfica, distinta del principio general.',
  },
  {
    n: 16,
    tipo: 'ordenar',
    enunciado: 'Ordene las fases para elaborar el Programa Escolar de Mejora Continua (PEMC):',
    pasos: [
      '1. Definir objetivos y metas.',
      '2. Realizar el diagn\u00f3stico de la escuela.',
      '3. Dar seguimiento y evaluar los avances.',
      '4. Establecer las acciones para lograr las metas.',
    ],
    opciones: ['2, 1, 4, 3', '1, 2, 4, 3', '2, 4, 1, 3'],
    correcta: 0,
    pista:
      'PEMC: primero (2) el diagn\u00f3stico de la escuela; luego (1) definir objetivos y metas; despu\u00e9s (4) establecer las acciones; y al final (3) dar seguimiento y evaluar los avances.',
  },
];

const NARANJA = 'var(--snte-naranja, #F47216)';
const NARANJA_DARK = 'var(--snte-naranja-dark, #D85A0A)';
const NARANJA_SOFT = 'var(--snte-naranja-soft, #FDD9B5)';
const NARANJA_BG = 'var(--snte-naranja-bg, #FFF4EB)';
const VERDE = 'var(--verde-acierto, #16A34A)';
const ROJO = 'var(--rojo-error, #DC2626)';
const TXT = 'var(--texto-principal, #1E293B)';
const TXT2 = 'var(--texto-secundario, #475569)';
const BORDE = 'var(--borde, #E2E8F0)';

export default function Page() {
  const [pin, setPin] = useState('');
  const [ok, setOk] = useState(false);
  const [errPin, setErrPin] = useState(false);

  const [idx, setIdx] = useState(0);
  const [resp, setResp] = useState(Array(REACTIVOS.length).fill(null));
  const [enviado, setEnviado] = useState(false);

  function validar() {
    if (pin.trim() === CLAVE) {
      setOk(true);
      setErrPin(false);
    } else {
      setErrPin(true);
    }
  }

  function elegir(opcionIdx) {
    setResp((prev) => {
      const copia = prev.slice();
      copia[idx] = opcionIdx;
      return copia;
    });
  }

  function reiniciar() {
    setResp(Array(REACTIVOS.length).fill(null));
    setEnviado(false);
    setIdx(0);
  }

  const contestadas = resp.filter((r) => r !== null).length;
  const aciertos = REACTIVOS.reduce(
    (acc, r, i) => acc + (resp[i] === r.correcta ? 1 : 0),
    0
  );
  const porcentaje = Math.round((aciertos / REACTIVOS.length) * 100);

  // ===== Pantalla de clave =====
  if (!ok) {
    return (
      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          background: NARANJA_BG,
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '420px',
            background: '#fff',
            border: `1px solid ${BORDE}`,
            borderRadius: '20px',
            padding: '32px 28px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.5px',
              color: NARANJA_DARK,
              textTransform: 'uppercase',
            }}
          >
            SNTE Secci\u00f3n 21
          </div>
          <h1 style={{ fontSize: '24px', fontWeight: 800, color: TXT, margin: '10px 0 4px' }}>
            {TITULO}
          </h1>
          <p style={{ color: TXT2, fontSize: '14px', marginBottom: '22px' }}>{SUBTITULO}</p>
          <input
            type="password"
            inputMode="numeric"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') validar();
            }}
            placeholder="Clave de acceso"
            style={{
              width: '100%',
              padding: '14px 16px',
              fontSize: '18px',
              textAlign: 'center',
              letterSpacing: '4px',
              border: `2px solid ${errPin ? ROJO : BORDE}`,
              borderRadius: '12px',
              outline: 'none',
              color: TXT,
            }}
          />
          {errPin && (
            <p style={{ color: ROJO, fontSize: '13px', marginTop: '10px' }}>
              Clave incorrecta. Int\u00e9ntalo de nuevo.
            </p>
          )}
          <button
            onClick={validar}
            style={{
              marginTop: '18px',
              width: '100%',
              padding: '14px',
              fontSize: '16px',
              fontWeight: 700,
              color: '#fff',
              background: NARANJA,
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
            }}
          >
            Entrar al examen
          </button>
        </div>
      </main>
    );
  }

  // ===== Pantalla de resultados =====
  if (enviado) {
    return (
      <main style={{ minHeight: '100vh', background: NARANJA_BG, padding: '24px 16px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div
            style={{
              background: '#fff',
              border: `1px solid ${BORDE}`,
              borderRadius: '20px',
              padding: '28px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            }}
          >
            <div
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: NARANJA_DARK,
                textTransform: 'uppercase',
              }}
            >
              Resultado
            </div>
            <div style={{ fontSize: '46px', fontWeight: 900, color: NARANJA, margin: '6px 0' }}>
              {aciertos}/{REACTIVOS.length}
            </div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: TXT }}>{porcentaje}% de aciertos</div>
            <button
              onClick={reiniciar}
              style={{
                marginTop: '18px',
                padding: '12px 22px',
                fontSize: '15px',
                fontWeight: 700,
                color: '#fff',
                background: NARANJA,
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
              }}
            >
              Volver a intentar
            </button>
          </div>

          <h2 style={{ fontSize: '18px', fontWeight: 800, color: TXT, margin: '26px 6px 12px' }}>
            Revisi\u00f3n con justificaci\u00f3n
          </h2>

          {REACTIVOS.map((r, i) => {
            const elegida = resp[i];
            const correcto = elegida === r.correcta;
            return (
              <div
                key={r.n}
                style={{
                  background: '#fff',
                  border: `1px solid ${BORDE}`,
                  borderLeft: `6px solid ${correcto ? VERDE : ROJO}`,
                  borderRadius: '14px',
                  padding: '18px 20px',
                  marginBottom: '14px',
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: 700, color: NARANJA_DARK, marginBottom: '6px' }}>
                  Reactivo {r.n} {' \u00b7 '}
                  <span style={{ color: correcto ? VERDE : ROJO }}>
                    {correcto ? 'Correcta' : 'Incorrecta'}
                  </span>
                </div>
                <p style={{ fontSize: '14px', color: TXT, marginBottom: '10px', lineHeight: 1.5 }}>
                  {r.enunciado}
                </p>

                {r.tipo === 'ordenar' && (
                  <ul style={{ margin: '0 0 10px', paddingLeft: '18px', color: TXT2, fontSize: '13px' }}>
                    {r.pasos.map((p, k) => (
                      <li key={k} style={{ marginBottom: '3px' }}>
                        {p}
                      </li>
                    ))}
                  </ul>
                )}

                <div style={{ fontSize: '14px', marginBottom: '4px' }}>
                  <span style={{ color: TXT2 }}>Tu respuesta: </span>
                  <strong style={{ color: correcto ? VERDE : ROJO }}>
                    {elegida === null ? 'Sin contestar' : r.opciones[elegida]}
                  </strong>
                </div>
                {!correcto && (
                  <div style={{ fontSize: '14px', marginBottom: '4px' }}>
                    <span style={{ color: TXT2 }}>Respuesta correcta: </span>
                    <strong style={{ color: VERDE }}>{r.opciones[r.correcta]}</strong>
                  </div>
                )}

                <div
                  style={{
                    marginTop: '10px',
                    background: NARANJA_BG,
                    border: `1px solid ${NARANJA_SOFT}`,
                    borderRadius: '10px',
                    padding: '12px 14px',
                    fontSize: '13.5px',
                    color: TXT,
                    lineHeight: 1.55,
                  }}
                >
                  <strong style={{ color: NARANJA_DARK }}>Por qu\u00e9: </strong>
                  {r.pista}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    );
  }

  // ===== Pantalla de examen =====
  const r = REACTIVOS[idx];
  return (
    <main style={{ minHeight: '100vh', background: NARANJA_BG, padding: '20px 16px 40px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '14px' }}>
          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: NARANJA_DARK,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            {TITULO}
          </div>
          <div style={{ fontSize: '13px', color: TXT2 }}>
            Pregunta {idx + 1} de {REACTIVOS.length} {' \u00b7 '} {contestadas} contestadas
          </div>
        </div>

        {/* barra de progreso */}
        <div style={{ height: '8px', background: '#fff', borderRadius: '99px', overflow: 'hidden', marginBottom: '18px', border: `1px solid ${BORDE}` }}>
          <div
            style={{
              height: '100%',
              width: `${((idx + 1) / REACTIVOS.length) * 100}%`,
              background: NARANJA,
              transition: 'width 0.2s',
            }}
          />
        </div>

        {/* tarjeta de pregunta */}
        <div
          style={{
            background: '#fff',
            border: `1px solid ${BORDE}`,
            borderRadius: '18px',
            padding: '22px 22px 24px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
          }}
        >
          <p style={{ fontSize: '16px', fontWeight: 600, color: TXT, lineHeight: 1.55, margin: 0 }}>
            {r.enunciado}
          </p>

          {r.tipo === 'ordenar' && (
            <div
              style={{
                marginTop: '14px',
                background: NARANJA_BG,
                border: `1px solid ${NARANJA_SOFT}`,
                borderRadius: '12px',
                padding: '14px 16px',
              }}
            >
              {r.pasos.map((p, k) => (
                <div key={k} style={{ fontSize: '14px', color: TXT, marginBottom: k === r.pasos.length - 1 ? 0 : '8px', lineHeight: 1.4 }}>
                  {p}
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {r.opciones.map((op, k) => {
              const sel = resp[idx] === k;
              const letra = String.fromCharCode(97 + k);
              return (
                <button
                  key={k}
                  onClick={() => elegir(k)}
                  style={{
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    padding: '14px 16px',
                    fontSize: '15px',
                    color: TXT,
                    background: sel ? NARANJA_BG : '#fff',
                    border: `2px solid ${sel ? NARANJA : BORDE}`,
                    borderRadius: '12px',
                    cursor: 'pointer',
                    lineHeight: 1.45,
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '13px',
                      color: sel ? '#fff' : NARANJA_DARK,
                      background: sel ? NARANJA : NARANJA_SOFT,
                      textTransform: 'uppercase',
                    }}
                  >
                    {letra}
                  </span>
                  <span>{op}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* navegacion anterior / siguiente */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginTop: '18px' }}>
          <button
            onClick={() => setIdx((v) => Math.max(0, v - 1))}
            disabled={idx === 0}
            style={{
              flex: 1,
              padding: '13px',
              fontSize: '15px',
              fontWeight: 700,
              color: idx === 0 ? '#A0AEC0' : NARANJA_DARK,
              background: '#fff',
              border: `2px solid ${BORDE}`,
              borderRadius: '12px',
              cursor: idx === 0 ? 'default' : 'pointer',
            }}
          >
            Anterior
          </button>
          {idx < REACTIVOS.length - 1 ? (
            <button
              onClick={() => setIdx((v) => Math.min(REACTIVOS.length - 1, v + 1))}
              style={{
                flex: 1,
                padding: '13px',
                fontSize: '15px',
                fontWeight: 700,
                color: '#fff',
                background: NARANJA,
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
              }}
            >
              Siguiente
            </button>
          ) : (
            <button
              onClick={() => setEnviado(true)}
              style={{
                flex: 1,
                padding: '13px',
                fontSize: '15px',
                fontWeight: 800,
                color: '#fff',
                background: VERDE,
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
              }}
            >
              Finalizar examen
            </button>
          )}
        </div>

        {/* mapa de navegacion */}
        <div
          style={{
            marginTop: '22px',
            background: '#fff',
            border: `1px solid ${BORDE}`,
            borderRadius: '14px',
            padding: '16px',
          }}
        >
          <div style={{ fontSize: '12px', fontWeight: 700, color: TXT2, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Mapa de preguntas
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {REACTIVOS.map((q, i) => {
              const actual = i === idx;
              const hecha = resp[i] !== null;
              return (
                <button
                  key={q.n}
                  onClick={() => setIdx(i)}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    fontWeight: 800,
                    fontSize: '14px',
                    cursor: 'pointer',
                    color: hecha ? '#fff' : actual ? NARANJA_DARK : TXT2,
                    background: hecha ? NARANJA : '#fff',
                    border: actual ? `2px solid ${NARANJA_DARK}` : `1px solid ${BORDE}`,
                  }}
                >
                  {q.n}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => setEnviado(true)}
            style={{
              marginTop: '14px',
              width: '100%',
              padding: '12px',
              fontSize: '14px',
              fontWeight: 700,
              color: NARANJA_DARK,
              background: NARANJA_BG,
              border: `1px solid ${NARANJA_SOFT}`,
              borderRadius: '10px',
              cursor: 'pointer',
            }}
          >
            Terminar y ver resultados ({contestadas}/{REACTIVOS.length})
          </button>
        </div>
      </div>
    </main>
  );
}
