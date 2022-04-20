import logo from "../../assets/kasa-logo.png";
import "./header.css";

export default function Header() {
  return (
    <div className="header-block">
      <img src={logo} alt={logo} />
      <nav>
        <ul>
          <li className="active">Home</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
}
