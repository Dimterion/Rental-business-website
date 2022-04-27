import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../utils/hooks/fetch";
import "./gallery.css";

export default function Gallery() {
  // Using fetch hook to get the data from API
  const { data, loading, error } = useFetch(
    "https://raw.githubusercontent.com/Dimterion/rental-business-website/master/src/assets/kasa-apartments-data.json"
  );

  // Using .map to create a container for each gallery item
  const galleryItem = data.map((apartment) => {
    return (
      <Link
        to={`/apartment/${apartment.id}`}
        key={apartment.id}
        className="gallery-item"
      >
        <img
          className="gallery-item-image"
          src={apartment.cover}
          alt={apartment.title}
        />
        <h3 className="gallery-item-title">{apartment.title}</h3>
      </Link>
    );
  });

  // Displaying error if the data from API is not loading
  if (error) {
    return <span>Page is not loading.</span>;
  }

  // Displaying the loading message while the data is loading, then displaying the data itself
  return loading ? (
    <div>Page is loading</div>
  ) : (
    <div className="gallery-container">{galleryItem}</div>
  );
}
