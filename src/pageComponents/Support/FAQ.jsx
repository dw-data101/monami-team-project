import React from "react";
import { monamiFaq } from "../../assets/team3";
import "./FAQ.js.css";
import { mFaqQIcon } from "../../assets/team3";

const FAQ = () => {
  return (
    <div>
      <ul id="mFaq">
        {monamiFaq.map((list) => {
          return (
            <li key={list.q} id="mFaqLi">
              <button>
                <span>
                  <mFaqQIcon />
                </span>
                {list.q}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;
