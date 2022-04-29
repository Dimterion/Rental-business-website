import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks/fetch";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Title from "../../components/Title/Title";
import Location from "../../components/Location/Location";
import Tag from "../../components/Tag/Tag";
import Profile from "../../components/Profile/Profile";
import Rating from "../../components/Rating/Rating";
import DropdownSmall from "../../components/Dropdowns/DropdownSmall";
import "./apartment.css";

export default function Apartment() {
  // Using fetch hook to get the data from API
  const { data, loading, error } = useFetch(
    "https://raw.githubusercontent.com/Dimterion/rental-business-website/master/src/assets/kasa-apartments-data.json"
  );

  // Setting all object's keys to lowercase
  function toLowerKeys(obj) {
    return Object.keys(obj).reduce((accumulator, key) => {
      accumulator[key.toLowerCase()] = obj[key];
      return accumulator;
    }, {});
  }
  // Getting the ID from the address link to generate proper content for each gallery item
  const { apartmentId } = useParams();
  let title;
  let location;
  let tagsElements;
  let profileName;
  let profilePicture;
  let rating;
  // Using forEach method to create props for each gallery item
  data.forEach((apartment) => {
    if (apartmentId === apartment.id) {
      const lowerCaseApartment = toLowerKeys(apartment);
      const tags = lowerCaseApartment.tags;
      // Creating array to make a separate component for each tag
      tagsElements = tags.map((tag) => {
        return <Tag tagName={tag} key={`${tag}-${lowerCaseApartment.id}`} />;
      });
      title = lowerCaseApartment.title;
      location = lowerCaseApartment.location;
      profileName = lowerCaseApartment.host.name;
      profilePicture = lowerCaseApartment.host.picture;
      rating = lowerCaseApartment.rating;
    }
  });

  // Displaying error if the data from API is not loading
  if (error) {
    return (
      <div>
        <Header
          headerNavHome="header-nav-home"
          headerNavAbout="header-nav-about"
        />
        <span className="status-message-container">
          Page is not loading. Try refreshing it or check again later.
        </span>
      </div>
    );
  }

  // Displaying the loading message while the data is loading, then displaying the data itself
  return loading ? (
    <div>
      <Header
        headerNavHome="header-nav-home"
        headerNavAbout="header-nav-about"
      />
      <span className="status-message-container">Page is loading...</span>
    </div>
  ) : (
    <div>
      <Header
        headerNavHome="header-nav-home"
        headerNavAbout="header-nav-about"
      />
      <Carousel />
      <div className="information-container">
        <div>
          <Title title={title} />
          <Location location={location} />
          <div className="tags-container">{tagsElements}</div>
        </div>
        <div className="profile-rating-container">
          <Profile profileName={profileName} profilePicture={profilePicture} />
          <Rating rating={rating} />
        </div>
      </div>
      <div>
        <DropdownSmall dropDownSmallTitle="Description" />
        <DropdownSmall dropDownSmallTitle="Equipments" />
      </div>
    </div>
  );
}
