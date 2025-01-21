/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode, MouseEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaXmark } from 'react-icons/fa6'
import element1 from '@/assets/modal/element1.svg'
import element2 from '@/assets/modal/element2.svg'
import element3 from '@/assets/modal/element3.svg'
import element4 from '@/assets/modal/element4.svg'
import element5 from '@/assets/modal/element5.png'
import element6 from '@/assets/modal/element6.svg'
import Image from 'next/image'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  isRegister?: boolean
}

const PrimaryModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className = 'max-w-4xl w-full',
  isRegister
}) => {
  // This function prevents the click event from propagating when clicking inside the modal content
  const handleContainerClick = (e: MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 blur-[1900px] bg-black	 z-40" // Ensure z-40 for the backdrop
            onClick={onClose} // Clicking outside the modal will trigger onClose
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Container */}

          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50" // Ensure z-50 for the modal
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={onClose} // If the container is clicked, the modal will close
          >
            <div className="relative  w-full max-w-5xl ">
              {
                isRegister &&
                <motion.div
                  className="flex flex-col items-center text-center absolute left-0 right-0 -top-28 z-50"
                  initial={{ opacity: 0, translateY: 50 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                >
                  <div className="flex items-center text-6xl font-extrabold">
                    <span className="text-pink-500 italic drop-shadow-[0_0_20px_rgba(250,21,146,0.9)]">
                      35 000
                    </span>
                    <span className="text-pink-500 italic drop-shadow-[0_0_20px_rgba(250,21,146,1)] ml-2">
                      BDT
                    </span>
                  </div>

                  <div className="text-blue-300 italic text-xl font-bold mt-2 drop-shadow-[0_0_20px_rgba(0,88,255,0.7)]">
                    +250 FS for the first deposit
                  </div>
                </motion.div>
              }
              {
                isRegister &&
                <motion.div
                  className="absolute blur-[2px] right-32 -top-28 z-50"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Image src={element1} alt="element1" width={200} height={200} />
                </motion.div>
              }
              {
                isRegister &&
                <motion.div
                  className="absolute blur-[2px] left-5 -top-28 z-50"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Image src={element2} alt="element2" width={200} height={200} />
                </motion.div>
              }
              {
                isRegister &&
                <motion.div
                  className="absolute blur-[2px] left-2 rotate-[80deg] top-10 z-50"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Image src={element1} alt="element3" width={200} height={200} />
                </motion.div>
              }
              {
                isRegister &&
                <motion.div
                  className="absolute -bottom-5 left-20 z-50"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Image src={element3} alt="element4" width={150} height={150} />
                </motion.div>
              }
              {
                isRegister &&
                <motion.div
                  className="absolute left-5 bottom-0 z-50"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <Image src={element4} alt="element5" width={150} height={150} />
                </motion.div>
              }
              {
                isRegister &&
                <motion.div
                  className="absolute -right-20 blur-sm animate-bounce bottom-48 z-50"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <Image src={element4} alt="element5" width={100} height={100} />
                </motion.div>
              }
              {
                isRegister &&
                <motion.div
                  className="absolute -right-10 blur-sm animate-bounce top-10 z-50"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <Image src={element6} alt="element5" width={100} height={100} />
                </motion.div>
              }
              {
                isRegister &&
                <motion.div
                  className="absolute blur-[2px]  -right-20 -bottom-10 z-50"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <Image
                    src={element5}
                    alt="element6"
                    width={300}
                    height={300}
                    className=" rotate-[95deg]"
                  />
                </motion.div>
              }
              <div
                className={`bg-[#34193A]/90 min-h-[28rem] rounded-xl shadow-lg px-6 pt-8 pb-12 mx-auto ${className} relative`} // Updated max-w-lg to max-w-3xl
                onClick={handleContainerClick} // Prevent modal close when clicking inside the modal content
              >
                {/* Close button */}
                <button
                  className="absolute top-2 bg-white/20 text-sm rounded-full p-1 right-2 text-white hover:text-gray-800"
                  onClick={onClose}
                >
                  <FaXmark size={25} />
                </button>

                {/* Modal content */}
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default PrimaryModal
