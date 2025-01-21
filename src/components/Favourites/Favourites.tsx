'use client'
import React from 'react'
import HomeWrapper from '../wrapper/HomeWrapper'
import BetSlip from '../ui/BetSlip/BetSlip'
import PopularCasino from '@/sections/PopularCasino/PopularCasino'
import MenuItemSearch from '../ui/Inputs/MenuItemSearch/MenuItemSearch'
import PageStateCards from '../LiveSports/PageStateCards'
const Favourites = () => {
  const handleSearchSubmit = (value: string) => {
    console.log('Search value:', value)
    // Handle the search logic here (e.g., call an API, update state, etc.)
  }

  return (
    <HomeWrapper>
      <section className="flex lg:flex-row md:flex-col-reverse gap-5 md:items-start">
        <section className="lg:w-[30%] md:w-[100%] lg:block hidden">
          <div className="max-w-sm">
            <BetSlip />
            <PopularCasino />
          </div>
        </section>
        <section className="lg:w-[70%] md:w-[100%] w-full space-y-5">
          <div className="bg-[#34193A] p-4 rounded-lg flex items-center justify-between shadow-lg">
            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-[#C52EE1] text-white py-2 px-4 rounded-md hover:bg-opacity-50 transition-all">
                All Sports
              </button>
              <button className="border border-[#C52EE1] text-white py-2 px-4 rounded-md hover:bg-[#C52EE1] transition-all hover:text-white">
                Favourites
              </button>
            </div>

            {/* Search Bar */}
            <MenuItemSearch onSubmit={handleSearchSubmit} />
          </div>
          <PageStateCards />
        </section>
      </section>
    </HomeWrapper>
  )
}

export default Favourites
