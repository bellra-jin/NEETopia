// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*', // 클라이언트에서 호출하는 경로
          destination: 'http://isaiah-dev.ddns.net:18080/:path*', // 백엔드 서버 경로
        },
      ];
    },
  };
  
  module.exports = nextConfig; // 설정을 내보내기
  