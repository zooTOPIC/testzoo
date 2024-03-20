import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Accordion(props) {
  const [openAccordion, setOpenAccordion] = useState("");

  const toggleAccordion = (accordionId) => {
    setOpenAccordion(openAccordion === accordionId ? "" : accordionId);
  };

  return (
    <div className="pt-5" id="accordion">
      <div className="container mx-auto px-4">
        {/* 공지사항 */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-2">공지사항</h2>
          <div className="border border-gray-200 p-3">
            <button
              className="text-lg font-semibold w-full text-left focus:outline-none"
              onClick={() => toggleAccordion("collapseOne")}
            >
              공지사항 보기
            </button>
            {openAccordion === "collapseOne" && (
              <div className="mt-3">
                <p className="text-gray-700">
                  안녕하세요, Zootopic을 이용해주셔서 감사합니다! Zootopic은 매일 새로운
                  뉴스를 이메일로 받아보실 수 있는 플랫폼입니다. 우리는 뉴스를 통해
                  세상의 다양한 이야기를 전달하고자 합니다. 저희 플랫폼을 이용해주시는
                  여러분들께 감사드리며, 언제나 품질 높은 서비스를 제공하기 위해 노력하고
                  있습니다. 이용 중 궁금하신 사항이나 개선점이 있으시면 우측 하단의 카카오톡
                  채널로 언제든지 연락 주시기 바랍니다. 감사합니다.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-2">FAQ</h2>

          <div className="border border-gray-200 p-3">
            <button
              className="text-lg font-semibold w-full text-left focus:outline-none"
              onClick={() => toggleAccordion("collapseParent")}
            >
              FAQ 보기
            </button>
            {openAccordion === "collapseParent" && (
              <div className="mt-3">
                {/* 질문 1 */}
                <div className="mb-3">
                  <button className="text-lg font-semibold w-full text-left focus:outline-none" onClick={() => toggleAccordion("collapseChild1")}>
                    Q: Zootopic을 이용하기 위해서는 어떻게 가입해야 하나요?
                  </button>
                  {openAccordion === "collapseChild1" && (
                    <div className="mt-2">
                      <p className="text-gray-700">
                        A: Zootopic을 이용하려면 먼저 웹사이트에 접속하여 중요한 회원
                        정보를 입력 할 필요없이, 이메일만 입력하시고 뉴스레터 무료로
                        구독하기 버튼을 누르시면 아침 6시에 오늘 하루의 뉴스를 이메일로
                        받아보실 수 있어요!
                      </p>
                    </div>
                  )}
                </div>

                {/* 질문 2 */}
                <div className="mb-3">
                  <button className="text-lg font-semibold w-full text-left focus:outline-none" onClick={() => toggleAccordion("collapseChild2")}>
                    Q: Zootopic에서 제공하는 뉴스는 어떤 종류인가요?
                  </button>
                  {openAccordion === "collapseChild2" && (
                    <div className="mt-2">
                      <p className="text-gray-700">
                        A: Zootopic은 다양한 주제의 뉴스를 제공합니다. 정치, 경제, 문화,
                        스포츠 등 다양한 분야의 최신 소식을 커버하고 있으며, 추후에
                        사용자의 관심에 따라 맞춤형 뉴스를 제공하기 위해 노력하고
                        있습니다.
                      </p>
                    </div>
                  )}
                </div>

                {/* 질문 3 */}
                <div className="mb-3">
                  <button className="text-lg font-semibold w-full text-left focus:outline-none" onClick={() => toggleAccordion("collapseChild3")}>
                    Q: Zootopic에서 뉴스를 어디서 수집하나요?
                  </button>
                  {openAccordion === "collapseChild3" && (
                    <div className="mt-2">
                      <p className="text-gray-700">
                        A: Zootopic은 신뢰할 수 있는 다양한 뉴스 출처에서 정보를 수집하고
                        있습니다. 우리는 뉴스의 신뢰성과 다양성을 유지하기 위해 노력하며,
                        사용자들에게 최상의 정보를 제공하기 위해 노력하고 있습니다.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 외부 링크 */}
        <div className="mb-5">
          <a href="http://kys-chat.s3-website.ap-northeast-2.amazonaws.com/" target="_blank" rel="noopener noreferrer" className="flex items-center mb-2">
            <img src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/zoo.png" alt="zoo" className="h-8 mr-2" />
            <span className="text-lg font-semibold text-red-600">Zoo Chat</span>
          </a>
          <Link to="/developers" rel="noopener noreferrer" className="flex items-center">
            <div className="flex mr-2">
              <img src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/animalface_cat.png" alt="cat" className="w-8 h-8" />
              <img src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/animalface_rabbit.png" alt="rabbit" className="w-8 h-8 ml-2" />
              <img src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/animalface_fox.png" alt="fox" className="w-8 h-8 ml-2" />
              <img src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/animalface_raccoon.png" alt="raccoon" className="w-8 h-8 ml-2" />
              <img src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/animalface_sparrow.png" alt="sparrow" className="w-8 h-8 ml-2" />
            </div>
            <span className="font-semibold text-red-600">개발자 소개 바로가기</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Accordion;