// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import axiosInstance from "@/utils/axiosInstance";

// export default function PersonalitySurveyPage() {
//   const [surveyData, setSurveyData] = useState([]);
//   const [responses, setResponses] = useState({});
//   const [nickname, setNickname] = useState("");
//   const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
//   const router = useRouter();

//   // 예상 응답을 정의하는 객체
//   const expectedResponses = {
//     1: "네",   // perSurveyId가 1인 질문의 예상 응답은 "네"
//     2: "아니요", // perSurveyId가 2인 질문의 예상 응답은 "아니요"
//     3: "네",   // perSurveyId가 3인 질문의 예상 응답은 "네"
//     4: "아니요", // perSurveyId가 4인 질문의 예상 응답은 "아니요"
//     5: "아니요",   // 필요한 예상 응답을 추가
//     6: "아니요",
//     7: "네",
//     8: "아니요",
//     9: "아니요",
//     10: "네"
//   };

//   useEffect(() => {
//     const fetchSurveys = async () => {
//       try {
//         const response = await axiosInstance.get("/per-surveys");
//         const surveys = response.data;

//         // 예상 응답을 사용하여 초기 응답 설정
//         const initialResponses = {};
//         surveys.forEach((survey) => {
//           initialResponses[survey.perSurveyId] = expectedResponses[survey.perSurveyId] || "";
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
//         setNickname(response.data.nickname);
//       } catch (err) {
//         console.error("닉네임 로드 실패:", err);
//         setNickname("알 수 없음");
//       }
//     };

//     fetchSurveys();
//     fetchNickname();
//   }, []);

//   const handleResponseChange = (perSurveyId, value) => {
//     setResponses((prevResponses) => ({
//       ...prevResponses,
//       [perSurveyId]: value,
//     }));
//   };

//   const isFormValid = () => {
//     return surveyData.every((survey) => responses[survey.perSurveyId]);
//   };

//   const formatResponsesForBackend = () => {
//     return surveyData.map((survey) => ({
//       ntSurveyId: null,
//       perSurveyId: survey.perSurveyId,
//       responseType: "PERSONALITY",
//       response: responses[survey.perSurveyId] || "",
//     }));
//   };

//   const handleSurveySubmit = async () => {
//     if (!isFormValid()) {
//       alert("모든 질문에 응답해 주세요.");
//       return;
//     }

//     setIsLoading(true); // 로딩 시작

//     const formattedResponses = formatResponsesForBackend();
//     const previousResponses = JSON.parse(localStorage.getItem("surveyResponses")) || [];
//     const allResponses = [...previousResponses, ...formattedResponses];

//     try {
//       await axiosInstance.post("/survey-responses", allResponses);
//       const aiResponse = await axiosInstance.post("/survey-neet-recommendation/recommend");

//       localStorage.setItem("neetRecommendation", JSON.stringify(aiResponse.data));
//       router.push("/neet");
//     } catch (err) {
//       console.error("응답 전송 실패 또는 AI 추천 실패:", err);
//     } finally {
//       setIsLoading(false); // 로딩 종료
//     }
//   };

//   return (
//     <div className="survey-page flex flex-col items-center justify-center px-8 py-24 max-w-6xl mx-auto">
//       <div className="mb-12 text-center max-w-3xl">
//         <Image
//           src="/images/logo2.png"
//           alt="NEETopia 로고"
//           width={420}
//           height={156}
//           priority
//           className="mx-auto"
//         />
//         <p className="max-w-xs mx-auto text-xl text-gray-500 mt-12 px-4 py-4 rounded-full border border-gray-300">
//           작성자: {nickname}
//         </p>
//         <h1 className="text-3xl font-bold mt-12">STEP 02. 나의 관심도 찾기</h1>
//         <p className="bg-gray-100 p-12 w-full max-auto rounded-lg mt-12 text-xl leading-loose">
//           STEP 02 나의 관심도 찾기 설문조사는 6가지 직업 성격 유형을 바탕으로 한 설문으로<br />
//           아래 문항의 결과와 NEETopia에서 활동한 기록을 AI가 수집하여 이를 토대로<br />
//           나에게 맞는 활동 및 직업 추천을 받게 되므로 신중하게 선택해 주세요!
//         </p>
//       </div>

//       <form className="w-full max-w-3xl mx-auto">
//         {surveyData.map((survey) => (
//           <div key={survey.perSurveyId} className="survey-question mb-6 text-left">
//             <p className="text-xl font-medium leading-loose">{survey.question}</p>
//             <div className="flex justify-start mt-4 space-x-8">
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name={`response-${survey.perSurveyId}`}
//                   value="네"
//                   checked={responses[survey.perSurveyId] === "네"}
//                   onChange={() => handleResponseChange(survey.perSurveyId, "네")}
//                   className="w-5 h-5 border-2 border-gray-500 rounded-md"
//                 />
//                 <span className="text-lg">네</span>
//               </label>
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name={`response-${survey.perSurveyId}`}
//                   value="아니요"
//                   checked={responses[survey.perSurveyId] === "아니요"}
//                   onChange={() => handleResponseChange(survey.perSurveyId, "아니요")}
//                   className="w-5 h-5 border-2 border-gray-500 rounded-md"
//                 />
//                 <span className="text-lg">아니요</span>
//               </label>
//             </div>
//           </div>
//         ))}
//       </form>

