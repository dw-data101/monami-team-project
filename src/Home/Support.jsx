import React, { useState } from "react";
import FAQ from "../pageComponents/Support/FAQ";
import Inquiry from "./../pageComponents/Support/Inquiry";

const Support = () => {
  const [mFAQ, setMFAQ] = useState("");
  return (
    <div>
      <div>
        <h2>고객지원</h2>{" "}
        <span>모나미는 언제나 소중한 의견에 귀 기울이겠습니다.</span>
      </div>
      <div>
        <button style={{ padding: 10, color: "white", backgroundColor: "red" }}>
          자주하는질문
        </button>
      </div>
      <h1>MONAMI FAQ</h1>
      {
        {
          faq: <FAQ />,
          inquiry: <Inquiry />,
        }[mFAQ]
      }
    </div>
  );
};

export default Support;
