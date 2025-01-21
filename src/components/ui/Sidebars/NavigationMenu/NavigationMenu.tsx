/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import * as React from 'react'
import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from '@/hooks/use-dimensions'
import {
  casinoChips,
  favorite,
  football,
  giftBox,
  liveBetting,
  liveCasino,
} from '@/assets/svg'
import { IQuicLinkProps } from '@/interface/quickLinks'
import Image from 'next/image'

// Updated unique class names
import './style.css'
import { HeaderTopMenuLink } from '@/constants/headerTop'
import FancyButton from '../../Buttons/FancyButton/FancyButton'
import LanguageSwitcher from '@/components/LanguageSwitcher'

// Path component for the hamburger menu icon
const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

const MenuToggle = ({ toggle }: any) => (
  <button
    onClick={toggle}
    className="navigationmenu-button-toggle-unique flex items-center justify-center"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
        stroke="#FFFFFF"
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        stroke="#FFFFFF"
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
        stroke="#FFFFFF"
      />
    </svg>
  </button>
)

// Variants for animation
const menuVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

// QuickLinks data
export const quickLinks: IQuicLinkProps[] = [
  { id: '1', title: 'Sports Betting', icon: football, href: '/sports-betting' },
  { id: '2', title: 'Live Betting', icon: liveBetting, href: '/live-betting' },
  { id: '3', title: 'Favorites', icon: favorite, href: '/favorites' },
  { id: '4', title: 'Casino', icon: casinoChips, href: '/casino' },
  { id: '5', title: 'Live Casino', icon: liveCasino, href: '/live-casino' },
  { id: '6', title: 'Promotions', icon: giftBox, href: '/promotions' },
]

// Mapping quickLinks into the navigation
const MenuItem = ({ link }: any) => (
  <motion.li
    className="navigationmenu-item-unique w-full flex group items-center justify-start gap-6"
    variants={menuVariants}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {/* Icon with hover border effect */}
    <div className="relative p-2 rounded-full border-2 border-transparent transition-all group-hover:border-white">
      <Image width={25} height={25} src={link.icon} alt={link.title} />
    </div>
    <a
      href={link.href}
      className="text-white relative group" // Group class for hover effect control
    >
      {link.title}
      {/* Underline animation */}
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
    </a>
  </motion.li>
)

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

const Navigation = () => (
  <motion.ul
    className="navigationmenu-list-unique px-6 py-28 items-start w-full flex flex-col gap-10"
    variants={variants}
  >
    {HeaderTopMenuLink.map((link) => (
      <MenuItem key={link.id} link={link} />
    ))}

    <motion.li
      variants={menuVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="navigationmenu-item-unique flex  gap-3 items-center"
    >
      <FancyButton>Login</FancyButton>
      <FancyButton>Registration</FancyButton>
    </motion.li>
    <motion.li
      variants={menuVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="navigationmenu-item-unique flex  gap-3 items-center"
    >
      <LanguageSwitcher />
    </motion.li>
  </motion.ul>
)

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at calc(100% - 40px) 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

const NavigationMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  const handleOutsideClick = () => {
    if (isOpen) {
      toggleOpen() // Close sidebar when clicking outside
    }
  }

  return (
    <div className="ml-9">
      {isOpen && (
        // Overlay with background black/20
        <div
          className={`fixed inset-0 bg-black/20 `}
          onClick={handleOutsideClick}
        ></div>
      )}

      <motion.nav
        className={`navigationmenu-nav-unique ${isOpen && `!z-50`}`}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        {/* Updated animated background with gradient */}
        <motion.div
          className="navigationmenu-background-unique bg-gradient-to-tl from-[#8b259e] from-5% via-[#7a238b] via-10% to-[#341939] to-60% "
          variants={sidebar}
        />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  )
}

export default NavigationMenu
