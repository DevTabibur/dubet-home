import React from 'react'
import MatchStateCard from '../ui/Cards/MatchStateCard/MatchStateCard'
import { MdSportsCricket } from 'react-icons/md'
import { IoFootball } from 'react-icons/io5'

const PageStateCards = () => {
  return (
    <section className="py-4 space-y-9">
      <section>
        <div className="pb-3 flex items-center gap-3 text-white">
          <MdSportsCricket size={25} />
          <h1 className="text-xl">World Cup. 2026. Qualification</h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <MatchStateCard
            team1="Pakistan"
            team2="England"
            score1="356/10 (50)"
            score2="232/2 (40.1)"
            winPercentage1="40%"
            winPercentage2="60%"
            odds1="2.5"
            oddsDraw="25"
            odds2="1.3"
            starred={true}
          />
          <MatchStateCard
            team1="Pakistan"
            team2="England"
            score1="356/10 (50)"
            score2="232/2 (40.1)"
            winPercentage1="40%"
            winPercentage2="60%"
            odds1="2.5"
            oddsDraw="25"
            odds2="1.3"
            starred={false}
          />
        </div>
      </section>
      <section>
        <div className="pb-3 flex items-center gap-3 text-white">
          <IoFootball size={25} />
          <h1 className="text-xl">UEFA Champions League</h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <MatchStateCard
            team1="Pakistan"
            team2="England"
            score1="356/10 (50)"
            score2="232/2 (40.1)"
            winPercentage1="40%"
            winPercentage2="60%"
            odds1="2.5"
            oddsDraw="25"
            odds2="1.3"
            starred={false}
          />
          <MatchStateCard
            team1="Pakistan"
            team2="England"
            score1="356/10 (50)"
            score2="232/2 (40.1)"
            winPercentage1="40%"
            winPercentage2="60%"
            odds1="2.5"
            oddsDraw="25"
            odds2="1.3"
            starred={false}
          />
          <MatchStateCard
            team1="Pakistan"
            team2="England"
            score1="356/10 (50)"
            score2="232/2 (40.1)"
            winPercentage1="40%"
            winPercentage2="60%"
            odds1="2.5"
            oddsDraw="25"
            odds2="1.3"
            starred={true}
          />
          <MatchStateCard
            team1="Pakistan"
            team2="England"
            score1="356/10 (50)"
            score2="232/2 (40.1)"
            winPercentage1="40%"
            winPercentage2="60%"
            odds1="2.5"
            oddsDraw="25"
            odds2="1.3"
            starred={true}
          />
        </div>
      </section>
      <section>
        <div className="pb-3 flex items-center gap-3 text-white">
          <MdSportsCricket size={25} />
          <h1 className="text-xl">World Cup. 2026. Qualification</h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <MatchStateCard
            team1="Pakistan"
            team2="England"
            score1="356/10 (50)"
            score2="232/2 (40.1)"
            winPercentage1="40%"
            winPercentage2="60%"
            odds1="2.5"
            oddsDraw="25"
            odds2="1.3"
            starred={true}
          />
          <MatchStateCard
            team1="Pakistan"
            team2="England"
            score1="356/10 (50)"
            score2="232/2 (40.1)"
            winPercentage1="40%"
            winPercentage2="60%"
            odds1="2.5"
            oddsDraw="25"
            odds2="1.3"
            starred={true}
          />
        </div>
      </section>
      <section>
        <div className="pb-3 flex items-center gap-3 text-white">
          <IoFootball size={25} />
          <h1 className="text-xl">UEFA Champions League</h1>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <MatchStateCard
            team1="Pakistan"
            team2="England"
            score1="356/10 (50)"
            score2="232/2 (40.1)"
            winPercentage1="40%"
            winPercentage2="60%"
            odds1="2.5"
            oddsDraw="25"
            odds2="1.3"
            starred={true}
          />
          <MatchStateCard
            team1="Pakistan"
            team2="England"
            score1="356/10 (50)"
            score2="232/2 (40.1)"
            winPercentage1="40%"
            winPercentage2="60%"
            odds1="2.5"
            oddsDraw="25"
            odds2="1.3"
            starred={false}
          />
          <MatchStateCard
            team1="Pakistan"
            team2="England"
            score1="356/10 (50)"
            score2="232/2 (40.1)"
            winPercentage1="40%"
            winPercentage2="60%"
            odds1="2.5"
            oddsDraw="25"
            odds2="1.3"
            starred={true}
          />
          <MatchStateCard
            team1="Pakistan"
            team2="England"
            score1="356/10 (50)"
            score2="232/2 (40.1)"
            winPercentage1="40%"
            winPercentage2="60%"
            odds1="2.5"
            oddsDraw="25"
            odds2="1.3"
            starred={false}
          />
        </div>
      </section>
    </section>
  )
}

export default PageStateCards
