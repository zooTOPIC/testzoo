import React from "react";
import { Link } from 'react-router-dom';

function Signup(props) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
          <Link to="/">
            <img src="https://zootopic-s3.s3.ap-northeast-2.amazonaws.com/title.png" style={{ width: "100px" }} />
          </Link>
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="name" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input type="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="password" />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Signup</button>
        </form>
        <p className="mt-3 text-sm">
          회원이신가요? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">로그인</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
