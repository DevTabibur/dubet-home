import UpComingMatchCard from '@/components/ui/Cards/UpComingMatchCard/UpComingMatchCard'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const UpcomingEvents = () => {
  return (
    <section className="border-b border-white/10 pb-10">
      <div className="flex items-center justify-between mt-8">
        <span className="mx-4 text-white text-3xl font-semibold">
          Upcoming Match
        </span>
        {/* Right Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-1.5 min-w-20 bg-white/10 text-white rounded-full font-[300] shadow-md"
        >
          <Link href='/upcoming-event'>
            See all
          </Link>
        </motion.button>
      </div>

      {/* Render each category with a title and multiple SportsCard components */}
      <div className="grid grid-cols-3  mt-10 gap-4">
        {[0, 1, 2, 0, 1, 2].map((_, idx) => (
          <UpComingMatchCard key={idx} />
        ))}
      </div>
    </section>
  )
}

export default UpcomingEvents
