import { useParams } from "react-router-dom";
//import allApartments from "../../../public/kasa-apartments-data";

export default function Home() {
  const { apartmentId } = useParams();
  let url = "";
  allApartments.forEach((apartment) => {
    if (apartmentId === apartment.id) {
      url = apartment.cover;
    }
  });
  return (
    <div>
      <img src={url} alt="Apartment overview" />
    </div>
  );
}
