import arrowDown from "../../assets/arrow-down.png"
import arrowUp from "../../assets/arrow-up.png"
import styled from "styled-components";
import colors from "../../utils/colors";
import "./dropdownLarge.css"
import { useState } from "react";

const DropDownHeaderContainer = styled.span`
  
`

export default function DropdownLarge() {
  const [isOpen, setIsOpen] = useState(false)

  let text = isOpen ? "Text" : ""
  let arrow = isOpen ? arrowUp : arrowDown

  function toggleDropdown() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdownLarge-container" onClick={toggleDropdown}>
      <span className="dropdownLarge-header-container">
        <h2>Reliability</h2>
        <img className="dropdown-arrow-down" src={arrow} alt="Dropdown arrow" />
      </span>
      <div className="dropdown-text-container">
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}