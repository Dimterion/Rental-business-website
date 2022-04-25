import { useParams } from "react-router-dom";
import { useFetch } from "../../utils/hooks/fetch";
import arrowRight from "../../assets/arrow-right.png";
import arrowLeft from "../../assets/arrow-left.png";
import "../Carousel/carousel.css";

export default function Carousel(props) {
  return (
    <div className="carousel-container">
      <img src={props.url} alt="Apartment overview" />
      <img src={arrowLeft} alt="Carousel arrow" />
      <img src={arrowRight} alt="Carousel arrow" />
    </div>
  );
}
