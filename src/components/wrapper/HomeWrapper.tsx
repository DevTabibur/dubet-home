import React, { ReactNode } from 'react'
import HeaderComponent from '../shared/Header/Header'
import Footer from '../shared/Footer/Footer'

interface HomeWrapperProps {
  children: ReactNode
}

const HomeWrapper: React.FC<HomeWrapperProps> = ({ children }) => {
  return (
    <>
      <main>
        <HeaderComponent />
        <section className="px-2 md:px-4 sm:px-2 md:py-8 py-3 overflow-x-hidden max-w-[1550px] mx-auto">
          {children}
        </section>
        <Footer />
      </main>
    </>
  )
}

export default HomeWrapper
