import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      {/* Top navigation links with gray background */}
      <div className="bg-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          {/* 모바일에서는 2줄 이상으로 줄바꿈, 데스크톱에서는 한 줄 유지 */}
          <div className="flex flex-wrap justify-center md:justify-between text-sm md:text-lg text-gray-600 gap-2">
            <a href="https://www.work24.go.kr/cm/main.do" target="_blank" rel="noopener noreferrer">
              hrd-net
            </a>
            <a href="https://www.saramin.co.kr" target="_blank" rel="noopener noreferrer">
              사람인(취업사이트)
            </a>
            <a href="https://2030.go.kr" target="_blank" rel="noopener noreferrer">
              청년포털
            </a>
            <a href="https://exerciseYouth.com" target="_blank" rel="noopener noreferrer">
              운동청년
            </a>
            <a href="https://youth.seoul.go.kr/" target="_blank" rel="noopener noreferrer">
              청년몽땅정보통
            </a>
            <a href="https://onoffmix.com" target="_blank" rel="noopener noreferrer">
              온오프믹스
            </a>
            <a href="https://dudug.kr" target="_blank" rel="noopener noreferrer">
              두더지땅굴
            </a>
            <a href="https://neetconnect.kr" target="_blank" rel="noopener noreferrer">
              닛커넥트
            </a>
            <a href="https://www.interninmeta.or.kr/" target="_blank" rel="noopener noreferrer">
              인턴in메타
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content with white background */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12">
          {/* Left section for logo */}
          <div className="w-full md:w-1/5 flex justify-center md:justify-start">
            <Image
              src="/images/NEETopia_logo.svg"
              width={225}
              height={50}
              alt="logo"
              className="w-[150px] md:w-[200px] lg:w-[225px]" // 반응형 로고 크기
              priority
            />
          </div>

          {/* Right section for links and text */}
          <div className="w-full md:w-4/5 text-gray-700 text-sm md:text-base">
            {/* Navigation links */}
            <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 text-base md:text-xl text-black-400 mb-8">
              <a href="#team-intro" className="hover:text-yellow-400">
                팀원소개
              </a>
              <a href="#privacy-policy" className="text-blue-500 hover:text-yellow-600">
                개인정보처리방침
              </a>
              <a href="#partnership" className="hover:text-yellow-400">
                제휴안내
              </a>
              <a href="#customer-service" className="hover:text-yellow-400">
                고객센터
              </a>
            </div>

            {/* Project Information */}
            <div className="leading-relaxed text-gray-500 font-light">
              <p>메타버스 아카데미 3기 최종 프로젝트 종합</p>
              <p>팀명 : byteMe</p>
              <p>프로젝트명 : NEETopia(니토피아)</p>
              <p>
                팀원 : 박현선(기획), 유보라(Unity), 정광윤(Unity), 김종민(AI), 이정철(AI), 박진희(Back-End),
                임혁진(Back-End)
              </p>
              <p className="mt-4">
                해당 서비스 제공과 관련된 모든 의무와 책임은 개발된 플랫폼 제공자에게 있으며 이용 중 발생하는 문제에 대해 당사는 법적 책임을
                부담하지 않습니다.
              </p>
              <p>
                상호명 : NEETopia | 제휴안내 : 010-9339-0212 | 고객센터 이메일 : velly0212@cuk.edu | ©byteMe/NEETopia. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
