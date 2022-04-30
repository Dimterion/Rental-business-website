import { useState } from "react";
import PropTypes from "prop-types";
import arrowDown from "../../assets/arrow-down.png";
import arrowUp from "../../assets/arrow-up.png";
import "./dropdownSmall.css";

export default function DropdownSmall(props) {
  const [isOpen, setIsOpen] = useState(false);

  let text = isOpen ? props.text : "";
  let arrow = isOpen ? arrowUp : arrowDown;

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdownSmall-container" onClick={toggleDropdown}>
      <span className="dropdowndropdownSmall-header-container">
        <h2 className="dropdowndropdownSmall-header">
          {props.dropDownSmallTitle}
        </h2>
        <img className="dropdown-arrow-down" src={arrow} alt="Dropdown arrow" />
      </span>
      <div className="dropdownSmall-text-container">{text}</div>
    </div>
  );
}

DropdownSmall.propTypes = {
  dropDownSmallTitle: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.element.isRequired,
  ]),
};

DropdownSmall.defaultProps = {
  dropDownSmallTitle: "Title",
  text: "",
};
