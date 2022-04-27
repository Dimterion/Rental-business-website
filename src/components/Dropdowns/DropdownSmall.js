import arrowDown from "../../assets/arrow-down.png";
import arrowUp from "../../assets/arrow-up.png";
import "./dropdownSmall.css";
import { useState } from "react";

export default function DropdownSmall(props) {
  const [isOpen, setIsOpen] = useState(false);

  let text = isOpen ? "Text" : "";
  let arrow = isOpen ? arrowUp : arrowDown;

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdownSmall-container" onClick={toggleDropdown}>
      <span className="dropdowndropdownSmall-header-container">
        <h2>{props.dropDownSmallTitle}</h2>
        <img className="dropdown-arrow-down" src={arrow} alt="Dropdown arrow" />
      </span>
      <div className="dropdownSmall-text-container">
        <p>{text}</p>
      </div>
    </div>
  );
}
