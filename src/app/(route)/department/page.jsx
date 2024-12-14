"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // useRouter import
import axiosInstance from "@/utils/axiosInstance"; // 클라이언트에서 사용할 axiosInstance import

export default function DepartmentRecommendationPage() {
  const [departmentData, setDepartmentData] = useState(null);
  const [nickname, setNickname] = useState(""); // 닉네임 상태 추가
  const router = useRouter(); // 클라이언트 전용 Router

  useEffect(() => {
    // 로컬 스토리지 데이터와 닉네임 가져오기
    const fetchData = async () => {
      try {
        // 로컬 스토리지에서 부서 추천 데이터 가져오기
        const storedData = JSON.parse(localStorage.getItem("departmentRecommendation"));
        if (storedData) {
          setDepartmentData(storedData);
        }

        // 닉네임 가져오기
        const response = await axiosInstance.get("/members/nickname");
        setNickname(response.data.nickname); // 서버 응답에서 닉네임 설정
      } catch (error) {
        console.error("데이터 로드 실패:", error);
        setNickname("알 수 없음"); // 기본 닉네임 설정
      }
    };

    fetchData();
  }, []);

  const handleSelectDepartment = async (departmentId) => {
    if (!departmentData) return;

    try {
      const response = await axiosInstance.post("/department/select", { departmentId });
      console.log("백엔드 응답 데이터:", response.data); // 응답 데이터 출력
      console.log("백엔드 응답 상태 코드:", response.status); // 상태 코드 출력

      if (response.status === 200) {
        router.push("/welcomes");
      } else {
        console.error("백엔드 오류:", response);
      }
    } catch (error) {
      console.error("부서 선택 오류:", error);
    }
  };

  if (!departmentData) return <p>로딩 중...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center text-center py-8 sm:py-16">
      {/* 상단 제목 및 설명 섹션 */}
      <div className="max-w-xl sm:max-w-3xl w-full my-4 sm:my-8 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          {nickname ? `${nickname} 님을 위한 부서 추천!` : "부서 추천"}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-4 sm:mt-8 leading-loose bg-gray-50 p-4 sm:p-8 rounded-lg">
          설문조사를 기반으로 한 AI 부서 추천 결과는 NEETopia에서 확인할 수 있습니다.
          <br />
          각 부서는 비슷한 성향을 가진 사람들로 구성되어, 소속감을 느낄 수 있는 환경을 제공합니다.
          <br />
          이를 통해 자유롭게 교류하고 자신의 페이스에 맞는 경험을 쌓을 수 있는 기회를 누릴 수 있습니다.
          <span className="text-red-500">
            {" "}
            <br />※ 부서 변경은 추후 포인트로 가능합니다.
          </span>
        </p>
      </div>

      {/* 부서 추천 카드 섹션 */}
      <section className="flex flex-col lg:flex-row justify-center lg:gap-8 my-8 max-w-7xl mx-auto px-4">
        {/* 중앙 추천 부서 카드 */}
        <div className="flex-shrink-0 mb-8 lg:mb-0 flex flex-col items-center">
          {/* 추천 부서 카드 */}
          <div className="bg-yellow-100 border border-gray-200 rounded-lg shadow-lg w-80 h-[32rem] flex flex-col items-center">
            <div className="relative w-full h-full">
              <span className="absolute top-4 left-4 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                추천부서
              </span>
              <img
                src={departmentData.recommendedDepartment.imageUrl}
                alt={departmentData.recommendedDepartment.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
          </div>

          {/* 추천 부서 선택 버튼 */}
          <div className="mt-4 sm:mt-6 flex flex-col items-center">
            <button
              onClick={() => handleSelectDepartment(departmentData.recommendedDepartment.id)}
              className="bg-blue-500 text-white py-2 sm:py-3 px-4 sm:px-8 rounded-full hover:bg-blue-600 transition duration-200 text-sm sm:text-base"
            >
              추천 부서 선택
            </button>
          </div>
        </div>

        {/* 사이드 부서 추천 카드들 */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {departmentData.otherDepartments.map((dept, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg w-40 sm:w-48 h-56 sm:h-64 flex flex-col items-center">
                <div className="w-full h-full rounded-t-lg">
                  <img
                    src={dept.imageUrl}
                    alt={dept.name}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
              </div>
              <button
                onClick={() => handleSelectDepartment(dept.id)}
                className="bg-purple-500 text-white py-1 sm:py-2 px-4 sm:px-6 rounded-full mt-2 sm:mt-3 hover:bg-purple-600 transition duration-200 text-xs sm:text-base"
              >
                해당 부서 선택
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

