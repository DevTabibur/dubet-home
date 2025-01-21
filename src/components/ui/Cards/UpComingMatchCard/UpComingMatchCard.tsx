import { MdSportsCricket } from 'react-icons/md'
import bdFlag from '@/assets/svg/bangladeshFlag.svg'
import indiaFlag from '@/assets/svg/indiaFlag.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'
const UpComingMatchCard = () => {
  return (
    <div className="upcoming-card-bg w-full pt-10  items-center rounded-xl  h-auto rounded-primary shadow-lg p-2 md:p-0  lg:max-w-3xl md:max-w-2xl mx-auto   text-white">
      <div className="flex flex-col items-center justify-center pt-2 text-center">
        <div className="flex items-center pb-2 pt-3  gap-2">
          <MdSportsCricket />
          <p className="text-md"> 2nd ODI in Abu Dhabi</p>
        </div>
        <p className="text-[12px] text-gray-300">20 December 2024</p>
        <p className="text-[12px] text-gray-300">10:00 AM</p>
      </div>
      <div className="upcoming--inner-card-bg pb-5 pt-3 w-full rounded-b-primary">
        <div className="flex flex-col gap-4 items-center justify-center pt-2 text-center">
          <div className="flex items-center w-full justify-around pb-5 pt-5 gap-5">
            <Image src={bdFlag} alt="bdFlag" width={50} height={50} />
            <div className="relative w-24 h-24 flex items-center justify-center rounded-full">
              {/* Static VS Text */}
              <div className="absolute text-white text-4xl font-bold z-10">
                VS
              </div>
              {/* Spinning Arc */}
              <motion.div
                className="absolute w-full h-full rounded-full border-8 border-transparent"
                style={{
                  borderTopColor: '#C52EE1', // Purple for the arc
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              ></motion.div>

              {/* Background Circle */}
              <div className="absolute w-full h-full rounded-full border-8 border-gray-400 opacity-30"></div>
            </div>
            <Image src={indiaFlag} alt="indiaFlag" width={50} height={50} />
          </div>
          <div className="flex items-center w-full justify-around gap-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-1.5 min-w-20 bg-white/20 text-sm text-white rounded-md font-[300] shadow-md"
            >
              5.63
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-1.5 min-w-20 bg-secondary text-sm text-white rounded-md font-[300] shadow-md"
            >
              Place a Bet
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-1.5 min-w-20 bg-white/20 text-sm text-white rounded-md font-[300] shadow-md"
            >
              5.63
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpComingMatchCard
