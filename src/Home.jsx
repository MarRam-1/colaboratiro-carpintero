export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-7 col-md-10">
              <p className="hero__eyebrow">Taller de carpintería</p>
              <h1 className="hero__title">
                Hecho a mano,<br />hecho para durar.
              </h1>
              <p className="hero__subtitle">
                En Colaboratorio Carpintero diseñamos y fabricamos piezas de madera
                con oficio, cuidado y carácter. Cada proyecto cuenta una historia.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#taller" className="btn btn-primary btn-lg">Ver nuestro trabajo</a>
                <a href="#modo-juego" className="btn btn-outline-primary btn-lg">Conoce Modo Juego</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODO JUEGO */}
      <section className="modo-juego" id="modo-juego">
        <div className="container-xl">

          <span className="mj-badge">Nueva línea</span>
          <h2 className="section-title">Modo Juego</h2>
          <p className="section-subtitle">
            Juegos de jardín artesanales, fabricados en madera de encino.
            Diseñados para reunir a las personas y resistir la intemperie.
          </p>

          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <div className="mj-card">
                <div className="mj-card__icon">🎲</div>
                <h3>Jenga gigante</h3>
                <p>Bloques de encino macizo para partidas épicas al aire libre.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mj-card">
                <div className="mj-card__icon">🏓</div>
                <h3>Tiro al hoyo</h3>
                <p>Tableros pintados a mano, con acabado resistente a la lluvia.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mj-card">
                <div className="mj-card__icon">♟️</div>
                <h3>Ajedrez de jardín</h3>
                <p>Piezas torneadas en encino, a escala humana. Un clásico reinventado.</p>
              </div>
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <div className="option-card option-card--rent">
                <h3>Renta</h3>
                <p>
                  Perfecto para eventos, fiestas y reuniones. Te lo llevamos,
                  lo instalamos y recogemos al terminar.
                </p>
                <a href="#contacto" className="btn btn-light">Preguntar por renta</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="option-card option-card--buy">
                <h3>Compra</h3>
                <p>
                  Invierte en piezas que duran generaciones. Personalización
                  de medidas, grabado y acabados disponible.
                </p>
                <a href="#contacto" className="btn btn-outline-light">Cotizar pieza</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* NOSOTROS */}
      <section className="about" id="nosotros">
        <div className="container-xl">
          <div className="row g-5 align-items-start">

            <div className="col-lg-6 about__text">
              <h2 className="section-title">Sobre el taller</h2>
              <p>
                Colaboratorio Carpintero nació de la idea de que trabajar la madera
                es un acto colaborativo: entre el artesano, el material y quien va a
                usarlo. Cada pieza que sale del taller pasa por manos que conocen el
                oficio y se preocupan por el detalle.
              </p>
              <p>
                Trabajamos principalmente con maderas mexicanas de encino y cedro,
                con procesos que respetan el material y el medioambiente.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="d-flex flex-column gap-4">
                <div className="value">
                  <span className="value__icon">🌳</span>
                  <div>
                    <strong>Madera local</strong>
                    <p>Usamos encino y cedro mexicano, de proveedores responsables.</p>
                  </div>
                </div>
                <div className="value">
                  <span className="value__icon">✋</span>
                  <div>
                    <strong>Trabajo artesanal</strong>
                    <p>Cada pieza es diseñada, construida y terminada a mano.</p>
                  </div>
                </div>
                <div className="value">
                  <span className="value__icon">📐</span>
                  <div>
                    <strong>A tu medida</strong>
                    <p>Diseñamos piezas únicas según tus necesidades y espacio.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TALLER / SERVICIOS */}
      <section className="services" id="taller">
        <div className="container-xl">
          <h2 className="section-title section-title--light mb-4">Lo que hacemos</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="service-card">
                <h3>Muebles a medida</h3>
                <p>Mesas, sillas, libreros, camas. Diseño colaborativo desde el boceto.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-card">
                <h3>Carpintería de interiores</h3>
                <p>Cocinas, closets, divisiones y revestimientos en madera maciza.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-card">
                <h3>Objetos decorativos</h3>
                <p>Marcos, charolas, lámparas y piezas únicas para regalar o coleccionar.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-card">
                <h3>Proyectos especiales</h3>
                <p>Si tienes una idea fuera de lo común, nos interesa escucharla.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO CTA */}
      <section className="cta" id="contacto">
        <div className="container-xl text-center">
          <h2 className="section-title">¿Tienes un proyecto en mente?</h2>
          <p className="section-subtitle mx-auto" style={{ maxWidth: '520px' }}>
            Cuéntanos qué necesitas y te respondemos en menos de 48 horas.
          </p>
          <a
            href="mailto:hola@colaboratoriocarpintero.com"
            className="btn btn-primary btn-lg"
          >
            Escríbenos
          </a>
        </div>
      </section>

    </main>
  );
}
