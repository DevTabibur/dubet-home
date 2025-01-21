import React from 'react'
import MatchInfoCard from '@/components/ui/Cards/MatchInfoCard/MatchInfoCard'

const OtherBetting = () => {
  return (
    <section className="py-5">
      <h1 className="mb-10 text-white text-3xl font-semibold">Other Betting</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 py-3">
        <MatchInfoCard
          team1={{ name: 'Pakistan', score: '356/10 (50)', odds: '2.5x' }}
          team2={{ name: 'England', score: '232/2 (40.1)', odds: '3.5x' }}
        />
        <MatchInfoCard
          team1={{ name: 'Pakistan', score: '356/10 (50)', odds: '2.5x' }}
          team2={{ name: 'England', score: '232/2 (40.1)', odds: '3.5x' }}
        />
        <MatchInfoCard
          team1={{ name: 'Pakistan', score: '356/10 (50)', odds: '2.5x' }}
          team2={{ name: 'England', score: '232/2 (40.1)', odds: '3.5x' }}
        />
        <MatchInfoCard
          team1={{ name: 'Pakistan', score: '356/10 (50)', odds: '2.5x' }}
          team2={{ name: 'England', score: '232/2 (40.1)', odds: '3.5x' }}
        />
        <MatchInfoCard
          team1={{ name: 'Pakistan', score: '356/10 (50)', odds: '2.5x' }}
          team2={{ name: 'England', score: '232/2 (40.1)', odds: '3.5x' }}
        />
        <MatchInfoCard
          team1={{ name: 'Pakistan', score: '356/10 (50)', odds: '2.5x' }}
          team2={{ name: 'England', score: '232/2 (40.1)', odds: '3.5x' }}
        />
      </div>
    </section>
  )
}

export default OtherBetting
