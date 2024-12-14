// "use client";

// import React from "react";
// import Image from "next/image";

// export default function NeetopiaIntroduction() {
//   return (
//     <div className="min-h-screen text-center p-20">
//       <section className="py-24">
//       <h1 className="text-4xl font-bold p-6">
//         <span className="text-blue-600">N</span>ot in <span className="text-blue-600">E</span>ducation, 
//         <span className="text-blue-600">E</span>mployment or <span className="text-blue-600">T</span>raining
//       </h1>
//         <p className="text-xl">
//         현재 일하지 않고, 교육 받지 않고, 직업휸련 또한 받지 않고 있는 일시적인 상태
//         </p>
//       </section>

//       {/* 프로젝트 기획 의도 섹션 */}
//       <section className="py-24">
//       <h1 className="text-4xl font-bold mb-8" style={{ color: "#77eb84" }}>
//         프로젝트 기획 의도
//       </h1>

//         <div className="mb-8">
//         <Image
//           src="/images/logo2.png"
//           alt="NEETopia 로고"
//           width={572}
//           height={212}
//           priority
//           className="mx-auto"
//         />
//         <p className="text-sm text-gray-300 my-12">[프로젝트 플랫폼 서비스 로고]</p>
//       </div>
//         <p className="text-blue-700 max-w-2xl mx-auto mb-12 text-xl">
//           청년 니트(NEET)의 자기 효능감과 자존감을 높여 <br/>
//           다시 사회와 연결될 수 있도록 돕는 메타버스 기반 서비스
//           <br />
//         </p>
//         <p className="leading-relaxed text-xl">
//           니토피아는 '니트들을 위한 이상적인' 가상 사회로, 청년 니트들이 사회의 일원으로 소속감을 느끼며 자신만의<br/>
//           목표를 찾아갈 수 있는 메타버스 플랫폼으로 익명성과 안정감을 바탕으로 각 부서마다의 다양한 미션을 수행<br/>
//           하며 자기 효능감과 자존감을 쌓아, 진정한 나를 발견하고 현실로 나아갈 힘을 제공하고자 합니다.
//         </p>
//       </section>

//       {/* 핵심 콘텐츠 섹션 */}
//       <section className="py-24 max-w-6xl mx-auto">
//         {/* 섹션 제목 */}
//         <h2 className="text-4xl font-bold mb-4" style={{ color: "#77eb84" }}>핵심 콘텐츠</h2>
//         <p className="text-lg mb-8 text-blue-600">'NEET'들만 모인 사회에서 나를 찾아가는 일상!</p>

//         {/* 콘텐츠 영역 */}
//         <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {/* 첫 번째 콘텐츠 */}
//           <div className="p-4 text-right">
//             <h3 className="text-lg font-bold text-gray-800 mb-2 relative inline-block">
//               <span className="bg-yellow-100 px-1">
//                 'NEET'들만 모인 이끌어주기 사회
//               </span>
//             </h3>
//             <p className="text-gray-600 text-base">
//               니토피아에서 서로 소속감을 느끼며 새로운<br />
//               경험을 시작하기
//             </p>
//           </div>

//           {/* 두 번째 콘텐츠 */}
//           <div className="p-4 text-left">
//             <h3 className="text-lg font-bold text-gray-800 mb-2 relative inline-block">
//               <span className="bg-yellow-100 px-1">
//               메타버스 공간에서 힘이 되는 동료 찾기
//               </span>
//             </h3>
//             <p className="text-gray-600 text-base">
//             비슷한 경험을 공유하며 힘이 되는<br/>
//             동료 만나기
//             </p>
//           </div>

//           {/* 세 번째 콘텐츠 */}
//           <div className="p-4 text-right">
//             <h3 className="text-lg font-bold text-gray-800 mb-2 relative inline-block">
//               <span className="bg-yellow-100 px-1">
//                 니토피아 사회에 소속되어 개인 미션 수행
//               </span>
//             </h3>
//             <p className="text-gray-600 text-base">
//             각자에게 주어진 미션을 수행하며 루틴을<br/>
//             형성해 자기만의 성장을 이루기
//             </p>
//           </div>

