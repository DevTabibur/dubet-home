'use client'
import React, { useState, useEffect } from 'react'
import BettScoreCard from '@/components/ui/Cards/BettScoreCard/BettScoreCard'
import cricket from '@/assets/svg/cricket.svg'
import football from '@/assets/svg/football.svg'
import MultiCarousel from '@/components/Sliders/MultiCarousel/MultiCarousel'
import { ResponsiveType } from 'react-multi-carousel'
import { motion, AnimatePresence } from 'framer-motion'
import 'react-multi-carousel/lib/styles.css'
import Link from 'next/link'

// Carousel responsive settings
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

const LiveBetting: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Cricket' | 'Football'>('All')

  // Check for window width to set layout mode
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Sample Betting Cards
  const betCards = [
    {
      title: '2nd ODI in Abu Dhabi',
      eventLocation: 'Abu Dhabi',
      team1: { name: 'Pakistan', score: '356/10 (50)' },
      team2: { name: 'England', score: '232/2 (40.1)' },
      betOptions: [
        { label: 'T1', multiplier: '2X' },
        { label: 'T2', multiplier: '1.5X' },
        { label: 'Draw', multiplier: '20X' },
      ],
      icon: cricket,
      isBookMarked: true,
      category: 'Cricket',
    },
    {
      title: '2nd ODI in Abu Dhabi',
      eventLocation: 'Abu Dhabi',
      team1: { name: 'Pakistan', score: '356/10 (50)' },
      team2: { name: 'England', score: '232/2 (40.1)' },
      betOptions: [
        { label: 'T1', multiplier: '2X' },
        { label: 'T2', multiplier: '1.5X' },
        { label: 'Draw', multiplier: '20X' },
      ],
      icon: cricket,
      isBookMarked: true,
      category: 'Cricket',
    },
    {
      title: '2nd ODI in Abu Dhabi',
      eventLocation: 'Abu Dhabi',
      team1: { name: 'Pakistan', score: '356/10 (50)' },
      team2: { name: 'England', score: '232/2 (40.1)' },
      betOptions: [
        { label: 'T1', multiplier: '2X' },
        { label: 'T2', multiplier: '1.5X' },
        { label: 'Draw', multiplier: '20X' },
      ],
      icon: cricket,
      isBookMarked: true,
      category: 'Cricket',
    },
    {
      title: '2nd ODI in Abu Dhabi',
      eventLocation: 'Abu Dhabi',
      team1: { name: 'Pakistan', score: '356/10 (50)' },
      team2: { name: 'England', score: '232/2 (40.1)' },
      betOptions: [
        { label: 'T1', multiplier: '2X' },
        { label: 'T2', multiplier: '1.5X' },
        { label: 'Draw', multiplier: '20X' },
      ],
      icon: cricket,
      isBookMarked: true,
      category: 'Cricket',
    },
    {
      title: 'Premier League',
      eventLocation: 'London',
      team1: { name: 'Man Utd', score: '1' },
      team2: { name: 'Chelsea', score: '2' },
      betOptions: [
        { label: 'T1', multiplier: '1.8X' },
        { label: 'T2', multiplier: '1.2X' },
        { label: 'Draw', multiplier: '10X' },
      ],
      icon: football,
      isBookMarked: false,
      category: 'Football',
    },
    {
      title: 'Test Match in Sydney',
      eventLocation: 'Sydney',
      team1: { name: 'Australia', score: '432/8' },
      team2: { name: 'India', score: '300/7' },
      betOptions: [
        { label: 'T1', multiplier: '1.7X' },
        { label: 'T2', multiplier: '1.3X' },
        { label: 'Draw', multiplier: '15X' },
      ],
      icon: cricket,
      isBookMarked: true,
      category: 'Cricket',
    },
  ]

  // Filter Betting Cards Based on Selected Category
  const filteredBetCards = betCards.filter((betCard) => {
    if (selectedCategory === 'All') return true
    return betCard.category === selectedCategory
  })

  return (
    <section className="border-b border-white/10 pb-10">
      <h1 className="text-white font-[500] mt-10 text-3xl">Live Betting</h1>
      <div className="flex justify-between items-center py-6">
        {/* Filter Buttons */}
        <div className="flex gap-4">
          {['All', 'Cricket', 'Football'].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category as 'All' | 'Cricket' | 'Football')}
              className={`px-4 py-1.5 min-w-20 rounded-full font-[300] shadow-md ${
                selectedCategory === category ? 'bg-secondary text-white' : 'bg-white/10 text-white'
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
          <Link  href='/crickets'>
          
          See all
          </Link>
        </motion.button>
      </div>

      {/* Betting Cards with Animation */}
      <div className="py-3">
        {isMobile ? (
          <MultiCarousel responsive={responsive} leftArrowId="left-arrow" rightArrowId="right-arrow">
            <AnimatePresence mode="wait">
              {filteredBetCards.map((betCard, index) => (
                <motion.div
                  key={betCard.title + index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="p-2"
                >
                  <BettScoreCard {...betCard} />
                </motion.div>
              ))}
            </AnimatePresence>
          </MultiCarousel>
        ) : (
          <div className="grid lg:grid-cols-3 grid-cols-2 md:gap-4 gap-2">
            <AnimatePresence mode="wait">
              {filteredBetCards.map((betCard, index) => (
                <motion.div
                  key={betCard.title + index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <BettScoreCard {...betCard} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  )
}

export default LiveBetting
