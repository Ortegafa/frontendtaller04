import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero">
      <h1>
        Aprende <span className="acento">React</span> desde cero
      </h1>
      <p>Domina la librería más popular del frontend con proyectos prácticos y reales.</p>
      <Link to="/cursos" className="boton">Ver Cursos</Link>
    </section>
  )
}

export default Hero
