import "./hero.css";
import PropTypes from "prop-types";

export default function Hero(props) {
  return (
    <div className="hero">
      <img className="hero-img" src={props.heroImg} alt="Background" />
      <h2 className="hero-text">{props.heroText}</h2>
    </div>
  );
}

Hero.propTypes = {
  heroImg: PropTypes.string.isRequired,
  heroText: PropTypes.string,
};

Hero.defaultProps = {
  heroText: "",
};