//           {/* 네 번째 콘텐츠 */}
//           <div className="p-4 text-left">
//             <h3 className="text-lg font-bold text-gray-800 mb-2 relative inline-block">
//               <span className="bg-yellow-100 px-1">
//               모임가 미션을 통해 내일에 한걸음 더
//               </span>
//             </h3>
//             <p className="text-gray-600 text-base">
//             공동의 목표를 통해 성취감을 얻고,<br/>
//             더 나은 내일로 나아가기
//             </p>
//           </div>

//           {/* 다섯 번째 콘텐츠 */}
//           <div className="p-4 text-right">
//             <h3 className="text-lg font-bold text-gray-800 mb-2 relative inline-block">
//               <span className="bg-yellow-100 px-1">
//               시도의 허들을 낮춰 다양한 경험 도전
//               </span>
//             </h3>
//             <p className="text-gray-600 text-base">
//             부담 없이 새로운 활동에 도전해<br/>
//             작은 성취감을 쌓아가기
//             </p>
//           </div>

//           {/* 여섯 번째 콘텐츠 */}
//           <div className="p-4 text-left">
//             <h3 className="text-lg font-bold text-gray-800 mb-2 relative inline-block">
//               <span className="bg-yellow-100 px-1">
//                 니토피아에서 활동을 쌓아가며 진정한 나를 찾기
//               </span>
//             </h3>
//             <p className="text-gray-600 text-base">
//             니토피아에서의 경험을 통해 자기 발견과<br/>
//             성장의 여정 만들어 가기
//             </p>
//           </div>
//         </div>
//       </section>


//       {/* 직업 및 직급 안내 섹션 */}
//       <section className="py-24 max-w-6xl mx-auto">
//         {/* 섹션 제목 */}
//         <h2 className="text-4xl font-bold mb-8" style={{ color: "#77eb84" }}>직업 및 직급 안내</h2>
//         <p className="text-lg mb-8 text-blue-600">NEETopia에만 있는 특색 있는 5가지 직업!</p>

//         {/* 부서 이미지 영역 */}
//         <div className="flex justify-center space-x-6 my-8">
//           {[
//             { name: "부서1", image: "/images/department_01.png" },
//             { name: "부서2", image: "/images/department_02.png" },
//             { name: "부서3", image: "/images/department_03.png" },
//             { name: "부서4", image: "/images/department_04.png" },
//             { name: "부서5", image: "/images/department_05.png" },
//           ].map((dept, index) => (
//             <div
//               key={index}
//               className="bg-yellow-100 rounded-lg shadow-md w-52 flex flex-col items-center"
//             >
//               {/* 부서 이미지 */}
//               <img
//                 src={dept.image}
//                 alt={dept.name}
//                 className="mx-auto object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* 직급 안내 테이블 */}
//         <table className="w-full  mx-auto text-center mt-12 border-collapse border border-gray-200">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="border border-gray-300 px-4 py-2" colSpan="2">
//                 Level & Job Title
//               </th>
//               <th className="border border-gray-300 px-4 py-2" colSpan="6">
//                 exp (자정 12시 기준 직급 업데이트)
//               </th>
//             </tr>
//             <tr>
//               <th className="border border-gray-300 px-4 py-2">Level ID</th>
//               <th className="border border-gray-300 px-4 py-2">Job Title</th>
//               <th className="border border-gray-300 px-4 py-2">Position</th>
//               <th className="border border-gray-300 px-4 py-2">데일리 미션</th>
//               <th className="border border-gray-300 px-4 py-2">소모임 개설</th>
//               <th className="border border-gray-300 px-4 py-2">소모임 참여</th>
//               <th className="border border-gray-300 px-4 py-2">익명 게시판 글쓰기</th>
//               <th className="border border-gray-300 px-4 py-2">익명 게시판 댓글 쓰기</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[
//               {
//                 level: 1,
//                 title: "Part-time worker",
//                 position: "아르바이트",
//                 dailyMission: "X",
//                 smallGroupCreation: "X",
//                 smallGroupParticipation: "X",
//                 anonymousPost: "X",
//                 anonymousComment: "X",
//               },
//               {
//                 level: 2,
//                 title: "Specialist",
//                 position: "인턴",
//                 dailyMission: "30회",
//                 smallGroupCreation: "X",
//                 smallGroupParticipation: "X",
//                 anonymousPost: "X",
//                 anonymousComment: "X",
//               },
//               {
//                 level: 3,
//                 title: "Manager",
//                 position: "대리",
//                 dailyMission: "40회",
//                 smallGroupCreation: "5회",
//                 smallGroupParticipation: "5회",
//                 anonymousPost: "5회",
//                 anonymousComment: "5회",
//               },
//               {
//                 level: 4,
//                 title: "Senior Manager",
//                 position: "차장",
//                 dailyMission: "60회",
//                 smallGroupCreation: "10회",
//                 smallGroupParticipation: "15회",
//                 anonymousPost: "10회",
//                 anonymousComment: "15회",
//               },
//               {
//                 level: 5,
//                 title: "Director",
//                 position: "본부장",
//                 dailyMission: "90회",
//                 smallGroupCreation: "20회",
//                 smallGroupParticipation: "20회",
//                 anonymousPost: "15회",
//                 anonymousComment: "20회",
//               },
//               {
//                 level: 6,
//                 title: "Director",
//                 position: "이사",
//                 dailyMission: "100회",
//                 smallGroupCreation: "25회",
//                 smallGroupParticipation: "25회",
//                 anonymousPost: "15회",
//                 anonymousComment: "25회",
//               },
//             ].map((row, index) => (
//               <tr key={index}>
//                 <td className="border border-gray-300 px-4 py-2">{row.level}</td>
//                 <td className="border border-gray-300 px-4 py-2">{row.title}</td>
//                 <td className="border border-gray-300 px-4 py-2">{row.position}</td>
//                 <td className="border border-gray-300 px-4 py-2">{row.dailyMission}</td>
//                 <td className="border border-gray-300 px-4 py-2">{row.smallGroupCreation}</td>
//                 <td className="border border-gray-300 px-4 py-2">{row.smallGroupParticipation}</td>
//                 <td className="border border-gray-300 px-4 py-2">{row.anonymousPost}</td>
//                 <td className="border border-gray-300 px-4 py-2">{row.anonymousComment}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>


