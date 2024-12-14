// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import axiosInstance from "@/utils/axiosInstance"; // axiosInstance import

// export default function NtSurveyPage() {
//   const [surveyData, setSurveyData] = useState([]);
//   const [responses, setResponses] = useState({});
//   const [nickname, setNickname] = useState("");
//   const router = useRouter();

//   // 예상 응답을 정의하는 객체
//   const expectedResponses = {
//     1: "그렇다",   // ntSurveyId가 1인 질문의 예상 응답은 "그렇다"
//     2: "보통",     // ntSurveyId가 2인 질문의 예상 응답은 "보통"
//     3: "그렇다",   // ntSurveyId가 3인 질문의 예상 응답은 "아니다"
//     4: "그렇다",   // ntSurveyId가 4인 질문의 예상 응답은 "그렇다"
//     5: "아니다",   // ntSurveyId가 5인 질문의 예상 응답은 "보통"
//     6: "그렇다",
//     7: "보통",
//     8: "보통",
//     9: "아니다",
//     10: "그렇다"
    
//   };

//   // 설문 데이터를 가져오는 함수
//   useEffect(() => {
//     const fetchSurveys = async () => {
//       try {
//         // `nt-surveys` 엔드포인트에서 데이터를 가져옵니다.
//         const response = await axiosInstance.get("/nt-surveys");
//         const surveys = response.data;

//         // 예상 응답을 사용하여 초기 응답 설정
//         const initialResponses = {};
//         surveys.forEach((survey) => {
//           initialResponses[survey.ntSurveyId] = expectedResponses[survey.ntSurveyId] || "";
//         });

//         setSurveyData(surveys);
//         setResponses(initialResponses);
//       } catch (err) {
//         console.error("설문 데이터 로드 실패:", err);
//       }
//     };

//     const fetchNickname = async () => {
//       try {
//         const response = await axiosInstance.get("/members/nickname");
//         setNickname(response.data.nickname); // 서버에서 받은 닉네임을 상태로 설정
//       } catch (err) {
//         console.error("닉네임 로드 실패:", err);
//         setNickname("알 수 없음"); // 실패 시 기본값 설정
//       }
//     };

//     fetchSurveys();
//     fetchNickname();
//   }, []);

//   // 응답을 상태에 저장하는 함수
//   const handleResponseChange = (ntSurveyId, value) => {
//     setResponses((prevResponses) => ({
//       ...prevResponses,
//       [ntSurveyId]: value,
//     }));
//   };

//   // 모든 질문에 응답했는지 확인하는 함수
//   const isFormValid = () => {
//     return surveyData.every((survey) => responses[survey.ntSurveyId]);
//   };

//   // 응답을 형식에 맞게 변환하는 함수
//   const formatResponsesForBackend = () => {
//     return surveyData.map((survey) => ({
//       ntSurveyId: survey.ntSurveyId,
//       perSurveyId: null,
//       responseType: "NTOPIA",
//       response: responses[survey.ntSurveyId] || "",
//     }));
//   };

//   // 다음 페이지로 이동하면서 응답을 로컬스토리지에 저장
//   const handleNextPage = () => {
//     if (!isFormValid()) {
//       alert("모든 질문에 응답해 주세요.");
//       return;
//     }

//     // 응답을 형식에 맞게 변환하여 저장
//     const formattedResponses = formatResponsesForBackend();

//     // 로컬 스토리지에 응답을 저장
//     localStorage.setItem("surveyResponses", JSON.stringify(formattedResponses));

//     // 다음 페이지로 이동
//     router.push("/persurveys");
//   };

//   return (
//     <div className="survey-page flex flex-col items-center justify-center px-8 py-24 max-w-6xl mx-auto">
//       {/* 로고 및 제목 */}
//       <div className="mb-12 text-center max-w-3xl">
//         <Image
//           src="/images/logo2.png"
//           alt="NEETopia 로고"
//           width={420}
//           height={156}
//           priority
//           className="mx-auto"
//         />

//         {/* 작성자 표시 */}
//         <p className="max-w-xs mx-auto text-xl text-gray-500 mt-12 px-4 py-4 rounded-full border border-gray-300">
//           작성자: {nickname}
//         </p>


