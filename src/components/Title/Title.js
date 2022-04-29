import PropTypes from "prop-types";
import "./title.css";

export default function Title(props) {
  return <h2 className="title-container">{props.title}</h2>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

Title.defaultProps = {
  title: "Title",
};
