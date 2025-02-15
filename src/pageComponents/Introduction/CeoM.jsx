import { useState } from "react";
import CeomPic from "./CeomPic";

const CeoM = () => {
  const [word, setWord] = useState(["M", "E", "S", "S", "A", "G", "E"]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          columnGap: 10, // 문자 간의 기본 간격
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <h1>CEO</h1>
        <h1
          style={{
            color: "red",
          }}
        >
          {word.map((char, index) => (
            <span
              key={index}
              style={{
                position: "relative", // position을 사용해 밑줄을 조정
              }}
            >
              {char === "E" && index === 1 ? (
                // 두 번째 'E'에만 밑줄을 추가
                <>
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0, // 밑줄 위치를 조정
                      left: 0,
                      right: 0,
                      borderBottom: "3px solid red", // 밑줄 스타일
                    }}
                  ></span>
                  {char}
                </>
              ) : (
                char
              )}
            </span>
          ))}
        </h1>
      </div>

      {/* 사진부분 */}
      <CeomPic />

      <p
        style={{
          display: "flex",
          rowGap: 10,
          fontSize: 10,
        }}
      >
        안녕하십니까? (주)모나미 대표이사 송하경입니다.
        <br />
        언제나 한결같이 모나미에 애정과 관심을 보여주시는 고객 및 주주
        여러분들께 깊은 감사를 드립니다.
        <br />
        <br /> 1960년 창립된 광신화학공업사에서 출발한 모나미의 역사가 어느덧
        반백년이 넘었습니다. 지금의 모나미를 있게한 ‘모나미 153’볼펜은 지난 50여
        년간 꾸준한 사랑을 받으며 모나미를 필기구의 대명사이자 <br /> 국민
        브랜드로 성장시켰습니다. 이처럼 많은 분들의 사랑에 힘입어 문구 업계의
        혁신을 주도할 수 있었으며, 사인펜, 프러스펜, 네임펜, 보드 마카 등 수
        많은 히트작들을 선보일 수 있었습니다.
        <br />
        <br /> 필기구를 넘어 종합문구 분야의 선도적인 기업으로 건실한 성장을
        이뤄온 모나미는 국내시장 뿐 아니라 해외시장에서도 꾸준한 성장을 거둬
        전세계 다양한 국가로 수출되고 있습니다.
        <br />
        <br /> 하지만 모나미는 지난 50여 년간의 성과에 만족하지 않고 새로운
        출발에 나서려고 합니다.
        <br />
        <br /> 종합문구분야의 선두 자리를 넘어 문구와 유통을 아우르는 새로운
        비즈니스 모델을 만들어 나가고 있습니다. 하루가 다르게 변하는 트렌드와
        시대의 변화에 대처하기 위해서 모나미의 기업 문화 역시 새롭게 만들어
        나가고 있습니다. 미래를 긍정적으로 바라보면서 준비하고, 항상 즐거운
        변화를 추구하는 기업이 되겠습니다. 시장에 대해서는 항상 겸손하고, 고객에
        대해서는 항상 함께하는 친구 같은 마음과 자세로 대할 것입니다. <br />
        <br />
        앞으로 모나미는 <br />
        <br />
        '오래된 친구지만 항상 신선하고 놀라움으로 가득찬, 그리고 미래를 위해 쉼
        없이 노력하는' 기업이 되고자 합니다. 모나미의 새로운 변화와 도전을
        지켜봐 주시길 바라며, 앞으로도 변함없는 사랑과 격려를 부탁드립니다.
        <br /> 감사합니다.
      </p>
      <div
        style={{
          display: "flex",
          columnGap: 20,
          justifyContent: "right",
        }}
      >
        <p>(주)모나미 대표 </p>
        <img src="https://www.monami.com/images/page/message_sign.jpg" alt="" />
      </div>
    </div>
  );
};

export default CeoM;
