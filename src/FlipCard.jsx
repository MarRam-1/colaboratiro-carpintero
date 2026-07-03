import logo from "./assets/logo.png";
import logoMJ from "./assets/LogoMJ.png";

export default function FlipCard({ className = "" }) {
  return (
    <div className={`flip-scene ${className}`}>
      <div className="flip-card">
        <div className="flip-card__front">
          <img src={logo} alt="Colaboratorio Carpintero" loading="eager" />
        </div>
        <div className="flip-card__back">
          <img src={logoMJ} alt="Modo Juego" loading="eager" />
        </div>
      </div>
    </div>
  );
}
