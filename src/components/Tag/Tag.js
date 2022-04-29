import PropTypes from "prop-types";
import "./tag.css";

export default function Tag(props) {
  return <div className="tag-container">{props.tagName}</div>;
}

Tag.propTypes = {
  tagName: PropTypes.string.isRequired,
};

Tag.defaultProps = {
  tagName: "Tag name",
};
