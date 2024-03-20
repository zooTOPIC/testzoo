import React, { useState, useEffect } from "react";

function Footer(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 스크롤 이벤트를 통해 스크롤 위치를 감지하고 스크롤 버튼을 표시하거나 숨김
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollToTopButton = document.getElementById("scrollToTopButton");

      if (scrollY > 100) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 모달을 열고 닫는 함수
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* 하단 문의 버튼 */}
      <div className="fixed bottom-0 right-0 p-3 z-10">
        <button type="button" onClick={toggleModal}>
          <img
            src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/symbol_kakao.png"
            alt="카카오톡 문의 버튼"
            className="rounded-full h-10 w-10 shadow-md"
          />
        </button>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="relative bg-white p-8 rounded-md shadow-md">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={toggleModal}
            >
              Close
            </button>
            <h2 className="text-lg font-semibold mb-4">카카오톡으로 문의하기</h2>
            <div className="text-center my-4">
              <a
                href="https://pf.kakao.com/_ZxlSaG"
                className="text-red-600 font-semibold"
              >
                카카오톡 채널 바로가기
              </a>
            </div>
            <div className="text-center">
              <img
                src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/qrcode.png"
                alt="카카오톡 QR 코드"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      )}

      {/* 스크롤 버튼 */}
      <a
        href=""
        id="scrollToTopButton"
        className="fixed bottom-5 right-5 bg-gray-500 px-4 py-2 text-white rounded-full shadow-md transition duration-300 ease-in-out hidden"
      >
        TOP
      </a>

      {/* 푸터 */}
      <div className="bg-white py-5 w-full">
        <footer className="container text-center">
          <div style={{ lineHeight: "2.5" }}>
            (주)주토픽 / 책임자 : zooTOPIC / 담당자 메일주소 : zoo@topic.com
            <br />
            서울특별시 도봉구 창동 1-28 씨드큐브 7층
            <br />
            근무시간이 일정하지 않아 전화대신 고객센터를 이용해주세요!
          </div>
          <hr className="p-1" />
          <div className="text-body-secondary">&copy; 2024 Company, ZOOTOPIC</div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
