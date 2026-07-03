import { useEffect } from "react";
import FlipCard from "./FlipCard";
import imgMuebles from "./assets/muebles.png";
import imgInteriores from "./assets/interiores.png";
import imgDecorativos from "./assets/decorativos.png";
import imgEspeciales from "./assets/especiales.png";
import imgJenga from "./assets/jenga.png";
import imgCornhole from "./assets/cornhole.png";
import imgGolf from "./assets/golf.png";

const SERVICES = [
  {
    img: imgMuebles,
    alt: "Muebles a medida",
    title: "Muebles a medida",
    desc: "Mesas, sillas, libreros, camas. Diseño colaborativo desde el boceto.",
  },
  {
    img: imgInteriores,
    alt: "Carpintería de interiores",
    title: "Carpintería de interiores",
    desc: "Cocinas, closets, puertas y revestimientos.",
  },
  {
    img: imgDecorativos,
    alt: "Objetos decorativos",
    title: "Objetos decorativos",
    desc: "Marcos, tablas, lámparas y piezas únicas para regalar o coleccionar.",
  },
  {
    img: imgEspeciales,
    alt: "Proyectos especiales",
    title: "Proyectos especiales",
    desc: "Si tienes una idea fuera de lo común, nos interesa escucharla.",
  },
];

const MJ_GAMES = [
  {
    icon: "🎲",
    name: "JENGA GIGANTE",
    quote: "La torre no va a caer… ¿o sí?",
    bgImage: imgJenga,
    stats: [
      { label: "Tensión", pct: 80 },
      { label: "Jugadores", pct: 100, text: "2 — ∞" },
      { label: "Material", pct: 100, text: "Encino" },
    ],
    rotation: "-2deg",
  },
  {
    icon: "🎯",
    name: "CORNHOLE",
    quote: "Advertencia: puede causar rivalidades de por vida.",
    bgImage: imgCornhole,
    stats: [
      { label: "Competencia", pct: 70 },
      { label: "Jugadores", pct: 50, text: "2 — 4" },
      { label: "Material", pct: 100, text: "Encino" },
    ],
    rotation: "1.5deg",
  },
  {
    icon: "⛳",
    name: "MINI GOLF",
    quote: "Fácil de aprender. Imposible de dominar.",
    bgImage: imgGolf,
    stats: [
      { label: "Frustración elegante", pct: 90 },
      { label: "Jugadores", pct: 75, text: "1 — 6" },
      { label: "Material", pct: 100, text: "Encino + pasto sintético" },
    ],
    rotation: "-1deg",
  },
];

const ABOUT_VALUES = [
  {
    icon: "🌳",
    title: "Asesoría en materiales",
    desc: "Te ayudamos a elegir la madera ideal según tu proyecto, presupuesto y uso final.",
  },
  {
    icon: "📐",
    title: "A tu medida, de verdad",
    desc: "No adaptamos moldes. Diseñamos desde cero según lo que tú necesitas.",
  },
  {
    icon: "🔆",
    title: "Grabado láser",
    desc: "El detalle que convierte una pieza bonita en algo único e irrepetible.",
  },
];

export default function Home() {
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const cards = Array.from(document.querySelectorAll(".service-card"));
    let rafId;

    const update = () => {
      const centerLine = window.innerHeight * 0.5;
      cards.forEach((card) => {
        const { top, bottom } = card.getBoundingClientRect();
        card.classList.toggle(
          "is-active",
          top <= centerLine && bottom >= centerLine,
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
                Si lo imaginas, en Colaboratorio Carpintero lo fabricamos.
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

            <div className="col-lg-5 col-md-4 d-none d-md-flex justify-content-center">
              <FlipCard />
            </div>

            <FlipCard className="flip-scene--mobile d-md-none" />
          </div>
        </div>
      </section>

      {/* MODO JUEGO */}
      <section className="modo-juego" id="modo-juego">
        <div className="container-xl">
          <span className="mj-badge">▶ PRESS START</span>
          <h2 className="mj-headline">MODO JUEGO: ACTIVADO</h2>
          <p className="mj-tagline">Juegos gigantes de encino.</p>
          <p className="mj-level">Nivel: evento inolvidable.</p>
          <p className="mj-subheadline">
            Fabricados a mano en Guadalajara. No son de plástico.
            <br />
            Se nota en cuanto los tocas.
          </p>

          <div className="row g-4 mb-4">
            {MJ_GAMES.map(({ icon, name, quote, bgImage, stats, rotation }) => (
              <div key={name} className="col-md-4">
                <div
                  className="mj-game-card"
                  style={{ "--card-rotation": rotation }}
                >
                  <img
                    src={bgImage}
                    alt=""
                    aria-hidden="true"
                    className="mj-game-card__bg"
                  />
                  <div className="mj-game-card__content">
                    <span className="mj-game-card__icon">{icon}</span>
                    <h3 className="mj-game-card__name">{name}</h3>
                    <p className="mj-game-card__quote">"{quote}"</p>
                    <div>
                      {stats.map(({ label, pct, text }) => (
                        <div key={label} className="mj-stat">
                          <div className="mj-stat__header">
                            <span className="mj-stat__label">{label}</span>
                            <span className="mj-stat__value">
                              {text ?? `${pct}%`}
                            </span>
                          </div>
                          <div className="mj-stat__track">
                            <div
                              className="mj-stat__fill"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-3 align-items-stretch">
            <div className="col-md-7">
              <div className="option-card option-card--buy">
                <div className="option-card__eyebrow">COMPRA</div>
                <h3 className="option-card__title">Ítem permanente</h3>
                <p>
                  Desbloquea el juego para siempre. Encino, acabado artesanal,
                  grabado con tu logo. Una inversión. Infinite plays.
                </p>
                <a href="#contacto" className="btn btn-light">
                  ADQUIRIR
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <div className="option-card option-card--rent">
                <div className="option-card__eyebrow">RENTA</div>
                <h3 className="option-card__title">Partida de un día</h3>
                <p>
                  ¿Evento próximo? Renta por evento. Te lo llevamos, instalamos
                  y recogemos. Sin inventario. Sin pretextos.
                </p>
                <a href="#contacto" className="btn btn-outline-light">
                  ENTRAR A LA PARTIDA
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
                {ABOUT_VALUES.map(({ icon, title, desc }) => (
                  <div key={title} className="value">
                    <span className="value__icon">{icon}</span>
                    <div>
                      <strong>{title}</strong>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
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
            {SERVICES.map(({ img, alt, title, desc }) => (
              <div key={title} className="col-md-6">
                <div className="service-card">
                  <img
                    src={img}
                    alt={alt}
                    className="service-card__img"
                    loading="lazy"
                  />
                  <div className="service-card__overlay">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO CTA */}
      <section className="cta" id="contacto">
        <div className="container-xl text-center">
          <h2 className="section-title">¿Tienes un proyecto en mente?</h2>
          <p className="section-subtitle mx-auto" style={{ maxWidth: "520px" }}>
            Cuéntanos qué necesitas y lo hacemos realidad.
          </p>
          <a
            href="https://wa.me/5213324922786"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-lg"
          >
            Escríbenos
          </a>
        </div>
      </section>
    </main>
  );
}
