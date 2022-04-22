import "./footer.css";
import footerLogo from "../../assets/kasa-footer-logo.png";

export default function Footer() {
  return (
    <footer className="footer-container">
      <img className="footer-logo" src={footerLogo} alt="Kasa logo" />
      <h4 className="footer-text">(c) 2022 Kasa. All rights reserved</h4>
    </footer>
  );
}
