import { useState } from 'react'

function Login() {
  const [correo, setCorreo] = useState('')
  const [clave, setClave] = useState('')
  const [enviado, setEnviado] = useState(false)

  const hayCamposVacios = correo.trim() === '' || clave.trim() === ''

  const manejarEnvio = (e) => {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section className="seccion-oscura login">
      <form className="login__form" onSubmit={manejarEnvio}>
        <h2>Iniciar sesión</h2>

        <label htmlFor="correo">Correo</label>
        <input
          id="correo"
          type="email"
          placeholder="tu@correo.com"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          disabled={enviado}
        />

        <label htmlFor="clave">Contraseña</label>
        <input
          id="clave"
          type="password"
          placeholder="••••••••"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          disabled={enviado}
        />

        <button type="submit" className="boton" disabled={hayCamposVacios || enviado}>
          {enviado ? 'Enviado' : 'Ingresar'}
        </button>

        <p className="login__micro">
          Solo es interfaz: no hay backend y no se valida ningún usuario ni contraseña.
        </p>
      </form>
    </section>
  )
}

export default Login
