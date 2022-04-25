import { useParams } from "react-router-dom";
//import allApartments from "../../assets/kasa-apartments-data";
import { useFetch } from "../../utils/hooks/fetch";
import Carousel from "../../components/Carousel/Carousel";

export default function Apartment() {
  const { data, loading, error } = useFetch(
    "https://raw.githubusercontent.com/Dimterion/rental-business-website/master/src/assets/kasa-apartments-data.json"
  );

  const { apartmentId } = useParams();
  let url = "";
  let title = "";
  data.forEach((apartment) => {
    if (apartmentId === apartment.id) {
      url = apartment.cover;
      title = apartment.title;
    }
  });

  if (error) {
    return <span>Page is not loading.</span>;
  }

  return loading ? (
    <div>Page is loading</div>
  ) : (
    <div>
      <Carousel url={url} />
      <h2>{title}</h2>
    </div>
  );
}
