import Hero from "../../components/Hero/Hero";
import aboutHeroBackground from "../../assets/kasa-about-hero-background.png";
import DropdownLarge from "../../components/Dropdowns/DropdownLarge";
import Header from "../../components/Header/Header";

export default function About() {
  // Array with objects to store the data for the elements on the About page
  const dropdownLargeContent = [
    {
      id: "dropdownLargeContent-1",
      title: "Reliability",
      text: "The ads posted on Kasa guarantee total reliability of the place. The photos are consistent with the accommodations, and all information is regularly checked by our teams.",
    },
    {
      id: "dropdownLargeContent-2",
      title: "Respect",
      text: "Caring is one of the founding values of Kasa. Any discriminatory behavior or disruptive behavior in the neighborhood will result in exclusion from our platform.",
    },
    {
      id: "dropdownLargeContent-3",
      title: "Service",
      text: "Our teams are at your disposal to provide you with the best experience. Please do not hesitate to contact us if you have any questions.",
    },
    {
      id: "dropdownLargeContent-4",
      title: "Safety",
      text: "Safety is Kasa's priority. Both for our guests and for travelers, each accommodation is compliant with the safety criteria established by our services. By leaving a note for both the host and the tenant, our teams can verify that the standards are respected. We also organize workshops on home security for our guests.",
    },
  ];

  // Using .map to create a component for each dropdown menu item
  const dropdownLarge = dropdownLargeContent.map((item) => {
    return <DropdownLarge key={item.id} title={item.title} text={item.text} />;
  });

  return (
    <div>
      <Header
        headerNavHome="header-nav-home"
        headerNavAbout="header-nav-about-underline"
      />
      <Hero heroImg={aboutHeroBackground} heroImgHome="hero-img-about" />
      {dropdownLarge}
    </div>
  );
}
