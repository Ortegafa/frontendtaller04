import CourseCard from '../components/CourseCard.jsx'
import { cursos } from '../data/cursos.js'

function Cursos() {
  return (
    <section className="seccion-clara">
      <h2>Nuestros Cursos</h2>
      <p className="subtitulo">Elige el camino que mejor se adapte a ti</p>
      <div className="grid">
        {cursos.map((curso) => (
          <CourseCard key={curso.id} {...curso} />
        ))}
      </div>
    </section>
  )
}

export default Cursos
