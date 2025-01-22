/* eslint-disable @typescript-eslint/no-explicit-any */
//!=====================================================>>>

import CricketSportsCard from '@/components/AllSportsCard/CricketSportsCard'
import BatBall from '../../assets/sportsCard/svg/batBall.svg'
import Image from 'next/image'
import BetSlip from '@/components/ui/BetSlip/BetSlip'
import PopularCasino from '@/sections/PopularCasino/PopularCasino'
import MatchCard from '@/components/ui/Cards/MatchCard/MatchCard'
import manCityLogo from '@/assets/demo/man_city_logo.jpg' // Placeholder for actual image
import barcaLogo from '@/assets/demo/barca_logo.jpg'
import HomeWrapper from '@/components/wrapper/HomeWrapper'
import { football } from '@/assets/svg'
import FootballSportsCard from '@/components/AllSportsCard/FootballSportsCard'
// import FootballSportsCard from '@/components/AllSportsCard/FootballSportsCard'

interface Team {
  name: string
  score: string
  winPercentage: string
  t1: string
}

// Interface for sports data
interface SportsData {
  id: string
  teams: Team[]
}

// Example sports data array
const sportsData: SportsData[] = [
  {
    id: '1',
    teams: [
      {
        name: 'Pakistan',
        score: '356/10 (50)',
        winPercentage: '40%',
        t1: '2.5',
      },
      {
        name: 'England',
        score: '356/10 (50)',
        winPercentage: '40%',
        t1: '2.5',
      },
    ],
  },
]

const sportsData2: SportsData[] = [
  {
    id: '1',
    teams: [
      {
        name: 'Atlanta',
        score: '356/10 (50)',
        winPercentage: '40%',
        t1: '2.5',
      },
      {
        name: 'Celtic',
        score: '356/10 (50)',
        winPercentage: '40%',
        t1: '2.5',
      },
    ],
  },
]

//!================================================================================>>>
const AllSportsPage = () => {
  return (
    <>
      <HomeWrapper>
        <section className="flex lg:flex-row md:flex-col-reverse gap-5 md:items-start">
          <section className="lg:w-[25%] md:w-[100%] lg:block hidden">
            <div className="max-w-md">
              <BetSlip />
              <PopularCasino />
              <div className="mb-4">
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
              <div className="mb-4">
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
            </div>
          </section>

          <section className="lg:w-[75%] md:w-[100%] w-full">
            {/* first row */}
            <div className="flex items-center mb-4">
              <Image
                src={BatBall.src as any}
                alt="bat_ball"
                width={20}
                height={20}
              />
              <h1 className="text-white text-[32px] ml-4">
                World Cup. 2026. Qualification
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <CricketSportsCard sportsData={sportsData} />
              <CricketSportsCard sportsData={sportsData} />
              <CricketSportsCard sportsData={sportsData} />
              <CricketSportsCard sportsData={sportsData} />
            </div>

            {/* end of first row */}

            {/* second row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center my-4">
                  <Image
                    src={football.src as any}
                    alt="bat_ball"
                    width={20}
                    height={20}
                  />
                  <h1 className="text-white text-[32px] ml-4">
                    UEFA Champions League
                  </h1>
                </div>
                <div className="mb-4">
                  <FootballSportsCard sportsData={sportsData2} />
                </div>
                <FootballSportsCard sportsData={sportsData2} />
              </div>

              <div>
                <div className="flex items-center my-4">
                  <Image
                    src={football.src as any}
                    alt="bat_ball"
                    width={20}
                    height={20}
                  />
                  <h1 className="text-white text-[32px] ml-4">
                    UEFA Champions League
                  </h1>
                </div>
                <div className="mb-4">
                  <FootballSportsCard sportsData={sportsData2} />
                </div>

                <FootballSportsCard sportsData={sportsData2} />
              </div>
            </div>
            {/* end of second row */}

            {/* 3rd row */}
            <div className="flex items-center my-4">
              <Image
                src={BatBall.src as any}
                alt="bat_ball"
                width={20}
                height={20}
              />
              <h1 className="text-white text-[32px] ml-4">
                World Cup. 2026. Qualification
              </h1>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <CricketSportsCard sportsData={sportsData} />
              <CricketSportsCard sportsData={sportsData} />
              <CricketSportsCard sportsData={sportsData} />
              <CricketSportsCard sportsData={sportsData} />
            </div>
            {/* end of 3rd row */}

            {/* 4th row */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center my-4">
                  <Image
                    src={football.src as any}
                    alt="bat_ball"
                    width={20}
                    height={20}
                  />
                  <h1 className="text-white text-[32px] ml-4">
                    UEFA Champions League
                  </h1>
                </div>
                <div className="mb-4">
                  <FootballSportsCard sportsData={sportsData2} />
                </div>

                <FootballSportsCard sportsData={sportsData2} />
              </div>

              <div>
                <div className="flex items-center my-4">
                  <Image
                    src={football.src as any}
                    alt="bat_ball"
                    width={20}
                    height={20}
                  />
                  <h1 className="text-white text-[32px] ml-4">
                    UEFA Champions League
                  </h1>
                </div>
                <div className="mb-4">
                  <FootballSportsCard sportsData={sportsData2} />
                </div>

                <FootballSportsCard sportsData={sportsData2} />
              </div>
            </div>
            {/* end of 4th row */}
          </section>
        </section>
      </HomeWrapper>
    </>
  )
}

export default AllSportsPage
