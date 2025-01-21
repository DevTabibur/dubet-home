// Card.tsx
import React from 'react'
import { FaChartBar, FaRegStar, FaStar } from 'react-icons/fa'

interface CardProps {
  team1: string
  team2: string
  score1: string
  score2: string
  winPercentage1: string
  winPercentage2: string
  odds1: string
  oddsDraw: string
  odds2: string
  starred?: boolean
}

const MatchStateCard: React.FC<CardProps> = ({
  team1,
  team2,
  score1,
  score2,
  winPercentage1,
  winPercentage2,
  odds1,
  oddsDraw,
  odds2,
  starred = false,
}) => {
  return (
    <div className="bg-gray-400/10 shadow shadow-gray-300/10 text-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-4 md:gap-1 justify-between w-full">
      {/* Team Information */}
      <div className="flex flex-col items-center md:items-start justify-between h-full gap-2 md:gap-1">
        <div>
          <p className="text-lg  font-[500]">{team1}</p>
        </div>
        <div>
          <p className="text-xl opacity-75">vs</p>
        </div>
        <div>
          <p className="text-lg  font-[500]">{team2}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 text-center text-sm w-full md:w-auto">
        <div className="bg-gray-400/10 shadow shadow-white/10 py-2 px-3 rounded">
          {score1}
        </div>
        <div className="bg-gray-400/10 shadow shadow-white/10 py-2 px-3 rounded">
          W% {winPercentage1}
        </div>
        <div className="bg-gray-400/10 shadow shadow-white/10 py-2 px-3 rounded">
          T1 {odds1}
        </div>

        <div className="bg-gray-400/10 shadow shadow-white/10 py-2 px-3 rounded">
          X
        </div>
        <div className="bg-gray-400/10 shadow shadow-white/10 py-2 px-3 rounded">
          Draw
        </div>
        <div className="bg-gray-400/10 shadow shadow-white/10 py-2 px-3 rounded">
          {oddsDraw}
        </div>

        <div className="bg-gray-400/10 shadow shadow-white/10 py-2 px-3 rounded">
          {score2}
        </div>
        <div className="bg-gray-400/10 shadow shadow-white/10 py-2 px-3 rounded">
          W% {winPercentage2}
        </div>
        <div className="bg-gray-400/10 shadow shadow-white/10 py-2 px-3 rounded">
          T2 {odds2}
        </div>
      </div>

      {/* Icons */}
      <div className="flex flex-row md:flex-col items-center md:items-end justify-end h-full gap-2">
        {starred ? (
          <div className="bg-gray-400/10 shadow shadow-white/10 h-full w-fit  flex items-center justify-center rounded-md p-2 md:p-3">
            <FaStar size={20} className="text-yellow-500" />
          </div>
        ) : (
          <div className="bg-gray-400/10 shadow shadow-white/10 h-full w-fit  flex items-center justify-center rounded-md p-2 md:p-3">
            <FaRegStar size={20} className="text-white" />
          </div>
        )}
        <div className="p-2" />
        <div className="bg-gray-400/10 shadow shadow-white/10 h-full w-fit flex items-center justify-center  rounded-md p-2 md:p-3">
          <FaChartBar size={20} className="text-white" />
        </div>
      </div>
    </div>
  )
}

export default MatchStateCard
