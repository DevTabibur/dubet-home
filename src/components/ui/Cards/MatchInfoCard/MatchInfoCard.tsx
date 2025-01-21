import React from 'react'

interface TeamData {
  name: string
  score: string
  odds: string
}

interface MatchInfoProps {
  team1: TeamData
  team2: TeamData
}

const MatchInfoCard: React.FC<MatchInfoProps> = ({ team1, team2 }) => {
  return (
    <div className="w-full p-4 flex flex-col text-white gap-4 transition-all shadow-md duration-800 bg-gradient-to-l from-[#341939] to-fuchsia-950 rounded-lg border hover:border-transparent border-white/20 animate-border hover:[background:linear-gradient(45deg,#341939,theme(colors.fuchsia.950)_20%,#341939)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.gray.600/.48)_80%,_theme(colors.red.500)_86%,_theme(colors.purple.900)_90%,_theme(colors.pink.500)_94%,_theme(colors.blue.900/.48))_border-box]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-white lg:text-lg text-sm">{team1.name}</span>
          <div className="lg:rounded-primary rounded-md lg:p-3 p-1.5 text-xs bg-white/10">
            {team1.score}
          </div>
        </div>
        <div className="lg:rounded-primary rounded-md lg:p-3 p-1.5 text-xs bg-white/10">
          {team1.odds}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-white lg:text-lg text-sm">{team2.name}</span>
          <div className="lg:rounded-primary rounded-md lg:p-3 p-1.5 text-xs bg-white/10">
            {team2.score}
          </div>
        </div>
        <div className="lg:rounded-primary rounded-md lg:p-3 p-1.5 text-xs bg-white/10">
          {team2.odds}
        </div>
      </div>
    </div>
  )
}

export default MatchInfoCard
