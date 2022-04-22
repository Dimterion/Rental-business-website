import "./hero.css";

export default function Hero(props) {
  return (
    <div className="hero">
      <img className="hero-img" src={props.heroImg} alt="Background" />
      <h2 className="hero-text">{props.heroText}</h2>
    </div>
  );
}
