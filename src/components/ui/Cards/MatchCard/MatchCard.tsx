import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface MatchCardProps {
  matchTitle: string
  team1Logo: StaticImageData
  team1Name: string
  team2Logo: StaticImageData
  team2Name: string
  matchDate: string
  matchTime: string
  oddsTeam1: string
  oddsTeam2: string
}

const MatchCard: React.FC<MatchCardProps> = ({
  matchTitle,
  team1Logo,
  team1Name,
  team2Logo,
  team2Name,
  matchDate,
  matchTime,
  oddsTeam1,
  oddsTeam2,
}) => {
  return (
    <div className="bg-gradient-to-br from-[#8b259e] from-5% via-[#7a238b] via-10% to-[#341939] to-40% rounded-xl relative space-y-5 py-6 overflow-hidden">
      <h2 className="text-center border-b border-gray-200/20 z-50 text-white lg:text-md text-sm px-3 font-semibold pb-4">
        {matchTitle}
      </h2>
      <div className="flex justify-between items-center text-white px-5">
        <div className="text-start lg:text-xs text-[10px] items-start flex flex-col gap-4">
          <Image
            src={team1Logo}
            alt={`${team1Name} Logo`}
            width={60}
            height={60}
            className="rounded-full lg:w-auto w-12"
          />
          <p>{team1Name}</p>
        </div>
        <div className="text-center text-xs items-center flex flex-col gap-4">
          <span className="text-5xl font-semibold text-gray-500">VS</span>
          <div>
            <p className="text-lg font-semibold">{matchDate}</p>
            <p className="text-sm">{matchTime}</p>
          </div>
        </div>
        <div className="text-end lg:text-xs text-[10px] items-end flex flex-col gap-4">
          <Image
            src={team2Logo}
            alt={`${team2Name} Logo`}
            width={60}
            height={60}
            className="rounded-full lg:w-auto w-12"
          />
          <p>{team2Name}</p>
        </div>
      </div>

      <div className="flex justify-between gap-3 items-center px-5">
        <div className="lg:rounded-primary rounded-md lg:py-3 py-1.5 px-3  text-xs bg-white/20 text-white">
          <p>{oddsTeam1}</p>
        </div>
        <button className="bg-[#FD0053] max-w-32 w-full text-center text-white text-sm font-bold g:py-3 py-1.5 px-3 rounded-lg">
          Place a Bet
        </button>
        <div className="lg:rounded-primary rounded-md lg:py-3 py-1.5 px-3  text-xs bg-white/20 text-white">
          <p>{oddsTeam2}</p>
        </div>
      </div>
    </div>
  )
}

export default MatchCard
