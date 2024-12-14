// import React, { useState } from "react";
// import { neetTypeDescriptions } from "./neetTypeDescriptions"; // 설명 데이터 가져오기
// import { useRouter } from "next/navigation"; // Next.js 라우터 import
// import axiosInstance from "@/utils/axiosInstance"; // axiosInstance import
// import Image from "next/image";

// function NeetTypeDescription({ neetType }) {
//   const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
//   const typeInfo = neetTypeDescriptions[neetType];
//   const router = useRouter();

//   if (!typeInfo) {
//     return <p>해당하는 니트 유형이 없습니다.</p>; // neet_type에 해당하는 설명이 없을 때
//   }

//   const handleButtonClick = async () => {
//     setIsLoading(true); // 로딩 시작
//     try {
//       // POST 요청으로 부서 추천 요청 보내기
//       const response = await axiosInstance({
//         url: "/department/recommendation",
//         method: "post",
//       });

//       // AI 응답을 로컬 스토리지에 저장
//       localStorage.setItem("departmentRecommendation", JSON.stringify(response.data));

//       // department 페이지로 이동
//       router.push("/department");
//     } catch (error) {
//       console.error("POST 요청 오류:", error);
//     } finally {
//       setIsLoading(false); // 로딩 종료
//     }
//   };
  
  

//   return (
//     <div className="max-w-2xl mx-auto p-6 text-center rounded-lg my-8">
//       <h1 className="text-2xl font-bold text-gray-800 mb-2">{typeInfo.title}</h1>
//       <h2 className="text-xl font-semibold text-gray-600 mb-4">{typeInfo.subtitle}</h2>

//       <div className="bg-gray-50 p-8 rounded-lg mb-6 border text-lg">
//         {/* description 배열을 여러 줄로 출력 */}
//         {typeInfo.description.map((line, index) => (
//           <p key={index} className="text-gray-700 mb-4">{line}</p>
//         ))}
//         <p className="text-gray-800 font-semibold mb-6">{typeInfo.description2}</p>
//         <button
//           onClick={handleButtonClick} // 버튼 클릭 시 이동
//           className="bg-white text-blue-600 py-2 px-6 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center space-x-2 mt-12 text-xl mx-auto"
//         >
//           {typeInfo.buttonLabel}
//         </button>
//       </div>

//       {/* 로딩 팝업 */}
//       {isLoading && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//         <div className="bg-white p-12 rounded-lg shadow-lg flex flex-col items-center">
//           <Image
//             src="/images/loading.svg"
//             alt="로딩 중"
//             width={200}
//             height={200}
//           />
//           <p className="text-gray-700 mt-4 text-xl">설문 분석 중 입니다. <br/>잠시만 기다려 주세요...</p>
//         </div>
//       </div>
//       )}
//     </div>
//   );
// }


// export default NeetTypeDescription;

import React, { useState } from "react";
import { neetTypeDescriptions } from "./neetTypeDescriptions"; // 설명 데이터 가져오기
import { useRouter } from "next/navigation"; // Next.js 라우터 import
import axiosInstance from "@/utils/axiosInstance"; // axiosInstance import
import Image from "next/image";

function NeetTypeDescription({ neetType }) {
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const typeInfo = neetTypeDescriptions[neetType];
  const router = useRouter();

  if (!typeInfo) {
    return <p>해당하는 니트 유형이 없습니다.</p>; // neet_type에 해당하는 설명이 없을 때
  }

  const handleButtonClick = async () => {
    setIsLoading(true); // 로딩 시작
    try {
      // POST 요청으로 부서 추천 요청 보내기
      const response = await axiosInstance({
        url: "/department/recommendation",
        method: "post",
      });

      // AI 응답을 로컬 스토리지에 저장
      localStorage.setItem("departmentRecommendation", JSON.stringify(response.data));

      // department 페이지로 이동
      router.push("/department");
    } catch (error) {
      console.error("POST 요청 오류:", error);
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  return (
    <div className="max-w-xl md:max-w-2xl mx-auto p-4 sm:p-6 md:p-8 text-center rounded-lg my-8">
      <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{typeInfo.title}</h1>
      <h2 className="text-lg md:text-xl font-semibold text-gray-600 mb-4">{typeInfo.subtitle}</h2>

      <div className="bg-gray-50 p-4 sm:p-8 rounded-lg mb-6 border text-base md:text-lg">
        {typeInfo.description.map((line, index) => (
          <p key={index} className="text-gray-700 mb-4">{line}</p>
        ))}
        <p className="text-gray-800 font-semibold mb-6">{typeInfo.description2}</p>
        <button
          onClick={handleButtonClick}
          className="bg-white text-blue-600 py-2 px-6 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center space-x-2 mt-6 md:mt-12 text-base md:text-xl mx-auto"
        >
          {typeInfo.buttonLabel}
        </button>
      </div>

      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg flex flex-col items-center">
            <Image
              src="/images/loading.svg"
              alt="로딩 중"
              width={150}
              height={150}
            />
            <p className="text-gray-700 mt-4 text-base sm:text-xl">설문 분석 중 입니다. <br />잠시만 기다려 주세요...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default NeetTypeDescription;


