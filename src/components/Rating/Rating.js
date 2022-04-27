import starGrey from "../../assets/star-grey.svg";
import starRed from "../../assets/star-red.svg";
import "../../components/Rating/rating.css";

export default function Rating(props) {
  // let number = 4;
  // let keyValue = 0;
  // let starsArray = [
  //   <img src={starGrey} alt="Star icon" key={keyValue} />,
  //   <img src={starGrey} alt="Star icon" key={keyValue} />,
  //   <img src={starGrey} alt="Star icon" key={keyValue} />,
  //   <img src={starGrey} alt="Star icon" key={keyValue} />,
  //   <img src={starGrey} alt="Star icon" key={keyValue} />,
  // ];

  // starsArray.fill(
  //   <img src={starRed} alt="Star icon" key={keyValue} />,
  //   0,
  //   number
  // );

  // console.log(starsArray);

  // return <div>{starsArray}</div>;
  let starsArray;
  if (props.rating === "0") {
    starsArray = [
      <img src={starGrey} alt="Star icon" key="star-1" />,
      <img src={starGrey} alt="Star icon" key="star-2" />,
      <img src={starGrey} alt="Star icon" key="star-3" />,
      <img src={starGrey} alt="Star icon" key="star-4" />,
      <img src={starGrey} alt="Star icon" key="star-5" />,
    ];
  } else if (props.rating === "1") {
    starsArray = [
      <img src={starRed} alt="Star icon" key="star-1" />,
      <img src={starGrey} alt="Star icon" key="star-2" />,
      <img src={starGrey} alt="Star icon" key="star-3" />,
      <img src={starGrey} alt="Star icon" key="star-4" />,
      <img src={starGrey} alt="Star icon" key="star-5" />,
    ];
  } else if (props.rating === "2") {
    starsArray = [
      <img src={starRed} alt="Star icon" key="star-1" />,
      <img src={starRed} alt="Star icon" key="star-2" />,
      <img src={starGrey} alt="Star icon" key="star-3" />,
      <img src={starGrey} alt="Star icon" key="star-4" />,
      <img src={starGrey} alt="Star icon" key="star-5" />,
    ];
  } else if (props.rating === "3") {
    starsArray = [
      <img src={starRed} alt="Star icon" key="star-1" />,
      <img src={starRed} alt="Star icon" key="star-2" />,
      <img src={starRed} alt="Star icon" key="star-3" />,
      <img src={starGrey} alt="Star icon" key="star-4" />,
      <img src={starGrey} alt="Star icon" key="star-5" />,
    ];
  } else if (props.rating === "4") {
    starsArray = [
      <img src={starRed} alt="Star icon" key="star-1" />,
      <img src={starRed} alt="Star icon" key="star-2" />,
      <img src={starRed} alt="Star icon" key="star-3" />,
      <img src={starRed} alt="Star icon" key="star-4" />,
      <img src={starGrey} alt="Star icon" key="star-5" />,
    ];
  } else if (props.rating === "5") {
    starsArray = [
      <img src={starRed} alt="Star icon" key="star-1" />,
      <img src={starRed} alt="Star icon" key="star-2" />,
      <img src={starRed} alt="Star icon" key="star-3" />,
      <img src={starRed} alt="Star icon" key="star-4" />,
      <img src={starRed} alt="Star icon" key="star-5" />,
    ];
  }

  return <div>{starsArray}</div>;
}
