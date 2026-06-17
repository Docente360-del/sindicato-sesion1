"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Trophy, BookOpen, Search, RefreshCw, Check, X, Scale } from "lucide-react";
import { ITEMS_LGE, TIPOS_INFO, DERECHOS_OBLIGACIONES, CLASES_INFO } from "../data/juego-fines-criterios";

const CONTRASENA = "1111";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Generar 3 opciones del MISMO tipo (1 correcta + 2 distractores)
function generarOpcionesMismoTipo(item_correcto) {
  const hermanos = ITEMS_LGE.filter(
    (i) => i.tipo === item_correcto.tipo && i.id !== item_correcto.id
  );
  const dos_distractores = shuffle(hermanos).slice(0, 2);
  return shuffle([item_correcto, ...dos_distractores]);
}

// Generar rondas del modo CAZA AL IMPOSTOR (4 opciones todas del mismo tipo, 1 impostora)
function generarRondasExamen() {
  const rondas = [];
  // Tipos con al menos 3 disposiciones (para 3 propias + 1 impostora)
  const tiposDisponibles = [...new Set(ITEMS_LGE.map((i) => i.tipo))].filter(
    (t) => ITEMS_LGE.filter((i) => i.tipo === t).length >= 3
  );
  const secuencia = shuffle(
    Array.from({ length: 8 }, (_, k) => tiposDisponibles[k % tiposDisponibles.length])
  );

  for (const tipo of secuencia) {
    const propios = shuffle(ITEMS_LGE.filter((i) => i.tipo === tipo)).slice(0, 3);
    const ajenos = shuffle(ITEMS_LGE.filter((i) => i.tipo !== tipo));
    const una_impostora = ajenos[0];
    const cuatro = shuffle([...propios, una_impostora]);
    const impostora_idx = cuatro.findIndex((item) => item.id === una_impostora.id);
    rondas.push({ tipo, opciones: cuatro, impostora_idx });
  }
  return rondas;
}

