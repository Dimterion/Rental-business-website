import React from "react";
import { Link } from "react-router-dom";
import allApartments from "../../assets/kasa-apartments-data";
import "./gallery.css";

export default function Gallery() {
  // const [allApartments, setAllApartments] = React.useState([]);
  // console.log(allApartments[0]);
  // React.useEffect(() => {
  //   fetch(
  //     "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/data.json"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setAllApartments(data));
  // }, []);

  const galleryItem = allApartments.map((apartment) => {
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

  //console.log(galleryItem);

  return <div className="gallery-container">{galleryItem}</div>;
}
