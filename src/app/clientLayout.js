"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function ClientLayout({ children }) {
  const pathname = usePathname()

  // admin 페이지일 때 헤더와 푸터를 숨김
  const isAdminPage = pathname.startsWith("/admin")

  return (
    <>
      {!isAdminPage && <Header />}
      <main className='flex-grow w-full flex justify-center bg-[#FDFAF8]'>
        <div className='max-w-1200 w-full h-full'>{children}</div>
      </main>
      {!isAdminPage && <Footer />}
    </>
  )
}
