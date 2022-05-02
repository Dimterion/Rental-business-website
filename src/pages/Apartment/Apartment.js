import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks/fetch";
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Title from "../../components/Title/Title";
import Location from "../../components/Location/Location";
import Tag from "../../components/Tag/Tag";
import Profile from "../../components/Profile/Profile";
import Rating from "../../components/Rating/Rating";
import Error from "../../components/Error/Error";
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

  // Checking if link id exists in the JSON file; if not - returning the error page
  const idMatch = data.find((element) => element.id === apartmentId);

  if (!idMatch) {
    return <Error />;
  }

  // Variables for the props
  let title;
  let location;
  let tags;
  let profileName;
  let profilePicture;
  let rating;
  let description;
  let equipments;

  // Using forEach method to create props for each gallery item
  data.forEach((apartment) => {
    if (apartmentId === apartment.id) {
      const lowerCaseApartment = toLowerKeys(apartment);
      title = lowerCaseApartment.title;
      location = lowerCaseApartment.location;
      profileName = lowerCaseApartment.host.name;
      profilePicture = lowerCaseApartment.host.picture;
      rating = lowerCaseApartment.rating;
      description = (
        <p className="dropdownSmall-content">
          {lowerCaseApartment.description}
        </p>
      );
      // Mapping through the tags array to make a separate component for each tag
      tags = lowerCaseApartment.tags.map((tag) => {
        return <Tag tagName={tag} key={`${tag}-${lowerCaseApartment.id}`} />;
      });
      // Mapping through the amenities or equipments array to make a separate component for each amenity
      if (lowerCaseApartment.amenities) {
        equipments = lowerCaseApartment.amenities.map((amenity) => {
          return (
            <span
              className="dropdownSmall-content"
              key={`${amenity}-${lowerCaseApartment.id}`}
            >
              {amenity}
            </span>
          );
        });
      } else {
        equipments = lowerCaseApartment.equipments.map((amenity) => {
          return (
            <span
              className="dropdownSmall-content"
              key={`${amenity}-${lowerCaseApartment.id}`}
            >
              {amenity}
            </span>
          );
        });
      }
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
          <div className="tags-container">{tags}</div>
        </div>
        <div className="profile-rating-container">
          <Profile profileName={profileName} profilePicture={profilePicture} />
          <Rating rating={rating} />
        </div>
      </div>
      <div className="dropdownsSmall-containter">
        <DropdownSmall dropDownSmallTitle="Description" text={description} />
        <DropdownSmall dropDownSmallTitle="Equipments" text={equipments} />
      </div>
    </div>
  );
}
