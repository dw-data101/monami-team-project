const CeoM = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 50,
        rowGap: 50,
        marginTop: 100,
      }}
    >
      <span
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>CEO </h1>
        <h1
          style={{
            color: "red",
          }}
        >
          M
        </h1>
        <h1
          style={{
            color: "red",
            textDecoration: "underline",
          }}
        >
          E
        </h1>
        <h1
          style={{
            color: "red",
          }}
        >
          SSAGE
        </h1>
      </span>
      <div
        style={{
          display: "flex",
          padding: 100,
        }}
      >
        <div
          style={{
            width: "150px",
            height: "150px",
            borderLeft: "5px solid red",
            borderTop: "5px solid red",
          }}
        >
          <img src="https://www.monami.com/images/page/message_ceo.jpg" />
          <div
            style={{
              background: "gray",
              width: 500,
              textAlign: "center",
              height: 200,
            }}
          >
            항상 당신 곁의 <p>소중한 친구로 남겠습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeoM;
