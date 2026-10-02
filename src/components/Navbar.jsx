import { Link, NavLink } from 'react-router-dom'

const enlaces = [
  { to: '/', texto: 'Inicio' },
  { to: '/cursos', texto: 'Cursos' },
  { to: '/nosotros', texto: 'Nosotros' },
  { to: '/login', texto: 'Ingresar' },
]

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__logo">ReactAcademy</Link>
      <nav>
        <ul className="navbar__links">
          {enlaces.map(({ to, texto }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => (isActive ? 'navbar__link activo' : 'navbar__link')}
              >
                {texto}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
