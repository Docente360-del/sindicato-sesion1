"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useParams } from "next/navigation";
import {
  ArrowLeft, Check, RefreshCw, Trophy, RotateCcw,
  Lightbulb, AlertTriangle
} from "lucide-react";

const MAZO_MAP = {
  "art7-interes": {
    archivo: "/data/mazo-art7-interes.json",
    titulo: "Art. 7° + Interés Superior",
    subtitulo: "Características de la educación + LGDNNA"
  },
  "dhi-nem": {
    archivo: "/data/mazo-dhi-nem.json",
    titulo: "DHI Art. 12 + NEM Art. 11",
    subtitulo: "Desarrollo Humano Integral + Nueva Escuela Mexicana"
  },
  "fines-criterios": {
    archivo: "/data/mazo-fines-criterios.json",
    titulo: "Fines Art. 15 + Criterios Art. 16",
    subtitulo: "Fines y criterios de la educación"
  },
};

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashcardsPage() {
  const router = useRouter();
  const params = useParams();
  const mazoId = params.mazoId;
  const mazoInfo = MAZO_MAP[mazoId];

  const [ronda, setRonda] = useState(1);
  const [tarjetasR1, setTarjetasR1] = useState([]);
  const [tarjetasR2, setTarjetasR2] = useState([]);
  const [cola, setCola] = useState([]);
  const [indice, setIndice] = useState(0);
  const [volteada, setVolteada] = useState(false);
  const [dominadasCount, setDominadasCount] = useState(0);
  const [terminadoRonda, setTerminadoRonda] = useState(false);
  const [terminadoTodo, setTerminadoTodo] = useState(false);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (!mazoInfo) return;
    fetch(mazoInfo.archivo)
      .then((r) => r.json())
      .then((data) => {
        const r1 = data.ronda_1_anclas || [];
        const r2 = shuffleArray(data.ronda_2_casos || []);
        setTarjetasR1(r1);
        setTarjetasR2(r2);
        setCola([...r1]);
        setCargando(false);
      })
      .catch(() => setCargando(false));
  }, [mazoInfo]);

  const tarjetaActual = cola[indice];
  const esRonda1 = ronda === 1;
  const voltear = useCallback(() => setVolteada((v) => !v), []);

  function marcarDominada() {
    setDominadasCount((c) => c + 1);
    const nuevaCola = cola.filter((_, i) => i !== indice);
    if (nuevaCola.length === 0) {
      if (ronda === 1) setTerminadoRonda(true);
      else setTerminadoTodo(true);
      setCola([]);
    } else {
      setCola(nuevaCola);
      setIndice(indice >= nuevaCola.length ? 0 : indice);
    }
    setVolteada(false);
  }

  function marcarRepasar() {
    const nuevaCola = [...cola];
    const tarjeta = nuevaCola.splice(indice, 1)[0];
    nuevaCola.push(tarjeta);
    setCola(nuevaCola);
    setVolteada(false);
  }

  function iniciarRonda2() {
    setRonda(2);
    setCola([...tarjetasR2]);
    setIndice(0);
    setVolteada(false);
    setDominadasCount(0);
    setTerminadoRonda(false);
  }

  function reiniciar() {
    setRonda(1);
    setCola([...tarjetasR1]);
    setIndice(0);
    setVolteada(false);
    setDominadasCount(0);
    setTerminadoRonda(false);
    setTerminadoTodo(false);
  }

  if (!mazoInfo) return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a1628]">
      <p className="text-white text-xl">Mazo no encontrado.</p>
    </main>
  );

  if (cargando) return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a1628]">
      <p className="text-white text-xl">Cargando tarjetas...</p>
    </main>
  );

  if (terminadoRonda && ronda === 1) {
    return (
      <main className="min-h-screen bg-[#0a1628] px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-[#122847] border border-[#1e3a5f] rounded-3xl p-8 text-center mb-6">
            <div className="inline-flex p-4 bg-gradient-to-br from-[#5BB8E5] to-[#F5B935] rounded-2xl mb-4">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-2xl font-black text-white mb-2">¡Ronda 1 completada!</h1>
            <p className="text-slate-300 mb-1">Ya tienes las anclas en tu mente.</p>
            <p className="text-[#5BB8E5] font-medium text-sm">Ahora enfrenta los casos reales.</p>
          </motion.div>
          <button onClick={iniciarRonda2}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#5BB8E5] hover:bg-[#4aa8d5] text-[#0a1628] rounded-xl font-bold text-lg transition-all">
            Iniciar Ronda 2 — Casos
          </button>
        </div>
      </main>
    );
  }

  if (terminadoTodo) {
    return (
      <main className="min-h-screen bg-[#0a1628] px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="bg-[#122847] border border-[#1e3a5f] rounded-3xl p-8 text-center mb-6">
            <div className="inline-flex p-4 bg-gradient-to-br from-[#5BB8E5] to-[#F5B935] rounded-2xl mb-4">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#5BB8E5] mb-2">{mazoInfo.titulo}</p>
            <h1 className="text-3xl font-black text-white mb-2">¡Mazo dominado!</h1>
            <p className="text-[#A8C947] font-bold text-lg">{dominadasCount} tarjetas dominadas</p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={reiniciar}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1e3a5f] hover:bg-[#122847] text-white rounded-xl font-semibold transition-all border border-[#2a4a6f]">
              <RotateCcw className="w-4 h-4" /> Repetir
            </button>
            <button onClick={() => router.push("/")}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#5BB8E5] hover:bg-[#4aa8d5] text-[#0a1628] rounded-xl font-semibold transition-all">
              Volver al inicio
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (!tarjetaActual) return null;

  const totalCola = cola.length;
  const totalRonda = esRonda1 ? tarjetasR1.length : tarjetasR2.length;
  const progreso = Math.max(0, Math.min(100, ((totalRonda - totalCola) / totalRonda) * 100));

  return (
    <main className="min-h-screen bg-[#0a1628] px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <button onClick={() => router.push("/")}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
              <ArrowLeft className="w-4 h-4" /> Volver
            </button>
          </div>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#5BB8E5]">{mazoInfo.titulo}</p>
            <span className={`text-xs font-black px-2 py-0.5 rounded-full ${
              esRonda1 ? "bg-[#5BB8E5]/20 text-[#5BB8E5]" : "bg-[#F5B935]/20 text-[#c49420]"
            }`}>
              Ronda {ronda}: {esRonda1 ? "Anclas" : "Casos"}
            </span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">
              <span className="text-white font-bold">{totalCola}</span> pendientes —
              <span className="text-[#A8C947] font-bold"> {dominadasCount}</span> dominadas
            </span>
          </div>
          <div className="h-2 bg-[#1e3a5f] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#5BB8E5] to-[#F5B935]"
              animate={{ width: `${progreso}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tarjetaActual.id + "-" + indice}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            <div className="cursor-pointer mb-6" onClick={voltear}>
              <div className="relative" style={{ minHeight: "320px" }}>
                {!volteada ? (
                  <div className="absolute inset-0 bg-[#122847] border border-[#1e3a5f] rounded-3xl p-6 sm:p-8 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full ${
                        esRonda1
                          ? "text-[#5BB8E5] bg-[#5BB8E5]/15"
                          : "text-[#c49420] bg-[#F5B935]/15"
                      }`}>
                        {esRonda1 ? "Ancla" : "Caso"}
                      </span>
                      <span className="text-xs text-slate-500">Toca para voltear</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                      {esRonda1 ? (
                        <>
                          <p className="text-[#5BB8E5] text-sm font-bold tracking-widest uppercase mb-2">
                            {tarjetaActual.frente.fin}
                          </p>
                          <p className="text-white text-2xl sm:text-3xl font-black">
                            {tarjetaActual.frente.titulo}
                          </p>
                          <p className="text-slate-500 text-sm mt-4">
                            ¿Qué lo hace único? ¿Cuál es su huella digital?
                          </p>
                        </>
                      ) : (
                        <p className="text-slate-200 text-base sm:text-lg leading-[1.8] text-left w-full">
                          {tarjetaActual.frente.escenario}
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-[#122847] border border-[#5BB8E5]/30 rounded-3xl p-6 sm:p-8 flex flex-col overflow-y-auto">
                    {esRonda1
                      ? <ReversoAncla tarjeta={tarjetaActual} />
                      : <ReversoCaso tarjeta={tarjetaActual} />
                    }
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {volteada && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
            <button onClick={marcarRepasar}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#F5B935]/15 hover:bg-[#F5B935]/25 border border-[#F5B935]/40 text-[#F5B935] rounded-xl font-bold text-base transition-all">
              <RefreshCw className="w-5 h-5" /> Repasar
            </button>
            <button onClick={marcarDominada}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-4 bg-[#A8C947]/15 hover:bg-[#A8C947]/25 border border-[#A8C947]/40 text-[#A8C947] rounded-xl font-bold text-base transition-all">
              <Check className="w-5 h-5" /> La sé
            </button>
          </motion.div>
        )}
        {!volteada && (
          <p className="text-center text-sm text-slate-600">
            {esRonda1
              ? "Piensa: ¿qué lo hace único? Luego toca para verificar"
              : "¿A qué concepto corresponde? Toca para voltear"}
          </p>
        )}
      </div>
    </main>
  );
}

function ReversoAncla({ tarjeta }) {
  const r = tarjeta.reverso;
  return (
    <div className="space-y-4">
      <div className="text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black bg-[#5BB8E5]/20 text-[#5BB8E5] border border-[#5BB8E5]/30">
          {r.ancla}
        </span>
      </div>
      <div className="p-4 bg-[#0a1628]/50 border border-[#1e3a5f] rounded-xl">
        <p className="text-xs text-slate-500 font-bold mb-2">En palabras simples</p>
        <p className="text-sm text-slate-300 leading-[1.7]">{r.en_palabras_simples}</p>
      </div>
      <div className="p-4 bg-[#F5B935]/10 border border-[#F5B935]/20 rounded-xl">
        <p className="text-xs text-[#c49420] font-bold mb-2">Lo que lo hace único</p>
        <p className="text-sm text-slate-300 leading-[1.7]">{r.lo_que_lo_hace_unico}</p>
      </div>
      {r.palabras_del_documento && (
        <div className="p-3 bg-[#5BB8E5]/10 border border-[#5BB8E5]/20 rounded-xl">
          <p className="text-xs text-[#5BB8E5] font-bold mb-1">Palabras del documento</p>
          <p className="text-sm text-slate-400 leading-[1.6]">{r.palabras_del_documento}</p>
        </div>
      )}
      <div className="flex gap-2 p-3 bg-[#A8C947]/10 border border-[#A8C947]/20 rounded-xl">
        <Lightbulb className="w-4 h-4 text-[#A8C947] flex-shrink-0 mt-0.5" />
        <p className="text-sm text-[#A8C947] font-bold leading-[1.6]">{r.regla_rapida}</p>
      </div>
    </div>
  );
}

function ReversoCaso({ tarjeta }) {
  const r = tarjeta.reverso;
  return (
    <div className="space-y-4">
      <div>
        <p className="text-lg font-bold text-white">{r.fin}</p>
      </div>
      <div className="p-4 bg-[#0a1628]/50 border border-[#1e3a5f] rounded-xl">
        <p className="text-xs text-slate-500 font-bold mb-2">¿Por qué?</p>
        <p className="text-sm text-slate-300 leading-[1.7]">{r.por_que}</p>
      </div>
      <div className="flex gap-2 p-3 bg-[#F39237]/10 border border-[#F39237]/20 rounded-xl">
        <AlertTriangle className="w-4 h-4 text-[#F39237] flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-xs text-[#F39237] font-bold mb-1">Se confunde con</p>
          <p className="text-sm text-slate-400 leading-[1.6]">{r.se_confunde_con}</p>
        </div>
      </div>
      {r.palabras_del_documento && (
        <div className="p-3 bg-[#5BB8E5]/10 border border-[#5BB8E5]/20 rounded-xl">
          <p className="text-xs text-[#5BB8E5] font-bold mb-1">Palabras del documento</p>
          <p className="text-sm text-slate-400 leading-[1.6]">{r.palabras_del_documento}</p>
        </div>
      )}
      <div className="flex gap-2 p-3 bg-[#A8C947]/10 border border-[#A8C947]/20 rounded-xl">
        <Lightbulb className="w-4 h-4 text-[#A8C947] flex-shrink-0 mt-0.5" />
        <p className="text-sm text-[#A8C947] font-bold leading-[1.6]">{r.regla_rapida}</p>
      </div>
    </div>
  );
}
