import { useParams } from "react-router-dom";
//import allApartments from "../../assets/kasa-apartments-data";
import { useFetch } from "../../utils/hooks/fetch";
import Carousel from "../../components/Carousel/Carousel";
import Title from "../../components/Title/Title";
import Location from "../../components/Location/Location";
import Tag from "../../components/Tag/Tag";
import Profile from "../../components/Profile/Profile";
import Rating from "../../components/Rating/Rating";

export default function Apartment() {
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

  const { apartmentId } = useParams();
  let title;
  let location;
  let tagsElements;
  let profileName;
  let profilePicture;
  data.forEach((apartment) => {
    if (apartmentId === apartment.id) {
      const lowerCaseApartment = toLowerKeys(apartment);
      title = lowerCaseApartment.title;
      location = lowerCaseApartment.location;
      const tags = lowerCaseApartment.tags;
      tagsElements = tags.map((tag) => {
        return <Tag tagName={tag} key={`${tag}-${lowerCaseApartment.id}`} />;
      });
      profileName = lowerCaseApartment.host.name;
      profilePicture = lowerCaseApartment.host.picture;
    }
  });

  if (error) {
    return <span>Page is not loading.</span>;
  }

  return loading ? (
    <div>Page is loading</div>
  ) : (
    <div>
      <Carousel />
      <div>
        <Title title={title} />
        <Location location={location} />
        {tagsElements}
      </div>
      <div>
        <Profile profileName={profileName} profilePicture={profilePicture} />
        <Rating />
      </div>
    </div>
  );
}
