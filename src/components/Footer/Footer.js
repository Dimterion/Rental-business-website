import footerLogo from "../../assets/kasa-footer-logo.png";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <img className="footer-logo" src={footerLogo} alt="Kasa logo" />
      <h4 className="footer-text">© 2022 Kasa. All rights reserved</h4>
    </footer>
  );
}
