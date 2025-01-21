'use client'
import React, { useState, useEffect } from 'react'
import GameCard from '@/components/ui/Cards/GameCard/GameCard'
import lucky_wheel from '@/assets/demo/lucky_wheel.png'
import game1 from '@/assets/demo/game-1.jpeg'
import game2 from '@/assets/demo/game-2.jpeg'
import game3 from '@/assets/demo/game-3.jpeg'
import game4 from '@/assets/demo/game-4.jpeg'
import game5 from '@/assets/demo/game-5.jpeg'
import game6 from '@/assets/demo/game-6.jpeg'
import game7 from '@/assets/demo/game-7.jpeg'
import game8 from '@/assets/demo/game-8.jpeg'
import MultiCarousel from '@/components/Sliders/MultiCarousel/MultiCarousel'
import { ResponsiveType } from 'react-multi-carousel'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const PopularGames: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Cricket' | 'Football'>('All')

  // Check for window width to set layout mode
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640) // Set breakpoint for mobile devices
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Sample Game Cards with Categories
  const gameCards = [
    { imageSrc: game1, title: 'Lucky Wheel', category: 'Cricket' },
    { imageSrc: game6, title: 'Lucky Wheel', category: 'Football' },
    { imageSrc: game7, title: 'Lucky Wheel', category: 'Cricket' },
    { imageSrc: game2, title: 'Lucky Wheel', category: 'Football' },
    { imageSrc: game3, title: 'Lucky Wheel', category: 'Cricket' },
    { imageSrc: game4, title: 'Lucky Wheel', category: 'Football' },
    { imageSrc: game5, title: 'Lucky Wheel', category: 'Cricket' },
    { imageSrc: game8, title: 'Lucky Wheel', category: 'Football' },
    { imageSrc: lucky_wheel, title: 'Lucky Wheel', category: 'Cricket' },
  ]

  // Filter Games Based on Selected Category
  const filteredGames = gameCards.filter((game) => {
    if (selectedCategory === 'All') return true
    return game.category === selectedCategory
  })

  const responsive: ResponsiveType = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.25,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2.25,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1.15,
    },
  }

  return (
    <section className="py-5">
      <h1 className="text-white font-[500] mt-5 text-3xl">Popular Games</h1>
      <div className="flex justify-between items-center py-6 ">
        {/* Filter Buttons */}
        <div className="flex gap-4">
          {['All', 'Cricket', 'Football'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category as 'All' | 'Cricket' | 'Football')}
              className={`px-4 py-1.5 min-w-20 rounded-full font-[300] shadow-md ${selectedCategory === category ? 'bg-secondary text-white' : 'bg-white/10 text-white'
                }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* See All Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-1.5 min-w-20 bg-white/10 text-white rounded-full font-[300] shadow-md"
        >
          <Link href="/popular-games">
            See all
          </Link>
        </motion.button>
      </div>

      {/* Display Filtered Games with Animation */}
      <div className="py-3 items-start">
        {isMobile ? (
          <div className="w-full">
            <MultiCarousel
              responsive={responsive}
              leftArrowId="left-arrow"
              rightArrowId="right-arrow"
            >
              <AnimatePresence mode="wait">
                {filteredGames.map((game, index) => (
                  <motion.div
                    key={game.title + index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="p-2"
                  >
                    <GameCard
                      imageSrc={game.imageSrc}
                      title={game.title}
                      width={400}
                      height={400}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </MultiCarousel>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-2 w-full">
            <AnimatePresence mode="wait">
              {filteredGames.map((game, index) => (
                <motion.div
                  key={game.title + index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <GameCard
                    imageSrc={game.imageSrc}
                    title={game.title}
                    width={400}
                    height={400}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  )
}

export default PopularGames
