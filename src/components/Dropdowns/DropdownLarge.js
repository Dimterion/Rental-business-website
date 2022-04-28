import { useState } from "react";
import PropTypes from "prop-types";
import arrowDown from "../../assets/arrow-down.png";
import arrowUp from "../../assets/arrow-up.png";
import "./dropdownLarge.css";

export default function DropdownLarge(props) {
  // Using state to open and close dropdown menu and change the arrow icon direction
  const [isOpen, setIsOpen] = useState(false);

  let dropDownClass = isOpen
    ? "dropdownLarge-text-container-opened"
    : "dropdownLarge-text-container-closed";
  let arrow = isOpen ? arrowUp : arrowDown;

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdownLarge-container" onClick={toggleDropdown}>
      <span className="dropdownLarge-header-container">
        <h2 className="dropdownLarge-header-title">{props.title}</h2>
        <img className="dropdown-arrow-down" src={arrow} alt="Dropdown arrow" />
      </span>
      <div className={dropDownClass}>
        <p className="dropdownLarge-text">{props.text}</p>
      </div>
    </div>
  );
}

DropdownLarge.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

DropdownLarge.defaultProps = {
  title: "Title",
  text: "Text",
};
