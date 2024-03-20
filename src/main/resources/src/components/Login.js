import React, { useState } from "react";
import { Link, useNavigate} from 'react-router-dom';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 인증 상태 추가
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // 여기에서 입력된 이메일과 비밀번호를 사용하여 로그인 요청을 처리하고, 인증 상태를 관리합니다.
    // 예를 들어, 서버로 요청을 보내고 응답을 받아서 로그인이 성공했는지 확인할 수 있습니다.
    // 로그인이 성공하면 인증 정보를 저장하고, 이후 적절한 페이지로 이동합니다.
    // 여기에서는 간단한 예시로 로그인 성공 시 홈페이지로 이동하는 것으로 대체합니다.
    if (email === 'test@test.com' && password === 'password') {
      // 인증이 성공했다고 가정합니다.
      localStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true); // 인증 상태 업데이트
      navigate('/');
    } else {
      alert('로그인에 실패했습니다. 이메일 주소와 비밀번호를 확인해주세요.');
    }
  };

    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <Link to="/">
            <img src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/title.png" style={{ width: "100px" }} alt="logo" />
          </Link>
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                id="email" 
                aria-describedby="emailHelp" 
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                id="password" 
                required
              />
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
          </form>
          <p className="mt-3 text-sm">
            회원이 아니신가요? <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">회원가입</Link>
          </p>
        </div>
      </div>
    );
}

export default Login;
