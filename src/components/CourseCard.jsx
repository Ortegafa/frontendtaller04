function CourseCard({ icono, titulo, descripcion, nivel }) {
  return (
    <article className="card">
      <span className="card__icono" aria-hidden="true">{icono}</span>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
      {nivel && <span className="badge">{nivel}</span>}
    </article>
  )
}

export default CourseCard
