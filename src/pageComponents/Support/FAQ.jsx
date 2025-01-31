import React from "react";
import { FaUnderline } from "react-icons/fa";
import { monamiFaq } from "../../assets/team3";
import "./FAQ.js.css";

const FAQ = () => {
  return (
    <div>
      <ul>
        {monamiFaq.map((list) => {
          return (
            <li key={list}>
              <span>Q</span> <button>{list.q}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;
