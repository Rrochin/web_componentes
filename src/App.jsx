import './App.css'
import heroImage from './hero.jpg'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">Mecánica Express</div>
        <nav className="nav">
          <a href="#">Inicio</a>
          <a href="#">Servicios</a>
          <a href="#">Precios</a>
          <a href="#">Blog</a>
          <a href="#">Contacto</a>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-text">
          <h1>¿Tu auto se detuvo? Nosotros llegamos.</h1>
          <p>Asistencia mecánica inmediata en tu ubicación, las 24 horas.</p>
          <div className="buttons">
            <button className="btn primary">Explorar Servicios</button>
            <button className="btn secondary">Saber Más</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Asistencia Mecánica" />
        </div>
      </main>
    </div>
  )
}

export default App
