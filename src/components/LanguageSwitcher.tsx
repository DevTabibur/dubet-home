/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { flags } from '@/constants/LanguageSwitcher'
import Image from 'next/image'
import { arrowDown, uaeFlag } from '@/assets/svg'
import { useLanguage } from '@/context/LanguageContext'

// Helper functions to manage localStorage safely
export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === 'undefined') {
    return ''
  }
  return localStorage.setItem(key, token)
}

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === 'undefined') {
    return ''
  }
  return localStorage.getItem(key)
}

const LanguageSwitcher = () => {
  const { setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null) // Ref to track the dropdown

  // Default selected flag (for UAE)
  const defaultFlag = {
    code: 'UAE',
    icon: uaeFlag,
  }

  // Load saved flag and language from localStorage, default to UAE if none found
  const [selectedFlag, setSelectedFlag] = useState(() => {
    const savedFlag = getFromLocalStorage('selectedFlag')
    return savedFlag ? JSON.parse(savedFlag) : defaultFlag
  })

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev)
  }

  const handleFlagSelect = (flag: any) => {
    setSelectedFlag(flag)
    setLanguage(flag.code.toLowerCase())
    setIsOpen(false) // Close the dropdown after selection

    // Save selected flag and language to localStorage
    setToLocalStorage('selectedFlag', JSON.stringify(flag))
    setToLocalStorage('lang', flag.code.toLowerCase())
  }

  useEffect(() => {
    // Retrieve and set the language from localStorage (if it exists) on mount
    const savedLang = getFromLocalStorage('lang')
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [setLanguage])

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false) // Close the dropdown if clicked outside
      }
    }

    // Add event listener for clicking outside
    document.addEventListener('mousedown', handleClickOutside)

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative flex items-center text-white" ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        className="flex items-center gap-2 justify-center cursor-pointer bg-[#453148] px-7 py-1.5 rounded-md"
      >
        <Image
          src={selectedFlag.icon}
          alt={`${selectedFlag.code} Flag`}
          width={15}
          height={15}
        />
        <span className="text-sm">{selectedFlag.code}</span>
        <Image
          src={arrowDown.src}
          alt={`arrow_down_svg`}
          width={15}
          height={15}
        />
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Start from the bottom
          animate={{ opacity: 1, y: 0 }} // Move to its final position
          exit={{ opacity: 0, y: 20 }} // Exit to the bottom
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 !z-50 mt-3 border border-white/10 bg-[#1e0024] rounded shadow-lg w-full"
        >
          <div className="grid grid-cols-1 gap-2">
            {flags.map((flag) => (
              <div
                key={flag.code}
                onClick={() => handleFlagSelect(flag)}
                className="flex items-center justify-center gap-4 cursor-pointer transition-all duration-400 p-2 px-6 hover:bg-gray-400/20 rounded"
              >
                <Image
                  src={flag.icon as any}
                  alt={`${flag.code} Flag`}
                  width={20}
                  height={20}
                />
                <span>{flag.code}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default LanguageSwitcher