//         <h1 className="text-3xl font-bold mt-12">STEP 01. 나의 NEET 유형 찾기</h1>
//         <p className="bg-gray-100 p-12 w-full max-auto rounded-lg mt-12 text-xl leading-loose">
//           STEP 01 NEET 유형 찾기는 기존의 니트 유형 분석에 따른 설문으로<br />
//           아래 문항의 결과에 따라 NEETopia에서 부여받을 수 있는 부서를 추천받게 됩니다.<br />
//           부서에 따라 매일 주어지는 미션 및 루틴이 다르게 나오므로 신중하게 선택해 주세요!
//         </p>
//       </div>

//       {/* 설문 질문들 */}
//       <form className="w-full max-w-3xl mx-auto">
//         {surveyData.map((survey) => (
//           <div key={survey.ntSurveyId} className="survey-question mb-6 text-left ">
//             <p className="text-xl font-medium leading-loose">{survey.question}</p>
//             <div className="flex justify-start mt-4 space-x-8">
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name={`response-${survey.ntSurveyId}`}
//                   value="그렇다"
//                   checked={responses[survey.ntSurveyId] === "그렇다"}
//                   onChange={() => handleResponseChange(survey.ntSurveyId, "그렇다")}
//                   className="w-5 h-5 border-2 border-gray-500 rounded-md"
//                 />
//                 <span className="text-lg">그렇다</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name={`response-${survey.ntSurveyId}`}
//                   value="보통"
//                   checked={responses[survey.ntSurveyId] === "보통"}
//                   onChange={() => handleResponseChange(survey.ntSurveyId, "보통")}
//                   className="w-5 h-5 border-2 border-gray-500 rounded-md"
//                 />
//                 <span className="text-lg">보통</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name={`response-${survey.ntSurveyId}`}
//                   value="아니다"
//                   checked={responses[survey.ntSurveyId] === "아니다"}
//                   onChange={() => handleResponseChange(survey.ntSurveyId, "아니다")}
//                   className="w-5 h-5 border-2 border-gray-500 rounded-md"
//                 />
//                 <span className="text-lg">아니다</span>
//               </label>
//             </div>
//           </div>
//         ))}
//       </form>

//       <button
//         onClick={handleNextPage}
//         className="bg-white text-blue-600 py-2 px-6 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center space-x-2 mt-12
//         text-xl"
//       >
//         <span>다음 페이지</span>
//         <span>&gt;</span>
//       </button>

//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance"; // axiosInstance import

