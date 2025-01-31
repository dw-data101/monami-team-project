import React from "react";
import { centerIntro } from "../assets/team1";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const introPath = useNavigate();

  introPath(centerIntro);
  return (
    <div>
      <ul
        style={{
          display: "flex",
        }}
      >
        {centerIntro.map((intro, index) => {
          const onClick = () => {
            introPath(intro.path);
          };
          return (
            <li key={index}>
              <button
                onClick={onClick}
                style={{
                  padding: 30,
                  whiteSpace: "nowrap",
                }}
              >
                {intro.ti}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Intro;
