"use client";

import { useState } from "react";

// 23 FINALIDADES LITERALES DEL PLAN 2022 NEM
const FINALIDADES = [
  {
    "id": "L1",
    "campo": "LENGUAJES",
    "texto": "Construyan su identidad personal y social a partir del uso e interpretación de signos y símbolos lingüísticos y no lingüísticos, así como mediante una valoración crítica que les permita establecer interacciones significativas con otros.",
    "trampa": "Suena a HUMANO (porque dice 'identidad personal'). La pista clave es 'SIGNOS Y SÍMBOLOS LINGÜÍSTICOS' que solo aparece en Lenguajes."
  },
  {
    "id": "L2",
    "campo": "LENGUAJES",
    "texto": "Desarrollen un sentido estético, sensibilidad, imaginación y creatividad para expresar e interpretar emociones, ideas y mundos posibles a través del lenguaje oral y escrito, así como artístico y corporal.",
    "trampa": "Suena a ARTES (porque dice 'sentido estético'). La pista clave es 'LENGUAJE ORAL Y ESCRITO' que ancla a Lenguajes."
  },
  {
    "id": "L3",
    "campo": "LENGUAJES",
    "texto": "Experimenten con el uso creativo de los recursos expresivos del lenguaje a través de la exploración y producción de textos orales y escritos, así como de obras artísticas y representaciones.",
    "trampa": "Suena al EJE ARTES (porque dice 'obras artísticas'). La pista clave es 'TEXTOS ORALES Y ESCRITOS' = Lenguajes."
  },
  {
    "id": "L4",
    "campo": "LENGUAJES",
    "texto": "Establezcan vínculos afectivos, intelectuales y culturales a través de los diversos lenguajes, mediante la producción de textos, obras o expresiones para participar en distintas prácticas sociales.",
    "trampa": "Suena a DE LO HUMANO (porque dice 'vínculos afectivos'). La pista clave es 'A TRAVÉS DE LOS DIVERSOS LENGUAJES' = Lenguajes."
  },
  {
    "id": "S1",
    "campo": "SABERES",
    "texto": "Indaguen, interpreten y expliquen sistemas físicos, naturales, sociales, así como matemáticos, mediante el pensamiento crítico, basado en el análisis y la indagación.",
    "trampa": "Suena a ÉTICA (porque dice 'pensamiento crítico'). La pista clave es 'SISTEMAS FÍSICOS, NATURALES, SOCIALES Y MATEMÁTICOS' = Saberes."
  },
  {
    "id": "S2",
    "campo": "SABERES",
    "texto": "Comprendan los procesos y fenómenos naturales y sociales que ocurren en su entorno, mediante el uso de habilidades de pensamiento como la observación, la formulación de preguntas y la búsqueda de información.",
    "trampa": "Suena a ÉTICA (porque dice 'procesos sociales'). La pista clave es 'OBSERVACIÓN + FORMULACIÓN DE PREGUNTAS' (método científico) = Saberes."
  },
  {
    "id": "S3",
    "campo": "SABERES",
    "texto": "La toma de decisiones libres, responsables y conscientes orientadas al bienestar individual, familiar y comunitario, para una vida saludable.",
    "trampa": "Suena a DE LO HUMANO (porque dice 'bienestar' y 'vida saludable'). La pista clave es DECISIONES BASADAS EN INDAGACIÓN CIENTÍFICA = Saberes."
  },
  {
    "id": "S4",
    "campo": "SABERES",
    "texto": "Adquieran conocimientos, saberes y habilidades para el análisis, indagación, comprensión y construcción de procesos naturales y sociales en los que se construyen relaciones igualitarias con el entorno y el medio ambiente.",
    "trampa": "Suena a ÉTICA (por 'relaciones igualitarias') o a HUMANO (por 'medio ambiente'). La pista clave es ANÁLISIS, INDAGACIÓN, CONSTRUCCIÓN = Saberes."
  },
  {
    "id": "S5",
    "campo": "SABERES",
    "texto": "Reconozcan las aportaciones científicas y tecnológicas que se han generado a lo largo de la historia, así como los avances en distintas culturas y comunidades.",
    "trampa": "Suena a ÉTICA (porque dice 'historia' y 'culturas'). La pista clave es 'APORTACIONES CIENTÍFICAS Y TECNOLÓGICAS' = Saberes."
  },
  {
    "id": "S6",
    "campo": "SABERES",
    "texto": "Comuniquen, mediante el empleo de lenguaje científico, los conocimientos adquiridos sobre fenómenos naturales y sociales, así como los hallazgos de sus indagaciones.",
    "trampa": "Suena a LENGUAJES (porque dice 'lenguaje'). La pista clave es 'LENGUAJE CIENTÍFICO' (NO artístico ni cultural) = Saberes."
  },
  {
    "id": "E1",
    "campo": "ETICA",
    "texto": "Reconozcan, respeten y valoren la diversidad cultural, étnica, lingüística, social, política, de género, de edad, de discapacidad, de condiciones de salud, de religión y de preferencias, presentes en su entorno escolar y comunitario.",
    "trampa": "Suena a HUMANO (porque dice 'género' y 'discapacidad'). La pista clave es 'RECONOCER + RESPETAR + VALORAR DIVERSIDAD' (sin sexualidad) = Ética."
  },
  {
    "id": "E2",
    "campo": "ETICA",
    "texto": "Construyan relaciones basadas en principios de igualdad, equidad, respeto a los derechos humanos, libres de todo tipo de violencia y discriminación en su comunidad escolar.",
    "trampa": "Suena a HUMANO (por 'violencia y discriminación'). La pista clave es 'CONSTRUIR RELACIONES BASADAS EN PRINCIPIOS' (estructural) = Ética."
  },
  {
    "id": "E3",
    "campo": "ETICA",
    "texto": "Examinen, reflexionen y valoren crítica y éticamente las relaciones, normas y ejercicio del poder en los diversos grupos de los que forman parte para favorecer el cuidado de la naturaleza, la cultura, la historia, la lengua y la vida en común.",
    "trampa": "Suena a SABERES (por 'cuidado de la naturaleza'). La pista clave es 'REFLEXIONAR ÉTICAMENTE + EJERCICIO DEL PODER' = Ética."
  },
  {
    "id": "E4",
    "campo": "ETICA",
    "texto": "Construyan una conciencia histórica, social y cultural que les permita participar en la transformación de su comunidad mediante prácticas democráticas.",
    "trampa": "Suena a SABERES (por 'conciencia histórica'). La pista clave es 'PRÁCTICAS DEMOCRÁTICAS + TRANSFORMACIÓN COMUNIDAD' = Ética."
  },
  {
    "id": "H1",
    "campo": "HUMANO",
    "texto": "Construyan su identidad personal a partir del reconocimiento de sus gustos, intereses, capacidades y posibilidades para interactuar de manera autónoma con su entorno escolar y comunitario.",
    "trampa": "Suena a LENGUAJES (porque también L1 menciona identidad). La pista clave es 'GUSTOS, INTERESES, CAPACIDADES PERSONALES' (NO signos lingüísticos) = Humano."
  },
  {
    "id": "H2",
    "campo": "HUMANO",
    "texto": "Conciban la sexualidad como resultado de una construcción cultural conformada por distintas maneras de pensar, representar y entender el cuerpo en su relación con la igualdad de género.",
    "trampa": "Suena a ÉTICA (por 'igualdad de género'). La pista clave es 'SEXUALIDAD + CUERPO' = exclusivo de Humano."
  },
  {
    "id": "H3",
    "campo": "HUMANO",
    "texto": "Experimenten la importancia de cuidar, mejorar y preservar la salud, el entorno natural y social, como una responsabilidad individual y colectiva que se presenta ante una vida caracterizada por la incertidumbre.",
    "trampa": "Suena a SABERES (por 'salud') o ÉTICA (por 'colectiva'). La pista clave es 'INCERTIDUMBRE' = exclusivo de Humano."
  },
  {
    "id": "H4",
    "campo": "HUMANO",
    "texto": "Construyan su proyecto de vida a partir de sus aspiraciones, sueños y metas, considerando los recursos personales y comunitarios con los que cuentan para su realización.",
    "trampa": "Suena a LENGUAJES (por 'expresar sueños') o ÉTICA (por 'comunidad'). La pista clave es 'PROYECTO DE VIDA + ASPIRACIONES PERSONALES' = Humano."
  },
  {
    "id": "H5",
    "campo": "HUMANO",
    "texto": "Reflexionen y comprendan su vida emocional y afectiva, así como la de las demás personas, como elemento constitutivo de relaciones de convivencia y potencial bienestar.",
    "trampa": "Suena a ÉTICA (por 'convivencia'). La pista clave es 'VIDA EMOCIONAL Y AFECTIVA + REFLEXIÓN SOBRE EMOCIONES' = Humano."
  },
  {
    "id": "H6",
    "campo": "HUMANO",
    "texto": "Promuevan ambientes de convivencia sana y pacífica entre quienes integran la comunidad educativa, identificando aquello que trastoque sus entornos.",
    "trampa": "Suena a ÉTICA (por 'convivencia') o cultura de paz. La pista clave es 'AMBIENTES DE CONVIVENCIA SANA Y PACÍFICA' (frase LITERAL del campo) = Humano."
  },
  {
    "id": "H7",
    "campo": "HUMANO",
    "texto": "Tomen decisiones orientadas a modificar comportamientos y situaciones que violenten su integridad físico-emocional y la de otras personas.",
    "trampa": "Suena a ÉTICA (por 'violencia'). La pista clave es 'INTEGRIDAD FÍSICO-EMOCIONAL + DECISIONES INDIVIDUALES' = Humano."
  },
  {
    "id": "H8",
    "campo": "HUMANO",
    "texto": "Desarrollen capacidades motrices y habilidades expresivas como medios para conocerse, encontrarse y comunicarse mediante el movimiento corporal.",
    "trampa": "Suena a LENGUAJES (por 'expresivas y comunicarse'). La pista clave es 'CAPACIDADES MOTRICES + MOVIMIENTO CORPORAL' = Humano (educación física)."
  },
  {
    "id": "H9",
    "campo": "HUMANO",
    "texto": "Generen sentido de pertenencia y fortalezcan el de comunidad mediante el reconocimiento de la diversidad de identidades, gustos, capacidades, formas de interactuar y vivir.",
    "trampa": "Suena a ÉTICA (por 'diversidad'). La pista clave es 'SENTIDO DE PERTENENCIA + COMUNIDAD' = Humano."
  }
];

