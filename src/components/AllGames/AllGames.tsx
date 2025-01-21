'use client'
import HomeWrapper from '../wrapper/HomeWrapper'
import BetSlip from '../ui/BetSlip/BetSlip'
import Image from 'next/image'
import MenuItemSearch from '../ui/Inputs/MenuItemSearch/MenuItemSearch'
import QuickLinks from '@/sections/QuickLinks/QuickLinks'
import AllGamesBanner from '@/assets/demo/all-games-banner.png'
import GamesCard from './GamesCard'
import casino1 from '@/assets/demo/game-15.jpeg'
import casino2 from '@/assets/demo/game-14.jpeg'
import casino3 from '@/assets/demo/game-13.jpeg'
import casino4 from '@/assets/demo/game-12.jpeg'
import casino5 from '@/assets/demo/game-11.jpeg'
import casino6 from '@/assets/demo/game-10.jpeg'
import { useState } from 'react'

const allGamesData = [
  {
    id: 1,
    title: 'Crash Royal 1',
    imageSrc: casino3,
    category: 'Popular Games',
  },
  {
    id: 2,
    title: 'Crash Royal 2',
    imageSrc: casino4,
    category: 'Popular Games',
    badges: [{ title: 'New', color: 'red' }],
  },
  {
    id: 3,
    title: 'Crash Royal 3',
    imageSrc: casino5,
    category: 'Popular Games',
    badges: [{ title: 'Demo', color: 'blue' }],

  },
  {
    id: 4,
    title: 'Crash Royal 4',
    imageSrc: casino2,
    category: 'Popular Games',
    badges: [{ title: 'New', color: 'orange' }],
  },
  {
    id: 5,
    title: 'Crash Royal 5',
    imageSrc: casino1,
    category: 'Popular Games',
  },
  {
    id: 6,
    title: 'Crash Royal 6',
    imageSrc: casino3,
    category: 'Popular Games',
    badges: [{ title: 'New', color: 'green' }],

  },
  { id: 7, title: 'Lucky Slot 1', imageSrc: casino1, category: 'New Games' },
  { id: 8, title: 'Lucky Slot 2', imageSrc: casino2, category: 'New Games' },
  { id: 9, title: 'Lucky Slot 3', imageSrc: casino3, category: 'New Games' },
  {
    id: 10,
    title: 'Dice Game Pro 1',
    imageSrc: casino6,
    category: 'Dice Games',
    badges: [{ title: 'Top', color: 'orange' }],

  },
  {
    id: 11,
    title: 'Dice Game Pro 2',
    imageSrc: casino5,
    category: 'Dice Games',
  },
  {
    id: 12,
    title: 'Dice Game Pro 3',
    imageSrc: casino4,
    category: 'Dice Games',
  },
  { id: 13, title: 'Card Shark 1', imageSrc: casino3, category: 'Card Games' },
  { id: 14, title: 'Card Shark 2', imageSrc: casino1, category: 'Card Games' },
  { id: 15, title: 'Card Shark 3', imageSrc: casino2, category: 'Card Games' },

  // Add more games with categories as needed
]

const AllGames = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredGames, setFilteredGames] = useState(allGamesData)

  const handleSearchSubmit = (value: string) => {
    setSearchTerm(value)
  }

  // useEffect(() => {
  //   // Filter games based on the search term
  //   const filtered = allGamesData.filter((game) =>
  //     game.title.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  //   // setFilteredGames(filtered)
  // }, [searchTerm, filteredGames])

  return (
    <HomeWrapper>
      <section className="flex lg:flex-row md:flex-col-reverse gap-5 md:items-start">
        <section className="lg:w-[25%] md:w-[100%] lg:block hidden">
          <div className="max-w-sm">
            <BetSlip />
            <QuickLinks />
          </div>
        </section>

        <section className="lg:w-[75%] md:w-[100%] w-full">
          <Image
            src={AllGamesBanner}
            alt="live-sports-banner.png"
            quality={100}
            width={2000}
            height={900}
            className="w-full h-fit"
          />

          <div className="bg-[#34193A] p-4 rounded-lg flex items-center justify-between shadow-lg ">
            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-[#C52EE1] text-white py-2 px-4 rounded-md hover:bg-opacity-50 transition-all">
                All Casino
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

          {/* Pass filteredGames to GamesCard */}
          <GamesCard games={filteredGames} searchQuery={searchTerm} />
        </section>
      </section>
    </HomeWrapper>
  )
}

export default AllGames