//       {/* 팀원 소개 섹션 */}
//       <section className="py-24 max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-purple-600 mb-8">We are byteMe!</h2>
//         <p className="text-orange-400  text-lg">NEETopia를 만든 팀원들</p>
//         <p className="mb-8 text-base">2024.10.01 ~ 2024.12.19</p>
//         <p className="mb-20 leading-loose text-lg">메타버스 아카데미 3기 최종 융합프로젝트로 만난 우리들!<br/>
//         2달 동안 고생한 프로젝트에 대한 감상을 짧게 남깁니다.
//         </p>
        
//         <div className="flex flex-col space-y-8">
//           {/* 첫 번째 말풍선 (왼쪽 정렬) */}
//           <div className="relative flex justify-start">
//             <div className="bg-blue-50 p-8 rounded-lg shadow-md text-left w-[55%] relative">
//               <p className="text-gray-800 font-semibold mb-2">
//                 "프로젝트를 통해 많은 것을 배울 수 있었고, 부족한 저와 함께 2달간 힘써준 팀원들에게 감사합니다!"
//               </p>
//               <p className="text-gray-600 text-sm">- 박현선(기획)</p>
//               {/* 하단 왼쪽 꼭지 */}
//               <div className="absolute w-0 h-0 border-t-[20px] border-t-blue-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent bottom-[-20px] left-8"></div>
//             </div>
//           </div>

//           {/* 두 번째 말풍선 (오른쪽 정렬) */}
//           <div className="relative flex justify-end">
//             <div className="bg-yellow-50 p-8 rounded-lg shadow-md text-left w-[55%] relative">
//               <p className="text-gray-800 font-semibold mb-2">
//                 "행복은 멀리있지 않다는 것을 깨달았습니다 ^^"
//               </p>
//               <p className="text-gray-600 text-sm">- 김종민(AI)</p>
//               {/* 하단 오른쪽 꼭지 */}
//               <div className="absolute w-0 h-0 border-t-[20px] border-t-yellow-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent bottom-[-20px] right-8"></div>

//             </div>
//           </div>

