import { useState } from "react";
import { centerIntro } from "../assets/team1";

import CeoM from "../pageComponents/Introduction/CeoM";

const Intro = () => {
  const [intromove, setIntromove] = useState(centerIntro[0].path);

  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
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
      {/* 
{변수값1:<>비교할 변수가 변수값1일때</>,
}

*/}
      {
        {
          ceom: <CeoM />,
          comi: <>com</>,
          comy: <>coy</>,
        }[intromove]
      }
    </div>
  );
};

export default Intro;
