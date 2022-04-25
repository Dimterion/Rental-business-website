import React from "react";
import { Link } from "react-router-dom";
// import allApartments from "../../assets/kasa-apartments-data";
import "./gallery.css";
import { useFetch } from "../../utils/hooks/fetch";

export default function Gallery() {
  // const [allApartments, setAllApartments] = React.useState([]);
  // // console.log(allApartments[0]);
  // React.useEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/Dimterion/rental-business-website/master/src/assets/kasa-apartments-data.json"
  //   )
  //     .then((response) => response.json())
  //     .then((apartmentsData) => setAllApartments(apartmentsData))
  //     .catch((error) => console.log(error));
  // }, []);
  const { data, loading, error } = useFetch(
    "https://raw.githubusercontent.com/Dimterion/rental-business-website/master/src/assets/kasa-apartments-data.json"
  );

  const galleryItem = data.map((apartment) => {
    return (
      <Link to={`/apartment/${apartment.id}`} key={apartment.id}>
        <img
          className="gallery-item"
          src={apartment.cover}
          alt={apartment.title}
        />
        <h3 className="gallery-item-title">{apartment.title}</h3>
      </Link>
    );
  });

  if (error) {
    return <span>Page is not loading.</span>;
  }

  //console.log(galleryItem);

  return loading ? (
    <div>Page is loading</div>
  ) : (
    <div className="gallery-container">{galleryItem}</div>
  );
}
