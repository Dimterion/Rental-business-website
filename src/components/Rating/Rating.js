import starGrey from "../../assets/star-grey.svg";
import starRed from "../../assets/star-red.svg";
import "./rating.css";

export default function Rating(props) {
  // Creating an empty array for the star icons and filling it with stars depending on the rating
  let starsArray;
  if (props.rating === "0") {
    starsArray = [
      <img className="star-icon" src={starGrey} alt="Star icon" key="star-1" />,
      <img className="star-icon" src={starGrey} alt="Star icon" key="star-2" />,
      <img className="star-icon" src={starGrey} alt="Star icon" key="star-3" />,
      <img className="star-icon" src={starGrey} alt="Star icon" key="star-4" />,
      <img className="star-icon" src={starGrey} alt="Star icon" key="star-5" />,
    ];
  } else if (props.rating === "1") {
    starsArray = [
      <img className="star-icon" src={starRed} alt="Star icon" key="star-1" />,
      <img className="star-icon" src={starGrey} alt="Star icon" key="star-2" />,
      <img className="star-icon" src={starGrey} alt="Star icon" key="star-3" />,
      <img className="star-icon" src={starGrey} alt="Star icon" key="star-4" />,
      <img className="star-icon" src={starGrey} alt="Star icon" key="star-5" />,
    ];
  } else if (props.rating === "2") {
    starsArray = [
      <img className="star-icon" src={starRed} alt="Star icon" key="star-1" />,
      <img className="star-icon" src={starRed} alt="Star icon" key="star-2" />,
      <img className="star-icon" src={starGrey} alt="Star icon" key="star-3" />,
      <img className="star-icon" src={starGrey} alt="Star icon" key="star-4" />,
      <img className="star-icon" src={starGrey} alt="Star icon" key="star-5" />,
    ];
  } else if (props.rating === "3") {
    starsArray = [
      <img className="star-icon" src={starRed} alt="Star icon" key="star-1" />,
      <img className="star-icon" src={starRed} alt="Star icon" key="star-2" />,
      <img className="star-icon" src={starRed} alt="Star icon" key="star-3" />,
      <img className="star-icon" src={starGrey} alt="Star icon" key="star-4" />,
      <img className="star-icon" src={starGrey} alt="Star icon" key="star-5" />,
    ];
  } else if (props.rating === "4") {
    starsArray = [
      <img className="star-icon" src={starRed} alt="Star icon" key="star-1" />,
      <img className="star-icon" src={starRed} alt="Star icon" key="star-2" />,
      <img className="star-icon" src={starRed} alt="Star icon" key="star-3" />,
      <img className="star-icon" src={starRed} alt="Star icon" key="star-4" />,
      <img className="star-icon" src={starGrey} alt="Star icon" key="star-5" />,
    ];
  } else if (props.rating === "5") {
    starsArray = [
      <img className="star-icon" src={starRed} alt="Star icon" key="star-1" />,
      <img className="star-icon" src={starRed} alt="Star icon" key="star-2" />,
      <img className="star-icon" src={starRed} alt="Star icon" key="star-3" />,
      <img className="star-icon" src={starRed} alt="Star icon" key="star-4" />,
      <img className="star-icon" src={starRed} alt="Star icon" key="star-5" />,
    ];
  }

  return <div className="rating-container">{starsArray}</div>;
}