//           {/* 세 번째 말풍선 (왼쪽 정렬) */}
//           <div className="relative flex justify-start">
//             <div className="bg-green-50 p-8 rounded-lg shadow-md text-left w-[55%] relative">
//               <p className="text-gray-800 font-semibold mb-2">
//                 "각자의 자리에서 최선을 다해주고 있는 우리 팀원들이 자랑스럽습니다!! 팀원들의 도움으로 새로운 기술을 익히고 적용해볼 수 있어 좋았고 좋은 팀원들과 함께해서 행복했습니다"
//               </p>
//               <p className="text-gray-600 text-sm">- 이정철(AI)</p>
//               {/* 하단 왼쪽 꼭지 */}
//               <div className="absolute w-0 h-0 border-t-[20px] border-t-green-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent bottom-[-20px] left-8"></div>
//             </div>
//           </div>

//           {/* 네 번째 말풍선 (오른쪽 정렬) */}
//           <div className="relative flex justify-end">
//             <div className="bg-red-50 p-8 rounded-lg shadow-md text-left w-[55%] relative">
//               <p className="text-gray-800 font-semibold mb-2">
//                 "프로젝트를 진행하며 팀원들과 함께 성장할 수 있어서 뜻깊은 시간이었습니다."
//               </p>
//               <p className="text-gray-600 text-sm">- 정광윤(Unity)</p>
//               {/* 하단 오른쪽 꼭지 */}
//               <div className="absolute w-0 h-0 border-t-[20px] border-t-red-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent bottom-[-20px] right-8"></div>
//             </div>
//           </div>

//           {/* 다섯 번째 말풍선 (왼쪽 정렬) */}
//           <div className="relative flex justify-start">
//             <div className="bg-violet-50 p-8 rounded-lg shadow-md text-left w-[55%] relative">
//               <p className="text-gray-800 font-semibold mb-2">
//                 "다양한 분야의 협업을 통해 많을 것을 배우고 성장할 수 있었던 프로젝트였습니다. 우리 팀원들 앞으로도 화이팅!"
//               </p>
//               <p className="text-gray-600 text-sm">- 유보라(Unity)</p>
//               {/* 하단 왼쪽 꼭지 */}
//               <div className="absolute w-0 h-0 border-t-[20px] border-t-violet-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent bottom-[-20px] left-8"></div>
//             </div>
//           </div>

//           {/* 여섯 번째 말풍선 (오른쪽 정렬) */}
//           <div className="relative flex justify-end">
//             <div className="bg-orange-50 p-8 rounded-lg shadow-md text-left w-[55%] relative">
//               <p className="text-gray-800 font-semibold mb-2">
//                 "프로젝트로 많은 것을 배울 수 있었고, 새로운 기술들도 적용해 볼 수 있어서 좋았습니다."
//               </p>
//               <p className="text-gray-600 text-sm">- 임혁진(Back-End)</p>
//               {/* 하단 오른쪽 꼭지 */}
//               <div className="absolute w-0 h-0 border-t-[20px] border-t-orange-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent bottom-[-20px] right-8"></div>

//             </div>
//           </div>

//           {/* 일곱 번째 말풍선 (왼쪽 정렬) */}
//           <div className="relative flex justify-start">
//             <div className="bg-pink-50 p-8 rounded-lg shadow-md text-left w-[55%] relative">
//               <p className="text-gray-800 font-semibold mb-2">
//                 "융합 프로젝트를 하면서 협업 플로우를 조금 더 배워가는 단계였으며, 소통의 중요성을 또 한 번 느끼게 되었습니다. 두 달 동안 함께 해준 팀원들에게 감사합니다."
//               </p>
//               <p className="text-gray-600 text-sm">- 박진희(Back-End)</p>
//               {/* 하단 왼쪽 꼭지 */}
//               <div className="absolute w-0 h-0 border-t-[20px] border-t-pink-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent bottom-[-20px] left-8"></div>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* 감사 인사 섹션 */}
//       <section className="my-20">
//         <h2 className="text-6xl font-semibold text-yellow-400 mb-6">감사합니다.</h2>
//         <h2 className="text-7xl font-semibold text-yellow-400">Thank you!</h2>
//       </section>
//     </div>
//   );
// }


"use client";

import React from "react";
import Image from "next/image";

