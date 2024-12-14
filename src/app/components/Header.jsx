
// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useAuth } from "../context/authcontext"; // AuthContext에서 useAuth 훅 가져오기

// export default function Header() {
//   const router = useRouter();
//   const { isLoggedIn, setIsLoggedIn } = useAuth(); // AuthContext에서 로그인 상태 가져오기

//   useEffect(() => {
//     // localStorage에서 토큰을 가져와 로그인 상태 확인
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, [setIsLoggedIn]);

//   // 로그아웃 처리 함수
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // 토큰 제거
//     localStorage.removeItem("departmentRecommendation"); // 부서추천 결과 제거
//     localStorage.removeItem("surveyResponses"); // 설문 응답 제거
//     localStorage.removeItem("neetRecommendation"); // 니트유형 제거
//     setIsLoggedIn(false); // 로그인 상태 초기화
//     router.push("/"); // 홈으로 리다이렉트
//   };

//   return (
//     <header className="w-full h-[120px] flex justify-center bg-white shadow-md z-50">
//       <div className="max-w-8xl w-full flex justify-between items-center py-4 px-12">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/images/NEETopia_logo_outline.svg"
//               width={225}
//               height={50}
//               alt="logo"
//               style={{ width: 225, height: 50 }}
//               priority
//             />
//           </Link>
//         </div>

//         {/* Navigation */}
//         <nav className="flex space-x-12 text-darklava text-xl items-center">
//           <Link href="/Introduction">
//             <span className="hover:text-yellow-400 cursor-pointer">
//               NEETopia 소개
//             </span>
//           </Link>
//           <Link href="/mypage">
//             <span className="hover:text-yellow-400 cursor-pointer">
//               MY Page
//             </span>
//           </Link>
          
//           {/* 로그인 또는 로그아웃 버튼 */}
//           {isLoggedIn ? (
//             <span
//               onClick={handleLogout}
//               className="cursor-pointer px-4 py-2 rounded-full text-black"
//               style={{ backgroundColor: "#fdca26" }}
//             >
//               로그아웃
//             </span>
//           ) : (
//             <Link href="/login">
//               <span className="hover:text-yellow-400 cursor-pointer px-4 py-2 border-2 border-yellow-400 rounded-full">
//                 로그인
//               </span>
//             </Link>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// }


"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../context/authcontext"; // AuthContext에서 useAuth 훅 가져오기

export default function Header() {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth(); // AuthContext에서 로그인 상태 가져오기
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 햄버거 메뉴 상태

  useEffect(() => {
    // localStorage에서 토큰을 가져와 로그인 상태 확인
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [setIsLoggedIn]);

  // 로그아웃 처리 함수
  const handleLogout = () => {
    localStorage.removeItem("token"); // 토큰 제거
    localStorage.removeItem("departmentRecommendation"); // 부서추천 결과 제거
    localStorage.removeItem("surveyResponses"); // 설문 응답 제거
    localStorage.removeItem("neetRecommendation"); // 니트유형 제거
    setIsLoggedIn(false); // 로그인 상태 초기화
    router.push("/"); // 홈으로 리다이렉트
  };

  return (
    <header className="w-full h-[120px] flex justify-center bg-white shadow-md z-50">
      <div className="max-w-8xl w-full flex justify-between items-center py-4 px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/NEETopia_logo_outline.svg"
              width={200}
              height={50}
              alt="logo"
              className="w-[150px] sm:w-[200px] lg:w-[225px]" // 반응형 크기
              priority
            />
          </Link>
        </div>

        {/* 햄버거 메뉴 버튼 (모바일, 태블릿) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation (데스크톱 메뉴) */}
        <nav className="hidden lg:flex space-x-12 text-darklava text-xl items-center">
          <Link href="/Introduction">
            <span className="hover:text-yellow-400 cursor-pointer">
              NEETopia 소개
            </span>
          </Link>
          <Link href="/mypage">
            <span className="hover:text-yellow-400 cursor-pointer">
              MY Page
            </span>
          </Link>

          {/* 로그인 또는 로그아웃 버튼 */}
          {isLoggedIn ? (
            <span
              onClick={handleLogout}
              className="cursor-pointer px-4 py-2 rounded-full text-black"
              style={{ backgroundColor: "#fdca26" }}
            >
              로그아웃
            </span>
          ) : (
            <Link href="/login">
              <span className="hover:text-yellow-400 cursor-pointer px-4 py-2 border-2 border-yellow-400 rounded-full">
                로그인
              </span>
            </Link>
          )}
        </nav>

        {/* 모바일, 태블릿 메뉴 */}
        {isMenuOpen && (
          <nav className="lg:hidden absolute top-[80px] left-0 w-full bg-white shadow-md flex flex-col items-center space-y-6 py-6 z-50">
            <Link href="/Introduction">
              <span
                onClick={() => setIsMenuOpen(false)} // 메뉴 클릭 시 닫기
                className="hover:text-yellow-400 cursor-pointer text-lg"
              >
                NEETopia 소개
              </span>
            </Link>
            <Link href="/mypage">
              <span
                onClick={() => setIsMenuOpen(false)} // 메뉴 클릭 시 닫기
                className="hover:text-yellow-400 cursor-pointer text-lg"
              >
                MY Page
              </span>
            </Link>

            {/* 로그인 또는 로그아웃 버튼 */}
            {isLoggedIn ? (
              <span
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="cursor-pointer px-4 py-2 rounded-full text-black"
                style={{ backgroundColor: "#fdca26" }}
              >
                로그아웃
              </span>
            ) : (
              <Link href="/login">
                <span
                  onClick={() => setIsMenuOpen(false)} // 메뉴 클릭 시 닫기
                  className="hover:text-yellow-400 cursor-pointer px-4 py-2 border-2 border-yellow-400 rounded-full"
                >
                  로그인
                </span>
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
