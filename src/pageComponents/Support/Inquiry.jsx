import React from "react";

const Inquiry = () => {
  return (
    <form>
      <div>CONTACT US</div>
      <div>문의내용</div>
      <span>▼</span>
      <div>*이름</div>
      <div>*이메일</div>
      <div>연락처</div>
      <div>*제목</div>
      <div>*내용</div>
      <div>첨부파일</div>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, quidem
        ab. Sapiente eveniet iure ut earum! Cumque iure itaque vel odit, ipsam
        repellendus incidunt veritatis dolor modi recusandae aperiam id.
      </div>
      <input
        type="checkbox"
        id="check"
        onChange={(e) => {
          changeHandler(e.currentTarget.checked, "check");
        }}
        checked={checkedButtons.includeds("check") ? true : false}
      ></input>
      <label id="check" hmtlFor="check"></label>
      <span>개인정보 수집 및 이용안내에 동의합니다.</span>
    </form>
  );
};

export default Inquiry;
