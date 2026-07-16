import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebookF,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";

// Juegos gigantes — imágenes existentes
import imgJenga from "./assets/jenga.png";
import imgCornhole from "./assets/cornhole.png";
import imgGolf from "./assets/golf.png";
// Juegos gigantes — agregar a src/assets/ con estos nombres exactos:
import imgDomino from "./assets/domino.png";
import imgShuffleboard from "./assets/shuffleboard.png";
import imgBaseball from "./assets/baseball.png";
import imgHockey from "./assets/hockey.png";

// Juegos minis — agregar a src/assets/ con estos nombres exactos:
import imgCornholeMini from "./assets/cornhole-mini.png";
import imgCanicas from "./assets/canicas.png";
import imgCatapulta from "./assets/catapulta.png";

const GIANT_GAMES = [
  {
    img: imgJenga,
    name: "Jenga Gigante",
    desc: "Bloques de encino, tamaño jardín. Cada pieza es una decisión. La torre cae cuando menos lo esperas.",
    stats: [
      { label: "Tensión", pct: 80 },
      { label: "Jugadores", pct: 100, text: "2 — ∞" },
      { label: "Material", pct: 100, text: "Encino" },
    ],
    waMsg: "Hola, me interesa el Jenga Gigante de Modo Juego",
  },
  {
    img: imgCornhole,
    name: "Cornhole",
    desc: "Tableros pintados a mano, bolsas incluidas. El juego favorito de todos los que dicen que no saben jugar.",
    stats: [
      { label: "Competencia", pct: 70 },
      { label: "Jugadores", pct: 50, text: "2 — 4" },
      { label: "Material", pct: 100, text: "Encino" },
    ],
    waMsg: "Hola, me interesa el Cornhole de Modo Juego",
  },
  {
    img: imgGolf,
    name: "Mini Golf",
    desc: "Hoyos de madera con obstáculos hechos a mano. Fácil de armar, difícil de dominar.",
    stats: [
      { label: "Frustración", pct: 90 },
      { label: "Jugadores", pct: 75, text: "1 — 6" },
      { label: "Material", pct: 100, text: "Encino + pasto sintético" },
    ],
    waMsg: "Hola, me interesa el Mini Golf de Modo Juego",
  },
  {
    img: imgDomino,
    name: "Dominó Gigante",
    desc: "Fichas de encino a escala gigante. Un juego de mesa que se convierte en el centro de atención.",
    stats: [
      { label: "Estrategia", pct: 75 },
      { label: "Jugadores", pct: 50, text: "2 — 4" },
      { label: "Material", pct: 100, text: "Encino" },
    ],
    waMsg: "Hola, me interesa el Dominó Gigante de Modo Juego",
  },
  {
    img: imgShuffleboard,
    name: "Shuffleboard",
    desc: "Desliza, apunta, gana. La mesa más elegante que vas a tener en tu evento.",
    stats: [
      { label: "Precisión", pct: 85 },
      { label: "Jugadores", pct: 50, text: "2 — 4" },
      { label: "Material", pct: 100, text: "Encino" },
    ],
    waMsg: "Hola, me interesa el Shuffleboard de Modo Juego",
  },
  {
    img: imgBaseball,
    name: "Baseball",
    desc: "Versión de madera del béisbol clásico. Batea, corre, presume el juego.",
    stats: [
      { label: "Energía", pct: 95 },
      { label: "Jugadores", pct: 75, text: "2 — 6" },
      { label: "Material", pct: 100, text: "Encino" },
    ],
    waMsg: "Hola, me interesa el Baseball de Modo Juego",
  },
  {
    img: imgHockey,
    name: "Hockey",
    desc: "Mesa de hockey hecha en madera. Velocidad, reflejos y mucha discusión sobre los goles.",
    stats: [
      { label: "Velocidad", pct: 90 },
      { label: "Jugadores", pct: 25, text: "2" },
      { label: "Material", pct: 100, text: "Encino" },
    ],
    waMsg: "Hola, me interesa el Hockey de Modo Juego",
  },
];

