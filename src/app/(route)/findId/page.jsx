"use client";

import Image from "next/image";
import { useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";

// 모달 컴포넌트
const FindIdModal = ({ message, onClose, isError }) => (
  <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-[500px] h-auto max-w-full relative">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-5 text-gray-600 text-xl"
      >
        &times;
      </button>

      {/* Icon and Message */}
      <div className="flex flex-col items-center mb-6">
        {isError ? (
          <div className="mb-4 text-red-500">
            <span role="img" aria-label="error" className="text-4xl">
              ❗
            </span>
          </div>
        ) : (
          <div className="mb-4 text-blue-500">
            <span role="img" aria-label="success" className="text-4xl">
              ✅
            </span>
          </div>
        )}
        <h3
          className={`text-lg font-medium ${
            isError ? "text-red-500" : "text-blue-500"
          } text-center`}
        >
          {message}
        </h3>
      </div>

      {/* Action Button */}
      <div className="flex justify-center">
        <button
          onClick={onClose}
          className={`w-full py-3 px-6 rounded-full transition ${
            isError
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {isError ? "확인" : "로그인 하러 가기"}
        </button>
      </div>
    </div>
  </div>
);

export default function FindIdPage() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isError, setIsError] = useState(false); // 성공/에러 상태
  const router = useRouter();

  const handleFindId = async (e) => {
    e.preventDefault();
    setShowModal(false);

    try {
      const response = await axiosInstance.get("/members/find-id", {
        params: { email }, // GET 요청에 쿼리 파라미터로 이메일 전달
      });

      if (response.data && response.data.email) {
        setModalMessage(`회원님의 아이디는 "${response.data.email}" 입니다.`);
        setIsError(false); // 성공 상태
        setShowModal(true); // 모달 표시
      } else {
        setModalMessage("아이디를 찾을 수 없습니다.");
        setIsError(true); // 에러 상태
        setShowModal(true); // 모달 표시
      }
    } catch (error) {
      setModalMessage("아이디 찾기에 실패했습니다.");
      setIsError(true); // 에러 상태
      setShowModal(true); // 모달 표시
      console.error("아이디 찾기 에러:", error);
    }
  };

  // 모달 닫기
  const handleModalClose = () => {
    setShowModal(false);
    if (!isError) {
      router.push("/login"); // 성공 시 로그인 페이지로 이동
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[60vh] py-8 bg-white">
      {/* 로고 */}
      <div className="mb-8">
        <Image
          src="/images/logo2.png"
          alt="NEETopia 로고"
          width={250}
          height={120}
          priority
        />
      </div>

      {/* 아이디 찾기 폼 */}
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

        {/* 아이디 찾기 버튼 */}
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-700 transition"
        >
          아이디 찾기
        </button>
      </form>

      {/* 로그인/회원가입 링크 */}
      <div className="flex space-x-6 mt-6 text-gray-500 text-base">
        <a href="/login" className="hover:underline">
          로그인
        </a>
        <a href="/join" className="hover:underline">
          회원가입
        </a>
      </div>

      {/* 모달 표시 */}
      {showModal && (
        <FindIdModal
          message={modalMessage}
          isError={isError}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}
