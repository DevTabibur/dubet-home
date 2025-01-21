'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Importing custom SVG icons
import icon1 from '@/assets/icon-grid/grid-icon-1.svg'
import icon2 from '@/assets/icon-grid/grid-icon-2.svg'
import icon3 from '@/assets/icon-grid/grid-icon-3.svg'
import icon4 from '@/assets/icon-grid/grid-icon-4.svg'
import icon5 from '@/assets/icon-grid/grid-icon-5.svg'
import icon6 from '@/assets/icon-grid/grid-icon-6.svg'

// Icon data arrays (split into two groups)
const leftIcons = [
  { id: 1, icon: icon1, alt: 'Icon 1' },
  { id: 2, icon: icon2, alt: 'Icon 2' },
  { id: 3, icon: icon3, alt: 'Icon 3' },
]

const rightIcons = [
  { id: 4, icon: icon4, alt: 'Icon 4' },
  { id: 5, icon: icon5, alt: 'Icon 5' },
  { id: 6, icon: icon6, alt: 'Icon 6' },
]

const IconGrid: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-6 gap-8">
      {/* Left Icons */}
      <div className="flex items-center gap-6">
        {leftIcons.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{
              scale: 1.1,
              boxShadow: '0px 15px 30px rgba(128, 0, 128, 0.5)',
              rotate: 8,
            }}
            whileTap={{
              scale: 0.95,
              boxShadow: '0px 8px 20px rgba(128, 0, 128, 0.7)',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            className="flex justify-center items-center cursor-pointer w-24 h-24 rounded-xl shadow-md hover:shadow-2xl"
          >
            <Image
              src={item.icon}
              alt={item.alt}
              width={100}
              height={100}
              className="w-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {rightIcons.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{
              scale: 1.1,
              boxShadow: '0px 15px 30px rgba(128, 0, 128, 0.5)',
              rotate: 8,
            }}
            whileTap={{
              scale: 0.95,
              boxShadow: '0px 8px 20px rgba(128, 0, 128, 0.7)',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            className="flex justify-center items-center cursor-pointer w-24 h-24 rounded-xl shadow-md hover:shadow-2xl"
          >
            <Image
              src={item.icon}
              alt={item.alt}
              width={100}
              height={100}
              className="w-full"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default IconGrid
