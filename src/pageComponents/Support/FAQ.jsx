import React from "react";
import { FaUnderline } from "react-icons/fa";
import { monamiFaq } from "../../assets/team3";

const FAQ = () => {
  return (
    <div>
      <ul>
        <li>
          <button>
            <monamiFaq />
          </button>
          <span>
            <FaUnderline />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default FAQ;
