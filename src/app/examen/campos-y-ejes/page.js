'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Check, X, ChevronRight, Lock, Award, RotateCcw, AlertCircle } from 'lucide-react';
import { CLAVE_EXAMEN, TIEMPO_POR_PREGUNTA, REACTIVOS } from '../../../data/examen-campos-y-ejes';

// Paleta SNTE
const C = {
  naranja: '#F47216',
  oscuro: '#D85A0A',
  durazno: '#FDD9B5',
  crema: '#FFF4EB',
  texto: '#3A2A1A',
};

const LETRAS = ['a', 'b', 'c', 'd'];

function formatoTiempo(s) {
  const m = Math.floor(s / 60);
  const seg = s % 60;
  return `${m}:${seg.toString().padStart(2, '0')}`;
}

export default function ExamenCamposYEjes() {
  const [fase, setFase] = useState('clave'); // clave | examen | resultados
  const [clave, setClave] = useState('');
  const [errorClave, setErrorClave] = useState(false);
  const [idx, setIdx] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [respuestas, setRespuestas] = useState(() => Array(REACTIVOS.length).fill(null));
  const [tiempo, setTiempo] = useState(TIEMPO_POR_PREGUNTA);

  // El timer corre durante el examen y se reinicia con cada pregunta
  useEffect(() => {
    if (fase !== 'examen') return;
    setTiempo(TIEMPO_POR_PREGUNTA);
    const t = setInterval(() => {
      setTiempo((p) => (p > 0 ? p - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, [idx, fase]);

  // Cuando el tiempo llega a 0: avanza marcando lo que haya seleccionado (o nada = incorrecta)
  useEffect(() => {
    if (fase === 'examen' && tiempo === 0) {
      avanzar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tiempo, fase]);

  function validarClave() {
    if (clave.trim() === CLAVE_EXAMEN) {
      setErrorClave(false);
      setFase('examen');
    } else {
      setErrorClave(true);
    }
  }

  function avanzar() {
    setRespuestas((prev) => {
      const nuevo = [...prev];
      nuevo[idx] = seleccion;
      return nuevo;
    });
    if (idx + 1 < REACTIVOS.length) {
      setIdx((i) => i + 1);
      setSeleccion(null);
    } else {
      setFase('resultados');
    }
  }

  function reiniciar() {
    setFase('clave');
    setClave('');
    setErrorClave(false);
    setIdx(0);
    setSeleccion(null);
    setRespuestas(Array(REACTIVOS.length).fill(null));
    setTiempo(TIEMPO_POR_PREGUNTA);
  }

  const aciertos = respuestas.reduce(
    (acc, r, i) => acc + (r === REACTIVOS[i].correcta ? 1 : 0),
    0
  );
  const porcentaje = Math.round((aciertos / REACTIVOS.length) * 100);

  // ===================== PANTALLA DE CLAVE =====================
  if (fase === 'clave') {
    return (
      <div
        style={{ background: C.crema, color: C.texto }}
        className="min-h-screen flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl bg-white"
        >
          <div style={{ background: C.naranja }} className="px-6 py-7 text-center text-white">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
              <Lock size={28} />
            </div>
            <h1 className="text-xl font-extrabold leading-tight">Examen · Campos y Ejes</h1>
            <p className="mt-1 text-sm text-white/90">Banco USICAMM · Plan 2022 + LGE</p>
          </div>

          <div className="px-6 py-6">
            <div
              style={{ background: C.crema, borderColor: C.durazno }}
              className="mb-5 rounded-xl border p-4 text-sm leading-relaxed"
            >
              <p className="mb-2 font-semibold" style={{ color: C.oscuro }}>Antes de comenzar:</p>
              <ul className="space-y-1">
                <li>• <strong>22 reactivos</strong> de campos formativos y ejes articuladores.</li>
                <li>• <strong>1:30 por pregunta</strong>. Si se acaba el tiempo, avanza y cuenta como incorrecta.</li>
                <li>• No se puede regresar a una pregunta anterior.</li>
                <li>• El resultado y las explicaciones aparecen <strong>al final</strong>.</li>
              </ul>
            </div>

            <label className="mb-2 block text-sm font-semibold" style={{ color: C.oscuro }}>
              Clave de acceso
            </label>
            <input
              type="password"
              inputMode="numeric"
              value={clave}
              onChange={(e) => {
                setClave(e.target.value);
                setErrorClave(false);
              }}
              onKeyDown={(e) => e.key === 'Enter' && validarClave()}
              placeholder="••••"
              style={{ borderColor: errorClave ? '#dc2626' : C.durazno }}
              className="w-full rounded-xl border-2 px-4 py-3 text-center text-lg tracking-[0.4em] outline-none focus:ring-2"
            />

            <AnimatePresence>
              {errorClave && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 flex items-center gap-2 text-sm text-red-600"
                >
                  <AlertCircle size={16} />
                  Clave incorrecta. Inténtalo de nuevo.
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={validarClave}
              style={{ background: C.naranja }}
              className="mt-5 w-full rounded-xl py-3 font-bold text-white transition-transform active:scale-[0.98] hover:opacity-95"
            >
              Comenzar examen
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ===================== PANTALLA DE RESULTADOS =====================
  if (fase === 'resultados') {
    let mensaje = '¡Sigue estudiando, tú puedes!';
    if (porcentaje >= 90) mensaje = '¡Excelente, dominas los campos y ejes!';
    else if (porcentaje >= 70) mensaje = '¡Muy bien! Repasa los reactivos fallados.';
    else if (porcentaje >= 50) mensaje = 'Vas avanzando, refuerza las distinciones clave.';

    return (
      <div style={{ background: C.crema, color: C.texto }} className="min-h-screen px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl bg-white p-7 text-center shadow-xl"
          >
            <div
              style={{ background: C.naranja }}
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-white"
            >
              <Award size={34} />
            </div>
            <h1 className="text-2xl font-extrabold" style={{ color: C.oscuro }}>
              Resultado final
            </h1>
            <p className="mt-1 text-sm" style={{ color: C.texto }}>{mensaje}</p>

            <div className="my-6 flex items-center justify-center gap-6">
              <div>
                <div className="text-5xl font-extrabold" style={{ color: C.naranja }}>
                  {aciertos}<span className="text-2xl text-gray-400">/{REACTIVOS.length}</span>
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">Aciertos</div>
              </div>
              <div className="h-12 w-px bg-gray-200" />
              <div>
                <div className="text-5xl font-extrabold" style={{ color: C.naranja }}>{porcentaje}%</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-gray-500">Calificación</div>
              </div>
            </div>

            <button
              onClick={reiniciar}
              style={{ background: C.naranja }}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-white transition-transform active:scale-[0.98] hover:opacity-95"
            >
              <RotateCcw size={18} /> Reiniciar examen
            </button>
          </motion.div>

          <h2 className="mb-3 mt-8 text-lg font-bold" style={{ color: C.oscuro }}>
            Revisión de respuestas
          </h2>

          <div className="space-y-4">
            {REACTIVOS.map((r, i) => {
              const miResp = respuestas[i];
              const acerto = miResp === r.correcta;
              return (
                <div key={r.id} className="overflow-hidden rounded-xl bg-white shadow-sm">
                  <div
                    style={{ background: acerto ? '#16a34a' : '#dc2626' }}
                    className="flex items-center justify-between px-4 py-2 text-sm font-semibold text-white"
                  >
                    <span>Pregunta {i + 1}</span>
                    <span className="flex items-center gap-1">
                      {acerto ? <Check size={16} /> : <X size={16} />}
                      {acerto ? 'Correcta' : miResp === null ? 'Sin responder' : 'Incorrecta'}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="mb-3 text-sm leading-relaxed">{r.enunciado}</p>

                    {r.tipo === 'Relacionar' && (
                      <div className="mb-3 grid grid-cols-1 gap-1 rounded-lg p-3 text-xs leading-relaxed" style={{ background: C.crema }}>
                        {r.columnaA.map((a, k) => (
                          <div key={`a-${k}`}>{a}</div>
                        ))}
                        <div className="my-1 h-px bg-gray-200" />
                        {r.columnaB.map((b, k) => (
                          <div key={`b-${k}`}>{b}</div>
                        ))}
                      </div>
                    )}

                    <div className="space-y-2">
                      {r.opciones.map((op, k) => {
                        const esCorrecta = k === r.correcta;
                        const esMia = k === miResp;
                        let estilo = { borderColor: '#e5e7eb', background: '#fff' };
                        if (esCorrecta) estilo = { borderColor: '#16a34a', background: '#f0fdf4' };
                        else if (esMia && !esCorrecta) estilo = { borderColor: '#dc2626', background: '#fef2f2' };
                        return (
                          <div
                            key={k}
                            style={estilo}
                            className="flex items-start gap-2 rounded-lg border px-3 py-2 text-sm"
                          >
                            <span className="font-bold uppercase">{LETRAS[k]})</span>
                            <span className="flex-1">{op}</span>
                            {esCorrecta && <Check size={16} className="mt-0.5 shrink-0 text-green-600" />}
                            {esMia && !esCorrecta && <X size={16} className="mt-0.5 shrink-0 text-red-600" />}
                          </div>
                        );
                      })}
                    </div>

                    <div
                      style={{ background: C.crema, borderColor: C.durazno }}
                      className="mt-3 rounded-lg border p-3 text-sm leading-relaxed"
                    >
                      <span className="font-semibold" style={{ color: C.oscuro }}>Explicación: </span>
                      {r.explicacion}
                      <div className="mt-1 text-xs text-gray-500">Fuente: {r.fuente}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ===================== PANTALLA DE EXAMEN =====================
  const r = REACTIVOS[idx];
  const esUltima = idx === REACTIVOS.length - 1;
  const tiempoBajo = tiempo <= 15;
  const pctTiempo = (tiempo / TIEMPO_POR_PREGUNTA) * 100;

  return (
    <div style={{ background: C.crema, color: C.texto }} className="min-h-screen px-4 py-6">
      <div className="mx-auto max-w-2xl">
        {/* Barra superior */}
        <div className="mb-4 rounded-xl bg-white p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between text-sm font-semibold">
            <span style={{ color: C.oscuro }}>
              Pregunta {idx + 1} de {REACTIVOS.length}
            </span>
            <span
              className="flex items-center gap-1.5 rounded-full px-3 py-1 font-bold"
              style={{
                background: tiempoBajo ? '#fee2e2' : C.crema,
                color: tiempoBajo ? '#dc2626' : C.oscuro,
              }}
            >
              <Clock size={16} />
              {formatoTiempo(tiempo)}
            </span>
          </div>

          {/* Barra de tiempo */}
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <motion.div
              animate={{ width: `${pctTiempo}%` }}
              transition={{ ease: 'linear', duration: 0.4 }}
              className="h-full rounded-full"
              style={{ background: tiempoBajo ? '#dc2626' : C.naranja }}
            />
          </div>

          {/* Progreso de avance */}
          <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${((idx + 1) / REACTIVOS.length) * 100}%`, background: C.durazno }}
            />
          </div>
        </div>

        {/* Tarjeta de pregunta */}
        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl bg-white p-6 shadow-md"
          >
            <span
              style={{ background: C.durazno, color: C.oscuro }}
              className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
            >
              {r.tipo}
            </span>

            <p className="mb-5 mt-3 text-base font-medium leading-relaxed">{r.enunciado}</p>

            {r.tipo === 'Relacionar' && (
              <div
                style={{ background: C.crema }}
                className="mb-5 grid grid-cols-1 gap-3 rounded-xl p-4 text-sm leading-relaxed md:grid-cols-2"
              >
                <div>
                  <p className="mb-1 font-bold" style={{ color: C.oscuro }}>Columna A</p>
                  {r.columnaA.map((a, k) => (
                    <p key={`a-${k}`} className="mb-1">{a}</p>
                  ))}
                </div>
                <div>
                  <p className="mb-1 font-bold" style={{ color: C.oscuro }}>Columna B</p>
                  {r.columnaB.map((b, k) => (
                    <p key={`b-${k}`} className="mb-1">{b}</p>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-3">
              {r.opciones.map((op, k) => {
                const activa = seleccion === k;
                return (
                  <button
                    key={k}
                    onClick={() => setSeleccion(k)}
                    style={{
                      borderColor: activa ? C.naranja : '#e5e7eb',
                      background: activa ? C.crema : '#fff',
                    }}
                    className="flex w-full items-start gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm transition-all active:scale-[0.99]"
                  >
                    <span
                      style={{
                        background: activa ? C.naranja : '#f3f4f6',
                        color: activa ? '#fff' : '#6b7280',
                      }}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold uppercase"
                    >
                      {LETRAS[k]}
                    </span>
                    <span className="flex-1 pt-0.5 leading-relaxed">{op}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Botón avanzar */}
        <button
          onClick={avanzar}
          style={{ background: C.naranja }}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-white transition-transform active:scale-[0.98] hover:opacity-95"
        >
          {esUltima ? 'Finalizar examen' : 'Pregunta siguiente'}
          <ChevronRight size={20} />
        </button>

        <p className="mt-3 text-center text-xs text-gray-400">
          SNTE Sección 21 · Promoción Horizontal USICAMM
        </p>
      </div>
    </div>
  );
}
