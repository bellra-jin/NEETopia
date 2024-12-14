"use client";

import Image from "next/image";
import { useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { useRouter } from "next/navigation";

// 모달 컴포넌트
const PasswordResetModal = ({ message, onClose, isError }) => (
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

export default function ResetPasswordPage() {
  const [step, setStep] = useState(1); // 현재 단계 (1: 인증, 2: 비밀번호 초기화)
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isError, setIsError] = useState(false); // 성공/에러 상태
  const router = useRouter();

  // 첫 단계: 사용자 인증
  const handleVerifyUser = async (e) => {
    e.preventDefault();
    setShowModal(false);

    try {
      const response = await axiosInstance.post("/members/verify-password", {
        userId,
        email,
      });

      if (response.status === 200) {
        setModalMessage("사용자 인증 완료. 비밀번호 초기화가 가능합니다.");
        setIsError(false); // 성공 상태
        setShowModal(true);
        setStep(2); // 다음 단계로 이동
      }
    } catch (error) {
      setModalMessage(
        error.response?.data?.message || "사용자 인증에 실패했습니다."
      );
      setIsError(true); // 에러 상태
      setShowModal(true);
    }
  };

  // 두 번째 단계: 비밀번호 초기화
  const handleResetPassword = async (e) => {
    e.preventDefault();
  
    // 비밀번호 확인 로직
    if (newPassword !== confirmPassword) {
      setModalMessage("비밀번호가 일치하지 않습니다.");
      setIsError(true);
      setShowModal(true);
      return;
    }
  
    try {
      console.log("요청 데이터:", { userId, newPassword }); // 요청 데이터 확인
      const response = await axiosInstance.post("/member/reset-password", {
        userId,
        newPassword,
      });
  
      console.log("응답 데이터:", response.data); // 응답 데이터 확인
      if (response.status === 200) {
        setModalMessage("비밀번호가 성공적으로 초기화되었습니다.");
        setIsError(false);
        setShowModal(true);
        setStep(3);
      }
    } catch (error) {
      console.error("비밀번호 초기화 요청 에러:", error.response || error);
      setModalMessage(
        error.response?.data?.message || "비밀번호 초기화에 실패했습니다."
      );
      setIsError(true);
      setShowModal(true);
    }
  };
  

  // 모달 닫기
  const handleModalClose = () => {
    setShowModal(false);
    if (!isError && step === 3) {
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

      {/* 사용자 인증 폼 */}
      {step === 1 && (
        <form onSubmit={handleVerifyUser} className="w-full max-w-md px-8">
          <div className="mb-6">
            <input
              type="text"
              placeholder="아이디 입력"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              required
            />
          </div>
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
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-700 transition"
          >
            사용자 인증
          </button>
        </form>
      )}

      {/* 비밀번호 초기화 폼 */}
      {step === 2 && (
        <form onSubmit={handleResetPassword} className="w-full max-w-md px-8">
          <div className="mb-6">
            <input
              type="password"
              placeholder="새 비밀번호 입력"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-700 transition"
          >
            비밀번호 초기화
          </button>
        </form>
      )}

      {/* 모달 표시 */}
      {showModal && (
        <PasswordResetModal
          message={modalMessage}
          isError={isError}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}
