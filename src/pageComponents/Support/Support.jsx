import React, { useState } from "react";

const CustomerService = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 폼 제출 처리 로직을 작성할 수 있습니다.
    console.log("Contact Info:", contactInfo);
    alert("문의가 접수되었습니다!");
    setContactInfo({ name: "", email: "", message: "" });
  };

  return (
    <div className="customer-service">
      <header>
        <h1>모나미 고객센터</h1>
        <nav>
          <ul>
            <li>
              <a href="#faq">자주 묻는 질문</a>
            </li>
            <li>
              <a href="#contact">문의하기</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="faq" className="faq">
        <h2>자주 묻는 질문</h2>
        <ul>
          <li>Q: 제품 교환은 어떻게 하나요?</li>
          <li>A: 제품을 구매한 후 7일 이내에 교환 신청이 가능합니다.</li>
          <li>Q: 배송 상태는 어떻게 확인하나요?</li>
          <li>
            A: 배송 추적은 사이트 내 '배송 조회'에서 확인하실 수 있습니다.
          </li>
        </ul>
      </section>

      <section id="contact" className="contact-form">
        <h2>문의하기</h2>
        <button onClick={() => setIsModalOpen(true)}>
          고객센터에 문의하기
        </button>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h3>문의 내용을 작성해주세요</h3>
              <form onSubmit={handleSubmit}>
                <label>
                  이름:
                  <input
                    type="text"
                    name="name"
                    value={contactInfo.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  이메일:
                  <input
                    type="email"
                    name="email"
                    value={contactInfo.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  메시지:
                  <textarea
                    name="message"
                    value={contactInfo.message}
                    onChange={handleChange}
                    required
                  />
                </label>
                <button type="submit">보내기</button>
              </form>
              <button onClick={() => setIsModalOpen(false)}>닫기</button>
            </div>
          </div>
        )}
      </section>

      <footer>
        <p>&copy; 2025 Monami. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CustomerService;
