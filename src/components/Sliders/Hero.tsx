'use client'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import hero_1 from '../../assets/hero/hero_1.png'
import hero_2 from '../../assets/hero/hero_2.png'
import hero_3 from '../../assets/hero/hero_3.png'
import Image, { StaticImageData } from 'next/image'
import { BiSolidJoystickAlt, BiJoystick } from 'react-icons/bi'
import { FaDisease } from 'react-icons/fa'
import {
  MdAttachMoney,
  MdCasino,
  MdOutlineSportsCricket,
  MdOutlineSportsFootball,
  MdOutlineSportsVolleyball,
} from 'react-icons/md'

interface Slide {
  title: string
  subtitle: string
  image: StaticImageData
  buttonText: string
  buttonPath: string
  bg: string
}

const slides: Slide[] = [
  {
    title: 'First Slide Title',
    subtitle: 'This is the subtitle for the first slide',
    image: hero_1,
    buttonText: 'Explore More',
    buttonPath: '/explore-games',
    bg: 'bg-gradient-to-r from-lime-700 from-10% via-lime-600 via-30% to-lime-700 to-90%',
  },
  {
    title: 'Second Slide Title',
    subtitle: 'This is the subtitle for the second slide',
    image: hero_2,
    buttonText: 'Explore More',
    buttonPath: '/explore-games',
    bg: 'bg-gradient-to-r from-amber-600 from-10% via-amber-700 via-30% to-amber-600 to-90%',
  },
  {
    title: 'Third Slide Title',
    subtitle: 'This is the subtitle for the third slide',
    image: hero_3,
    buttonText: 'Explore More',
    buttonPath: '/explore-games',
    bg: 'bg-gradient-to-r from-yellow-700 from-10% via-yellow-700 via-30% to-yellow-600 to-90%',
  },
]

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // 5 seconds

    return () => clearInterval(interval) // Cleanup interval on unmount
  }, [])

  return (
    <div className="relative rounded-2xl md:h-[350px] h-[50vh] w-full z-10 mb-2">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) =>
          index === currentIndex ? (
            <motion.div
              key={index}
              className={`flex md:flex-row flex-col rounded-2xl shadow-lg justify-around items-center w-full h-full lg:p-20 md:p-4 p-2 absolute top-0 left-0 ${slide?.bg}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Icons popping up from top and bottom */}
              <div className="md:block hidden absolute inset-0 z-20">
                {/* Icon coming from the top */}
                <motion.div
                  initial={{ y: -50, opacity: 0 }} // Mimicking the same detail pop animation
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                  className="absolute top-[10%] left-[10%]"
                >
                  <BiSolidJoystickAlt size={30} color="white" />
                </motion.div>
                <motion.div
                  initial={{ y: -50, opacity: 0 }} // Mimicking the same detail pop animation
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                  className="absolute top-[8%] left-[20%]"
                >
                  <MdOutlineSportsVolleyball size={30} color="white" />
                </motion.div>

                {/* Icon coming from the top */}
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                  className="absolute top-[5%] left-[30%]"
                >
                  <MdAttachMoney size={30} color="white" />
                </motion.div>

                {/* Icon coming from the bottom */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }} // Entering from the bottom
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
                  className="absolute bottom-[15%] left-[20%]"
                >
                  <MdOutlineSportsCricket size={30} color="white" />
                </motion.div>

                {/* Icon coming from the top */}
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                  className="absolute top-[8%] left-[40%]"
                >
                  <MdOutlineSportsFootball size={30} color="white" />
                </motion.div>

                {/* Icon coming from the bottom */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
                  className="absolute bottom-[10%] left-[10%]"
                >
                  <FaDisease size={30} color="white" />
                </motion.div>

                {/* Icon coming from the bottom */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 1.0 }}
                  className="absolute bottom-[20%] left-[30%]"
                >
                  <MdCasino size={30} color="white" />
                </motion.div>

                {/* Icon coming from the top */}
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
                  className="absolute top-[30%] left-[50%]"
                >
                  <BiJoystick size={30} color="white" />
                </motion.div>
              </div>

              <div className="relative flex-1 w-full md:text-left text-center pt-5 z-10">
                {/* Title and other details */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="md:text-4xl text-2xl text-white font-bold">
                    {slide.title}
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="md:text-lg text-sm text-white my-4">
                    {slide.subtitle}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="md:w-auto w-full "
                >
                  <a
                    href={slide.buttonPath}
                    className="bg-blue-500 text-white px-4 py-2 md:text-md text-xs rounded-full"
                  >
                    {slide.buttonText}
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ y: -100, scale: 0.9 }} // Start from above (y: -100)
                animate={{
                  y: [0, -10, 0], // Move to the position with a bounce effect
                }}
                transition={{
                  duration: 1.5,
                  ease: 'linear',
                  repeat: Infinity, // Repeats the bounce indefinitely
                  repeatType: 'mirror', // Creates a mirror bounce
                }}
                className="w-64 drop-shadow-2xl filter z-20"
              >
                <div className="relative w-full h-full -rotate-12">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    className="rounded w-full h-full brightness-110 backdrop-brightness-100  drop-shadow-lg shadow-cyan-500/50 contrast-110"
                    width={250}
                    height={250}
                  />
                  {/* Glow effect for more emphasis */}
                  <div className="absolute inset-0 rounded-lg bg-white opacity-10 blur-2xl"></div>
                </div>
              </motion.div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
      {/* <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 bg-purple-300 rounded-full ">
        <SpinRoll />
      </div> */}
    </div>
  )
}

export default Hero
