# Taller 04 — La misma landing, ahora con rutas

Landing de **ReactAcademy** (Taller 03) dividida en vistas con **React Router**.

## Rutas

| Ruta        | Qué muestra                          |
| ----------- | ------------------------------------ |
| `/`         | Vista principal (hero + contador)    |
| `/cursos`   | Sección de cursos                    |
| `/nosotros` | Sección de nosotros                  |
| `/login`    | Formulario de ingreso (solo interfaz)|
| `*`         | Página 404                           |

El `<Navbar />` se muestra en todas las rutas y navega con `NavLink` (nunca `<a href>`).

## Estructura

```
src/
  main.jsx          ← BrowserRouter
  App.jsx           ← Routes y Route
  views/            ← una vista por archivo
    Home.jsx  Cursos.jsx  Nosotros.jsx  Login.jsx  NotFound.jsx
  components/       ← Navbar, Footer, Hero, CourseCard, Counter
  data/cursos.js
```

## /login

- El botón está deshabilitado mientras haya campos vacíos.
- Al enviar, los campos se deshabilitan.
- No hay backend ni usuario real.

## Cómo correrlo

```bash
npm install
npm run dev
```
