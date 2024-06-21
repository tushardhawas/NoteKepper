import React from "react";
import { FaToggleOn } from 'react-icons/fa';
import {BsFillFileEarmarkMinusFill} from 'react-icons/bs'

const Header = ({ handleToogleDarkMode }) => {
  return (
    <div className="header">
      <h1><BsFillFileEarmarkMinusFill/>Notes</h1>
      <button
        onClick={() =>
          handleToogleDarkMode(
            (previousDarkMode) => !previousDarkMode
            )
        }
        className="save"
      >
        <FaToggleOn />
      </button>
    </div>
  );
};

export default Header;
 