const CAMPOS_INFO = {
  LENGUAJES: { nombre: "Lenguajes", emoji: "📚", color: "#0EA5E9" },
  SABERES:   { nombre: "Saberes y Pensamiento Científico", emoji: "🔬", color: "#10B981" },
  ETICA:     { nombre: "Ética, Naturaleza y Sociedades", emoji: "⚖️", color: "#8B5CF6" },
  HUMANO:    { nombre: "De lo Humano y lo Comunitario", emoji: "❤️", color: "#EF4444" },
};

const CONTRASENA = "1111";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generarRondasExamen() {
  const rondas = [];
  const campos = ["LENGUAJES", "SABERES", "ETICA", "HUMANO"];
  const campos_mezclados = shuffle([...campos, ...campos, "SABERES", "HUMANO"]).slice(0, 10);
  for (const campo of campos_mezclados) {
    const propias = FINALIDADES.filter(f => f.campo === campo);
    const ajenas = FINALIDADES.filter(f => f.campo !== campo);
    const tres_propias = shuffle(propias).slice(0, 3);
    const una_impostora = shuffle(ajenas)[0];
    const cuatro = shuffle([...tres_propias, una_impostora]);
    const impostora_idx = cuatro.findIndex(f => f.id === una_impostora.id);
    rondas.push({ campo, opciones: cuatro, impostora_idx });
  }
  return rondas;
}

