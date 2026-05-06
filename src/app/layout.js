import './globals.css'

export const metadata = {
  title: 'SNTE Sección 21 — Sesión 1 | Promoción Horizontal',
  description: 'Curso de Promoción Horizontal — SNTE Sección 21 Nuevo León. Flashcards y exámenes para preparar el examen USICAMM.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
