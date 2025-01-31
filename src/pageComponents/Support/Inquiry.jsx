import React from "react";

const Inquiry = () => {
  return (
    <form>
      <div>CONTACT US</div>
      <div>문의내용</div>
      <span>▼</span>
      <div>*이름</div>
      <div>*이메일</div>
      <input
        type="text"
        placeholder="Google 정책으로 인해 Gmail의 경우 답변 회신을 받지 못할 수도 있으니, 다른 도메인의 메일로 입력 부탁드립니다."
      ></input>
      <div>연락처</div>
      <div>*제목</div>
      <div>*내용</div>
      <textarea id="comments" name="comments" rows="4" cols="50"></textarea>
      <div>
        첨부파일
        <button>파일선택</button>
      </div>
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
      <button>SEND</button>
    </form>
  );
};

export default Inquiry;