export default function NtSurveyPage() {
  const [surveyData, setSurveyData] = useState([]);
  const [responses, setResponses] = useState({});
  const [nickname, setNickname] = useState("");
  const router = useRouter();

  // 빈값으로 초기하고 싶을 경우 여기 부분 주석 처리
  const expectedResponses = {
    1: "그렇다",
    2: "보통",
    3: "그렇다",
    4: "그렇다",
    5: "아니다",
    6: "그렇다",
    7: "보통",
    8: "보통",
    9: "아니다",
    10: "그렇다",
  };

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await axiosInstance.get("/nt-surveys");
        const surveys = response.data;

        const initialResponses = {};
        surveys.forEach((survey) => {
          initialResponses[survey.ntSurveyId] = expectedResponses[survey.ntSurveyId] || "";
        });

        setSurveyData(surveys);
        setResponses(initialResponses);
      } catch (err) {
        console.error("설문 데이터 로드 실패:", err);
      }
    };

    // 모든응답 빈값으로 설정된 버전
    // const fetchSurveys = async () => {
    //   try {
    //     const response = await axiosInstance.get("/nt-surveys");
    //     const surveys = response.data;
    
    //     // 초기 응답을 빈 문자열로 설정
    //     const initialResponses = {};
    //     surveys.forEach((survey) => {
    //       initialResponses[survey.ntSurveyId] = ""; // 모든 응답의 초기값을 빈 문자열로 설정
    //     });
    
    //     setSurveyData(surveys);
    //     setResponses(initialResponses);
    //   } catch (err) {
    //     console.error("설문 데이터 로드 실패:", err);
    //   }
    // };

    const fetchNickname = async () => {
      try {
        const response = await axiosInstance.get("/members/nickname");
        setNickname(response.data.nickname);
      } catch (err) {
        console.error("닉네임 로드 실패:", err);
        setNickname("알 수 없음");
      }
    };

    fetchSurveys();
    fetchNickname();
  }, []);

  const handleResponseChange = (ntSurveyId, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [ntSurveyId]: value,
    }));
  };

  const isFormValid = () => {
    return surveyData.every((survey) => responses[survey.ntSurveyId]);
  };

  const formatResponsesForBackend = () => {
    return surveyData.map((survey) => ({
      ntSurveyId: survey.ntSurveyId,
      perSurveyId: null,
      responseType: "NTOPIA",
      response: responses[survey.ntSurveyId] || "",
    }));
  };

  const handleNextPage = () => {
    if (!isFormValid()) {
      alert("모든 질문에 응답해 주세요.");
      return;
    }

    const formattedResponses = formatResponsesForBackend();

    localStorage.setItem("surveyResponses", JSON.stringify(formattedResponses));

    router.push("/persurveys");
  };

  return (
    <div className="survey-page flex flex-col items-center justify-center px-4 sm:px-8 py-16 sm:py-24 max-w-6xl mx-auto">
      {/* 로고 및 제목 */}
      <div className="mb-8 sm:mb-12 text-center max-w-3xl">
        <Image
          src="/images/logo2.png"
          alt="NEETopia 로고"
          width={300}
          height={112}
          priority
          className="mx-auto w-3/4 sm:w-full"
        />

        {/* 작성자 표시 */}
        <p className="max-w-xs mx-auto text-base sm:text-xl text-gray-500 mt-6 sm:mt-12 px-4 py-4 rounded-full border border-gray-300">
          작성자: {nickname}
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold mt-6 sm:mt-12">
          STEP 01. 나의 NEET 유형 찾기
        </h1>
        <p className="bg-gray-100 p-8 sm:p-12 w-full max-auto rounded-lg mt-6 sm:mt-12 text-base sm:text-xl leading-loose">
          STEP 01 NEET 유형 찾기는 기존의 니트 유형 분석에 따른 설문으로<br />
          아래 문항의 결과에 따라 NEETopia에서 부여받을 수 있는 부서를 추천받게 됩니다.<br />
          부서에 따라 매일 주어지는 미션 및 루틴이 다르게 나오므로 신중하게 선택해 주세요!
        </p>
      </div>

      {/* 설문 질문들 */}
      <form className="w-full max-w-3xl mx-auto">
        {surveyData.map((survey) => (
          <div key={survey.ntSurveyId} className="survey-question mb-4 sm:mb-6 text-left">
            <p className="text-base sm:text-xl font-medium leading-loose">
              {survey.question}
            </p>
            <div className="flex flex-col sm:flex-row justify-start mt-4 sm:mt-4 space-y-4 sm:space-y-0 sm:space-x-8">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`response-${survey.ntSurveyId}`}
                  value="그렇다"
                  checked={responses[survey.ntSurveyId] === "그렇다"}
                  onChange={() => handleResponseChange(survey.ntSurveyId, "그렇다")}
                  className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-gray-500 rounded-md"
                />
                <span className="text-sm sm:text-lg">그렇다</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`response-${survey.ntSurveyId}`}
                  value="보통"
                  checked={responses[survey.ntSurveyId] === "보통"}
                  onChange={() => handleResponseChange(survey.ntSurveyId, "보통")}
                  className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-gray-500 rounded-md"
                />
                <span className="text-sm sm:text-lg">보통</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`response-${survey.ntSurveyId}`}
                  value="아니다"
                  checked={responses[survey.ntSurveyId] === "아니다"}
                  onChange={() => handleResponseChange(survey.ntSurveyId, "아니다")}
                  className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-gray-500 rounded-md"
                />
                <span className="text-sm sm:text-lg">아니다</span>
              </label>
            </div>
          </div>
        ))}
      </form>

      <button
        onClick={handleNextPage}
        className="bg-white text-blue-600 py-2 px-6 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center space-x-2 mt-8 sm:mt-12 text-base sm:text-xl"
      >
        <span>다음 페이지</span>
        <span>&gt;</span>
      </button>
    </div>
  );
}
