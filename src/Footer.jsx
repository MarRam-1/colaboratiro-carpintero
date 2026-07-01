export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-xl">

        <div className="row g-4 py-5">
          <div className="col-md-5">
            <p className="footer__brand-name">Colaboratorio Carpintero</p>
            <p className="footer__tagline">Madera con oficio. Hecho en México.</p>
          </div>

          <div className="col-md-3 offset-md-1">
            <span className="footer__col-title">Navegación</span>
            <ul className="footer__links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#taller">Taller</a></li>
              <li><a href="#modo-juego">Modo Juego</a></li>
            </ul>
          </div>

          <div className="col-md-3">
            <span className="footer__col-title">Contacto</span>
            <ul className="footer__links">
              <li>
                <a href="mailto:hola@colaboratoriocarpintero.com">
                  hola@colaboratoriocarpintero.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/colaboratoriocarpintero" target="_blank" rel="noreferrer">
                  @colaboratoriocarpintero
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom py-3">
          <p>© {new Date().getFullYear()} Colaboratorio Carpintero. Todos los derechos reservados.</p>
        </div>

      </div>
    </footer>
  );
}
