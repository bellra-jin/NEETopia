"use client";

import React, { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";

export default function WelcomePage() {
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const fetchNickname = async () => {
      try {
        const response = await axiosInstance.get("/members/nickname");
        setNickname(response.data.nickname); // 서버에서 받은 닉네임 데이터로 설정
      } catch (error) {
        console.error("닉네임을 불러오지 못했습니다:", error);
      }
    };

    fetchNickname();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-0">
      {/* 닉네임과 환영 메시지 */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
        {nickname ? `${nickname} 님!` : "로딩 중..."}
      </h1>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mt-4 sm:mt-6 lg:mt-8">
        NEETopia에 오신 걸 환영합니다.
      </h2>
      {/* 설명 텍스트 */}
      <p className="text-gray-600 mt-8 sm:mt-10 lg:mt-12 max-w-xl sm:max-w-2xl bg-gray-50 p-6 sm:p-8 lg:p-12 text-base sm:text-lg lg:text-xl leading-loose">
        <span className="text-blue-500 font-semibold">
          메인의 "접속하기" 버튼으로 니토피아의 메타버스 공간을 경험해 보세요!
          <br />
        </span>
        서로를 응원하고 성장할 수 있는 커뮤니티 속에서,
        <br />
        다양한 미션과 자유로운 교류를 통해 진정한 자신을 찾아가세요.
        <br />
        니토피아는 여러분의 여정을 응원합니다!
      </p>
    </div>
  );
}
