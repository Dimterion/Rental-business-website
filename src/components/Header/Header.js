import "./header.css";
import logo from "../../assets/kasa-logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header-container">
      <img className="header-logo" src={logo} alt="Kasa logo" />
      <div className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
