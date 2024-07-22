import React, { useState } from "react";
import "../../shared/css/default-layout.css";
import "../enterPage/enter-page.css";
import "../button/enter-button.css";

export default function EnterPage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleButtonClick = () => {
    if (isChecked) {
      window.location.href = "/gamepage";
    }
  };

  return (
    <div className="main-page-body">
      <div className="enter">
        <button
          className="enter-button"
          onClick={handleButtonClick}
          disabled={!isChecked}
        >
          Enter
        </button>
        <span>
          <input id="check-box" type="checkbox" onChange={handleCheckboxChange} />{" "}
          <label htmlFor="check-box" className="check-text">
            A belépéssel kijelentem, hogy elmúltam 18 éves.
          </label>
        </span>
      </div>
    </div>
  );
}
