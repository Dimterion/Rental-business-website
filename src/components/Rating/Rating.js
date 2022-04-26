import starGrey from "../../assets/star-grey.svg";
import starRed from "../../assets/star-red.svg";
import "../../components/Rating/rating.css";

export default function Rating(props) {
  let number = 4;
  let keyValue = 0;
  let starsArray = [
    <img src={starGrey} alt="Star icon" key={keyValue} />,
    <img src={starGrey} alt="Star icon" key={keyValue} />,
    <img src={starGrey} alt="Star icon" key={keyValue} />,
    <img src={starGrey} alt="Star icon" key={keyValue} />,
    <img src={starGrey} alt="Star icon" key={keyValue} />,
  ];

  starsArray.fill(
    <img src={starRed} alt="Star icon" key={keyValue} />,
    0,
    number
  );

  console.log(starsArray);

  return <div>{starsArray}</div>;
}
