"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PREGUNTAS_JUNIO } from "../../../data/examen-clase-10-junio";

const TITULO_EXAMEN = "Clase 10 de Junio";
const CONTRASENA = "0597";

export default function ExamenClase10JunioPage() {
  const router = useRouter();
  const [autenticado, setAutenticado] = useState(false);
  const [contrasenaInput, setContrasenaInput] = useState("");
  const [errorClave, setErrorClave] = useState(false);
  const [respuestas, setRespuestas] = useState(Array(PREGUNTAS_JUNIO.length).fill(null));
  const [actual, setActual] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  function verificarClave() {
    if (contrasenaInput === CONTRASENA) {
      setAutenticado(true);
      setErrorClave(false);
    } else {
      setErrorClave(true);
    }
  }

  function responder(idxOpcion) {
    if (finalizado) return;
    const nuevas = [...respuestas];
    nuevas[actual] = idxOpcion;
    setRespuestas(nuevas);
  }

  function siguiente() {
    if (actual < PREGUNTAS_JUNIO.length - 1) {
      setActual(actual + 1);
    }
  }

  function anterior() {
    if (actual > 0) {
      setActual(actual - 1);
    }
  }

  function finalizar() {
    setFinalizado(true);
    setActual(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reiniciar() {
    setRespuestas(Array(PREGUNTAS_JUNIO.length).fill(null));
    setFinalizado(false);
    setActual(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const totalRespondidas = respuestas.filter((r) => r !== null).length;
  const aciertos = finalizado ? respuestas.filter((r, i) => r === PREGUNTAS_JUNIO[i].correcta).length : 0;

  // CANDADO
  if (!autenticado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 border-2 border-orange-300">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <Image src="/logo-snte21.png" alt="SNTE 21" width={70} height={70} className="w-16 h-16" priority />
            </div>
            <div className="text-4xl mb-2">🔒</div>
            <h1 className="text-2xl font-bold text-orange-700 mb-2">{TITULO_EXAMEN}</h1>
            <p className="text-sm text-slate-600">SNTE Sección 21 Nuevo León</p>
            <p className="text-xs text-orange-600 mt-3 font-medium">🎓 Imparte: Dr. Juan Carlos</p>
          </div>
          <div className="space-y-4">
            <input type="password" value={contrasenaInput} onChange={(e) => setContrasenaInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && verificarClave()} placeholder="Clave de acceso" className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg focus:border-orange-500 focus:outline-none text-center text-lg" autoFocus />
            {errorClave && <p className="text-red-600 text-sm text-center">Clave incorrecta.</p>}
            <button onClick={verificarClave} className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition">Entrar al examen</button>
            <button onClick={() => router.push("/")} className="w-full py-2 text-slate-500 hover:text-orange-600 text-sm transition">← Volver al inicio</button>
          </div>
        </div>
      </div>
    );
  }

  // RESULTADOS FINALES
  if (finalizado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <header className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-6 px-4 shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold">🏆 Resultados</h1>
            <p className="text-orange-100 text-sm mt-1">{TITULO_EXAMEN} · Educación Especial e Inclusión</p>
          </div>
        </header>
        <main className="max-w-3xl mx-auto px-4 py-6 space-y-6">
          <div className="bg-white border-2 border-orange-400 rounded-2xl p-6 shadow-xl text-center">
            <div className="text-5xl mb-3">{aciertos >= PREGUNTAS_JUNIO.length * 0.8 ? "🏆" : aciertos >= PREGUNTAS_JUNIO.length * 0.5 ? "🎉" : "📚"}</div>
            <h2 className="text-3xl font-bold text-slate-800">{aciertos} / {PREGUNTAS_JUNIO.length} aciertos</h2>
            <p className="text-sm text-slate-600 mt-2">{Math.round((aciertos / PREGUNTAS_JUNIO.length) * 100)}% de aciertos</p>
            <button onClick={reiniciar} className="mt-4 px-5 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition">🔄 Volver a intentar</button>
          </div>

          {PREGUNTAS_JUNIO.map((p, idxP) => {
            const sel = respuestas[idxP];
            const ok = sel === p.correcta;
            return (
              <div key={p.id} className={`bg-white border-2 rounded-2xl p-5 shadow-md ${ok ? "border-emerald-300" : "border-red-300"}`}>
                <div className="flex items-start gap-3 mb-3">
                  <div className={`font-bold rounded-full w-9 h-9 flex items-center justify-center flex-shrink-0 text-white ${ok ? "bg-emerald-500" : "bg-red-500"}`}>{p.id}</div>
                  <p className="text-slate-800 leading-relaxed text-sm pt-1">{p.enunciado}</p>
                </div>

                {p.tipo === "relacionar" && p.columnaA && p.columnaB && (
                  <div className="grid sm:grid-cols-2 gap-3 mb-3 ml-12">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      {p.columnaA.map((c, i) => (<p key={i} className="text-xs text-slate-700 mb-2 leading-snug">{c}</p>))}
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      {p.columnaB.map((c, i) => (<p key={i} className="text-xs text-slate-700 mb-2 leading-snug">{c}</p>))}
                    </div>
                  </div>
                )}

                {p.tipo === "ordenar" && p.acciones && (
                  <div className="ml-12 mb-3 space-y-1">
                    {p.acciones.map((a, i) => (<div key={i} className="bg-orange-50 border border-orange-200 rounded-lg p-2 text-xs text-slate-700">{a}</div>))}
                  </div>
                )}

                <div className="space-y-1 ml-12">
                  {p.opciones.map((op, idxO) => {
                    const esCorr = idxO === p.correcta;
                    const esSel = sel === idxO;
                    let cl = "border-slate-200 bg-slate-50 opacity-60";
                    if (esCorr) cl = "border-emerald-500 bg-emerald-100";
                    else if (esSel && !ok) cl = "border-red-500 bg-red-100";
                    return (
                      <div key={idxO} className={`border-2 rounded-lg p-2 text-xs leading-snug ${cl}`}>
                        <span className="font-bold">{String.fromCharCode(65+idxO)})</span> {op}
                        {esCorr && <span className="ml-1 text-emerald-700 font-bold">✓</span>}
                        {esSel && !ok && <span className="ml-1 text-red-700 font-bold">✗</span>}
                      </div>
                    );
                  })}
                </div>

                <div className={`mt-3 ml-12 p-3 rounded-lg border text-xs leading-relaxed ${ok ? "bg-emerald-50 border-emerald-300" : "bg-orange-50 border-orange-300"}`}>
                  <p className="font-bold mb-1">{ok ? "✅ Correcto" : "💡 Explicación:"}</p>
                  <p className="text-slate-700">{p.explicacion}</p>
                </div>
              </div>
            );
          })}

          <div className="text-center py-4">
            <button onClick={reiniciar} className="px-5 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition">🔄 Volver a intentar</button>
          </div>
        </main>
      </div>
    );
  }

  // EXAMEN UNA POR UNA
  const p = PREGUNTAS_JUNIO[actual];
  const sel = respuestas[actual];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <header className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white py-4 px-4 shadow-lg">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center">
            <button onClick={() => router.push("/")} className="text-sm hover:underline">← Inicio</button>
            <p className="text-sm font-bold">{TITULO_EXAMEN}</p>
            <p className="text-sm">Pregunta {actual + 1} de {PREGUNTAS_JUNIO.length}</p>
          </div>
          <div className="mt-2 w-full bg-orange-800/30 rounded-full h-2">
            <div className="bg-white h-2 rounded-full transition-all" style={{ width: `${((actual + 1) / PREGUNTAS_JUNIO.length) * 100}%` }} />
          </div>
          <div className="mt-2 flex justify-between text-xs text-orange-200">
            <span>Respondidas: {totalRespondidas}/{PREGUNTAS_JUNIO.length}</span>
            <span>{sel !== null ? "✅ Respondida" : "⏳ Sin responder"}</span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        <div className="bg-white border-2 border-orange-200 rounded-2xl p-5 sm:p-6 shadow-lg">
          {/* ENUNCIADO */}
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-orange-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-lg">{p.id}</div>
            <p className="text-slate-800 leading-relaxed pt-1">{p.enunciado}</p>
          </div>

          {/* COLUMNAS PARA RELACIONAR */}
          {p.tipo === "relacionar" && p.columnaA && p.columnaB && (
            <div className="grid sm:grid-cols-2 gap-3 mb-4 ml-13">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-xs font-bold text-orange-700 mb-2 uppercase tracking-wide">Columna 1</p>
                {p.columnaA.map((c, i) => (
                  <p key={i} className="text-sm text-slate-700 mb-3 leading-snug border-b border-orange-100 pb-2 last:border-0 last:pb-0">{c}</p>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-xs font-bold text-amber-700 mb-2 uppercase tracking-wide">Columna 2</p>
                {p.columnaB.map((c, i) => (
                  <p key={i} className="text-sm text-slate-700 mb-3 leading-snug border-b border-amber-100 pb-2 last:border-0 last:pb-0">{c}</p>
                ))}
              </div>
            </div>
          )}

          {/* ACCIONES PARA ORDENAR */}
          {p.tipo === "ordenar" && p.acciones && (
            <div className="mb-4 ml-13 space-y-2">
              <p className="text-xs font-bold text-orange-700 uppercase tracking-wide">Acciones a ordenar:</p>
              {p.acciones.map((a, i) => (
                <div key={i} className="bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-start gap-3">
                  <span className="bg-orange-500 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">{i + 1}</span>
                  <span className="text-sm text-slate-700 leading-snug pt-1">{a}</span>
                </div>
              ))}
            </div>
          )}

          {/* OPCIONES */}
          <div className="space-y-3 ml-13">
            {p.opciones.map((op, idxO) => {
              const esSel = sel === idxO;
              let clase = "border-orange-200 bg-white hover:border-orange-400 hover:bg-orange-50 cursor-pointer";
              if (esSel) clase = "border-orange-500 bg-orange-100 ring-2 ring-orange-300";

              return (
                <button key={idxO} onClick={() => responder(idxO)} className={`w-full text-left border-2 rounded-xl p-4 transition-all ${clase}`}>
                  <div className="flex items-start gap-2">
                    <span className={`font-bold flex-shrink-0 ${esSel ? "text-orange-700" : "text-slate-600"}`}>{String.fromCharCode(65 + idxO)})</span>
                    <span className="text-sm sm:text-base leading-snug flex-1">{op}</span>
                    {esSel && <span className="text-orange-600 font-bold flex-shrink-0">●</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* NAVEGACIÓN */}
        <div className="mt-6 flex gap-3">
          <button onClick={anterior} disabled={actual === 0} className={`flex-1 py-3 rounded-xl font-bold text-sm transition ${actual === 0 ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-white border-2 border-orange-300 text-orange-700 hover:bg-orange-50"}`}>
            ← Anterior
          </button>

          {actual < PREGUNTAS_JUNIO.length - 1 ? (
            <button onClick={siguiente} className="flex-1 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl text-sm transition">
              Siguiente →
            </button>
          ) : (
            <button onClick={finalizar} className={`flex-1 py-3 font-bold rounded-xl text-sm transition ${totalRespondidas === PREGUNTAS_JUNIO.length ? "bg-emerald-600 hover:bg-emerald-700 text-white" : "bg-orange-500 hover:bg-orange-600 text-white"}`}>
              {totalRespondidas === PREGUNTAS_JUNIO.length ? "✅ Finalizar examen" : `Finalizar (${totalRespondidas}/${PREGUNTAS_JUNIO.length})`}
            </button>
          )}
        </div>

        {/* MAPA DE PREGUNTAS */}
        <div className="mt-4 bg-white border border-orange-200 rounded-xl p-4 shadow-sm">
          <p className="text-xs font-bold text-slate-600 mb-2">Mapa de preguntas:</p>
          <div className="flex flex-wrap gap-2">
            {PREGUNTAS_JUNIO.map((_, idx) => {
              const respondida = respuestas[idx] !== null;
              const esActual = idx === actual;
              let cl = "bg-slate-100 text-slate-400 border-slate-200";
              if (respondida) cl = "bg-orange-100 text-orange-700 border-orange-300";
              if (esActual) cl = "bg-orange-500 text-white border-orange-600 ring-2 ring-orange-300";
              return (
                <button key={idx} onClick={() => setActual(idx)} className={`w-8 h-8 rounded-lg border text-xs font-bold transition ${cl}`}>
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
