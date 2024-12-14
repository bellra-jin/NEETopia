// import localFont from "next/font/local";
// import "./globals.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import { AuthProvider } from "./context/authcontext";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "NEETopia - NEET들의 이상적인 삶을 위한 서비스",
//   description: "청년 니트들이 다시 사회와 연결될 수 있도록 돕는 메타버스 라이프 어시스턴트 서비스",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="ko">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         <AuthProvider> {/* Wrap the application in AuthProvider */}
//           <Header />
//           {children}
//           <Footer />
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }


import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/authcontext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NEETopia - NEET들의 이상적인 삶을 위한 서비스",
  description: "청년 니트들이 다시 사회와 연결될 수 있도록 돕는 메타버스 라이프 어시스턴트 서비스",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* Mixed Content 문제 해결을 위한 Content-Security-Policy 설정 */}
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider> {/* Wrap the application in AuthProvider */}
          <Header />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

