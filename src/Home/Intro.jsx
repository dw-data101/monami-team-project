import React, { useState } from "react";
import { centerIntro } from "../assets/team1";

const Intro = () => {
  const [intromove, setIntromove] = useState(centerIntro[0].path);

  return (
    <div>
      <ul
        style={{
          display: "flex",
        }}
      >
        {centerIntro.map((intro, index) => {
          const onClick = () => {
            setIntromove(intro.path);
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

      {
        {
          ceom: <>mes</>,
          comi: <>com</>,
        }[intromove]
      }
    </div>
  );
};

export default Intro;
