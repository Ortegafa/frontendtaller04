import CourseCard from '../components/CourseCard.jsx'

const valores = [
  { icono: '🎯', titulo: 'Práctica primero', descripcion: 'Cada tema se aprende construyendo algo que funciona.' },
  { icono: '🤝', titulo: 'Comunidad', descripcion: 'Aprendes junto a otros estudiantes y mentores que ya pasaron por ahí.' },
  { icono: '📈', titulo: 'A tu ritmo', descripcion: 'Del primer componente a la arquitectura de proyectos grandes.' },
]

function Nosotros() {
  return (
    <section className="seccion-clara">
      <h2>Sobre Nosotros</h2>
      <p className="subtitulo">
        En ReactAcademy enseñamos React con proyectos reales, paso a paso y sin rodeos.
      </p>
      <div className="grid">
        {valores.map((valor) => (
          <CourseCard key={valor.titulo} {...valor} />
        ))}
      </div>
    </section>
  )
}

export default Nosotros
