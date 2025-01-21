'use client'
import PopularCasino from '@/sections/PopularCasino/PopularCasino'
import BetSlip from '../ui/BetSlip/BetSlip'
import HomeWrapper from '../wrapper/HomeWrapper'
import Image from 'next/image'
import MenuItemSearch from '../ui/Inputs/MenuItemSearch/MenuItemSearch'
import PageStateCards from '../LiveSports/PageStateCards'
import liveSports from '@/assets/demo/live-sports-banner.png'

const Crickets = () => {
  const handleSearchSubmit = (value: string) => {
    console.log('Search value:', value)
    // Handle the search logic here (e.g., call an API, update state, etc.)
  }

  return (
    <div>
      <HomeWrapper>
        <section className="flex lg:flex-row md:flex-col-reverse gap-5 md:items-start">
          <section className="lg:w-[25%] md:w-[100%] lg:block hidden">
            <div className="max-w-sm">
              <BetSlip />
              <PopularCasino />
            </div>
          </section>
          <section className="lg:w-[75%] md:w-[100%] w-full space-y-5">
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
              <MenuItemSearch onSubmit={handleSearchSubmit} />
            </div>
            <PageStateCards />
          </section>
        </section>
      </HomeWrapper>
    </div>
  )
}

export default Crickets
