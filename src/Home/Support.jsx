import React, { useState } from "react";
import FAQ from "../pageComponents/Support/FAQ";
// import Inquiry from "./../pageComponents/Support/Inquiry";
import "../pageComponents/Support/Support.js.css";

const Support = () => {
  const [mFAQ, setMFAQ] = useState("faq");
  return (
    <div>
      {/* <div>
        <h2>고객지원</h2>{" "}
        <span>모나미는 언제나 소중한 의견에 귀 기울이겠습니다.</span>
      </div> */}
      <div id="supportButton">
        <button className="r">자주하는질문</button>
        <button className="l">문의하기</button>
      </div>
      <h1>MONAMI FAQ :{mFAQ}</h1>
      {
        {
          faq: <FAQ />,
        }[mFAQ]
      }
    </div>
  );
};

export default Support;
