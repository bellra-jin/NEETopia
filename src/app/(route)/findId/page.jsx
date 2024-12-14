"use client";

import Image from "next/image";
import { useState } from "react";
import axiosInstance from "@/utils/axiosInstance"; // Use axiosInstance here

export default function FindIdPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFindId = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const response = await axiosInstance.get("/members/find-id", {
        params: { email: email }, // GET 요청에 쿼리 파라미터로 이메일 전달
      });

      if (response.data && response.data.userId) {
        setSuccessMessage(`아이디는 "${response.data.userId}" 입니다.`);
      } else {
        setError("아이디를 찾을 수 없습니다.");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "아이디 찾기에 실패했습니다.");
      } else {
        setError("서버와의 연결에 실패했습니다.");
      }
      console.error("아이디 찾기 에러:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] py-8 bg-white">
      <div className="mb-8">
        <Image
          src="/images/logo2.png"
          alt="NEETopia 로고"
          width={250}
          height={120}
          priority
        />
      </div>

      <form onSubmit={handleFindId} className="w-full max-w-md px-8">
        <div className="mb-6">
          <input
            type="email"
            placeholder="이메일 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
            required
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-6">{error}</p>
        )}

        {successMessage && (
          <p className="text-green-500 text-sm mb-6">{successMessage}</p>
        )}

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-700 transition"
        >
          아이디 찾기
        </button>
      </form>

      <div className="flex space-x-6 mt-6 text-gray-500 text-base">
        <a href="/login" className="hover:underline">로그인</a>
        <a href="/join" className="hover:underline">회원가입</a>
      </div>
    </div>
  );
}
