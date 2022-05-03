import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../assets/kasa-logo.png";
import "./header.css";

export default function Header(props) {
  return (
    <nav className="header-container">
      <Link to="/rental-business-website/">
        <img className="header-logo" src={logo} alt="Kasa logo" />
      </Link>
      <div className="header-nav">
        <Link className={props.headerNavHome} to="/rental-business-website/">
          Home
        </Link>
        <Link className={props.headerNavAbout} to="/about">
          About
        </Link>
      </div>
    </nav>
  );
}

Header.propTypes = {
  headerNavHome: PropTypes.string.isRequired,
  headerNavAbout: PropTypes.string.isRequired,
};

Header.defaultProps = {
  headerNavHome: "header-nav-home",
  headerNavAbout: "header-nav-about",
};
