import { useEffect } from "react";
import logo from "./assets/logo.png";
import logoMJ from "./assets/LogoMJ.png";
import imgMuebles from "./assets/muebles.png";
import imgInteriores from "./assets/interiores.png";
import imgDecorativos from "./assets/decorativos.png";
import imgEspeciales from "./assets/especiales.png";

export default function Home() {
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const cards = Array.from(document.querySelectorAll(".service-card"));

    let rafId;

    const update = () => {
      const centerLine = window.innerHeight * 0.5;
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.classList.toggle(
          "is-active",
          rect.top <= centerLine && rect.bottom >= centerLine,
        );
      });
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="container-xl">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-8">
              <p className="hero__eyebrow">Taller de carpintería</p>
              <h1 className="hero__title">Tu idea en madera.</h1>
              <p className="hero__subtitle">
                Si lo imaginas, en Colaboratorio Carpintero lo fabricamos.{" "}
                <br />
                Muebles, regalos, premios y piezas únicas, con grabado láser
                incluido.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <a href="#taller" className="btn btn-primary btn-lg">
                  Ver nuestro trabajo
                </a>
                <a
                  href="#modo-juego"
                  className="btn btn-outline-primary btn-lg"
                >
                  Conoce Modo Juego
                </a>
              </div>
            </div>

            {/* Logo desktop */}
            <div className="col-lg-5 col-md-4 d-none d-md-flex justify-content-center">
              <div className="flip-scene">
                <div className="flip-card">
                  <div className="flip-card__front">
                    <img src={logo} alt="Colaboratorio Carpintero" />
                  </div>
                  <div className="flip-card__back">
                    <img src={logoMJ} alt="Modo Juego" />
                  </div>
                </div>
              </div>
            </div>

            {/* Logo móvil — arriba a la derecha */}
            <div className="flip-scene flip-scene--mobile d-md-none">
              <div className="flip-card">
                <div className="flip-card__front">
                  <img src={logo} alt="Colaboratorio Carpintero" />
                </div>
                <div className="flip-card__back">
                  <img src={logoMJ} alt="Modo Juego" />
                </div>
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
            Juegos de jardín, fabricados en madera de encino. Diseñados para
            reunir a las personas y resistir la intemperie.
          </p>

          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <div className="mj-card">
                <div className="mj-card__icon">🎲</div>
                <h3>Jenga gigante</h3>
                <p>
                  Bloques de encino macizo para partidas épicas al aire libre.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mj-card">
                <div className="mj-card__icon">🏓</div>
                <h3>Tiro al hoyo</h3>
                <p>
                  Tableros pintados a mano, con acabado resistente a la lluvia.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mj-card">
                <div className="mj-card__icon">♟️</div>
                <h3>Ajedrez de jardín</h3>
                <p>
                  Piezas torneadas en encino, a escala humana. Un clásico
                  reinventado.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-3">
            <div className="col-md-6">
              <div className="option-card option-card--rent">
                <h3>Renta</h3>
                <p>
                  Perfecto para eventos, fiestas y reuniones. Te lo llevamos, lo
                  instalamos y recogemos al terminar.
                </p>
                <a href="#contacto" className="btn btn-light">
                  Preguntar por renta
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="option-card option-card--buy">
                <h3>Compra</h3>
                <p>
                  Invierte en piezas que duran generaciones. Personalización de
                  medidas, grabado y acabados disponible.
                </p>
                <a href="#contacto" className="btn btn-outline-light">
                  Cotizar pieza
                </a>
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
                Colaboratorio Carpintero nació de una idea simple: la mejor
                pieza de madera es la que alguien imaginó y nosotros hicimos
                realidad.
              </p>
              <p>
                Somos un taller artesanal en Guadalajara donde diseñamos y
                fabricamos piezas de madera a medida: muebles, regalos, premios,
                detalles corporativos y lo que sea que tengas en mente.
              </p>
              <p>
                Si tienes una idea, aunque sea a medias, aquí la desarrollamos
                contigo.
              </p>
            </div>

            <div className="col-lg-6">
              <div className="d-flex flex-column gap-4">
                <div className="value">
                  <span className="value__icon">🌳</span>
                  <div>
                    <strong>Asesoría en materiales</strong>
                    <p>
                      Te ayudamos a elegir la madera ideal según tu proyecto,
                      presupuesto y uso final.
                    </p>
                  </div>
                </div>
                <div className="value">
                  <span className="value__icon">📐</span>
                  <div>
                    <strong>A tu medida, de verdad</strong>
                    <p>
                      No adaptamos moldes. Diseñamos desde cero según lo que tú
                      necesitas.
                    </p>
                  </div>
                </div>
                <div className="value">
                  <span className="value__icon">🔆</span>
                  <div>
                    <strong>Grabado láser</strong>
                    <p>
                      El detalle que convierte una pieza bonita en algo único e
                      irrepetible.
                    </p>
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
          <h2 className="section-title section-title--light mb-4">
            Lo que hacemos
          </h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="service-card">
                <img
                  src={imgMuebles}
                  alt="Muebles a medida"
                  className="service-card__img"
                />
                <div className="service-card__overlay">
                  <h3>Muebles a medida</h3>
                  <p>
                    Mesas, sillas, libreros, camas. Diseño colaborativo desde el
                    boceto.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-card">
                <img
                  src={imgInteriores}
                  alt="Carpintería de interiores"
                  className="service-card__img"
                />
                <div className="service-card__overlay">
                  <h3>Carpintería de interiores</h3>
                  <p>Cocinas, closets, puertas y revestimientos.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-card">
                <img
                  src={imgDecorativos}
                  alt="Objetos decorativos"
                  className="service-card__img"
                />
                <div className="service-card__overlay">
                  <h3>Objetos decorativos</h3>
                  <p>
                    Marcos, tablas, lámparas y piezas únicas para regalar o
                    coleccionar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-card">
                <img
                  src={imgEspeciales}
                  alt="Proyectos especiales"
                  className="service-card__img"
                />
                <div className="service-card__overlay">
                  <h3>Proyectos especiales</h3>
                  <p>
                    Si tienes una idea fuera de lo común, nos interesa
                    escucharla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO CTA */}
      <section className="cta" id="contacto">
        <div className="container-xl text-center">
          <h2 className="section-title">¿Tienes un proyecto en mente?</h2>
          <p className="section-subtitle mx-auto" style={{ maxWidth: "520px" }}>
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
