import OpenColor from "open-color";
import React, { useState } from "react";

const CeomPic = () => {
  const [fword, setFword] = useState(["소중한 친구", "남겠습니다"]);
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        height: 400,
      }}
    >
      <div
        style={{
          width: 150,
          height: 150,
          borderTop: "5px solid red",
          borderLeft: "5px solid red",
        }}
      ></div>
      <img
        src="https://www.monami.com/images/page/message_ceo.jpg"
        style={{
          width: 600,
          position: "absolute",
          top: "1%",
          left: "0.5%",
        }}
      />
      <div
        style={{
          background: OpenColor.gray[1],
          position: "absolute",
          border: "1px solid",
          padding: 20,
          width: 500,
          height: 150,
          fontSize: 20,
          right: 0,
          top: 50,
        }}
      >
        <p>
          항상 당신 곁의
          {fword.map((friend, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  border: "1px solid",
                }}
              >
                {friend}
              </div>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default CeomPic;
