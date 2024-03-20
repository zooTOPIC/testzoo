import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledImage = styled.img`
  width: 100px;
`;

const StyledTopic = styled.span`
  font-size: 7xl;
  font-weight: bold;
  color: #f00; /* red color */
`;

function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
        const storedLoggedIn = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(storedLoggedIn === 'true');
  }, []); // 빈 배열을 넘겨주면 컴포넌트가 마운트될 때 한 번만 실행됩니다.

  // 로그아웃 핸들러
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };
  
  // "/developers" 페이지인지 확인하는 함수
  const isDevelopersPage = () => {
    return window.location.pathname === "/developers";
  };

  return (
    <div style={{ background: "white", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
      <div className="w-full flex items-center justify-center">
        <div className="col-lg-12 p-2 text-center flex items-center">
          <StyledImage src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/zoo.png" alt="zoo" className="h-24 inline-block" />
          <StyledTopic className="inline-block align-middle">TOPIC</StyledTopic>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <Link to="/">
            <img src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/title.png" style={{ width: "100px" }} />
          </Link>
        </div>

        {/* 조건부 렌더링 */}
        {isDevelopersPage() ? (
          <nav>
            <ul style={{ display: "flex", listStyleType: "none" }}>
              {/* JSON 데이터를 이용하여 동적으로 네비게이션 링크 생성 */}
              {props.developersData.map(developer => (
                <a href={`#${developer.id}`} key={developer.id}>
                  <li style={{ marginRight: "10px" }}>
                    <button>{developer.name}</button>
                  </li>
                </a>  
              ))}
            </ul>
          </nav>
        ) : (
          <nav>
              <ul style={{ display: "flex", listStyleType: "none" }}>
                {/* 조건부 렌더링 */}
                {isLoggedIn ? (
                  // 로그인 상태일 때
                  <li style={{ marginRight: "10px" }}><button onClick={handleLogout}>로그아웃</button></li>
                ) : (
                  // 로그아웃 상태일 때
                  <Link to='/login'>
                    <li style={{ marginRight: "10px" }}><button>로그인</button></li>
                  </Link>
                )}
              <a href='#newsList'>
                <li style={{ marginRight: "10px" }}><button>뉴스</button></li>
              </a>
              <a href='#accordion'>
                <li><button>서비스 소개</button></li>
              </a>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );

}

export default Header;

