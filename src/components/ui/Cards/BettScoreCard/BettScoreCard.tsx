'use client'
import React from 'react'
import './style.css'
import Image from 'next/image'
import { BsBookmarkStar, BsFillBookmarkStarFill } from 'react-icons/bs'

interface TeamData {
  name: string
  score: string
}

interface BetOption {
  label: string
  multiplier: string
}

interface CardProps {
  title: string
  eventLocation: string
  team1: TeamData
  team2: TeamData
  betOptions: BetOption[]
  icon: string
  isBookMarked: boolean
}

const BettScoreCard: React.FC<CardProps> = ({
  title,
  team1,
  team2,
  betOptions,
  icon,
  isBookMarked,
}) => {
  return (
    <div className="cardBg border-[1px] border-gray-600/40 py-4 space-y-3 text-white rounded-primary">
      <div className="border-b border-gray-600/40 px-3 pb-3 flex justify-between">
        <Image src={icon} alt="cricket" width={24} height={24} />
        <span>{title}</span>

        {isBookMarked ? (
          <BsFillBookmarkStarFill className="text-yellow-500" size={22} />
        ) : (
          <BsBookmarkStar size={22} />
        )}
      </div>
      <div className="flex items-center px-3 justify-between">
        <span className="lg:text-md text-sm">{team1.name}</span>
        <div className="rounded-primary font-[300] flex items-center justify-between px-2.5 py-2  lg:text-sm text-xs bg-white/20 shadow border border-white/10">
          {team1.score}
        </div>
      </div>
      <div className="flex items-center px-3 justify-between">
        <span className="lg:text-md text-sm">{team2.name}</span>
        <div className="rounded-primary font-[300] flex items-center justify-between px-2.5 py-2  lg:text-sm text-xs bg-white/20 shadow border border-white/10">
          {team2.score}
        </div>
      </div>
      <div className="flex gap-2 px-3 justify-between items-center">
        {betOptions.map((option, index) => (
          <div
            key={index}
            className="rounded-primary w-full font-[300] flex items-center justify-between px-2.5 py-2  lg:text-sm text-xs bg-white/20 shadow border border-white/10"
          >
            <span>{option.label}</span>
            <span>{option.multiplier}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BettScoreCard
