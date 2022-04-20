import "./header.css";
import logo from "../../assets/kasa-logo.png";

export default function Header() {
  return (
    <nav className="header-container">
      <img className="header-logo" src={logo} alt="Kasa logo" />
      <ul className="header-nav">
        <li className="header-nav-active">Home</li>
        <li>About</li>
      </ul>
    </nav>
  );
}
