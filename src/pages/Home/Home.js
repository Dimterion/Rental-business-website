import Gallery from "../../components/Gallery/Gallery";
import Hero from "../../components/Hero/Hero";
import heroBackground from "../../assets/kasa-hero-background.png";

const homePageHeroText = "Home anywhere and everywhere";

export default function Home() {
  return (
    <div>
      <Hero heroImg={heroBackground} heroText={homePageHeroText} />
      <Gallery />
    </div>
  );
}
