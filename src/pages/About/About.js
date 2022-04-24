import Hero from "../../components/Hero/Hero";
import aboutHeroBackground from "../../assets/kasa-about-hero-background.png";
import DropdownLarge from "../../components/Dropdowns/DropdownLarge";

export default function About() {
  return (
    <div>
      <Hero heroImg={aboutHeroBackground} />
      <DropdownLarge />
    </div>
  );
}
