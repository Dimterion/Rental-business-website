import "./section.css";
import sectionImg from "../../assets/kasa-section-background.png";

export default function Section() {
  return (
    <div className="section">
      <img className="section-img" src={sectionImg} alt="Section background" />
      <h2 className="section-text">Home anywhere and everywhere</h2>
    </div>
  );
}
