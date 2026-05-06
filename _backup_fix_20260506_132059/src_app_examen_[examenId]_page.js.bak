"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useParams } from "next/navigation";
import {
  ArrowLeft, ArrowRight, CheckCircle2, XCircle,
  Trophy, RotateCcw
} from "lucide-react";

const EXAMEN_MAP = {
  "art7-interes": {
    archivo: "/data/examen-art7-interes.json",
    titulo: "Art. 7° + Interés Superior",
    subtitulo: "Características de la educación + LGDNNA"
  },
  "dhi-nem": {
    archivo: "/data/examen-dhi-nem.json",
    titulo: "DHI Art. 12 + NEM Art. 11",
    subtitulo: "Desarrollo Humano Integral + Nueva Escuela Mexicana"
  },
  "fines-criterios": {
    archivo: "/data/examen-fines-criterios.json",
    titulo: "Fines Art. 15 + Criterios Art. 16",
    subtitulo: "Fines y criterios de la educación"
  },
};

function shuffleOpciones(reactivo) {
  const opts = [...reactivo.opciones];
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  return opts;
}

export default function ExamenPage() {
  const router = useRouter();
  const params = useParams();
  const examenId = params.examenId;
  const examenInfo = EXAMEN_MAP[examenId];

  const [reactivos, setReactivos] = useState([]);
  const [opcionesBarajadas, setOpcionesBarajadas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [respuestas, setRespuestas] = useState([]);
  const [seleccion, setSeleccion] = useState(null);
  const [terminado, setTerminado] = useState(false);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (!examenInfo) return;
    fetch(examenInfo.archivo)
      .then((r) => r.json())
      .then((data) => {
        setReactivos(data);
        setOpcionesBarajadas(data.map((r) => shuffleOpciones(r)));
        setCargando(false);
      })
      .catch(() => setCargando(false));
  }, [examenInfo]);

  if (!examenInfo) return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a1628]">
      <p className="text-white">Examen no encontrado.</p>
    </main>
  );

  if (cargando) return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a1628]">
      <p className="text-white">Cargando reactivos...</p>
    </main>
  );

  if (terminado) {
    return <Resultados
      reactivos={reactivos}
      respuestas={respuestas}
      examenInfo={examenInfo}
      onReiniciar={() => {
        setOpcionesBarajadas(reactivos.map((r) => shuffleOpciones(r)));
        setIndice(0); setRespuestas([]); setSeleccion(null); setTerminado(false);
      }}
      onVolver={() => router.push("/")}
    />;
  }

  const reactivoActual = reactivos[indice];
  const opcionesActuales = opcionesBarajadas[indice];
  const esUltima = indice === reactivos.length - 1;
  const progreso = ((indice + 1) / reactivos.length) * 100;

  function siguiente() {
    setRespuestas([...respuestas, { indice, seleccion }]);
    setSeleccion(null);
    if (esUltima) setTerminado(true);
    else setIndice(indice + 1);
  }

  return (
    <main className="min-h-screen bg-[#0a1628] px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => router.push("/")}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" /> Volver
            </button>
          </div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[#F5B935] mb-1">
            {examenInfo.titulo}
          </p>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-slate-400">
              Pregunta <span className="text-white font-bold">{indice + 1}</span> de {reactivos.length}
            </span>
            <span className="text-sm text-slate-500">{Math.round(progreso)}%</span>
          </div>
          <div className="h-2 bg-[#1e3a5f] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#F5B935] to-[#5BB8E5]"
              animate={{ width: `${progreso}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={indice}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="bg-[#122847] border border-[#1e3a5f] rounded-3xl p-6 sm:p-8"
          >
            <p className="text-slate-200 text-base sm:text-lg leading-[1.8] mb-6">
              {reactivoActual.pregunta}
            </p>
            <div className="space-y-3">
              {opcionesActuales.map((opcion, idx) => {
                const letra = String.fromCharCode(65 + idx);
                const seleccionada = seleccion === opcion;
                return (
                  <button
                    key={idx}
                    onClick={() => setSeleccion(opcion)}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                      seleccionada
                        ? "bg-[#F5B935]/15 border-[#F5B935] text-white"
                        : "bg-[#0a1628]/50 border-[#1e3a5f] text-slate-300 hover:border-[#F5B935]/30"
                    }`}
                  >
                    <div className="flex gap-4">
                      <span className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-bold ${
                        seleccionada
                          ? "bg-[#F5B935] text-[#0a1628]"
                          : "bg-[#1e3a5f] text-slate-400"
                      }`}>{letra}</span>
                      <span className="text-base leading-[1.7] pt-1">{opcion}</span>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="mt-8 flex justify-end">
              <button
                onClick={siguiente}
                disabled={!seleccion}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                  seleccion
                    ? "bg-[#F5B935] hover:bg-[#e5a925] text-[#0a1628]"
                    : "bg-[#1e3a5f] text-slate-600 cursor-not-allowed"
                }`}
              >
                {esUltima ? "Ver resultados" : "Siguiente"} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

function Resultados({ reactivos, respuestas, examenInfo, onReiniciar, onVolver }) {
  const aciertos = respuestas.filter((r, i) => r.seleccion === reactivos[i].respuestaCorrecta).length;
  const total = reactivos.length;
  const pct = Math.round((aciertos / total) * 100);
  let msg = "Sigue practicando"; let color = "text-[#F5B935]";
  if (pct >= 90) { msg = "¡Excelente! Nivel élite"; color = "text-[#A8C947]"; }
  else if (pct >= 70) { msg = "Muy bien, vas en buen camino"; color = "text-[#5BB8E5]"; }
  else if (pct >= 50) { msg = "Necesitas reforzar conceptos"; color = "text-[#F5B935]"; }
  else { msg = "Es momento de prepararte a fondo"; color = "text-[#F39237]"; }

  return (
    <main className="min-h-screen bg-[#0a1628] px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          className="bg-[#122847] border border-[#1e3a5f] rounded-3xl p-8 text-center mb-6">
          <div className="inline-flex p-4 bg-gradient-to-br from-[#5BB8E5] to-[#F5B935] rounded-2xl mb-4">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[#F5B935] mb-2">{examenInfo.titulo}</p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-2">
            {aciertos}<span className="text-slate-600">/{total}</span>
          </h1>
          <p className="text-2xl font-bold text-white mb-2">{pct}% de aciertos</p>
          <p className={`text-lg font-medium ${color}`}>{msg}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <h2 className="text-xl font-bold text-white mb-4">Revisión por reactivo</h2>
          <div className="space-y-4">
            {reactivos.map((reactivo, i) => {
              const resp = respuestas[i];
              const correcta = resp?.seleccion === reactivo.respuestaCorrecta;
              return (
                <div key={i} className={`bg-[#122847] border rounded-2xl p-5 ${correcta ? "border-[#A8C947]/40" : "border-[#F39237]/40"}`}>
                  <div className="flex items-start gap-3 mb-3">
                    {correcta
                      ? <CheckCircle2 className="w-5 h-5 text-[#A8C947] flex-shrink-0 mt-1" />
                      : <XCircle className="w-5 h-5 text-[#F39237] flex-shrink-0 mt-1" />
                    }
                    <p className="text-slate-300 text-sm leading-[1.7]">{reactivo.pregunta}</p>
                  </div>
                  {!correcta && (
                    <div className="ml-8 mb-2 p-3 bg-[#F39237]/10 border border-[#F39237]/20 rounded-lg">
                      <p className="text-xs text-[#F39237] font-medium mb-1">Tu respuesta:</p>
                      <p className="text-sm text-slate-400">{resp?.seleccion || "Sin respuesta"}</p>
                    </div>
                  )}
                  <div className="ml-8 mb-3 p-3 bg-[#A8C947]/10 border border-[#A8C947]/20 rounded-lg">
                    <p className="text-xs text-[#A8C947] font-medium mb-1">Respuesta correcta:</p>
                    <p className="text-sm text-slate-300">{reactivo.respuestaCorrecta}</p>
                  </div>
                  <div className="ml-8 p-3 bg-[#5BB8E5]/10 border border-[#5BB8E5]/20 rounded-lg">
                    <p className="text-xs text-[#5BB8E5] font-medium mb-1">Justificación:</p>
                    <p className="text-sm text-slate-400 leading-[1.7] whitespace-pre-wrap">{reactivo.justificacion}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-3 mt-8">
          <button onClick={onReiniciar}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1e3a5f] hover:bg-[#122847] text-white rounded-xl font-semibold border border-[#2a4a6f]">
            <RotateCcw className="w-4 h-4" /> Reintentar
          </button>
          <button onClick={onVolver}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F5B935] hover:bg-[#e5a925] text-[#0a1628] rounded-xl font-semibold">
            Elegir otro examen
          </button>
        </div>
      </div>
    </main>
  );
}
