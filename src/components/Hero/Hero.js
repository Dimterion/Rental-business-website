import PropTypes from "prop-types";
import "./hero.css";

export default function Hero(props) {
  return (
    <div className="hero-container">
      <img className={props.heroImgHome} src={props.heroImg} alt="Background" />
      <h2 className="hero-text">{props.heroText}</h2>
    </div>
  );
}

Hero.propTypes = {
  heroImgHome: PropTypes.string.isRequired,
  heroImg: PropTypes.string.isRequired,
  heroText: PropTypes.string,
};

Hero.defaultProps = {
  heroText: "",
};