//       {/* 로딩 오버레이 */}
//       {isLoading && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-12 rounded-lg shadow-lg flex flex-col items-center">
//             <Image
//               src="/images/loading.svg"
//               alt="로딩 중"
//               width={200}
//               height={200}
//             />
//             <p className="text-gray-700 mt-4 text-xl">설문 분석 중 입니다. <br/>잠시만 기다려 주세요...</p>
//           </div>
//         </div>
//       )}
//       {!isLoading && (
//               <button
//                 onClick={handleSurveySubmit}
//                 className="bg-white text-blue-600 py-2 px-6 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center space-x-2 mt-12 text-xl"
//               >
//                 제출
//               </button>
//             )}

//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";

export default function PersonalitySurveyPage() {
  const [surveyData, setSurveyData] = useState([]);
  const [responses, setResponses] = useState({});
  const [nickname, setNickname] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가
  const router = useRouter();

  const expectedResponses = {
    1: "네",
    2: "아니요",
    3: "네",
    4: "아니요",
    5: "아니요",
    6: "아니요",
    7: "네",
    8: "아니요",
    9: "아니요",
    10: "네",
  };

  useEffect(() => {
    const fetchSurveys = async () => {
      try {
        const response = await axiosInstance.get("/per-surveys");
        const surveys = response.data;

        const initialResponses = {};
        surveys.forEach((survey) => {
          initialResponses[survey.perSurveyId] = expectedResponses[survey.perSurveyId] || "";
        });

        setSurveyData(surveys);
        setResponses(initialResponses);
      } catch (err) {
        console.error("설문 데이터 로드 실패:", err);
      }
    };

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

  const handleResponseChange = (perSurveyId, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [perSurveyId]: value,
    }));
  };

  const isFormValid = () => {
    return surveyData.every((survey) => responses[survey.perSurveyId]);
  };

  const formatResponsesForBackend = () => {
    return surveyData.map((survey) => ({
      ntSurveyId: null,
      perSurveyId: survey.perSurveyId,
      responseType: "PERSONALITY",
      response: responses[survey.perSurveyId] || "",
    }));
  };

  const handleSurveySubmit = async () => {
    if (!isFormValid()) {
      alert("모든 질문에 응답해 주세요.");
      return;
    }

    setIsLoading(true); // 로딩 시작

    const formattedResponses = formatResponsesForBackend();
    const previousResponses = JSON.parse(localStorage.getItem("surveyResponses")) || [];
    const allResponses = [...previousResponses, ...formattedResponses];

    try {
      await axiosInstance.post("/survey-responses", allResponses);
      const aiResponse = await axiosInstance.post("/survey-neet-recommendation/recommend");

      localStorage.setItem("neetRecommendation", JSON.stringify(aiResponse.data));
      router.push("/neet");
    } catch (err) {
      console.error("응답 전송 실패 또는 AI 추천 실패:", err);
    } finally {
      setIsLoading(false); // 로딩 종료
    }
  };

  return (
    <div className="survey-page flex flex-col items-center justify-center px-4 sm:px-8 py-16 sm:py-24 max-w-6xl mx-auto">
      <div className="mb-8 sm:mb-12 text-center max-w-3xl">
        <Image
          src="/images/logo2.png"
          alt="NEETopia 로고"
          width={300}
          height={112}
          priority
          className="mx-auto w-3/4 sm:w-full"
        />
        <p className="max-w-xs mx-auto text-base sm:text-xl text-gray-500 mt-6 sm:mt-12 px-4 py-4 rounded-full border border-gray-300">
          작성자: {nickname}
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold mt-6 sm:mt-12">STEP 02. 나의 관심도 찾기</h1>
        <p className="bg-gray-100 p-8 sm:p-12 w-full max-auto rounded-lg mt-6 sm:mt-12 text-base sm:text-xl leading-loose">
          STEP 02 나의 관심도 찾기 설문조사는 6가지 직업 성격 유형을 바탕으로 한 설문으로<br />
          아래 문항의 결과와 NEETopia에서 활동한 기록을 AI가 수집하여 이를 토대로<br />
          나에게 맞는 활동 및 직업 추천을 받게 되므로 신중하게 선택해 주세요!
        </p>
      </div>

      <form className="w-full max-w-3xl mx-auto">
        {surveyData.map((survey) => (
          <div key={survey.perSurveyId} className="survey-question mb-4 sm:mb-6 text-left">
            <p className="text-base sm:text-xl font-medium leading-loose">{survey.question}</p>
            <div className="flex flex-col sm:flex-row justify-start mt-4 sm:mt-4 space-y-4 sm:space-y-0 sm:space-x-8">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`response-${survey.perSurveyId}`}
                  value="네"
                  checked={responses[survey.perSurveyId] === "네"}
                  onChange={() => handleResponseChange(survey.perSurveyId, "네")}
                  className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-gray-500 rounded-md"
                />
                <span className="text-sm sm:text-lg">네</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`response-${survey.perSurveyId}`}
                  value="아니요"
                  checked={responses[survey.perSurveyId] === "아니요"}
                  onChange={() => handleResponseChange(survey.perSurveyId, "아니요")}
                  className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-gray-500 rounded-md"
                />
                <span className="text-sm sm:text-lg">아니요</span>
              </label>
            </div>
          </div>
        ))}
      </form>

      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg flex flex-col items-center">
            <Image
              src="/images/loading.svg"
              alt="로딩 중"
              width={150}
              height={150}
              className="w-1/2 sm:w-auto"
            />
            <p className="text-gray-700 mt-4 text-base sm:text-xl">설문 분석 중 입니다. <br />잠시만 기다려 주세요...</p>
          </div>
        </div>
      )}

      {!isLoading && (
        <button
          onClick={handleSurveySubmit}
          className="bg-white text-blue-600 py-2 px-6 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center space-x-2 mt-8 sm:mt-12 text-base sm:text-xl"
        >
          제출
        </button>
      )}
    </div>
  );
}
