'use client'
import React from 'react'
import HomeWrapper from '../wrapper/HomeWrapper'
import BetSlip from '../ui/BetSlip/BetSlip'
import Image from 'next/image'
import liveSports from '@/assets/demo/all-casino.png'
import MenuItemSearch from '../ui/Inputs/MenuItemSearch/MenuItemSearch'
import QuickLinks from '@/sections/QuickLinks/QuickLinks'
import CasinoGames from './CasinoGames'

const AllCasino = () => {
  const handleSearchSubmit = (_value: string) => {
    // console.log("Search value:", value);
  }
  return (
    <HomeWrapper>
      <section className="flex lg:flex-row md:flex-col-reverse gap-5 md:items-start">
        <section className="lg:w-[30%] md:w-[100%] lg:block hidden  top-5">
          <div className="max-w-sm">
            <BetSlip />
            <QuickLinks />
          </div>
        </section>

        <section className="lg:w-[70%] md:w-[100%] w-full space-y-5">
          <Image
            src={liveSports}
            alt="live-sports-banner.png"
            quality={100}
            width={2000}
            height={900}
            className="w-full h-fit"
          />

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
            <MenuItemSearch
              onSubmit={handleSearchSubmit}
              placeholder="Search here ..."
            />
          </div>

          <CasinoGames />
        </section>
      </section>
    </HomeWrapper>
  )
}

export default AllCasino
