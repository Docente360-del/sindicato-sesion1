"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowLeft, BookOpen, Lightbulb, Anchor, HelpCircle, ZoomIn, X
} from "lucide-react";

export default function FinesPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [imagenAmpliada, setImagenAmpliada] = useState(null);

  useEffect(() => {
    fetch("/data/los-9-fines.json")
      .then((r) => r.json())
      .then((d) => {
        setData(d);
        setCargando(false);
      })
      .catch(() => setCargando(false));
  }, []);

  if (cargando) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-slate-700 text-xl">Cargando los 9 Fines...</p>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-slate-700">No se pudo cargar el contenido.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header con franja naranja SNTE */}
      <div className="bg-gradient-to-r from-[#F47216] to-[#D85A0A] text-white">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between text-xs font-medium tracking-wider">
          <span className="hidden sm:inline">"POR LA EDUCACIÓN AL SERVICIO DEL PUEBLO"</span>
          <span className="font-bold">SNTE · SECCIÓN 21 · NUEVO LEÓN</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* Botón volver */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-slate-500 hover:text-[#F47216] transition-colors text-sm font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </button>

        {/* Título de la página */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-[#F47216] mb-3">
            {data.meta.subtitulo}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-slate-900">
            Los <span className="text-[#F47216]">9 Fines</span> de la Educación
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed italic">
            "{data.meta.tagline}"
          </p>
          <p className="text-xs text-slate-400 mt-3">
            {data.meta.fuente}
          </p>
        </motion.div>

        {/* Las 9 tarjetas */}
        <div className="space-y-8">
          {data.fines.map((fin, idx) => (
            <motion.article
              key={fin.numero}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-[#F47216]/10 transition-shadow"
            >
              {/* Encabezado de tarjeta */}
              <div className="bg-gradient-to-r from-[#F47216] to-[#D85A0A] text-white px-6 sm:px-8 py-5">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-white text-[#F47216] rounded-2xl flex items-center justify-center font-black text-2xl">
                    {fin.numero}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold tracking-widest uppercase opacity-90">
                      Fin {fin.numero} · Art. 15
                    </p>
                    <h2 className="text-xl sm:text-2xl font-black leading-tight">
                      {fin.titulo}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Imagen + Contenido */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Imagen (click para ampliar) */}
                <button
                  onClick={() => setImagenAmpliada(fin)}
                  className="relative group bg-slate-50 overflow-hidden aspect-square md:aspect-auto md:min-h-[400px]"
                >
                  <img
                    src={fin.imagen}
                    alt={fin.imagen_concepto}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-3 right-3 bg-[#F47216] text-white p-2 rounded-lg shadow-lg opacity-90 group-hover:opacity-100">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4">
                    <p className="text-sm font-medium leading-snug">
                      {fin.imagen_concepto}
                    </p>
                  </div>
                </button>

                {/* Texto del contenido */}
                <div className="p-6 sm:p-7 space-y-5">
                  {/* Pregunta disparadora */}
                  <div className="flex gap-3 p-4 bg-[#FFF4EB] border-l-4 border-[#F47216] rounded-r-lg">
                    <HelpCircle className="w-5 h-5 text-[#D85A0A] flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base font-medium italic text-slate-800 leading-relaxed">
                      {fin.pregunta_disparadora}
                    </p>
                  </div>

                  {/* Texto literal de la ley */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen className="w-4 h-4 text-[#D85A0A]" />
                      <p className="text-xs font-bold tracking-widest uppercase text-[#D85A0A]">
                        Lo que dice la ley
                      </p>
                    </div>
                    <p className="text-sm text-slate-700 leading-[1.7] pl-6 border-l-2 border-slate-200">
                      {fin.ley}
                    </p>
                  </div>

                  {/* Analogía como para niños */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-4 h-4 text-[#D85A0A]" />
                      <p className="text-xs font-bold tracking-widest uppercase text-[#D85A0A]">
                        Explicado como para niños
                      </p>
                    </div>
                    <p className="text-sm text-slate-700 leading-[1.7]">
                      {fin.analogia}
                    </p>
                  </div>

                  {/* Frase ancla */}
                  <div className="bg-gradient-to-br from-[#16A34A]/10 to-[#16A34A]/5 border-2 border-[#16A34A]/30 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Anchor className="w-4 h-4 text-[#16A34A]" />
                      <p className="text-xs font-bold tracking-widest uppercase text-[#16A34A]">
                        Frase ancla
                      </p>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed italic">
                      "{fin.ancla}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Frase de cierre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 mb-8"
        >
          <p className="text-lg sm:text-xl font-bold text-slate-700 mb-2">
            Si recuerdan estas 9 imágenes,
          </p>
          <p className="text-2xl sm:text-3xl font-black text-[#F47216]">
            recuerdan toda la ley.
          </p>
        </motion.div>

        {/* Botón volver al inicio */}
        <div className="text-center">
          <button
            onClick={() => router.push("/")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F47216] hover:bg-[#D85A0A] text-white rounded-xl font-semibold transition-all shadow-md shadow-[#F47216]/30"
          >
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </button>
        </div>
      </div>

      {/* Footer SNTE */}
      <footer className="bg-slate-50 border-t border-slate-200 mt-12 py-6">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs text-slate-500">
            <span className="font-bold text-[#F47216]">SNTE · Sección 21</span> · Nuevo León
          </p>
          <p className="text-xs text-slate-400 mt-1">
            "Por la educación al servicio del pueblo"
          </p>
        </div>
      </footer>

      {/* Modal de imagen ampliada */}
      {imagenAmpliada && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setImagenAmpliada(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setImagenAmpliada(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#F47216] transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <X className="w-5 h-5" /> Cerrar
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex-1 min-h-0">
              <img
                src={imagenAmpliada.imagen}
                alt={imagenAmpliada.imagen_concepto}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-white font-bold text-lg">
                Fin {imagenAmpliada.numero} — {imagenAmpliada.titulo}
              </p>
              <p className="text-[#FDD9B5] text-sm mt-1">
                {imagenAmpliada.imagen_concepto}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