export default function NeetopiaIntroduction() {
  return (
    <div className="min-h-screen text-center p-6 md:p-20">
      <section className="py-12 md:py-24">
        <h1 className="text-2xl md:text-4xl font-bold p-6">
          <span className="text-blue-600">N</span>ot in <span className="text-blue-600">E</span>ducation, 
          <span className="text-blue-600">E</span>mployment or <span className="text-blue-600">T</span>raining
        </h1>
        <p className="text-lg md:text-xl">
          현재 일하지 않고, 교육 받지 않고, 직업훈련 또한 받지 않고 있는 일시적인 상태
        </p>
      </section>

      {/* 프로젝트 기획 의도 섹션 */}
      <section className="py-12 md:py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8" style={{ color: "#77eb84" }}>
          프로젝트 기획 의도
        </h1>

        <div className="mb-6 md:mb-8">
          <Image
            src="/images/logo2.png"
            alt="NEETopia 로고"
            width={300}
            height={112}
            priority
            className="mx-auto md:w-[572px]"
          />
          <p className="text-xs md:text-sm text-gray-300 my-4 md:my-6">[프로젝트 플랫폼 서비스 로고]</p>
        </div>
        <p className="text-sm md:text-xl text-blue-700 max-w-md md:max-w-2xl mx-auto mb-6 md:mb-12">
          청년 니트(NEET)의 자기 효능감과 자존감을 높여 <br />
          다시 사회와 연결될 수 있도록 돕는 메타버스 기반 서비스
        </p>
        <p className="text-sm md:text-xl leading-relaxed px-4 md:px-0">
          니토피아는 '니트들을 위한 이상적인' 가상 사회로, 청년 니트들이 사회의 일원으로 소속감을 느끼며 자신만의<br />
          목표를 찾아갈 수 있는 메타버스 플랫폼으로 익명성과 안정감을 바탕으로 각 부서마다의 다양한 미션을 수행<br />
          하며 자기 효능감과 자존감을 쌓아, 진정한 나를 발견하고 현실로 나아갈 힘을 제공하고자 합니다.
        </p>
      </section>

      {/* 핵심 콘텐츠 섹션 */}
      <section className="py-12 md:py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8" style={{ color: "#77eb84" }}>
          핵심 콘텐츠
        </h2>
        <p className="text-base md:text-lg mb-6 md:mb-8 text-blue-600">'NEET'들만 모인 사회에서 나를 찾아가는 일상!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* 첫 번째 콘텐츠 */}
          <div className="p-4 text-right">
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 relative inline-block">
              <span className="bg-yellow-100 px-1">'NEET'들만 모인 이끌어주기 사회</span>
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              니토피아에서 서로 소속감을 느끼며 새로운<br />
              경험을 시작하기
            </p>
          </div>

          {/* 두 번째 콘텐츠 */}
          <div className="p-4 text-left">
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 relative inline-block">
              <span className="bg-yellow-100 px-1">메타버스 공간에서 힘이 되는 동료 찾기</span>
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              비슷한 경험을 공유하며 힘이 되는<br />
              동료 만나기
            </p>
          </div>

          {/* 세 번째 콘텐츠 */}
          <div className="p-4 text-right">
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 relative inline-block">
              <span className="bg-yellow-100 px-1">니토피아 사회에 소속되어 개인 미션 수행</span>
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              각자에게 주어진 미션을 수행하며 루틴을<br />
              형성해 자기만의 성장을 이루기
            </p>
          </div>

          {/* 네 번째 콘텐츠 */}
          <div className="p-4 text-left">
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 relative inline-block">
              <span className="bg-yellow-100 px-1">모임가 미션을 통해 내일에 한걸음 더</span>
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              공동의 목표를 통해 성취감을 얻고,<br />
              더 나은 내일로 나아가기
            </p>
          </div>

          {/* 다섯 번째 콘텐츠 */}
          <div className="p-4 text-right">
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 relative inline-block">
              <span className="bg-yellow-100 px-1">시도의 허들을 낮춰 다양한 경험 도전</span>
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              부담 없이 새로운 활동에 도전해<br />
              작은 성취감을 쌓아가기
            </p>
          </div>

          {/* 여섯 번째 콘텐츠 */}
          <div className="p-4 text-left">
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 relative inline-block">
              <span className="bg-yellow-100 px-1">니토피아에서 활동을 쌓아가며 진정한 나를 찾기</span>
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              니토피아에서의 경험을 통해 자기 발견과<br />
              성장의 여정 만들어 가기
            </p>
          </div>
        </div>
      </section>


      {/* 직업 및 직급 안내 섹션 */}
      <section className="py-12 md:py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8" style={{ color: "#77eb84" }}>
          직업 및 직급 안내
        </h2>
        <p className="text-base md:text-lg mb-6 md:mb-8 text-blue-600">NEETopia에만 있는 특색 있는 5가지 직업!</p>

        {/* 부서 이미지 영역 */}
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 md:gap-6">
          {[...Array(5).keys()].map((index) => (
            <div
              key={index}
              className="bg-yellow-100 rounded-lg shadow-md w-20 md:w-40 mx-auto flex flex-col items-center"
            >
              <img
                src={`/images/department_0${index + 1}.png`}
                alt={`부서${index + 1}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* 직급 안내 테이블 */}
        <table className="w-full text-xs md:text-base mx-auto mt-6 md:mt-12 border-collapse border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-2 md:px-4 py-2">Level ID</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">Job Title</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">Position</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">데일리 미션</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">소모임 개설</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">소모임 참여</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">익명 게시판 글쓰기</th>
              <th className="border border-gray-300 px-2 md:px-4 py-2">익명 게시판 댓글 쓰기</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                level: 1,
                title: "Part-time worker",
                position: "아르바이트",
                dailyMission: "X",
                smallGroupCreation: "X",
                smallGroupParticipation: "X",
                anonymousPost: "X",
                anonymousComment: "X",
              },
              {
                level: 2,
                title: "Specialist",
                position: "인턴",
                dailyMission: "30회",
                smallGroupCreation: "X",
                smallGroupParticipation: "X",
                anonymousPost: "X",
                anonymousComment: "X",
              },
              {
                level: 3,
                title: "Manager",
                position: "대리",
                dailyMission: "40회",
                smallGroupCreation: "5회",
                smallGroupParticipation: "5회",
                anonymousPost: "5회",
                anonymousComment: "5회",
              },
              {
                level: 4,
                title: "Senior Manager",
                position: "차장",
                dailyMission: "60회",
                smallGroupCreation: "10회",
                smallGroupParticipation: "15회",
                anonymousPost: "10회",
                anonymousComment: "15회",
              },
              {
                level: 5,
                title: "Director",
                position: "본부장",
                dailyMission: "90회",
                smallGroupCreation: "20회",
                smallGroupParticipation: "20회",
                anonymousPost: "15회",
                anonymousComment: "20회",
              },
              {
                level: 6,
                title: "Director",
                position: "이사",
                dailyMission: "100회",
                smallGroupCreation: "25회",
                smallGroupParticipation: "25회",
                anonymousPost: "15회",
                anonymousComment: "25회",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.level}</td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.title}</td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.position}</td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.dailyMission}</td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.smallGroupCreation}</td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.smallGroupParticipation}</td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.anonymousPost}</td>
                <td className="border border-gray-300 px-2 md:px-4 py-2">{row.anonymousComment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 팀원 소개 섹션 */}
      <section className="py-12 md:py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-6 md:mb-8">We are byteMe!</h2>
        <p className="text-base md:text-lg text-orange-400 mb-6">NEETopia를 만든 팀원들</p>
        <p className="text-sm md:text-base mb-8">2024.10.01 ~ 2024.12.19</p>
        <p className="text-base md:text-lg leading-loose mb-20">
          메타버스 아카데미 3기 최종 융합프로젝트로 만난 우리들!<br />
          2달 동안 고생한 프로젝트에 대한 감상을 짧게 남깁니다.
        </p>

        {/* 팀원 감상평 */}
        <div className="flex flex-col space-y-8">
          {/* 첫 번째 말풍선 */}
          <div className="relative flex justify-start">
            <div className="bg-blue-50 p-4 md:p-8 rounded-lg shadow-md text-left w-full md:w-[55%] relative">
              <p className="text-gray-800 font-semibold mb-2">
                "프로젝트를 통해 많은 것을 배울 수 있었고, 부족한 저와 함께 2달간 힘써준 팀원들에게 감사합니다!"
              </p>
              <p className="text-gray-600 text-sm">- 박현선(기획)</p>
              <div className="absolute w-0 h-0 border-t-[20px] border-t-blue-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent bottom-[-20px] left-8"></div>
            </div>
          </div>

          {/* 두 번째 말풍선 */}
          <div className="relative flex justify-end">
            <div className="bg-yellow-50 p-4 md:p-8 rounded-lg shadow-md text-left w-full md:w-[55%] relative">
              <p className="text-gray-800 font-semibold mb-2">
                "행복은 멀리있지 않다는 것을 깨달았습니다 ^^"
              </p>
              <p className="text-gray-600 text-sm">- 김종민(AI)</p>
              <div className="absolute w-0 h-0 border-t-[20px] border-t-yellow-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent bottom-[-20px] right-8"></div>
            </div>
          </div>

          {/* 세 번째 말풍선 */}
          <div className="relative flex justify-start">
            <div className="bg-green-50 p-4 md:p-8 rounded-lg shadow-md text-left w-full md:w-[55%] relative">
              <p className="text-gray-800 font-semibold mb-2">
                "각자의 자리에서 최선을 다해주고 있는 우리 팀원들이 자랑스럽습니다!! 팀원들의 도움으로 새로운 기술을 익히고 적용해볼 수 있어 좋았고 좋은 팀원들과 함께해서 행복했습니다."
              </p>
              <p className="text-gray-600 text-sm">- 이정철(AI)</p>
              <div className="absolute w-0 h-0 border-t-[20px] border-t-green-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent bottom-[-20px] left-8"></div>
            </div>
          </div>

          {/* 네 번째 말풍선 */}
          <div className="relative flex justify-end">
            <div className="bg-red-50 p-4 md:p-8 rounded-lg shadow-md text-left w-full md:w-[55%] relative">
              <p className="text-gray-800 font-semibold mb-2">
                "프로젝트를 진행하며 팀원들과 함께 성장할 수 있어서 뜻깊은 시간이었습니다."
              </p>
              <p className="text-gray-600 text-sm">- 정광윤(Unity)</p>
              <div className="absolute w-0 h-0 border-t-[20px] border-t-red-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent bottom-[-20px] right-8"></div>
            </div>
          </div>

          {/* 다섯 번째 말풍선 */}
          <div className="relative flex justify-start">
            <div className="bg-violet-50 p-4 md:p-8 rounded-lg shadow-md text-left w-full md:w-[55%] relative">
              <p className="text-gray-800 font-semibold mb-2">
                "다양한 분야의 협업을 통해 많을 것을 배우고 성장할 수 있었던 프로젝트였습니다. 우리 팀원들 앞으로도 화이팅!"
              </p>
              <p className="text-gray-600 text-sm">- 유보라(Unity)</p>
              <div className="absolute w-0 h-0 border-t-[20px] border-t-violet-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent bottom-[-20px] left-8"></div>
            </div>
          </div>

          {/* 여섯 번째 말풍선 */}
          <div className="relative flex justify-end">
            <div className="bg-orange-50 p-4 md:p-8 rounded-lg shadow-md text-left w-full md:w-[55%] relative">
              <p className="text-gray-800 font-semibold mb-2">
                "프로젝트로 많은 것을 배울 수 있었고, 새로운 기술들도 적용해 볼 수 있어서 좋았습니다."
              </p>
              <p className="text-gray-600 text-sm">- 임혁진(Back-End)</p>
              <div className="absolute w-0 h-0 border-t-[20px] border-t-orange-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent bottom-[-20px] right-8"></div>
            </div>
          </div>

          {/* 일곱 번째 말풍선 */}
          <div className="relative flex justify-start">
            <div className="bg-pink-50 p-4 md:p-8 rounded-lg shadow-md text-left w-full md:w-[55%] relative">
              <p className="text-gray-800 font-semibold mb-2">
                "융합 프로젝트를 하면서 협업 플로우를 조금 더 배워가는 단계였으며, 소통의 중요성을 또 한 번 느끼게 되었습니다. 두 달 동안 함께 해준 팀원들에게 감사합니다."
              </p>
              <p className="text-gray-600 text-sm">- 박진희(Back-End)</p>
              <div className="absolute w-0 h-0 border-t-[20px] border-t-pink-50 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent bottom-[-20px] left-8"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
