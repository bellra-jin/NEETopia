// "use client";

// import React, { useEffect, useState } from "react";
// import NeetTypeDescription from "./components/NeetTypeDescription";
// import Image from "next/image";
// import axiosInstance from "@/utils/axiosInstance";

// export default function NeetPage() {
//     const [neetData, setNeetData] = useState(null);
//     const [nickname, setNickname] = useState("");

//    // 로컬 스토리지에서 추천 데이터 가져오기 및 닉네임 가져오기
//     useEffect(() => {
//         const fetchNeetDataAndNickname = async () => {
//         try {
//             // 로컬 스토리지에서 Neet 추천 데이터 가져오기
//             const storedNeetData = JSON.parse(localStorage.getItem("neetRecommendation"));
//             if (storedNeetData) {
//             setNeetData(storedNeetData);
//             }

//             // 닉네임 가져오기
//             const response = await axiosInstance.get("/members/nickname");
//             setNickname(response.data.nickname); // 닉네임 설정
//         } catch (error) {
//             console.error("데이터 로드 실패:", error);
//             setNickname("알 수 없음"); // 기본값 설정
//         }
//         };

//         fetchNeetDataAndNickname();
//     }, []);


//     if (!neetData) return <p>로딩 중...</p>;

//     return (
//         <div>
//             <div className="my-12 text-center">
//                 <Image
//                 src="/images/logo2.png"
//                 alt="NEETopia 로고"
//                 width={250}
//                 height={120}
//                 priority
//                 className="mx-auto"
//                 />
//             </div>
//             {/* 닉네임 표시 */}
//             <div className="text-center mb-6">
//                 <p className="max-w-xs mx-auto text-xl text-gray-500 px-4 py-4 rounded-full border border-gray-300">
//                 작성자: {nickname}
//                 </p>
//             </div>

//             {/* 니트 유형 설명 */}
//             <NeetTypeDescription neetType={neetData.neet_type} />
//         </div>
//     );
// }


"use client";

import React, { useEffect, useState } from "react";
import NeetTypeDescription from "./components/NeetTypeDescription";
import Image from "next/image";
import axiosInstance from "@/utils/axiosInstance";

export default function NeetPage() {
  const [neetData, setNeetData] = useState(null);
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const fetchNeetDataAndNickname = async () => {
      try {
        const storedNeetData = JSON.parse(localStorage.getItem("neetRecommendation"));
        if (storedNeetData) {
          setNeetData(storedNeetData);
        }

        const response = await axiosInstance.get("/members/nickname");
        setNickname(response.data.nickname); // 닉네임 설정
      } catch (error) {
        console.error("데이터 로드 실패:", error);
        setNickname("알 수 없음"); // 기본값 설정
      }
    };

    fetchNeetDataAndNickname();
  }, []);

  if (!neetData) return <p className="text-center text-lg md:text-xl py-12">로딩 중...</p>;

  return (
    <div className="px-4 sm:px-8 max-w-6xl mx-auto">
      <div className="my-8 sm:my-12 text-center">
        <Image
          src="/images/logo2.png"
          alt="NEETopia 로고"
          width={250} // 로고 크기 고정
          height={120}
          priority
          className="mx-auto"
        />
      </div>

      <div className="text-center mb-6">
        <p className="max-w-xs mx-auto text-base sm:text-xl text-gray-500 px-4 py-4 rounded-full border border-gray-300">
          작성자: {nickname}
        </p>
      </div>

      <NeetTypeDescription neetType={neetData.neet_type} />
    </div>
  );
}