export default function JuegoFinesCriterios() {
  const router = useRouter();
  const [fase, setFase] = useState("candado");
  const [contrasenaInput, setContrasenaInput] = useState("");
  const [errorCandado, setErrorCandado] = useState(false);

  // ENTRENAMIENTO HIBRIDO
  const rondas_entrenamiento = useMemo(
    () =>
      shuffle(ITEMS_LGE).map((item) => ({
        item,
        opciones: generarOpcionesMismoTipo(item),
      })),
    []
  );

  const [respuestasEntrenamiento, setRespuestasEntrenamiento] = useState({});
  const [indiceEntrenamiento, setIndiceEntrenamiento] = useState(0);
  const [mostrandoFeedback, setMostrandoFeedback] = useState(false);

  // EXAMEN (Caza al Impostor - se mantiene)
  const [rondasExamen, setRondasExamen] = useState([]);
  const [respuestasExamen, setRespuestasExamen] = useState({});
  const [indiceExamen, setIndiceExamen] = useState(0);
  const [mostrandoFeedbackExamen, setMostrandoFeedbackExamen] = useState(false);
  const [mejorPuntaje, setMejorPuntaje] = useState(
    typeof window !== "undefined"
      ? parseInt(localStorage.getItem("snte_fines_criterios_best") || "0")
      : 0
  );

  // CLASIFICAR (Derechos vs Obligaciones - Art. 128 y 129)
  const rondas_clasificar = useMemo(() => shuffle(DERECHOS_OBLIGACIONES), []);
  const [indiceClasificar, setIndiceClasificar] = useState(0);
  const [respuestasClasificar, setRespuestasClasificar] = useState({});
  const [mostrandoFeedbackClasificar, setMostrandoFeedbackClasificar] = useState(false);
  const [mejorClasificar, setMejorClasificar] = useState(
    typeof window !== "undefined"
      ? parseInt(localStorage.getItem("snte_derechos_obligaciones_best") || "0")
      : 0
  );

  function verificarCandado() {
    if (contrasenaInput === CONTRASENA) {
      setFase("menu");
      setErrorCandado(false);
    } else {
      setErrorCandado(true);
    }
  }

  function iniciarEntrenamiento() {
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

  function responderEntrenamiento(opcion_id) {
    if (mostrandoFeedback) return;
    const ronda_actual = rondas_entrenamiento[indiceEntrenamiento];
    setRespuestasEntrenamiento({
      ...respuestasEntrenamiento,
      [ronda_actual.item.id]: opcion_id,
    });
    setMostrandoFeedback(true);
  }

  function siguienteEntrenamiento() {
    setMostrandoFeedback(false);
    if (indiceEntrenamiento < rondas_entrenamiento.length - 1) {
      setIndiceEntrenamiento(indiceEntrenamiento + 1);
    } else {
      setFase("menu");
    }
  }

  function responderExamen(idx_opcion) {
    if (mostrandoFeedbackExamen) return;
    setRespuestasExamen({ ...respuestasExamen, [indiceExamen]: idx_opcion });
    setMostrandoFeedbackExamen(true);
  }

  function siguienteExamen() {
    setMostrandoFeedbackExamen(false);
    if (indiceExamen < rondasExamen.length - 1) {
      setIndiceExamen(indiceExamen + 1);
    } else {
      let puntaje = 0;
      rondasExamen.forEach((ronda, idx) => {
        if (respuestasExamen[idx] === ronda.impostora_idx) puntaje++;
      });
      if (puntaje > mejorPuntaje) {
        setMejorPuntaje(puntaje);
        if (typeof window !== "undefined") {
          localStorage.setItem("snte_fines_criterios_best", puntaje.toString());
        }
      }
      setFase("resultados_examen");
    }
  }

  function iniciarClasificar() {
    setIndiceClasificar(0);
    setRespuestasClasificar({});
    setMostrandoFeedbackClasificar(false);
    setFase("clasificar");
  }

  function responderClasificar(clase) {
    if (mostrandoFeedbackClasificar) return;
    setRespuestasClasificar({ ...respuestasClasificar, [indiceClasificar]: clase });
    setMostrandoFeedbackClasificar(true);
  }

  function siguienteClasificar() {
    setMostrandoFeedbackClasificar(false);
    if (indiceClasificar < rondas_clasificar.length - 1) {
      setIndiceClasificar(indiceClasificar + 1);
    } else {
      let puntaje = 0;
      rondas_clasificar.forEach((item, idx) => {
        if (respuestasClasificar[idx] === item.clase) puntaje++;
      });
      if (puntaje > mejorClasificar) {
        setMejorClasificar(puntaje);
        if (typeof window !== "undefined") {
          localStorage.setItem("snte_derechos_obligaciones_best", puntaje.toString());
        }
      }
      setFase("resultados_clasificar");
    }
  }

  // CANDADO
  if (fase === "candado") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 border-2 border-orange-300">
          <div className="text-center mb-6">
            <div className="text-6xl mb-3">🔒</div>
            <h1 className="text-2xl font-bold text-orange-700 mb-2">
              Domina Fines y Criterios
            </h1>
            <p className="text-sm text-slate-600">SNTE Sección 21 Nuevo León</p>
            <p className="text-xs italic text-slate-500 mt-1">
              "Por la educación al servicio del pueblo"
            </p>
            <p className="text-xs text-orange-600 mt-3 font-medium">
              🎓 Imparte: Dr. Juan Carlos
            </p>
          </div>

          <div className="space-y-4">
            <input
              type="password"
              value={contrasenaInput}
              onChange={(e) => setContrasenaInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && verificarCandado()}
              placeholder="Clave de acceso"
              className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none text-center text-lg"
              autoFocus
            />
            {errorCandado && (
              <p className="text-red-600 text-sm text-center">
                ❌ Clave incorrecta. Inténtalo de nuevo.
              </p>
            )}
            <button
              onClick={verificarCandado}
              className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition"
            >
              Entrar al juego
            </button>
            <button
              onClick={() => router.push("/")}
              className="w-full py-2 text-slate-500 hover:text-orange-600 text-sm transition"
            >
              ← Volver al inicio
            </button>
          </div>
        </div>
      </div>
    );
  }

  // MENU
  if (fase === "menu") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <header className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-8 px-4 shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <button
              onClick={() => router.push("/")}
              className="text-sm hover:underline mb-3 inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" /> Volver al inicio
            </button>
            <div className="text-5xl mb-3">🎯</div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 drop-shadow-md">
              Domina Fines y Criterios
            </h1>
            <p className="text-orange-100 text-sm sm:text-base">
              SNTE Sección 21 · Fines · Criterios · Objetivos NEM · DHI · Derechos y Obligaciones (LGE)
            </p>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">
          {mejorPuntaje > 0 && (
            <div className="bg-white border-2 border-orange-300 rounded-xl p-4 text-center shadow-md">
              <p className="text-sm text-slate-600 flex items-center justify-center gap-2">
                <Trophy className="w-4 h-4 text-orange-600" /> Tu mejor puntaje en Caza al Impostor
              </p>
              <p className="text-3xl font-bold text-orange-700">{mejorPuntaje} / 8</p>
            </div>
          )}

          <button
            onClick={iniciarEntrenamiento}
            className="w-full bg-white border-2 border-orange-300 hover:border-orange-500 rounded-2xl p-6 shadow-md hover:shadow-lg transition text-left"
          >
            <div className="flex items-start gap-4">
              <BookOpen className="w-10 h-10 text-orange-600 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-orange-800 mb-2">Modo Entrenamiento</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Lee un fragmento del DOF y elige cuál de las 3 opciones le corresponde.
                  Las 3 opciones son del mismo tipo (fines, criterios, objetivos o DHI).
                </p>
                <p className="text-xs text-orange-600 mt-2 font-medium">
                  {ITEMS_LGE.length} rondas · Sin tiempo límite
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={iniciarExamen}
            className="w-full bg-white border-2 border-orange-300 hover:border-orange-500 rounded-2xl p-6 shadow-md hover:shadow-lg transition text-left"
          >
            <div className="flex items-start gap-4">
              <Search className="w-10 h-10 text-orange-600 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-orange-800 mb-2">Caza al Impostor</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Aparecen 4 disposiciones que supuestamente son del mismo tipo, pero
                  UNA es impostora. ¡Encuéntrala!
                </p>
                <p className="text-xs text-orange-600 mt-2 font-medium">
                  8 rondas · Evaluación BRUTAL
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={iniciarClasificar}
            className="w-full bg-white border-2 border-orange-300 hover:border-orange-500 rounded-2xl p-6 shadow-md hover:shadow-lg transition text-left"
          >
            <div className="flex items-start gap-4">
              <Scale className="w-10 h-10 text-orange-600 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-orange-800 mb-2">Derechos y Obligaciones</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Lee la palabra clave y decide si es un <strong>Derecho</strong> (Art. 128) o una{" "}
                  <strong>Obligación</strong> (Art. 129) de madres, padres o tutores.
                </p>
                <p className="text-xs text-orange-600 mt-2 font-medium">
                  15 tarjetas · Clasificación rápida
                </p>
              </div>
            </div>
          </button>
        </main>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════
  // ENTRENAMIENTO HIBRIDO
  // ════════════════════════════════════════════════════════════
  if (fase === "entrenamiento") {
    const ronda = rondas_entrenamiento[indiceEntrenamiento];
    const respuesta_id = respuestasEntrenamiento[ronda.item.id];
    const acerto = respuesta_id === ronda.item.id;
    const tipoInfo = TIPOS_INFO[ronda.item.tipo];

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <header className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-4 px-4 shadow-md">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <button onClick={() => setFase("menu")} className="text-sm hover:underline">
              ← Volver al menú
            </button>
            <p className="text-sm font-medium">
              📚 Entrenamiento · {indiceEntrenamiento + 1} / {rondas_entrenamiento.length}
            </p>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-6 space-y-4">
          <div className="w-full bg-orange-100 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full transition-all"
              style={{
                width: `${((indiceEntrenamiento + 1) / rondas_entrenamiento.length) * 100}%`,
              }}
            />
          </div>

          {/* FRAGMENTO arriba */}
          <div className="bg-white border-2 border-orange-400 rounded-2xl p-5 shadow-md">
            <p className="text-xs font-bold text-orange-700 uppercase tracking-wide mb-2">
              Identifica este fragmento del DOF:
            </p>
            <p className="text-slate-800 leading-relaxed text-base italic">
              "...{ronda.item.fragmento}..."
            </p>
            <div className="mt-3 inline-flex items-center gap-2 bg-orange-100 px-3 py-1 rounded-full border border-orange-300">
              <span className="text-lg">{tipoInfo.emoji}</span>
              <span className="text-xs font-bold text-orange-800">
                Es un {tipoInfo.nombre}
              </span>
            </div>
          </div>

          <p className="text-sm font-medium text-slate-700">
            Elige el {tipoInfo.singular} correcto:
          </p>

          {/* OPCIONES - ambas del mismo tipo */}
          <div className="space-y-3">
            {ronda.opciones.map((opcion) => {
              const esSeleccionado = respuesta_id === opcion.id;
              const esCorrecta = opcion.id === ronda.item.id;
              let clase = "bg-white border-orange-200 hover:border-orange-500 hover:bg-orange-50";

              if (mostrandoFeedback) {
                if (esCorrecta) clase = "bg-green-100 border-green-500";
                else if (esSeleccionado) clase = "bg-red-100 border-red-500";
                else clase = "bg-slate-50 border-slate-200 opacity-60";
              }

              return (
                <button
                  key={opcion.id}
                  onClick={() => responderEntrenamiento(opcion.id)}
                  disabled={mostrandoFeedback}
                  className={`w-full text-left border-2 rounded-xl p-4 transition ${clase}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <p
                        className={`text-slate-800 leading-relaxed ${
                          TIPOS_INFO[opcion.tipo].display === "corto" ? "text-lg font-bold" : "text-sm"
                        }`}
                      >
                        {TIPOS_INFO[opcion.tipo].display === "corto" ? opcion.nombre_corto : `"${opcion.nombre_corto}"`}
                      </p>
                    </div>
                    {mostrandoFeedback && esCorrecta && (
                      <Check className="text-green-700 w-6 h-6 flex-shrink-0" />
                    )}
                    {mostrandoFeedback && esSeleccionado && !esCorrecta && (
                      <X className="text-red-700 w-6 h-6 flex-shrink-0" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {mostrandoFeedback && (
            <div
              className={`rounded-xl p-4 border-2 ${
                acerto ? "bg-green-50 border-green-300" : "bg-orange-50 border-orange-300"
              }`}
            >
              <p className="font-bold text-sm mb-2">
                {acerto ? "✅ ¡Correcto!" : "💡 La respuesta correcta era:"}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-2">
                <strong>{tipoInfo.emoji} {tipoInfo.nombre}:</strong>{" "}
                {tipoInfo.display === "corto" ? ronda.item.nombre_corto : ""}
              </p>
              <p className="text-xs text-slate-600 italic leading-relaxed mb-2">
                📜 Texto completo: "{ronda.item.frase_completa}"
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>🪤 Por qué confunde:</strong> {ronda.item.trampa_comun}
              </p>
              <button
                onClick={siguienteEntrenamiento}
                className="mt-3 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition"
              >
                {indiceEntrenamiento < rondas_entrenamiento.length - 1
                  ? "Siguiente →"
                  : "Terminar"}
              </button>
            </div>
          )}
        </main>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════
  // EXAMEN (Caza al Impostor - frases completas como antes)
  // ════════════════════════════════════════════════════════════
  if (fase === "examen") {
    const ronda = rondasExamen[indiceExamen];
    const respuesta = respuestasExamen[indiceExamen];
    const acerto = respuesta === ronda.impostora_idx;
    const tipoInfo = TIPOS_INFO[ronda.tipo];

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <header className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-4 px-4 shadow-md">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <button onClick={() => setFase("menu")} className="text-sm hover:underline">
              ← Volver al menú
            </button>
            <p className="text-sm font-medium">
              🕵️ Caza al Impostor · {indiceExamen + 1} / {rondasExamen.length}
            </p>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-6 space-y-4">
          <div className="w-full bg-orange-100 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full transition-all"
              style={{ width: `${((indiceExamen + 1) / rondasExamen.length) * 100}%` }}
            />
          </div>

          <div className="bg-orange-100 border-2 border-orange-500 rounded-2xl p-5 text-center">
            <p className="text-sm text-orange-800 font-medium mb-1">
              Las siguientes opciones dicen ser:
            </p>
            <p className="text-2xl font-bold text-orange-900">
              {tipoInfo.emoji} {tipoInfo.nombre}
            </p>
            <p className="text-xs text-orange-700 mt-2">
              Pero UNA de las 4 es <strong>IMPOSTORA</strong>. ¡Encuéntrala!
            </p>
          </div>

          <div className="space-y-3">
            {ronda.opciones.map((opcion, idx) => {
              const esSeleccionado = respuesta === idx;
              const esImpostora = idx === ronda.impostora_idx;
              let clase = "bg-white border-orange-200 hover:border-orange-500 hover:bg-orange-50";

              if (mostrandoFeedbackExamen) {
                if (esImpostora) clase = "bg-red-100 border-red-500";
                else clase = "bg-green-50 border-green-300 opacity-70";
              }

              return (
                <button
                  key={opcion.id}
                  onClick={() => responderExamen(idx)}
                  disabled={mostrandoFeedbackExamen}
                  className={`w-full text-left border-2 rounded-xl p-4 transition ${clase}`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">
                      {mostrandoFeedbackExamen ? (esImpostora ? "🚨" : "✓") : "❓"}
                    </span>
                    <div className="flex-1">
                      <p
                        className={`text-slate-800 leading-relaxed ${
                          TIPOS_INFO[opcion.tipo].display === "corto" ? "text-lg font-bold" : "text-sm"
                        }`}
                      >
                        {TIPOS_INFO[opcion.tipo].display === "corto" ? opcion.nombre_corto : `"${opcion.nombre_corto}"`}
                      </p>
                      {mostrandoFeedbackExamen && esImpostora && (
                        <p className="text-xs font-bold mt-2 text-red-900">
                          🚨 IMPOSTORA · es realmente un{" "}
                          {TIPOS_INFO[opcion.tipo].nombre}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {mostrandoFeedbackExamen && (
            <div
              className={`rounded-xl p-4 border-2 ${
                acerto ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"
              }`}
            >
              <p className="font-bold text-sm mb-2">
                {acerto ? "✅ ¡Atrapaste al impostor!" : "❌ No era esa..."}
              </p>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>🪤 Por qué confunde:</strong>{" "}
                {ronda.opciones[ronda.impostora_idx].trampa_comun}
              </p>
              <button
                onClick={siguienteExamen}
                className="mt-3 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition"
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
    const aciertos = rondasExamen.filter(
      (r, i) => respuestasExamen[i] === r.impostora_idx
    ).length;
    const total = rondasExamen.length;
    const porcentaje = Math.round((aciertos / total) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <header className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-6 px-4 shadow-md">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold">🏆 Resultados</h1>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-6 space-y-4">
          <div className="bg-white border-2 border-orange-300 rounded-2xl p-6 shadow-lg text-center">
            <div className="text-6xl mb-3">
              {aciertos >= 7 ? "🏆" : aciertos >= 5 ? "🎉" : "📚"}
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-1">
              {aciertos} / {total}
            </h2>
            <p className="text-lg text-orange-700 font-medium">{porcentaje}% de aciertos</p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4">
            <button
              onClick={iniciarExamen}
              className="py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" /> Nueva partida
            </button>
            <button
              onClick={() => setFase("menu")}
              className="py-3 bg-white border-2 border-orange-300 hover:border-orange-500 text-orange-700 font-bold rounded-lg transition"
            >
              ← Menú
            </button>
          </div>
        </main>
      </div>
    );
  }

  // ════════════════════════════════════════════════════════════
  // CLASIFICAR: DERECHOS vs OBLIGACIONES (Art. 128 y 129)
  // ════════════════════════════════════════════════════════════
  if (fase === "clasificar") {
    const item = rondas_clasificar[indiceClasificar];
    const respuesta = respuestasClasificar[indiceClasificar];
    const acerto = respuesta === item.clase;
    const infoCorrecta = CLASES_INFO[item.clase];

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <header className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-4 px-4 shadow-md">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <button onClick={() => setFase("menu")} className="text-sm hover:underline">
              ← Volver al menú
            </button>
            <p className="text-sm font-medium">
              ⚖️ Derechos y Obligaciones · {indiceClasificar + 1} / {rondas_clasificar.length}
            </p>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-6 space-y-5">
          <div className="w-full bg-orange-100 rounded-full h-2">
            <div
              className="bg-orange-500 h-2 rounded-full transition-all"
              style={{ width: `${((indiceClasificar + 1) / rondas_clasificar.length) * 100}%` }}
            />
          </div>

          {/* PALABRA CLAVE arriba */}
          <div className="bg-white border-2 border-orange-400 rounded-2xl p-6 shadow-md text-center">
            <p className="text-xs font-bold text-orange-700 uppercase tracking-wide mb-3">
              ¿Esto es un DERECHO o una OBLIGACIÓN de madres y padres?
            </p>
            <p className="text-slate-800 leading-relaxed text-lg font-semibold">
              {item.palabra_clave}
            </p>
          </div>

          {/* BOTONES abajo: Derecho / Obligación */}
          <div className="grid grid-cols-2 gap-3">
            {["DERECHO", "OBLIGACION"].map((clase) => {
              const info = CLASES_INFO[clase];
              const esSeleccion = respuesta === clase;
              const esCorrectaOpcion = item.clase === clase;
              let estilo = "bg-white border-orange-200 hover:border-orange-500 hover:bg-orange-50 text-slate-800";
              if (mostrandoFeedbackClasificar) {
                if (esCorrectaOpcion) estilo = "bg-green-100 border-green-500 text-green-900";
                else if (esSeleccion) estilo = "bg-red-100 border-red-500 text-red-900";
                else estilo = "bg-slate-50 border-slate-200 opacity-60 text-slate-500";
              }
              return (
                <button
                  key={clase}
                  onClick={() => responderClasificar(clase)}
                  disabled={mostrandoFeedbackClasificar}
                  className={`border-2 rounded-2xl py-6 font-bold text-lg transition flex flex-col items-center gap-1 ${estilo}`}
                >
                  <span className="text-3xl">{info.emoji}</span>
                  {info.nombre}
                </button>
              );
            })}
          </div>

          {mostrandoFeedbackClasificar && (
            <div className={`rounded-xl p-4 border-2 ${acerto ? "bg-green-50 border-green-300" : "bg-red-50 border-red-300"}`}>
              <p className="font-bold text-sm mb-2">
                {acerto ? "✅ ¡Correcto!" : `❌ Era ${infoCorrecta.nombre.toUpperCase()}`}
              </p>
              <p className="text-xs font-semibold text-orange-800 mb-1">
                {infoCorrecta.emoji} {infoCorrecta.nombre} · {item.articulo}
              </p>
              <p className="text-xs text-slate-600 italic leading-relaxed mb-2">
                📜 "{item.texto}"
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>🪤 Tip:</strong> {item.trampa}
              </p>
              <button
                onClick={siguienteClasificar}
                className="mt-3 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition"
              >
                {indiceClasificar < rondas_clasificar.length - 1 ? "Siguiente →" : "Ver resultados"}
              </button>
            </div>
          )}
        </main>
      </div>
    );
  }

  // RESULTADOS CLASIFICAR
  if (fase === "resultados_clasificar") {
    const aciertos = rondas_clasificar.filter((item, i) => respuestasClasificar[i] === item.clase).length;
    const total = rondas_clasificar.length;
    const porcentaje = Math.round((aciertos / total) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <header className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-6 px-4 shadow-md">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold">⚖️ Derechos y Obligaciones</h1>
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-4 py-6 space-y-4">
          <div className="bg-white border-2 border-orange-300 rounded-2xl p-6 shadow-lg text-center">
            <div className="text-6xl mb-3">
              {porcentaje >= 85 ? "🏆" : porcentaje >= 60 ? "🎉" : "📚"}
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-1">
              {aciertos} / {total}
            </h2>
            <p className="text-lg text-orange-700 font-medium">{porcentaje}% de aciertos</p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4">
            <button
              onClick={iniciarClasificar}
              className="py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" /> Repetir
            </button>
            <button
              onClick={() => setFase("menu")}
              className="py-3 bg-white border-2 border-orange-300 hover:border-orange-500 text-orange-700 font-bold rounded-lg transition"
            >
              ← Menú
            </button>
          </div>
        </main>
      </div>
    );
  }

  return null;
}
