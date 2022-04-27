import Hero from "../../components/Hero/Hero";
import aboutHeroBackground from "../../assets/kasa-about-hero-background.png";
import DropdownLarge from "../../components/Dropdowns/DropdownLarge";
import Header from "../../components/Header/Header";

export default function About() {
  return (
    <div>
      <Header
        headerNavHome="header-nav-home"
        headerNavAbout="header-nav-about-underline"
      />
      <Hero heroImg={aboutHeroBackground} heroImgHome="hero-img-about" />
      <DropdownLarge />
    </div>
  );
}
