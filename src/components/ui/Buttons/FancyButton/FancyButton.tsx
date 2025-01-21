'use client'
import React, { ReactNode } from 'react'
import './FancyButton.css' // Import custom CSS for stars and glow effect
import cn from '@/utils/cn'
import { motion } from 'framer-motion'

interface FancyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode // Optional children prop to allow dynamic content inside the button
  className?: string
  isSmock?: boolean
}

const FancyButton: React.FC<FancyButtonProps> = ({
  children,
  className,
  isSmock = true,
  ...props
}) => {
  return (
    <button
      {...props} // Spread all additional props, including onClick
      className={cn(
        'fancy-button border-t border-x flex items-center justify-center border-white/60 overflow-hidden transition-all duration-500 relative w-full rounded-full py-2 px-6 min-w-36 text-white bg-black shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-400 transition-all',
        // Increased shadow intensity for hover state
        'hover:shadow-[0_6px_40px_rgba(93,36,99,0.7),0_0_20px_rgba(29,78,216,0.7),0_0_30px_rgba(192,38,211,0.8)]',
        className
      )}
    >
      {/* Star Effects */}
      <div className="stars absolute -top-3 -rotate-[30deg] -left-3 w-14 h-8"></div>
      {isSmock && (
        <div className="flex items-center absolute bottom-0 h-[50%] w-[50%]">
          <motion.div
            className="bg-gradient-to-br from-blue-700/50 from-20% via-blue-700 to-blue-700 rounded-tl-full to-90% w-full h-full opacity-60 filter brightness-150 blur-sm shadow-[0_6px_40px_rgba(29,78,216,0.7),0_0_20px_rgba(29,78,216,0.7),0_0_30px_rgba(29,78,216,0.7)]"
            animate={{ x: [-10, 10], y: [-10, 10] }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />

          <motion.div
            className="bg-gradient-to-br from-[rgba(192,38,211,0.8)]/50 from-20% via-[rgba(192,38,211,0.8)] to-[rgba(192,38,211,0.8)] rounded-tr-full to-90% w-full h-full opacity-60 filter brightness-150 blur-sm shadow-[0_6px_40px_rgba(192,38,211,0.8),0_0_20px_rgba(192,38,211,0.8),0_0_30px_rgba(192,38,211,0.8)]"
            animate={{ x: [10, -10], y: [10, -10] }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />
        </div>
      )}

      <span className="relative z-10">{children}</span>

      {/* Glow Effect */}
      <div className="glow absolute top-2 -right-1 w-2 h-2 z-50 bg-white rounded-full opacity-70"></div>
    </button>
  )
}

export default FancyButton
