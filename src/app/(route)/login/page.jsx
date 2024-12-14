"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance"; // Use axiosInstance here
import { useAuth } from "../../context/authcontext";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const { setIsLoggedIn } = useAuth();
  const [error, setError] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/member/login", {
        userId: id,
        password: password,
      });

      const authHeader = response.headers["authorization"];
      if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];
        localStorage.setItem("token", token);
        setIsLoggedIn(true);

        const { firstLogin } = response.data;
        console.log("firstLogin 값:", firstLogin);

        if (firstLogin) {
          router.push("/ntsurveys"); // 첫 로그인 시 설문 페이지로 이동
        } else {
          router.push("/"); // 첫 로그인이 아니면 홈 페이지로 이동
        }
      } else {
        setError("토큰이 응답에 포함되어 있지 않습니다.");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "로그인에 실패했습니다.");
      } else {
        setError("서버와의 연결에 실패했습니다.");
      }
      console.error("로그인 에러:", error);
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

      <form onSubmit={handleLogin} className="w-full max-w-md px-8">
        <div className="mb-6">
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="PW"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-6">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-700 transition"
        >
          로그인
        </button>
      </form>

      <div className="flex space-x-6 mt-6 text-gray-500 text-base">
        <a href="/findId" className="hover:underline">아이디 찾기</a>
        <a href="/findpassword" className="hover:underline">비밀번호 찾기</a>
        <Link href="/join" className="hover:underline">회원가입</Link>
      </div>
    </div>
  );
}
