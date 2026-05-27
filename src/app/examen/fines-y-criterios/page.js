"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PREGUNTAS_FC } from "../../../data/examen-fines-criterios";

const TITULO_EXAMEN = "Examen Fines y Criterios";
const CONTRASENA = "7777";

export default function ExamenFinesCriteriosPage() {
  const router = useRouter();
  const [autenticado, setAutenticado] = useState(false);
  const [contrasenaInput, setContrasenaInput] = useState("");
  const [errorClave, setErrorClave] = useState(false);

  const [respuestas, setRespuestas] = useState(Array(PREGUNTAS_FC.length).fill(null));
  const [finalizado, setFinalizado] = useState(false);
  const [confirmando, setConfirmando] = useState(false);

  function verificarClave() {
    if (contrasenaInput === CONTRASENA) {
      setAutenticado(true);
      setErrorClave(false);
    } else {
      setErrorClave(true);
    }
  }

  function responder(idxPregunta, idxOpcion) {
    if (finalizado) return;
    const nuevas = [...respuestas];
    nuevas[idxPregunta] = idxOpcion;
    setRespuestas(nuevas);
  }

  const totalRespondidas = respuestas.filter((r) => r !== null).length;
  const todasRespondidas = totalRespondidas === PREGUNTAS_FC.length;

  const aciertos = useMemo(() => {
    if (!finalizado) return 0;
    return respuestas.filter((r, i) => r === PREGUNTAS_FC[i].correcta).length;
  }, [respuestas, finalizado]);

  function finalizar() {
    if (!todasRespondidas) {
      setConfirmando(true);
      return;
    }
    setFinalizado(true);
    setConfirmando(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reiniciar() {
    setRespuestas(Array(PREGUNTAS_FC.length).fill(null));
    setFinalizado(false);
    setConfirmando(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ════════════════════════════════════════════════════════════
  // CANDADO
  // ════════════════════════════════════════════════════════════
  if (!autenticado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 border-2 border-orange-300">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <Image
                src="/logo-snte21.png"
                alt="SNTE Sección 21"
                width={70}
                height={70}
                className="w-16 h-16"
                priority
              />
            </div>
            <div className="text-4xl mb-2">🔒</div>
            <h1 className="text-2xl font-bold text-orange-700 mb-2">
              {TITULO_EXAMEN}
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
              onKeyDown={(e) => e.key === "Enter" && verificarClave()}
              placeholder="Clave de acceso"
              className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none text-center text-lg"
              autoFocus
            />
            {errorClave && (
              <p className="text-red-600 text-sm text-center">
                ❌ Clave incorrecta. Inténtalo de nuevo.
              </p>
            )}
            <button
              onClick={verificarClave}
              className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition"
            >
              Entrar al examen
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

  // ════════════════════════════════════════════════════════════
  // EXAMEN
  // ════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* HEADER */}
      <header className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-8 px-4 shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <button
            onClick={() => router.push("/")}
            className="text-sm hover:underline mb-3 inline-flex items-center gap-1"
          >
            ← Volver al inicio
          </button>
          <div className="flex justify-center mb-3">
            <div className="bg-white/95 rounded-3xl p-3 shadow-xl">
              <Image
                src="/logo-snte21.png"
                alt="SNTE Sección 21"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20"
                priority
              />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 drop-shadow-md">
            {TITULO_EXAMEN}
          </h1>
          <p className="text-orange-100 text-sm sm:text-base">
            🛡️ SNTE Sección 21 · {PREGUNTAS_FC.length} reactivos LITERALES de la LGE
          </p>
          <p className="text-orange-200 text-xs italic mt-1">
            "Por la educación al servicio del pueblo"
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 space-y-6">
        {/* RESULTADO FINAL */}
        {finalizado && (
          <div className="bg-white border-2 border-orange-400 rounded-2xl p-6 shadow-xl">
            <div className="text-center space-y-3">
              <div className="text-5xl">
                {aciertos >= PREGUNTAS_FC.length * 0.8
                  ? "🏆"
                  : aciertos >= PREGUNTAS_FC.length * 0.5
                  ? "🎉"
                  : "📚"}
              </div>
              <h2 className="text-3xl font-bold text-slate-800">
                {aciertos} / {PREGUNTAS_FC.length} aciertos
              </h2>
              <p className="text-sm text-slate-600">
                {aciertos >= PREGUNTAS_FC.length * 0.8
                  ? "¡Excelente! Dominas los fines y criterios de la LGE."
                  : aciertos >= PREGUNTAS_FC.length * 0.5
                  ? "Buen resultado. Revisa las explicaciones para reforzar."
                  : "Repasa con calma cada explicación abajo."}
              </p>
              <button
                onClick={reiniciar}
                className="mt-3 px-5 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition"
              >
                🔄 Volver a intentar
              </button>
            </div>
          </div>
        )}

        {/* BARRA DE PROGRESO STICKY */}
        {!finalizado && (
          <div className="bg-white border border-orange-200 rounded-xl p-4 sticky top-4 z-10 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700">
                📋 Progreso: {totalRespondidas} / {PREGUNTAS_FC.length} respondidas
              </span>
              <button
                onClick={finalizar}
                disabled={totalRespondidas === 0}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition ${
                  todasRespondidas
                    ? "bg-emerald-600 text-white hover:bg-emerald-700"
                    : totalRespondidas === 0
                    ? "bg-slate-300 text-slate-600 cursor-not-allowed"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                }`}
              >
                {todasRespondidas ? "✅ Finalizar examen" : "Faltan preguntas"}
              </button>
            </div>
            <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full transition-all"
                style={{ width: `${(totalRespondidas / PREGUNTAS_FC.length) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* PREGUNTAS */}
        {PREGUNTAS_FC.map((p, idxP) => {
          const seleccion = respuestas[idxP];
          const esCorrecto = seleccion === p.correcta;

          return (
            <div
              key={p.id}
              className="bg-white border-2 border-orange-100 rounded-2xl p-5 sm:p-6 shadow-md"
            >
              {/* NÚMERO + ENUNCIADO */}
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-orange-500 text-white font-bold rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0">
                  {p.id}
                </div>
                <p className="text-slate-800 leading-relaxed pt-1">{p.enunciado}</p>
              </div>

              {/* SI ES RELACIONAR: mostrar columnas */}
              {p.tipo === "relacionar" && p.columnaA && p.columnaB && (
                <div className="grid sm:grid-cols-2 gap-3 mb-4 ml-12">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <p className="text-xs font-bold text-orange-700 mb-2">🛡️ CRITERIOS:</p>
                    {p.columnaA.map((c, i) => (
                      <p key={i} className="text-sm text-slate-700 mb-2 leading-snug font-medium">
                        {c}
                      </p>
                    ))}
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="text-xs font-bold text-amber-700 mb-2">📝 DESCRIPCIONES:</p>
                    {p.columnaB.map((c, i) => (
                      <p key={i} className="text-sm text-slate-700 mb-2 leading-snug">
                        {c}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* OPCIONES */}
              <div className="space-y-2 ml-12">
                {p.opciones.map((opcion, idxO) => {
                  const esSeleccion = seleccion === idxO;
                  const esLaCorrecta = idxO === p.correcta;
                  let clase = "border-orange-200 bg-white hover:border-orange-400 hover:bg-orange-50";

                  if (finalizado) {
                    if (esLaCorrecta) {
                      clase = "border-emerald-500 bg-emerald-100 text-emerald-900";
                    } else if (esSeleccion && !esCorrecto) {
                      clase = "border-red-500 bg-red-100 text-red-900";
                    } else {
                      clase = "border-slate-200 bg-slate-50 text-slate-500 opacity-60";
                    }
                  } else if (esSeleccion) {
                    clase = "border-orange-500 bg-orange-100";
                  }

                  return (
                    <button
                      key={idxO}
                      onClick={() => responder(idxP, idxO)}
                      disabled={finalizado}
                      className={`w-full text-left border-2 rounded-xl p-3 sm:p-4 transition-all ${clase}`}
                    >
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-slate-600 flex-shrink-0">
                          {String.fromCharCode(65 + idxO)})
                        </span>
                        <span className="text-sm sm:text-base leading-snug flex-1">
                          {opcion}
                        </span>
                        {finalizado && esLaCorrecta && (
                          <span className="ml-auto text-emerald-700 font-bold flex-shrink-0">
                            ✓
                          </span>
                        )}
                        {finalizado && esSeleccion && !esCorrecto && (
                          <span className="ml-auto text-red-700 font-bold flex-shrink-0">
                            ✗
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* EXPLICACIÓN AL FINAL */}
              {finalizado && (
                <div
                  className={`mt-4 ml-12 p-4 rounded-xl border-2 ${
                    esCorrecto
                      ? "bg-emerald-50 border-emerald-300"
                      : "bg-orange-50 border-orange-300"
                  }`}
                >
                  <p className="font-bold text-sm mb-1">
                    {esCorrecto ? "✅ ¡Correcto!" : "💡 Explicación:"}
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {p.explicacion}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {/* BOTÓN FINALIZAR STICKY ABAJO */}
        {!finalizado && (
          <div className="bg-white border-2 border-orange-300 rounded-2xl p-5 text-center sticky bottom-4 shadow-xl">
            <button
              onClick={finalizar}
              disabled={totalRespondidas === 0}
              className={`w-full py-4 rounded-xl font-bold text-lg transition ${
                todasRespondidas
                  ? "bg-emerald-600 text-white hover:bg-emerald-700"
                  : totalRespondidas === 0
                  ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              }`}
            >
              {todasRespondidas
                ? "✅ Finalizar y ver respuestas"
                : `📝 Respondidas ${totalRespondidas}/${PREGUNTAS_FC.length} — Finalizar de todos modos`}
            </button>
          </div>
        )}

        {/* CONFIRMACIÓN */}
        {confirmando && !todasRespondidas && (
          <div className="bg-orange-100 border-2 border-orange-400 rounded-xl p-4">
            <p className="font-bold text-orange-900">
              ⚠️ Te faltan {PREGUNTAS_FC.length - totalRespondidas} preguntas por responder.
            </p>
            <div className="mt-3 flex gap-2 flex-wrap">
              <button
                onClick={() => {
                  setFinalizado(true);
                  setConfirmando(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700"
              >
                Finalizar de todos modos
              </button>
              <button
                onClick={() => setConfirmando(false)}
                className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-300"
              >
                Seguir respondiendo
              </button>
            </div>
          </div>
        )}

        <div className="text-center text-xs text-slate-500 py-6">
          🛡️ SNTE Sección 21 Nuevo León · Por la educación al servicio del pueblo
        </div>
      </main>
    </div>
  );
}
