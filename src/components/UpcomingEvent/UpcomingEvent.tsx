import BetSlip from '../ui/BetSlip/BetSlip'
import HomeWrapper from '../wrapper/HomeWrapper'
import Image from 'next/image'
import upcomingEventBannerImage from '@/assets/demo/upcoming-event-banner.png'
import EventMenuButtons from './EventMenuButtons'
import { BatBall_1 } from '@/assets/svg'
import SportsCard from '../SportsCard/SportsCard'
import football from '@/assets/demo/football-1.png'
import basketball from '@/assets/demo/basketball-1.png'
import shuttleCock from '@/assets/demo/shuttlecock-1.png'

const UpcomingEvent = () => {
  return (
    <>
      <HomeWrapper>
        <section className="flex lg:flex-row md:flex-col-reverse gap-5 md:items-start mb-6 lg:mb-10">
          <section className="lg:w-[25%] md:w-[100%] lg:block hidden">
            <div className="max-w-sm">
              <BetSlip />
            </div>
          </section>
          <section className="lg:w-[75%] md:w-[100%] w-full space-y-5">
            <Image
              src={upcomingEventBannerImage}
              alt="upcoming-event-banner.png"
              quality={100}
              width={2000}
              height={900}
              className="w-full h-fit "
            />
            <div className="p-4  flex items-center justify-between shadow-lg rounded-md border border-[#5D4761] bg-[#34193A]">
              <EventMenuButtons />
            </div>
          </section>
        </section>

        {/* cards section */}
        <section className="">
          {/* World Cup. 2026. Qualification */}
          <div className="flex items-center mb-4">
            <Image
              src={BatBall_1.src as string}
              alt="bat_ball"
              width={20}
              height={20}
            />
            <h1 className="text-white text-[32px] ml-4">
              World Cup. 2026. Qualification
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {[0, 1, 2, 3, 4, 5].map(() => {
              // eslint-disable-next-line react/jsx-key
              return <SportsCard />
            })}
          </div>

          {/* football */}
          <div className="flex items-center mb-4 mt-8">
            <Image
              src={football.src as string}
              alt="bat_ball"
              width={20}
              height={20}
            />
            <h1 className="text-white text-[32px] ml-4">
              UEFA Champions League
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {[0, 1, 2, 3, 4, 5].map(() => {
              // eslint-disable-next-line react/jsx-key
              return <SportsCard />
            })}
          </div>
          {/* nba united leage */}
          <div className="flex items-center mb-4 mt-8">
            <Image
              src={basketball.src as string}
              alt="bat_ball"
              width={20}
              height={20}
            />
            <h1 className="text-white text-[32px] ml-4">NBA United League </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {[0, 1, 2, 3, 4, 5].map(() => {
              // eslint-disable-next-line react/jsx-key
              return <SportsCard />
            })}
          </div>
          {/* Dutch Open, Doubles */}
          <div className="flex items-center mb-4 mt-8">
            <Image
              src={shuttleCock.src as string}
              alt="bat_ball"
              width={20}
              height={20}
            />
            <h1 className="text-white text-[32px] ml-4">
              Dutch Open, Doubles{' '}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {[0, 1, 2, 3, 4, 5].map(() => {
              // eslint-disable-next-line react/jsx-key
              return <SportsCard />
            })}
          </div>
        </section>
      </HomeWrapper>
    </>
  )
}

export default UpcomingEvent
