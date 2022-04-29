import PropTypes from "prop-types";
import "./location.css";

export default function Location(props) {
  return <h3 className="location-container">{props.location}</h3>;
}

Location.propTypes = {
  location: PropTypes.string.isRequired,
};

Location.defaultProps = {
  location: "Location",
};
