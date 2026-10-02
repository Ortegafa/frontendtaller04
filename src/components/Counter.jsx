import { useState } from 'react'

function Counter() {
  const [cantidad, setCantidad] = useState(0)

  return (
    <section className="contador seccion-oscura">
      <h2>¿Cuántos estudiantes van a inscribirse?</h2>
      <p className="subtitulo">Usa los botones para ajustar el número</p>
      <div className="contador__caja">
        <button
          className="contador__boton"
          onClick={() => setCantidad((c) => Math.max(0, c - 1))}
          aria-label="Restar"
        >
          −
        </button>
        <span className="contador__valor">{cantidad}</span>
        <button
          className="contador__boton"
          onClick={() => setCantidad((c) => c + 1)}
          aria-label="Sumar"
        >
          +
        </button>
      </div>
      <p className="contador__etiqueta">estudiantes inscritos</p>
    </section>
  )
}

export default Counter
