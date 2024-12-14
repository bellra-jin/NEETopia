"use client";

import { useState } from "react";
import axiosInstance from "@/utils/axiosInstance"; // axiosInstance import
import { useRouter } from "next/navigation";
import Modal from "../../components/Modal"; // Modal 컴포넌트 import

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    email: "",
    nickname: "",
  });
  const [error, setError] = useState({
    userId: "",
    password: "",
    email: "",
    nickname: "",
  });
  const [isModalVisible, setIsModalVisible] = useState(false); // 모달 상태
  const [modalMessage, setModalMessage] = useState(""); // 모달 메시지 상태
  const [isErrorModal, setIsErrorModal] = useState(false); // 에러 모달 상태
  const [backendErrorMessage, setBackendErrorMessage] = useState(""); // 백엔드 에러 메시지

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form data
  const validateForm = () => {
    let isValid = true;
    const newError = { userId: "", password: "", email: "", nickname: "" };

    if (!formData.userId) {
      newError.userId = "ID를 입력해주세요.";
      isValid = false;
    }

    if (!formData.password) {
      newError.password = "비밀번호를 입력해주세요.";
      isValid = false;
    }

    if (!formData.nickname) {
      newError.nickname = "닉네임을 입력해주세요."; // name -> nickname
      isValid = false;
    }

    if (!formData.email) {
      newError.email = "이메일을 입력해주세요.";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // If form is not valid, don't proceed
    }

    try {
      const response = await axiosInstance.post("/member/join", {
        userId: formData.userId,
        password: formData.password,
        email: formData.email,
        nickname: formData.nickname,
      });

      // Show success modal
      setModalMessage("회원가입이 완료되었습니다!");
      setIsErrorModal(false); // Success, so it's not an error modal
      setIsModalVisible(true); // 회원가입 성공 후 모달 띄우기

    } catch (err) {
      // If there's an error, set the error message from backend
      const backendErrorMessage = err.response?.data?.message || "회원가입에 실패했습니다. 다시 시도해주세요.";
      setModalMessage("회원가입에 실패했습니다. 다시 시도해주세요.");
      setBackendErrorMessage(backendErrorMessage); // Backend error message
      setIsErrorModal(true); // Error, so it's an error modal
      setIsModalVisible(true); // 회원가입 실패 시 모달 띄우기
    }
  };

  // Close modal and handle different actions
  const closeModal = () => {
    setIsModalVisible(false); // 모달 닫기
    if (!isErrorModal) {
      router.push("/login"); // 로그인 페이지로 리다이렉트
    } else {
      // 실패한 경우, 폼을 리셋하고 회원가입 페이지로 유지
      setFormData({
        userId: "",
        password: "",
        email: "",
        nickname: "",
      });
      setError({
        userId: "",
        password: "",
        email: "",
        nickname: "",
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh] py-8 px-4 bg-white">
      <div className="w-full max-w-md">
        <h1 className="text-center text-3xl font-bold mb-8">회원가입</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* User ID Input */}
          <div>
            <input
              type="text"
              name="userId"
              placeholder="ID"
              value={formData.userId}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            />
            {error.userId && (
              <p className="text-red-500 text-sm mt-1">{error.userId}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="PW"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            />
            {error.password && (
              <p className="text-red-500 text-sm mt-1">{error.password}</p>
            )}
          </div>

          {/* Nickname Input */}
          <div>
            <input
              type="text"
              name="nickname"
              placeholder="닉네임"
              value={formData.nickname}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            />
            {error.nickname && (
              <p className="text-red-500 text-sm mt-1">{error.nickname}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="이메일"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
            />
            {error.email && (
              <p className="text-red-500 text-sm mt-1">{error.email}</p>
            )}
          </div>

          {/* General Error */}
          {error.general && (
            <p className="text-red-500 text-sm mt-4">{error.general}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-2 rounded-full hover:bg-yellow-600 transition"
          >
            회원가입
          </button>
        </form>
      </div>

      {/* 모달창 */}
      {isModalVisible && (
        <Modal
          message={modalMessage} // 모달 메시지 전달
          onClose={closeModal}
          isError={isErrorModal} // 에러 모달 여부에 따른 색상 변경
          backendErrorMessage={backendErrorMessage} // 백엔드 에러 메시지 전달
        />
      )}
    </div>
  );
}
