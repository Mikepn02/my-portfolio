import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative z-10 flex flex-col min-h-screen">
      <Navbar />
      <main className="mt-10 flex-1">{children}</main>
      <Footer />
    </div>
  )
}


export default MainLayout