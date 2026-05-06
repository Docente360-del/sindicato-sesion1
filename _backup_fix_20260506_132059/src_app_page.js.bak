"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  BookOpen, ArrowRight, Layers, GraduationCap, Sparkles
} from "lucide-react";

const MAZOS = [
  {
    id: "art7-interes",
    titulo: "Art. 7° + Interés Superior",
    subtitulo: "Características de la educación + LGDNNA",
    tarjetas: 8,
    formatos: "4 Anclas + 4 Casos",
  },
  {
    id: "dhi-nem",
    titulo: "DHI Art. 12 + NEM Art. 11",
    subtitulo: "Desarrollo Humano Integral + Nueva Escuela Mexicana",
    tarjetas: 10,
    formatos: "5 Anclas + 5 Casos",
  },
  {
    id: "fines-criterios",
    titulo: "Fines Art. 15 + Criterios Art. 16",
    subtitulo: "Fines y criterios de la educación (LGE)",
    tarjetas: 12,
    formatos: "6 Anclas + 6 Casos",
  },
];

const EXAMENES = [
  {
    id: "art7-interes",
    titulo: "Examen: Art. 7° + Interés Superior",
    subtitulo: "Características + LGDNNA",
    reactivos: 4,
  },
  {
    id: "dhi-nem",
    titulo: "Examen: DHI Art. 12 + NEM Art. 11",
    subtitulo: "Desarrollo Humano Integral + NEM",
    reactivos: 5,
  },
  {
    id: "fines-criterios",
    titulo: "Examen: Fines Art. 15 + Criterios Art. 16",
    subtitulo: "Fines y criterios de la educación",
    reactivos: 6,
  },
];

export default function LandingPage() {
  const router = useRouter();
  const [tab, setTab] = useState("flashcards");

  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12 relative overflow-hidden bg-[#0a1628]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#122847] to-[#1e3a5f]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#5BB8E5] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5B935] rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" />

      <div className="relative z-10 max-w-4xl w-full">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-gradient-to-br from-[#5BB8E5] to-[#F5B935] rounded-2xl p-5 shadow-2xl shadow-[#5BB8E5]/30">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-[#5BB8E5] mb-2">
              Curso del Sindicato — Sesión 1
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4"
          >
            <span className="bg-gradient-to-r from-[#5BB8E5] via-[#8DD0EE] to-[#F5B935] bg-clip-text text-transparent">
              Promoción Horizontal
            </span>
            <br />
            <span className="text-white text-3xl sm:text-4xl">y Vertical</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed"
          >
            Flashcards y exámenes para dominar la Ley General de Educación.
            Estudia, voltea y comprueba lo que aprendiste.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-2 mb-6 justify-center flex-wrap"
        >
          <button
            onClick={() => setTab("flashcards")}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              tab === "flashcards"
                ? "bg-[#5BB8E5] text-[#0a1628]"
                : "bg-[#1e3a5f] text-slate-300 hover:text-white"
            }`}
          >
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4" /> Flashcards
            </span>
          </button>
          <button
            onClick={() => setTab("examen")}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              tab === "examen"
                ? "bg-[#F5B935] text-[#0a1628]"
                : "bg-[#1e3a5f] text-slate-300 hover:text-white"
            }`}
          >
            <span className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Exámenes
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="space-y-4"
        >
          {tab === "flashcards" && (
            <>
              <h2 className="text-sm font-semibold tracking-widest uppercase text-[#5BB8E5] mb-4 text-center">
                Elige un mazo
              </h2>
              {MAZOS.map((mazo) => (
                <button
                  key={mazo.id}
                  onClick={() => router.push(`/estudio/${mazo.id}`)}
                  className="w-full group bg-[#122847]/80 border border-[#1e3a5f] hover:border-[#5BB8E5]/50 rounded-2xl p-6 text-left transition-all hover:bg-[#122847]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#5BB8E5]/20 rounded-xl">
                        <Layers className="w-6 h-6 text-[#5BB8E5]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {mazo.titulo}
                        </h3>
                        <p className="text-sm text-[#5BB8E5] font-medium">
                          {mazo.subtitulo}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          {mazo.tarjetas} tarjetas — {mazo.formatos}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-[#5BB8E5] group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </>
          )}

          {tab === "examen" && (
            <>
              <h2 className="text-sm font-semibold tracking-widest uppercase text-[#F5B935] mb-4 text-center">
                Elige un examen
              </h2>
              {EXAMENES.map((examen) => (
                <button
                  key={examen.id}
                  onClick={() => router.push(`/examen/${examen.id}`)}
                  className="w-full group bg-[#122847]/80 border border-[#1e3a5f] hover:border-[#F5B935]/50 rounded-2xl p-6 text-left transition-all hover:bg-[#122847]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#F5B935]/20 rounded-xl">
                        <GraduationCap className="w-6 h-6 text-[#F5B935]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {examen.titulo}
                        </h3>
                        <p className="text-sm text-[#F5B935] font-medium">
                          {examen.subtitulo}
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          {examen.reactivos} reactivos — Tipo USICAMM
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-[#F5B935] group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </>
          )}
        </motion.div>

        <p className="text-center text-xs text-slate-500 mt-12">
          Material de estudio basado en la Ley General de Educación (DOF 30-09-2019)
        </p>
      </div>
    </main>
  );
}
