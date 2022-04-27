import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";
import heroBackground from "../../assets/kasa-hero-background.png";
import Header from "../../components/Header/Header";

const homePageHeroText = "Home, anywhere and everywhere";

export default function Home() {
  return (
    <div>
      <Header headerNavHome="header-nav-home-underline" headerNavAbout="header-nav-about" />
      <Hero heroImg={heroBackground} heroText={homePageHeroText} heroImgHome="hero-img-home" />
      <Gallery />
    </div>
  );
}
