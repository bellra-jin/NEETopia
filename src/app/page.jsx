import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>NEETopia - NEET들의 이상적인 삶을 위한 서비스</title>
        <meta
          name="description"
          content="청년 니트들이 다시 사회와 연결될 수 있도록 돕는 메타버스 라이프 어시스턴트 서비스"
        />
      </Head>

      {/* Main Content */}
      <main className="bg-white px-4 md:px-0">
        {/* Hero Section */}
        <div className="relative text-center text-white">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[400px] md:h-[600px] lg:h-[760px] object-cover"
          >
            <source src="/images/move2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

          {/* 가운데 정렬된 콘텐츠 */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <Image
              src="/images/logo_w.png"
              alt="NEETopia Logo"
              width={300}
              height={150}
              className="md:w-[500px] md:h-[200px] lg:w-[650px] lg:h-[225px]"
              priority
            />
            <button
              className="mt-8 text-black text-sm md:text-lg lg:text-xl py-2 px-6 md:py-3 md:px-10 lg:py-4 lg:px-12 rounded-full hover:bg-yellow-600 transition"
              style={{ backgroundColor: "#ffca27" }}
            >
              접속하기
            </button>
          </div>
        </div>


        {/* Welcome Section */}
        <section className="text-center py-12 md:py-24">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-10 md:mb-20">
            NEETopia에 오신 걸 환영합니다.
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed">
            <span className="text-blue-600 font-bold text-base md:text-lg lg:text-xl">
              니토피아는 청년 니트들이 사회와의 연결을 포기하지 않고,{" "}
              <br className="hidden md:block" />
              스스로 이어나갈 수 있도록 지원하는 소통 및 교류의 플랫폼 입니다.
            </span>
            <br />
            유저들은 자신의 이야기를 나누고, 주도적으로 자신을 표현하며, 서로에게
            영감과 공감을 나눌 수 있습니다. <br />
            메타버스 기반의 라이프 어시스턴트 서비스에서 당신만의 이야기를
            만들어보세요!
          </p>
        </section>

        {/* Full Banner Section */}
        <div className="w-full h-32 sm:h-40 md:h-60 lg:h-72 flex justify-center overflow-hidden">
          <a
            href="https://download.interninmeta.or.kr/"
            className="hover:opacity-90 transition duration-300"
          >
            <Image
              src="/images/intern_in_meta_ad_1.png"
              alt="NEETopia 배너"
              width={1920}
              height={200}
              priority
              className="object-cover object-center w-full h-full"
            />
          </a>
        </div>


        {/* Features Section */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12 md:py-24">
          {/* First Feature */}
          <div className="p-8 border border-yellow-400 rounded-tl-none rounded-tr-[24px] rounded-bl-[24px] rounded-br-none flex flex-col justify-center h-[200px] md:h-[250px] lg:h-[300px]">
            <h3 className="font-medium text-left text-sm md:text-lg lg:text-2xl">
              개인 루틴 설정과 작은 성취감 제공
            </h3>
            <p className="text-gray-600 mt-4 text-left text-xs md:text-sm lg:text-lg font-light">
              작은 성취와 꾸준한 루틴을 통해 <br />
              자존감을 쌓아가며 새롭게 성장하세요.
            </p>
          </div>

          <div className="px-8 pt-8 pb-0 border border-yellow-400 rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none flex justify-center items-center h-[200px] md:h-[250px] lg:h-[300px]">
            <img
              src="/images/01_daily.svg"
              alt="이미지 설명"
              className="h-[150px] md:h-[200px] lg:h-[250px] w-auto"
            />
          </div>

          {/* Second Feature */}
          <div className="px-8 pt-8 pb-0 border border-yellow-400 rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none flex justify-center items-center h-[200px] md:h-[250px] lg:h-[300px]">
            <img
              src="/images/02_community.svg"
              alt="이미지 설명"
              className="h-[150px] md:h-[200px] lg:h-[250px] w-auto"
            />
          </div>

          <div className="p-8 border border-yellow-400 rounded-tl-none rounded-tr-[24px] rounded-bl-[24px] rounded-br-none flex flex-col justify-center h-[200px] md:h-[250px] lg:h-[300px]">
            <h3 className="font-medium text-left text-sm md:text-lg lg:text-2xl">
              소모임과 커뮤니티로 함께 성장하는 경험
            </h3>
            <p className="text-gray-600 mt-4 text-left text-xs md:text-sm lg:text-lg font-light">
              같은 고민을 가진 사람들과 소통하고, <br />
              서로의 성장을 응원하며 소속감을 느껴보세요.
            </p>
          </div>

          {/* Third Feature */}
          <div className="p-8 border border-yellow-400 rounded-tl-none rounded-tr-[24px] rounded-bl-[24px] rounded-br-none flex flex-col justify-center h-[200px] md:h-[250px] lg:h-[300px]">
            <h3 className="font-medium text-left text-sm md:text-lg lg:text-2xl">
              AI 기반 맞춤형 취향, 직업 추천 및 상담
            </h3>
            <p className="text-gray-600 mt-4 text-left text-xs md:text-sm lg:text-lg font-light">
              사용자 성향에 맞춘 AI 직업 추천 기능과 가상 상담을 통해 개개인에
              적합한 <br />
              커리어 목표를 제안합니다. 이를 통해 진정한 나에게 맞는 커리어를
              발견해 보세요!
            </p>
          </div>

          <div className="px-8 pt-8 pb-0 border border-yellow-400 rounded-tl-[24px] rounded-br-[24px] rounded-tr-none rounded-bl-none flex justify-center items-center h-[200px] md:h-[250px] lg:h-[300px]">
            <img
              src="/images/03_ai.svg"
              alt="이미지 설명"
              className="h-[150px] md:h-[200px] lg:h-[250px] w-auto"
            />
          </div>
        </section>
      </main>
    </>
  );
}