export default function Page() {
  const [fase, setFase] = useState("candado");
  const [contrasenaInput, setContrasenaInput] = useState("");
  const [errorCandado, setErrorCandado] = useState(false);

  // ENTRENAMIENTO
  const [rondasEntrenamiento, setRondasEntrenamiento] = useState(() =>
    shuffle(FINALIDADES).map(f => ({
      finalidad: f,
      opciones: shuffle(["LENGUAJES", "SABERES", "ETICA", "HUMANO"]),
    }))
  );
  const [respuestasEntrenamiento, setRespuestasEntrenamiento] = useState({});
  const [indiceEntrenamiento, setIndiceEntrenamiento] = useState(0);
  const [mostrandoFeedback, setMostrandoFeedback] = useState(false);
  const [modoRepaso, setModoRepaso] = useState(false);

  // EXAMEN
  const [rondasExamen, setRondasExamen] = useState([]);
  const [respuestasExamen, setRespuestasExamen] = useState({});
  const [indiceExamen, setIndiceExamen] = useState(0);
  const [mostrandoFeedbackExamen, setMostrandoFeedbackExamen] = useState(false);

  function verificarCandado() {
    if (contrasenaInput === CONTRASENA) {
      setFase("menu");
      setErrorCandado(false);
    } else {
      setErrorCandado(true);
    }
  }

  function iniciarEntrenamiento(soloErrores = false) {
    if (soloErrores) {
      const errores = rondasEntrenamiento.filter(r => {
        const resp = respuestasEntrenamiento[r.finalidad.id];
        return resp && resp !== r.finalidad.campo;
      });
      if (errores.length === 0) {
        return;
      }
      setRondasEntrenamiento(errores.map(r => ({
        finalidad: r.finalidad,
        opciones: shuffle(["LENGUAJES", "SABERES", "ETICA", "HUMANO"]),
      })));
      setModoRepaso(true);
    } else {
      setRondasEntrenamiento(shuffle(FINALIDADES).map(f => ({
        finalidad: f,
        opciones: shuffle(["LENGUAJES", "SABERES", "ETICA", "HUMANO"]),
      })));
      setModoRepaso(false);
    }
    setIndiceEntrenamiento(0);
    setRespuestasEntrenamiento({});
    setMostrandoFeedback(false);
    setFase("entrenamiento");
  }

  function iniciarExamen() {
    setRondasExamen(generarRondasExamen());
    setIndiceExamen(0);
    setRespuestasExamen({});
    setMostrandoFeedbackExamen(false);
    setFase("examen");
  }

  function responderEntrenamiento(campoElegido) {
    if (mostrandoFeedback) return;
    const ronda = rondasEntrenamiento[indiceEntrenamiento];
    setRespuestasEntrenamiento({ ...respuestasEntrenamiento, [ronda.finalidad.id]: campoElegido });
    setMostrandoFeedback(true);
  }

  function siguienteEntrenamiento() {
    setMostrandoFeedback(false);
    if (indiceEntrenamiento < rondasEntrenamiento.length - 1) {
      setIndiceEntrenamiento(indiceEntrenamiento + 1);
    } else {
      setFase("resultados_entrenamiento");
    }
  }

  function responderExamen(idx) {
    if (mostrandoFeedbackExamen) return;
    setRespuestasExamen({ ...respuestasExamen, [indiceExamen]: idx });
    setMostrandoFeedbackExamen(true);
  }

  function siguienteExamen() {
    setMostrandoFeedbackExamen(false);
    if (indiceExamen < rondasExamen.length - 1) {
      setIndiceExamen(indiceExamen + 1);
    } else {
      setFase("resultados_examen");
    }
  }

  // CANDADO
  if (fase === "candado") {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 50%, #FFEDD5 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
        <div style={{ maxWidth: "440px", width: "100%", background: "white", borderRadius: "1rem", boxShadow: "0 20px 50px rgba(0,0,0,0.15)", padding: "2rem", border: "2px solid #FED7AA" }}>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🔒</div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#C2410C", marginBottom: "0.5rem" }}>
              Domina las Finalidades
            </h1>
            <p style={{ fontSize: "0.875rem", color: "#475569" }}>SNTE Sección 21 Nuevo León</p>
            <p style={{ fontSize: "0.75rem", fontStyle: "italic", color: "#64748B", marginTop: "0.25rem" }}>
              "Por la educación al servicio del pueblo"
            </p>
            <p style={{ fontSize: "0.75rem", color: "#EA580C", marginTop: "0.75rem", fontWeight: 600 }}>
              🎓 Imparte: Dr. Juan Carlos
            </p>
          </div>
          <input
            type="password"
            value={contrasenaInput}
            onChange={(e) => setContrasenaInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && verificarCandado()}
            placeholder="Clave de acceso"
            style={{ width: "100%", padding: "0.75rem 1rem", border: "2px solid #FED7AA", borderRadius: "0.5rem", fontSize: "1.125rem", textAlign: "center", marginBottom: "0.75rem", boxSizing: "border-box" }}
            autoFocus
          />
          {errorCandado && (
            <p style={{ color: "#DC2626", fontSize: "0.875rem", textAlign: "center", marginBottom: "0.75rem" }}>
              ❌ Clave incorrecta
            </p>
          )}
          <button
            onClick={verificarCandado}
            style={{ width: "100%", padding: "0.75rem", background: "#EA580C", color: "white", fontWeight: "bold", border: "none", borderRadius: "0.5rem", cursor: "pointer", fontSize: "1rem" }}
          >
            Entrar al juego
          </button>
        </div>
      </div>
    );
  }

  // MENU
  if (fase === "menu") {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 50%, #FFEDD5 100%)" }}>
        <header style={{ background: "linear-gradient(90deg, #F97316 0%, #EA580C 50%, #C2410C 100%)", color: "white", padding: "2rem 1rem", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <div style={{ maxWidth: "768px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🎯</div>
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
              Domina las Finalidades
            </h1>
            <p style={{ color: "#FED7AA", fontSize: "0.95rem" }}>
              SNTE Sección 21 Nuevo León · 23 finalidades LITERALES del Plan 2022
            </p>
            <p style={{ color: "#FFEDD5", fontSize: "0.75rem", fontStyle: "italic", marginTop: "0.25rem" }}>
              "Por la educación al servicio del pueblo"
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "768px", margin: "0 auto", padding: "2rem 1rem" }}>
          <button
            onClick={() => iniciarEntrenamiento(false)}
            style={{ width: "100%", background: "white", border: "2px solid #FED7AA", borderRadius: "1rem", padding: "1.5rem", marginBottom: "1rem", cursor: "pointer", textAlign: "left", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div style={{ fontSize: "2.5rem" }}>📚</div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#9A3412", marginBottom: "0.5rem" }}>
                  Modo Entrenamiento
                </h2>
                <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: "1.5" }}>
                  Lee cada finalidad LITERAL y elige a qué campo formativo pertenece.
                  Aprende las 23 finalidades con feedback inmediato.
                </p>
                <p style={{ fontSize: "0.75rem", color: "#EA580C", marginTop: "0.5rem", fontWeight: "500" }}>
                  23 rondas · Sin tiempo límite
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={iniciarExamen}
            style={{ width: "100%", background: "white", border: "2px solid #FED7AA", borderRadius: "1rem", padding: "1.5rem", cursor: "pointer", textAlign: "left", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div style={{ fontSize: "2.5rem" }}>🕵️</div>
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#9A3412", marginBottom: "0.5rem" }}>
                  Caza al Impostor
                </h2>
                <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: "1.5" }}>
                  Aparecen 4 finalidades supuestamente del mismo campo, pero UNA es impostora.
                  ¡Encuéntrala!
                </p>
                <p style={{ fontSize: "0.75rem", color: "#EA580C", marginTop: "0.5rem", fontWeight: "500" }}>
                  10 rondas · Evaluación BRUTAL
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => window.location.href = "/"}
            style={{ width: "100%", padding: "0.75rem", background: "transparent", color: "#64748B", fontWeight: "500", border: "none", cursor: "pointer", fontSize: "0.875rem", marginTop: "1rem" }}
          >
            ← Volver al inicio
          </button>

          <div style={{ textAlign: "center", fontSize: "0.75rem", color: "#64748B", padding: "1.5rem 0" }}>
            🎯 SNTE Sección 21 Nuevo León
          </div>
        </main>
      </div>
    );
  }

  // ENTRENAMIENTO
  if (fase === "entrenamiento") {
    const ronda = rondasEntrenamiento[indiceEntrenamiento];
    const respuesta = respuestasEntrenamiento[ronda.finalidad.id];
    const acerto = respuesta === ronda.finalidad.campo;

    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 50%, #FFEDD5 100%)" }}>
        <header style={{ background: "linear-gradient(90deg, #F97316 0%, #EA580C 100%)", color: "white", padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <div style={{ maxWidth: "768px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button onClick={() => setFase("menu")} style={{ background: "transparent", color: "white", border: "none", fontSize: "0.875rem", cursor: "pointer" }}>
              ← Menú
            </button>
            <p style={{ fontSize: "0.875rem", fontWeight: "500", margin: 0 }}>
              {modoRepaso ? "🔄 Repaso · " : "📚 Entrenamiento · "}{indiceEntrenamiento + 1} / {rondasEntrenamiento.length}
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "768px", margin: "0 auto", padding: "1.5rem 1rem" }}>
          <div style={{ width: "100%", background: "#FED7AA", borderRadius: "9999px", height: "8px", marginBottom: "1rem" }}>
            <div style={{ background: "#EA580C", height: "8px", borderRadius: "9999px", width: `${((indiceEntrenamiento + 1) / rondasEntrenamiento.length) * 100}%`, transition: "width 0.3s" }} />
          </div>

          <div style={{ background: "white", border: "2px solid #FED7AA", borderRadius: "1rem", padding: "1.25rem", marginBottom: "1rem", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
            <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: "bold", color: "#9A3412", background: "#FED7AA", padding: "0.25rem 0.75rem", borderRadius: "9999px", marginBottom: "0.75rem" }}>
              FINALIDAD LITERAL · PLAN 2022
            </span>
            <p style={{ color: "#1E293B", lineHeight: "1.6", fontSize: "1rem", fontStyle: "italic", margin: 0 }}>
              "{ronda.finalidad.texto}"
            </p>
          </div>

          <p style={{ fontSize: "0.875rem", fontWeight: "500", color: "#475569", marginBottom: "0.75rem" }}>
            ¿A qué campo formativo corresponde?
          </p>

          <div style={{ display: "grid", gap: "0.75rem", gridTemplateColumns: "1fr 1fr", marginBottom: "1rem" }}>
            {ronda.opciones.map((campo) => {
              const info = CAMPOS_INFO[campo];
              const esSeleccion = respuesta === campo;
              const esCorrecta = campo === ronda.finalidad.campo;
              let estilo = { background: "white", border: "2px solid #FED7AA" };
              if (mostrandoFeedback) {
                if (esCorrecta) estilo = { background: "#D1FAE5", border: "2px solid #10B981" };
                else if (esSeleccion) estilo = { background: "#FEE2E2", border: "2px solid #EF4444" };
                else estilo = { background: "#F1F5F9", border: "2px solid #CBD5E1", opacity: 0.5 };
              } else if (esSeleccion) {
                estilo = { background: "#FED7AA", border: "2px solid #EA580C" };
              }
              return (
                <button
                  key={campo}
                  onClick={() => responderEntrenamiento(campo)}
                  disabled={mostrandoFeedback}
                  style={{ ...estilo, borderRadius: "0.75rem", padding: "1rem", cursor: mostrandoFeedback ? "default" : "pointer", textAlign: "left", transition: "all 0.2s" }}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>{info.emoji}</div>
                  <p style={{ fontSize: "0.875rem", fontWeight: "bold", color: "#1E293B", margin: 0, lineHeight: "1.3" }}>
                    {info.nombre}
                  </p>
                </button>
              );
            })}
          </div>

          {mostrandoFeedback && (
            <div style={{ background: acerto ? "#ECFDF5" : "#FFF7ED", border: `2px solid ${acerto ? "#10B981" : "#EA580C"}`, borderRadius: "0.75rem", padding: "1rem", marginBottom: "1rem" }}>
              <p style={{ fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem", margin: "0 0 0.5rem" }}>
                {acerto ? "✅ ¡Correcto!" : `💡 La respuesta correcta es: ${CAMPOS_INFO[ronda.finalidad.campo].emoji} ${CAMPOS_INFO[ronda.finalidad.campo].nombre}`}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#475569", lineHeight: "1.5", margin: 0 }}>
                <strong>🪤 Trampa común:</strong> {ronda.finalidad.trampa}
              </p>
              <button
                onClick={siguienteEntrenamiento}
                style={{ marginTop: "0.75rem", padding: "0.5rem 1rem", background: "#EA580C", color: "white", fontWeight: "500", border: "none", borderRadius: "0.5rem", cursor: "pointer" }}
              >
                {indiceEntrenamiento < rondasEntrenamiento.length - 1 ? "Siguiente →" : "Ver resultados"}
              </button>
            </div>
          )}
        </main>
      </div>
    );
  }

  // RESULTADOS ENTRENAMIENTO
  if (fase === "resultados_entrenamiento") {
    const total = rondasEntrenamiento.length;
    const aciertos = rondasEntrenamiento.filter(r => respuestasEntrenamiento[r.finalidad.id] === r.finalidad.campo).length;
    const errores = total - aciertos;
    const porcentaje = Math.round((aciertos / total) * 100);

    const aciertosPorCampo = { LENGUAJES: 0, SABERES: 0, ETICA: 0, HUMANO: 0 };
    const totalPorCampo = { LENGUAJES: 0, SABERES: 0, ETICA: 0, HUMANO: 0 };
    rondasEntrenamiento.forEach(r => {
      totalPorCampo[r.finalidad.campo]++;
      if (respuestasEntrenamiento[r.finalidad.id] === r.finalidad.campo) {
        aciertosPorCampo[r.finalidad.campo]++;
      }
    });

    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 50%, #FFEDD5 100%)" }}>
        <header style={{ background: "linear-gradient(90deg, #F97316 0%, #EA580C 100%)", color: "white", padding: "1.5rem 1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <div style={{ maxWidth: "768px", margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>
              🏆 Resultados del entrenamiento
            </h1>
          </div>
        </header>

        <main style={{ maxWidth: "768px", margin: "0 auto", padding: "1.5rem 1rem" }}>
          <div style={{ background: "white", border: "2px solid #FED7AA", borderRadius: "1rem", padding: "2rem", marginBottom: "1rem", textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
            <div style={{ fontSize: "4rem", marginBottom: "0.75rem" }}>
              {porcentaje >= 85 ? "🏆" : porcentaje >= 60 ? "🎉" : "📚"}
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1E293B", marginBottom: "0.25rem" }}>
              {aciertos} / {total}
            </h2>
            <p style={{ fontSize: "1.125rem", color: "#EA580C", fontWeight: "500", marginBottom: "1.5rem" }}>
              {porcentaje}% de aciertos
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
              <div style={{ background: "#ECFDF5", border: "2px solid #10B981", borderRadius: "0.75rem", padding: "1rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>✅</div>
                <p style={{ fontSize: "0.75rem", color: "#065F46", margin: 0 }}>Aciertos</p>
                <p style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#065F46", margin: 0 }}>{aciertos}</p>
              </div>
              <div style={{ background: "#FEF2F2", border: "2px solid #EF4444", borderRadius: "0.75rem", padding: "1rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>❌</div>
                <p style={{ fontSize: "0.75rem", color: "#991B1B", margin: 0 }}>Errores</p>
                <p style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#991B1B", margin: 0 }}>{errores}</p>
              </div>
            </div>

            <p style={{ fontSize: "0.875rem", color: "#475569", margin: "0.5rem 0 0" }}>
              {porcentaje >= 85 ? "¡Excelente! Dominas las finalidades del Plan 2022." : porcentaje >= 60 ? "Buen resultado. Repasa tus errores para mejorar." : "Sigue practicando. Repasa lo que fallaste."}
            </p>
          </div>

          <div style={{ background: "white", border: "2px solid #FED7AA", borderRadius: "1rem", padding: "1.25rem", marginBottom: "1.5rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#9A3412", marginBottom: "0.75rem" }}>
              Diagnóstico por campo formativo
            </h3>
            {Object.keys(CAMPOS_INFO).map((campo) => {
              const info = CAMPOS_INFO[campo];
              const ac = aciertosPorCampo[campo];
              const t = totalPorCampo[campo];
              const pct = t > 0 ? Math.round((ac / t) * 100) : 0;
              return (
                <div key={campo} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.5rem 0", borderBottom: "1px solid #F1F5F9" }}>
                  <span style={{ fontSize: "1.25rem" }}>{info.emoji}</span>
                  <span style={{ flex: 1, fontSize: "0.875rem", color: "#1E293B" }}>{info.nombre}</span>
                  <span style={{ fontSize: "0.875rem", fontWeight: "bold", color: pct >= 75 ? "#10B981" : pct >= 50 ? "#EA580C" : "#EF4444" }}>
                    {ac} / {t}
                  </span>
                </div>
              );
            })}
          </div>

          <div style={{ display: "grid", gap: "0.75rem" }}>
            {errores > 0 && (
              <button
                onClick={() => iniciarEntrenamiento(true)}
                style={{ padding: "1rem", background: "#EA580C", color: "white", fontWeight: "bold", border: "none", borderRadius: "0.75rem", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
              >
                <span>🔄</span>
                <span>Repasar solo los {errores} {errores === 1 ? "error" : "errores"}</span>
              </button>
            )}
            <button
              onClick={() => iniciarEntrenamiento(false)}
              style={{ padding: "1rem", background: "white", border: "2px solid #FED7AA", color: "#9A3412", fontWeight: "bold", borderRadius: "0.75rem", cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
            >
              <span>🔁</span>
              <span>Repetir las 23 de nuevo</span>
            </button>
            <button
              onClick={() => setFase("menu")}
              style={{ padding: "0.75rem", background: "#F1F5F9", color: "#475569", fontWeight: "500", border: "none", borderRadius: "0.75rem", cursor: "pointer", fontSize: "0.875rem" }}
            >
              ← Volver al menú
            </button>
          </div>

          <div style={{ textAlign: "center", fontSize: "0.75rem", color: "#64748B", padding: "1.5rem 0" }}>
            🎯 SNTE Sección 21 Nuevo León · Por la educación al servicio del pueblo
          </div>
        </main>
      </div>
    );
  }

  // EXAMEN
  if (fase === "examen") {
    const ronda = rondasExamen[indiceExamen];
    const respuesta = respuestasExamen[indiceExamen];
    const acerto = respuesta === ronda.impostora_idx;
    const info = CAMPOS_INFO[ronda.campo];

    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 50%, #FFEDD5 100%)" }}>
        <header style={{ background: "linear-gradient(90deg, #F97316 0%, #EA580C 100%)", color: "white", padding: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <div style={{ maxWidth: "768px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button onClick={() => setFase("menu")} style={{ background: "transparent", color: "white", border: "none", fontSize: "0.875rem", cursor: "pointer" }}>
              ← Menú
            </button>
            <p style={{ fontSize: "0.875rem", fontWeight: "500", margin: 0 }}>
              🕵️ Caza al Impostor · {indiceExamen + 1} / {rondasExamen.length}
            </p>
          </div>
        </header>

        <main style={{ maxWidth: "768px", margin: "0 auto", padding: "1.5rem 1rem" }}>
          <div style={{ width: "100%", background: "#FED7AA", borderRadius: "9999px", height: "8px", marginBottom: "1rem" }}>
            <div style={{ background: "#EA580C", height: "8px", borderRadius: "9999px", width: `${((indiceExamen + 1) / rondasExamen.length) * 100}%`, transition: "width 0.3s" }} />
          </div>

          <div style={{ background: "#FED7AA", border: "2px solid #EA580C", borderRadius: "1rem", padding: "1rem", textAlign: "center", marginBottom: "1rem" }}>
            <p style={{ fontSize: "0.875rem", color: "#9A3412", fontWeight: "500", margin: "0 0 0.25rem" }}>
              Las siguientes finalidades dicen ser del campo:
            </p>
            <p style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#7C2D12", margin: 0 }}>
              {info.emoji} {info.nombre}
            </p>
            <p style={{ fontSize: "0.75rem", color: "#9A3412", marginTop: "0.5rem", margin: "0.5rem 0 0" }}>
              Pero UNA es <strong>IMPOSTORA</strong>. ¡Encuéntrala!
            </p>
          </div>

          <div style={{ display: "grid", gap: "0.75rem", marginBottom: "1rem" }}>
            {ronda.opciones.map((finalidad, idx) => {
              const esSeleccion = respuesta === idx;
              const esImpostora = idx === ronda.impostora_idx;
              let estilo = { background: "white", border: "2px solid #FED7AA" };
              if (mostrandoFeedbackExamen) {
                if (esImpostora) estilo = { background: "#FEE2E2", border: "2px solid #EF4444" };
                else estilo = { background: "#ECFDF5", border: "2px solid #10B981", opacity: 0.7 };
              }
              return (
                <button
                  key={finalidad.id}
                  onClick={() => responderExamen(idx)}
                  disabled={mostrandoFeedbackExamen}
                  style={{ ...estilo, borderRadius: "0.75rem", padding: "1rem", cursor: mostrandoFeedbackExamen ? "default" : "pointer", textAlign: "left", transition: "all 0.2s" }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>
                      {mostrandoFeedbackExamen ? (esImpostora ? "🚨" : "✓") : "❓"}
                    </span>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: "0.85rem", color: "#1E293B", lineHeight: "1.5", fontStyle: "italic", margin: 0 }}>
                        "{finalidad.texto}"
                      </p>
                      {mostrandoFeedbackExamen && esImpostora && (
                        <p style={{ fontSize: "0.8rem", fontWeight: "bold", color: "#991B1B", marginTop: "0.5rem", margin: "0.5rem 0 0" }}>
                          🚨 IMPOSTORA: pertenece a {CAMPOS_INFO[finalidad.campo].nombre}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {mostrandoFeedbackExamen && (
            <div style={{ background: acerto ? "#ECFDF5" : "#FEE2E2", border: `2px solid ${acerto ? "#10B981" : "#EF4444"}`, borderRadius: "0.75rem", padding: "1rem", marginBottom: "1rem" }}>
              <p style={{ fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem", margin: "0 0 0.5rem" }}>
                {acerto ? "✅ ¡Atrapaste al impostor!" : "❌ No era esa..."}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#475569", lineHeight: "1.5", margin: 0 }}>
                <strong>🪤 Por qué confunde:</strong> {ronda.opciones[ronda.impostora_idx].trampa}
              </p>
              <button
                onClick={siguienteExamen}
                style={{ marginTop: "0.75rem", padding: "0.5rem 1rem", background: "#EA580C", color: "white", fontWeight: "500", border: "none", borderRadius: "0.5rem", cursor: "pointer" }}
              >
                {indiceExamen < rondasExamen.length - 1 ? "Siguiente →" : "Ver resultados"}
              </button>
            </div>
          )}
        </main>
      </div>
    );
  }

  // RESULTADOS EXAMEN
  if (fase === "resultados_examen") {
    const aciertos = rondasExamen.filter((r, i) => respuestasExamen[i] === r.impostora_idx).length;
    const total = rondasExamen.length;
    const errores = total - aciertos;
    const porcentaje = Math.round((aciertos / total) * 100);

    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 50%, #FFEDD5 100%)" }}>
        <header style={{ background: "linear-gradient(90deg, #F97316 0%, #EA580C 100%)", color: "white", padding: "1.5rem 1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <div style={{ maxWidth: "768px", margin: "0 auto", textAlign: "center" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>🏆 Resultados</h1>
          </div>
        </header>

        <main style={{ maxWidth: "768px", margin: "0 auto", padding: "1.5rem 1rem" }}>
          <div style={{ background: "white", border: "2px solid #FED7AA", borderRadius: "1rem", padding: "2rem", marginBottom: "1rem", textAlign: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
            <div style={{ fontSize: "4rem", marginBottom: "0.75rem" }}>
              {porcentaje >= 80 ? "🏆" : porcentaje >= 60 ? "🎉" : "📚"}
            </div>
            <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1E293B", marginBottom: "0.25rem" }}>
              {aciertos} / {total}
            </h2>
            <p style={{ fontSize: "1.125rem", color: "#EA580C", fontWeight: "500", marginBottom: "1.5rem" }}>
              {porcentaje}% de aciertos
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
              <div style={{ background: "#ECFDF5", border: "2px solid #10B981", borderRadius: "0.75rem", padding: "1rem" }}>
                <div style={{ fontSize: "1.5rem" }}>✅</div>
                <p style={{ fontSize: "0.75rem", color: "#065F46", margin: 0 }}>Aciertos</p>
                <p style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#065F46", margin: 0 }}>{aciertos}</p>
              </div>
              <div style={{ background: "#FEF2F2", border: "2px solid #EF4444", borderRadius: "0.75rem", padding: "1rem" }}>
                <div style={{ fontSize: "1.5rem" }}>❌</div>
                <p style={{ fontSize: "0.75rem", color: "#991B1B", margin: 0 }}>Errores</p>
                <p style={{ fontSize: "1.75rem", fontWeight: "bold", color: "#991B1B", margin: 0 }}>{errores}</p>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gap: "0.75rem" }}>
            <button
              onClick={iniciarExamen}
              style={{ padding: "1rem", background: "#EA580C", color: "white", fontWeight: "bold", border: "none", borderRadius: "0.75rem", cursor: "pointer", fontSize: "1rem" }}
            >
              🔄 Nueva partida
            </button>
            <button
              onClick={() => setFase("menu")}
              style={{ padding: "0.75rem", background: "#F1F5F9", color: "#475569", fontWeight: "500", border: "none", borderRadius: "0.75rem", cursor: "pointer", fontSize: "0.875rem" }}
            >
              ← Volver al menú
            </button>
          </div>

          <div style={{ textAlign: "center", fontSize: "0.75rem", color: "#64748B", padding: "1.5rem 0" }}>
            🎯 SNTE Sección 21 Nuevo León
          </div>
        </main>
      </div>
    );
  }

  return null;
}
