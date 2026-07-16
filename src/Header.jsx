export default function Header() {
  return (
    <header className="header sticky-top">
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
        <div className="container-xl">

          <a href="/" className="navbar-brand header__brand">
            <span className="header__brand-main">Colaboratorio</span>
            <span className="header__brand-sub">Carpintero</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Abrir menú"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <div className="navbar-nav ms-auto d-flex align-items-lg-center gap-3 header__nav">
              <a href="/#inicio" className="nav-link">Inicio</a>
              <a href="/#nosotros" className="nav-link">Nosotros</a>
              <a href="/#taller" className="nav-link">Taller</a>
              <a href="/modo-juego" className="nav-link header__nav-highlight">Modo Juego</a>
              <a href="/#contacto" className="btn btn-primary">Contacto</a>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}
