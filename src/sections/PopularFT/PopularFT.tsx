import MatchCard from '@/components/ui/Cards/MatchCard/MatchCard'
import React from 'react'
import manCityLogo from '@/assets/demo/man_city_logo.jpg' // Placeholder for actual image
import barcaLogo from '@/assets/demo/barca_logo.jpg' // Placeholder for actual image

const PopularFT = () => {
  return (
    <div className="grid md:grid-cols-1 grid-cols-1 col-span-2 gap-4 bg-[#290d2f] drop-shadow-sm border shadow p-3 border-white/10 rounded-lg">
      <MatchCard
        matchTitle="Football, UEFA Champions League, Women"
        team1Logo={manCityLogo}
        team1Name="Manchester City (WOMEN)"
        team2Logo={barcaLogo}
        team2Name="FC Barcelona (WOMEN)"
        matchDate="10.10"
        matchTime="01:00"
        oddsTeam1="5.63"
        oddsTeam2="1.46"
      />
      <MatchCard
        matchTitle="Football, UEFA Champions League, Women"
        team1Logo={manCityLogo}
        team1Name="Manchester City (WOMEN)"
        team2Logo={barcaLogo}
        team2Name="FC Barcelona (WOMEN)"
        matchDate="10.10"
        matchTime="01:00"
        oddsTeam1="5.63"
        oddsTeam2="1.46"
      />
      <MatchCard
        matchTitle="Football, UEFA Champions League, Women"
        team1Logo={manCityLogo}
        team1Name="Manchester City (WOMEN)"
        team2Logo={barcaLogo}
        team2Name="FC Barcelona (WOMEN)"
        matchDate="10.10"
        matchTime="01:00"
        oddsTeam1="5.63"
        oddsTeam2="1.46"
      />
    </div>
  )
}

export default PopularFT