const MINI_GAMES = [
  {
    img: imgCornholeMini,
    name: "Cornhole Mini",
    desc: "La versión de mesa del juego estrella. Misma puntería, menos espacio.",
    waMsg: "Hola, me interesa el Cornhole Mini de Modo Juego",
  },
  {
    img: imgCanicas,
    name: "Canicas",
    desc: "Un clásico reinventado con madera y acabado artesanal. Para todas las edades.",
    waMsg: "Hola, me interesa el juego de Canicas de Modo Juego",
  },
  {
    img: imgCatapulta,
    name: "Catapulta",
    desc: "Apunta, jala, lanza. Juego de puntería hecho a mano en encino.",
    waMsg: "Hola, me interesa la Catapulta de Modo Juego",
  },
];

const SOCIAL_LINKS = [
  {
    icon: faInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/colaboratorio.carpintero/",
  },
  {
    icon: faFacebookF,
    label: "Facebook",
    href: "https://www.facebook.com/colaboratorio.carpintero",
  },
  {
    icon: faTiktok,
    label: "TikTok",
    href: "https://www.tiktok.com/@colaboratorio.carpintero",
  },
];

function StatBar({ label, pct, text, light }) {
  return (
    <div className={`mj-stat${light ? " mj-stat--light" : ""}`}>
      <div className="mj-stat__header">
        <span className="mj-stat__label">{label}</span>
        <span className="mj-stat__value">{text ?? `${pct}%`}</span>
      </div>
      <div className="mj-stat__track">
        <div className="mj-stat__fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function GameCard({ img, name, desc, stats, waMsg, light }) {
  return (
    <div className="mjp-catalog-card">
      <img src={img} alt={name} className="mjp-catalog-card__img" />
      <div className="mjp-catalog-card__body">
        <h3 className="mjp-catalog-card__name">{name}</h3>
        <p className="mjp-catalog-card__desc">{desc}</p>
        {stats && (
          <div className="mb-3">
            {stats.map((s) => (
              <StatBar key={s.label} {...s} light={light} />
            ))}
          </div>
        )}
        <a
          href={`https://wa.me/5213324922786?text=${encodeURIComponent(waMsg)}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-primary btn-sm mt-auto"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
          Quiero éste
        </a>
      </div>
    </div>
  );
}

export default function ModoJuego() {
  return (
    <main>
      {/* HERO */}
      <section className="mjp-hero">
        <div className="container-xl text-center">
          <span className="mj-badge">▶ CATÁLOGO OFICIAL</span>
          <h1 className="mjp-hero__title">MODO JUEGO</h1>
          <p className="mjp-hero__sub">
            Juegos de madera hechos a mano en Guadalajara.
          </p>
          <p className="mjp-hero__sub2">
            Para renta · Para compra · Para cualquier evento o espacio.
          </p>
          <a
            href="https://wa.me/5213324922786?text=Hola,%20me%20interesa%20Modo%20Juego"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-lg"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
            Hablar por WhatsApp
          </a>
        </div>
      </section>

      {/* JUEGOS GIGANTES */}
      <section className="mjp-section mjp-section--light">
        <div className="container-xl">
          <h2 className="section-title">Juegos Gigantes</h2>
          <p className="section-subtitle">
            Para jardines, eventos al aire libre y reuniones donde el espacio
            alcanza para todo.
          </p>
          <div className="row g-4">
            {GIANT_GAMES.map((game) => (
              <div key={game.name} className="col-md-6 col-lg-4">
                <GameCard {...game} light />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JUEGOS MINIS */}
      <section className="mjp-section mjp-section--dark">
        <div className="container-xl">
          <h2 className="section-title section-title--light">Juegos Minis</h2>
          <p className="section-subtitle mjp-subtitle--dim">
            Tamaño mesa. Para espacios más pequeños o para llevar a cualquier
            lado.
          </p>
          <div className="row g-4">
            {MINI_GAMES.map((game) => (
              <div key={game.name} className="col-md-4">
                <GameCard {...game} />
              </div>
            ))}
          </div>

          <div className="mjp-custom-callout mt-5">
            <div className="mjp-custom-callout__content">
              <h3 className="mjp-custom-callout__title">¿Tu idea de juego?</h3>
              <p className="mjp-custom-callout__text">
                Si tienes en mente un juego que no está aquí, cuéntanos. Lo
                diseñamos y fabricamos desde cero.
              </p>
            </div>
            <a
              href="https://wa.me/5213324922786?text=Hola,%20tengo%20una%20idea%20de%20juego%20que%20me%20gustar%C3%ADa%20hacer"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-lg mjp-custom-callout__btn"
            >
              Cuéntanos tu idea
            </a>
          </div>
        </div>
      </section>

      {/* PERSONALIZACIÓN */}
      <section className="mjp-section mjp-section--light">
        <div className="container-xl">
          <h2 className="section-title">Lo hacemos tuyo</h2>
          <p className="section-subtitle">
            Cada pieza puede llevar tu sello. Colores, logotipo o el diseño que
            imaginas.
          </p>
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="mjp-feature-card">
                <span className="mjp-feature-card__icon">✏️</span>
                <h3 className="mjp-feature-card__title">Grabado láser</h3>
                <p className="mjp-feature-card__text">
                  Tu nombre, logo, fecha o mensaje. El grabado queda en la
                  madera para siempre. Incluido en cualquier pieza en pedidos de
                  compra.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mjp-feature-card">
                <span className="mjp-feature-card__icon">🎨</span>
                <h3 className="mjp-feature-card__title">
                  Colores personalizados
                </h3>
                <p className="mjp-feature-card__text">
                  Pintamos los juegos con los colores de tu empresa o evento.
                  Acabados resistentes a la intemperie.
                </p>
              </div>
            </div>
          </div>

          <div className="mjp-custom-callout mjp-custom-callout--light">
            <div className="mjp-custom-callout__content">
              <h3 className="mjp-custom-callout__title">
                ¿Tienes algo específico en mente?
              </h3>
              <p className="mjp-custom-callout__text">
                Mándanos una foto de referencia, un boceto o simplemente
                explícanos la idea. Lo hacemos realidad.
              </p>
            </div>
            <a
              href="https://wa.me/5213324922786?text=Hola,%20quiero%20personalizar%20un%20juego%20de%20Modo%20Juego"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-lg mjp-custom-callout__btn"
            >
              Personalizar mi juego
            </a>
          </div>
        </div>
      </section>

      {/* CANALES DE COMPRA */}
      <section className="mjp-section mjp-section--green">
        <div className="container-xl">
          <h2 className="section-title section-title--light text-center">
            ¿Cómo compramos?
          </h2>
          <p className="section-subtitle text-center mjp-subtitle--dim">
            Elige el canal que prefieras. Respondemos rápido.
          </p>

          <div className="row g-4 justify-content-center mt-2">
            {/* WhatsApp */}
            <div className="col-md-4">
              <div className="mjp-contact-card">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="mjp-contact-card__icon"
                />
                <h3 className="mjp-contact-card__label">WhatsApp</h3>
                <p className="mjp-contact-card__handle">332 492 2786</p>
                <a
                  href="https://wa.me/5213324922786?text=Hola,%20me%20interesa%20Modo%20Juego"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-sm"
                >
                  Escribir ahora
                </a>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="col-md-4">
              <div className="mjp-contact-card">
                <div className="mjp-contact-card__social-icons">
                  {SOCIAL_LINKS.map(({ icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="mjp-contact-card__social-link"
                    >
                      <FontAwesomeIcon icon={icon} />
                    </a>
                  ))}
                </div>
                <h3 className="mjp-contact-card__label">Redes Sociales</h3>
                <p className="mjp-contact-card__handle">
                  @colaboratorio.carpintero
                </p>
                <a
                  href="https://www.instagram.com/colaboratorio.carpintero/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-sm"
                >
                  Enviar DM
                </a>
              </div>
            </div>

            {/* NAS.com */}
            <div className="col-md-4">
              <div className="mjp-contact-card">
                <FontAwesomeIcon
                  icon={faStore}
                  className="mjp-contact-card__icon"
                />
                <h3 className="mjp-contact-card__label">NAS.com</h3>
                <p className="mjp-contact-card__handle">Modo Juego</p>
                <a
                  href="https://nas.com/es-mx/modo-juego"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-light btn-sm"
                >
                  Ver en tienda
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
